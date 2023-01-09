import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {
const [resid, setResid] = useState({});
useEffect ( () => {
    axios.get(resident)
    .then (res=> setResid(res.data));
   
},[]);
console.log(resid)
    return (
        <div className='cardresident' >
           <h2>{resid.location?.name} </h2>
            <img src={resid.image} alt="" />
            <p>status: {resid.status} </p>
            <p>origin : {resid.origin?.name} </p>
            <p>episodes where appear: {resid.episode?.length} </p>
        </div>
    );
};

export default ResidentInfo;