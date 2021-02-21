# IP Address Tracker

![Design preview for the IP Address Tracker coding challenge](.github/preview.jpg)

Solution for [IP Address Tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) front-end challenge. 

[Live demo](https://ip-address-tracker-15ac2.web.app/)

## Tools & stack 

<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="Svelte" src="https://img.shields.io/badge/svelte%20-%23f1413d.svg?&style=for-the-badge&logo=svelte&logoColor=white"/> <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>  
 
  
## To run locally...

### Clone the repo
```bash
$ git clone https://github.com/aadelgrossi/ip-address-tracker
```

### Install dependencies
```bash
$ yarn install 
```

### Setup ipify API key

Obtain a free API key from ipify's IP Geolocation API signing up [here](https://geo.ipify.org/signup).  
  
Rename .env.example to .env

```bash
$ mv .env.example env
```

Update IPIFY_API_KEY variable with your key.

```bash
IPIFY_API_KEY=#your key goes here
```

### Start the server
```bash
$ yarn dev
```

You should be able to access it on http://localhost:5000  


License: [MIT](LICENSE)
