import { useEffect, forwardRef, useImperativeHandle } from "react";

const Authentication = forwardRef((props, ref) => {
  const TOKEN = "TOKEN";
  
  const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    setIsLoggedInVar(true);
  };
  
  const logUserOut = (TOKEN) => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem("adminId");
    setIsLoggedInVar(false);
  };

  useEffect(() => {
    setIsLoggedInVar((Boolean(localStorage.getItem(TOKEN))));
  }, [isLoggedInVar]);

  useImperativeHandle(ref, () => ({
    logUserIn,
    logUserOut,
  }));
});


export default Authentication;