'use client';

import NumberTicker from './number-ticker';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

export function StatCard({
  label,
  value,
  suffix = '',
  description,
  gradientFrom,
  gradientTo,
  borderColor
}: StatCardProps) {
  return (
    <div className={`text-center p-8 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl border ${borderColor} transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
      <p className={`text-sm mb-2 uppercase tracking-wide font-semibold ${borderColor.replace('border-', 'text-')}`}>
        {label}
      </p>
      <h3 className={`text-6xl font-bold mb-4 bg-gradient-to-r ${gradientFrom.replace('from-', 'from-').replace('/30', '').replace('/30', '')} ${gradientTo.replace('to-', 'to-').replace('slate-900', 'cyan-600')} bg-clip-text text-transparent`}>
        <NumberTicker value={value} suffix={suffix} />
      </h3>
      <p className="text-gray-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
