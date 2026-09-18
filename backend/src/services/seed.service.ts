import fs from "fs";
import path from "path";
import { Product } from "../models/Product";
import { TherapyService } from "../models/Service";
import { Testimonial } from "../models/Testimonial";
import { Booking } from "../models/Booking";
import { Inquiry } from "../models/Inquiry";
import { AboutContent } from "../models/About";
import { ScreenshotReview } from "../models/ScreenshotReview";

// Fallback Seeds in case db_store.json is missing or corrupted
const SEED_PRODUCTS = [
  {
    _id: "p1",
    name: "Organic Indian Green Cardamom (Elaichi)",
    category: "Spices & Condiments",
    images: ["/images/products/spices-catalog-fallback.webp?auto=format&fit=crop&q=80&w=800"],
    description: "Handpicked premium green pods from the mist-covered valleys of Wayanad, Kerala. Uncompromised deep aroma and essential oils.",
    pricing: "$18.50 - $22.00 / kg (FOB)",
    specifications: {
      origin: "Kerala, India",
      packaging: "25kg Vacuum Sealed Craft Bags",
      purity: "99.8%",
      grade: "AGEB Premium Extra Bold (8mm+)",
      minOrder: "500 kg"
    }
  },
  {
    _id: "p2",
    name: "Pure Himalayan Purified Shilajit Resin",
    category: "Natural Therapeutics",
    images: ["/images/products/asset-85-68747470.webp"],
    description: "Gold-graded purified mineral resin sourced above 16,000 feet in the Himalayan ranges. Reclaiming cellular vigor and wellness support.",
    pricing: "$380.00 / kg (FOB)",
    specifications: {
      origin: "Himalayas, India",
      packaging: "Sterilized Amber Glass Jars",
      purity: "100% Pure Organic Extracts",
      grade: "Suryatapi Sun-Dried Gold Grade",
      minOrder: "5 kg"
    }
  },
  {
    _id: "p3",
    name: "Premium Therapeutic Vetiver Essential Oil",
    category: "Essential Oils",
    images: ["/images/products/asset-86-68747470.webp"],
    description: "Deep smoky-woody aromatherapy oil steam-distilled from roots of wild-grown Vetiver (Khus grass). Premium base notes for luxury perfumery.",
    pricing: "$140.00 / Liter (FOB)",
    specifications: {
      origin: "Tamil Nadu, India",
      packaging: "Aluminum Protective Flasks (1L, 5L)",
      purity: "100% Pure Steam Distilled",
      grade: "Aromatherapy & Fine Fragrance Grade",
      minOrder: "10 Liters"
    }
  },
  {
    _id: "p4",
    name: "Organic Ashwagandha Extract Powder",
    category: "Herbal Extracts",
    images: ["/images/products/asset-87-68747470.webp"],
    description: "Sustainably grown Withania somnifera offering premium adaptogenic properties and standardized active withanolide concentration.",
    pricing: "$9.50 - $12.00 / kg (FOB)",
    specifications: {
      origin: "Madhya Pradesh, India",
      packaging: "Airtight Recyclable Fiber Drums",
      purity: "99.1% High Sieve Pass",
      grade: "Standardized USP Quality Extra Fine",
      minOrder: "200 kg"
    }
  }
];

