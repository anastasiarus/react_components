import React from 'react';
import './App.css'
import Title from './components/Title/Title.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Content from './components/Content/Content.jsx';
import Text from './components/Text/Text.jsx';
import Squares from './components/Squares/Squares.jsx';
import Input from './components/Input/Input.jsx';



function App() {
  return (
    <div className="App">
      <Title title='ПРИЛОЖЕНИЕ'/>
      <Header />
      <div className='body'>
        <Navbar menu = {[
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

        ]}/>
        <Content />
        <Text />
        <Input type='password' placeholder='Пароль' class="form-control"/>
        <Squares />
      </div>
      <Footer />
    </div>
  )
}

export default App;
