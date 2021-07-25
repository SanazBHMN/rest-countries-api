import React from 'react';
import { useParams } from 'react-router';

function DetailPage(props) {
    const {name} = useParams();
    console.log(props.country)
    return (
        <div>
            {name}
        </div>
    )
}

export default DetailPage
