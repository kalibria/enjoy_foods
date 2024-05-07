import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/mainSections/mainSection/MainSection";
import {InfoSection} from "./layout/mainSections/infoSection/InfoSection";
import {PremiumQuality} from "./layout/mainSections/pemiumQuality/PremiumQuality";
import {Restaurants} from "./layout/mainSections/restaurants/Restaurants";
import {Dishes} from "./layout/mainSections/dishes/Dishes";
import {PurchasesDashboard} from "./layout/mainSections/purchasesDashboard/PurchasesDashboard";
import {CustomerSay} from "./layout/mainSections/customerSay/CustomerSay";
import {Discount} from "./layout/mainSections/discount/Discount";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <InfoSection/>
            <PremiumQuality/>
            <Restaurants/>
            <Dishes/>
            <PurchasesDashboard/>
            <CustomerSay/>
            <Discount/>
            <footer/>
        </div>
    );
}

export default App;

