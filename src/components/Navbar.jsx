import React from 'react'
import Switch from '@mui/material/Switch';

export default function Navbar({mode,setMode,data,setData}) {
  return (
   
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light">

        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#1">{data.home}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#2">{data.dashboard}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#3">{data.products}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#4">{data.about}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#5">{data.servise}</a>
        </li>   
      </ul>

      <select class="form-select " onChange={(e)=>setData(e.target.value)} >
      <option value="uz">O'zbek </option>
      <option value="eng">Ingliz</option>
      <option value="krill">Krill</option>
      </select>

      <li className='list-group-item text-light uzunlik'> {mode==true? data.modeColor2 : data.modeColor1 } {data.mode}</li>
      <Switch onClick={()=>setMode(!mode)}/>
     </div>
    </div>
  </nav>
   
  )
}
