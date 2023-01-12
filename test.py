#from crypt import methods
from itertools import product   
from tkinter.messagebox import RETRY
from colorama import Cursor
from flask import Flask, jsonify, flash, redirect, render_template, request, url_for, Blueprint
import mysql.connector, urllib.request, json, requests



application = Flask(__name__)
application.secret_key = "abc"


#mengubah kelvin ke celcius
def k2c(kelvin):
    c = float(kelvin) - 273.15
    return round (c)


#cuaca 
# def cuaca():
#     appid = 'cadb4f8880792c163567e70aa67d122f'
#     lat = '-6.36'
#     lon = '106.81'
#     url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=hourly,daily&appid={appid}'
#     url = url.format(lat=lat, lon=lon, appid=appid)
#     mentah = urllib.request.urlopen
#     root = ET.fromstring(mentah.decode())

#     kota = root.findall('timezone')
#     temperature = root.findall('temperature')
#     tekanan = root.findall('pressure')
#     kelembapan = root.findall('humadity')

#     return render_template(kota=kota, temperature=temperature, tekanan=tekanan, kelembapan=kelembapan)


def getMysqlConnection():
    return  mysql.connector.connect(user='root', host='localhost', port='3306', password='', database='iotik')

def database():
    db = getMysqlConnection()
    try:
        cur = db.cursor()
        cur.execute ("SELECT * FROM `doorlock`")
        output = cur.fetchall()
        print(output)
        db.commit()
        cur.close()
    except Exception as e:
        print("Error in SQL:\n", e)
    finally:
        db.close()
    print(output)


@application.route("/")
@application.route('/landingpage')
def landingpage():
    return render_template('landingpageiotik.html')

@application.route('/regist', methods=['GET', 'POST'])   
def regist():							
    if request.method == 'GET':
        return render_template('regist.html')	
    elif request.method =='POST':
        user = request.form['username']			
        password = request.form['password']	
        confirmpassword = request.form['confirmpassword']

    	# cek password confirmation
        if password == confirmpassword:
            db = getMysqlConnection()
            try:
                cur = db.cursor()
                cur.execute("INSERT INTO `user` (`uname`, `upass`) VALUES ('"+user+"', '"+password+"');")
                db.commit()
                cur.close()
            except Exception as e:
                print("Error in SQL:\n",e)
            finally:
                db.close()
        else:
            flash('Password tidak sama', 'error')
        return render_template('login.html')

@application.route('/login', methods=['GET', 'POST'])
def login():
    db = getMysqlConnection()
    try:
        cur = db.cursor()
        cur.execute ("SELECT * FROM `user`")
        output = cur.fetchall()
        print(output)
        db.commit()
        cur.close()
    except Exception as e:
        print("Error in SQL:\n", e)
    finally:
        db.close()

    if request.method == 'GET':
        return render_template('login.html')

    elif request.method =='POST':
        user = request.form['username']			
        password = request.form['password']	

        for kolom in output:
            for i in range(len(kolom)):
                if str(user) == kolom[i]:
                    print(str(user))
                    if str(password) == kolom[i+1]:
                        print(str(password))
                        return redirect(url_for('index'))
                    else:
                        break
        print('invalid username/password', 'error')
        return render_template('login.html')


@application.route('/loginadmin')
def loginadmin():
    return render_template('loginadmin.html')

@application.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@application.route('/dashboardd')
def dashboardd():
    return render_template('dashboardd.html')

@application.route('/index')
def index():
    appid = 'cadb4f8880792c163567e70aa67d122f'
    lat = '-6.291744211707815'
    lon = '106.84260940551759'
    url = 'https://api.openweathermap.org/data/2.5/' + \
    'forecast?lat={lat}&lon={lon}&appid={appid}'
    r = requests.get(url.format(lat=lat, lon=lon, appid=appid)).json()

    print(r)
    weather = {
        'city' : r['city']['name'],
        # # 'temp' : r['current']['temp'],
        # 'suhu' : r['current']['humidity'],
        # 'kelembapan' : r['current']['pressure'],
    }

    jam = {
        'jam1' : r['list'][1]['dt_txt'],
        'jam2' : r['list'][2]['dt_txt'],
        'jam3' : r['list'][3]['dt_txt'],
        'jam4' : r['list'][4]['dt_txt'],
        'jam5' : r['list'][5]['dt_txt'],
        'jam6' : r['list'][6]['dt_txt'],
        'jam7' : r['list'][7]['dt_txt'],
    }

    temp = {
        'temp1' : r['list'][1]['main']['temp'],     
        'temp2' : r['list'][2]['main']['temp'],
        'temp3' : r['list'][3]['main']['temp'],
        'temp4' : r['list'][4]['main']['temp'],
        'temp5' : r['list'][5]['main']['temp'],
        'temp6' : r['list'][6]['main']['temp'],
        'temp7' : r['list'][7]['main']['temp'],
    }
  
    temperature = {
        'temperature' : k2c(temp['temp1']),
        'temperature2': k2c(temp['temp2']),
        'temperature3': k2c(temp['temp3']),
        'temperature4': k2c(temp['temp4']),
        'temperature5' : k2c(temp['temp5']),
        'temperature6' : k2c(temp['temp6']),
        'temperature7' : k2c(temp['temp7']),
    }
    fire = temperature['temperature'] * 2


    # temperature = k2c(temperature['temp1']) 

    return render_template('index.html', weather=weather, jam=jam, temperature=temperature, fire=fire)

@application.route('/temperature')
def temperature():
    return render_template('temperature.html')

@application.route('/doorlock')
def doorlock():
    db = getMysqlConnection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM doorlock")
    result = cursor.fetchall()
    r = result
    unlock = 1
    if unlock == 1:
        i = 'fa fa-unlock'
    else :
        i = 'fa fa-lock'
    return render_template('doorlock.html', r=r, i=i)

@application.route('/firedetector')
def firedetector():
    return render_template('firedetector.html')


if __name__ == '__main__':
    application.run(debug=True)
