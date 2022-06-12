import jwt_decode from "jwt-decode";

function GoogleSignin() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const [user, setUser] = useState(undefined);

  const handleGoogleSignIn = (res) => {
    console.log(res);
    console.log(jwt_decode(res.credential));
    if (!res.clientId || !res.credential) return;

    // Implement your login mutations and logic here.
    // Set cookies, call your backend, etc.

    // setUser(val.data?.login.user);
  };
  const initializeGsi = () => {
    // Typescript will complain about window.google
    // Add types to your `react-app-env.d.ts` or //@ts-ignore it.
    if (!window.google || gsiScriptLoaded) return;

    setGsiScriptLoaded(true);
    window.google.accounts.id.initialize({
      client_id:
        "361445226964-lob4avkvk243src82i0htol0t7ala0k3.apps.googleusercontent.com",
      callback: handleGoogleSignIn,
    });
  };
  useEffect(() => {
    if (user?._id || gsiScriptLoaded) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client?sensor=false";
    script.onload = initializeGsi;
    script.async = true;
    script.id = "google-client-script";
    document.querySelector("body")?.appendChild(script);

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel();
      document.getElementById("google-client-script")?.remove();
    };
  }, [handleGoogleSignIn, initializeGsi, user?._id]);

  return <button className={"g_id_signin"}>Click</button>;
}
