import styled from "styled-components/macro";
import { Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Sidebar />
    </Application>
  );
};

export default App;

const Application = styled.div``;
