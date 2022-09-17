import 'react-native-gesture-handler';

import React from "react";
import { HelloWorldScreen } from "./src/01-HelloWorld/screen/HelloWorldScreen";
import { CounterScreen } from "./src/02-Counter/screens/CounterScreen";
import { BoxObjectModelScreen } from "./src/03-BoxObjectModel/screens/BoxObjectModelScreen";
import { DimensionsScreen } from "./src/04-Dimensions/screens/DimensionsScreen";
import { PositionScreen } from "./src/05-Position/screens/PositionScreen";
import { FlexBoxScreen } from "./src/06-Flexbox/screens/FlexBoxScreen";
import { FlexBoxLayoutsScreen } from "./src/07-FlexBoxLayouts/screens/FlexBoxLayoutsScreen";
import { CalculatorScreen } from "./src/08-Caculator/screens/CalculatorScreen";
import { StackNavigatorContainer } from "./src/09-Navigation/StackNavigator";
import { DrawerNavigatorContainer } from "./src/09-Navigation/DrawerNavigator";

const App = () => (<DrawerNavigatorContainer />)

export default App;