const SEED_SERVICES = [
  {
    _id: "bach-flower",
    name: "Bach Flower Therapy",
    category: "Emotional & Homeopathic Restoration",
    description: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.",
    benefits: [
      "Helps balance emotions and bring harmony to body and mind.",
      "Supports emotional well-being and inner peace.",
      "Natural complementary support for: Skin allergies and chronic ailments, Blood clots (internal and external), Diabetes, BP and sugar imbalance, Constipation and digestive issues, Cancer care and post-surgery recovery support, ICU/CCU recovery support, Women's health and pregnancy care, Newborn and child emotional well-being, Elderly care and age-related concerns."
    ],
    duration: "1 Hour",
    pricing: "₹2,000 per session",
    image: "/images/therapy/bachFlowerService.webp",
    story: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.\n\nThe therapy is based on the understanding that our emotional well-being plays a vital role in our overall health. Feelings such as stress, anxiety, fear, sadness, anger, guilt, loneliness, lack of confidence, or emotional overwhelm can affect both the mind and body. Bach Flower Remedies help restore emotional balance by addressing these underlying emotional states.\n\nPrepared from the flowers of wild plants and trees, these remedies work gently to support the body's natural ability to heal. They are *non-habit forming, non-toxic, and suitable for people of all ages*, including children, adults, senior citizens, and even pets.\n\nBach Flower Therapy can support individuals experiencing:\n\n* Stress, anxiety, and overthinking\n* Fear, panic, and phobias\n* Depression, grief, and emotional trauma\n* Anger, irritability, and frustration\n* Low confidence and self-esteem\n* Sleep disturbances and mental fatigue\n* Relationship and family challenges\n* Exam stress and concentration difficulties in children\n* Emotional support during pregnancy, postpartum, and menopause\n* Lifestyle-related emotional imbalances that may accompany physical health concerns\n\nBach Flower Therapy is a complementary wellness approach that focuses on emotional harmony and inner peace. It can be used alongside conventional medical care but is *not a substitute for medical diagnosis or treatment*.\n\nBy bringing emotions back into balance, Bach Flower Remedies help individuals feel calmer, more positive, emotionally resilient, and better able to face life's challenges with confidence and clarity.",
    highlight: "Safe • Natural • Gentle • No Side Effects",
    ctaText: "Learn More About Bach Flower Healing",
    ctaLink: "https://bhugaon.in/listing/pure_bachhealing/",
    timeline: [
      {
        title: "Ingression Analysis",
        description: "Mapping cellular stress markers and underlying behavioral dynamics with specialized emotional diagnostics."
      },
      {
        title: "Bespoke Flower Alignment",
        description: "Selecting unique wild flower essences matching the emotional patterns discovered."
      },
      {
        title: "Restorative Dosing Pathway",
        description: "Providing personalized elixir drops with dynamic vibrational frequencies to induce holistic self-healing."
      }
    ],
    translations: {
      en: {
        name: "Bach Flower Therapy",
        category: "Emotional & Homeopathic Restoration",
        description: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.",
        story: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.\n\nThe therapy is based on the understanding that our emotional well-being plays a vital role in our overall health. Feelings such as stress, anxiety, fear, sadness, anger, guilt, loneliness, lack of confidence, or emotional overwhelm can affect both the mind and body. Bach Flower Remedies help restore emotional balance by addressing these underlying emotional states.\n\nPrepared from the flowers of wild plants and trees, these remedies work gently to support the body's natural ability to heal. They are *non-habit forming, non-toxic, and suitable for people of all ages*, including children, adults, senior citizens, and even pets.\n\nBach Flower Therapy can support individuals experiencing:\n\n* Stress, anxiety, and overthinking\n* Fear, panic, and phobias\n* Depression, grief, and emotional trauma\n* Anger, irritability, and frustration\n* Low confidence and self-esteem\n* Sleep disturbances and mental fatigue\n* Relationship and family challenges\n* Exam stress and concentration difficulties in children\n* Emotional support during pregnancy, postpartum, and menopause\n* Lifestyle-related emotional imbalances that may accompany physical health concerns\n\nBach Flower Therapy is a complementary wellness approach that focuses on emotional harmony and inner peace. It can be used alongside conventional medical care but is *not a substitute for medical diagnosis or treatment*.\n\nBy bringing emotions back into balance, Bach Flower Remedies help individuals feel calmer, more positive, emotionally resilient, and better able to face life's challenges with confidence and clarity.",
        highlight: "Safe • Natural • Gentle • No Side Effects",
        ctaText: "Learn More About Bach Flower Healing",
        benefits: [
          "Helps balance emotions and bring harmony to body and mind.",
          "Supports emotional well-being and inner peace.",
          "Natural complementary support for: Skin allergies and chronic ailments, Blood clots (internal and external), Diabetes, BP and sugar imbalance, Constipation and digestive issues, Cancer care and post-surgery recovery support, ICU/CCU recovery support, Women's health and pregnancy care, Newborn and child emotional well-being, Elderly care and age-related concerns."
        ],
        timeline: [
          {
            title: "Ingression Analysis",
            description: "Mapping cellular stress markers and underlying behavioral dynamics with specialized emotional diagnostics."
          },
          {
            title: "Bespoke Flower Alignment",
            description: "Selecting unique wild flower essences matching the emotional patterns discovered."
          },
          {
            title: "Restorative Dosing Pathway",
            description: "Providing personalized elixir drops with dynamic vibrational frequencies to induce holistic self-healing."
          }
        ]
      },
      mr: {
        name: "बाक फ्लॉवर थेरपी",
        category: "भावनिक आणि होमिओपॅथिक पुनरुज्जीवन",
        description: "अंतर्मनातून बरे करण्याचा एक सोपा, नैसर्गिक मार्ग — भावनिक पातळीवर काम करताना एकाच वेळी शारीरिक, मानसिक आणि त्वचेच्या आरोग्यास मदत करतो.",
        story: "अंतर्मनातून बरे करण्याचा एक सोपा, नैसर्गिक मार्ग — भावनिक पातळीवर काम करताना एकाच वेळी शारीरिक, मानसिक आणि त्वचेच्या आरोग्यास मदत करतो.",
        highlight: "सुरक्षित • नैसर्गिक • सौम्य • कोणतेही दुष्परिणाम नाहीत",
        ctaText: "बाक फ्लॉवर उपचाराबद्दल अधिक जाणून घ्या",
        benefits: [
          "भावना संतुलित करण्यास आणि शरीर व मनात सुसंवाद आणण्यास मदत करते.",
          "भावनिक आरोग्य आणि आंतरिक शांततेचे समर्थन करते.",
          "यासाठी नैसर्गिक पूरक सहाय्य: त्वचेची ॲलर्जी आणि जुने आजार, रक्ताच्या गाठी (अंतर्गत आणि बाह्य), मधुमेह, रक्तदाब आणि साखर असंतुलन, बद्धकोष्ठता आणि पचन समस्या, कर्करोग काळजी आणि शस्त्रक्रियेनंतरची विशेष रिकव्हरी, ICU/CCU रिकव्हरी सपोर्ट, महिलांचे आरोग्य आणि गर्भधारणा काळजी, नवजात आणि बालकांचे भावनिक आरोग्य, वृद्ध व्यक्तींची काळजी."
        ],
        timeline: [
          {
            title: "भावनिक आणि मानसिक विश्लेषण",
            description: "विशिष्ट भावनिक निदानाद्वारे पेशींमधील ताणतणाव आणि सुप्त वर्तणुकीची तपासणी करणे."
          },
          {
            title: "सानुकूलित पुष्प संरेखन",
            description: "शोधलेल्या भावनिक चक्रांशी जुळणारे विशिष्ट जंगली फुलांचे अर्क निवडणे."
          },
          {
            title: "पुनरुज्जीवन डोस पद्धती",
            description: "स्वतःहून बरे होण्याच्या प्रक्रियेला गती देण्यासाठी वैयक्तिक पुष्पौषध द्रवण निश्चित करणे."
          }
        ]
      },
      hi: {
        name: "बाक फ्लावर थेरेपी",
        category: "भावनात्मक और भविष्यवाणी पुनरुद्धार",
        description: "आभामंडल के माध्यम से भीतर से स्वस्थ होने का एक सरल, प्राकृतिक मार्ग — भावनात्मक स्तर पर कार्य करते हुए साथ ही साथ शारीरिक, मानसिक और त्वचा स्वास्थ्य को सहारा देता है।",
        story: "आभामंडल के माध्यम से भीतर से स्वस्थ होने का एक सरल, प्राकृतिक मार्ग — भावनात्मक स्तर पर कार्य करते हुए साथ ही साथ शारीरिक, मानसिक और त्वचा स्वास्थ्य को सहारा देता है।",
        highlight: "सुरक्षित • प्राकृतिक • कोमल • कोई दुष्प्रभाव नहीं",
        ctaText: "बाक फ्लावर उपचार के बारे में और जानें",
        benefits: [
          "भावनाओं को संतुलित करने और शरीर व मन में सामंजस्य स्थापित करने में मदद करता है।",
          "भावनेशनल कल्याण और आंतरिक शांति का समर्थन करता है।",
          "इनके लिए प्राकृतिक पूरक सहायता: त्वचा की एलर्जी और पुरानी बीमारियां, रक्त के थक्के (आंतरिक और बाहरी), मधुमेह, बीपी और शर्करा असंतुलन, कब्ज और पाचन संबंधी मुद्दे, कैंसर देखभाल और सर्जरी के बाद रिकवरी सहायता, आईसीयू/सीसीयू रिकवरी सहायता, महिलाओं के स्वास्थ्य और गर्भावस्था की देखभाल, नवजात शिशु और बच्चे की भावनात्मक भलाई, बुजुर्गों की देखभाल और उम्र से संबंधित चिंताएं।"
        ],
        timeline: [
          {
            title: "भावनात्मक विश्लेषण",
            description: "विशेष नैदानिक परामर्श द्वारा कोशिकीय तनाव के स्तर and आंतरिक असंतुलन का गहन निरीक्षण।"
          },
          {
            title: "पुष्प संरेखण अनुकूलन",
            description: "खोजे गए भावनात्मक तरंगों के अनुसार सर्वश्रेष्ठ जंगली फूलों के अर्क का चयन।"
          },
          {
            title: "पुनरुद्धारक डोसिंग प्रणाली",
            description: "गहन आत्म-उपचार को सक्रिय करने के लिए सटीक रूप से तैयार किया गया अनुकूलित पुष्पांश योग प्रदान करना।"
          }
        ]
      }
    }
  },
  {
    _id: "reiki-aurasoma",
    name: "Rekkhanoho Therapy",
    category: "Holistic Energy & Biofield Healing",
    description: "A powerful holistic energy healing therapy that works on physical, emotional, mental, and spiritual well-being. Rekkhanoho helps release energy blockages, reduce stress, improve inner balance, and support the body's natural healing process.",
    benefits: [
      "Deep relaxation and stress reduction",
      "Emotional balance and mental clarity",
      "Energy cleansing and chakra balancing",
      "Better sleep and improved focus",
      "Relief from anxiety and emotional fatigue",
      "Increased positivity and inner peace",
      "Supports overall wellness and self-healing",
      "Enhances spiritual growth and awareness"
    ],
    duration: "1 Hour",
    pricing: "₹2,000 per session",
    image: "/images/therapy/rekkhanohoService.webp",
    story: "Rekkhanoho is a powerful energy healing modality channeling spiritual life-force. By dissolving dense, discordant resonance across cellular fascia, we release deep-rooted somatic patterns, empowering the body's latent biological healing loops.",
    highlight: "Natural • Holistic • Energy Balancing • Non-Invasive",
    ctaText: "Book a Healing Session",
    ctaLink: "/booking",
    timeline: [
      {
        title: "Biofield Resonance Scan",
        description: "Non-contact diagnostic sweep to locate congested meridians, chakra blockages, and auric fatigue."
      },
      {
        title: "Energy Channeling Flow",
        description: "Direct spiritual life-force transmission targeting core centers to disintegrate locked tension and soothe nerves."
      },
      {
        title: "Crystalline Chakra Seal",
        description: "Using therapeutic grade gemstones and selenite crystals to stabilize, lock, and preserve newly attuned frequencies."
      }
    ],
    translations: {
      en: {
        name: "Rekkhanoho Therapy",
        category: "Holistic Energy & Biofield Healing",
        description: "A powerful holistic energy healing therapy that works on physical, emotional, mental, and spiritual well-being. Rekkhanoho helps release energy blockages, reduce stress, improve inner balance, and support the body's natural healing process.",
        story: "Rekkhanoho is a powerful energy healing modality channeling spiritual life-force. By dissolving dense, discordant resonance across cellular fascia, we release deep-rooted somatic patterns, empowering the body's latent biological healing loops.",
        highlight: "Natural • Holistic • Energy Balancing • Non-Invasive",
        ctaText: "Book a Healing Session",
        benefits: [
          "Deep relaxation and stress reduction",
          "Emotional balance and mental clarity",
          "Energy cleansing and chakra balancing",
          "Better sleep and improved focus",
          "Relief from anxiety and emotional fatigue",
          "Increased positivity and inner peace",
          "Supports overall wellness and self-healing",
          "Enhances spiritual growth and awareness"
        ],
        timeline: [
          {
            title: "Biofield Resonance Scan",
            description: "Non-contact diagnostic sweep to locate congested meridians, chakra blockages, and auric fatigue."
          },
          {
            title: "Energy Channeling Flow",
            description: "Direct spiritual life-force transmission targeting core centers to disintegrate locked tension and soothe nerves."
          },
          {
            title: "Crystalline Chakra Seal",
            description: "Using therapeutic grade gemstones and selenite crystals to stabilize, lock, and preserve newly attuned frequencies."
          }
        ]
      },
      mr: {
        name: "रेखानोहो थेरपी",
        category: "समग्र ऊर्जा आणि आभामंडल उपचार",
        description: "शारीरिक, भावनिक, मानसिक आणि आध्यात्मिक कल्याणावर कार्य करणारी एक शक्तिशाली समग्र ऊर्जा उपचार पद्धती. रेखानोहो ऊर्जेचे अडथळे दूर करण्यास, ताण कमी करण्यास, आंतरिक संतुलन सुधारण्यास आणि शरीराच्या नैसर्गिक उपचार क्षमतेला गती देण्यास मदत करते.",
        story: "रेखानोहो ही वैश्विक प्राणशक्तीचे माध्यम असणारी एक शक्तिशाली ऊर्जा उपचार पद्धती आहे. पेशींच्या थरामधील निष्क्रिय आणि अशुद्ध कंपने दूर करून, आम्ही शरीरातील जुने साचलेले आघात दूर करतो, ज्यामुळे शरीराची स्वतःहून बरे होण्याची प्रकृती सक्रिय होते.",
        highlight: "नैसर्गिक • समग्र • ऊर्जा संतुलन • गैर-आक्रमक",
        ctaText: "सत्राची वेळ निश्चित करा",
        benefits: [
          "खोल विश्रांती आणि ताणतणाव कमी करणे",
          "भावनिक संतुलन आणि मानसिक स्पष्टता",
          "आभामंडल शुद्धीकरण आणि चक्र संतुलन",
          "चांगली झोप आणि मनाची एकाग्रता वाढवणे",
          "चिंता आणि भावनिक थकव्यापासून मुक्ती",
          "सकारात्मकता आणि आंतरिक शांतता वाढवणे",
          "समग्र आरोग्य आणि स्वतःहून बरे होण्याच्या प्रक्रियेला गती",
          "आध्यात्मिक प्रगती आणि आत्मजागृतीचे जागरण"
        ],
        timeline: [
          {
            title: "आभामंडल सूक्ष्म स्कॅन",
            description: "बंद पडलेले मार्ग, चक्र अडथळे आणि आभामंडलातील थकवा ओळखण्यासाठी शरीराला स्पर्श न करता केली जाणारी चाचणी."
          },
          {
            title: "ऊर्जा वहन प्रवाह",
            description: "मज्जातंतूंना शांत करण्यासाठी आणि साचलेला ताण व चिंता वितळवण्यासाठी चक्रांमध्ये प्राणशक्ती प्रवाहित करणे."
          },
          {
            title: "चक्र ऊर्जा स्थिरीकरण",
            description: "नूतनीकरण झालेल्या ऊर्जेचे आभामंडलामध्ये रोपण आणि जतन करण्यासाठी विशिष्ट स्फटिकांचा वापर करणे."
          }
        ]
      },
      hi: {
        name: "रेखानोहो थेरेपी",
        category: "समग्र ऊर्जा और आभामंडल चिकित्सा",
        description: "एक अत्यंत शक्तिशाली समग्र ऊर्जा चिकित्सा प्रणाली जो शारीरिक, भावनात्मक, मानसिक और आध्यात्मिक स्वास्थ्य पर अद्भुत कार्य करती है। रेखानोहो ऊर्जा अवरोधों को दूर करने, तनाव को कम करने, आंतरिक संतुलन में सुधार लाने और शरीर की प्राकृतिक स्व-उपचार शक्ति को गति प्रदान करने में मदद करती है।",
        story: "रेखानोहो दैवीय प्राणशक्ती को प्रवाहित करने वाली एक विशिष्ट ऊर्जा हीलिंग विधा है। कोशिकीय तंतुओं में दमित नकारात्मक या निष्क्रिय ऊर्जा-तरंगों को विलीन करके, हम वर्षों पुराने संचित शारीरिक तनावों को मुक्त करते हैं, जिससे शरीर का सहज स्व-उपचार चक्र पूर्णतः जागृत हो उठता है।",
        highlight: "प्राकृतिक • समग्र • ऊर्जा संतुलन • गैर-आक्रामक",
        ctaText: "हीलिंग सत्र बुक करें",
        benefits: [
          "गहन विश्राम और मानसिक तनाव में भारी कमी",
          "भावनेशनल संतुलन और उत्कृष्ट मानसिक स्पष्टता",
          "ऊर्जा शोधन और चक्रों का सुसंगत संरेखण",
          "बेहतर और गहरी नींद और एकाग्रता में सुधार",
          "चिंता, अवसाद और भावनात्मक थकान से तत्क्षण मुक्ति",
          "sकारात्मकता और स्थायी आंतरिक शांति में वृद्धि",
          "समग्र आरोग्य और नैसर्गिक स्व-उपचार शक्ति को सशक्त बनाना",
          "आध्यात्मिक प्रगति और आत्मज्ञान का मार्ग प्रशस्त करना"
        ],
        timeline: [
          {
            title: "आभामंडल सूक्ष्म स्कैन",
            description: "बिना स्पर्श किये अवरुद्ध नाड़ी तंत्रों, ऊर्जा केंद्रों तथा आभामंडलीय भारीपन का सूक्ष्म निरीक्षण।"
          },
          {
            title: "ऊर्जा प्रवाह संचरण",
            description: "केंद्रीय ऊर्जा केंद्रों में अलौकिक हीलिंग तरंगों को प्रवाहित कर संचित तनावों को शांत करना व नाड़ियों को ऊर्जावान बनाना।"
          },
          {
            title: "क्रिस्टलीय चक्र सील",
            description: "पुनर्संरेखित ऊर्जा आवृत्तियों को आभामंडल में सुरक्षित, लॉक और स्थायी बनाने के लिए दिव्य स्फटिक तरंगों का प्रयोग।"
          }
        ]
      }
    }
  },

];

