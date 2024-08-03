type CounterButtonType = {
    value: number;
    inc: () => void;
    dec: () => void;
}

export function CounterButton({value, inc, dec,}: CounterButtonType) {
    return (
        <>
            <button onClick={dec}>-</button>
                {value}
            <button onClick={inc}>+</button>
        </>
    );
}
