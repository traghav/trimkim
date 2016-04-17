"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/

This file creates your application.
"""

import os,requests, urllib
import pickle
import random
from firebase import firebase
from urlparse import urlparse
from flask import Flask, render_template, request, flash, redirect, url_for, Markup

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'this_should_be_configured')

answer=''
###
# Routing for your application.
###
@app.route('/<url>')
@app.route('/')
def home(url='default'):
    """Render website's home page."""
    if(url=='default'):
        return render_template('home.html',result=url)
    else:
        firebase2 = firebase.FirebaseApplication('https://trimkim.firebaseio.com', None)
        live=firebase2.get('/live', None)
        for item in live:
            current = live[item]['r0']+live[item]['r1']+live[item]['r2']

            if current==url.lower():
                ourl=live[item]['url']
                ourl=urllib.unquote(ourl).decode('utf8')
                print ourl 
                if not urlparse(ourl).scheme:
                    ourl = "http://"+ourl
                return redirect((ourl)), 301
        return render_template('404.html'), 404



def generateThree():
    master=pickle.load(open("mega.pickle","rb"))
    result=[]
    l=len(master)
    f=random.randint(0,l)
    mylist = list(xrange(len(master[f])))
    random.shuffle(mylist)
    randomlist=mylist[:3]
    for number in randomlist:
        result.append(master[f][number])
    return result

@app.route('/process',methods=['POST'])
def surgeon():
    url=request.form['link']
    rhyme=giveValid()
    firebase2 = firebase.FirebaseApplication('https://trimkim.firebaseio.com', None)
    x = firebase2.post('/used', str(rhyme))
    url=urllib.unquote(url.encode("utf8"))
    x = firebase2.post('/live',{'url':url,'r0':rhyme[0],'r1':rhyme[1],'r2':rhyme[2]})
    furl=rhyme[0].title()+rhyme[1].title()+rhyme[2].title()
    flash(Markup('Successfully trimmed:  <a href="'+furl+'" > trim.kim/'+furl+  '</a>'))
    return redirect('/')




@app.route('/fresh',methods=['POST'])
def giveValid2():
    firebase2 = firebase.FirebaseApplication('https://trimkim.firebaseio.com', None)
    used=firebase2.get('/used', None)
    fresh=generateThree()
    url=str(fresh)
    if url not in used:
        #return str(fresh)
        return request.form['plane']
def validURL(url):
    try:
        request = requests.get(url)
        if request.status_code == 200:
            return True
        else:
            return False
    except:
        return False
def giveValid():
    firebase2 = firebase.FirebaseApplication('https://trimkim.firebaseio.com', None)
    used=['null']
    used=firebase2.get('/used', None)
    fresh=generateThree()
    url=str(fresh)
    if url not in used:
        return fresh
    else:
        return getValid() #such a horrible decision :(   
    
@app.route('/wt')
def wt():
    firebase2 = firebase.FirebaseApplication('https://trimkim.firebaseio.com', None)
    result = firebase2.post('/test', 'new_user')
    return str(result)

@app.route('/whoops')
def whoops():
    master=pickle.load(open("mega.pickle","rb"))
    total=0
    for wordlen in master:
        total=total+len(wordlen)
        #print wordlen
    print total/2544
    return str(master)

@app.route('/about/')
def about():
    """Render the website's about page."""
    return render_template('about.html')


###
# The functions below should be applicable to all Flask apps.
###

@app.route('/<file_name>.txt')
def send_text_file(file_name):
    """Send your static text file."""
    file_dot_text = file_name + '.txt'
    return app.send_static_file(file_dot_text)


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=600'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
