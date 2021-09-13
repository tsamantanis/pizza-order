import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="row">
      <h1>Pizza Order</h1>
      <form>

        <div className="col">
          <input type="text" className="name"  onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <div className="checkboxes">
            <label>
              <input type="checkbox" value={peperoni} onChange={() => setPeperoni(!peperoni)} />
              Peperoni
            </label>
            <label>
              <input type="checkbox" value={sausage} onChange={() => setSausage(!sausage)} />
              Sausage
            </label>
            <label>
              <input type="checkbox" value={peppers} onChange={() => setPeppers(!peppers)} />
              Peppers
            </label>
            <label>
              <input type="checkbox" value={onions} onChange={() => setOnions(!onions)} />
              Onions
            </label>
          </div>
        </div>
        <div className="col">
          <h3>Your Order</h3>
          {name && <div className="margin-bottom">{name}</div>}
          <div className="ingredients">
           {peperoni && <div>Peperoni</div>}
           {sausage && <div>Sausage</div>}
           {peppers && <div>Peppers</div>}
           {onions && <div>Onions</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
