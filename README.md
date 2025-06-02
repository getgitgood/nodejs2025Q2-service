# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## API Endpoints
### Users (/user)

POST `/user` — Create a new user.

GET `/user` — Retrieve all users.

GET `/user/{id}` — Get a user by ID.

PUT `/user/{id}` — Update a user's password.

DELETE `/user/{id}` — Delete a user.

### Artists (/artist)

POST `/artist` — Create a new artist.

GET `/artist` — Retrieve all artists.

GET `/artist/{id}` — Get an artist by ID.

PUT `/artist/{id}` — Update artist information.

DELETE `/artist/{id}` — Delete an artist.

### Albums (/album)

POST `/album` — Create a new album.

GET `/album` — Retrieve all albums.

GET `/album/{id}` — Get an album by ID.

PUT `/album/{id}` — Update album information.

DELETE `/album/{id}` — Delete an album.

### Tracks (/track)

POST `/track` — Create a new track.

GET `/track` — Retrieve all tracks.

GET `/track/{id}` — Get a track by ID.

PUT `/track/{id}` — Update track information.

DELETE `/track/{id}` — Delete a track.

### Favorites (/favs)

GET `/favs` — Get all favorite tracks, albums, and artists.

POST `/favs/track/{id}` — Add a track to favorites.

DELETE `/favs/track/{id}` — Remove a track from favorites.

POST `/favs/album/{id}` — Add an album to favorites.

DELETE `/favs/album/{id}` — Remove an album from favorites.

POST `/favs/artist/{id}` — Add an artist to favorites.

DELETE `/favs/artist/{id}` — Remove an artist from favorites.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
