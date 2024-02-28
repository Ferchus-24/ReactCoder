import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(({ id, img, title, autor, price }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            autor={autor}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
