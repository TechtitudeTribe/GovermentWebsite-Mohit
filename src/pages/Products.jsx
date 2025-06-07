import garbageCollectionImage from "../assets/Images/products/door-to-door-garbage-collection.jpeg";
import gobargasPlantImage from "../assets/Images/products/gobar-gas-plant.jpeg";
import Product from "../components/Product";
import { Fragment } from "react";
import plasticWasteManagementImage from "../assets/Images/products/plastic-waste-management.jpg";
import resourceRecoveryCenterImage from "../assets/Images/products/resource-recovery-center.jpg";
export default function Products() {
  // const { language } = useContext(LanguageContext);
  const products = [
    {
      image: garbageCollectionImage,
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
      image: gobargasPlantImage,
      title: {
        english: "Gobar (Cow Dung) Gas Plant",
        hindi: "गोबर (गाय के गोबर) गैस संयंत्र:",
      },
      texts: [
        {
          english:
            "In an effort to promote renewable energy and reduce the dependence on conventional fuel sources, the Gram Panchayat of our village has introduced the Gobar (Cow Dung) Gas Plant. This eco-friendly initiative aims to utilize cow dung, an abundant natural resource in rural areas, to generate biogas for cooking and other household needs.",
          hindi:
            "नवीकरणीय ऊर्जा को बढ़ावा देने और पारंपरिक ईंधन स्रोतों पर निर्भरता कम करने के प्रयास में, हमारे गांव की ग्राम पंचायत ने गोबर (गाय के गोबर) गैस संयंत्र की स्थापना की है। यह पर्यावरण के अनुकूल पहल गांवों में प्रचुर मात्रा में उपलब्ध प्राकृतिक संसाधन, गाय के गोबर, का उपयोग करके बायोगैस उत्पन्न करने का उद्देश्य रखती है, जिसे रसोई और अन्य घरेलू जरूरतों के लिए इस्तेमाल किया जा सकता है।",
        },
        {
          english:
            "The plant works by converting cow dung into biogas through a process called anaerobic digestion. This biogas is collected and stored in tanks, which can then be used as an alternative to LPG (Liquefied Petroleum Gas) for cooking purposes. Not only does this reduce the village’s dependence on commercial fuels, but it also provides a sustainable solution to managing cow dung, which is often a challenge in rural households.",
          hindi:
            "यह संयंत्र गाय के गोबर को एक प्रक्रिया के माध्यम से बायोगैस में बदलता है, जिसे एरोबिक डाइजेशन कहा जाता है। इस बायोगैस को एकत्रित कर टैंकों में संग्रहित किया जाता है, जिसे फिर रसोई के लिए एलपीजी (लिक्विफाइड पेट्रोलियम गैस) का विकल्प के रूप में उपयोग किया जा सकता है। इससे न केवल गांव की पारंपरिक ईंधन पर निर्भरता कम होती है, बल्कि यह गाय के गोबर को प्रबंधित करने का एक सतत समाधान भी प्रदान करता है, जो अक्सर ग्रामीण घरों में एक चुनौती होता है।",
        },
        {
          english:
            "By installing Gobar gas plants, the Gram Panchayat is helping families cut down on their fuel costs while also contributing to a cleaner environment. The plant reduces harmful emissions that contribute to air pollution and promotes the use of renewable energy in everyday life. This initiative has the potential to improve both the economic and environmental health of the village, paving the way for a more sustainable future.",
          hindi:
            "गोबर गैस संयंत्रों की स्थापना करके, ग्राम पंचायत परिवारों को उनके ईंधन खर्चों को कम करने में मदद कर रही है, साथ ही साथ एक स्वच्छ वातावरण में योगदान भी दे रही है। यह संयंत्र वायु प्रदूषण में योगदान करने वाले हानिकारक उत्सर्जन को कम करता है और दैनिक जीवन में नवीकरणीय ऊर्जा के उपयोग को बढ़ावा देता है। यह पहल गांव के आर्थिक और पर्यावरणीय स्वास्थ्य दोनों में सुधार करने की क्षमता रखती है, और एक सतत भविष्य की दिशा में मार्ग प्रशस्त कर रही है।",
        },
        {
          english:
            "In addition to providing clean energy, the Gobar Gas Plant also contributes to improving soil fertility. The byproduct of the biogas production process is organic slurry, which can be used as a natural fertilizer for agricultural fields. This helps farmers reduce their dependency on chemical fertilizers, promoting healthier soil and sustainable farming practices. With the integration of this technology, the village can become more self-sufficient in both energy and agriculture, benefiting the community as a whole.",
          hindi:
            "स्वच्छ ऊर्जा प्रदान करने के अतिरिक्त, गोबर गैस संयंत्र मिट्टी की उर्वरता में सुधार करने में भी योगदान करता है। बायोगैस उत्पादन प्रक्रिया का उपोत्पाद जैविक स्लरी होता है, जिसे कृषि क्षेत्रों में प्राकृतिक उर्वरक के रूप में उपयोग किया जा सकता है। इससे किसानों को रासायनिक उर्वरकों पर निर्भरता कम करने में मदद मिलती है, जो स्वस्थ मिट्टी और सतत कृषि प्रथाओं को बढ़ावा देता है। इस प्रौद्योगिकी के एकीकरण से, गांव ऊर्जा और कृषि दोनों में अधिक आत्मनिर्भर बन सकता है, जिससे समग्र रूप से समुदाय को लाभ होता है।",
        },
        {
          english:
            "Furthermore, the Gobar Gas Plant also plays a significant role in reducing waste in the village. Cow dung, which would otherwise be discarded or left to decompose, is effectively utilized to generate clean energy. This not only prevents the unpleasant odors associated with rotting cow dung but also reduces the burden on the environment. By making use of this organic waste, the plant helps in maintaining a cleaner and healthier surrounding, benefitting both the residents and the ecosystem. This sustainable approach to waste management is a step forward in creating a circular economy in rural areas, where waste is minimized, and resources are efficiently used.",
          hindi:
            "इसके अतिरिक्त, गोबर गैस संयंत्र गांव में अपशिष्ट को कम करने में भी महत्वपूर्ण भूमिका निभाता है। गाय का गोबर, जिसे अन्यथा फेंक दिया जाता या सड़ने के लिए छोड़ दिया जाता, को प्रभावी रूप से स्वच्छ ऊर्जा उत्पन्न करने के लिए उपयोग में लाया जाता है। इससे सड़ते हुए गोबर से जुड़ी अप्रिय गंधों को भी रोका जाता है और पर्यावरण पर पड़ने वाला बोझ कम होता है। इस जैविक अपशिष्ट का उपयोग करके, संयंत्र एक स्वच्छ और स्वस्थ परिवेश बनाए रखने में मदद करता है, जो निवासियों और पारिस्थितिकी तंत्र दोनों के लिए फायदेमंद है। अपशिष्ट प्रबंधन के प्रति यह सतत दृष्टिकोण ग्रामीण क्षेत्रों में एक गोलाकार अर्थव्यवस्था बनाने की दिशा में एक कदम है, जहां अपशिष्ट को कम किया जाता है और संसाधनों का प्रभावी रूप से उपयोग किया जाता है।",
        },
      ],
    },
    {
      image: plasticWasteManagementImage,
      title: {
        english: "Plastic Waste Management Unit - PWMU",
        hindi: "प्लास्टिक अपशिष्ट प्रबंधन इकाई",
      },
      texts: [
        {
          english:
            "A Plastic Waste Management Unit (PWMU) is a facility dedicated to handling plastic waste effectively. It plays a central role in a broader waste management framework by ensuring plastic waste is properly segregated, collected, and processed. These units are often set up at the village or block level in India, with Gram Panchayats (GPs) leading their implementation, particularly in rural areas. This decentralized approach allows communities to manage waste locally and more efficiently",
          hindi:
            "एक प्लास्टिक अपशिष्ट प्रबंधन इकाई (PWMU) एक ऐसी सुविधा है जो प्लास्टिक कचरे को प्रभावी ढंग से संभालने का कार्य करती है। यह व्यापक अपशिष्ट प्रबंधन प्रणाली का एक महत्वपूर्ण हिस्सा है, जो प्लास्टिक कचरे का उचित पृथक्करण, संग्रहण और प्रसंस्करण सुनिश्चित करती है। भारत में ये इकाइयाँ अक्सर गाँव या ब्लॉक स्तर पर स्थापित की जाती हैं, जहाँ ग्रामीण क्षेत्रों में ग्राम पंचायतें (GPs) इनके कार्यान्वयन का नेतृत्व करती हैं। यह विकेन्द्रीकृत तरीका समुदायों को स्थानीय स्तर पर कचरे का प्रबंधन करने में सक्षम बनाता है।",
        },
        {
          english:
            "PWMUs undertake several important tasks. They begin by segregating plastic waste into various categories to prepare it for further use. This is followed by organizing the collection and transportation of waste, ensuring it reaches the PWMU from village-level collection points. Once received, the plastic is shredded, cleaned, and dried as part of the processing stage. Recyclable materials are then directed to authorized recyclers, while non-recyclable waste is handled through incineration or landfilling.",
          hindi:
            "PWMU कई महत्वपूर्ण कार्य करती हैं। ये सबसे पहले प्लास्टिक कचरे को विभिन्न श्रेणियों में विभाजित करती हैं ताकि आगे पुनर्चक्रण की प्रक्रिया आसान हो सके। इसके बाद ये गाँव स्तर के संग्रहण केंद्रों से कचरे को इकाई तक लाने के लिए संग्रहण और परिवहन का समन्वय करती हैं। इकाई में प्लास्टिक को काटने, धोने और सुखाने की प्रक्रिया की जाती है। पुनर्चक्रण योग्य कचरे को अधिकृत पुनर्चक्रणकर्ताओं को भेजा जाता है, जबकि अपुनर्चक्रणीय कचरे का निपटान जलाने या लैंडफिल के माध्यम से किया जाता है।",
        },
        {
          english:
            "In addition to these technical functions, PWMUs also contribute significantly to raising public awareness about plastic waste management. They promote better practices such as household-level segregation and reduction of plastic use. This educational component helps build community participation and responsibility toward sustainable waste handling.",
          hindi:
            "इन तकनीकी कार्यों के अलावा, PWMU प्लास्टिक कचरा प्रबंधन के प्रति जन जागरूकता बढ़ाने में भी योगदान देती हैं। ये घर-घर पृथक्करण और प्लास्टिक उपयोग को कम करने जैसे अच्छे व्यवहारों को बढ़ावा देती हैं। यह शैक्षिक पहल समुदाय की भागीदारी और जिम्मेदारी को प्रोत्साहित करती है जिससे सतत अपशिष्ट प्रबंधन संभव हो सके।",
        },
        {
          english:
            "Gram Panchayats play a vital role in ensuring the smooth operation of PWMUs. They prepare a Village Action Plan (VAP) for plastic waste, which is incorporated into the broader Gram Panchayat Development Plan (GPDP). Their responsibilities include creating public awareness, organizing door-to-door collection, ensuring proper segregation, and coordinating with higher-level officials for efficient transportation of waste.",
          hindi:
            "ग्राम पंचायतें PWMU के संचालन में महत्वपूर्ण भूमिका निभाती हैं। वे प्लास्टिक कचरा प्रबंधन के लिए एक ग्राम कार्य योजना (VAP) तैयार करती हैं, जिसे ग्राम पंचायत विकास योजना (GPDP) में शामिल किया जाता है। इनका कार्य जन जागरूकता फैलाना, घर-घर कचरा संग्रहण, पृथक्करण सुनिश्चित करना और उच्च अधिकारियों के साथ समन्वय करना होता है।",
        },
        {
          english:
            "Funding for PWMUs comes from various sources. Support is provided under the Swachh Bharat Mission (SBM), with additional funding from the 15th Finance Commission and Corporate Social Responsibility (CSR) initiatives. Urban areas receive help under the Swachh Bharat Mission Urban 2.0 (SBM-U 2.0). These units help reduce landfill waste, transform plastic into usable resources, and promote a cleaner, more sustainable environment.",
          hindi:
            "PWMU की स्थापना और संचालन के लिए विभिन्न स्रोतों से वित्तीय सहायता प्राप्त होती है। मुख्य रूप से स्वच्छ भारत मिशन (SBM) के तहत सहायता दी जाती है, साथ ही 15वें वित्त आयोग की निधि और कॉर्पोरेट सोशल रिस्पॉन्सिबिलिटी (CSR) के अंतर्गत भी धन मिल सकता है। शहरी क्षेत्रों में स्वच्छ भारत मिशन अर्बन 2.0 (SBM-U 2.0) के तहत अतिरिक्त सहायता प्रदान की जाती है। ये इकाइयाँ लैंडफिल में जाने वाले प्लास्टिक कचरे को कम करती हैं, कचरे को उपयोगी संसाधनों में बदलती हैं और स्वच्छ, टिकाऊ पर्यावरण को बढ़ावा देती हैं।",
        },
      ],
    },
    {
      image: resourceRecoveryCenterImage,
      title: {
        english: "Resource Recovery Center (RRC) ",
        hindi: "संसाधन पुनर्प्राप्ति केंद्र",
      },
      texts: [
        {
          english: "A Resource Recovery Center (RRC) is a facility within a Gram Panchayat that focuses on sustainable waste management. It emphasizes the segregation, recycling, and processing of various types of waste to promote eco-friendly practices. In the context of rural governance, RRCs mainly manage solid waste, including dry, wet, and organic materials. These centers play a vital role in strengthening local efforts toward sanitation and environmental protection.",
          hindi: "एक संसाधन पुनर्प्राप्ति केंद्र (RRC) ग्राम पंचायत के अंतर्गत एक ऐसी सुविधा है जो सतत कचरा प्रबंधन पर केंद्रित होती है। इसका उद्देश्य विभिन्न प्रकार के कचरे का पृथक्करण, पुनर्चक्रण और प्रसंस्करण करके पर्यावरण अनुकूल प्रक्रियाओं को बढ़ावा देना है। ग्राम पंचायतों के संदर्भ में, RRC मुख्य रूप से ठोस कचरे के प्रबंधन पर काम करते हैं, जिसमें सूखा, गीला और जैविक कचरा शामिल होता है। ये केंद्र स्वच्छता और पर्यावरण संरक्षण की दिशा में स्थानीय स्तर पर एक महत्वपूर्ण भूमिका निभाते हैं।",
        },
        {
          english: "RRCs operate with the goal of handling waste in a sustainable manner by encouraging recycling and resource recovery. They promote the proper segregation of waste into categories like dry, wet, and organic, which is the first essential step toward efficient waste processing. The objective is to reduce the amount of waste sent to landfills and maximize reuse and recycling, turning waste into resources whenever possible.",
          hindi: "RRC कचरे के प्रबंधन को इस तरह से संचालित करते हैं जिससे पुनर्चक्रण और संसाधन पुनःप्राप्ति को बढ़ावा मिले। ये सूखा, गीला और जैविक कचरे को सही ढंग से अलग करने के लिए लोगों को प्रेरित करते हैं। कचरे का पृथक्करण कचरे को दोबारा उपयोग करने या रिसायकल करने की दिशा में पहला जरूरी कदम होता है। इन केंद्रों का उद्देश्य है कि जितना संभव हो उतना कचरा लैंडफिल में जाने से रोका जाए और अधिकतम मात्रा में कचरे को संसाधन में बदला जाए।",
        },
        {
          english: "These centers are often established by Gram Panchayats to manage waste generated within villages or rural communities. In addition to handling collection and sorting, RRCs also involve community members in these processes. Through public participation, villages not only maintain cleanliness but also become active contributors to the recycling effort. This builds a culture of responsibility and environmental awareness at the grassroots level.",
          hindi: "ग्राम पंचायतों द्वारा स्थापित ये केंद्र स्थानीय समुदाय में उत्पन्न कचरे का समुचित प्रबंधन करते हैं। RRC न केवल कचरा संग्रहण और पृथक्करण में लगे होते हैं, बल्कि ये स्थानीय नागरिकों की भागीदारी को भी प्रोत्साहित करते हैं। गाँव के लोग इन प्रयासों में सहयोग करके न केवल अपने आसपास के पर्यावरण को स्वच्छ रखते हैं, बल्कि पुनर्चक्रण की प्रक्रिया में भी सहायक बनते हैं। इससे समुदाय में जिम्मेदारी और स्वच्छता के प्रति जागरूकता बढ़ती है।",
        },
        {
          english: "RRCs also support the recovery of valuable materials from waste. For example, organic waste can be converted into compost, while recyclable plastics and other materials can be processed for reuse. These recovered resources can contribute to local economic activities and enhance the value of waste management initiatives in rural areas.",
          hindi: "RRC विभिन्न प्रकार के अपशिष्ट से मूल्यवान संसाधनों की पुनर्प्राप्ति में मदद करते हैं। जैसे कि जैविक कचरे से खाद बनाई जा सकती है और प्लास्टिक जैसे पदार्थों को रिसायकल किया जा सकता है। यह प्रक्रिया न केवल कचरे को कम करती है, बल्कि इसे उपयोगी संसाधनों में भी बदल देती है। इस तरह के संसाधन गाँव की अर्थव्यवस्था और स्वच्छता प्रयासों में योगदान कर सकते हैं।",
        },
        {
          english: "As a result of these efforts, RRCs play a crucial role in protecting the environment. They promote cleanliness, better health, and sustainable living practices. By managing waste efficiently, RRCs help reduce pollution in land, water, and air, and support long-term ecological balance. Thus, they become essential components of rural development and environmental sustainability.",
          hindi: "इन प्रयासों के परिणामस्वरूप RRC पर्यावरण की रक्षा में एक अहम भूमिका निभाते हैं। ये केंद्र स्वच्छता, स्वास्थ्य और टिकाऊ जीवनशैली को बढ़ावा देते हैं। कचरे के बेहतर प्रबंधन से न केवल गाँव स्वच्छ बनते हैं, बल्कि जल, वायु और भूमि प्रदूषण में भी कमी आती है। इस प्रकार, RRC ग्राम पंचायतों में सतत विकास और पर्यावरणीय संतुलन को बनाए रखने में सहायक होते हैं।",
        },
      ],
    },
  ];

  return (
    <div className="bg-mid_gray p-6 min-[800px]:p-20 font-light flex flex-col gap-8">
      {products.map((product, index) => (
        <Fragment key={index}>
          <Product product={product} />
          <hr className="border-primary" />
        </Fragment>
      ))}
    </div>
  );
}
