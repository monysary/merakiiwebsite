import BeyondStage from '../assets/Beyond_Stage_Shot.jpeg'

export default function Hero() {

  return (
    <>
      <div className='relative top-[-72px] md:top-[-80px] mx-auto h-[100vh] overflow-hidden bg-no-repeat bg-center bg-cover supported-bg-cover lg:bg-fixed' style={{backgroundImage: `url(${BeyondStage})`}}>
      </div>
    </>
  )
}