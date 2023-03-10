import "./category-menu.styles.scss";
import CategoryItem from "../directory-item/directory-item.component";

function CategoryMenu({categories}) {

   

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryMenu;
