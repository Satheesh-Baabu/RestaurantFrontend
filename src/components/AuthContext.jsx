import React,{createContext,useReducer,useEffect,useState}from 'react'

export const AuthContext=createContext();
const authReducer=(state,action)=>{
  switch(action.type)
  {
    case "LOGIN":
      return {user:action.payload};
    case "LOGOUT":
      console.log("Hello")
      localStorage.removeItem("token")
      return {user:null};
    default:
      return state;
  }
}

const AuthContextProvider=({children})=>{
  const [state,dispatch]=useReducer(authReducer,{user:null})
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    let user=localStorage.getItem("token")
    if(user!=null)
    {
      dispatch({type:"LOGIN",payload:user})
    }
    setloading(false)
  },[])
  if(!loading)
    return(
  <AuthContext.Provider value={{...state,dispatch}}>
    {children}
  </AuthContext.Provider>)

}

export default AuthContextProvider