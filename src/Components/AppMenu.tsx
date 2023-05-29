import React, { CSSProperties } from 'react';
import { FC, useState } from 'react';
import { Menu, MenuProps, Button,  Layout} from 'antd';
import 'antd/dist/reset.css';
import '../App.css';
import {MenuFoldOutlined,
  MenuUnfoldOutlined, BarChartOutlined, SettingOutlined, ImportOutlined, 
DashboardOutlined, TeamOutlined,  SwapOutlined, ShoppingCartOutlined, ShoppingOutlined, DownloadOutlined} from '@ant-design/icons'



const { Header, Sider, Content} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
 
  getItem('Apply Online', '/apply',  <DownloadOutlined />),
  getItem('Downloads','/downloads',<DownloadOutlined/>),
  getItem('Services', '/services', <SettingOutlined/>, [
    getItem('randomService', '/category'),
    getItem('Service3', '/department'),
    getItem('Service4', '/service4'),
  ]),
  getItem('About Us','/about',<BarChartOutlined/>)
]


type AppMenuProps = {
    onClick?: any;
    MenuCSSStyle?: CSSProperties
}

function AppMenu(props: AppMenuProps) {
 

  return (

    
    <div>
  

      <div>
      
        <Menu 
        onClick={props.onClick}
        defaultSelectedKeys={[window.location.pathname]}
        mode='horizontal'
        style={props.MenuCSSStyle}
        items= {items}
       
        />
     
      
      </div>
     
            
            
    </div>
  );
}

export default AppMenu;
