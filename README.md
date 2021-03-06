# Hercules

[![Build Status](https://travis-ci.org/NixHercules/hercules.svg?branch=master)](https://travis-ci.org/NixHercules/hercules)

Continuous Integration for Nix projects.

Hercules uses the same DB schema as [Hydra](http://www.nixos.org/hydra/),
but a new Haskell backend with a RESTful API and Elm as new frontend.

The goal of the MVP is to run Hercules as a CI for Github.

## Backend

### Getting started

You'll need Nix installed and [Hydra database loaded into Postgresql]
(https://github.com/peti/hydra-tutorial) for hydra user.

    $ cd backend
    $ nix-build
    $ ./result/bin/hercules -c example-config.yaml

### API

The API is described in [API.hs](backend/src/Hercules/API.hs).

## Frontend

### Getting started

Hot reloading is used for development, so you can start your development server:

    $ cd frontend
    $ nix-shell --run "npm i && npm run dev"

And open your browser and point it to http://localhost:3000
