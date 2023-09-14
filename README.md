# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

## Final Product

!["Screenshot of front page"](https://github.com/Sleepyfatblackcat/photolabs/blob/master/docs/front.png)
!["Screenshot of modal"](https://github.com/Sleepyfatblackcat/photolabs/blob/master/docs/modal.png)
!["Screenshot of similar photos"](https://github.com/Sleepyfatblackcat/photolabs/blob/master/docs/similar.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

### Frontend
    @testing-library/jest-dom: ^5.16.5
    @testing-library/react: ^13.4.0
    @testing-library/user-event: ^13.5.0
    axios: ^1.5.0
    dart-sass: ^1.25.0
    react: ^18.2.0
    react-dom: ^18.2.0
    react-scripts: 5.0.1
    web-vitals: ^2.1.4

### Backend
    body-parser: ^1.18.3
    cors: ^2.8.5
    dotenv: ^7.0.0
    express: ^4.16.4
    helmet: ^3.18.0
    pg: ^8.5.0
    socket.io: ^2.2.0
    ws: ^7.0.0
    
## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
