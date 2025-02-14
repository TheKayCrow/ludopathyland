export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-800/50 rounded-lg w-3/4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-800/50 rounded w-full" />
        <div className="h-4 bg-gray-800/50 rounded w-5/6" />
        <div className="h-4 bg-gray-800/50 rounded w-4/6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800/50 rounded-lg p-4 space-y-3">
            <div className="h-40 bg-gray-700/50 rounded-lg" />
            <div className="h-4 bg-gray-700/50 rounded w-3/4" />
            <div className="h-4 bg-gray-700/50 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}