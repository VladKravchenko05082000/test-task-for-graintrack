import { useEffect, useState } from "react";
import { debounceTime, fromEvent, map, Observable } from "rxjs";

import { useUserModelContext } from "../context";

import { localStorageTokenKey } from "../constants";

//ATTENTION

//In the form of a mock api, I use the api https://dummyjson.com/users

//ATTENTION

export const useSetUserData = ({
  usernameRef,
  passwordRef,
  formRef,
}: {
  usernameRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
}) => {
  const { userData, setUserData, setIsLogged } = useUserModelContext();

  const [pending, setIsPending] = useState(false);

  const getValueFromInputEvent = (event: Observable<InputEvent>): Observable<string> => {
    return event.pipe(
      // tap(event => console.log("event.target", event.target)),
      debounceTime(500),
      map((event: InputEvent) => (event.target as HTMLInputElement).value),
    );
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setIsPending(true);

    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then(res => {
        setIsPending(false);

        if (res.status === 400) {
          alert("Wrong credentials");
        } else {
          return res.json();
        }
      })
      .then(user => {
        setUserData({ username: "", password: "" });

        localStorage.setItem(localStorageTokenKey, user.token);

        setIsLogged(true);
      })
      .catch(() => {
        setIsPending(false);

        setUserData({ username: "", password: "" });

        alert("Something wrong");
      });
  };

  useEffect(() => {
    const usernameInput = usernameRef.current;
    const passwordInput = passwordRef.current;
    const form = formRef.current;

    if (usernameInput && passwordInput && form) {
      const usernameChange$ = fromEvent<InputEvent>(usernameInput, "input");
      const passwordChange$ = fromEvent<InputEvent>(passwordInput, "input");
      const formClear$ = fromEvent<InputEvent>(form, "submit");

      usernameChange$.pipe(getValueFromInputEvent).subscribe(username => {
        console.log(username, "username");
        setUserData(prev => ({ ...prev, username }));
      });

      passwordChange$.pipe(getValueFromInputEvent).subscribe(password => {
        console.log(password, "password");
        setUserData(prev => ({ ...prev, password }));
      });

      formClear$.subscribe(e => {
        e.preventDefault();
        form.reset();
      });
    }
  }, []);

  return { handleOnSubmit, pending };
};
