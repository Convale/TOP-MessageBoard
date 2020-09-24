<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
<img src="public/images/readme_icon.jpg" alt="Logo" width="80" height="80">
  <h3 align="center">TOP - Message Board</h3>

  <p align="center"> 
A clean and easy message board. Some info stays secret unless you're a user!
    <br />
    <br />
    <a href="https://powerful-ravine-05616.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/Convale/TOP-MessageBoard/issues">Report Bug</a>
    ·
    <a href="https://github.com/Convale/TOP-MessageBoard/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Dev Deployment](#dev-deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Message Board Screen Shot][product-screenshot]](https://convale.github.io/TOP-MessageBoard/)

An awesome message board that lets non-users view content, but not who it's from. People can register to become users and view all content, who it's from, and post more content. Admins have the ability to delete posts. Both users and messages are saved in the database, so no need to worry about lost data due to restarting the instance.

For the demo website, you can use the following credentials:
|User Type|Username|Password|
|--|--|--|
|Admin|admin@testing.com|password1|
|Normal User|normal@testing.com|password1|

This is part of The ODIN Project's Fullstack Javascript Bootcamp to teach budding web developers the basics.
Want to learn to be a web developer? [Check out The ODIN Project](https://www.theodinproject.com/)

### Built With

- HTML / CSS / Javascript
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Pug](https://pugjs.org/)
- [Passport](http://www.passportjs.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [MongoDB](https://www.mongodb.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Set up a MongoDB database
   --Recommended: [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)

2. Clone the repo

```sh
git clone https://github.com/Convale/TOP-MessageBoard.git
```

3.  Install NPM packages

```sh
npm install
```

4.  Follow `.env.sample` to deploy your MongoDB URL

```sh
DB_HOST = <YOUR_MONGODB_URL>
```

5.  Follow `.env.sample` to deploy your session secret

```sh
SESSION_SECRET = <YOUR_SESSION_SECRET>
```

### Dev Deployment

For the dev dependencies, it's currently loaded with dotenv for environmetal variables and nodemon for continously deploying saved items.

1. Run Nodemon

```sh
nodemon server
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Convale/TOP-MessageBoard/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/Convale/TOP-MessageBoard/blob/master/LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Convale/TOP-MessageBoard
[contributors-url]: https://github.com/Convale/TOP-MessageBoard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Convale/TOP-MessageBoard
[forks-url]: https://github.com/Convale/TOP-MessageBoard/network/members
[stars-shield]: https://img.shields.io/github/stars/Convale/TOP-MessageBoard
[stars-url]: https://github.com/Convale/TOP-MessageBoard/stargazers
[issues-shield]: https://img.shields.io/github/issues/Convale/TOP-MessageBoard
[issues-url]: https://github.com/Convale/TOP-MessageBoard/issues
[license-shield]: https://img.shields.io/github/license/Convale/TOP-MessageBoard
[license-url]: https://github.com/Convale/TOP-MessageBoard/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/payneshaun
[product-screenshot]: public/images/screenshot.png
