import useFetchProductsByTagName from "../ProductsByTag";
import ArrivalsSkeleton from "./ArrivalsSkeleton";

export default function Arrivals() {
  const { productsByTagName } = useFetchProductsByTagName("New");
  const firstFourProducts = productsByTagName?.slice(0, 4);

  if (!productsByTagName || productsByTagName.length === 0)
    return <ArrivalsSkeleton/>;

  return (
    <div className="grid gap-4 mb-24
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      auto-rows-[240px] sm:auto-rows-[280px] lg:auto-rows-[240px]"
    >
      {firstFourProducts.map((product, index) => {
        // decide col/row spans for desktop
        let colSpan = "col-span-1";
        let rowSpan = "row-span-1";

        if (index === 0) colSpan = "lg:col-span-2", rowSpan = "lg:row-span-2";
        if (index === 1) colSpan = "lg:col-span-2"; // top right
        // index 2 & 3 will naturally fill the remaining

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg bg-black p-4 flex flex-col justify-end ${colSpan} ${rowSpan}`}
          >
            <img
              src={product.images[0].imageURL}
              alt={product.productName}
              className={`absolute object-contain
                ${index === 0 ? "w-7/10  bottom-0 right-0" : ""}
                ${index === 1 ? "w-1/2 right-0 top-0 bottom-0" : ""}
                ${(index === 2 || index === 3) ? "w-4/6 right-0" : ""}`
                }
            />

    
            <div className="relative text-white flex flex-col gap-2">
              <p className="text-lg font-medium">{product.productName}</p>
              <p className="text-sm w-[30ch]">{product.description}</p>
              <a href="#" className="underline font-semibold text-sm">
                Shop Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
