import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
// import { additem } from '../redux/action';
import './product.css'
export default function Propage() {
  const location = useLocation();
  const data = location.state.data
  var tnurl1,tnurl2,tnurl3;
  let [n,setN] = useState(1)
  let [image,setImage] = useState(1)
  // const dispatch = useDispatch();
  let items = JSON.parse(localStorage.getItem("items")) || [];
//  let [items,setItems] = useState(localStorage.getItem('items')|| [])

  function addtocart(id,title,price,category,image,quantity) {
        // const newitem =
       items = [
          ...items,
          {
              id:id,
              title:title,
              price:price,
              category:category,
              image:image,
              quantity:quantity,
              
          }
       ]
      // setItems(...items,newitem)
      localStorage.setItem('items',JSON.stringify(items))
        // dispatch(additem(id,title,price,category,image,quantity));
        setN(1);
        window.location.reload();
  }
  function decre() {
        if(n>1) {
            setN(n-1)
        }
  }
  function incre() {
        setN(n+1)
  }
  const tnclick = (id) => {
        switch(id) {
            case 1: setImage(1);break;
            case 2: setImage(2);break;
            case 3: setImage(3);break;
            case 4: setImage(4);break;
            default:break;
        }
  };


    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let date = d.getDate();
    let delday = weekday[d.getDay()];
    let delmonth = month[d.getMonth()];


    if(data.category === 'men\'s clothing') {
      tnurl1 = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Bg9NL8nfL._UX569_.jpg'
      tnurl2 = 'https://assets.ajio.com/medias/sys_master/root/20230104/nfrP/63b4bddcf997ddfdbd0f069f/eyebogler_navy_blue_%26_white_colourblock_crew-neck_t-shirt.jpg'
      tnurl3 = 'https://cdna.lystit.com/photos/a4d2-2014/09/14/fjallraven-black-foldsack-no-1-backpack-product-1-23573657-3-764229978-normal.jpeg'
    } else if(data.category === 'jewelery') {
      tnurl1 = 'https://e0.pxfuel.com/wallpapers/320/852/desktop-wallpaper-beautiful-gold-jewellery-widescreen-high-definition-gold-jewellery-background-gold-jewelry.jpg'
      tnurl2 = 'https://cdn.shopify.com/s/files/1/0553/5422/8922/files/img-2_400x.jpg?v=1673000561'
      tnurl3 = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81TkJUClfML._UY695_.jpg'
    } else if(data.category === 'women\'s clothing') {
      tnurl1 = 'https://c1.wallpaperflare.com/preview/347/984/1019/female-tattoo-tattooed-woman-vingate.jpg'
      tnurl2 = 'https://c1.wallpaperflare.com/preview/568/686/462/person-retro-portrait-female.jpg'
      tnurl3 = 'https://tudocommoda.com/wp-content/uploads/2016/04/t-shirt-feminina-44.jpg'
    } else if(data.category === 'electronics') {
      tnurl1 = 'https://images.philips.com/is/image/PhilipsConsumer/24M1N3200ZA_94-IMS-en_IN?$jpglarge$&wid=960'
      tnurl2 = 'https://c1.wallpaperflare.com/preview/793/521/277/flash-memory-pendrive-memory-card-high-technologies.jpg'
      tnurl3 = 'https://readyteamone.com/wp-content/uploads/2022/03/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix.jpg'
    }
    
  return (
    
    <div style={{marginTop:"110px"}}>
        <div className='whole'>
            <div className='resp d-flex flex-wrap'>
                <div className='pimg'>
                    
                    <img src={data.image} className="proimg" alt="img1" style={{display: image === 1 ? 'block' : 'none'}}/>
                    <img src={tnurl1} className="proimg" alt="img1" style={{display: image === 2 ? 'block' : 'none'}} />
                    <img src={tnurl2} className="proimg" alt="img1" style={{display: image === 3 ? 'block' : 'none'}} />
                    <img src={tnurl3} className="proimg" alt="img1" style={{display: image === 4 ? 'block' : 'none'}} />
                    
                    <div className='tb mt-3 mb-5'>
                        <img src={data.image} alt="pro1-tb" className='tb-1' style={{border: image ===1 ? '3px solid rgb(255, 0, 0)' : 'none',filter: image === 1 ? 'opacity(40%)' : 'none' }} onClick={() => tnclick(1)} />
                        <img src={tnurl1} alt="pro1-tb" className='tb-2' style={{border: image ===2 ? '3px solid rgb(255, 0, 0)' : 'none',filter: image === 2 ? 'opacity(40%)' : 'none' }} onClick={() => tnclick(2)} />
                        <img src={tnurl2} alt="pro1-tb" className='tb-3' style={{border: image ===3 ? '3px solid rgb(255, 0, 0)' : 'none',filter: image === 3 ? 'opacity(40%)' : 'none' }} onClick={() => tnclick(3)} />
                        <img src={tnurl3} alt="pro1-tb" className='tb-4' style={{border: image ===4 ? '3px solid rgb(255, 0, 0)' : 'none',filter: image === 4 ? 'opacity(40%)' : 'none' }} onClick={() => tnclick(4)} />
                    </div>
                </div>
                <div className='details'>
                    <span className='heading' style={{color:"rgb(255, 140, 0)"}} >{data.category}</span>
                    <h1 className='mt-2'>
                        {data.title}
                    </h1>
                    <img src="../images/rating.png" alt="rating"/> <span>5/5 {Math.ceil((data.price)*5+1)} ratings</span>
                    <p className=''>
                    {data.description}
                    </p>
                    <div className='d-flex mt-4'>
                        <h2>${data.price}</h2>
                        <h4 className='ms-4 priceoff'>50%</h4>
                    </div>
                    <span className='text-decoration-line-through text-muted'>${(data.price)*2}</span>
                    <div className='d-flex mt-4 buttons'>
                        
                            <div className='d-flex val rounded'>
                                <div className='valminus mt-1' onClick={decre}>
                                    <img src="../images/icon-minus.svg" alt="val-minus" />
                                </div>
                                <div>
                                    <h6 className='ms-4 mt-2'>{n}</h6>
                                </div>
                                <div className='ms-4 mt-1 valplus' onClick={incre}>
                                    <img src="../images/icon-plus.svg" alt="val-plus"  />
                                </div>
                            </div>
                       
                          <div className='addtocart ms-5 text-center pt-2 rounded' onClick= {() => addtocart(data.id,data.title,data.price,data.category,data.image,n)}>
                            <img src="../images/icon-cart.svg" alt="icon-cart"/>
                            <span className='ms-2'>Add to cart</span>
                          </div>
                      </div>
                      <div className='mt-2 mb-5'>
                        <span>Free delivery <br/> by {delday}, {date} {delmonth} if orders within 8hrs,7mins</span>
                      </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
