import * as React from "react";

export function LogIn() {
  // managed
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [alert, setAlert] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length <= 0 || password.length <= 0) {
      setAlert("too short");
    } else {
      setAlert();
    }
  }
  return (
    <div>
      <form className="gap-4" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="email"
          className="border rounded px-2 py-1"
        />
        <input
          ref={passwordRef}
          type="text"
          placeholder="password"
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="border rounded px-2 py-1">
          sign up
        </button>

        {!!alert && <p className="px-2 py-1 bg-red-400 rounded">{alert}</p>}
      </form>
    </div>
  );
}
