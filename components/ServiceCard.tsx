'use client';

import * as Icons from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  const normalizedName = icon.charAt(0).toUpperCase() + icon.slice(1).replace(/-([a-z])/g, (g: string) => g[1].toUpperCase());
  const iconKey = normalizedName as keyof typeof Icons;
  const IconComponent = (Icons[iconKey] ?? Icons.Wrench) as React.ComponentType<{ className?: string }>;

  return (
    <article className="group h-full w-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm shadow-blue-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl flex flex-col gap-4 sm:gap-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200/70 flex-shrink-0">
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm text-gray-700">
              <span className="mt-0.5 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600 flex-shrink-0">
                {index + 1}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {ctaText && ctaHref && (
        <a
          href={ctaHref}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 active:text-blue-800 transition-colors"
        >
          {ctaText}
          <Icons.ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </article>
  );
}
