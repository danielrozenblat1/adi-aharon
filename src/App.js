import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import ModelViewer from './components/three/Three';
import SecondScreen from './screens/SecondScreen';
import FormScreen from './formScreen/FormScreen';
import ThirdScreen from './screens/ThirdScreen';
import AboutMe from './components/me/Me';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <FirstScreen/>
  <SecondScreen/>
  <ModelViewer/>
  <FormScreen/>
  <AboutMe/>
  <ThirdScreen/>
<ForthScreen/>
<FifthScreen/>
<ByMe/>
  </>
}

export default App;
