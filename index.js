// This is the first file that ReactNative will run when it starts up.
// If you use Expo (`yarn expo:start`), the entry point is ./App.js instead.
// Both do essentially the same thing.

import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"
import { Amplify } from "aws-amplify"
import config from "./src/aws-exports"
Amplify.configure({
  ...config,
  oauth : {
    ...config.oauth,
    redirectSignIn: 'igniteamplify://',
    redirectSignOut: 'igniteamplify://',
  }
})

function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

AppRegistry.registerComponent("igniteamplify", () => IgniteApp)
export default App
