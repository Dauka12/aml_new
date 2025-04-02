import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Courses = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="container mx-auto py-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-3xl font-bold mb-8">{t('exploreCourses')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Заглушка для карточек курсов */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <motion.div
                        key={item}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item * 0.1 }}
                    >
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Course Title {item}</h3>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-primary-600 font-bold">$99</span>
                                <button className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Courses;