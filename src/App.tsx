import './App.css';
import Navbar from './components/navbar/Navbar';
import MainRoute from './router/mainRoute';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect( ()=>{

    setTimeout( ()=>{
      setLoading(false);
    },2000 )

  } ,[])

  return (
    <>

    
    <Box className='site_wrap' >
    {/* <AnimateCircle /> */}

    { loading ? (
     <Loading/>
    ) : (
      <>
        <Box>
      <Box position={"relative"} maxW={'1360px'} width={ { sm:'90%',base:'100%' } } margin={'auto'}  >

      <Navbar/>      
      <MainRoute/>
      <Footer/>

      </Box>
       </Box>
      </>
    )}

     
    </Box>

    </>
  );
}

export default App;
