import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Title from './components/Title/Title.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Content from './components/Content/Content.jsx';
import Text from './components/Text/Text.jsx';
import Squares from './components/Squares/Squares.jsx';
import Input from './components/Input/Input.jsx';
import DropDown from './components/DropDown/DropDown.jsx';
import RegForm from './components/RegForm/RegForm.jsx';
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/Login.jsx'
import MainPage from './components/MainPage/MainPage.jsx';



function App() {

  return  <BrowserRouter> 
    <Routes>
          <Route path="/"  element={<RegForm />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/mainpage"  element={<MainPage />}/>
      </Routes>
      </BrowserRouter>  
  {/* <div className="App">
  <Title title='ПРИЛОЖЕНИЕ' />
  <Header />
  <div className='body'>
     <Navbar menu={[
        {
          title: 'users',
          link: '/users'
        },
        {
          title: 'chats',
          link: '/chats'
        },
        {
          title: 'communities',
          link: '/communities'
        }

      ]} />
      <Content />
      <Text />
      <Input type='text' placeholder='Введите текст' />
      <Squares /> 
    <DropDown />
  </div>
  <Footer />
</div>  */}
  
  
   
  
}

export default App;
