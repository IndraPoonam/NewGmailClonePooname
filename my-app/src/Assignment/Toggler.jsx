// import React, { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';

// const Toggler = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <button onClick={toggleTheme}>
//         Toggle Theme
//       </button>
//       <p>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</p>
//     </div>
//   );
// };

// export default Toggler;


// import React, { useContext } from 'react';
// const Toggler = () => {
//   const { theme, toggleTheme } = useContext();
//   return (
//     <div>
//       <button onClick={toggleTheme}>
//         Toggle Theme
//       </button>
//       <p>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</p>
//     </div>
//   );
// };

// export default Toggler;



import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 
const Toggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};
export default Toggler;




