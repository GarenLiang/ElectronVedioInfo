const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    //frame: false,

    icon: path.join(__dirname, 'television.png'),

  });
  //mainWindow.show();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', () => {

});
