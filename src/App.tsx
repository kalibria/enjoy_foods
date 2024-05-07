import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/mainSections/mainSection/MainSection";
import {InfoSection} from "./layout/mainSections/infoSection/InfoSection";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <InfoSection/>
            <main/>
            <footer/>
        </div>
    );
}

export default App;

