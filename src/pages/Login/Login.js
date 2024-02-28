import * as React from "react";
import { UseAuth } from "../../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

export function LogIn() {
  // imported
  const { currentUser, setCurrentUser } = UseAuth();

  // managed
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [alert, setAlert] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setAlert();
    setIsLoading(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        setAlert(errorCode);
        setIsLoading(false);
      });
  }

  return (
    <div>
      {<p>current user: {!!currentUser && currentUser.email}</p>}
      <form className="gap-4" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="email"
          className="border rounded px-2 py-1"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          className="border rounded px-2 py-1"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="border rounded px-2 py-1"
        >
          sign up
        </button>

        {!!alert && <p className="px-2 py-1 bg-red-400 rounded">{alert}</p>}
      </form>
    </div>
  );
}
