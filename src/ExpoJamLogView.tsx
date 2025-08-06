import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoJamLogViewProps } from './ExpoJamLog.types';

const NativeView: React.ComponentType<ExpoJamLogViewProps> =
  requireNativeView('ExpoJamLog');

export default function ExpoJamLogView(props: ExpoJamLogViewProps) {
  return <NativeView {...props} />;
}
