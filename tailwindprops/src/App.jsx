import { useState } from "react";
// import ProductCard from "./components/ProductCard";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-4 px-8">
        <div className="fixed flex-wrap justify-center gap-2 shadow-lg bg-white rounded-full text-white px-2 py-2 bottom-5">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-1 py-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-1 py-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-1 py-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-1 py-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none px-1 py-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// function Products() {
//   return (
//     <>
//       <div>
//         <ProductCard name="hp" price="70000" device="laptop" />

//         <ProductCard name="dell" price="8000" device="dell ryzen" />
//       </div>
//     </>
//   );
// }

// export default Products;
