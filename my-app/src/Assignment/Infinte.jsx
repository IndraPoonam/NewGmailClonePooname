// import React, { useState, useEffect } from 'react';

// const Infinte= () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`your-api-url?page=${page}`);
//       const newData = await response.json();
//       setData(prevData => [...prevData, ...newData]);
//       setPage(prevPage => prevPage + 1);
//     };

//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         fetchData();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [page]);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.content}</div>
//       ))}
//     </div>
//   );
// };

// export default Infinte;



// import React, { useState, useEffect } from 'react';

// const Infinte = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       // Simulated API call for fetching data
//       const newData = await fetchMoreData();
//       setData(prevData => [...prevData, ...newData]);
//       setIsLoading(false);
//     };

//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         fetchData();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array to run effect only once

//   // Simulated function to fetch more data
//   const fetchMoreData = async () => {
//     // Simulate fetching data from an API
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([/* New data array */]);
//       }, 1000); // Simulating a delay
//     });
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))}
//       {isLoading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default Infinte;




import React, { useState, useEffect } from 'react';

const Infinte = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulated API call for fetching data
      const newData = await fetchMoreData();
      setData(prevData => [...prevData, ...newData]);
      setIsLoading(false);
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  // Simulated function to fetch more data
  const fetchMoreData = async () => {
    // Simulate fetching data from an API
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([/* New data array */]);
      }, 1000); // Simulating a delay
    });
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Infinte;