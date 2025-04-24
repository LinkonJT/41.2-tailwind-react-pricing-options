import React, {use} from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';


const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)

    console.log(pricingData)
    return (
        <div>
            <h2 className='text-'>get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {/* manual card */}
                {/* {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

{/* Using Daisy card */}
{
    pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing} ></DaisyPricing>)
}

            </div>
        </div>
    );
};

export default PricingOptions;