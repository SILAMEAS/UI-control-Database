import { Routes, Route } from "react-router-dom";
import Adduser from "./Component/Adduser";
import Detail from "./Component/Detail";
import Home from "./Component/Home";
import List from "./Component/List";
import Detailpc from "./Component_pc/Detailpc";
import Listpc from "./Component_pc/Listpc";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<List />} />
        <Route path="/user/detail/:id" element={<Detail />} />
        <Route path="/user/adduser" element={<Adduser />} />
        <Route path="/pc" element={<Listpc />} />
        <Route path="/pc/detail/:id" element={<Detailpc />} />
      </Routes>
    </>
  );
}

export default App;
