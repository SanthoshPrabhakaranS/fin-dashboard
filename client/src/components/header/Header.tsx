import Container from "../container";

const Header = () => {
  return (
    <header className="h-[60px] sticky top-0 z-20 w-full flex items-center px-[1.5rem] bg-blue-900 text-white">
      <Container>
        <p className="font-bold text-xl">Dashboard</p>
      </Container>
    </header>
  );
};

export default Header;
