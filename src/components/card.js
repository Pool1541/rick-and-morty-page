import styled from "styled-components";
import StyledDiv from "./elements/div.elements";
import { FaMapMarkerAlt } from "react-icons/fa";
import StyledStatus from "./elements/status.elements";
import { openModal } from "./modal/openModal";

const StyledGridItem = styled(StyledDiv)`
  background-color: #ffffffe7;
  max-width: 220px;
  min-height: 200px;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 3px 3px 10px 1px #00000098;
  color: #212121;
  cursor: pointer;

  div {
    width: 100%;
    height: 70%;
    flex: 1 1 auto;

    div {
      padding: 10px 0 0 !important;
      display: flex;
      gap: 5px;
      align-items: center;
      svg {
        font-size: 0.8rem;
        color: #6c7fcf;
      }
      p {
        margin-top: 5px;
        font-size: 0.8rem !important;
      }
    }
  }

  div:last-child {
    height: 30%;
    padding: 5px 10px;
    position: relative;
    h3 {
      font-size: 0.9rem;
      width: 90%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    p {
      font-family: "Calibre-Regular";
      font-size: 0.9rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media screen and (max-width: 449px) {
    max-width: 290px;
  }
`;

export default function Card({ data }) {
  function handleClick(e) {
    openModal(data);
  }

  return (
    <StyledGridItem onClick={handleClick}>
      <StyledDiv>
        <img src={data.image} alt={data.name}></img>
      </StyledDiv>
      <StyledDiv>
        <h3>{data.name}</h3>
        <StyledStatus status={data.status}></StyledStatus>
        <p>{data.species}</p>
        <StyledDiv>
          <FaMapMarkerAlt />
          <p>{data.location.name}</p>
        </StyledDiv>
      </StyledDiv>
    </StyledGridItem>
  );
}
