import Toolbar from "./components/toolbar";
import DataList from "./components/data-list";
import SolidButton from "./components/solid-button";

export default function Home() {
  return (
    <main className="wrapper">
      <Toolbar />
      <DataList />
      <SolidButton label="Add to cart" />
    </main>
  );
}
