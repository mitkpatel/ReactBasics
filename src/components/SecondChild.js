import React from 'react';
  
const SecondChild = ({data}) => {
    return(
        <div>
            <h2> Message from Second component </h2>
            <h3> Name - {data.name} </h3>
            <h3> Id - {data.id} </h3>
        </div>
    );
}

export default SecondChild;
  