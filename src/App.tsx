import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/mainSections/mainSection/MainSection";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <main/>
            <footer/>
        </div>
    );
}

export default App;

