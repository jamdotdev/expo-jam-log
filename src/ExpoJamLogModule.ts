import { NativeModule, requireNativeModule } from 'expo';

import { ExpoJamLogModuleEvents } from './ExpoJamLog.types';

declare class ExpoJamLogModule extends NativeModule<ExpoJamLogModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoJamLogModule>('ExpoJamLog');
