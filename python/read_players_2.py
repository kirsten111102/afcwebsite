import pandas as pd

player_data = pd.read_excel('players_data.xlsx')

json_player_info = player_data.to_json(orient="records")

with open("allplayersdata.txt", "w") as f:
  f.write(json_player_info)