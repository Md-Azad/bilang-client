import { AuthContext } from "./Contexts";

const AuthProvider = ({ children }) => {
  const user = "azad";
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
