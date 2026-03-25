const stats = [
  { value: '2 min', label: 'Average quote time' },
  { value: '10,000+', label: 'Quotes sent' },
  { value: '100%', label: 'Free to download' },
  { value: '5 Stars', label: 'App store rating' },
];

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="text-3xl font-bold text-[#0F2C76]">{stat.value}</span>
            <span className="text-sm text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
