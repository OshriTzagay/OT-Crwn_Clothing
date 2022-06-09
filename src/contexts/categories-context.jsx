import React from "react";
import { getCollectionAndDocuments } from "../utils/Firebase/Firebase.util";
import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
  categories: {},
});

export default function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      // console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
