// app/[hotelId]/loading.tsx
export default function Loading() {
    return (
      <div className="animate-pulse">
        <div className="h-16 border-b" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-2 h-[400px] mb-8">
            <div className="col-span-2 row-span-2 bg-gray-200 rounded-l-xl" />
            <div className="grid grid-cols-2 col-span-2 gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  className={`bg-gray-200 h-[195px] ${
                    index === 1 ? 'rounded-tr-xl' : index === 4 ? 'rounded-br-xl' : ''
                  }`}
                />
              ))}
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index}>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <div className="bg-gray-200 rounded-lg h-[400px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }