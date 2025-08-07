# expo-jam-log

A React Native module that lets you send log events to [Jam for iOS](https://apps.apple.com/us/app/jam-fix-bugs-faster/id6469037234) so that they can be associated with your [Jam](https://jam.dev/).

## Usage

```typescript
import ExpoJamLog, { Level } from "expo-jam-log";

ExpoJamLog.log("Hello world!", level: Level.Debug);
```

Also supports `Level.Info`, `Level.Warn` and `Level.Error`.

### Automatic Logging

ExpoJamLog can be configured to automatically log console events to Jam. This is configured by calling `bootstrap`:

```typescript
ExpoJamLog.bootstrap();

console.debug("Hello world!");
```

## Installation

`expo-jam-log` is a native module and is not available in Expo Go.

### Expo projects

To use this module in an Expo project:

```sh
npx expo install expo-jam-log
npx expo prebuild
```

Refer to [Using libraries that include native code](https://docs.expo.dev/workflow/customizing/#using-libraries-that-include-native-code) for detailed installation instructions.

### Bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```sh
npm install expo-jam-log
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.
