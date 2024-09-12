import LikeButton from './LikeButton';

const Header = ({ title }) => {
  return (<h1>{ title ? title : 'Default Title' }</h1>);
};

export default function HomePage() {
  let id = 0;
  const names = ['Ada LoveLace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <div>
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map(name => <li key={id++}>{name}</li>)}
      </ul>

      <LikeButton />
    </div>
  );
}