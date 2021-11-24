import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Switch from './Switch';

const Header = () => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChange = (e) => {
    setActive(e.target.checked);
  };

  useEffect(() => {
    setTheme(active ? 'dark' : 'light');
  }, [active]);

  return (
    <header className="w-screen h-[24vw] flex justify-center md:absolute md:top-0 md:bg-background-header-light md:dark:bg-background-header-dark md:h-[16vw]">
      <div className="w-11/12 h-6 my-8 flex flex-col md:flex-row justify-between items-center md:mt-12">
        <div className="w-11/12 md:w-auto">
          <h1 className="font-bold text-heading-text-light dark:text-heading-text-dark text-2xl md:text-3xl">
            Social Media Dashboard
          </h1>
          <p className="text-text-light dark:text-text-dark">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex w-11/12 mt-8 justify-between relative before:absolute before:top-[-16px] before:w-full before:h-[1px] before:bg-text-dark md:w-auto md:justify-start md:mt-0 md:before:hidden">
          <p className="font-bold mr-2 text-text-light dark:text-text-dark">
            Dark Mode
          </p>
          <Switch active={active} onChange={handleChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
