FROM python:3.14-alpine
WORKDIR /python-api
RUN pip install flask==3.1.2
COPY . .
EXPOSE 5000
CMD [ "python3", "app.py" ]
