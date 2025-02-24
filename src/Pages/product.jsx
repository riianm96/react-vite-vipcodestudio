import { useState } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import ProductLayout from "../components/Layout/ProductsLayout";

const products = [
  {
    id: 1,
    title: "Sepatu 1",
    price: 500000,
    image: "/assets/img/products/product_1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla error itaque nemo fuga voluptatum vero? Laborum eveniet deserunt ut voluptatem iste vitae nesciunt molestiae vel, accusamus assumenda aperiam facere?",
  },
  {
    id: 2,
    title: "Sepatu 2",
    price: 550000,
    image: "/assets/img/products/product_2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla error itaque nemo eveniet deserunt ut voluptatem iste vitae nesciunt molestiae vel, accusamus assumenda aperiam facere?",
  },
  {
    id: 3,
    title: "Sepatu 3",
    price: 560000,
    image: "/assets/img/products/product_3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla error itaque nemo fuga voluptatum vero?",
  },
  {
    id: 4,
    title: "Sepatu 4",
    price: 570000,
    image: "/assets/img/products/product_3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla error itaque nemo fuga voluptatum vero?",
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  // Fungsi untuk menambah produk ke keranjang
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Jika produk sudah ada di keranjang, tambahkan jumlahnya

      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      );
    } else {
      // Jika produk belum ada di keranjang, tambahkan produk baru
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <ProductLayout cart={cart} cartCount={cart.length} removeFromCart={removeFromCart}>
      {products.map((product) => (
        <CardProduct key={product.id} onClickBtnCart={() => addToCart(product)}>
          <CardProduct.Photos src={product.image} />
          <CardProduct.TitlePrice title={product.title} price={product.price} />
          <CardProduct.Description>
            {product.description}
          </CardProduct.Description>
        </CardProduct>
      ))}
    </ProductLayout>
  );
};

export default ProductPage;