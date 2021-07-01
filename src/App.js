import styled from "styled-components/macro";
import { Accordion, Form, Header, Navbar, Hover } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Accordion />
      <Form />
      <Hover />
    </Application>
  );
};

export default App;

const Application = styled.div``;
