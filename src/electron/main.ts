import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js';
import { getPreloadPath } from './pathResolver.js';

app.on('ready', () => {
    const iconPath = path.join(app.getAppPath(), 'payslip.png');

   
    const mainWindow = new BrowserWindow({
        width: 1920,  
        height: 1080,  
        icon: iconPath,   
        webPreferences: {
            preload: getPreloadPath()
        }
    });

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123/');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
    }
});
