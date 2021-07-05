# austingarrett.dev

To run a local copy, simply install a Docker engine and run:

`docker-compose up -d`

The frontend will be located at `http://localhost:3000` and the backend will be at `http://localhost:1337`.

# Restoring backend content

The Docker volume `austingarrettdev_strapidata` contains all content; simply copy that volume from some other instance to your localhost Docker engine, and the content will be transferred.

# Development

Build the frontend React application with

`docker build --tag=austingarrett-dev frontend`

Afterwards, running

`docker run -p 3000:3000 -v $(pwd)/frontend:/app -e API_URL=<strapi-url> -t austingarrett-dev`

will allow you to locally develop the frontend using an arbitrary (potentially remote) backend.
