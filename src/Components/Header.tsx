
import  {Layout, } from "antd"
import AppMenu from "./AppMenu";
import react, {useState, useEffect, ReactNode} from 'react'



const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    lineHeight: '60px',
    minHeight: '4vh',
  };



  const menuStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    color: 'black',
    lineHeight: '60px',
    minHeight: '4vh',
    justifyContent: 'flex-end',
    minWidth: '100%',
    background: 'linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))',
    marginInline: '-50px'
    
  };



  interface IHeaderProps {
     children?: any
     test?:any
  }
  

export const Header = (Props: IHeaderProps) => {


    return (
        <Layout.Header style={headerStyle}>
              
              <AppMenu MenuCSSStyle={menuStyle} />
                
            


        </Layout.Header>
    )
}