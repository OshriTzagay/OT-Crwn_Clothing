import {Route,Routes} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category-routes/category';
import "./shop.styles.scss";
export default function Shop() {

  return (
<Routes>
  <Route index element={<CategoriesPreview/>}></Route>
  <Route path=':category' element={<Category/>}></Route>

</Routes>
  );
}
