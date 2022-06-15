
// helper for rendering input field
export const Input = (props) => (
    <p>
        {props.text}
        <input
            value={props.value}
            onChange={props.onChange} />
    </p>
)

// helper for button rendering
export const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
