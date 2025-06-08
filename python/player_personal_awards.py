import pandas as pd

player_data = pd.read_excel('./excel/player_personal_awards.xlsx')

json_player_info = player_data.to_json(orient="records")

with open("./txt/player_personal_awards.txt", "w") as f:
  f.write(json_player_info)