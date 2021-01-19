import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Teste de contador</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function addCount(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addCount}>Adicionar</button>
        </div>
    )
    
}

export default Home