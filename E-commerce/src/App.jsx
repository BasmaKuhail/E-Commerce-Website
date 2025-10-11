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


function App() {


  return (<>
      <div className="sticky">
        <TopHead/>
        <Header/>
      </div>
      <div className="section-content">

        <div style={{display:"flex", flexDirection:"row"}}>
          <SideNav />
          <VrLine/>
          <MainImg/>
        </div>
        <Title title="Today's"/>
        <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
        <div className="cards">
          <Card offer="-40%" url="src/assets/Card/card1.png" title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card2.png" title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url="src/assets/Card/card3.png" title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card4.png" title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card5.png" title="Gucci duffle bag" price="100" instedOf="130"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card6.png" title="The north coat" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card7.png" title="IPS LCD Gaming Monitor" price="370" instedOf="400"  rating="(88)"/>
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
          <Card offer="-40%" url="src/assets/Card/card1.png" title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card2.png" title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url="src/assets/Card/card3.png" title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card4.png" title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
        </div>
        <Ad head="Categories" ad="Enhance Your Music Experience"/>
        <Title title="Our Products"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Explore Our Products</h1>
          <NextPrev/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
          <Card offer="-40%" url="src/assets/Card/card1.png" title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card2.png" title="AK-900 Wired Keyboard" price="960" instedOf="1160"  rating="(75)"/>
          <Card offer="-40%" url="src/assets/Card/card3.png" title="S-Series Comfort Chair " price="375" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card4.png" title="RGB liquid CPU Cooler" price="300" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card5.png" title="Gucci duffle bag" price="100" instedOf="130"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card6.png" title="The north coat" price="120" instedOf="160"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card7.png" title="IPS LCD Gaming Monitor" price="370" instedOf="400"  rating="(88)"/>
          <Card offer="-40%" url="src/assets/Card/card1.png" title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
        </div>
        <Button color="red" text="View All Products"/>

        <Title title="Featured"/>
        <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>New Arrival</h1>
        <Arrivals/>
        <Ending/>
      </div>
<<<<<<< HEAD
      
      <Footer/>
=======
      <Title title="Today's"/>
      <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
      <Card offer="-40%" url="src/assets/Card/device1.png" title="HAVIT HV-G92 Gamepad" price="120" instedOf="160"  rating="(88)"/>
>>>>>>> 2d80842b6c2a348a35354747c5f8000d25e36efa
    </>)
}

export default App
