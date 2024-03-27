import { useEffect } from 'react';
function LandingComponent4() {
    
    useEffect(() => {
        const counters = document.querySelectorAll('.box7-value');
        const speed = 200;
        counters.forEach((counter) => 
        {
            const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = Math.trunc(target / speed);
                if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount()
        });
        // eslint-disable-next-line
    },[]);

    return (
        <div class="box7 relative flex items-center w-full mt-[250px] mb-[50px] justify-evenly lg:flex-col h-[250px] bg-[#364653]">

        <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
            <span data-target="1600" class="box7-value text-6xl text-white font-bold">0</span>
            <span class="text-6xl text-white font-bold">+</span>
            <span class="box7-f1-head xl:text-2xl lg:1xl text-white"><br/>Hotels across India<br/></span>
        </div>

        <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
            <span data-target="12000" class="box7-value text-6xl text-white font-bold">0</span>
            <span class="text-6xl text-white font-bold">+</span>
            <span class="box7-f2-head xl:text-2xl lg:1xl text-white"><br/>Registered Users<br/></span>
        </div>

        <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
            <span data-target="20000" class="box7-value text-6xl text-white font-bold">0</span>
            <span class="text-6xl text-white font-bold">+</span>
            <span class="box7-f3-head xl:text-2xl lg:1xl text-white"><br/>Bookings Every Year<br/></span>
        </div>

        </div>
    );
}
export default LandingComponent4;