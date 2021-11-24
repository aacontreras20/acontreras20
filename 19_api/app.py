# secure bathtub: Aaron Contreras, Alejandro Alonso
# SoftDev
# K19 -- A RESTful journey skyward / API flaskwork
# 2021-10-05
import urllib.request, json

from flask import Flask, render_template
app = Flask(__name__) #create instance of class Flask

with urllib.request.urlopen('https://api.nasa.gov/planetary/apod?api_key=4x0Ai69ML3zpXNaVs0sN7g5Rrxf2gQQmVOtmTtKp') as response:
   html = response.read()

dic = json.loads(html)

@app.route("/")       #assign fxn to route
def hello_world():
    pic = dic["url"]
    return render_template("main.html", pic = pic)

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

#prediction: It will print 'the __name-- o this module is...' in the terminal after quitting the app.
# Since line 14 is true, the result will be the same as v3
#actual: We were right :)
