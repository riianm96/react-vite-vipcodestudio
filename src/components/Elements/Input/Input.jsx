const Input = (props) => {
    const {type, placeholder,name,id} = props;
    return (
        <input type={type} name={name} id={id}
            className="block w-full mt-1 text-sm border border-gray-300 rounded-lg px-4 py-2 dark:border-gray-600 dark:bg-gray-700 focus:border-green-600 focus:outline-none focus:ring-green-700 dark:text-gray-300 dark:focus:ring-gray-500"
            placeholder={placeholder}
        />
    )
}

export default Input