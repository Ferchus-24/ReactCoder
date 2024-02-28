export const ProductCard = ({ img, title, autor, price }) => {
  // const  { titulo, desc, precio } = prop

  return (
    <div style={{ border: "2px solid black" }}>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h3>{autor}</h3>
      <h3>{price}</h3>
    </div>
  );
};
