
export const Input = (props) => (
    <p>
        {props.text}
        <input
            value={props.value}
            onChange={props.onChange} />
    </p>
)
