import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import MainGrid from "./components/MainGrid/MainGrid";
import Nav from "./components/Nav/Nav";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper/Wrapper";
import Deck from "./pages/Deck";
import Setting from "./pages/Setting";
export function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Router>
        <MainGrid>
          <Nav />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/deck/:id" element={<Deck />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </Wrapper>
        </MainGrid>
      </Router>
    </div>
  );
}
