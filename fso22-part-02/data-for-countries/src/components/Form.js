
export const Input = (props) => (
    <p>
        {props.text}
        <input
            value={props.value}
            onChange={props.onChange} />
    </p>
)


export const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
