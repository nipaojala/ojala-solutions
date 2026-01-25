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
      'bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    secondary:
      'bg-linear-to-r from-[#1A2A4F] to-[#F7A5A5] text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-[#F7A5A5] text-[#F7A5A5] hover:bg-[#F7A5A5] hover:text-white',
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
