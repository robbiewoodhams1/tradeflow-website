type TestimonialCardProps = {
  name: string;
  info: string;
  description: string;
};

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-[#0F2C76] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
      {initials}
    </div>
  );
}

export default function TestimonialCard({ name, info, description }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-2xl hover:scale-102 transition-all">
      <StarRating />
      <p className="text-gray-600 text-base leading-relaxed flex-1">&ldquo;{description}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
        <Avatar name={name} />
        <div>
          <p className="text-sm font-semibold text-[#0F2C76]">{name}</p>
          <p className="text-xs text-gray-400">{info}</p>
        </div>
      </div>
    </div>
  );
}
