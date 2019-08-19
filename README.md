This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Application

This project is a demonstration of Electron.js and React/Redux. To start the project first
clone the repo: `git clone https://github.com/apdjustino/electron-demo.git`. This project uses 
Microsoft's MSMQ messaging queue, and will only work on a Windows environment where the
MSMQ service is activated. To activate the MSMQ service in Windows see this link: https://docs.microsoft.com/en-us/dotnet/framework/wcf/samples/installing-message-queuing-msmq

Next make sure all dependencies are installed by running `npm install`. This repo includes a Node
server script `server.js` that requires Node `v4.1.1` to run. Before running the server you will need to build the React files using the included react script with the command `npm run-script build`. This script needs a newer version of Node.js (try version `11.10.0`). Since ther server requires a different version of node, I recommend using `nvm` for Windows, which can be downloaded here: https://github.com/coreybutler/nvm-windows Next, start the server using Node `v4.1.1` with the command `node server.js` in the root directory of this project.

In another Windows command terminal switch back to Node `v11.10.0`. Start the electron application by using the command `npm run-script electronStart`. You must have the `server.js` script running in another process before you start the Electron application.
