import React, { useEffect } from 'react';

const Lifecycle = () => {
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []); 

  useEffect(() => {
    console.log('Component updated');
  });

  return <div>This is a logger component</div>;
};

export default Lifecycle;