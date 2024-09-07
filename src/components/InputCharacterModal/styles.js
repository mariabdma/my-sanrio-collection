import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  @media (max-width: 768px) {
    textarea {
      min-height: 80px;
    }
  }
`;
