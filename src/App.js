import './App.css';
import { Header } from "./header";
import { EventsByDateCards } from "./eventsByDateContainer";
import { Cards } from "./cardContainer";


function App() {
  return (
    <div className="App">
      <div className="CardContainer">
        <Header />
        <EventsByDateCards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
