import Container from "../container";

const Header = () => {
  return (
    <header className="h-[60px] sticky top-0 z-20 w-full flex items-center bg-blue-900 text-white">
      <Container className="flex items-center h-full">
        <p className="font-bold text-xl pt-[1rem]">Dashboard</p>
      </Container>
    </header>
  );
};

export default Header;
