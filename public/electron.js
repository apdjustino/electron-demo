const electron = require("electron");
const isDev = require('electron-is-dev');
const path = require('path')
const { app, BrowserWindow } = electron;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 900, height: 680});
    mainWindow.loadURL(isDev ? "http://localhost:3000" : 
                       `file://${path.join(__dirname, '../build/index.html')}`);

    if(isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    };
});

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });