import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    // Анимация для героя
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
        <div className="relative overflow-hidden bg-white">
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
                        repeatType: "reverse"
                    }}
                />
            ))}

            {/* Основной контент */}
            <div className="relative pt-6 pb-16 sm:pb-24">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <motion.div
                        className="text-center"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.h1
                            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                            variants={item}
                        >
                            <motion.span
                                className="block text-primary-600 xl:inline"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                AML Academy
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                            variants={item}
                        >
                            {t('subtitle')}
                        </motion.p>
                        <motion.div
                            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                            variants={item}
                        >
                            <div className="rounded-md shadow">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                                        {t('getStarted')}
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link to="/courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        {t('exploreCourses')}
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </main>
            </div>

            {/* Иллюстрация */}
            <motion.div
                className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <svg
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    viewBox="0 0 1200 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M 100 100 C 200 50 300 50 400 100 C 500 150 600 150 700 100 C 800 50 900 50 1000 100"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx="600"
                        cy="400"
                        r="80"
                        fill="#818cf8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    />
                    <motion.rect
                        x="500"
                        y="300"
                        width="200"
                        height="100"
                        fill="#a5b4fc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default Home;