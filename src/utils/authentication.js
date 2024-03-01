import { auth } from "../firebase";

export function logOut() {
  return auth.signOut();
}