const SEED_TESTIMONIALS = [
  {
    _id: "t1",
    name: "Heinrich Müller",
    role: "Director of Imports, Alt-Apotheke (Hamburg)",
    city: "Hamburg",
    content: "DharaAveda's green cardamom holds premium quality standard across European imports. Their shipping times, analytical certifications, and pristine packaging represent absolute elite agricultural luxury.",
    image: "/images/products/asset-89-68747470.webp",
    rating: 5,
    type: "export",
    approved: true
  },
  {
    _id: "t2",
    name: "Elena Rostova",
    role: "Integrative Wellness Director, Geneva Retreats",
    city: "Geneva",
    content: "The Bach Flower consultation at DharaAveda is a work of high spiritual art. The custom formulas have helped several of our high-performance clients regain inner alignment when conventional modalities sputtered.",
    image: "/images/testimonials/client-avatar-default.webp?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    type: "wellness",
    approved: true
  }
];

const DEFAULT_ABOUT = {
  aboutText: "I am Vikranti Yogesh Sainee, a technology professional, wellness practitioner, and social contributor with over 19 years of experience in the IT industry across multiple domains. My core expertise lies in framework design, Artificial Intelligence, Gemini AI, and modern cloud technologies, where I have worked on innovative and scalable technology solutions aligned with evolving digital transformation needs.\n\nAlongside my professional journey, I have been deeply associated with Art of Living Foundation for more than two decades as a teacher, devotee, and active volunteer. This spiritual journey has given me the strength, clarity, and balance to handle different dimensions of life peacefully and calmly — family, office, business, and social responsibilities.\n\nWith heartfelt gratitude, I bow to the living master Gurudev Sri Sri Ravi Shankar, whose wisdom, guidance, and blessings have transformed my perspective toward life. His teachings have helped me cultivate inner peace, awareness, compassion, and the ability to serve society with dedication.",
  philosophy: "“गुरु गोविंद दोऊ खड़े, काके लागूं पाय ।\nबलिहारी गुरु आपने, गोविंद दियो बताय ॥”\n\nMeaning: When both Guru and God stand before me, whom should I bow to first? I bow to the Guru first, for it is through the Guru that I found the Divine.\n\n“Without the blessings and guidance of the Guru, true knowledge and direction in life remain incomplete.”",
  profileImage: "/images/testimonials/client-avatar-default.webp?auto=format&fit=crop&q=80&w=800",
  name: "Vikranti Yogesh Sainee",
  role: "Technology Professional, Wellness Practitioner & Spiritual Teacher",
  showReviews: true,
  showAbout: true
};

