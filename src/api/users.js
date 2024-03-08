import { getDatabase, ref, set } from "firebase/database";

export function addNewUserToDataBase(uid, email) {
  const db = getDatabase();
  const reference = ref(db, "users/" + uid);

  set(reference, {
    email: email,
    recipes: [],
    friends: [],
  });
}
