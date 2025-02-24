const Label = (props) => {
    const {label, subLabel} = props;
    return (
        <span className="ml-2">
            {label}
            <span className="underline">{subLabel}</span>
        </span>
    )
}

export default Label;