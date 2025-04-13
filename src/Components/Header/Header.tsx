import { Container, Logo, SearchBar } from "./style";

function Header() {
  return (
    <Container>
      <Logo>Search Your Repos</Logo>
      <SearchBar type="text" placeholder="Search..." />
    </Container>
  );
}

export default Header;
