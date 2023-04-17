import { useEffect, createContext, useReducer } from 'react';
import Profile from "./components/Profile";
import Category from "./components/Category";
import data from "./assets/data.json";

export const ContextProvider = createContext()

const initState = localStorage.setItem("schedule", "weekly")

const reducer = (state, action) => {
  switch (action) {
    case "daily":
      return state = "daily";
    case "weekly":
      return state = "weekly";
    case "monthly":
      return state = "monthly";
    default:
      return state;
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(()=>{
    console.log("state changed")
  }, [state])

  return (
    <ContextProvider.Provider value={{ schState: state, schDispatch: dispatch }} >

      <main className='container mx-auto px-4 mt-20 sm:mt-0 flex flex-col gap-3 sm:flex-row items-stretch'>
        <Profile />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5'>
          {
            data.map((category, index) => {
              return <Category key={index} title={category.title} timeframes={category.timeframes} others={[category.icon, category.color]} />
            })
          }
        </div>
      </main>

    </ContextProvider.Provider>
  )
}

export default App;