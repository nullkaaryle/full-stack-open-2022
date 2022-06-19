
// helper to render error message
// the style can be found from index.css
export const ErrorNotification = ({message}) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className="error">
                {message}
            </div>
        )
    }
}

// helper to render success message
// the style can be found from index.css
export const SuccessNotification = ({message}) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className="success">
                {message}
            </div>
        )
    }
}
