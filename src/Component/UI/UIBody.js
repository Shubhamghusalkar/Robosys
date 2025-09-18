import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router';
import { getUserToken } from '../../Config/user';
import { UiRoutes } from '../../Routes/UiRoutes';

const UIBody = (props) => {
  const navigate = useNavigate();
    const isLoggedIn = getUserToken();
    useEffect(() => {
      if (isLoggedIn) {
        navigate(UiRoutes.home); // ✅ safe to call here
      }
    }, [isLoggedIn]);
  
  return (
    <div>
        <Header />
        <main className='main-area fix overflow-hidden' >
            {props.content}
        </main>
        <Footer />
    </div>
  )
}

export default UIBody
