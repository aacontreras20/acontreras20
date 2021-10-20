# Text Box -- Sadid Ethun, Aaron Contreras, Gavin McGinley
# SoftDev
# K15 -- Sessions Greetings / Flask Form and Error Handling
# 2021-10-18
import os

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session
#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object
app.secret_key= "stuff"  #pretty good huh

#only current login is sethun20 with password set as hello
user = 'sethun20'
pwd = 'hello'

@app.route("/" , methods=['GET', 'POST']) 
def disp_loginpage():
    #sends to response page if user is signed in
    if session:
        return render_template('response.html', username=session['username'], method=request.method,
                               password=session['password'])
    #else sends to login page
    return render_template( 'login.html' )

@app.route("/auth" , methods=['GET', 'POST']) 
def authenticate():
    #signs in if password is right
    if (request.form['username'] == user and request.form['password'] == pwd):
        session['username']=request.form['username']
        session['password'] = request.form['password']
        return render_template( 'response.html', username=session['username'], method=request.method, password=session['password']) #response to a form submission

    #both redirect to error pages
    elif (request.form['username'] != user):
        return render_template('login.html', k="Username does not exist")
    else:
        return render_template('login.html', k="Incorrect Password for "+request.form['username'])

@app.route('/logout' , methods=['GET', 'POST']) 
#clears session
def logout():
    session.pop('username')
    session.pop('password')
    return render_template('login.html')

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
