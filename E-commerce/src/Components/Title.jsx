export default function Title({title}){
    const style = {
        items:{
            display:"flex",
            gap:"20px",
            fontFamily: "var(--font-main)",
            alignItems: "center"
            
        },
        rect :{
            backgroundColor: "var(--red)",
            width:"20px",
            height:"40px",
            borderRadius:"4px"
        },
        title:{
            color:"var(--red)",
            fontSize:"var(--meduim-size)",
            fontWeight: "var(--bold)"
        }
    }
    return(
        <div style={style.items}>
            <div style={style.rect}></div>
            <p style={style.title}>{title}</p>
        </div>
    ) 
}