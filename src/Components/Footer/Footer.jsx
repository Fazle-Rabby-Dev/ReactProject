import footer from '../../assets/footer.png'
function Footer() {
     
    return (
        <>
          <footer className='pt-[50px] md:pt-[150px] pb-[50px] md:pb-[138px]'>
            <div className="container px-4 md:px-0 pb-[50px]">
                <div className=" md:flex gap-[131px]">
                   <div className=" w-full md:w-[30%]">
                    <img src={footer}></img>
                    <p className='pt-[30px] font-inter font-normal text-[16px] leading-[26px] text-[#7B7B7B]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
                <div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 mt-5">
                   <div className="">
                      <h3 className='font-inter font-semibold text-[20px] text-[#151515]'>About</h3>
                       <div className=" flex flex-col gap-5 pt-[40px] font-inter font-normal text-[16px] leading-[24px] text-[#7B7B7B]">
                         <a>About Us</a>
                         <a>Features</a>
                         <a>News</a>
                         <a>Careers</a>
                       </div>
                   </div>
                   <div className="">
                      <h3 className='font-inter font-semibold text-[20px] text-[#151515]'>Company</h3>
                       <div className=" flex flex-col gap-5 pt-[40px] font-inter font-normal text-[16px] leading-[24px] text-[#7B7B7B]">
                         <a>Our Team</a>
                         <a>Partner With Us</a>
                         <a>FAQ</a>
                         <a>Blog</a>
                       </div>
                   </div>
                   <div className="">
                      <h3 className='font-inter font-semibold text-[20px] text-[#151515]'>Support</h3>
                       <div className=" flex flex-col gap-5 pt-[40px] font-inter font-normal text-[16px] leading-[24px] text-[#7B7B7B]">
                         <a>About</a>
                         <a>Support Center</a>
                         <a>Feedback</a>
                         <a>Contact Us</a>
                         <a>Accesbility</a>
                       </div>
                   </div>
                   <div className="">
                      <h3 className='font-inter font-semibold text-[20px] text-[#151515]'>Get in touch</h3>
                       <div className=" flex flex-col gap-5 pt-[40px] font-inter font-normal text-[16px] leading-[24px] text-[#7B7B7B]">
                         <a>info@gmail.com</a>
                         <a>+88 0121 0212</a>
                       </div>
                   </div>
                </div>
                </div>
            </div>
            <div className="container border-t w-full border-[#E8E8E8]">
                 <div className="text-center pt-[33px]">
                   <p className='font-inter font-normal text-[16px] leading-[26px] text-[#CCCCCC]'>All credit goes to @agence.com</p>
                 </div>
            </div>
          </footer>
        </>
    )
    
}
export default Footer