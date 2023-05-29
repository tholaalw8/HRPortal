
import {Layout} from 'antd'
import react, {useState, useEffect} from 'react'




const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  
interface IFooterProps {
  children?: any
}

export const Footer =(props: IFooterProps)=> {

    return (
       <Layout.Footer style={footerStyle}>
          {props.children}
       </Layout.Footer>
    )
}