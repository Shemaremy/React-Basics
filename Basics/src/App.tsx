import Message from "./1) Components";
import Click from "./2) Events";
import Toprops from "./3) Props";
import AddToCart from "./4) Hooks";

function Final(){

  return (
    <div>
       <Message/> 
       <Click/> 
       <Toprops name="Props" />
       <AddToCart/>
    </div>
    
  );
}

export default Final;