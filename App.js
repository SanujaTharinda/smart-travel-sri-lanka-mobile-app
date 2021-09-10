import React from "react";
import RootNavigator from "./app/navigation";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as theme from './app/theme/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <RootNavigator />
    </ApplicationProvider>
  </>

);
