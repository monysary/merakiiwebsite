import BeyondStage from '../assets/Beyond_Stage_Shot.jpeg'

export default function Hero() {

  return (
    <>
      <div className='relative mx-auto h-[700px] flex justify-center items-center overflow-hidden'>
        <img src={BeyondStage} className='relative top-[-70px] w-full' alt='Beyond Stage Shot' />
      </div>
    </>
  )
}