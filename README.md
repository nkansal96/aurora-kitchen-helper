# aurora-kitchen-helper

A voice-enabled assistant for the kitchen, implemented with Aurora

## Design

This Proof-of-Concept app is split into two main parts:

- A small python service that interacts with the Aurora API
- A web app that provides a dashboard for a user in the kitchen

## Usage

Both the python service and the web app must be running in order to use
the app.

#### Web App

1. `$ cd client`
2. `$ npm install`
3. `$ npm start`

## Python Service

1. `$ cd server`
2. `$ pip install -Ur requirments.txt`
3. `$ python server.py`

## Testing

#### Web App

```bash
$ npm run test
```

#### Python Service

```bash
$ python -m unittest test_server
```
