import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import SideNav from "./Components/SideNav/SideNav"
import VrLine from "./Components/VrLine"
function App() {


  return (
    <>
     <TopHead/>
     <Header/>
     <hr className="header-hr"/>
     <div style={{display:"flex", flexDirection:"row"}}>
      <SideNav/>
      <VrLine/>
     </div>
     
    </>
  )
}

export default App
