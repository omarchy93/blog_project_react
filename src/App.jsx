import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCatagory from "./pages/ByCatagory";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCatagory/:catagoryID" element={<ByCatagory />} />
        <Route path="/details/:postId" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
