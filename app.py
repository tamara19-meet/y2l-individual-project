from flask import Flask, render_template, url_for, redirect, request, session
from databases import add_user, get_all_users,query_by_username

app = Flask(__name__)
app.secret_key ="I don't know"


@app.route('/', methods=['GET'])
def home():
  return render_template('homepage.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup_route():
  if request.method == 'GET':
    return render_template('Sign-up1.html')
  else:
    print ('Received POST request for sign up!')
    email = request.form['email']
    name = request.form['name']
    password= request.form['password']

    g=query_by_username(name)

    if g!=None:
      print ('we already have a user with that name')
    else:   
      add_user(email, name, password)
      session['display_login'] = True
    return redirect(url_for('calendar_route'))

@app.route('/login', methods=['GET', 'POST'])
def login_route():
  if 'logged_in' in session and session['logged_in']==True:
    return redirect (url_for('calendar1'))
  if request.method == 'POST':
    print('HELLOOO')
    user=query_by_username(request.form['name'])
    if user==None:
      return redirect (url_for('signup_route'))

    else:
      if request.form['password']==user.password:
        session['logged_in'] = True
        session['user_id']=user.id
        session['display_login'] = True
        return redirect(url_for('home'))
      return render_template('log_in1.html')

  else:
    return render_template('log_in1.html') 


@app.route('/logout')
def logout_route():
  if 'user_id' in session:
    del session['user_id']
    session['logged_in']=False
  return redirect(url_for('home'))
  print('logged out')


@app.route('/Information')
def Information_route():
  return render_template('neww1.html')

@app.route('/cigarettes', methods=['GET', 'POST'])
def cigarettes_route():
  if request.method == 'GET':
    return render_template('Cigarettes1.html')

@app.route('/nicotine')
def nicotine_route():
  return render_template('dropdown.html')

@app.route('/exercise')
def exercise_route():  
  if request.method == 'GET':
    return render_template('exercise.html')
  else:
    image1 = request.form['image1']
    return redirect(url_for('Information_route'))

  
@app.route('/health')
def health_route():
  return render_template('health.html')  

@app.route('/craving')
def craving_route():
  return render_template('cravings.html')

@app.route('/Emotions', methods=['GET', 'POST'])
def Emotions_route():
	if request.method == 'GET':
		return render_template('Emotions1.html')
	else:
		image = request.form['image']
		return redirect(url_for('Information_route'))


@app.route('/dropdown', methods=['GET', 'POST'])
def dropdown_route():
  if request.method == 'GET':
    return render_template('dropdown.html')


@app.route('/calendar', methods=['GET', 'POST'])
def calendar_route():
	if request.method == 'GET':
		return render_template('calendar1.html')
	else:
		date = request.form['date']
		return redirect(url_for('Emotions_route'))

if __name__ == "__main__":
  app.run(debug=True)

      

