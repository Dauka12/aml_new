// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Layouts', href: '/layouts' },
  { label: 'Templates', href: '/templates' },
  { label: 'Open Source', href: '/open-source' },
];

const Home = () => {
  const { t } = useTranslation();

  // Анимация для героя
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Анимация для декоративных элементов
  const circles = Array.from({ length: 5 }).map((_, i) => {
    const size = Math.random() * 80 + 20;
    return {
      id: i,
      size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
    };
  });

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
      {/* Декоративные элементы заднего фона */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full bg-primary-100 opacity-20"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
          }}
          transition={{
            delay: circle.delay,
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Основной контент */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 flex flex-col md:flex-row items-center justify-between">
          {/* Текстовая часть */}
          <motion.div
            className="text-center md:text-left md:w-2/3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl"
              variants={item}
            >
              AML Academy
            </motion.h1>
            <motion.p
              className="mt-3 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl"
              variants={item}
            >
              {t('subtitle')}
            </motion.p>
            <motion.div className="mt-5 max-w-md mx-auto md:mx-0" variants={item}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/courses"
                  className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                >
                  {t('getStarted')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* UI-Layout (навигация справа) */}
          <nav className="md:w-1/3 mt-8 md:mt-0 md:pl-8 hidden md:block">
            <h2 className="text-2xl font-semibold mb-4">UI-Layout</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-blue-400 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </div>

      {/* Волна внизу */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-500"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Home;