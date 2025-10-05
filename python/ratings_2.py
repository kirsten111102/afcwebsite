import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import numpy as np

def fifa_six_stats(df):
    matches = df['matches'].replace(0,1)
    team_matches = df['team_total_matches'].replace(0,1)

    # Per-match stats
    gpm = df['goals'] / matches
    apm = df['assists'] / matches
    cspm = df['clean_sheets'] / matches
    mvppm = df['MVPs'] / matches
    participation = matches / team_matches
    cards = (df['yellow_cards'] + 2*df['red_cards']) / matches

    team_conceded_rate = df['team_goals_conceded'] / team_matches
    max_conceded_rate = team_conceded_rate.max()
    def_eff = 1 - (team_conceded_rate / max_conceded_rate)

    # Build raw attributes
    df['PAC'] = participation + 0.2*mvppm
    df['SHO'] = gpm + 0.1*mvppm
    df['PAS'] = apm + 0.1*mvppm
    df['DRI'] = (gpm + apm)/2 + 0.1*mvppm
    df['DEF'] = cspm + 0.5*def_eff - 0.2*cards
    df['PHY'] = participation - 0.1*cards

    # Scale each attribute to FIFA 30–99
    scaler = MinMaxScaler(feature_range=(30,99))
    for stat in ['PAC','SHO','PAS','DRI','DEF','PHY']:
        df[stat] = scaler.fit_transform(df[[stat]])
        df[stat] = df[stat].round().astype(int)

    # Position-based OVR weighting
    ovr_scores = []
    for _, row in df.iterrows():
        pos = row['position']
        if pos in ["Striker","Forward","Center Forward"]:
            score = (0.25*row['PAC'] + 0.40*row['SHO'] + 0.20*row['DRI'] +
                     0.10*row['PAS'] + 0.05*row['PHY'])
        elif pos in ["Midfielder","Center Midfielder","Attacking Midfielder","Defensive Midfielder"]:
            score = (0.05*row['PAC'] + 0.15*row['SHO'] + 0.30*row['PAS'] +
                     0.25*row['DRI'] + 0.15*row['DEF'] + 0.10*row['PHY'])
        elif pos in ["Defender","Center Back","Full Back","Wing Back"]:
            score = (0.15*row['PAC'] + 0.05*row['SHO'] + 0.10*row['PAS'] +
                     0.05*row['DRI'] + 0.40*row['DEF'] + 0.25*row['PHY'])
        elif pos in ["Goalkeeper"]:
            score = (0.10*row['PAC'] + 0.05*row['SHO'] + 0.15*row['PAS'] +
                     0.10*row['DRI'] + 0.40*row['DEF'] + 0.20*row['PHY'])
        else:
            score = df[['PAC','SHO','PAS','DRI','DEF','PHY']].loc[_].mean()
        ovr_scores.append(score)

    df['OVR'] = np.round(ovr_scores).astype(int)
    return df[['player_id','name','position','PAC','SHO','PAS','DRI','DEF','PHY','OVR']]

df = pd.read_excel("../excel/player_stats_v2.xlsx")
rated_df = fifa_six_stats(df)
rated_df.to_csv("../csv/player_ratings_2025_A.csv", index=False)

print("Ratings calculated and exported to 'player_ratings.csv'.")