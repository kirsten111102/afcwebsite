import pandas as pd

player_data = pd.read_excel('players_data.xlsx')
legends_data = pd.read_excel('./excel/legends_data.xlsx')

json_player_info = player_data.to_json(orient="records")
json_legends_info = legends_data.to_json(orient="records")

with open("allplayersdata.txt", "w") as f:
  f.write(json_player_info)

with open("./txt/legends_data.txt", "w") as f:
  f.write(json_legends_info)