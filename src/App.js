import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UsersView from "./features/users/UserView";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UsersView />
    </div>
  );
}
