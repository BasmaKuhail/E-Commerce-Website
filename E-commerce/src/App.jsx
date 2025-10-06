import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import SideNav from "./Components/SideNav/SideNav"
import VrLine from "./Components/VrLine"
import MainImg from "./Components/MainImg/MainImg"
import Title from "./Components/Title"
import Card from "./Components/Card/Card"
function App() {


  return (<>
      <div className="sticky">
        <TopHead/>
        <Header/>
      </div>
     
      <div style={{display:"flex", flexDirection:"row"}}>
        <SideNav />
        <VrLine/>
        <MainImg/>
      </div>
      <Title title="Today's"/>
      <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
      <Card/>
    </>)
}

export default App
