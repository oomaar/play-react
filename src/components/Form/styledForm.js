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

export const FormForm = styled.form`
  border-radius: 10px;
  background-color: hsla(0, 0%, 0%, 0.7);
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const FormGroup = styled.div`
    position: relative;
    margin: 15px 0;
    width: 100%;
`;

export const FormLabel = styled.label`
    position: absolute;
    border: 1px solid grey;
    border-radius: 5px;
    left: 0px;
    width: 100%;
    height: 65px;
    pointer-events: none;

    span {
      position: absolute;
      top: 20%;
      left: 7px;
      transition: all 0.1s ease;
      font-size: 16px;
    }
`;

export const FormInput = styled.input`
    background: transparent;
    border: 0;
    font-size: 16px;
    height: 65px;
    padding: 30px 10px 0;
    outline: 0;
    width: 100%;
    color: #fff;

    :focus {
      border: 2px solid hsl(100, 80%, 50%);
      border-radius: 5px;
   }

   :focus + ${FormLabel} span {
      transform: translateY(-70%);
      color: hsl(100, 80%, 50%);
      font-size: 12px;
      left: 5px;
      top: 25%;
    }

    :valid + ${FormLabel} span {
        transform: translateY(-70%);
        font-size: 12px;
        left: 5px;
        top: 25%;
    }
`;

export const FormTextareaGroup = styled.div`
  position: relative;
`;

export const TextAreaLabel = styled.label`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 200px;
    height: 100%;
    pointer-events: none;

    span {
      position: absolute;
      top: 10px;
      left: 0px;
      transition: all 0.1s ease;
    }
`;

export const FormTextArea = styled.textarea`
    background: transparent;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    padding: 30px 10px 0;
    outline: 0;
    width: 100%;
    color: #fff;

    :focus {
      border: 2px solid hsl(100, 80%, 50%);
      border-radius: 5px;
   }

    :focus + ${TextAreaLabel} span {
      transform: translateY(-70%);
      color: hsl(100, 80%, 50%);
      font-size: 12px;
      left: 0;
      top: 5px;
    }

    :valid + ${TextAreaLabel} span {
        transform: translateY(-70%);
        font-size: 12px;
        left: 0;
        top: 5px;
    }
`;

export const FormSubmit = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 10px;
  background-color: hsl(100, 80%, 50%);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 10px;

  :hover {
      opacity: 0.8;
  }
`;
