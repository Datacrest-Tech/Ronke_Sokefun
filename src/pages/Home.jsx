import Hero from "../components/Hero";
// CredibilityBar moved into Hero to display alongside hero content
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About preview={true} />
    </main>
  );
}
