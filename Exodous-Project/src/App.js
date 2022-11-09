import Page2 from "./Componets/Page2/Page2";
import Page3 from "./Componets/Page3/Page3";
import Page4 from "./Componets/Page4/Page4";
import Page6 from "./Componets/Page6/Page6";
import Page7 from "./Componets/Page7/Page7";
import Page8 from "./Componets/Page8/Page8";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/admin/orders" element={<Page2 />} />
   <Route path="/admin/orders/:id" element={<Page3 />} />
   </Routes>
   <Page3/>
   <Page4/>
   <Page6/>
   <Page7/>
   <Page8/>
   </BrowserRouter>
  );
}

export default App;
