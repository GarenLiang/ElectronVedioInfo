const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    //frame: false,

    icon: path.join(__dirname, 'television.png'),

  });
  //mainWindow.show();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send(
      'video:metadata',
      metadata.format.duration
    );
  });
});
