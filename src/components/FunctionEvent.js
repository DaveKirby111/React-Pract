function FunctionEvent() {
    function handleClick() {
        console.log("Button was clicked");
    }

    return (
        <div>
            <button onClick={handleClick}>Function Event click</button>
        </div>
    );
}

export default FunctionEvent;