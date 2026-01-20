import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary:
      'bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    secondary:
      'bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-[#FFAAB8] text-[#FFAAB8] hover:bg-[#FFAAB8] hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
