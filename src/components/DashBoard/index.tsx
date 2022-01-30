import { Container } from "./styles";
import { Summary } from "../Summary/index";
import { TrasactionsTable } from "../TransactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <Summary></Summary>
      <TrasactionsTable></TrasactionsTable>
    </Container>
  );
}
