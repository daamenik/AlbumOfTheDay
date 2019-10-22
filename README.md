# Album of the Day

## Structure
* aotd: main Django project folder with settings.py, etc.
* public: What will be served. Created by create-react-app, contains index.html
* ratings: Django app for album ratings and cosas así
* src: React frontend

## How to run locally
1. Clone the project
2. Open a terminal
3. Frontend steps:
   1. `cd frontend/aotd-frontend`
   2. `npm i`
   3. `npm start`
4. open another terminal 
5. Backend steps
   1. `cd backend`
   2. `virtualenv aotdenv`
   3. `source aotdenv/bin/activate`
   4. `pip install -r requirements.txt`
   5. `cd src`
   6. `python manage.py runserver`

## TODOs
1. Add error message alerts back in