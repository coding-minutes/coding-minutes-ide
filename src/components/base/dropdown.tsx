import React from 'react';

interface Props {
  title: React.ReactNode | string | null;
  options: Array<{
    value: string;
    Element: React.ReactNode | null;
  }>;
  onChange: (string) => void;
  PermanentOption?: React.ReactNode | null;
  hideSelected?: boolean;
  selected: string;
  className?: string;
}

export const Dropdown: React.FC<Props> = ({
  title,
  options,
  onChange,
  PermanentOption,
  hideSelected,
  selected,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = React.useRef(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleOutsideClick(event) {
    if (!ref.current?.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref]);

  return (
    <div className={'dropdown ' + className} ref={ref}>
      <div
        className="row no-gutters align-items-center justify-content-between dropdown-header"
        onClick={toggleMenu}
      >
        <div className="">{title}</div>
      </div>
      {isMenuOpen && (
        <div className="floating-menu">
          {options.map((option) => {
            if (hideSelected && option.value === selected) {
              return <></>;
            }
            return (
              <a
                key={option.value}
                className={
                  'row no-gutters align-items-center mb-3 floating-menu__option ' +
                  (option.value === selected ? 'active' : '')
                }
                onClick={() => {
                  toggleMenu();
                  onChange(option.value);
                }}
              >
                {option.Element}
              </a>
            );
          })}
          {PermanentOption}
        </div>
      )}
    </div>
  );
};
