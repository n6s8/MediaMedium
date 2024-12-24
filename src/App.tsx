import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PersonalNews from './PersonalNews';
import Footer from './Footer';
import Header from './Header';
import ConditionalHeader from './ConditionalHeader';
import NewsList from './NewsList';

function App() {
  return (
    <Router>
      <>
        <Header />
        <ConditionalHeader />

        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/personal-news/:id" element={<PersonalNews />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;