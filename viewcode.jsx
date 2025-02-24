import React, { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]); // State untuk menyimpan keranjang

  // Fungsi untuk menambah produk ke keranjang
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Jika produk sudah ada di keranjang, tambahkan jumlahnya
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 } // Tingkatkan kuantitas saja
            : item
        )
      );
    } else {
      // Jika produk belum ada di keranjang, tambahkan produk baru dengan kuantitas 1
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Fungsi untuk menghitung total harga
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {/* Komponen produk dan tombol "Add to Cart" */}
      <button onClick={() => addToCart({ id: 1, name: "Produk A", price: 10000 })}>
        Tambahkan Produk A ke Keranjang
      </button>
      <button onClick={() => addToCart({ id: 2, name: "Produk B", price: 15000 })}>
        Tambahkan Produk B ke Keranjang
      </button>

      {/* Tampilkan isi keranjang */}
      <h2>Keranjang Belanja</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Rp. {item.price.toLocaleString("id-ID")} x {item.qty} = Rp.{" "}
            {(item.price * item.qty).toLocaleString("id-ID")}
          </li>
        ))}
      </ul>
      <h3>Total: Rp. {totalPrice.toLocaleString("id-ID")}</h3>
    </div>
  );
};

export default App;