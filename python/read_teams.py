import pandas as pd

dataframe1 = pd.read_excel('./excel/teams_info.xlsx')


team_info = dataframe1[['id', 'name']]
team_qualify = dataframe1[['id', 'is_participant']]

json_team_info = team_info.to_json(orient="records")
json_team_qualify = team_qualify.to_json(orient="records")

with open("./txt/all_teams_info.txt", "w") as f:
  f.write(json_team_info)


with open("./txt/all_teams_qualify_status.txt", "w") as f:
  f.write(json_team_qualify)