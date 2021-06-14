import { useEffect, useState } from "react";
import IncrementDecrement from "./components/IncrementDecrement";

function App() {
  useEffect(() => {}, []);

  const [fontSize, setFontSize] = useState(15);

  return (
    <div className="flex">
      <div className="min-h-screen bg-gray-900 w-2/3 md:w-80 p-3">
        <div className="menu-container">
          <label className="menu-title">FONT</label>
          <div className="menu-items">
            <div className="menu-item">
              <span className="menu-item-title">Font Size</span>
              <div className="menu-item-container">
                <span className="text-sm text-gray-400">18pt</span>
                <IncrementDecrement
                  onIncrement={() => console.log("increment font size")}
                  onDecrement={() => console.log("decrement font size")}
                  incrementDisabled={false}
                  decrementDisabled={false}
                />
              </div>
            </div>
            <div className="menu-item">
              <span className="menu-item-title">Line Spacing</span>
              <div className="menu-item-container">
                <span className="text-sm text-gray-400">2pt</span>
                <IncrementDecrement
                  onIncrement={() => console.log("increment line spacing")}
                  onDecrement={() => console.log("decrement line spacing")}
                  incrementDisabled={false}
                  decrementDisabled={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 min-h-screen flex-1"></div>
    </div>
  );
}

export default App;
