import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Ресурсы переводов
const resources = {
    en: {
        translation: {
            "welcome": "Welcome to AML Academy",
            "subtitle": "Learn and grow with our courses",
            "getStarted": "Get Started",
            "exploreCourses": "Explore Courses",
            "about": "About",
            "contact": "Contact",
            "login": "Log In",
            "register": "Register",
            "language": "Language"
        }
    },
    ru: {
        translation: {
            "welcome": "Добро пожаловать в AML Academy",
            "subtitle": "Учитесь и развивайтесь с нашими курсами",
            "getStarted": "Начать",
            "exploreCourses": "Изучить курсы",
            "about": "О нас",
            "contact": "Контакты",
            "login": "Войти",
            "register": "Регистрация",
            "language": "Язык"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export default i18n;