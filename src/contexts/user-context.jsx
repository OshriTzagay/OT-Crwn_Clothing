import React, { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../utils/Firebase/Firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export default function UserContextProvider({ children }) {
  useEffect(() => {
    //!הפונקציה הזו שמגיעה מפיירבייס פותרת לנו את עניין השינוי סטייט בכל פונקציה של חיבור ניתוק והרשמה בגלל שבעזרת ה"מאזין" הזה הוא מחכה לפעולת ולשינוי של הסטייט של "אות" וכך מונע לנו  רינדורים מיותרים
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      // console.log(user);

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
