# expo-jam-log

A React Native module that lets you send log events to [Jam for iOS](https://apps.apple.com/us/app/jam-fix-bugs-faster/id6469037234) so that they can be associated with your [Jam](https://jam.dev/).

# API documentation

- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/jam-log/)
- [Documentation for the main branch](https://docs.expo.dev/versions/unversioned/sdk/jam-log/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-jam-log
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
