import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useState } from 'react';

const App = () => {

  const [isDark, setIsDark ] = useState(false);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Main />
      <Footer />
    </>
  )
}

export default App;