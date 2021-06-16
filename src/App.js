import styled from "styled-components/macro";
import { Accordion, Header, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Accordion />
    </Application>
  );
};

export default App;

const Application = styled.div``;
