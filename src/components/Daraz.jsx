import React from 'react'
import "./daraz.css"

let Data = [
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S7a60fd0641684131b132bcf03c059708S.jpg_400x400q80.jpg_.avif",
  ProductName:"Aura arabic watch for boys",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/7ed74c64887ee91162fb06086a800f6d.jpg_400x400q80.jpg_.avif",
  ProductName:"Bloom Pour Femme",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S1ee28e87220140d8b4b82c91d6a8b3d3z.jpg_400x400q80.jpg_.avif",
  ProductName:"KIDS WINTER TRACKSUIT",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/482b935ecb650e14cf96dea5d5568809.jpg_400x400q80.jpg_.avif",
  ProductName:"Full Slvees Dress for girls",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/91c4daf8379264a41356357c6d923d41.jpg_400x400q80.jpg_.avif",
  ProductName:"Foldable On-Ear Headphone Wireless",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/b3af1348df2133ea3236b7c61b485b3f.jpg_400x400q80.jpg_.avif",
  ProductName:"T9 Vintage Hair Trimmer For Men",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/06f2fd7ade9b30811f76de496d158e62.jpg_400x400q80.jpg_.avif",
  ProductName:"Hand bag for girls",
  Price:"$50"
},{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/e722879f290537184d7c6c2ce46e4715.png_400x400q80.png_.avif",
  ProductName:"Airpods Sound",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/Sc7383cd3bcfa489bb1b738176134db44d.jpg_400x400q80.jpg_.avif",
  ProductName:"High Shining ring",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S6d83cb9f519c4152a7a99979ea8b8725c.jpg_400x400q80.jpg_.avif",
  ProductName:"Premium Laptop bag",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/e54d023b207303ea526dfe74010b751a.jpg_400x400q80.jpg_.avif",
  ProductName:"Earrings for Girls ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/2eefbe114f6373deecf7bb1a7c55e3c4.jpg_400x400q80.jpg_.avif",
  ProductName:"Women's Face Hair Remover",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_400x400q80.jpg_.avif",
  ProductName:"Neck Rainbow Ribbon ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/Sd1e14a15edf143b6bb6ca54085fc97ebm.jpg_400x400q80.jpg_.avif",
  ProductName:"Sneakers for men",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/24b82c3876c311bdf687dcf68dee70ba.jpg_400x400q80.jpg_.avif",
  ProductName:"Dell Pro Sleeve 13",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/cbf066edc2cdd3d256a56c89423be6b6.jpg_400x400q80.jpg_.avif",
  ProductName:"Shower Slippers for Bathroom",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/adc291a29d17c7742d66868a1ef65e37.jpg_400x400q80.jpg_.avif",
  ProductName:"Universal Mobile Phone Holder",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S552688b3034d4b3799405631b5cde295r.jpg_400x400q80.jpg_.avif",
  ProductName:"Brightening Glow Kit",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/cd0eea27ccc9c24b24431a7f447d1858.jpg_400x400q80.jpg_.avif",
  ProductName:"Bag For Laptop , college , university",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/1da49190c1d1992c1a44b53c57fc2dfa.png_400x400q80.png_.avif",
  ProductName:"Boys Hoodies ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/da27005cbf4fb548c1fd05c4e83fde2c.jpg_400x400q80.jpg_.avif",
  ProductName:"Color Smoke_Bomb Artificial Color",
  Price:"$50"
},
{
    ProductImage:"https://img.drz.lazcdn.com/static/pk/p/626443b22d4681671274b9a6089d1c3b.jpg_400x400q80.jpg_.avif",
  ProductName:"Cat House",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/5bb21ff41d7115c84d8013a5024220b8.jpg_400x400q80.jpg_.avif",
  ProductName:"Men;s long sleeves",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S19902502a1ef4c08be193a650e9d07d4C.jpg_400x400q80.jpg_.avif",
  ProductName:"Half Sleeve DTF printed",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/8b9a7d96ce1536bc2d17df838a0bce0a.jpg_400x400q80.jpg_.avif",
  ProductName:"Best school backpack",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/fbd03319531804d10f1bbd15e9cea349.jpg_400x400q80.jpg_.avif",
  ProductName:"Manual Water Pump",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S67bb8a369a0247a2b9c9112d78504ad2W.jpg_400x400q80.jpg_.avif",
  ProductName:"happy birthday decoration ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/S14164bc2bbda4f2a9a6b3dc2702a4c27w.jpg_400x400q80.jpg_.avif",
  ProductName:"Casual flat slippers for girls",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/c67e1efa4cc07eef7e0de3e3860cf9e1.jpg_400x400q80.jpg_.avif",
  ProductName:"LICENSE Extreme Slim Wallet",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/08b33ec593c1e28ae4de08a918bf2bf5.jpg_400x400q80.jpg_.avif",
  ProductName:"sweat Shirt's & Trouser",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/8b9a7d96ce1536bc2d17df838a0bce0a.jpg_400x400q80.jpg_.avif",
  
  ProductName:"4pcs school backpack",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/5ea25e6aca8a4362ae26e4c778ca4742.jpg_400x400q80.jpg_.avif",
  ProductName:"Socks Drawer Organizer ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/84ca4ca6283dbac8bd5f17b5b61fd2fb.jpg_400x400q80.jpg_.avif",
  ProductName:"26cm Ring Light",

  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/2e4a98aec64c271d0f583079f7830d75.jpg_400x400q80.jpg_.avif",
  ProductName:"AirPods Max Wireless",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/fd61c90f246bdef523217fd3a289be5f.jpg_400x400q80.jpg_.avif",
  ProductName:"Watches for Lovebirds Girl and Boy",
  Price:"$50"
},

{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/c38cd2990f4a41015af0971c1640d3ab.jpg_400x400q80.jpg_.avif",
  ProductName:"GOLDEN PLATED CROWN RING",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/g/kf/Sd43f1736a5774f05b64dd935d1bbfcaaZ.jpg_400x400q80.jpg_.avif",
  ProductName:"Wooden Wall keychain",
  Price:"$50"
},

{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/12def14528b8401ff954fa337ef1afbb.jpg_400x400q80.jpg_.avif",
  ProductName:"6/9/12 Pcs/Set Matte Color Lipstick Pencils, ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/3b2039be3f12cabb8150482b4b154eb7.jpg_400x400q80.jpg_.avif",
  ProductName:"The boys printed summer tracksuit ",
  Price:"$50"
},
{
  ProductImage:"https://img.drz.lazcdn.com/static/pk/p/102bef71bd33b7fba34461eb34e02a87.jpg_400x400q80.jpg_.avif",
  ProductName:"Cute baby boy ",
  Price:"$50"
},

]


function Daraz() {
  return (
    <div>
      <h1>Daraz Product</h1>
      <div className="products">
        {
            Data.map((meriProduct)=>{
                return <Product {...meriProduct} />
            })
        }
      </div>
    </div>
  )
}

export default Daraz


  ProductImage:""
function Product(props) {
    console.log(props)
    return <div className='product'>
        <img src={props.ProductImage} alt="Product" />
        <h5>{props.ProductName}</h5>
        <p>{props.Price}</p>
    </div>
}