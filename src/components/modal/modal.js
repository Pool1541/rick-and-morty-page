import styled from "styled-components";
import StyledButton from "../elements/button.elements";
import StyledDiv from "../elements/div.elements";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import StyledStatus from "../elements/status.elements";

const StyledModal = styled(StyledDiv)`
  width: 100%;
  height: 100%;
  background-color: #757575cb;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled(StyledDiv)`
  position: relative;
  height: 70%;
  min-height: 300px;
  max-height: 500px;
  width: 80%;
  min-width: 250px;
  max-width: 400px;
  background-color: white;
  border-radius: 15px;
  img {
    width: 73%;
    height: 55%;
    position: absolute;
    left: calc(50% - 36.5%);
    top: -50px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 1px #00000063;
  }
`;

const StyledCloseBtn = styled(StyledButton)`
  padding: 7px 10px 0px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    color: #cc4a4acc;
  }
`;

const StyledInfo = styled(StyledDiv)`
  margin-top: clamp(7rem, 33vh, 14rem);
  height: 43%;
  width: 100%;
  & > div {
    height: 100%;
    padding: 0 20px;
  }
`;

const StyledTitle = styled(StyledDiv)`
  text-align: center;
  color: #5a5a5a;
  h2 {
    font-size: 1.5rem;
  }
`;

const StyledParragraph = styled.p`
  position: relative;
  color: ${({ characterData }) => (characterData ? "#050505" : "#858585")};
  margin-bottom: 5px;
`;

export default function Modal({ root, info }) {
  const ref = useRef();

  function handleClick() {
    root.unmount();
    document.querySelector("#modal").remove();
  }
  return (
    <StyledModal ref={ref}>
      <StyledContainer>
        <img src={info.image} />
        <StyledCloseBtn onClick={handleClick}>
          <RxCross2 />
        </StyledCloseBtn>
        <StyledInfo>
          <StyledDiv>
            <StyledTitle>
              <h2>{info.name}</h2>
              <StyledParragraph>{"Human"}</StyledParragraph>
            </StyledTitle>
            <StyledParragraph as="div" characterData>
              {"Alive"}
              <StyledStatus status={"Alive"} />
            </StyledParragraph>
            <StyledParragraph as="div">
              Last known location:
              <StyledParragraph characterData>{"Desconocida"}</StyledParragraph>
            </StyledParragraph>
            <StyledParragraph as="div">
              First seen in:
              <StyledParragraph characterData>
                {"Earth (Replacement Dimension)"}
              </StyledParragraph>
            </StyledParragraph>
          </StyledDiv>
        </StyledInfo>
      </StyledContainer>
    </StyledModal>
  );
}
