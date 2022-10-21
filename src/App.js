import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";

function App (){
  const text = {title: "hello", subtitle: "lorem lorem lorem"}
  return (
    <div className="App">
      <AboutUs text={text}/>
    </div>
  );
}
export default App;