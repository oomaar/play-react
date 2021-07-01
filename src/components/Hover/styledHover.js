import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px;
`;

export const SubContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const List = styled.ul`
  position: relative;
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  transition: 0.25s;
  /* pointer-events: none; */

  :hover .facebook {
    background: #1877f2;
    color: #fff;
  }

  :hover .instagram {
    background: #e4405f;
    color: #fff;
  }

  :hover .github {
    background: #202020;
    color: #fff;
  }

  :hover .twitter {
    background: #0099ff;
    color: #fff;
  }
`;

export const Link = styled.a`
  position: relative;
  width: 120px;
  height: 120px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  border-radius: 10px;
  text-decoration: none;
  margin: 20px;
  font-size: 4em;
  transform-style: preserve-3d;
  perspective: 500px;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
  transition: background 0.25s;
`;