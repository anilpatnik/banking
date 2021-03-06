import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { State } from "./state/reducers";
import { Button } from "../src/components";

function App() {
  const state = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>{state}</h1>
      <Button onClick={() => depositMoney(100)} color="green">
        Deposit
      </Button>
      <Button onClick={() => withdrawMoney(20)} color="red">
        Withdraw
      </Button>
      <Button onClick={() => bankrupt()}>Bankrupt</Button>
    </div>
  );
}

export default App;
