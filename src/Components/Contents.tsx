
import {Layout, Typography} from 'antd'
import react, {useState, useEffect} from 'react'
import ApplyForm from '../Forms/ApplyForm';





const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    // minHeight: '200vh',
    // lineHeight: '120px',
    // color: 'white',
    // backgroundColor: 'white',
    // marginInline: '30vh',
    // marginTop: '2vh',
    // marginBottom: '3vh',
    // paddingInline: '20vh',
    // paddingTop: '2vh'
    
  };

  const formStyle: React.CSSProperties = {
    
    
    
  };



  
interface IContentProps {
    children?: any
}


export const Contents =(props: IContentProps)=> {

    return (
        <>
           <div style={{display:'flex', justifyContent: 'center', alignContent: 'center', background: 'white', height: '8vh', padding: '20px'}}>
                <Typography.Title level={2}> Application For Employement </Typography.Title>
             </div>
        <Layout.Content style={contentStyle}>
             
            <ApplyForm />
            {props.children}
        </Layout.Content>
        
        </>
     
    )
}