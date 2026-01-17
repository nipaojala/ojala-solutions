interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gradient';
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const backgroundClasses =
    background === 'gradient'
      ? 'bg-gradient-to-br from-[#F0FFDF] to-[#FFD8DF]'
      : 'bg-white';

  return (
    <section
      id={id}
      className={`py-20 ${backgroundClasses} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
