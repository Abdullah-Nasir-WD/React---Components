import React, { useState } from 'react'
import Card  from './components/Card'
import Btn from './components/Btn'
import './App.css'


function App() {

     

      const [show, setShow] = useState(true)
  
      function hideContainer(params) {
        setShow(!show)
      }
  return (
    <>

<div class="d-flex">
<Btn container={hideContainer} title={!show ? <i class="fa-solid fa-eye"></i>  :  <i class="fa-solid fa-eye-slash"></i> }  />
</div>

{  show  && 


      <div>


            <div class='d-flex'>
                  <Card title="Banyan" price={"250"} image={"https://static-01.daraz.pk/p/a50955428299065f7727cedd1b2665ae.jpg"} 
                  address={"Daraz.pk"}/>

                  <Card title="Under wear" image={"https://savys.pk/cdn/shop/files/men-logo-boxershort-underwear-pack-of-3-299875.png?v=1737557113&width=1512"}
                  price={"1,990"}
                  address={"Daraz.pk"}/>


                  <Card price="Rs 1,399"  image={"https://teetall.pk/cdn/shop/products/1665193940dd52abe794d6cc4fb8df2596634f9e66_thumbnail_750x_77d73341-f0e2-4afd-bd7d-b0addfcb17a8.webp?v=1680370242"} title={"T - Shirt"}
                  address={"Daraz.pk"}/>


                  <Card title="Classical-Blue-Jean" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQoxS8U9loW9GKbTJ6TT-REbFYhrrBOF1nA&s"} price={"1,390"}
                  address={"Daraz.pk"}/>
            </div>
            <div class='d-flex'>
                  <Card title="Black-Cap" image={"https://www.cockatooindia.com/cdn/shop/files/0_a6091d28-fc95-45f2-ab34-0ba1e933d0e3.jpg?v=1737374254"} price={"499"}
                  address={"Daraz.pk"}/>

                  <Card price="Rs 1,050" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6oelsYEh7XFPKUa_mSG0EMWeUbDa9banmg&s"} title={"Cotton Socks"}
                  address={"Daraz.pk"}/>
            
                  <Card price="Rs 24,450" image={"https://www.flipy.pk/cdn/shop/files/1_fd4481ac-76ac-4f1d-8e7d-8f03b549613a.png?v=1740406287&width=1946"} title={"Laptop Bag"}
                  address={"Daraz.pk"}/>
                  
                  <Card price="Rs 15,150" image={"https://m.media-amazon.com/images/I/71k7E+FAV6L._AC_SL1300_.jpg"} title={"School Bag"}
                  address={"Daraz.pk"}/>
                  
            </div>      

            <div class='d-flex'>

                  <Card price="Rs 11,999" image={"https://img.drz.lazcdn.com/static/pk/p/51f01ced4c5fd514133f039afb984e1c.jpg_720x720q80.jpg"} title={"Smart Watch"}
                  address={"Daraz.pk"}/>
            
                  <Card price="Rs 26,050" image={"https://m.media-amazon.com/images/I/71iyG4F3MML._AC_SL1000_.jpg"} title={"Golden  Watch"}
                  address={"Daraz.pk"}/>
                  
                  <Card title="Gamming Laptop" image={"https://laptopmart.pk/wp-content/uploads/2024/11/s-l400.jpg"} price={"190,000"}
                  address={"Daraz.pk"}/>

                  <Card price="Rs 470,550" image={"https://m.media-amazon.com/images/I/715zrA5cmLL._AC_SL1500_.jpg"} title={"Gamming PC"}
                  address={"Daraz.pk"}/>
                  
            </div>

            <div class="d-flex">
                  
                  <Card title="Computer Table" image={"https://thefurnituremart.pk/wp-content/uploads/2024/06/immage-20.jpg"} price={"18,000"}
                  address={"Daraz.pk"}/>

                  <Card price="Rs 190,000" title={"Dinning Table"} image={"https://woodc.pk/wp-content/uploads/2023/05/ieqwif.jpg"} 
                  address={"Daraz.pk"}/>      

            </div> 

      </div>
      

}
      <script src="https://kit.fontawesome.com/70465652f7.js" crossorigin="anonymous"></script>
    </>
  )
}


export default App
