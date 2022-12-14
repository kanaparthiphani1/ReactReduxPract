import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((store) => store.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div className="outer">
      <h1>Num of IceCream - {numOfIceCreams}</h1>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order IceCream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(3));
        }}
      >
        Restock IceCream
      </button>
    </div>
  );
};

export default IceCreamView;
