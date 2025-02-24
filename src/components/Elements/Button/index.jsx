import { Link } from "react-router-dom";

const ButtonSignUpWith = (props) => {
  const { children = "...", pathSvg } = props;
  return (
    <button
      className="mt-4 flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
    >
      <svg
        className="w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        dangerouslySetInnerHTML={{ __html: pathSvg }}
      />
      {children}
    </button>
  )
};
const ButtonFill = ({children,onClick = ()=>{},color="bg-green-800 active:bg-green-800 hover:bg-green-900", textColor="text-white", type="button"}) => { 
  return (
    <button
      className={`block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center ${textColor} transition-colors duration-150  border border-transparent rounded-lg ${color} focus:outline-none focus:shadow-outline-purple`}
      type={type}
      onClick={()=>onClick()}
    >
      {children}
    
    </button>

  );
};

export {ButtonSignUpWith,ButtonFill};
