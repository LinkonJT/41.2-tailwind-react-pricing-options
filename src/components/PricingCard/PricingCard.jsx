import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing)

    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-amber-600 rounded-2xl p-4 flex flex-col'>
            {/* card header */}
            <div>
            {/* <h1 className='text-7xl'>{pricing.name}</h1>
            <h4 className='text-3xl'>{pricing.price}</h4> */}
            <h1 className='text-7xl'>{name}</h1>
            <h4 className='text-3xl'>{price}</h4>
            </div>
        {/* card body */}
       <div className='bg-blue-600 p-4 rounded-2xl flex-1'>
       <p>{description}</p>

        {
            features.map((feature, index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
        }

       </div>
       <button className="btn w-full rounded-2xl mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;