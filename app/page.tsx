
import Toolbar from "./components/toolbar";
import SolidButton from "./components/solid-button";

export default function Home() {
  return (
    <main className="wrapper">
      <Toolbar />
      <SolidButton label="Add to cart" />
    </main>
  );
}
