import pandas as pd

player_data = pd.read_excel('./excel/player_team_achievements.xlsx')

json_player_info = player_data.to_json(orient="records")

with open("./txt/player_team_achievements.txt", "w") as f:
  f.write(json_player_info)