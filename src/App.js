import React, { useState, useEffect } from 'react';

const ExampleWithEffect = () => {
    const [count, setCount] = useState(0);

    // useEffect будет выполняться после каждого рендеринга компонента
    useEffect(() => {
        document.title = `Вы кликнули ${count} раз`;
    }, [count]); // зависимость, если count изменится, useEffect выполнится заново

    return (
        <div>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми меня
            </button>
        </div>
    );
};

export default ExampleWithEffect;
