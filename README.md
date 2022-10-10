# Memory

This is a very simple memory game built with React and Node.js (Express).
It currently uses SQLite3 in-memory. Scores will reset at each server restart.

## Installation & usage

### With Docker

1. Run the following docker-compose command :

```bash
docker-compose up --build
```

2. Start the app in browser by going on : http://localhost:3000

3. Type in a username and play!

### Manual installation

If you do not have Docker installed or encounter an issue with the Docker install, please follow these instructions.

1. Run these commands :

```bash
# install and run the server
cd server
npm install
node app

# install and run the client
cd client
npm install
npm start
```

2. Start the app in browser by going on : http://localhost:3000

3. Type in a username and play!
