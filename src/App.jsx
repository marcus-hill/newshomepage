import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Article from "./pages/Article.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="articles">
            <Route index element={<Home></Home>}></Route>
            <Route path=":id" element={<Article></Article>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
