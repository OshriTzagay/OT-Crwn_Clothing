import CategoryItem from "../directory-item/directory-item";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/men",
  },
  {
    id: 3,
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
    route: "shop/women",
  },
  {
    id: 4,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 5,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
];

export const Directory = () => {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} route={category.route}  />
        ))}
      </div>
    </div>
  );
};
