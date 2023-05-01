import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const LoadingComponent: React.FC = () => {
  const skeletons = Array.from({ length: 20 }, (_, index) => (
<div key={index} className="flex flex-col items-center bg-white rounded-lg p-5 text-center product-card cursor-pointer">
  <div className="flex">
    <Skeleton variant="rectangular" width={280} height={200} className="rounded-t-lg rounded-2xl h-48 max-w-full object-contain product-card-img w-full sm:w-auto" />
  </div>
  <h3 className="text-sm font-bold max-w-full break-words mb-10"><Skeleton variant="text" width={150} /></h3>
  <p className="text-gray-700 mb-10"><Skeleton variant="text" width={100} /></p>
  <Skeleton variant="rectangular" width={150} height={40} className="bg-blue-500 text-white px-4 py-2 rounded-lg m-6" />
</div>


  ));

  return <>{skeletons}</>;
};

export default LoadingComponent;