import { useRouteError } from "react-router-dom"
import TextUrl from "../components/Elements/TextUrl/Index";
const Page404 = () => {
    const error = useRouteError()
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg">
                <div className="container flex flex-col items-center px-6 mx-auto">
                    <svg
                        className="w-12 h-12 mt-8 text-green-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <h1 className="text-6xl font-semibold text-green-900 dark:text-gray-200">
                        404
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Page is {error.statusText || error.message} Check the address or <TextUrl url="/">go back</TextUrl>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page404;