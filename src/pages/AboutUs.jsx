import aboutImage1 from "/about-image-1.jfif";
import aboutImage2 from "/about-image-2.jfif";
import leafsDesign from "/leafs-design.svg";
import startingQuotes from "/starting-quotes.svg";
import endingQuotes from "/ending-quotes.svg";
export default function AboutUs() {
  return (
    <div>
      <section className="p-6 min-[800px]:px-16  bg-mid_gray text-sm ">
        <div className="font-bold w-fit p-4 m-auto">
          <p>गावो भगो गाव इन्द्रो मे अच्छान्गावः सोमस्य प्रथमस्य भक्षः ।</p>
          <p>इमा या गावः स जनास इन्द्र इच्छामीद्धृदा मनसा चिदिन्द्रम् ॥५॥</p>
          <p className="text-xs min-[800px]:ml-60 mt-4">
            ऋग्वेदः - मण्डल ६ , सूक्तं ६.२८ , बार्हस्पत्यो भरद्वाज
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 items-center my-10">
          <div className="tracking-widest text-gray-600 ">
            <p>
              Livestock rearing is common and an integral component of state
              agriculture supporting livelihood of more than two-thirds of the
              rural population. Animals provide nutrient-rich food products,
              draught power, dung as organic manure and domestic fuel, hides &
              skin, and are a regular source of cash income for rural
              households. They are a natural capital, which can be easily
              reproduced to act as a living bank with offspring as interest, and
              an insurance against income shocks of crop failure and natural
              calamities.
            </p>
            <br />
            <p>
              Uttar Pradesh is endowed with large livestock populations in all
              districts across the state. Livestock population Cattle-190.20
              lakh, Buffaloes-330.17 lakh Sheep- 9.85 lakh Goats-144.80 lakh,
              Pigs 4.09 lakh, Poultry 125.25 lakh as per 2019 Census. Livestock
              is germane to farming systems in Uttar Pradesh, the most
              preponderant farming system is mixed crop-livestock-farming. Over
              85 per cent of all economic species of livestock and desi poultry
              are owned by the small holder group (marginal and small farmers
              along with the landless). The marginal farmers constitute the core
              livestock production sector in the state. The livestock sector is
              extremely livelihood intensive with over 70 per cent of all rural
              households owning livestock of some species or other, often a mix
              of several and livestock provides more than half of the total
              household income for marginal farmers and the landless who own
              livestock.
            </p>
          </div>

          <div className=" corner-border ">
            <div className="top-left"></div>
            <div className="bottom-right"></div>
            <div className="max-h-[350px] p-1 mb-1  text-center font-light text-lg  rounded-tr-[85px] rounded-bl-[85px] overflow-hidden">
              <img
                src={aboutImage1}
                alt={"about-image-1"}
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 min-[800px]:px-16">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-14" />
          <h2 className=" text-5xl font-light z-10 bg-white">
            Pre
            <span className="gradient-border after:bottom-1 ">cious Words</span>
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-14" />
        </div>
        <div className="grid grid-cols-2 items-center  gap-4 min-[800px]:gap-10 my-6">
          <div className=" corner-border max-w-[650px] max-h-[350px]">
            <div className="top-left -top-[15px] -left-[15px]"></div>
            <div className="bottom-right z-10 bg-secondary text-white pl-8 pt-4  flex flex-col justify-center  h-[30%] w-[40%] ">
              <p className=""><span className="border-b-2 pb-1 border-white ">Perso</span>n Name</p>
              <p className=" mt-2 text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
            </div>
              <img
                src={aboutImage2}
                alt={"about-image-2"}
                className=" w-full h-full object-cover max-w-[650px] max-h-[350px]  rounded-tr-[75px] rounded-bl-[75px]"
              />
            
          </div>
          <div className="font-light text-sm">
            <p className="my-2">

                <img
                  src={startingQuotes}
                  alt="starting-quotes"
                  className=" h-5 inline-block -mt-5 mr-1"
                  />
                 
             
             
               <span > Sed  ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.</span>
            
            </p>
            <p className="my-4 font-medium">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
            <p className="my-4">
           
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus
            
             
                <img
                  src={endingQuotes}
                  alt="ending-quotes"
                  className=" inline-block h-5 ml-3 mt-2"
                />
             
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
