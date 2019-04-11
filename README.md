
# Find Your Tournaments
The application allows a user to discover search tournaments.
Feel free to report in case of issues.

### Installation

The app Requires [Node.js](https://nodejs.org/) v4+ and Python to run.

Install the dependencies and devDependencies and start the server.

#### Installation Python
 - Need to install The package manager [Choco](https://chocolatey.org/)
 
 ```sh
 $ choco install python-x86_32 --version 2.7.0

Node-gyp only support >= Python 2.7 and < Python 3.0
So just install the 2.7 version
```

#### Install Node-gyp
 ```sh
$ npm install -g node-gyp
```
You will also need to install
 - On Windows:
    - Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator).
 - Launch cmd, npm config set msvs_version 2015

```sh
$ cd FindYourTournaments
$ npm install
$ npm start
```

For production environments...

```sh
$ npm run build
```