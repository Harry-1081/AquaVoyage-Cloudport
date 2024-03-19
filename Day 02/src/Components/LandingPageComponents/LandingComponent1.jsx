import { useStates } from "../../States";

function LandingComponent1 () {
    const { navigate } = useStates();
    return(
        <>
            <div className="absolute xl:left-[11%] top-[49%]">

                <div className="p-0 m-0">
                    <span className="xl:text-6xl lg:text-3xl font-poppins font-bold text-[#364653]">Vacation feels<br/>like home</span>
                </div>

                <div className="mt-[-20px]">
                    <span className="text-2xl font-poppins text-[#364653]"><br/>The most comfortable accomodations<br/>
                    you can find all over the world</span>
                </div>

                <div className="mt-[20px]">
                    <button className="bg-[#364653] text-white pl-[25px] pr-[25px] pt-[10px] pb-[10px] rounded-[12px] font-medium"
                    onClick={()=>navigate("/details")}> Book Now !</button>
                </div>
                
            </div>
        </>
    );
}
export default LandingComponent1;