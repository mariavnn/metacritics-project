import { useSegments } from "expo-router";
import { createContext, useState, useEffect} from "react";
import { router } from 'expo-router';

const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext);
}

function useProtectedRoute (user) {
    const segments = useSegments();
    const inAuthGroup = segments[0] === '(auth)';

    useEffect(() =>{
        if (!user && !inAuthGroup ) {
            router.replace('/sign-in');
        }else if(user && inAuthGroup){
            router.replace('/home');
        }
    }, [user, segments])
}

export function Provider(props){
    const [user, setUser] = useState(null);

    useProtectedRoute(user);

    const signIn = () => {}

    const signUp = () => {}

    const signOut = () => {}

    return(
        <AuthContext.Provider value={{user, signIn, signOut, signUp}}>
            {props.children}
        </AuthContext.Provider>
    )
}