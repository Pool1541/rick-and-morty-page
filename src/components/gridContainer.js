import Card from "./card";
import StyledGridContainer from "./elements/gridContainer.elements";
import { Portal } from "./modal/loading";

export default function GridContainer({ characters }) {
  if (characters.length < 1) {
    return <Portal />;
  }

  return (
    <StyledGridContainer>
      {characters.map((character) => (
        <Card key={character.id} data={character}></Card>
      ))}
    </StyledGridContainer>
  );
}
