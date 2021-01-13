# website
A django backend with react frontend website. Based on the videos from [JustDjango](https://www.youtube.com/watch?v=uZgRbnIsgrA&list=PLLRM7ROnmA9FxCtnLoIHAs6hIkJyd1dEx&ab_channel=JustDjango)

## Setup django in VS Code
follow steps in [blog post](https://automationpanda.com/2018/02/08/django-projects-in-visual-studio-code/)

To create the django files, go to the backend folder and run

```
django-admin startproject website
```
There we renamed the folder from website to src

## Setup NPM
To install NPM on Ubuntu, follow the instructions [here](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Setup React App
Go into the frontend folder and run 
```
npx create-react-app gui
```

## Run Django Backend
First activate your virtualenv and then go to backend/src and run
```
python manage.py runserver
```
From there you can go to your website at http://127.0.0.1:8000/ and you should see ![Screenshot from 2021-01-13 15-13-53](https://user-images.githubusercontent.com/66282509/104406007-63182b00-55b2-11eb-82db-7a4ad70dbc10.png)

You many need to migrate unapplied migrations by
```
python manage.py migrate
```

## Useful Links
[Django REST framework](https://www.django-rest-framework.org/)