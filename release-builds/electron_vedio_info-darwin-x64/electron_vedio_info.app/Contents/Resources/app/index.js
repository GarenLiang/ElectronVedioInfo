const electron = require('electron');
const path = require('path');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ icon: path.join(__dirname, 'television.png') });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
