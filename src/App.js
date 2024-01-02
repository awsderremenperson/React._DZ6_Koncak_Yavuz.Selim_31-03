import React, { useState, useMemo, useCallback } from 'react';

const ExampleComponent = () => {
    const [number, setNumber] = useState(0);

    const memoizedResult = useMemo(() => {
        console.log('Вычисление результата useMemo');
        return number + number * 2;
    }, [number]);

    const memoizedCallback = useCallback(() => {
        console.log('Изменение числа через useCallback');
        setNumber((prevNumber) => prevNumber + 1);
    }, []);

    return (
        <div>
            <p>Число: {number}</p>
            <p>Результат сложения числа и его удвоенного значения: {memoizedResult}</p>
            <button onClick={memoizedCallback}>Увеличить число</button>
        </div>
    );
};

export default ExampleComponent;
