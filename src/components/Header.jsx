export default function Header() {
  const letters = ["B", "U", "N", "D", "E", "S", "L", "I", "G", "A"];

  return (
    <header className="header">
      {letters.map((letter, index) => (
        <h1 key={index} className="header__letter">
          {letter}
        </h1>
      ))}
    </header>
  );
}
