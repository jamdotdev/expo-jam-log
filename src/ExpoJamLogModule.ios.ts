import { NativeModule, requireNativeModule } from 'expo';

import { Level } from './ExpoJamLog.types';

declare class ExpoJamLogModule extends NativeModule {
  log: (message: string, level: Level) => void;
}

const ExpoJamLog = requireNativeModule<ExpoJamLogModule>('ExpoJamLog');

const consoleMethodByLevel = {
  [Level.Debug]: console.debug,
  [Level.Info]: console.info,
  [Level.Warn]: console.warn,
  [Level.Error]: console.error
};

function decorateConsoleMethod(level: Level, consoleMethod: (...args: any[]) => void) {
  return (...args: any[]) => {
    const message = args.join(' ');
    
    ExpoJamLog.log(message, level);  

    consoleMethod(...args);
  };
}

let didBootstrap = false;

ExpoJamLog.bootstrap = () => {
  if (didBootstrap) {
    return;
  }

  didBootstrap = true;

  Object.values(Level).forEach(level => {
    console[level] = decorateConsoleMethod(level, consoleMethodByLevel[level]);
  });  
}

export default ExpoJamLog;