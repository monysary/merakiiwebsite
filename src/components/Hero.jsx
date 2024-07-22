import BeyondStage from '../assets/Beyond_Stage_Shot.jpeg'

export default function Hero() {

  return (
    <>
      <div className='relative top-[-68px] md:top-0 mx-auto md:h-[700px] flex justify-center items-center overflow-hidden'>
        <img src={BeyondStage} className='relative top-[-70px] h-[calc(100vh+68px)] max-w-[unset] md:w-full md:min-w-[1200px]' alt='Beyond Stage Shot' />
      </div>
    </>
  )
}