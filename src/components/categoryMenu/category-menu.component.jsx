import { CategoriesContainer } from "./category-menu.styles";
import CategoryItem from "../directory-item/directory-item.component";

function CategoryMenu({categories}) {

   

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

export default CategoryMenu;
