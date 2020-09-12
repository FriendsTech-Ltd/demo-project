import React,{useEffect} from 'react';
import AddData from './AddData';
import GetData from './GetData'

const Home = () => {
 
  useEffect(()=>{
   
   // eslint-disable-next-line
  },[])

  
  return (

<div class="container">
<div class="row">
  <div class="col-sm">
  <AddData/>
  </div>
  <div class="col-sm">
  <GetData/>
  </div>

</div>
</div>
  )
}

export default Home