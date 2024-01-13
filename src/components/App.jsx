import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
    </div>
  );
};
