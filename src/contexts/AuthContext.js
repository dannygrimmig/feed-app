import * as React from "react";
import { auth } from "../firebase";
import { getDatabase, ref, child, get } from "firebase/database";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();
  const [currentUserEmail, setCurrentUserEmail] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user?.uid);

      // constants about user
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user?.uid}`))
        .then((snapshot) => {
          setCurrentUserEmail(
            snapshot.exists() ? snapshot.val().email : "fail"
          );
        })
        .catch((error) => {
          console.error(error);
        });

      // end that

      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    currentUserEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
