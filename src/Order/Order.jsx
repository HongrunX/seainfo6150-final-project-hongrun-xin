import React from 'react'

const Food = props => {
    let storeData= props.location.state.storeData;
    console.log(storeData);
    return (
        <div>
            <h1>{storeData.slug}</h1>
        </div>
    )
}


export default Food
