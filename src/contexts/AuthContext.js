import * as React from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function UseAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  function logOut() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    setCurrentUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
