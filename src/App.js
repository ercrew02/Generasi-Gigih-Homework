import Auth from "./Homework1/Auth/index";
import CartPage from "./Homework2mod3/cart";
import Search from "./Homework1/Component/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Auth />
      <Search />
      <CartPage />
    </div>
  );
}