import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/mainSections/mainSection/MainSection";
import {InfoSection} from "./layout/mainSections/infoSection/InfoSection";
import {PremiumQuality} from "./layout/mainSections/pemiumQuality/PremiumQuality";
import {Restaurants} from "./layout/mainSections/restaurants/Restaurants";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <InfoSection/>
            <PremiumQuality/>
            <Restaurants/>
            <main/>
            <footer/>
        </div>
    );
}

export default App;

