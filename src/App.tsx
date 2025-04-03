import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';

// Lazy loading для страниц
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));

// Fallback компонент для ленивой загрузки
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;