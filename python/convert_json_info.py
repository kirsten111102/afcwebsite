import pandas as pd

dataframe1 = pd.read_excel('player_info.xlsx')
dataframe2 = pd.read_excel('./excel/legends_info.xlsx')

player_info = dataframe1[['player_id', 'dob', 'birthplace', 'height', 'biography', 'gender']]
legends_info = dataframe2[['player_id', 'dob', 'birthplace', 'height', 'biography', 'gender']]

json_player_info = player_info.to_json(orient="records")
json_legends_info = legends_info.to_json(orient="records")

with open("all_player_info.txt", "w") as f:
  f.write(json_player_info)

with open("./txt/legends_info.txt", "w") as f:
  f.write(json_legends_info)