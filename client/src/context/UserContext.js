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
    if (ins || accts) {
      try {
        const response = await ins.methods.getUser().call({ from: accts[0] });
        console.log(response);
        setUser({
          enigmaId: response[0],
          name: response[1],
          phoneNumber: response[2],
          dob: response[3],
          email: response[4],
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [accts, ins]);

  useEffect(() => {
    fetchUser();
    // console.log(user);
  }, [accts, ins]);

  return (
    <userContext.Provider value={{ user }}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
