import React from 'react';
import { createStackNAvigator} from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return( 
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false 
            }}
        >

            <Stack.Screen name='Tela Inicial' component={TabNavigator} />
            <Stack.Screen name='Tela de Post' component={PostScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;