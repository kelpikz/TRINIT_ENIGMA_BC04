import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import { Web3Context } from "./Web3Context";

export const userContext = createContext();

function UserContextProvider(props) {
  const { accts, ins } = useContext(Web3Context);
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    if (ins.methods && accts[0]) {
      try {
        const response = await ins.methods.getUser().send({ from: accts[0] });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }, [accts, ins]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser, ins]);

  return (
    <userContext.Provider value={{ user }}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
