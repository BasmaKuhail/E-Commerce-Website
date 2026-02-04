export default function MainImgSkeleton() {
  return (
    <div
      className="
        bg-black text-white
        w-[900px] mt-12
        px-[35px] py-[35px] pl-[50px]
        sm:w-[900px] sm:p-6
      "
    >
      <div className="flex justify-between h-[400px] sm:h-auto gap-4 sm:items-center">
        
        {/* Text skeleton */}
        <div className="flex flex-col gap-4 mx-10 w-1/2">
          <div className="h-4 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-full bg-white/20 rounded animate-pulse" />
          <div className="h-5 w-32 bg-white/20 rounded animate-pulse" />
        </div>

        {/* Image skeleton */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[250px] h-[250px] bg-white/10 rounded-lg animate-pulse" />
        </div>

      </div>

      {/* Dots skeleton */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-3.5 rounded-full bg-white/30 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}