import Card from "../Components/Card/Card";
import Header from "../Components/Header/Header";
import { ContainerPage, Main } from "./style";

function App() {
  return (
    <ContainerPage>
      <Header />
      <Main>
        <Card></Card>
      </Main>
    </ContainerPage>
  );
}

export default App;
