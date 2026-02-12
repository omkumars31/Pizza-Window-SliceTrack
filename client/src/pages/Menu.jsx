import MenuCard from "../components/MenuCard";

const menuItems = [
  { name: "Margherita", price: 89 },
  { name: "Paneer Peri Peri", price: 119 },
  { name: "Farmhouse", price: 139 },
];

const Menu = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
         The Pizza Window
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
