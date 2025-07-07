import { type ReactNode, type FC } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  return (
    <div
      className={`
        bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden
        ${hoverable ? 'hover:shadow-2xl hover:scale-[1.02] hover:border-white/20 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
