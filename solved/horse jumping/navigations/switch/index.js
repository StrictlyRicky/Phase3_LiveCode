import { createSwitchNavigator } from 'react-navigation';
import Home from "../../screens/Home"
import Game from "../../screens/Game"
import Finish from "../../screens/Finish"

export default createSwitchNavigator({
    Home,
    Game,
    Finish
}, {
    backBehavior: "none"
});