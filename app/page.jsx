import { useState } from 'react';

const Header = ({ title }) => {
  return (<h1>{ title ? title : 'Default Title' }</h1>);
};

export default function HomePage() {
  let id = 0;
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  const names = ['Ada LoveLace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <div>
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map(name => <li key={id++}>{name}</li>)}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}