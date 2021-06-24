import styled from "styled-components/macro";
import { Accordion, Form, Header, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Accordion />
      <Form />
    </Application>
  );
};

export default App;

const Application = styled.div``;
