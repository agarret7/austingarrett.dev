# austingarrett.dev

To run, simply install a Docker engine and run:

`docker-compose up -d`

The frontend will be located at `austingarrett.dev` and the backend will be at `austingarrett.dev/strapi`.

# Restoring backend content

The Docker volume `austingarrettdev_strapidata` contains everything.
Simply copy that volume from some other instance to your local Docker instance, and admin profiles, data types, and content will be transferred.

# Development

Build the frontend React application with

`docker build --tag=austingarrett-dev frontend`

Afterwards, running

`docker run -p 3000:3000 -v $(pwd)/frontend:/app -e API_URL=<strapi-url> -t austingarrett-dev`

will allow you to locally develop the frontend using an arbitrary (recommended remote) backend.

Running the backend locally may require disabling the proxy URL `austingarrett.dev/strapi` in `backend/config/server.js`, or running concurrently with the nginx-proxy companion container.
This may or may not result in errors relating to TLS certificates (untested).
