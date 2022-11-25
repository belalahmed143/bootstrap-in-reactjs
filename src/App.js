
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import StateCard from './components/StateCard';
import CONDITIONAL_RENDERING from './components/CONDITIONAL_RENDERING/Index';
import ONCHANGE_EVENHANDELER from './components/ONCHANGE_EVENHANDELER/OnchangeHendeler'
import EVENT_BINDING from './components/EVENT_BINDING/Index';
import USESTATE_HOOK from './components/USESTATE_HOOK/Index';
function App() {
  return (
    <div className="App">
       <Header />
      <Banner />
      <Cards />
      <StateCard />
      <CONDITIONAL_RENDERING />
      <ONCHANGE_EVENHANDELER />
      <EVENT_BINDING />
      <USESTATE_HOOK />
    </div>
  );
}

export default App;


