import styled from "styled-components/macro";

export const HeaderTag = styled.header`
  border: 1px solid #555;
  height: 80vh;
  padding: 25px;
  color: #000;
`;

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  height: 100%;
  display: flex;

  .custom-shape-divider-bottom-1623447323 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
   }

   .custom-shape-divider-bottom-1623447323 {
       svg {
           position: relative;
           display: block;
           width: calc(100% + 1.3px);
           height: 521px;
       }
   }

   .custom-shape-divider-bottom-1623447323 .shape-fill {
       fill: #f0a020;
   }
`;

export const SubContainer = styled.div`
  border: 1px solid #f00;
  flex: 1;
`;

export const BackgroundContainer = styled.div``;