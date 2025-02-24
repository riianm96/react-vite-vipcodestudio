import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cart, cartCount, removeFromCart }) => {
  // console.log(cart)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-800 dark:text-purple-300">
        {/* Mobile Hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-green-700"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Search Input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-green-700">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-green-700 focus:outline-none"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Theme Toggler */}
          <li>
            <button
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label="Toggle color mode"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>

          {/* Cart Dropdown */}
          <li className="relative">
            <button
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label="Carts"
              onClick={() => setIsCartMenuOpen(!isCartMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              {cartCount > 0 && (
                // <span className="absolute top-0 right-0 inline-flex items-center justify-center text-xs px-2 py-1 font-bold leading-none text-red-100 bg-red-600 rounded-full">
                //   {/* {cartCount} */}
                // </span>
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border-2 border-white rounded-full dark:border-gray-800" />
              )}
            </button>

            {/* Cart Dropdown Menu */}
            {isCartMenuOpen && (
              <div className="absolute right-0 w-90 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                {cart.length > 0 ? (
                  cart.map((item) => (                    
                    <div
                      key={item.id}
                      className="flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    >
                      <span className="text-xs">{item.title}</span>
                      <span  className="text-xs" >{item.price}</span>                      
                      <span  className="text-xl text-red-600" >
                        <Link>-</Link>
                      </span>
                      <span  className="text-xs" >{item.qty}</span>
                      <span  className="text-xl text-green-800" >
                        <Link>+</Link>
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Del
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-center">Keranjang kosong</p>
                )}
              </div>
            )}
          </li>

          {/* Notifications Dropdown */}
          <li className="relative">
            <button
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label="Notifications"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border-2 border-white rounded-full dark:border-gray-800" />
            </button>

            {/* Notifications Dropdown Menu */}
            {isNotificationsOpen && (
              <div className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                <a
                  href="#"
                  className="flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <span>Messages</span>
                  <span className="px-2 py-1 text-xs font-bold text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                    13
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <span>Sales</span>
                  <span className="px-2 py-1 text-xs font-bold text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                    2
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <span>Alerts</span>
                </a>
              </div>
            )}
          </li>

          {/* Profile Dropdown */}
          <li className="relative">
            <button
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label="Account"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="Profile"
              />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
                <a
                  href="#"
                  className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Profile</span>
                </a>
                <a
                  href="#"
                  className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Settings</span>
                </a>
                <a
                  href="#"
                  className="flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Log out</span>
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
