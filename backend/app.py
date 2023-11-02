from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb+srv://wad2g4t5:Fplyzk5st8wjMfFT@wad2-g4t5.saj8cns.mongodb.net/")
db = client["wad2-g4t5"]
collection = db["water_data"]


@app.route('/water_data', methods=['GET'])
def get_water_data():
      try:
            all_data = list(collection.find())
            print(all_data)
            print("testing")
            data_list = []

            for data in all_data:
                  data_dict = {
                        'city': data["city"],
                        'water_history': data['water_history'],
                        'water_pH_level': data['water_pH_level']
                  }

                  data_list.append(data_dict)

            return jsonify(
                  {
                        "code": 200,
                        "message": "Retrieved all data",
                        "data": {
                              "data_list": data_list
                  }
                  }
            ), 200

      except:
            return jsonify(
                  {
                  "code": 400,
                  "message": "Unable to retrieve data"
                  }
            ), 400

if __name__ == '__main__':
      app.run(debug=True, port=5006)
