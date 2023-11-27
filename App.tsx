import { Home } from "./src/Screens/Home";
import { StatusBar } from "react-native";

export default function App(){
  return(
    <>
    <StatusBar backgroundColor="transparent" barStyle={"light-content"} translucent />
   <Home/>
    </>
  )
}