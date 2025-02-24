import Sidebar from "../Fragments/SideBar";
import NavBar from "../Fragments/NavBar";

const ProductLayout = ({ children, cart, cartCount, removeFromCart }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <NavBar cart={cart} cartCount={cartCount} removeFromCart={removeFromCart} />
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Cards
            </h2>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
              Cards with title
            </h4>
            <div className="grid gap-6 mb-8 md:grid-cols-3">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductLayout;