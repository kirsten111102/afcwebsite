import pandas as pd

legends_rating = pd.read_excel('./excel/legends_teammate_thoughts.xlsx')

json_legends_info = legends_rating.to_json(orient="records")

with open("./txt/legends_teammate_thoughts.txt", "w") as f:
  f.write(json_legends_info)