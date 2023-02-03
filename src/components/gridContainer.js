import Card from "./card";
import StyledGridContainer from "./elements/gridContainer.elements";

export default function GridContainer({ characters }) {
  return (
    <StyledGridContainer>
      {characters.map((character) => (
        <Card key={character.id} data={character}></Card>
      ))}
    </StyledGridContainer>
  );
}
