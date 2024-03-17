import React from 'react';

interface CardProps {
  headerText?: string | React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = ({ headerText, body, footer }: CardProps) => (
  <div className="bg-white rounded-lg shadow-md h-fit">
    {headerText && (
      <div className="border-b px-6 py-3 font-semibold text-xl leading-tight truncate">
        {headerText}
      </div>
    )}
    <div className="px-6 py-4">{body}</div>
    {footer && <div className="border-t px-6 py-3 font-medium">{footer}</div>}
  </div>
);

export default Card;
