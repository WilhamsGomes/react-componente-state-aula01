import React, { useState } from 'react';

export default function Contador(){

    const [num, setNum] = useState(0);

    return (

        <div>

            <h2>Contador {num}</h2>
            <button onClick={() => setNum(num + 5)}>Somar</button>
            <br></br>
            <button onClick={() => setNum(num - 3)}>Subtrair</button>

        </div>

    );

}