import Toolbar from "./components/toolbar";
import DataList from "./components/data-list";
import FooterBar from "./components/footer-bar";

export default function Home() {
  return (
    <div className="wrapper">
      <header className="header">
        <Toolbar />
      </header>
      <main>
        <DataList />
      </main>
      <footer className="footer">
        <FooterBar />
      </footer>
    </div>
  );
}
