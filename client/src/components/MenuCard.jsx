import { useCart } from "../context/CartContext";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="font-semibold">{item.name}</h2>
      <p>₹{item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="mt-3 bg-black text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default MenuCard;
