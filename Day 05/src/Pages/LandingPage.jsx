import LandingComponent1 from "../Components/LandingPageComponents/LandingComponent1";
import LandingComponent2 from "../Components/LandingPageComponents/LandingComponent2";
import LandingComponent4 from "../Components/LandingPageComponents/LandingComponent4";
import Navbar from "../Components/Navbar/Navbar";
import { FaLocationDot,FaBath } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { MdChair } from "react-icons/md";
function LandingPage () {
    return(
        <>
                <Navbar/>
            <div className="bg-blue-50 h-full flex flex-col justify-center items-center">

                <div className="bg-landingimage h-screen mt-[30px] w-[90%] rounded-[20px]">
                    <div className="flex items-center justify-center">
                        <LandingComponent1/>
                        <LandingComponent2/>
                    </div>
                </div>

                {/* <LandingComponent4/> */}

                <div className="flex justify-evenly w-[100%] m-[200px]">

                    <div className="h-[420px] rounded-[10px]
                    inline-block overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-[102%]">
                        <img className="h-[240px] w-[360px]"
                        src="https://katlatrack.is/wp-content/uploads/2022/04/black_beach_buggy_front_.jpg" alt="luxury boat"></img>
                        <button className='absolute ml-[30px] top-[51%] text-white w-[100px] text-1xl bg-[#012346] h-[25px] pl-[20px] pr-[20px] font-semibold'>₹ 1,200</button>
                        <button className='absolute ml-[30px] top-[57%] text-white w-[100px] text-1xl  bg-[#0c67c4] h-[25px] pl-[20px] pr-[20px] font-semibold'>Hourly</button>
                        {/* Section 2 */}
                        <section className="h-[110px] border-l-2 border-r-2 border-[#b6b6b659] flex flex-col justify-center items-start pt-[20px] pl-[30px]">
                            <span className="text-[1.3rem] font-productsansb font-semibold">Beach Buggy</span>
                            <span className="flex text-1xl font-poppins pt-[4px] text-[#6b3434] font-semibold">
                                <span className="pr-[10px] pt-[3px]"><FaLocationDot/></span>Elephant Beach, Andaman</span>
                        </section>
                        {/* Section 3 */}
                        <section className="h-[60px] rounded-b-[10px] flex justify-evenly items-center bg-[#364653]">
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                            font-semibold text-center rounded-[5px]'>Electric</button>
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px]
                            font-semibold text-center rounded-[5px]'><span className="text-1xl pr-[8px] pt-[5px]"><MdChair/></span>2 Seater</button>
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                            font-semibold text-center rounded-[5px]'>6am to 6pm</button>
                        </section>
                    </div>

                    <div className="h-[420px] rounded-[10px]
                    inline-block overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-[102%]">
                        <img className="h-[240px] w-[360px]"
                        src="https://themesfamily.com/2023/barr/assets/img/blog/3.jpg" alt="luxury boat"></img>
                        <button className='absolute ml-[30px] top-[51%] text-white w-[100px] text-1xl bg-[#012346] h-[25px] pl-[20px] pr-[20px] font-semibold'>₹ 6,000</button>
                        <button className='absolute ml-[30px] top-[57%] text-white w-[100px] text-1xl  bg-[#0c67c4] h-[25px] pl-[20px] pr-[20px] font-semibold'>Per Day</button>
                        {/* Section 2 */}
                        <section className="h-[110px] border-l-2 border-r-2 border-[#b6b6b659] flex flex-col justify-center items-start pt-[20px] pl-[30px]">
                            <span className="text-[1.3rem] font-productsansb font-semibold">Luxury Boat</span>
                            <span className="flex text-1xl font-poppins pt-[4px] text-[#6b3434] font-semibold">
                                <span className="pr-[10px] pt-[3px]"><FaLocationDot/></span>Vagator Beach, Goa</span>
                        </section>
                        {/* Section 3 */}
                        <section className="h-[60px] rounded-b-[10px] flex justify-evenly items-center bg-[#364653]">
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px]
                            font-semibold text-center rounded-[5px]'><span className="text-1xl pr-[10px] pt-[5px]"><IoBed/></span>4 Cabin</button>
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                            font-semibold text-center rounded-[5px]'>2+ Crew</button>
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                            font-semibold text-center rounded-[5px]'><span className="text-1xl pr-[10px] pt-[3.5px]"><FaBath/></span>4 Bath</button>
                        </section>
                    </div>
                    

                    <div className="h-[420px] rounded-[10px]
                    inline-block overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-[102%]">
                        <img className="h-[240px] w-[360px]"
                        src="https://media.istockphoto.com/id/1293154636/photo/jet-ski-competitor-cornering-at-speed-creating-at-lot-of-spray.jpg?s=612x612&w=0&k=20&c=E1VTh2MnzaX93RQp4J0Z850-wril_7EXGd1bCtTOuq0=" alt="luxury boat"></img>
                        <button className='absolute ml-[30px] top-[51%] text-white w-[100px] text-1xl bg-[#012346] h-[25px] pl-[20px] pr-[20px] font-semibold'>₹ 700</button>
                        <button className='absolute ml-[30px] top-[57%] text-white w-[100px] text-1xl  bg-[#0c67c4] h-[25px] pl-[20px] pr-[20px] font-semibold'>Hourly</button>
                        {/* Section 2 */}
                        <section className="h-[110px] border-l-2 border-r-2 border-[#b6b6b659] flex flex-col justify-center items-start pt-[20px] pl-[30px]">
                            <span className="text-[1.3rem] font-productsansb font-semibold">Jet Ski Ride</span>
                            <span className="flex text-1xl font-poppins pt-[4px] text-[#6b3434] font-semibold">
                                <span className="pr-[10px] pt-[3px]"><FaLocationDot/></span>Corbyn's Cove, Port Blair</span>
                        </section>
                        {/* Section 3 */}
                        <section className="h-[60px] rounded-b-[10px] flex justify-evenly items-center bg-[#364653]">
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                            font-semibold text-center rounded-[5px]'>Speeds upto 150 mph</button>
                            <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px]
                            font-semibold text-center rounded-[5px]'><span className="text-1xl pr-[8px] pt-[5px]"><MdChair/></span>Driver + 1</button>
                            {/* <button className='text-[#364653] flex text-[1.1rem] bg-white h-[30px] pl-[13px] pr-[10px] pt-[2px]
                             font-semibold text-center rounded-[5px]'>Electric</button> */}
                        </section>
                    </div>

                </div>

            </div>
        </>
    );
}
export default LandingPage;