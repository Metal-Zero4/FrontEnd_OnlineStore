import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Admin from "./components/admin";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GlobalState from "./context/globalState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  /**const test = () => {
    let colors = [
      {
        color: "red",
        quantity: 10,
      },
      {
        color: "blue",
        quantity: 3,
      },
      {
        color: "green",
        quantity: 5,
      },
      {
        color: "yellow",
        quantity: 2,
      },
      {
        color: "purple",
        quantity: 1,
      },
      {
        color: "red",
        quantity: 10,
      },
      {
        color: "blue",
        quantity: 3,
      },
      {
        color: "green",
        quantity: 5,
      },
    ];
    // 1 - print each color on the console
    // logic here
    for (let i = 0; i<colors.length; i++){
      let item = colors[i];
      console.log(item.color);
    }

    // sum the quantity of every color
    let sum = 0;
    for(let i = 0; i<colors.length; i++){
      let num = colors[i];
      sum = sum + num.quantity;
      sum+= num.quantity;
    }
    console.log(sum);

    // count a specific color
    let wantedColor = "green";
    let wantedColorTotal = 0;
    for (let i = 0; i<colors.length; i++) {
      let item = colors[i];
      
      
    };
    if (item.color === wantedColor) {

    };

  };
  */
  return (
    <div className="App">
      <GlobalState>
      <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/catalog" exact element={<Catalog />}></Route>
          <Route path="/admin" exact element={<Admin />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>

      
      <Footer></Footer>
      </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;


