export default function Img({image}){
    return (<>
        <img 
            alt={image[0].altText} 
            src={image[0].imageURL}
            className="
                w-1/2
                m-2
                object-contain
                sm:w-auto sm:h-[45vh]"    
        />
    </>)
}