import agenc1 from '../../assets/agenc1.png'
import agenc from '../../assets/agenc.jpg'
function Agenc() {
    return (
        <>
          <section className="pt-5 md:pt-[148px] pb-10 md:pb-[106px]">
            <div className="container px-4 md:px-0">
                <div className="services_headline w-full md:w-[802px] mx-auto text-center ">
                    <h1 className="font-inter font-bold text-[24px] md:text-[45px] text-[#151515] pb-[20px] md:px-38">Why You Should Choose Agenc    </h1>
                    <p className="font-inter font-normal text-[14px] leading-[26px] text-[#737373] pb-5 md:pb-[50px] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="agenc-main md:flex justify-between gap-[105px] pt-5 md:pt-[130px]">
                    <div className="w-full md:w-3/5">
                       <div className="grid grid-cols-2 w-full md:w-[791px] gap-10 md:gap-[103px]">
                          <div className="agenc-item">
                            <img src={agenc1}></img>
                            <h3 className='font-inter font-bold text-[20px] md:text-[25px] text-[#151515]'>Innovative Ideas</h3>
                            <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373] md:pr-1'>Because each project is different, we adapt to your business model.</p>
                          </div>
                          <div className="agenc-item">
                            <img src={agenc1}></img>
                            <h3 className='font-inter font-bold text-[20px] md:text-[25px] text-[#151515]'>Innovative Ideas</h3>
                            <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373] md:pr-1'>Because each project is different, we adapt to your business model.</p>
                          </div>
                          <div className="agenc-item">
                            <img src={agenc1}></img>
                            <h3 className='font-inter font-bold text-[20px] md:text-[25px] text-[#151515]'>Innovative Ideas</h3>
                            <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373] md:pr-1'>Because each project is different, we adapt to your business model.</p>
                          </div>
                          <div className="agenc-item">
                            <img src={agenc1}></img>
                            <h3 className='font-inter font-bold text-[20px] md:text-[25px] text-[#151515]'>Innovative Ideas</h3>
                            <p className='font-inter font-normal text-[16px] leading-[26px] text-[#737373] md:pr-1'>Because each project is different, we adapt to your business model.</p>
                          </div>
                       </div>
                    </div>
                    <div className="w-2/5 items-end">
                       <img className='hidden md:block' src={agenc}></img>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}
export default Agenc