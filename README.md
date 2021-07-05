# austingarrett.dev

To run a local copy, simply install a Docker engine and run:

`docker-compose up -d`

The frontend will be located at `http://localhost:3000` and the backend will be at `http://localhost:1337`.

# Restoring backend content

The Docker volume `austingarrettdev_strapidata` contains all content; simply copy that volume from some other instance to your localhost Docker engine, and the content will be transferred.
