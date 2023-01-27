import { useState } from "react";

function FunctionalCounter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return(
        <div>
            <div> Counter Value: {counter}</div>
            <div>
                <button onClick={increment}>Add 1 to counter.</button>
            </div>
            <div>
                <button onClick={decrement}>Sub. 1 from counter.</button>
            </div>
        </div>
    );
}

export default FunctionalCounter;