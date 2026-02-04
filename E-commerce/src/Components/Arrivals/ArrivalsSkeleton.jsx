export default function ArrivalsSkeleton() {
  return (
    <div
      className="grid gap-4 mb-24
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        auto-rows-[240px] sm:auto-rows-[280px] lg:auto-rows-[240px]"
    >
      {/* Big Box */}
      <div className="relative overflow-hidden rounded-lg bg-black p-4 lg:col-span-2 lg:row-span-2 flex flex-col justify-end">
        <div className="relative text-white flex flex-col gap-2">
          <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-white/20 rounded animate-pulse" />
        </div>
      </div>

      {/* Horizontal (Vertical) Box */}
      <div className="relative overflow-hidden rounded-lg bg-black p-4 lg:col-span-2 flex flex-col justify-end">
        <div className="relative text-white flex flex-col gap-2">
          <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-white/20 rounded animate-pulse" />
        </div>
      </div>

      {/* Small Box 1 */}
      <div className="relative overflow-hidden rounded-lg bg-black p-4 flex flex-col justify-end">
        <div className="relative text-white flex flex-col gap-2">
          <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-white/20 rounded animate-pulse" />
        </div>
      </div>

      {/* Small Box 2 */}
      <div className="relative overflow-hidden rounded-lg bg-black p-4 flex flex-col justify-end">
        <div className="relative text-white flex flex-col gap-2">
          <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-white/20 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
