import React from 'react';
import './counter2.css';

function CounterFunction() {
    const [count, setCount] = React.useState(0);

    function updateCounter(type) {
        if (type === 'add') {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div className="counterLayout">
            <h2 className="heading">Counter - Function Program.</h2>

            <p>Counter Value : {count}</p>

            <div className="buttonLayout">
                <button 
                    className="button green" 
                    onClick={() => updateCounter('add')}
                >
                    Add Counter
                </button>

                <button 
                    className="button red" 
                    onClick={() => updateCounter('minus')}
                >
                    Minus Counter
                </button>
            </div>
        </div>
    );
}

export default CounterFunction;