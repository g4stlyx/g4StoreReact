import Dashboard from "./Dashboard";
import Navi from "../navi/Navi"
import { Route, Routes } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound"


/*
yazma sırası
özet: actionType => action => reducer => 

actionType(function tipi yazılır) => action(function yazılır) =>
=> reducer(function tipine göre aksiyonlar çalıştırılır,state ve store burada tutulur,daha sonra
  buradan configureStore ve redux-thunk aracılığı ile veri çekilir)
=> 


*/

function App() {
  return (
    <div>
      <Navi/> <br></br>
      
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/product" element={<Dashboard/>} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>} /> 
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>} />
        <Route path="/cart" element={<CartDetails/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
