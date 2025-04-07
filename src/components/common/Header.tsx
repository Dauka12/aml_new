// src/components/common/Header.tsx
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Link } from 'react-router-dom';
import AmlLogo from '@/assets/aml.svg';
import {
  DrawerContent,
  HeaderDrawer,
} from '@/components/common/vaul-header';

const items = [
  {
    id: 1,
    classname: 'bg-gradient-to-l from-red-400 to-orange-500',
  },
  {
    classname: 'bg-gradient-to-r from-blue-300 to-blue-800',
    id: 2,
  },
  {
    classname: 'bg-gradient-to-tl from-amber-500 to-yellow-400',
    id: 3,
  },
];

const navLinks = [
  { label: 'Home', href: '/Home' },
  { label: 'Board of Directors', href: '/board-of-directors' },
  { label: 'Courses', href: '/courses' },
  { label: 'Templates', href: '/templates' },
  { label: 'Open Source', href: '/open-source' },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 display flex justify-between items-center">
        <img src={AmlLogo} alt="AML Academy Logo" className="w-12" /> 
        <Link to="/" className="text-2xl font-bold">
          AML Academy
        </Link>

        {/* Кнопка меню (для всех устройств) */}
        <HeaderDrawer
          open={headerOpen}
          setOpen={setHeaderOpen}
          drawerBtn={() => (
            <button aria-label="Toggle menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          )}
        >
          <DrawerContent>
            {/* Индикатор для мобильной панели */}
            {!isDesktop && (
              <div className="flex justify-center w-full absolute bottom-1 left-0">
                <div className="w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
              </div>
            )}
            <div className="container mx-auto gap-4 py-4">
              {/* Заголовок и кнопка закрытия в одном div */}
              <div className="flex items-center justify-between border-b py-2">
                {/* Кнопка закрытия (только на десктопе) */}
                {isDesktop ? (
                  <button
                    className="p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
                    onClick={() => setHeaderOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                ) : (
                  // Пустой div для сохранения выравнивания на мобильных
                  <div className="w-10 h-10"></div>
                )}
                {/* Заголовок */}
                <h1 className="text-2xl font-semibold">UI-LAYOUT</h1>
                {/* Пустой div для баланса (чтобы заголовок был центрирован) */}
                <div className="w-10 h-10"></div>
              </div>

              <div className="flex flex-col md:flex-row justify-between py-4">
                {/* Навигация */}
                <nav className="flex gap-8">
                  <ul className="text-lg space-y-2 font-semibold uppercase pr-8">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          onClick={() => setHeaderOpen(false)}
                          className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Цветные блоки */}
                <div className="grid grid-cols-3 gap-4 py-4 w-full md:w-auto">
                  {items.map((item) => (
                    <figure
                      key={item.id}
                      className={`${item.classname} inline-block group w-full h-40 md:h-52 relative rounded-md`}
                    ></figure>
                  ))}
                </div>
              </div>
            </div>
          </DrawerContent>
        </HeaderDrawer>
      </div>
    </header>
  );
}