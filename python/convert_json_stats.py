import pandas as pd

league_a = pd.read_excel('player_stats.xlsx')
league_b = pd.read_excel('player_stats_b.xlsx')
league_a_v2 = pd.read_excel('./excel/player_stats_v2.xlsx')

stats = ['id', 'player_id', 'matches', 'goals', 'assists', 'yellow_cards', 'red_cards', 'league_id', 'team_id', 'year']

player_stats = league_a[stats]

player_stats_b = league_b[stats]
player_stats_v2 = league_a_v2[stats]

json_player_stats = player_stats.to_json(orient='records')
json_player_stats_b = player_stats_b.to_json(orient='records')
json_player_stats_v2 = player_stats_v2.to_json(orient='records')

with open("all_player_stats.txt", "w") as f:
  f.write(json_player_stats)

with open("all_player_stats_b.txt", "w") as f:
  f.write(json_player_stats_b)

with open("./txt/all_player_stats_v2.txt", "w") as f:
  f.write(json_player_stats_v2)
