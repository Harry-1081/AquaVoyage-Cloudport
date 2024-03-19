function Navbar () {
    return (
        <>
            <div className="h-[70px] bg-blue-50 w-full flex justify-evenly">
                <div className="bg-logo bg-cover absolute left-[1%] top-[1%] w-[65px] h-[65px]">
                </div>
                <div className="flex justify-center items-center">
                    <p className="pr-[25px] pt-[10px] text-[1.2rem] font-semibold font-productsansr">Home</p>
                    <p className="pl-[25px] pr-[25px] pt-[10px] text-[1.2rem] font-semibold font-productsansr">Packages</p>
                    <p className="pl-[25px] pr-[25px] pt-[10px] text-[1.2rem] font-semibold font-productsansr">Galleries</p>
                    <p className="pl-[25px] pr-[25px] pt-[10px] text-[1.2rem] font-semibold font-productsansr">Contact</p>
                </div>
            </div>
        </>
    );
}
export default Navbar;