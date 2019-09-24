FROM python:3

MAINTAINER Jeff Whiteside

WORKDIR /quiz

RUN apt-get update

RUN pip install flask

COPY . /quiz

ENV FLASK_APP=/quiz/quiz.py

EXPOSE 5000

ENTRYPOINT ["flask","run","--host=0.0.0.0"]