const DEFAULT_SCREENSHOTS = [
  {
    _id: "sr1",
    imageUrl: "/images/testimonials/client-review-wellness-1.webp?auto=format&fit=crop&q=80&w=600",
    caption: "Usui Reiki Session: 'I slept for 9 hours straight for the first time in 5 years.'",
    platform: "whatsapp",
    topic: "Sleep"
  },
  {
    _id: "sr2",
    imageUrl: "/images/testimonials/client-review-wellness-2.webp?auto=format&fit=crop&q=80&w=600",
    caption: "Bach Flower review: 'My somatic panic attacks dissolved within 12 days.'",
    platform: "instagram",
    topic: "Panic attack"
  },
  {
    _id: "sr3",
    imageUrl: "/images/testimonials/client-review-soundwave.webp?auto=format&fit=crop&q=80&w=600",
    caption: "Pranic Sound waves: 'Unbelievable vibrational wave clearing Wayanad residue. Deeply recommend!'",
    platform: "whatsapp",
    topic: "Sound healing"
  },
   {
     _id: "sr4",
     imageUrl: "/uploads/screenshot_1782930499730.png",
     caption: "Bach Flower Remedies: 1-year-old child constantly crying. Felt relief in 4-5 days of remedies.",
     platform: "whatsapp",
     topic: "Crying"
   },
   {
     _id: "sr5",
     imageUrl: "/uploads/screenshot_1782930752173.png",
     caption: "Bach Flower Remedies: Stomach pains and cramps gone. Felt relaxed, calm, and anxiety disappeared.",
     platform: "whatsapp",
     topic: "Stomach pain"
   },
   {
     _id: "sr6",
     imageUrl: "/uploads/screenshot_1782930811410.png",
     caption: "Down syndrome-related difficulties and frequent emotional bursts. Tremendous improvement after treatment.",
     platform: "whatsapp",
     topic: "Emotional breakdown"
   },
   {
     _id: "sr7",
     imageUrl: "/uploads/screenshot_1782930877171.png",
     caption: "Bach Flower Remedies: 14-year-old with anger and phone addiction improved in just 1 month.",
     platform: "whatsapp",
     topic: "Anger"
   },
   {
     _id: "sr8",
     imageUrl: "/uploads/screenshot_1782930964331.png",
     caption: "Bach Flower Remedies + Rekkhano Healing: 42-year-old woman with body aches, constant tiredness and fatigue for 4.5 years.",
     platform: "whatsapp",
     topic: "Swelling, tiredness"
   },
   {
     _id: "sr9",
     imageUrl: "/uploads/screenshot_1782931016964.png",
     caption: "Bach Flower Remedies: 78-year-old father with dementia, tiredness, restlessness, anxiety, sleep issues, confusion and panic. Positive changes noticed within a few days.",
     platform: "whatsapp",
     topic: "Stomach pain"
   },
];

