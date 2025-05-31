import pandas as pd

# Function to normalize ratings within FIFA-style bounds (40-99)
def normalize_rating(value, min_val=40, max_val=99):
    return min(max(round(value), min_val), max_val)

# Function to calculate player ratings based on stats & position
def calculate_ratings(player, position, team_goals_conceded):
    # Scale the impact of team goals conceded (35-135 range)
    defense_penalty = (team_goals_conceded - 35) / 10  # Scaled effect (0-10)
    physicality_penalty = (team_goals_conceded - 35) / 15  # Slightly lower impact (0-6.67)

    # Adjusted formulas considering goal & assist range (0-44)
    pace = normalize_rating(player["matches"] * 0.45 + player["goals"] * 0.25 + 50)
    shooting = normalize_rating(player["goals"] * 1.4 + player["assists"] * 0.3 + 50)  # Lowered for balance
    passing = normalize_rating(player["assists"] * 1.7 + player["goals"] * 0.2 + 50)  # Adjusted for assist range
    dribbling = normalize_rating(player["goals"] * 0.7 + player["assists"] * 0.5 + 50)
    defending = normalize_rating(player["yellow_cards"] * -4.5 + player["red_cards"] * -9 + 70 - defense_penalty)
    physicality = normalize_rating(player["matches"] * 0.35 + player["yellow_cards"] * -2.8 + 60 - physicality_penalty)

    base_stats = {
        "pace": pace,
        "shooting": shooting,
        "passing": passing,
        "dribbling": dribbling,
        "defending": defending,
        "physical": physicality,
    }

    # Adjust overall rating based on position categories
    if position in ["Striker", "Forward", "Center Forward"]:
        overall = normalize_rating(pace * 0.3 + shooting * 0.35 + dribbling * 0.2 + physicality * 0.15)
    elif position in ["Midfielder", "Attacking Midfielder", "Defensive Midfielder", "Goalkeeper/Midfielder"]:
        overall = normalize_rating(passing * 0.4 + dribbling * 0.3 + physicality * 0.2 + defending * 0.1)
    elif position in ["Defender"]:
        overall = normalize_rating(defending * 0.4 + physicality * 0.3 + pace * 0.2 + passing * 0.1)
    elif position == "Goalkeeper":
        overall = normalize_rating(player["matches"] * 0.5 + player["red_cards"] * -10 + 70 - defense_penalty * 1.5)  # Goalkeepers have higher impact
    else:
        overall = normalize_rating(sum(base_stats.values()) / len(base_stats))

    base_stats["overall"] = overall
    return base_stats


df = pd.read_excel("player_stats.xlsx")

rating_columns = ["pace", "shooting", "passing", "dribbling", "defending", "physical", "overall"]
for col in rating_columns:
    df[col] = None  # Initialize columns

for idx, row in df.iterrows():
    player_data = {
        "matches": row["matches"],
        "goals": row["goals"],
        "assists": row["assists"],
        "yellow_cards": row["yellow_cards"],
        "red_cards": row["red_cards"],
    }
    pos = row["position"]
    team_goals_conceded = row["team_goals_conceded"]
    ratings = calculate_ratings(player_data, pos, team_goals_conceded)
    for stat, value in ratings.items():
        df.at[idx, stat] = value

cols = list(df.columns)
for col in rating_columns:
    cols.remove(col)
df = df[cols + rating_columns]

df.to_csv("player_ratings.csv", index=False)

print("Ratings calculated and exported to 'player_ratings.csv'.")
