export const Grid = () => {
    return (
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-4 grid-rows-8 sm:grid-cols-12 sm:grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={`cell-${i}`} 
              className="border border-stone-600/30" 
            />
          ))}
        </div>
      </div>
    );
};