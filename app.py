from os import environ

from flask_assets import Environment, Bundle

from flask import Flask, request, current_app, g, redirect, url_for, session
from flask import render_template

app = Flask(__name__)
app.secret_key = environ.get('FLASK_SECRET_KEY', '\x99\xe4\xb0\xd5\x0b"<\xa5;\xc8NB\xf3!?_\xedbp\x90\xc5$I\xaf')
assets = Environment(app)

scss = Bundle('scss/*.scss',
              filters='pyscss',
              output='gen/style.css')
js = Bundle('js/*.js',
            filters='jsmin', output='gen/main.min.js')

assets.register('css_all', scss)
assets.register('js_all', js)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/plain')
def plain():
    return render_template('plain.html')


if __name__ == '__main__':
    env = environ.get("ENVIRONMENT", 'development')
    if env in ['development', 'staging']:
        app.run(debug=True)
    else:
        app.run()