export async function seedDatabase(): Promise<void> {
  try {
    // Always enforce the required price, duration, and image for the bookable therapy sessions
    await TherapyService.updateOne(
      { _id: "bach-flower" },
      { $set: { 
          description: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.",
          story: "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.\n\nThe therapy is based on the understanding that our emotional well-being plays a vital role in our overall health. Feelings such as stress, anxiety, fear, sadness, anger, guilt, loneliness, lack of confidence, or emotional overwhelm can affect both the mind and body. Bach Flower Remedies help restore emotional balance by addressing these underlying emotional states.\n\nPrepared from the flowers of wild plants and trees, these remedies work gently to support the body's natural ability to heal. They are *non-habit forming, non-toxic, and suitable for people of all ages*, including children, adults, senior citizens, and even pets.\n\nBach Flower Therapy can support individuals experiencing:\n\n* Stress, anxiety, and overthinking\n* Fear, panic, and phobias\n* Depression, grief, and emotional trauma\n* Anger, irritability, and frustration\n* Low confidence and self-esteem\n* Sleep disturbances and mental fatigue\n* Relationship and family challenges\n* Exam stress and concentration difficulties in children\n* Emotional support during pregnancy, postpartum, and menopause\n* Lifestyle-related emotional imbalances that may accompany physical health concerns\n\nBach Flower Therapy is a complementary wellness approach that focuses on emotional harmony and inner peace. It can be used alongside conventional medical care but is *not a substitute for medical diagnosis or treatment*.\n\nBy bringing emotions back into balance, Bach Flower Remedies help individuals feel calmer, more positive, emotionally resilient, and better able to face life's challenges with confidence and clarity.",
          "translations.en.description": "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.",
          "translations.en.story": "*Bach Flower Therapy* is a gentle, safe, and natural system of emotional healing developed by *Dr. Edward Bach*, a British physician and homeopath, in the 1930s.\n\nThe therapy is based on the understanding that our emotional well-being plays a vital role in our overall health. Feelings such as stress, anxiety, fear, sadness, anger, guilt, loneliness, lack of confidence, or emotional overwhelm can affect both the mind and body. Bach Flower Remedies help restore emotional balance by addressing these underlying emotional states.\n\nPrepared from the flowers of wild plants and trees, these remedies work gently to support the body's natural ability to heal. They are *non-habit forming, non-toxic, and suitable for people of all ages*, including children, adults, senior citizens, and even pets.\n\nBach Flower Therapy can support individuals experiencing:\n\n* Stress, anxiety, and overthinking\n* Fear, panic, and phobias\n* Depression, grief, and emotional trauma\n* Anger, irritability, and frustration\n* Low confidence and self-esteem\n* Sleep disturbances and mental fatigue\n* Relationship and family challenges\n* Exam stress and concentration difficulties in children\n* Emotional support during pregnancy, postpartum, and menopause\n* Lifestyle-related emotional imbalances that may accompany physical health concerns\n\nBach Flower Therapy is a complementary wellness approach that focuses on emotional harmony and inner peace. It can be used alongside conventional medical care but is *not a substitute for medical diagnosis or treatment*.\n\nBy bringing emotions back into balance, Bach Flower Remedies help individuals feel calmer, more positive, emotionally resilient, and better able to face life's challenges with confidence and clarity.",
          duration: "1 Hour", 
          pricing: "₹2,000 per session",
          image: "/images/therapy/bachFlowerService.webp"
        } 
      }
    ).catch(() => {});
    await TherapyService.updateOne(
      { _id: "reiki-aurasoma" },
      { $set: { 
          name: "Rekkhanoho Therapy", 
          duration: "1 Hour", 
          pricing: "₹2,000 per session",
          image: "/images/therapy/rekkhanohoService.webp"
        } 
      }
    ).catch(() => {});
    for (const review of DEFAULT_SCREENSHOTS) {
      await ScreenshotReview.updateOne(
        { _id: review._id },
        { $set: review },
        { upsert: true }
      );
    }
    const productsCount = await Product.countDocuments();
    if (productsCount > 0) {
      console.log("Database already populated. Enforced pricing & duration updates.");
      
      // Load localDb for syncing translations
      let localDb: any = null;
      const pathsToSearch = [
        path.join(process.cwd(), "db_store.json"),
        path.join(process.cwd(), "../db_store.json"),
        path.join(__dirname, "../../../db_store.json"),
        path.join(__dirname, "../../db_store.json"),
      ];

      for (const p of pathsToSearch) {
        if (fs.existsSync(p)) {
          try {
            const fileContent = fs.readFileSync(p, "utf-8");
            localDb = JSON.parse(fileContent);
            break;
          } catch (e) {}
        }
      }

      if (localDb) {
        console.log("Syncing database translations from db_store.json...");
        if (localDb.services) {
          for (const s of localDb.services) {
            if (s.translations) {
              await TherapyService.updateOne({ _id: s.id || s._id }, { $set: { translations: s.translations } }).catch(() => {});
            }
          }
        }
        if (localDb.testimonials) {
          for (const t of localDb.testimonials) {
            if (t.translations) {
              await Testimonial.updateOne({ _id: t.id || t._id }, { $set: { translations: t.translations } }).catch(() => {});
            }
          }
        }
        if (localDb.aboutVikranti && localDb.aboutVikranti.translations) {
          await AboutContent.updateOne(
            { _id: localDb.aboutVikranti.id || localDb.aboutVikranti._id || "about_vikranti" },
            { $set: { translations: localDb.aboutVikranti.translations } }
          ).catch(() => {});
        }
        if (localDb.screenshotReviews) {
          for (const r of localDb.screenshotReviews) {
            if (r.translations) {
              await ScreenshotReview.updateOne({ _id: r.id || r._id }, { $set: { translations: r.translations } }).catch(() => {});
            }
          }
        }
        console.log("Database translations synced successfully.");
      }
      return;
    }

    console.log("Database is empty. Initializing seeding process...");

    // Try to load existing db_store.json file
    let localDb: any = null;
    const pathsToSearch = [
      path.join(process.cwd(), "db_store.json"),
      path.join(process.cwd(), "../db_store.json"),
      path.join(__dirname, "../../../db_store.json"),
      path.join(__dirname, "../../db_store.json"),
    ];

    for (const p of pathsToSearch) {
      if (fs.existsSync(p)) {
        try {
          console.log(`Loading seeding database from: ${p}`);
          const fileContent = fs.readFileSync(p, "utf-8");
          localDb = JSON.parse(fileContent);
          break;
        } catch (e) {
          console.warn(`Failed parsing file at ${p}:`, e);
        }
      }
    }

    // Products Seeding
    const productsToSeed = localDb?.products || SEED_PRODUCTS;
    const productDocs = productsToSeed.map((p: any) => ({
      ...p,
      _id: p.id || p._id
    }));
    await Product.insertMany(productDocs);
    console.log(`Seeded ${productDocs.length} products`);

    // Services Seeding
    const servicesToSeed = localDb?.services || SEED_SERVICES;
    const serviceDocs = servicesToSeed.map((s: any) => ({
      ...s,
      _id: s.id || s._id
    }));
    await TherapyService.insertMany(serviceDocs);
    console.log(`Seeded ${serviceDocs.length} therapy services`);

    // Testimonials Seeding
    const testimonialsToSeed = localDb?.testimonials || SEED_TESTIMONIALS;
    const testimonialDocs = testimonialsToSeed.map((t: any) => ({
      ...t,
      _id: t.id || t._id
    }));
    await Testimonial.insertMany(testimonialDocs);
    console.log(`Seeded ${testimonialDocs.length} testimonials`);

    // About Vikranti Content Seeding
    const aboutToSeed = localDb?.aboutVikranti || DEFAULT_ABOUT;
    const aboutDoc = {
      ...aboutToSeed,
      _id: aboutToSeed.id || aboutToSeed._id || "about_vikranti"
    };
    await AboutContent.create(aboutDoc);
    console.log("Seeded About Content details");

    // Screenshot Reviews Seeding
    const reviewsToSeed = localDb?.screenshotReviews || DEFAULT_SCREENSHOTS;
    const reviewDocs = reviewsToSeed.map((r: any) => ({
      ...r,
      _id: r.id || r._id
    }));
    await ScreenshotReview.insertMany(reviewDocs);
    console.log(`Seeded ${reviewDocs.length} screenshot reviews`);

    // Bookings & Inquiries (If any in db_store.json)
    if (localDb?.bookings && localDb.bookings.length > 0) {
      const bookingDocs = localDb.bookings.map((b: any) => ({
        ...b,
        _id: b.id || b._id
      }));
      await Booking.insertMany(bookingDocs);
      console.log(`Seeded ${bookingDocs.length} bookings from backup`);
    }

    if (localDb?.inquiries && localDb.inquiries.length > 0) {
      const inquiryDocs = localDb.inquiries.map((i: any) => ({
        ...i,
        _id: i.id || i._id
      }));
      await Inquiry.insertMany(inquiryDocs);
      console.log(`Seeded ${inquiryDocs.length} inquiries from backup`);
    }

    console.log("Database seeding completed successfully.");
  } catch (error) {
    console.error("Critical error during database seeding:", error);
  }
}
