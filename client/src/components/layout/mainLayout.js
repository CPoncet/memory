import Nav from './nav';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
