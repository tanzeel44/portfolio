import Hamburger from './Hamburger/Hamburger';

export default function Header() {
  return (
    <header style={{
      position: 'relative', backgroundColor: 'blue', margin: '200px', border: '1px solid black',
    }}
    >
      <Hamburger />
    </header>
  );
}
