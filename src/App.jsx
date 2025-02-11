import React from "react"
import Input from "./Components/InputStage/Input"
import ItemList from "./Components/List/ItemList"
import ContextProvider from "./Store/ContextProvider"

function App() {
  return (
    <ContextProvider>
   <div className="flex flex-col justify-center items-center">
      <h1 className="text-[#CFF4FC] my-3 text-base font-bold">Manage Your Task!</h1>
     <Input />
     <ItemList />
   </div>
    </ContextProvider>
  )
}

export default App
