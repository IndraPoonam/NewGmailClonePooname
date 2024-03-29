// import React, { useState } from 'react';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     < ><center>
//       <button onClick={toggleMenu}>Toggle Menu</button>
//       {isOpen && (
//         <ul >
//           <li>Poonam Singh</li>
//           <li>Indian</li>
//           <li>Rewa</li>
//         </ul>
      
//       )}
//       </center>
//     </>
//   );
// };

// export default Menu;

// import React, { useMemo, useState } from 'react';

// function Menu({ a, b }) {
//   // Memoize the result of the sum function
//   const sum = useMemo(() => {
//     console.log('Calculating sum...');
//     return a + b;
//   }, [a, b]); // Re-run the sum function if `a` or `b` changes

//   return (
//     <div>
//       <p>{sum}</p>
//     </div>
//   );
// }
// export default Menu;

import React, { useMemo } from 'react';
function Menu({ a, b }) {
  const sum = useMemo(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      return "Invalid Input"; 
    }
    console.log('Calculating sum...');
    return numA + numB;
  }, [a, b]); 
  return (
    <div>
      <p>{sum}</p>
    </div>
  );
}
export default Menu;
