import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  onClick 
}: CardProps) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${hoverable ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
