import React ,{ useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import lang from './base/lang'

export default function App() {
  const [data,setData]=useState('uz')
  const [mode,setMode]=useState(false)
  const handleData=lang[data];

  return (
    <>
     <Navbar mode={mode} setMode={setMode} data={handleData} setData={setData}/>
     <MainBody mode={mode}/>
     <Footer data={handleData}/>
    </>
  )
}
