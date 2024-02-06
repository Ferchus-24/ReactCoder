import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h3>LL</h3>
      <ul>
        <li>Ficción y Literatura</li>
        <li>Ingeniería, Técnica y Ciencias Exactas</li>
        <li>Infantil y Juvenil</li>
        <li>Humanidades</li>
      </ul>
      <CartWidget />
    </div>
  );
};
