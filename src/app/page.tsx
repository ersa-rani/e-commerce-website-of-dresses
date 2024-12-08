
export default function Home()  {
  return (
    <div>
    <div className="w-[1440px] flex bg-black h-[38px] pt-[9px] pr-[100px] pb-[9px] pl-[544px] gap-4 items-center">
      <p className="font-satoshi text-[14px] font-normal leading-[18.9px] text-left text-white underline-offset-auto decoration-slice">
        Sign up and get 20% off to your first order.
        <span className="font-satoshi text-[14px] font-medium underline decoration-solid underline-offset-auto">
          Sign Up Now
        </span>
      </p>
    </div>

<div   className="bg-home">
<img src="/vector.png" alt="vector" className="vector1"/>
<img src="/vector.png" alt="vector" className="vector2"/>
<p className='index1'>
  FIND CLOTHES THAT MATCHES YOUR STYLE</p>
  <p className='index2'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
     cater to your sense of style.</p>
     <button className="shop-Button">Shop Now</button>
</div><div className="brand-list">
<li>VERSACE</li><li>ZARA</li><li>GUCCI</li><li>PRADA</li><li>Calvin Klein</li></div>
<Arrivals/>
</div>
  );
};

export function Arrivals(){
  return(
    <div>
      <h1 className="new-arrivals">NEW ARRIVALS</h1>
      <div>
        <img src="/frame1.png" alt="product"className="product1"/><p className="product-1-price">$120</p>
        <img src="/frame1Detail.png" alt="Details"className="product1Detail"/>
        <img src="/frame2.png" alt="product"className="product2"/>
        <img src="/frame2Detail.png" alt="Details"className="product2Detail"/><p className="product-2-price">$240 <s>$260</s></p>
        <img src="/frame3.png" alt="product"className="product3"/>
        <img src="/frame1Detail.png" alt="Details"className="product3Detail"/><p className="product-3-price">$180</p>
        <img src="/frame4.png" alt="product"className="product4"/>
        <img src="/frame1Detail.png" alt="Details"className="product4Detail"/><p className="product-4-price">$130<s>$160</s></p>
      </div><button className="view-button">View All</button>
  </div>
    
  )
}