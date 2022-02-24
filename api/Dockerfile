FROM python:3

WORKDIR /server

ENV FLASK_APP=api.py

COPY requirements.txt .

RUN pip install -r requirements.txt 

COPY . .

CMD [ "python", "app.py" ]

