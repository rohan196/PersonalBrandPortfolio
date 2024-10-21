import { images } from '../constants'
const Hero = () => {
  return (
    <div className='mt-6 w-full border-mainPink border py-3 px-8 justify-between items-center rounded-3xl'>
      <div className='flex justify-between m-8'>
        <div className='text-area lg:w-[550px] my-auto'>
          <div className=''>
            <div className='text-mainPink font-judson italic'>
              <h2>Your Friendly Neighbourhood Webster</h2>
            </div>
            <div className='text-mainPink text-4xl font-judson font-bold mt-2'>
              <h1>The One Stop To All Your Web Problems !!!</h1>
            </div>
            <div>
              <div className='bg-box py-6 items-center rounded-3xl lg:w-full mt-12 px-8'>
                <h3 className='text-offWhite text-lg font-judson italic'>
                  Welcome to the Rohan-Verse,
                  I’m “Just An Engineer” here to make your online web experience simple and stress-free.
                  You don’t need to deal with Web shenanigans.
                  From designing, to development, and also reliable hosting too, I’ve got you covered.
                </h3>
              </div>
            </div>
            <div className='flex justify-between mt-12 font-arima'>
              <div className=''>
                <button className="bg-brownBtn text-customGray font-semibold py-3 px-6 rounded-full">
                  Turn Ideas Into Reality !
                </button>
              </div>
              <div className=''>
                <button className="bg-darkPink text-darkyellowBrown font-semibold py-3 px-6 rounded-full">
                  Get in touch with me !
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='img-area lg:w-[550px] flex justify-center'>
          <div className='my-auto'><img src={images.hero} className='h-[500px]'/></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
