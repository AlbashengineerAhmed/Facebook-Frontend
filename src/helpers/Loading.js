import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({loading}) => {
  // console.log(loading);
  
  return (
    <div className=''>
      <ScaleLoader color="#1876f2" loading={loading} size={30} />
    </div>
  );
}

export default Loading
