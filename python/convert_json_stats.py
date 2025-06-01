import pandas as pd

dataframe1 = pd.read_excel('player_stats.xlsx')

player_stats = dataframe1[['player_id', 'matches', 'goals', 'assists', 'yellow_cards', 'red_cards']]

json_player_stats = player_stats.to_json(orient='records')

with open("all_player_stats.txt", "w") as f:
  f.write(json_player_stats)
