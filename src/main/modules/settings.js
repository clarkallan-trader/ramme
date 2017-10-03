const app = require('electron').app
const path = require('path')
const settings = require('electron-settings')

export function initSettings() {
  if (!settings.get('dbDir')) {
    settings.set('dbDir', path.join(app.getPath('userData'), 'library.db'))
  }
}
