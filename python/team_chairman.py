import pandas as pd

player_data = pd.read_excel('./excel/team_chairman.xlsx')

json_player_info = player_data.to_json(orient="records")

with open("./txt/team_chairman.txt", "w") as f:
  f.write(json_player_info)