import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import SideNav from "./Components/SideNav/SideNav"
import VrLine from "./Components/VrLine"
import MainImg from "./Components/MainImg/MainImg"
import Title from "./Components/Title"
import Card from "./Components/Card/Card"
import Button from "./Components/Button/Button"
import Category from "./Components/Category/Category"
import NextPrev from "./Components/NextPrev/NextPrev"
import Footer from "./Components/Footer/Footer"
import Ad from "./Components/Ad/Ad"
import Arrivals from "./Components/Arrivals/Arrival"
import Ending from "./Components/Ending/Ending"
import Timer from "./Components/Timer/Timer"

// card imges
import card1 from "./assets/Card/card1.png"
import card2 from "./assets/Card/card2.png"
import card3 from "./assets/Card/card3.png"
import card4 from "./assets/Card/card4.png"
import card5 from "./assets/Card/card5.png"
import card6 from "./assets/Card/card6.png"
import card7 from "./assets/Card/card7.png"


function App() {


  return (<>
      <div className="sticky">
        <TopHead/>
        <Header/>
      </div>
      <div className="section-content">

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom:"100px"}}>
          <SideNav />
          <VrLine/>
          <MainImg/>
        </div>
        <Title title="Today's"/>
        <div style={{display: "flex", justifyContent:"space-between", marginBottom:"30px"}}>
          <div style={{display: "flex",gap:"100px"}}>
            <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
            <Timer/>
          </div> 
          <NextPrev/>
        </div>
        
        <div className="cards">
          <Card offer="-40%" url={card1} title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url={card2} title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url={card3} title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card4} title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card5} title="Gucci duffle bag" price="100" instedOf="130"  rating="(88)"/>
          <Card offer="-40%" url={card6} title="The north coat" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url={card7} title="IPS LCD Gaming Monitor" price="370" instedOf="400"  rating="(88)"/>
        </div>
        <Button color="red" text="View All Products"/>
        <hr/>
        <Title title="Categories"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Browse By Category</h1>
          <NextPrev/>
        </div>

       
          <Category/>
        
        <hr/>

        <Title title="This Month"/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Best Selling Products</h1>
          <Button color="red" text="View All"/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <Card offer="-40%" url={card1} title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url={card2} title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url={card3} title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card4} title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
        </div>
        <Ad head="Categories" ad="Enhance Your Music Experience"/>
        <Title title="Our Products"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Explore Our Products</h1>
          <NextPrev/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
          <Card offer="-40%" url={card1} title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url={card2} title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url={card3} title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card4} title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card5} title="Gucci duffle bag" price="100" instedOf="130"  rating="(88)"/>
          <Card offer="-40%" url={card6} title="The north coat" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url={card7} title="IPS LCD Gaming Monitor" price="370" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url={card1} title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
        </div>
        <Button color="red" text="View All Products"/>

        <Title title="Featured"/>
        <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>New Arrival</h1>
        <Arrivals/>
        <Ending/>
      </div>
      
      <Footer/>
    </>)
}

export default App
