import { useState } from "react";

function LandingComponent2 () {
    const[location,setLocation]=useState('Mahabalipuram');
    const[guests,setGuests]=useState(1);
    return(
        <>
        <div className="absolute flex justify-evenly items-center bg-[#c6dee8] bottom-[-20%] h-[150px] w-[80%] rounded-[20px]">
            <div className="w-[20%] h-[50%] border-r-2 border-black flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold pb-[5px]">Location</p>
                <select className="bg-blue-200 px-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3c4e4e] focus:border-transparent"
                onChange={(e) => setLocation(e.target.value)}>
                    <option value={"Mahabalipuram"}>Mahabalipuram</option>
                    <option value={"Elephant Beach"}>Elephant Beach</option>
                    <option value={"Goa"}>Goa</option>
                    <option value={"Varkala"}>Varkala</option>
                </select>
            </div>

            <div className="w-[20%] h-[50%] border-r-2 border-black flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold pb-[5px]">Guest</p>
                <input type="number" className="bg-blue-200 w-16 px-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3c4e4e] focus:border-transparent" 
                value={guests} onChange={(e) => setGuests(e.target.value)}>
                </input>
            </div>

            <div className="w-[50%] flex justify-evenly items-center">
                <section>
                    <p className="text-2xl font-semibold">Check In</p>
                    <input type="date" className="bg-blue-200 w-[130px] px-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3c4e4e] focus:border-transparent"
                     value="2024-03-15"></input>
                </section>
                <section>
                    <p className="text-2xl font-semibold">Check Out</p>
                    <input type="date" className="bg-blue-200 w-[130px] px-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3c4e4e] focus:border-transparent"
                     value="2024-03-19"></input>
                </section>
                <section className="flex items-center">
                    <button className="bg-[#364653] text-white pl-[35px] pr-[35px] pt-[10px] pb-[10px] rounded-[12px] font-medium">Search</button>
                </section>
            </div>
        </div>
        </>
    );
}
export default LandingComponent2;