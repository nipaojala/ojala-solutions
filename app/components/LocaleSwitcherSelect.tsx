'use client';

import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import React, {ReactNode, useState, useRef, useEffect, useTransition} from 'react';
import { usePathname, useRouter } from '../i18n/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Extract options from children (option elements)
  const extractOptions = () => {
    const options: Array<{ value: string; label: string }> = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === 'option') {
        const props = child.props as { value: string; children?: React.ReactNode };
        options.push({
          value: props.value,
          label: props.children?.toString() || props.value,
        });
      }
    });
    return options;
  };

  const options = extractOptions();

  // Get the selected option text
  const getSelectedText = () => {
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    return selectedOption ? selectedOption.label : selectedValue;
  };

  function handleSelect(value: string) {
    const nextLocale = value as Locale;
    setSelectedValue(nextLocale);
    setIsOpen(false);
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <p className="sr-only">{label}</p>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`relative flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-gray-700 font-medium transition-all duration-300 border border-gray-200 hover:border-[#F7A5A5] hover:shadow-md min-w-[100px] ${
          isPending ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label={label}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm">{getSelectedText()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 md:right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[100px] animate-fade-in">
          <ul
            role="listbox"
            className=""
          >
            {options.map((option, index) => {
              const isSelected = option.value === selectedValue;
              const isFirst = index === 0;
              const isLast = index === options.length - 1;
              return (
                <li key={option.value} role="option" className={isFirst ? 'pt-1' : isLast ? 'pb-1' : ''}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] text-white'
                        : 'text-gray-700 hover:bg-[#FFF2EF] hover:cursor-pointer'
                    }`}
                    aria-selected={isSelected}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}