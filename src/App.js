
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from "./data.js"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div >
        <Navbar />
        {cards}
    </div>
  );
}

export default App;
