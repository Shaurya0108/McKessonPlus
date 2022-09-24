import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import DocComPage from '../pages/DocComPage';
import ResourcePage from '../pages/ResourcePage';
import Camera from '../pages/Camera';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component = {HomeScreen} />
            <Tab.Screen name="DocComPage" component = {DocComPage} />
            <Tab.Screen name="ResourcePage" component = {ResourcePage} />
            <Tab.Screen name="Camera" component = {Camera} />
        </Tab.Navigator>
    );
}
