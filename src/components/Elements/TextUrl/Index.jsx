import { Link } from "react-router-dom";

const TextUrl = (props) => {
    const { children = "...", url, add } = props;
    return (
        <Link
            className={`text-sm font-medium text-green-800 dark:text-green-600 hover:underline ${add}`}
            to={url}
        >
            {children}
        </Link>
    )
}

export default TextUrl;