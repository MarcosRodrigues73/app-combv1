import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './Pages/SingUp/index'
import Home from './Pages/Home/index';
import Abastecimento from './Pages/Abastecimento/index';
import Lub from './Pages/Lub/index';
import Manut from './Pages/Manut/index';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Lub" component={Lub}/>
      <Stack.Screen name="Manut" component={Manut}/>
      <Stack.Screen name="Abastecimento" component={Abastecimento}/>
    </Stack.Navigator>
  );
}


export default Routes;