import * as React from 'react';

import { ExpoJamLogViewProps } from './ExpoJamLog.types';

export default function ExpoJamLogView(props: ExpoJamLogViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
