import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export function Authentication() {
  // managed
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [alert, setAlert] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const [isLogIn, setIsLogIn] = React.useState(true);

  // derived
  const actionText = isLogIn ? "Log In" : "Sign Up";

  // Hooks
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setAlert();
    setIsLoading(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // log in
    if (isLogIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/");
          setCurrentUser(userCredential.user);
          setIsLoading(false);
        })
        .catch((error) => {
          setAlert(error.code);
          setIsLoading(false);
        });
    }

    // sign up
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/");
          setCurrentUser(userCredential.user);
          setIsLoading(false);
        })
        .catch((error) => {
          setAlert(error.code);
          setIsLoading(false);
        });
    }
  }

  return (
    <div className="grid sm:grid-cols-10 min-h-screen">
      <div className="sm:col-span-5 lg:col-span-3 flex flex-col gap-8 justify-center px-4">
        <h1 className="text-5xl">{actionText}</h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          {!!alert && <p className="px-2 py-1 bg-red-400 rounded">{alert}</p>}

          <div>
            <p>Email</p>
            <input
              ref={emailRef}
              type="text"
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <p>Password</p>
            <input
              ref={passwordRef}
              type="password"
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="block border rounded px-2 py-1 w-max bg-slate-200"
          >
            {actionText}
          </button>
        </form>

        <div className="pt-4 border-t">
          <p>{isLogIn ? "Don't have" : "Already have"} an account?</p>

          <button
            onClick={() => {
              setAlert();
              setIsLogIn(!isLogIn);
            }}
            className="p-0 m-0 underline w-max decoration-1 underline-offset-2"
          >
            {isLogIn ? "Create an account" : "Log in"}
          </button>
        </div>
      </div>

      <div className="bg-sky-900 sm:col-span-5 lg:col-span-7"></div>
    </div>
  );
}
