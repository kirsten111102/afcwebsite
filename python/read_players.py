import json
import pandas as pd

with open("allplayers.txt", "r", encoding="utf-8") as file:
    json_data = json.load(file)

df = pd.DataFrame(json_data)

df.to_excel("players_data.xlsx", index=False)