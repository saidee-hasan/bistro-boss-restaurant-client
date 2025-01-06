import React, { useState } from 'react'
import Cover from '../shared/Cover';
import orderImg from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Order() {
  const [tabIndex,setTabIndex]=useState(0)
  return (
    <div>
      <Cover image={orderImg} title='Order Food'/>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
    </div>
  )
}

export default Order
