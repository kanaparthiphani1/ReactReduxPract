import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((store) => store.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="outer">
      <h1>Num of Cakes - {numOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(3));
        }}
      >
        Restock Cake
      </button>
    </div>
  );
};

export default CakeView;
