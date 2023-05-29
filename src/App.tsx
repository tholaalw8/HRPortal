import React from 'react';
import { Layout} from 'antd';
import { Header } from './Components/Header';
import { Contents } from './Components/Contents';
import { Footer } from './Components/Footer';




function App() {



  return (

         <Layout>
              <Header> Header </Header>
              <Contents>Content</Contents>
              <Footer> Footer </Footer>
         </Layout>
  );
}

export default App;
