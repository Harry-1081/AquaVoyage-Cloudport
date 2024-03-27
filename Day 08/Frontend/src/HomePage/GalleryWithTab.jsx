import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { useStates } from "../States";
   
  export function GalleryWithTab() {
    const { navigate,expanded } = useStates(); 
    const data = [
      {
        label: "Deluxe Package",
        value: "html",
        images: [
          {
            imageLink:
              "https://www.nichepursuits.com/wp-content/uploads/2023/06/Deluxe-Names-for-Resort-Hotels.jpg",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
          {
            imageLink:
              "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
          },
          {
            imageLink:
              "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          },
        ],
      },
      {
        label: "Premium Package",
        value: "react",
        images: [
          {
            imageLink:
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
        ],
      },
      {
        label: "Luxury Package",
        value: "vue",
        images: [
          {
            imageLink:
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
          {
            imageLink:
              "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
          },
          {
            imageLink:
              "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          },
        ],
      },
      
    ];
   
    return (
        <div className="relative z-index: 20">
            
        <Tabs value="html" className={expanded ? "bg-white w-[1220px]" : "bg-white w-[1450px]"}>

        <TabsHeader
        className="text-2xl w-full font-semibold shadow-md ">
          {data.map(({ label, value }) => (
              <Tab key={value} value={value} className=" px-4 py-2 hover:rounded-lg border-x-2 hover:bg-gray-300">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        
        <TabsBody className="grid grid-cols-1">
          {data.map(({ value, images }) => (
              <TabPanel
              className={expanded ?
              "grid grid-cols-3 ml-[30px] mr-[50px] mt-[30px] gap-9 xl:grid-cols-3":
              "grid grid-cols-3 ml-[10px] mr-[20px] mt-[30px] gap-9 xl:grid-cols-4"}
              key={value}
              value={value}
          >
              {images?.map(({ imageLink }, index) => (
                  <div key={index} className="relative bg-white w-[300px] h-[300px] shadow-[0_5px_12px_rgba(8,_112,_184,_0.7)] 
                  hover:shadow-[0_5px_12px_rgba(8,_112,_184,_0.7)] hover:scale-110 transition duration-700 rounded-[10px]">
                      {/* <a href="/details" target="_blank" rel="noopener noreferrer" className="block w-full h-full"> */}
                          <img
                              className="h-40 w-full max-w-full rounded-t-[10px] object-cover object-center "
                              src={imageLink}
                              alt="image-photo"
                          />
                       <div className="relative">
    <div className="flex justify-center items-center pt-[15px]">
        <div className="">
            <span className="text-1xl font-bold font-poppins">1 Bedroom deluxe houseboat<br/></span>
            <span className="text-[0.7rem] font-bold font-poppins">₹  7,500</span>
            <span className="text-[0.7rem] font-bold font-poppins pl-[5px]">+ ( ₹ 1,200 TAXES & FEES)</span>
            <div className="flex gap-[20px] mt-[5px]">
              <button className="mt-[10px] bg-blue-gray-400 rounded-[5px] text-white font-poppins font-semibold px-[10px]
              bg-green-700 py-[5px]">Book Online</button>
              <button className="mt-[10px] bg-blue-gray-400 rounded-[5px] text-white font-poppins font-semibold px-[10px]
              bg-[#381256] py-[5px]" onClick={()=>navigate("/details")}>View Details</button>
            </div>
        </div>
    </div>
    </div>
                  </div>
              ))}
          </TabPanel>
          
          ))}
        </TabsBody>
      </Tabs>
          </div>
    );
  }