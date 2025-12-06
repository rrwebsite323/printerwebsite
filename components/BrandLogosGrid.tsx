import Image from 'next/image';
import { Brand } from '@/lib/types';

interface BrandLogosGridProps {
  brands: Brand[];
  title?: string;
}

export default function BrandLogosGrid({ brands, title = 'We Support All Major Brands' }: BrandLogosGridProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full mb-12 sm:mb-16 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
            Authorized Service Provider
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Certified technicians trained to service all major manufacturers
          </p>
        </div>
        
        {/* Brand Grid - PeakTech Style with Names - 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[180px] w-full"
            >
              <div className="relative w-full h-12 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center mt-auto">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-500 font-medium px-4">
            + Many more brands and models supported
          </p>
        </div>
      </div>
    </section>
  );
}
