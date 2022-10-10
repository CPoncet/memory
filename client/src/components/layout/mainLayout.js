import Nav from './nav';

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <header>
        <div className="container mx-auto">
          <img src="logo-no-background.svg" alt="logo" />
          <Nav />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container mx-auto">
          Copyright 2022 -{' '}
          <a
            rel="noreferrer"
            href="https://www.clementponcet.fr"
            target="_blank"
          >
            Clément Poncet
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
