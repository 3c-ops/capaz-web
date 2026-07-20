import type { ReactNode } from 'react';

import { getWhatsAppHref } from '@/lib/contact';

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
};

export function CTAButton({ children, className = '' }: CTAButtonProps) {
  return (
    <a
      className={`group inline-flex items-center justify-center rounded-2xl bg-brand-blue px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(30,70,223,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-navy hover:shadow-[0_18px_42px_rgba(25,45,96,0.22)] focus-visible:outline-brand-blue motion-reduce:hover:translate-y-0 ${className}`}
      href={getWhatsAppHref()}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="ml-2 translate-y-px transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
