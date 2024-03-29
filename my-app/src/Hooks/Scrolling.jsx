

// import React, { useState, useEffect } from 'react';

// const Scrolling = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   const fetchData = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const newData = Array.from({ length: 10 }, (_, index) => `Item ${(page - 1) * 10 + index + 1}`);
//       setData(prevData => [...prevData, ...newData]);
//       setLoading(false);
//       setPage(prevPage => prevPage + 1);
//     }, 1000); 
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
//       fetchData(); 
//     };

//     window.addEventListener('scroll', handleScroll); 

//     return () => {
//       window.removeEventListener('scroll', handleScroll); 
//     };
//   }, [data]); 

//   return (
//     <div style={{ minHeight: '2000px' }}>
//       <h1>Scroll down to fetch more data</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//         {loading && <li>Loading...</li>}
//       </ul>
//     </div>
//   );
// };

// export default Scrolling

import React, { useState, useEffect } from 'react';

const Scrolling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, index) => `Item ${(page - 1) * 10 + index + 1}`);
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
      setPage(prevPage => prevPage + 1);
    }, 1000);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const bodyHeight = document.body.clientHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (windowHeight + scrollPosition >= bodyHeight - 10 && !loading) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); 

  
  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div style={{ minHeight: '2000px' }}>
      <h1>Scroll down to fetch more data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {loading && <li>Loading...</li>}
      </ul>
    </div>
  );
};

export default Scrolling;