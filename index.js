const electron = require("electron");

const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadFile("./index.html");
});

ipcMain.on("video:submit", () => {});
