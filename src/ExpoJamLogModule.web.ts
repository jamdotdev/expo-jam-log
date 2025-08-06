import { registerWebModule, NativeModule } from 'expo';

import { ExpoJamLogModuleEvents } from './ExpoJamLog.types';

class ExpoJamLogModule extends NativeModule<ExpoJamLogModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoJamLogModule, 'ExpoJamLogModule');
