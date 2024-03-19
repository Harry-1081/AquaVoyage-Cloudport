import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export const States = ({ children }) => {

    var navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
      };    

    const handleHomeClick = () => {
        navigate('/');
      };    

    const handleSignInClick = () => {
        navigate('/login');
      };    
    const [guests, setGuests] = useState(1);
    const [location, setLocation] = useState("Mahabalipuram");

    return(
        <Context.Provider value={{
            location,
            setLocation,
            guests,
            setGuests,
            navigate,
            handleSignUpClick,
            handleSignInClick,
            handleHomeClick
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);