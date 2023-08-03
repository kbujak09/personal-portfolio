import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

const App = () => {

  const [isDark, setIsDark ] = useState(false);

  useEffect(() => {
    isDark ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
  }, [isDark])

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Main isDark={isDark}/>
      <Footer/>
    </>
  )
}

export default App;