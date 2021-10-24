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

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className={'dropdown ' + className}>
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
