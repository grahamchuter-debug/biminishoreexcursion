import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline';

interface CTAButtonProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}

export default function CTAButton({
  to,
  children,
  variant = 'primary',
  external = false,
}: CTAButtonProps) {
  const className = `btn btn--${variant}`;

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (to.startsWith('/#') || to.startsWith('#')) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
