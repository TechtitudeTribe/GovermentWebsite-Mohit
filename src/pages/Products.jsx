import garbageCollectionImage from "/product/door-to-door-garbage-collection.jpeg";
import gobargasPlantImage from '/product/gobar-gas-plant.jpeg'
import Product from "../components/Product";
import { Fragment } from "react";
export default function Products() {
  // const { language } = useContext(LanguageContext);
  const products = [
    {
      image:garbageCollectionImage,
      title: {
        english: "Door-to-Door Garbage Collection",
        hindi: "दरवाजे से दरवाजे तक कचरा संग्रहण",
      },
      texts: [
        {
          english:
            "In many villages, maintaining cleanliness is a challenging task due to limited infrastructure and resources. However, the Gram Panchayat of our village has introduced an innovative solution to address this issue – the Door-to-Door Garbage Collection facility.",
          hindi:
            "कई गांवों में स्वच्छता बनाए रखना एक चुनौतीपूर्ण कार्य है, क्योंकि सीमित संसाधन और बुनियादी ढांचा होता है। हालांकि, हमारे गांव की ग्राम पंचायत ने इस समस्या का समाधान पेश किया है - दरवाजे से दरवाजे तक कचरा संग्रहण सुविधा।",
        },
        {
          english:
            "This initiative aims to ensure that waste is collected directly from each household, reducing the need for people to carry their garbage to designated disposal points. The Panchayat has set up a dedicated team with vehicles that travel through every street and collect the waste from each house. This has not only helped in keeping the village clean but has also raised awareness about the importance of waste segregation and proper disposal methods.",
          hindi:
            "यह पहल यह सुनिश्चित करने के लिए है कि हर घर से कचरा सीधे एकत्र किया जाए, जिससे लोगों को कचरा निर्धारित निस्तारण बिंदुओं पर ले जाने की आवश्यकता नहीं रहती। पंचायत ने एक समर्पित टीम और वाहन तैयार किए हैं, जो हर सड़क पर जाते हैं और प्रत्येक घर से कचरा एकत्र करते हैं। इससे न केवल गांव को स्वच्छ रखने में मदद मिली है, बल्कि कचरे की श्रेणीकरण और सही निस्तारण विधियों के महत्व के बारे में जागरूकता भी बढ़ी है।",
        },
        {
          english:
            "The Gram Panchayat has also encouraged residents to segregate their waste into biodegradable and non-biodegradable categories, ensuring that the recycling process is more efficient. This service has been highly appreciated by the villagers, as it reduces the burden of waste disposal and promotes a healthier environment for everyone.",
          hindi:
            "ग्राम पंचायत ने निवासियों को अपने कचरे को जैविक और अजैविक श्रेणियों में विभाजित करने के लिए भी प्रेरित किया है, जिससे पुनर्चक्रण प्रक्रिया अधिक प्रभावी हो रही है। इस सेवा को ग्रामीणों द्वारा बहुत सराहा गया है, क्योंकि इससे कचरा निस्तारण का बोझ कम होता है और सभी के लिए एक स्वस्थ वातावरण को बढ़ावा मिलता है।",
        },
        {
          english:
            "In the long run, this initiative will help in improving the overall sanitation standards and contribute to a cleaner, greener, and more sustainable village.",
          hindi:
            "दीर्घकालिक रूप से, यह पहल समग्र स्वच्छता मानकों को सुधारने में मदद करेगी और एक स्वच्छ, हरित और अधिक सतत गांव के निर्माण में योगदान देगी।",
        },
        {
          english:
            "Additionally, the Gram Panchayat has been actively working to educate the villagers about the importance of maintaining cleanliness and the role they play in it. Regular awareness campaigns, workshops, and community meetings are conducted to encourage the residents to participate actively in keeping their surroundings clean. By involving the community in the process, the initiative fosters a sense of responsibility and ownership, making the village a cleaner and healthier place to live. With continued efforts and cooperation, this door-to-door garbage collection service is expected to lead to long-term improvements in the village’s sanitation and environmental conditions.",
          hindi:
            "इसके अतिरिक्त, ग्राम पंचायत सक्रिय रूप से ग्रामीणों को स्वच्छता बनाए रखने के महत्व और इसमें उनकी भूमिका के बारे में शिक्षित करने के लिए काम कर रही है। नियमित जागरूकता अभियान, कार्यशालाएं और सामुदायिक बैठकें आयोजित की जाती हैं ताकि निवासियों को अपने आसपास की सफाई में सक्रिय रूप से भाग लेने के लिए प्रेरित किया जा सके। समुदाय को इस प्रक्रिया में शामिल करके, यह पहल जिम्मेदारी और स्वामित्व की भावना पैदा करती है, जिससे गांव को एक स्वच्छ और स्वस्थ स्थान बनाया जा रहा है। निरंतर प्रयासों और सहयोग से, यह दरवाजे से दरवाजे तक कचरा संग्रहण सेवा गांव की स्वच्छता और पर्यावरणीय स्थितियों में दीर्घकालिक सुधार लाने की उम्मीद है।",
        },
      ],
    },
    {
      image:gobargasPlantImage,
      title: {
        english: "Gobar (Cow Dung) Gas Plant",
        hindi: "गोबर (गाय के गोबर) गैस संयंत्र:",
      },
      texts: [
        {
          english:"In an effort to promote renewable energy and reduce the dependence on conventional fuel sources, the Gram Panchayat of our village has introduced the Gobar (Cow Dung) Gas Plant. This eco-friendly initiative aims to utilize cow dung, an abundant natural resource in rural areas, to generate biogas for cooking and other household needs.",
          hindi:"नवीकरणीय ऊर्जा को बढ़ावा देने और पारंपरिक ईंधन स्रोतों पर निर्भरता कम करने के प्रयास में, हमारे गांव की ग्राम पंचायत ने गोबर (गाय के गोबर) गैस संयंत्र की स्थापना की है। यह पर्यावरण के अनुकूल पहल गांवों में प्रचुर मात्रा में उपलब्ध प्राकृतिक संसाधन, गाय के गोबर, का उपयोग करके बायोगैस उत्पन्न करने का उद्देश्य रखती है, जिसे रसोई और अन्य घरेलू जरूरतों के लिए इस्तेमाल किया जा सकता है।"
        },
        {
          english:"The plant works by converting cow dung into biogas through a process called anaerobic digestion. This biogas is collected and stored in tanks, which can then be used as an alternative to LPG (Liquefied Petroleum Gas) for cooking purposes. Not only does this reduce the village’s dependence on commercial fuels, but it also provides a sustainable solution to managing cow dung, which is often a challenge in rural households.",
          hindi:"यह संयंत्र गाय के गोबर को एक प्रक्रिया के माध्यम से बायोगैस में बदलता है, जिसे एरोबिक डाइजेशन कहा जाता है। इस बायोगैस को एकत्रित कर टैंकों में संग्रहित किया जाता है, जिसे फिर रसोई के लिए एलपीजी (लिक्विफाइड पेट्रोलियम गैस) का विकल्प के रूप में उपयोग किया जा सकता है। इससे न केवल गांव की पारंपरिक ईंधन पर निर्भरता कम होती है, बल्कि यह गाय के गोबर को प्रबंधित करने का एक सतत समाधान भी प्रदान करता है, जो अक्सर ग्रामीण घरों में एक चुनौती होता है।",
        },
        {
          english:"By installing Gobar gas plants, the Gram Panchayat is helping families cut down on their fuel costs while also contributing to a cleaner environment. The plant reduces harmful emissions that contribute to air pollution and promotes the use of renewable energy in everyday life. This initiative has the potential to improve both the economic and environmental health of the village, paving the way for a more sustainable future.",
          hindi:"गोबर गैस संयंत्रों की स्थापना करके, ग्राम पंचायत परिवारों को उनके ईंधन खर्चों को कम करने में मदद कर रही है, साथ ही साथ एक स्वच्छ वातावरण में योगदान भी दे रही है। यह संयंत्र वायु प्रदूषण में योगदान करने वाले हानिकारक उत्सर्जन को कम करता है और दैनिक जीवन में नवीकरणीय ऊर्जा के उपयोग को बढ़ावा देता है। यह पहल गांव के आर्थिक और पर्यावरणीय स्वास्थ्य दोनों में सुधार करने की क्षमता रखती है, और एक सतत भविष्य की दिशा में मार्ग प्रशस्त कर रही है।",
        },
        {
          emglish:"In addition to providing clean energy, the Gobar Gas Plant also contributes to improving soil fertility. The byproduct of the biogas production process is organic slurry, which can be used as a natural fertilizer for agricultural fields. This helps farmers reduce their dependency on chemical fertilizers, promoting healthier soil and sustainable farming practices. With the integration of this technology, the village can become more self-sufficient in both energy and agriculture, benefiting the community as a whole.",
          hindi:"स्वच्छ ऊर्जा प्रदान करने के अतिरिक्त, गोबर गैस संयंत्र मिट्टी की उर्वरता में सुधार करने में भी योगदान करता है। बायोगैस उत्पादन प्रक्रिया का उपोत्पाद जैविक स्लरी होता है, जिसे कृषि क्षेत्रों में प्राकृतिक उर्वरक के रूप में उपयोग किया जा सकता है। इससे किसानों को रासायनिक उर्वरकों पर निर्भरता कम करने में मदद मिलती है, जो स्वस्थ मिट्टी और सतत कृषि प्रथाओं को बढ़ावा देता है। इस प्रौद्योगिकी के एकीकरण से, गांव ऊर्जा और कृषि दोनों में अधिक आत्मनिर्भर बन सकता है, जिससे समग्र रूप से समुदाय को लाभ होता है।"
        },
        {
          english:"Furthermore, the Gobar Gas Plant also plays a significant role in reducing waste in the village. Cow dung, which would otherwise be discarded or left to decompose, is effectively utilized to generate clean energy. This not only prevents the unpleasant odors associated with rotting cow dung but also reduces the burden on the environment. By making use of this organic waste, the plant helps in maintaining a cleaner and healthier surrounding, benefitting both the residents and the ecosystem. This sustainable approach to waste management is a step forward in creating a circular economy in rural areas, where waste is minimized, and resources are efficiently used.",
          hindi:"इसके अतिरिक्त, गोबर गैस संयंत्र गांव में अपशिष्ट को कम करने में भी महत्वपूर्ण भूमिका निभाता है। गाय का गोबर, जिसे अन्यथा फेंक दिया जाता या सड़ने के लिए छोड़ दिया जाता, को प्रभावी रूप से स्वच्छ ऊर्जा उत्पन्न करने के लिए उपयोग में लाया जाता है। इससे सड़ते हुए गोबर से जुड़ी अप्रिय गंधों को भी रोका जाता है और पर्यावरण पर पड़ने वाला बोझ कम होता है। इस जैविक अपशिष्ट का उपयोग करके, संयंत्र एक स्वच्छ और स्वस्थ परिवेश बनाए रखने में मदद करता है, जो निवासियों और पारिस्थितिकी तंत्र दोनों के लिए फायदेमंद है। अपशिष्ट प्रबंधन के प्रति यह सतत दृष्टिकोण ग्रामीण क्षेत्रों में एक गोलाकार अर्थव्यवस्था बनाने की दिशा में एक कदम है, जहां अपशिष्ट को कम किया जाता है और संसाधनों का प्रभावी रूप से उपयोग किया जाता है।",
        },
    
      ],
    }
  ];

  return (
    <div className="bg-mid_gray p-6 min-[800px]:p-20 font-light flex flex-col gap-8">
      {products.map((product, index) => (
        <Fragment key={index}>
        <Product product={product} />
        <hr className="border-primary"/>
        </Fragment>
      ))}
    </div>
  );
}
