import { Children } from "react";

const Label = (props)=>{
    const {children} = props;
    return (
        <span className="text-gray-700 dark:text-gray-400">{children}</span>
    )
}

export default Label;