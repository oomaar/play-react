import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px;
`;

export const SubContainer = styled.div`
  background-color: #fff;
  color: #000;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

export const AccordionContainer = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 100%;
`;
export const AccordionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #272727;
  color: #fff;
  text-align: center;
  cursor: pointer;

  h1 {
      padding: 2rem;
      font-size: 2rem;
  }

  span {
      margin-right: 1.5rem;
  }
`;

export const DropDown = styled.div`
  background-color: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  padding: 10px;

  p {
      font-size: 2rem;
  }
`;