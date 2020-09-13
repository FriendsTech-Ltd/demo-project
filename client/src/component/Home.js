import React,{useEffect} from 'react';
import AddData from './AddData';
import GetData from './GetData'

const Home = () => {
 
  useEffect(()=>{
   
   // eslint-disable-next-line
  },[])

  
  return (

<div class="">
<div class="row">
  <div class="col-4">
  <AddData/>
  </div>
  <div class="col-8">
  <GetData/>
  </div>

</div>
</div>
  )
}

export default Home