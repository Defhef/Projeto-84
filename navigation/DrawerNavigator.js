import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { FlatList } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
            
        <View style={styles.container}/>
            <SafeAreaView style={dtyles.droidSafeArea} />
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image 
                        source={require('../assets/logo.png')}
                        style={styles.IconImage}
                        ></Image>
                </View>
                <View style={styles.appTitleTextConatiner}>
                    <Text styles={styles.appTitleText}>Espectagrama</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                    />
            </View>
        </Drawer.Navigator>

    );
};

export default DrawerNavigator;