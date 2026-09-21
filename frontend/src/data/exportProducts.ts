import { Product } from "../types";
import { IMAGES } from "./images";

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

export const EXPORT_CATEGORIES: ProductCategory[] = [
  {
    "id": "spices",
    "title": "Spices & Seasonings",
    "description": "Whole Spices • Spice Powders • Flakes • Granules • Masala Blends • Custom Seasonings • Bulk & Export Supply. Vedas-grade aromatics, hot spices, and complex culinary powders milled to absolute microbiological safety standards.",
    "image": IMAGES.exportCategories.spices,
    "products": [
      {
        "id": "s-turmeric",
        "name": "Turmeric Powder",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.turmericPowder
        ],
        "description": "Dharaaveda Global Exim offers premium-quality Indian Turmeric Powder with carefully selected raw material and options based on curcumin content, suitable for food, nutraceutical, wellness and ingredient applications along with completely organic.",
        "details": {
          "about": "Our Turmeric Powder is manufactured from quality turmeric fingers and processed under hygienic conditions to retain its natural colour, aroma and characteristic turmeric properties.",

          "availableCurcuminGrades": "• Standard Grade: Curcumin 3.5%+\n• Premium High-Curcumin Grade: Curcumin 7%+\n(The exact curcumin specification can be confirmed through a batch-wise laboratory test/COA)",

          "qualityTesting": "For export-oriented requirements, the product can be tested for:\n• Curcumin Content\n• Pesticide Residues\n• Heavy Metals\n• Aflatoxins\n• Microbiological Parameters\n• Moisture\n• Other quality parameters as per buyer/import-country requirements\nLab-tested batches with COA and required compliance documentation can be supplied as per customer specification.",

          "benefitsHighCurcumin": "Turmeric naturally contains curcuminoids, with curcumin being its key bioactive compound. Higher-curcumin turmeric provides a more concentrated source of these compounds.",

          "gradeApplications": "• Standard Turmeric Powder (Curcumin 3.5%+): Food products, spices, seasoning, sauces, snacks\n• Premium High-Curcumin Turmeric Powder (Curcumin 7%+): Functional foods and nutraceutical formulations"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Sourced from premium turmeric growing regions)",
           "availableForms": [
                        "Fine Powder ",
                        "Whole Turmeric Fingers ",
                        "Polished Turmeric Fingers ",
                        "Turmeric Granules ",
                        "Customized Mesh Sizes"
                      ],
          "packaging": "25 kg & 50 kg food-grade bags • PP bags with inner liner • Kraft paper bags • Private-label & Bulk shipments",
          "purity": "100% Organic & Lab-Tested with COA (Curcumin, Pesticides, Heavy Metals, Aflatoxins, Microbio, Moisture)",
          "grade": "Standard (Curcumin 3.5%+) • Premium High-Curcumin (Curcumin 7%+)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-redchilli",
        "name": "Red Chilli Powder",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.redChilliPowder
        ],
        "description": "Guntur Sannam red chilli powder offering a deep color and customizable heat ratings for international kitchens.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Guntur Region, India",
           "availableForms": [
              "Fine Powder",
              "Medium Grind",
              "Coarse Grind",
              "Customized Mesh Sizes"
            ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Aflatoxin & Sudan Dye Negative",
          "grade": "Kashmiri Bright Red Selection",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-coriander",
        "name": "Coriander Powder",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.corianderPowder
        ],
        "description": "Our Coriander Powder is produced from premium coriander seeds, delivering a rich aroma, authentic flavor, and consistent quality. Carefully processed under hygienic conditions, it is ideal for food manufacturers, spice blenders, and global buyers.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Rajasthan & Madhya Pradesh, India",
          "availableForms": [
                        "Fine Powder",
                        "Coarse Powder",
                        "Whole Coriander Seeds"
                      ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade • Machine Cleaned",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-cumin",
        "name": "Cumin Powder",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.cuminPowder
        ],
        "description": "Our Cumin Powder is finely ground from carefully selected premium cumin seeds, delivering a rich earthy aroma, warm flavor, and natural freshness. Hygienically processed to preserve its authentic taste and quality, it is widely used in spice blends, seasonings, food processing, and international export markets.",
        "details": {
          "applications": "• Food Processing\n• Spice Blends\n• Seasonings\n• Ready-to-Eat Foods\n• Sauces\n• Snacks"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Gujarat & Rajasthan, India",
          "availableForms": [
              "Fine Powder",
              "Medium Grind ",
               "Customized Mesh Sizes "
          ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-blackpepper",
        "name": "Black Pepper",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.blackPepper
        ],
        "description": "Our Black Pepper is sourced from carefully selected premium peppercorns, known for their bold aroma, sharp pungency, and rich flavor. Hygienically processed and quality assured, it is ideal for culinary applications, spice blends, food processing, pharmaceuticals, and international export markets.",
        "details": {
            "applications": "• Food Processing\n• Spice Blends\n• Seasonings\n• Marinades\n• Pharmaceuticals\n• Nutraceuticals"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Karnataka, India",
           "availableForms": [
               "Whole Black Pepper ",
               "Cracked Black Pepper",
               "Ground Black Pepper ",
               "Coarse Grind "
           ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging ",
          "purity": "NABL Lab Tested • Moisture as per Buyer Specification",
          "grade": "Export Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-cardamom",
        "name": "Cardamom",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.cardamom
        ],
        "description": "Our premium Cardamom is carefully sourced from India's renowned spice-growing regions, offering a rich aroma, distinctive flavor, and vibrant natural color. Hygienically processed and quality assured, it is ideal for culinary, bakery, confectionery, beverage, pharmaceutical, and export applications.",
        "details": {
            "applications": "• Food Processing\n• Spice Blends\n• Bakery\n• Confectionery\n• Beverages\n• Pharmaceuticals\n• Ayurveda"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Idukki, Kerala, India",
           "availableForms": [
               "Whole Green Cardamom ",
               "Cardamom Seeds ",
               "Cardamom Powder "
           ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Bold Green Cardamom",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-cloves",
        "name": "Cloves",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.cloves
        ],
        "description": "Our premium Cloves are carefully sourced for their rich aroma, intense flavor, and natural oil content. Hygienically processed and quality assured, they are ideal for culinary, pharmaceutical, and export applications.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Tamil Nadu, India",
           "availableForms": [
               "Clove Powder",
               "Clove Pieces "
                    ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Hand-Selected Whole Cloves",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-cinnamon",
        "name": "Cinnamon",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.cinnamon
        ],
        "description": "Our premium Cinnamon is carefully sourced from selected spice-growing regions, offering a naturally sweet aroma, warm flavor, and superior quality. Hygienically processed and quality assured, it is ideal for culinary, bakery, beverage, pharmaceutical, and international export applications.",
        "details": {
            "applications": "• Food Processing\n• Bakery\n• Confectionery\n• Beverages\n• Spice Blends\n• Pharmaceuticals\n• Ayurveda"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Tamil Nadu, India",
           "availableForms": [
               "Whole Quills ",
               "Broken Quills ",
               "Cinnamon Powder ",
               "Cinnamon Chips"
                    ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Fine Grade Alba quills",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-nutmeg",
        "name": "Nutmeg",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.nutmeg
        ],
        "description": "Our premium Nutmeg is carefully sourced from selected spice-growing regions, offering a rich aroma, warm flavor, and natural freshness. Hygienically processed and quality assured, it is ideal for culinary, bakery, confectionery, pharmaceutical, and wellness applications.",
        "details": {
            "applications": "• Food Processing\n• Bakery\n• Confectionery\n• Beverages\n• Spice Blends\n• Pharmaceuticals\n• Ayurveda"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala, India",
           "availableForms": [
               "Whole Nutmeg",
               "Nutmeg Powder ",
               "Cracked Nutmeg"
           ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade Whole Nutmeg",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-staranise",
        "name": "Star Anise",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.starAnise
        ],
        "description": "Star Anise is a premium aromatic spice with a distinctive star shape and sweet, licorice-like flavor. Ideal for culinary, herbal, beverage, pharmaceutical, and essential oil applications, it is carefully sourced and processed to ensure exceptional quality and freshness.",
         "details": {
            "applications": "• Culinary\n• Spice Blends\n• Herbal Products\n• Beverages\n• Pharmaceuticals"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Arunachal Pradesh & Northeast India",
           "availableForms": [
               "Whole",
               "Broken ",
               " Powder"
           ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade Whole Star Anise",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-fennel",
        "name": "Fennel Seeds",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.fennelSeeds
        ],
        "description": "Our premium Fennel Seeds are carefully sourced from India's finest growing regions, offering a naturally sweet aroma, refreshing flavor, and vibrant green color. Hygienically processed and quality assured, they are ideal for culinary, confectionery, beverage, pharmaceutical, and wellness applications.",
        "details": {
            "applications": "• Food Processing\n• Spice Blends\n• Bakery\n• Confectionery\n• Beverages\n• Herbal Products\n• Ayurveda"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Rajasthan & Gujarat, India",
           "availableForms": [
               "Whole Fennel Seeds ",
               "Fennel Powder ",
              "Crushed Fennel  "
           ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade Green Fennel Seeds",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-mustard",
        "name": "Mustard Seeds",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.mustardSeeds
        ],
        "description": "Our premium Mustard Seeds are carefully sourced from India's leading growing regions, offering a rich aroma, natural pungency, and superior quality. Hygienically processed and quality assured.",
        "details": {
            "applications": "• Food Processing\n• Spice Blends\n• Pickles\n• Condiments\n• Oil Extraction\n• Seasonings"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Rajasthan & Uttar Pradesh, India",
           "availableForms": [
               "Whole Mustard Seeds ",
               "Mustard Powder  ",
               "Crushed Mustard "
                    ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Export Grade Whole Mustard Seeds",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-bayleaves",
        "name": "Bay Leaves",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.bayLeaves
        ],
        "description": "Our premium Bay Leaves are carefully sourced from selected growing regions, offering a distinctive aroma, mild earthy flavor, and natural freshness. Hygienically processed and quality assured, they are ideal for culinary, spice blends, food processing, and international export markets.",
         "details": {
            "applications": "• Food Processing\n• Spice Blends\n• Soups\n• Curries\n• Rice Dishes\n• Seasonings\n• Herbal Products"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Uttarakhand & Himachal Pradesh, India",
           "availableForms": [
               "Whole Bay Leaves ",
               "Crushed Bay Leaves ",
               "Bay Leaf Powder "
           ],
          "packaging": "",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-garammasala",
        "name": "Garam Masala",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.garamMasala
        ],
        "description": "Our premium Garam Masala is expertly blended using carefully selected whole spices to deliver a rich aroma, balanced flavor, and authentic taste. Hygienically processed and quality assured, it is ideal for home kitchens, food processing, restaurants, and international export markets.",
         "details": {
            "applications": "• Cooking\n• Curries\n• Gravies\n• Marinades\n• Snacks\n• Ready-to-Eat Foods\n• Food Processing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
           "availableForms": [
               "Fine Powder",
               "Coarse Blend ",
               "Customized Spice Blends "
           ],

          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Spice Blend",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
  
      {
        "id": "s-mixedspice",
        "name": "Mixed Spice Blends",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.mixedSpiceBlends
        ],
        "description": "Our premium Mixed Spice Blends are expertly crafted using carefully selected spices to deliver consistent aroma, authentic flavor, and superior quality. Hygienically processed and quality assured, they are ideal for food manufacturers, restaurants, retail brands, and international export markets.",
         "details": {
            "applications": "• Food Processing\n• Ready-to-Cook Mixes\n• Seasonings\n• Marinades\n• Snacks\n• Sauces\n• Restaurant & Catering"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Coarse Blend ",
                         "Customized Spice Blends "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk, Retail & Private Label Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Spice Blend",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-kalamasala",
        "name": "Kala Masala",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.kalaMasala
        ],
        "description": "Dharaaveda Kala Masala is an authentic traditional Maharashtrian spice blend prepared from carefully selected whole spices. The spices are sorted, graded, hygienically processed, and blended in precise proportions to deliver a rich dark colour, distinctive aroma, balanced heat, and deep roasted flavour. No adulteration or unnecessary fillers are added.",
        "details": {
            "applications": "• Maharashtrian curries and gravies\n• Vegetable preparations\n• Misal, usal & zunka\n• Vada pav & street-food preparations\n• Rice and pulao\n• Dal and legumes\n• Restaurant & hotel kitchens\n• Ready-to-cook food products\n• Spice blends and food manufacturing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – Maharashtra (Sourced from reputed growing regions across India)",
          "availableForms": [
                         "Fine Powder",
                         "Medium Grind ",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "Retail & Bulk Packaging: 20 g • 50 g • 100 g • 200 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg",
          "purity": "Pure Authentic Spice Blend • No Fillers or Adulteration",
          "grade": "Premium Food Grade • Export Grade • Commercial/Industrial Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
    ]
  },
  {
    "id": "veg_powders",
    "title": "Dehydrated Vegetable Powders",
    "description": "Nature's Goodness, Expertly Preserved\n\nDharaaveda Global Exim offers a premium range of Dehydrated Vegetable Powders manufactured from carefully selected farm-fresh vegetables using advanced dehydration technology. Our products retain their natural color, aroma, taste, and nutritional value, making them ideal for a wide range of food processing and industrial applications.",
    "image": IMAGES.exportCategories.vegPowders,
    "products": [
      {
        "id": "vp-beetroot",
        "name": "Beetroot Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.beetrootPowder
        ],
        "description": "Our premium Beetroot Powder is made from carefully selected beetroots, offering a vibrant natural color, rich flavor, and superior quality. Hygienically processed to preserve its natural goodness, it is ideal for food processing, beverages, bakery, nutraceuticals, health foods, and international export markets.",
        "details": {
            "applications": "• Health Foods\n• Beverages\n• Smoothies\n• Bakery\n• Food Processing\n• Nutraceuticals\n• Natural Food Coloring"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-tomatopowder",
        "name": "Tomato Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.tomatoPowder
        ],
        "description": "Premium-quality Tomato Powder made from carefully selected, ripe tomatoes that are dehydrated and finely processed to retain their natural colour, flavour, aroma, and nutritional value. Suitable for food manufacturing and commercial applications.",
        "details": {
          "applications": "• Soups\n• Sauces\n• Ketchup\n• Seasonings\n• Snacks\n• Instant foods\n• Gravies\n• Ready-to-eat meals\n• Bakery products\n• Nutraceutical formulations\n• Food processing"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Fine Powder",
            "Customized Mesh Sizes "
          ],
          "packaging": "1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized packaging",
          "purity": "100% Pure Tomato Powder – No artificial colours, flavours, or preservatives.",
          "grade": "Food Grade / Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-potato",
        "name": "Potato Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.potatoPowder
        ],
        "description": "Our premium Potato Powder is produced from carefully selected potatoes, offering a smooth texture, natural taste, and excellent consistency. Hygienically processed and quality assured, it is ideal for soups, sauces, snacks, bakery products, food processing, and international export markets.",
         "details": {
            "applications": "• Food Processing\n• Soups\n• Sauces\n• Snacks\n• Bakery\n• Instant Mixes\n• Ready-to-Eat Foods"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-garlic",
        "name": "Garlic Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.garlicPowder
        ],
        "description": "Our premium Garlic Powder is made from carefully selected garlic cloves, delivering a rich aroma, authentic flavor, and excellent consistency. Hygienically processed and quality assured, it is ideal for seasonings, spice blends, sauces, snacks, food processing, and international export markets.",
        "details": {
            "applications": "• Food Processing\n• Seasonings\n• Spice Blends\n• Sauces\n• Snacks\n• Ready-to-Eat Foods\n• Bakery"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Coarse Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-ginger",
        "name": "Ginger Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.gingerPowder
        ],
        "description": "Our premium Ginger Powder is made from carefully selected ginger rhizomes, offering a rich aroma, warm flavor, and natural freshness. Hygienically processed and quality assured, it is ideal for food processing, beverages, bakery, nutraceuticals, spice blends, and international export markets.",
        "details": {
            "applications": "• Food Processing\n• Beverages\n• Bakery\n• Spice Blends\n• Seasonings\n• Nutraceuticals\n• Ayurveda"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Coarse Powder ",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-onion",
        "name": "Onion Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.onionPowder
        ],
        "description": "Our premium Onion Powder is made from carefully selected onions, offering a rich aroma, authentic flavor, and excellent consistency. Hygienically processed and quality assured, it is ideal for seasonings, spice blends, soups, sauces, snacks, food processing, and international export markets.",
        "details": {
            "applications": "• Food Processing\n• Seasonings\n• Spice Blends\n• Soups\n• Sauces\n• Snacks\n• Ready-to-Eat Foods"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Coarse Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-spinach",
        "name": "Spinach Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.spinachPowder
        ],
        "description": "Our Spinach Powder is produced from carefully selected, fresh spinach leaves that are gently dehydrated and finely milled to preserve their natural green color, nutrients, and fresh leafy aroma. Rich in iron, dietary fiber, vitamins, and natural chlorophyll, it is widely used in the food, nutraceutical, bakery, and health food industries.",
        "details": {
            "applications": "• Nutraceuticals & Health Supplements\n• Smoothies & Functional Beverages\n• Soups & Sauces\n• Bakery & Confectionery Products\n• Pasta, Noodles & Ready-to-Eat Foods\n• Seasonings & Spice Blends\n• Instant Food Mixes"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-carrot",
        "name": "Carrot Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.carrotPowder
        ],
        "description": "Our Carrot Powder is produced from carefully selected fresh carrots that are hygienically processed, gently dehydrated, and finely milled to preserve their natural color, sweetness, and nutritional value. Rich in natural beta-carotene, it is widely used across the food, beverage, nutraceutical, and bakery industries.",
        "details": {
            "applications": "• Health Supplements & Nutraceuticals\n• Soups & Sauces\n• Bakery & Confectionery Products\n• Instant Food Mixes\n• Baby Food Formulations\n• Smoothies & Functional Beverages\n• Pasta, Noodles & Snacks\n• Seasonings & Ready-to-Eat Foods"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-cabbage",
        "name": "Cabbage Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.cabbagePowder
        ],
        "description": "Our Cabbage Powder is produced from carefully selected fresh cabbage that is hygienically processed, gently dehydrated, and finely milled to preserve its natural flavor, color, and nutritional value. It is widely used in food processing, seasoning blends, soups, ready-to-eat meals, and health food applications.",
        "details": {
            "applications": "• Soups & Sauces\n• Seasoning & Spice Blends\n• Instant Food Mixes\n• Ready-to-Eat & Ready-to-Cook Foods\n• Bakery Products\n• Snacks & Savory Products\n• Nutraceutical & Health Food Formulations\n• Pasta, Noodles & Convenience Foods"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes  (on request)"
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-moringa",
        "name": "Drumstick (Moringa) Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.moringaPowderVeg
        ],
        "description": "Our Drumstick Powder is produced from carefully selected fresh drumsticks (Moringa Pods) that are hygienically processed, gently dehydrated, and finely milled to preserve their natural flavor, color, and nutritional value. It is widely used in food processing, nutraceuticals, health foods, and seasoning applications.",
        "details": {
            "applications": "• Soups & Sauces\n• Seasoning & Spice Blends\n• Instant Food Mixes\n• Ready-to-Eat & Ready-to-Cook Foods\n• Bakery Products\n• Snacks & Savory Products\n• Seasoning & Spice Blends\n• Functional Food Formulation"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes (on request)"
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-greenchilli",
        "name": "Green Chilli Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.greenChilliPowder
        ],
        "description": "Our Green Chilli Powder is produced from carefully selected fresh green chillies that are hygienically processed, gently dehydrated, and finely milled to preserve their natural pungency, vibrant green color, and fresh aroma. It is widely used in the food processing, seasoning, snack, and ready-to-eat food industries.",
         "details": {
            "applications": "• Soups & Sauces\n• Seasoning & Spice Blends\n• Instant Food Mixes\n• Ready-to-Eat & Ready-to-Cook Foods\n• Bakery & Savory Products\n• Snack Food Manufacturing\n• Seasoning & Spice Blends\n• Frozen & Convenience Foods"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes (on request)"
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-corianderleaf",
        "name": "Coriander Leaf Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.corianderLeafPowder
        ],
        "description": "Our Coriander Leaf Powder is produced from carefully selected fresh coriander (cilantro) leaves that are hygienically processed, gently dehydrated, and finely milled to preserve their natural green color, fresh aroma, and nutritional value. It is widely used in seasoning blends, soups, sauces, ready-to-eat foods, and various culinary applications.",
        "details": {
            "applications": "• Soups & Sauces\n• Seasoning & Spice Blends\n• Instant Food Mixes\n• Ready-to-Eat & Ready-to-Cook Foods\n• Snacks & Savory Products Marinades & Dressings\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes (on request) "
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed • Frozen Food Preparations",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-mintpowder",
        "name": "Mint Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.mintPowder
        ],
        "description": "Dharaaveda Mint Powder is made from carefully selected, naturally dried mint leaves, hygienically processed to retain its characteristic aroma, flavour, and natural properties. It is suitable for food, beverage, seasoning, and wellness applications.",
        "details": {
          "applications": "• Food seasoning\n• Spice blends\n• Beverages\n• Herbal teas\n• Chutneys\n• Sauces\n• Snacks\n• Bakery products\n• Nutraceutical and wellness formulations"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                "Fine Powder",
                "Medium Grind",
                "Customized Mesh Sizes "
              ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 10 kg • 20 kg • 25 kg • Customized packaging",
          "purity": "100% Pure Mint Powder – No Artificial Colours, Flavours or Added Preservatives.",
          "grade": "Food Grade / Export Quality.",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
    ]
  },
  {
    "id": "fruit_powders",
    "title": "Dehydrated Fruit Powders",
    "description": "Dehydrated Fruit Powders Supplier & Exporter India | Fine, Spray-Dried & Freeze-Dried\n\nDharaaveda Global Exim supplies dehydrated fruit powders, fine powders, spray-dried and freeze-dried fruit ingredients and smoothie mixes for global food, beverage, and nutraceutical industries.",
    "image": IMAGES.exportCategories.fruitPowders,
    "products": [
      {
        "id": "fp-banana",
        "name": "Banana Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.bananaPowder
        ],
        "description": "Our Banana Powder is produced from carefully selected ripe bananas that are hygienically processed, gently dehydrated, and finely milled to preserve their natural sweetness, aroma, and nutritional value. It is widely used in the food, beverage, bakery, nutraceutical, and infant nutrition industries.",
        "details": {
            "applications": "• Health Supplements & Nutraceuticals\n• Baby Food & Infant Nutrition\n• Smoothies & Functional Beverages\n• Bakery & Confectionery Products\n• Dairy Products & Ice Cream\n• Instant Food Mixes\n• Breakfast Cereals\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                         "Fine Powder",
                         "Customized Mesh Sizes (on request)"
                     ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Premium Food Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-mango",
        "name": "Mango Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.mangoPowder
        ],
        "description": "Our Mango Powder is produced from carefully selected premium-quality mangoes that are hygienically processed, gently dehydrated, and finely milled to preserve their natural sweetness, tropical aroma, vibrant color, and nutritional value. It is widely used in the food, beverage, bakery, confectionery, and nutraceutical industries.",
        "details": {
            "applications": "• Beverage & Smoothie Mixes\n• Bakery & Confectionery Products\n• Dairy Products & Ice Cream\n• Health Supplements & Nutraceuticals\n• Instant Food Mixes\n• Desserts & Ready-to-Eat Foods\n• Breakfast Cereals\n• Breakfast Cereals\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Ratnagiri & South India Orchards",
          "availableForms": [
                                   "Fine Powder",
                                   "Customized Mesh Sizes (on request)"
                               ],
          "packaging": "Aluminum Vacuum Foil Inserts in Master Cartons",
          "purity": "Spray-Dried from 100% Organic Fruit Pulp",
          "grade": "Food & Beverage Grade A",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-pineapple",
        "name": "Pineapple Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.pineapplePowder
        ],
        "description": "Our Pineapple Powder is produced from carefully selected, ripe pineapples that are hygienically processed and spray-dried to preserve their natural tropical flavor, aroma, golden color, and nutritional value. Naturally rich in Vitamin C and bromelain, it is widely used in the food, beverage, nutraceutical, bakery, and confectionery industries.",
        "details": {
            "applications": "• Beverage & Smoothie Mixes\n• Health Supplements & Nutraceuticals\n• Bakery & Confectionery Products\n• Dairy Products & Ice Cream\n• Instant Food Mixes\n• Fruit-Based Desserts\n• Breakfast Cereals\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Northeast India",
          "availableForms": [
                                   "Spray-Dried Fine Powder",
                                   "Freeze-Dried Powder (Available on Request)",
                                   "Custom Mesh Sizes (on Request)"
                               ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags with Food-Grade Poly Liner • Aluminum Foil Vacuum Packs for Bulk Export • Customized Bulk & Retail Packaging Available.",
          "purity": "100% Pure Pineapple Fruit Powder • No Artificial Colors • No Preservatives • No Added Sugar",
          "grade": "Premium Food & Beverage Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-papaya",
        "name": "Papaya Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.papayaPowder
        ],
        "description": "Premium-quality dehydrated papaya powder made from carefully selected, ripe papaya. The fruit is hygienically processed and finely powdered to retain its natural colour, flavour, aroma, and nutritional properties.",
        "details": {
            "applications": "• Food & beverage formulations\n• Smoothies, shakes & health drinks\n• Bakery & Confectionery Products\n• Desserts and instant mixes\n• Sauces, dressings & seasoning blends\n• Nutraceutical and functional-food formulations\n• Food ingredient and industrial applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                   "Fine Powder",
                                   "Customized particle size available on request ",
                                   "Bulk / private-label packing available"
                               ],
          "packaging": "• 100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs •  Food-grade laminated pouches  ",
          "purity": "100% Pure Papaya Powder • No Artificial Colors or Preservatives",
          "grade": "Food Grade / Export Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-guava",
        "name": "Guava Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.guavaPowder
        ],
        "description": "Our Guava Powder is produced from carefully selected, ripe guavas that are hygienically processed and spray-dried to preserve their natural tropical flavor, aroma, color, and nutritional value. Rich in natural Vitamin C and dietary fiber, it is widely used in food, beverage, nutraceutical, dairy, and confectionery applications.",
        "details": {
            "applications": "• Beverage & Smoothie Mixes\n• Health Supplements & Nutraceuticals\n• Bakery & Confectionery Products\n• Dairy Products & Ice Cream\n• Instant Food Mixes\n• Fruit-Based Desserts\n• Breakfast Cereals\n• Functional Foods & Food Processing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Maharashtra & Andhra Pradesh)",
          "availableForms": [
              "Spray-Dried Fine Powder",
               "Freeze-Dried Powder (Available on Request)",
               "Custom Mesh Sizes (on Request)"
               ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags with Food-Grade Poly Liner • Aluminum Foil Vacuum Packs for Bulk Export • Customized Bulk & Retail",
          "purity": "100% Pure Guava Fruit Powder • No Artificial Colors • No Preservatives • No Added Sugar",
          "grade": "Premium Food & Beverage Grade",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-pomegranate",
        "name": "Pomegranate Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.pomegranatePowder
        ],
        "description": "Our Pomegranate Powder is produced from carefully selected, ripe pomegranates that are hygienically processed and spray-dried to preserve their natural ruby-red color, fruity flavor, and nutritional value. Rich in natural antioxidants, polyphenols, and Vitamin C, it is widely used in the food, beverage, nutraceutical, and functional food industries.",
        "details": {
            "applications": "• Beverage & Smoothie Mixes\n• Health Supplements & Nutraceuticals\n• Bakery & Confectionery Products\n• Dairy Products & Ice Cream\n• Instant Food Mixes\n• Fruit-Based Desserts\n• Breakfast Cereals\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Maharashtra & Gujarat)",
           "availableForms": [
                        "Spray-Dried Fine Powder",
                         "Freeze-Dried Powder (Available on Request)",
                         "Custom Mesh Sizes (on Request)"
                         ],
          "packaging": "25 kg Multi-layer Kraft Paper Bags with Food-Grade Poly Liner • Aluminum Foil Vacuum Packs for Bulk Export • Customized Bulk & Retail",
          "purity": "100% Pure Pomegranate Fruit Powder • No Artificial Colors • No Preservatives • No Added Sugar",
          "grade": "Premium Food & Beverage Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-amla",
        "name": "Amla Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.amlaPowder
        ],
        "description": "Premium-quality dehydrated Amla Powder (Indian Gooseberry Powder) made from carefully selected fresh amla fruits. The fruit is hygienically processed and finely powdered to retain its natural colour, characteristic tangy flavour, aroma, and valuable nutritional properties.",
        "details": {
            "applications": "• Health drinks & wellness beverages\n• Smoothies and functional drink mixes\n• Ayurvedic & herbal formulations\n• Nutraceutical products\n• Dietary supplements\n• Food & nutrition products\n• Herbal teas and instant mixes\n• Personal-care and cosmetic formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
           "availableForms": [
                        "Fine Amla Powder",
                         "Customized particle size available ",
                         "Bulk and private-label supply available "
                         ],
          "packaging": "100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs • Food-grade laminated pouches • Kraft paper bags with food-grade inner liner",
          "purity": "100% Amla Powder — free from artificial colours, flavours and preservatives",
          "grade": "Food Grade / Export Grade (Customized specifications available)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-strawberry",
        "name": "Strawberry Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.strawberryPowder
        ],
        "description": "Premium-quality dehydrated Strawberry Powder made from carefully selected fresh strawberries. The fruit is hygienically processed and finely powdered to retain its characteristic strawberry flavour, aroma, colour, and natural fruity taste.",
        "details": {
            "applications": "• Smoothies, shakes & health drinks\n• Instant beverage mixes\n• Bakery & confectionery products\n• Cakes, biscuits & desserts\n• Ice creams, yoghurt & dairy products\n• Chocolate and dessert preparations\n• Cereal, granola & nutrition products\n• Sauces, fillings & fruit preparations\n• Nutraceutical & functional-food formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Mahabaleshwar Orchards)",
           "availableForms": [
                        "Fine Strawberry Powder",
                         "Customized particle size available",
                         "Bulk and private-label supply available "
                         ],
          "packaging": "100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs • Food-grade laminated pouches • Kraft paper bags with food-grade inner liner",
          "purity": "100% Strawberry Powder — free from artificial colours, flavours and preservatives",
          "grade": "Food Grade / Export Grade (Customized specifications available)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-apple",
        "name": "Apple Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.applePowder
        ],
        "description": "Premium-quality dehydrated Apple Powder made from carefully selected fresh apples. The apples are hygienically processed and finely powdered to retain their natural fruity flavour, aroma, and characteristic apple taste. Suitable for food, beverage, bakery and nutraceutical applications. ",
        "details": {
            "applications": "• Smoothies, shakes & health drinks\n• Bakery & confectionery products\n• Desserts, ice creams & yoghurt\n• Instant beverage mixes\n• Cereal, granola & nutrition products\n• Nutraceutical and functional-food formulations\n• Food flavouring and ingredient blends Sauces, fillings & fruit preparations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Himachal Pradesh & Kashmir)",
           "availableForms": [
                        "Fine Apple Powder",
                         "Customized particle size available ",
                         "Bulk and private-label supply available "
                         ],
          "packaging": "100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs • Food-grade laminated pouches • Kraft paper bags with food-grade inner liner",
          "purity": "100% Pure Apple Fruit Powder",
          "grade": "Food Grade / Export Grade (Customized specifications available according to buyer requirements).",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-orange",
        "name": "Orange Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.orangePowder
        ],
        "description": "Premium-quality dehydrated Orange Powder made from carefully selected fresh oranges. The fruit is hygienically processed and finely powdered to retain its natural citrus flavour, aroma, and characteristic orange taste. Suitable for food, beverage, bakery, confectionery and nutraceutical applications.",
        "details": {
            "applications": "• Smoothies, shakes & health drinks\n• Bakery & confectionery products\n• Instant beverage mixes\n• Cakes, biscuits & desserts\n• Ice creams, yoghurt & dairy products\n• Sauces, dressings & fruit preparations\n• Flavouring and seasoning blends\n• Nutraceutical & functional-food formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Nagpur Orchards)",
           "availableForms": [
                        "Fine Orange Powder ",
                         "Customized particle size available ",
                         "Bulk and private-label supply available"
                         ],
          "packaging": "100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs • Food-grade laminated pouches • Kraft paper bags with food-grade inner liner",
          "purity": "100% Orange Powder — free from artificial colours, flavours and preservatives",
          "grade": "Food Grade / Export Grade (Customized specifications available)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-lemon",
        "name": "Lemon Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.lemonPowder
        ],
        "description": "Premium-quality dehydrated Lemon Powder made from carefully selected fresh lemons. The lemons are hygienically processed and finely powdered to retain their characteristic citrus flavour, aroma, and natural tanginess. Suitable for food, beverage, bakery, seasoning and nutraceutical applications.",
        "details": {
            "applications": "• Instant beverages, juices & drink mixes\n• Lemonade and wellness drinks\n• Desserts, ice creams & yoghurt\n• Sauces, dressings & marinades\n• Seasoning and spice blends\n• Snacks and savoury food preparations\n• Bakery & confectionery products"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
           "availableForms": [
                        "Fine Lemon Powder ",
                         "Customized particle size available ",
                         "Bulk and private-label supply available "
                         ],
          "packaging": "100 g / 250 g / 500 g / 1 kg retail pouches • 5 kg / 10 kg / 20 kg / 25 kg bulk packs • Food-grade laminated pouches • Kraft paper bags with food-grade inner liner",
          "purity": "100% Orange Powder — free from artificial colours, flavours and preservatives",
          "grade": "Food Grade / Export Grade (Customized specifications available)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-dragonfruit",
        "name": "Dragon Fruit Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.dragonFruitPowder
        ],
        "description": "Dragon Fruit Powder is a premium natural fruit powder produced from carefully selected ripe dragon fruits. It is processed using suitable dehydration technology to help retain its natural colour, flavour and nutritional characteristics. Ideal for food, beverage and wellness applications.",
        "details": {
          "applications": "• Smoothies\n• Beverages\n• Health drinks\n• Bakery products\n• Desserts\n• Ice creams\n• Confectionery\n• Nutraceutical formulations\n• Natural food products"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Fine Powder",
            "Freeze-Dried Powder"
          ],
          "packaging": "1 kg • 5 kg • 10 kg • 25 kg food-grade packaging • Customized packaging options available for bulk and export requirements.",
          "purity": "100% Pure Dragon Fruit Powder – No Artificial Colours, Flavours or Preservatives.",
          "grade": "Food Grade / Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-jackfruit",
        "name": "Jackfruit Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.jackfruitPowder
        ],
        "description": "Premium-quality jackfruit powder made from carefully selected, naturally ripened jackfruit. The fruit is cleaned, processed, and finely dried to retain its natural flavour, aroma, colour, and nutritional properties. Suitable for food, beverage, bakery, and wellness applications.",
        "details": {
          "applications": "• Bakery & confectionery products\n• Smoothies, shakes & beverages\n• Desserts, ice creams & puddings\n• Health & nutrition mixes\n• Instant food preparations"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected jackfruit-growing regions and processed under hygienic conditions.",
          "availableForms": [
            "Fine Powder",
            "Freeze-Dried Powder"
          ],
          "packaging": "500 g • 1 kg • 5 kg • 25 kg • Customized bulk packaging • Packed in food-grade moisture-resistant packaging suitable for domestic and export transportation.",
          "purity": "100% pure jackfruit powder •  No artificial colours • No added preservatives • No added flavouring. ",
          "grade": "Food Grade • Export Grade • Fine Powder • Suitable for B2B and industrial food applications.",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-chikoo",
        "name": "Chikoo Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.chikooPowder
        ],
        "description": "Premium-quality Chikoo (Sapota) Powder made from carefully selected, naturally ripened chikoo fruits. The fruit is cleaned, processed and dehydrated under controlled conditions to retain its characteristic natural sweetness, aroma and nutritional properties. Suitable for food, beverage and wellness applications.",
        "details": {
          "applications": "• Smoothies\n• Milkshakes\n• Beverages\n• Desserts\n• Ice creams\n• Bakery products\n• Confectionery\n• Nutrition mixes\n• Instant food preparations\n• Natural flavouring applications"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected chikoo-growing regions and processed under controlled hygienic conditions.",
          "availableForms": [
            "Fine Powder",
            "Freeze-Dried Powder"
          ],
          "packaging": "500 g • 1 kg • 5 kg • 10 kg • 25 kg • Customized bulk packaging.",
          "purity": "100% pure chikoo powder • free from artificial colours and flavours.",
          "grade": "Food Grade • Premium Grade • Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-coconut",
        "name": "Coconut Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.coconutPowder
        ],
        "description": "Premium-quality Coconut Powder made from carefully selected, mature coconuts. The coconut is hygienically processed and finely powdered to retain its natural taste, aroma, texture, and nutritional properties.",
        "details": {
          "applications": "• Bakery products\n• Confectionery\n• Sweets\n• Desserts\n• Chocolates\n• Snack foods\n• Curries\n• Gravies\n• Coconut-based beverages\n• Instant mixes\n• Food preparations"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected coconut-growing regions with reliable agricultural and processing practices.",
          "availableForms": [
            "Fine Powder",
            "Custom particle size available as per buyer requirements"
          ],
          "packaging": "25 kg food-grade PP bags with inner liner • Customized packaging • Private-label packing • Bulk packaging can be arranged as per buyer requirements",
          "purity": "100% Coconut • No artificial colours • No added preservatives • Hygienically processed • Suitable for food applications.",
          "grade": "Food Grade • Export Quality • Fine Powder • Custom particle size available as per buyer requirements.",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-fig",
        "name": "Fig Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.figPowder
        ],
        "description": "Premium-quality Fig Powder made from carefully selected, naturally dried figs. It offers the natural sweetness, nutritional value, and characteristic flavor of figs in a convenient powdered form.",
        "details": {
          "applications": "• Smoothies\n• Milkshakes\n• Bakery products\n• Confectionery\n• Desserts\n• Health drinks\n• Nutrition blends\n• Baby-food formulations\n• Wellness products"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected agricultural regions and processed under hygienic conditions.",
          "availableForms": [
            "Fine Powder",
            "Freeze-Dried Powder"
          ],
          "packaging": "• 25 kg food-grade PP/HDPE bags with inner liner for bulk supply • Customized packaging options available as per buyer requirements.",
          "purity": "• 100% Pure Fig Powder • No Added Sugar • No Artificial Colour • No Artificial Flavour • No Preservatives",
          "grade": "Food Grade • Export Quality • Hygienically Processed • Suitable for Industrial & Retail Applications",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "fp-watermelon",
        "name": "Watermelon Powder",
        "category": "Dehydrated Fruit Powders",
        "images": [
          IMAGES.exportProducts.watermelonPowder
        ],
        "description": "100% natural watermelon powder made from carefully selected, ripe watermelons and processed under controlled drying conditions to preserve its natural flavour, colour, and nutritional properties. Suitable for food, beverage, wellness, and cosmetic applications.",
        "details": {
          "applications": "• Smoothies\n• Beverages\n• Instant drink mixes\n• Desserts\n• Bakery products\n• Nutraceutical formulations\n• Flavour blends\n• Cosmetic/skin-care formulations"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from quality watermelon-growing regions and processed under hygienic conditions.",
          "availableForms": [
            "Fine Powder",
            "Freeze-Dried Powder"
          ],
          "packaging": "500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg food-grade packaging • Customized packaging available as per buyer requirements.",
          "purity": "100% watermelon powder, free from artificial colours, preservatives, and unnecessary additives • Typical specification: ≥99% purity, subject to batch/laboratory analysis.",
          "grade": "Food Grade • Export Quality • Hygienically Processed • Suitable for Industrial & Retail Applications",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
    ]
  },
  {
    "id": "moringa",
    "title": "Moringa Products",
    "description": "Moringa Products Supplier & Exporter India\n\nDharaaveda Global Exim supplies export-quality moringa leaf powder, flakes, tea, seeds, seed powder and moringa seed oil for global B2B buyers across food, beverage, nutraceutical, dietary supplement, and personal care industries.",
    "image": IMAGES.exportCategories.moringa,
    "products": [
      {
        "id": "m-leaf-powder",
        "name": "Moringa Leaf Powder",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaPowder
        ],
        "description": "Finely processed powder made from carefully selected moringa leaves. Suitable for food, wellness, nutraceutical and herbal applications.",
        "details": {
            "applications": "• Smoothies & health drinks\n• Nutritional beverages\n• Dietary and wellness products\n• Functional food formulations\n• Soups, sauces & seasoning blends\n• Nutraceutical products\n• Herbal formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Fine Powder",
                                   "Customized mesh size ",
                                   "Bulk Powder"
                                   ],
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20 kg & 25 kg",
          "purity": "100% Moringa Leaf Powder",
          "grade": "Food Grade / Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "m-leaf-flakes",
        "name": "Moringa Leaf Flakes",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaLeaves
        ],
        "description": "Carefully dried moringa leaves processed into flakes while maintaining their natural green colour and characteristic aroma.",
        "details": {
            "applications": "• Herbal teas\n• Soups\n• Seasonings\n• Food preparations\n• Nutritional products\n• Nutraceutical products\n• Ingredient blends"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Dried flakes ",
                                   "Customized cut size"
                                   ],
          "packaging": "100 g–25 kg",
          "purity": "100% Pure Moringa",
          "grade": "Food Grade / Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "m-tea",
        "name": "Moringa Tea",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaTea
        ],
        "description": "Premium dried moringa leaves selected and processed for use as a natural herbal tea ingredient.",
        "details": {
            "applications": "• Herbal tea blends\n• Wellness beverages\n• Tea bags\n• Loose-leaf tea\n• Functional beverage formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Loose leaves",
                                   "Cut & sifted",
                                   " Tea-bag grade"
                                   ],
          "packaging": "Retail pouches, tea bags & bulk packs",
          "purity": "100% Pure Moringa",
          "grade": "Food Grade / Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "m-seed-powder",
        "name": "Moringa Seed Powder / Murungai Vidhai Powder l Drumstick Seed Powder",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaExtract
        ],
        "description": "Finely processed moringa seed powder suitable for selected food, nutraceutical and industrial applications, subject to buyer specifications.",
        "details": {
            "applications": "• Nutraceutical formulations\n• Functional food applications\n• Research & ingredient applications\n• Selected herbal formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Fine Powder",
                                   "Customized specifications"
                                   ],
          "packaging": "1 kg, 5 kg, 10 kg & 25 kg",
          "purity": "100% Pure Moringa",
          "grade": "Food / Industrial Grade depending on application",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "m-seeds",
        "name": "Moringa Seeds",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaSeeds
        ],
        "description": "Carefully selected and cleaned moringa seeds sourced from India for food, agricultural, processing and other specified applications.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Whole seeds ",
                                   "Cleaned & graded seeds"
                                   ],
          "packaging": "1 kg, 5 kg, 10 kg, 25 kg & customized bulk packing",
          "purity": "100% Pure Moringa",
          "grade": "Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "m-seed-oil",
        "name": "Moringa Seed Oil",
        "category": "Moringa Products",
        "images": [
          IMAGES.exportProducts.moringaSeedOil
        ],
        "description": "Premium oil obtained from moringa seeds, suitable for cosmetic, personal-care, wellness and industrial applications depending on specification.",
         "details": {
            "applications": "• Cosmetics\n• Skin-care formulations\n• Hair-care products\n• Personal-care products\n• Natural oil formulations"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                  "Filtered oil ",
                                   " Refined/processed grades as specified"
                                   ],
          "packaging": "100 ml, 250 ml, 500 ml, 1 L, 5 L & bulk",
          "purity": "100% Pure Moringa",
          "grade": "Cosmetic / Industrial Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
          "id": "m-leaf-extract",
          "name": "Moringa Leaf Extract",
          "category": "Moringa Products",
          "images": [
                IMAGES.exportProducts.MoringaLeafExtract
          ],
           "description": "Concentrated moringa leaf extract designed for use as an ingredient in nutraceutical, herbal and functional-food formulations.",
           "details": {
               "applications": "• Nutraceuticals\n• Dietary supplements\n• Functional foods\n• Herbal formulations\n• Beverage formulations"
             },
           "pricing": "Contact Trade Desk",
           "specifications": {
                "origin": "India",
                "availableForms": [
                                        " Powder extract ",
                                         "Customized extract specifications"
                                         ],
                "packaging": "1 kg, 5 kg, 10 kg & 25 kg",
                "purity": "100% Pure Moringa",
                "grade": "Food / Nutraceutical Grade as specified",
                "minOrder": "200 Kilograms"
              },
              "createdAt": "2026-05-31"
      },
      {
          "id": "m-capsules",
          "name": "Moringa Capsules / Tablets",
          "category": "Moringa Products",
          "images": [
                IMAGES.exportProducts.MoringaCapsulesTablets
          ],
          "description": "Moringa-based dietary supplement products manufactured according to applicable specifications and regulatory requirements.",
            "details": {
               "applications": "• Dietary supplements\n• Wellness products\n• Private-label nutraceutical brands"
             },
           "pricing": "Contact Trade Desk",
           "specifications": {
                "origin": "India",
                "availableForms": [
                                        "Capsules ",
                                         "Tablets"
                                         ],
                "packaging": "Bottles, jars, cartons ",
                "purity": "100% Pure Moringa",
                "grade": "Dietary Supplement Grade",
                "minOrder": "100 Kilograms"
              },
              "createdAt": "2026-05-31"
      }
    ]
  },
  {
    "id": "seeds",
    "title": "Seeds Category",
    "description": "Dharaaveda Global Exim offers premium export-quality seeds sourced directly from trusted farms across India. Every batch is meticulously cleaned, graded, and packed under stringent hygiene standards, ensuring high purity, freshness, and compliance with international export and APEDA quality requirements.",
    "image": IMAGES.exportCategories.seeds,
    "products": [
      {
        "id": "sd-flax",
        "name": "Flax Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.flaxSeeds
        ],
        "description": "Flax Seeds (Linum usitatissimum), commonly known as Alsi Seeds, are premium oilseeds valued for their rich nutritional profile. Naturally high in Omega-3 fatty acids (ALA), dietary fiber, protein, and essential minerals, flax seeds are widely used in the food, nutraceutical, animal feed, and oil extraction industries. Our flax seeds are carefully cleaned, graded, and hygienically packed to meet domestic and international quality standards.",
        "details": {
            "applications": "• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Health Foods & Nutritional Supplements\n• Smoothies & Functional Beverages\n• Cold-Pressed Oil Extraction\n• Animal & Poultry Feed\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  "Whole Flax Seeds  ",
                                                   "Brown Flax Seeds ",
                                                   "Golden Flax Seeds ",
                                                   "Flax Seed Powder ",
                                                   "Cold-Pressed Flax Seed Oil"
                                                   ],
          "packaging": "25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Food-Grade Paper Bags • Jumbo Bags (500–1000 kg) • Customized Private Label & Export Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% (or as per buyer requirement)",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-pumpkin",
        "name": "Pumpkin Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.pumpkinSeeds
        ],
        "description": "Pumpkin Seeds, commonly known as Pepitas, are nutrient-rich edible seeds obtained from premium-quality pumpkins. Naturally packed with protein, healthy fats, dietary fiber, magnesium, zinc, iron, and antioxidants, they are widely used in the food, nutraceutical, bakery, and snack industries. Our pumpkin seeds are carefully cleaned, graded, and hygienically packed to ensure superior quality, freshness, and export compliance.",
        "details": {
            "applications": "• Healthy Snacks\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Trail Mixes & Energy Bars\n• Nutraceutical & Dietary Supplements\n• Salads & Food Garnishing\n• Oil Extraction\n• Food Processing Industry",
            "keyFeatures": "• Rich in Protein & Healthy Fats\n• Excellent Source of Magnesium & Zinc\n• High Purity and Uniform Size\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  "",
                                                   ""
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-sesame",
        "name": "Sesame Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.sesameSeeds
        ],
        "description": "Sesame Seeds (Sesamum indicum) are one of the oldest and most valuable oilseeds, renowned for their rich nutritional profile and exceptional oil content. Naturally abundant in protein, healthy fats, calcium, iron, magnesium, antioxidants, and dietary fiber, sesame seeds are extensively used in the food, bakery, confectionery, oil extraction, and nutraceutical industries. Our sesame seeds are sourced from trusted farms, carefully cleaned, machine sorted, and hygienically packed to meet premium domestic and international export standards.",
        "details": {
            "applications": "• Bakery & Confectionery\n• Tahini & Sesame Paste Production\n• Edible Oil Extraction\n• Snacks & Energy Bars\n• Breakfast Cereals & Granola\n• Spice Blends & Food Garnishing\n• Health Foods & Nutraceuticals\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  " Natural White Sesame Seeds ",
                                                   "Hulled White Sesame Seeds ",
                                                   "Black Sesame Seeds ",
                                                   "Brown Sesame Seeds",
                                                   "Roasted Sesame Seeds",
                                                   "Sesame Seed Oil "
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% •Admixture: Maximum 1%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-sunflower",
        "name": "Sunflower Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.sunflowerSeeds
        ],
        "description": "Sunflower Seeds (Helianthus annuus) are premium edible oilseeds known for their excellent nutritional value and pleasant nutty flavor. Rich in protein, healthy unsaturated fats, vitamin E, dietary fiber, magnesium, selenium, and antioxidants, sunflower seeds are widely used in the food, bakery, snack, confectionery, and oil extraction industries. Our sunflower seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to ensure superior quality and compliance with international export standards.",
        "details": {
            "applications": "• Healthy Snacks\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Trail Mixes & Energy Bars\n• Salads & Food Garnishing\n• Edible Oil Extraction\n• Health Foods & Nutraceuticals\n• Food Processing Industry\n• Animal & Bird Feed",
            "keyFeatures": "• Rich in Vitamin E & Healthy Fats\n• High Protein & Dietary Fiber\n• Uniform Size and Premium Quality\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  " Whole Sunflower Seeds (With Shell) ",
                                                   "Hulled Sunflower Seed Kernels",
                                                   "Raw Sunflower Seeds",
                                                   "Roasted Sunflower Seeds ",
                                                   "Salted Sunflower Seeds",
                                                   "Sunflower Seed Oil "
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% •Admixture: Maximum 1% ",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-chia",
        "name": "Chia Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.chiaSeeds
        ],
        "description": "Chia Seeds (Salvia hispanica) are premium nutrient-dense superfoods renowned for their exceptional health benefits. Naturally rich in Omega-3 fatty acids, dietary fiber, plant-based protein, calcium, magnesium, phosphorus, and antioxidants, chia seeds are widely used in the food, beverage, nutraceutical, and health industries. Our chia seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to meet premium domestic and international export standards.",
        "details": {
            "applications": "• Health Foods & Superfoods\n• Smoothies & Functional Beverages\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Energy Bars & Trail Mixes\n• Puddings & Desserts\n• Nutraceutical & Dietary Supplements\n• Food Processing Industry",
            "keyFeatures": "• Rich in Omega-3 Fatty Acids\n• Excellent Source of Dietary Fiber & Plant Protein\n• High in Calcium, Magnesium & Antioxidants\n• Naturally Gluten-Free\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  "Whole Black Chia Seeds  ",
                                                   "Whole White Chia Seeds",
                                                   "Organic Chia Seeds ",
                                                   "Chia Seed Powder ",
                                                   "Chia Seed Oil "
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% •Admixture: Maximum 1%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-watermelon",
        "name": "Watermelon Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.watermelonSeeds
        ],
        "description": "Watermelon Seeds (Citrullus lanatus) are highly nutritious edible seeds valued for their rich content of protein, healthy fats, essential minerals, and antioxidants. They are widely used in the food, bakery, confectionery, snack, and nutraceutical industries. Our premium watermelon seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to ensure superior quality, freshness, and compliance with international export standards.",
        "details": {
            "applications": "• Healthy Snacks\n• Bakery & Confectionery\n• Trail Mixes & Energy Bars\n• Breakfast Cereals & Granola\n• Salads & Food Garnishing\n• Traditional Indian Sweets & Desserts\n• Nutraceutical & Dietary Supplements\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  "Whole Watermelon Seeds (With Shell) ",
                                                   "Hulled Watermelon Seed Kernels ",
                                                   "Raw Watermelon Seeds ",
                                                   "Roasted Watermelon Seeds ",
                                                   "Salted Watermelon Seeds",
                                                   "Watermelon Seed Oil"
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% •Admixture: Maximum 1%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "sd-basil",
        "name": "Basil Seeds",
        "category": "Seeds Category",
        "images": [
          IMAGES.exportProducts.basilSeeds
        ],
        "description": "Basil Seeds (Ocimum basilicum), commonly known as Sabja Seeds or Sweet Basil Seeds, are highly valued for their cooling properties and impressive nutritional profile. Rich in dietary fiber, plant-based protein, antioxidants, calcium, iron, and essential minerals, basil seeds are widely used in beverages, desserts, health foods, and nutraceutical products. Our premium basil seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to meet the highest domestic and international export standards.",
         "details": {
            "applications": "• Health Drinks & Functional Beverages\n• Falooda & Traditional Desserts\n• Smoothies & Detox Drinks\n• Ice Cream & Yogurt Toppings\n• Bakery & Confectionery\n• Nutraceutical & Dietary Supplements\n• Weight Management Products\n• Food Processing Industry"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
            "availableForms": [
                                                  " Whole Basil Seeds (Sabja Seeds)  ",
                                                   "Black Sweet Basil Seeds ",
                                                   "Machine Cleaned Basil Seeds ",
                                                   "Sortex Cleaned Basil Seeds",
                                                   "Organic Basil Seeds ",
                                                   "Basil Seed Powder"
                                                   ],
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "• 99% – 99.99% • Moisture: Maximum 8% •Admixture: Maximum 1%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
    ]
  },
  {
    "id": "dehydrated_veg",
    "title": "Dehydrated Vegetables",
    "description": "Premium quality dehydrated vegetables sourced from trusted Indian suppliers, carefully processed to preserve natural flavour, colour and aroma. Suitable for food manufacturers, HoReCa, wholesalers and international distributors.",
    "image": IMAGES.exportCategories.dehydratedVeg,
    "products": [
      {
        "id": "dv-onion",
        "name": "Dehydrated Onion",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedOnion
        ],
        "description": "Premium-quality dehydrated onion processed from fresh, carefully selected onions. Dehydration helps retain the natural onion flavour and aroma while providing longer shelf life and easy storage.",
         "details": {
            "applications": "• Used extensively in food processing, instant foods, soups, sauces, gravies, seasoning blends, snacks, ready-to-eat meals, spice mixes, hotels, restaurants and industrial food manufacturing."
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected onion-growing regions",
          "availableForms": [
                                                            " Dehydrated Onion Flakes  ",
                                                             "Dehydrated Onion Chopped ",
                                                             "Dehydrated Onion Minced ",
                                                             "Dehydrated Onion Granules ",
                                                             "Dehydrated Onion Powder "
                                                             ],
          "packaging": "5 kg, 10 kg, 20 kg and 25 kg food-grade packaging or customized bulk packaging with inner liner for moisture protection",
          "purity": "100% Pure Onion • Retains natural flavour & aroma",
          "grade": "Food-grade, Export Quality • Customized cuts & specifications available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-garlic",
        "name": "Dehydrated Garlic",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedGarlic
        ],
        "description": "Dehydrated Garlic is produced from fresh, carefully selected garlic cloves that are cleaned, sliced, dried, and processed under hygienic conditions. It retains the characteristic aroma, flavor, and nutritional benefits of fresh garlic while offering a longer shelf life and convenient storage.",
        "details": {
            "applications": "• Food Processing Industry\n• Seasoning & Spice Blends\n• Ready-to-Eat & Ready-to-Cook Foods\n• Soups & Sauces\n• Snacks & Namkeen\n• Instant Noodles & Pasta\n• Meat & Poultry Products\n• Pickles & Marinades\n• Restaurant & Catering Services"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Sourced from Gujarat, Madhya Pradesh, and Rajasthan)",
          "availableForms": [
                                                            "Garlic Flakes ",
                                                             "Garlic Minced",
                                                             "Garlic Granules ",
                                                             "Garlic Powder ",
                                                             "Garlic Chopped  ",
                                                             "Garlic Kibbled"
                                                             ],
          "packaging": "10 kg Food Grade Poly Bags • 20 kg Corrugated Boxes • 25 kg HDPE Bags • 25 kg Paper Bags with Inner Liner • Private Label & Bulk Packaging Available",
          "purity": "100% Pure Garlic • Hygienically Processed",
          "grade": "Premium Export Grade • A Grade • Standard Grade • Customized Specifications Available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-ginger",
        "name": "Dehydrated Ginger",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedGinger
        ],
        "description": "Premium-quality dehydrated ginger prepared from carefully selected fresh ginger. It is hygienically processed and dried to preserve its natural aroma, flavour, colour, and functional properties. Suitable for food manufacturers, spice blenders, seasoning companies, and export markets.",
        "details": {
            "applications": "• Spice blends and masala manufacturing\n• Ginger tea and instant beverages\n• Soups, sauces & gravies\n• Bakery & confectionery products\n• Ready-to-eat and ready-to-cook foods\n• Seasonings and snack applications\n• Herbal and wellness formulations\n• Food processing & industrial applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected ginger-growing regions and processed under hygienic conditions",
          "availableForms": [
                                                            "Ginger Powder  ",
                                                             "Ginger Flakes ",
                                                             "Ginger Granules ",
                                                             "Ginger Slices ",
                                                             "Ginger Chopped/Cut "
                                                             ],
          "packaging": "1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Customized private-label packaging available",
          "purity": "Uniform colour, aroma & flavour • Low-moisture dehydrated product",
          "grade": " •Premium Export Grade • Food Grade • Lab testing and export documentation available on request",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-tomato",
        "name": "Dehydrated Tomato",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedTomato
        ],
        "description": "Premium-quality tomatoes carefully selected, washed, sliced, and dehydrated under controlled conditions to retain their natural colour, flavour, aroma, and nutritional value.",
        "details": {
            "applications": "• Used in soups, sauces, gravies, instant foods, pizza toppings, pasta, seasoning blends, ready-to-eat meals, snacks, spice mixes, and food-processing applications.",
            "shelfLifeStorage": "• Shelf Life: Typically 12–18 months when stored in a cool, dry place in sealed packaging.\n• Storage: Store in a cool, dry place away from direct sunlight and moisture."
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                                            " Tomato Flakes ",
                                                             " Tomato Slices",
                                                             " Tomato Granules",
                                                             "Tomato Powder,",
                                                             "Tomato Chunks "
                                                             ],
          "packaging": "10 kg / 20 kg / 25 kg bulk food-grade bags or cartons with inner liner • Customized packaging available",
          "purity": "100% Pure Tomato • Retains natural colour, flavour, aroma & nutrition",
          "grade": "Food Grade / Export Grade (Customized specifications available as per buyer requirement)",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-carrot",
        "name": "Dehydrated Carrot",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedCarrot
        ],
        "description": "Dehydrated Carrot is prepared from fresh, carefully selected carrots that are washed, sorted, cut, and gently dehydrated to reduce moisture while preserving their natural color, flavor, and nutritional properties. It offers convenient storage, longer shelf life, and consistent quality for food processing and culinary applications.",
        "details": {
            "applications": "• Soups, sauces & gravies\n• Ready-to-eat and instant foods\n• Seasoning & spice blends\n• Noodles, pasta & instant meals\n• Snacks and savory products\n• Bakery & savory bakery products\n• Baby food and nutritional mixes\n• Food-service and industrial food processing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
                                                            " Carrot Flakes  ",
                                                             "Carrot Granules ",
                                                             "Carrot Powder  ",
                                                             "Carrot Slices ",
                                                             "Carrot Dices "
                                                             ],
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20–25 kg bulk packaging • Customized export packaging available",
          "purity": "Gently Dehydrated • Preserves Natural Color & Flavor",
          "grade": "Premium Food Grade • Standard Food Grade • Industrial Food Grade • Customized specifications available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-beetroot",
        "name": "Dehydrated Beetroot",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedBeetroot
        ],
        "description": "Dehydrated Beetroot is prepared from fresh, carefully selected beetroot that is cleaned, sliced, and dehydrated under controlled conditions to reduce moisture while preserving its natural colour, flavour, aroma, and nutritional properties. It offers a convenient, shelf-stable alternative to fresh beetroot.",
        "details": {
            "applications": "• Food & beverage manufacturing\n• Soups, sauces & gravies\n• Bakery & confectionery products\n• Smoothies, juices & health drinks\n• Seasoning and spice blends\n• Natural food colouring\n• Instant food preparations\n• Snack and ready-to-eat products\n• Nutraceutical and functional food applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected beetroot-growing regions and processed under controlled hygienic conditions",
          "availableForms": [
                                                            " Beetroot Flakes  ",
                                                             "Beetroot Powder ",
                                                             "Beetroot Granules ",
                                                             "Beetroot Slices ",
                                                             "Beetroot Dice  ",
                                                             ],
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Bulk export packaging: Food-grade inner liner with PP/HDPE outer",
          "purity": "Controlled Hygienic Processing • Retains Natural Colour & Aroma",
          "grade": "Food Grade • Export Grade • Premium Grade available on request • Custom specifications available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-spinach",
        "name": "Dehydrated Spinach",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedSpinach
        ],
        "description": "Dehydrated Spinach is fresh spinach that is carefully washed, sorted, processed, and dehydrated to remove moisture while preserving its characteristic green colour, flavour, aroma, and nutritional value. It offers a convenient, shelf-stable alternative to fresh spinach and is suitable for food manufacturing and commercial applications.",
         "details": {
            "applications": "• Spinach Flakes\n• Spinach Granules\n• Spinach Powder\n• Spinach Chopped\n• Spinach Crushed",
            "storage": "• Store in a cool, dry place away from direct sunlight and moisture."
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected spinach-growing regions and processed under controlled hygienic conditions",
          "availableForms": [],
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Custom bulk packaging as per buyer requirement",
          "purity": "Characteristic Green Colour & Natural Flavor Preserved",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade • Customized specifications available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "dv-cabbage",
        "name": "Dehydrated Cabbage",
        "category": "Dehydrated Vegetables",
        "images": [
          IMAGES.exportProducts.dehydratedCabbage
        ],
        "description": "Dehydrated Cabbage is made from fresh, quality cabbage that is carefully cleaned, cut, and dehydrated to remove moisture while preserving its natural flavour, colour, and nutritional properties. It offers longer shelf life, easy storage, and convenient usage without refrigeration.",
        "details": {
            "applications": "• Instant soups & soup mixes\n• Noodles, pasta & ready-to-eat meals\n• Pickles and chutneys\n• Spice & seasoning blends\n• Snack seasonings\n• Sauces, gravies & curry mixes\n• Instant food products\n• Bakery & savoury products\n• Food-service and industrial food processing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected cabbage-growing regions and processed under controlled hygienic conditions",
          "availableForms": [
                                                            " Flakes",
                                                             "Granules ",
                                                             "Powder",
                                                             "Slices ",
                                                             "Dices"
                                                             ],
          "packaging": "5 kg, 10 kg, 20 kg, 25 kg, 50 kg • Customized packaging available on request",
          "purity": "Cleaned, Cut & Dehydrated • Preserves Natural Flavour & Colour",
          "grade": "Food Grade • Export Grade • Premium Grade • Industrial / Bulk Grade • Customized specifications available",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
    ]
  },
  {
    "id": "dehydrated_fruits",
    "title": "Dehydrated Fruits",
    "description": "Dharaaveda Global Exim offers carefully selected dehydrated fruits processed to retain their characteristic flavour, aroma, colour and convenience, with extended shelf life for food and beverage applications.",
    "image": IMAGES.exportCategories.dehydratedFruits,
    "products": [
      {
        "id": "df-banana",
        "name": "Banana Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.bananaSlices
        ],
        "description": "Dehydrated Banana is prepared from carefully selected ripe bananas and gently dehydrated to reduce moisture while retaining the natural banana flavour, aroma, colour, and nutritional characteristics. It is convenient, shelf-stable, and suitable for food manufacturing.",
        "details": {
            "applications": "• Breakfast cereals\n• Granola\n• Trail mixes\n• Bakery products\n• Confectionery\n• Snacks\n• Smoothies\n• Desserts\n• Baby food\n• Food-processing applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected banana-growing regions.",
          "availableForms": [
                                                                      "Slices ",
                                                                       "Chips",
                                                                       " Dices",
                                                                       " Pieces",
                                                                       " Flakes",
                                                                       "Powder"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-mango",
        "name": "Mango Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.mangoSlices
        ],
        "description": "Dehydrated Mango is prepared from carefully selected mangoes and dehydrated to create a convenient, shelf-stable ingredient while retaining the characteristic tropical mango flavour, aroma, and colour.",
        "details": {
            "applications": "• Snacks\n• Trail mixes\n• Cereals\n• Bakery products\n• Confectionery\n• Desserts\n• Smoothies\n• Beverages\n• Fruit preparations\n• Food-processing applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected mango-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Pieces  ",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Chunks"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-pineapple",
        "name": "Pineapple Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.pineappleSlices
        ],
        "description": "Dehydrated Pineapple is made from selected ripe pineapples and processed under controlled dehydration conditions to provide a convenient fruit ingredient with a characteristic tropical flavour and aroma.",
        "details": {
            "applications": "• Bakery\n• Confectionery\n• Cereals\n• Granola\n• Trail mixes\n• Desserts\n• Snacks\n• Beverages\n• Fruit blends\n• Yogurt products\n• Food manufacturing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected pineapple-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Chunks  ",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Pieces"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-apple",
        "name": "Apple Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.appleSlices
        ],
        "description": "Dehydrated Apple is produced from selected fresh apples that are cleaned, sliced, and carefully dehydrated to provide a convenient, shelf-stable fruit ingredient with a characteristic apple flavour and aroma.",
        "details": {
            "applications": "• Cereals\n• Granola\n• Bakery products\n• Confectionery\n• Snack mixes\n• Tea blends\n• Desserts\n• Fruit mixes\n• Sauces\n• Food-processing applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected apple-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Chunks",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Pieces"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-papaya",
        "name": "Papaya Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.papayaSlices
        ],
        "description": "Dehydrated Papaya is produced from selected papaya fruit and carefully dehydrated to reduce moisture while providing a convenient, shelf-stable fruit ingredient.",
        "details": {
            "applications": "• Bakery products\n• Confectionery\n• Fruit mixes\n• Cereals\n• Granola\n• Trail mixes\n• Desserts\n• Snacks\n• Beverages\n• Food manufacturing"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected papaya-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Chunks ",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Pieces",
                                                                       "Cubes"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-strawberry",
        "name": "Strawberry Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.strawberrySlices
        ],
        "description": "Dehydrated Strawberry is prepared from selected strawberries and carefully dehydrated to provide a convenient fruit ingredient with a characteristic strawberry flavour, aroma, and appearance.",
        "details": {
            "applications": "• Cereals\n• Granola\n• Bakery products\n• Confectionery\n• Chocolates\n• Desserts\n• Yogurt\n• Ice cream\n• Smoothies\n• Snack mixes\n• Beverage applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected strawberry-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Halves ",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Pieces",
                                                                       "Crushed"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "df-guava",
        "name": "Guava Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.guavaSlices
        ],
        "description": "Dehydrated Guava is prepared from selected guavas and carefully dehydrated to create a convenient, shelf-stable fruit ingredient with its characteristic guava flavour and aroma.",
         "details": {
            "applications": "• Snacks\n• Fruit mixes\n• Cereals\n• Granola\n• Bakery products\n• Confectionery\n• Beverages\n• Desserts\n• Smoothies\n• Food-processing applications"
          },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected guava-growing regions.",
          "availableForms": [
                                                                      " Flakes",
                                                                       "Chunks ",
                                                                       "Powder",
                                                                       "Slices ",
                                                                       "Dices",
                                                                       "Pieces"
                                                                       ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },

      {
          "id": "df-Orange",
          "name": "Orange Slices",
          "category": "Dehydrated Fruits",
          "images": [
                IMAGES.exportProducts.orangeSlices
          ],
          "description": "Dehydrated Orange is produced from selected oranges and carefully processed to provide a convenient, shelf-stable citrus ingredient with characteristic orange flavour and aroma.",
          "details": {
              "applications": "• Tea blends\n• Beverages\n• Bakery\n• Confectionery\n• Desserts\n• Cereals\n• Snack mixes\n• Garnishing\n• Sauces\n• Seasonings\n• Food-processing applications"
            },
          "pricing": "Contact Trade Desk",
          "specifications": {
          "origin": "India – sourced from selected citrus-growing regions.",
          "availableForms": [
                                                                            " Flakes",
                                                                             "Wheels",
                                                                             "Powder",
                                                                             "Slices ",
                                                                             "Zest ",
                                                                             "Pieces",
                                                                             "Peel"
                                                                             ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
      },
              "createdAt": "2026-05-31"
     },
      {
        "id": "df-Lemon",
        "name": "Lemon Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.LemonSlices
        ],
        "description": "Dehydrated Lemon is prepared from selected lemons and carefully dehydrated to provide a convenient citrus ingredient with characteristic lemon flavour and aroma.",
        "details": {
          "applications": "• Tea and infusion blends\n• Beverages\n• Bakery\n• Confectionery\n• Seasonings\n• Sauces\n• Marinades\n• Desserts\n• Garnishing\n• Food manufacturing"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected lemon-growing regions.",
          "availableForms": [
            "Slices",
            "Wheels",
            "Pieces",
            "Zest",
            "Peel",
            "Flakes",
            "Powder"
          ],
          "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
          "minOrder": "100 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
       {
         "id": "df-Watermelon",
         "name": "Watermelon Slices",
         "category": "Dehydrated Fruits",
         "images": [
           IMAGES.exportProducts.WatermelonSlices
         ],
         "description": "Dehydrated Watermelon is produced from selected watermelon and processed through controlled dehydration to provide a convenient fruit ingredient suitable for various food applications.",
         "details": {
           "applications": "• Fruit snacks\n• Trail mixes\n• Cereals\n• Granola\n• Confectionery\n• Bakery products\n• Desserts\n• Beverages\n• Fruit blends\n• Food-processing applications"
         },
         "pricing": "Contact Trade Desk",
         "specifications": {
           "origin": "India – sourced from selected watermelon-growing regions.",
           "availableForms": [
             "Slices",
             "Dices",
             "Cubes",
             "Pieces",
             "Flakes",
             "Powder"
           ],
           "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
           "purity": "No Added Sugar, Sulfites or Colorants",
           "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
           "minOrder": "100 Kilograms"
         },
         "createdAt": "2026-05-31"
       },
        {
          "id": "df-Jackfruit",
          "name": "Jackfruit Slices",
          "category": "Dehydrated Fruits",
          "images": [
            IMAGES.exportProducts.JackfruitSlices
          ],
          "description": "Dehydrated Jackfruit is prepared from selected jackfruit and carefully dehydrated to provide a convenient, shelf-stable fruit ingredient with its distinctive tropical flavour and aroma.",
          "details": {
            "applications": "• Snacks\n• Trail mixes\n• Cereals\n• Granola\n• Bakery products\n• Confectionery\n• Desserts\n• Fruit mixes\n• Beverages\n• Food manufacturing"
          },
          "pricing": "Contact Trade Desk",
          "specifications": {
            "origin": "India – sourced from selected jackfruit-growing regions.",
            "availableForms": [
              "Slices",
              "Chunks",
              "Pieces",
              "Dices",
              "Flakes",
              "Crushed",
              "Powder"
            ],
            "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
            "purity": "No Added Sugar, Sulfites or Colorants",
            "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
            "minOrder": "100 Kilograms"
          },
          "createdAt": "2026-05-31"
        },
         {
           "id": "df-Amla",
           "name": "Amla Slices",
           "category": "Dehydrated Fruits",
           "images": [
             IMAGES.exportProducts.AmlaSlices
           ],
           "description": "Dehydrated Amla, also known as Indian Gooseberry, is prepared from selected amla fruit and carefully dehydrated to provide a convenient, shelf-stable ingredient with its characteristic tart flavour.",
           "details": {
             "applications": "• Herbal products\n• Functional food formulations\n• Snacks\n• Confectionery\n• Beverages\n• Tea blends\n• Dietary food preparations\n• Fruit mixes\n• Food-processing applications"
           },
           "pricing": "Contact Trade Desk",
           "specifications": {
             "origin": "India – sourced from selected amla-growing regions.",
             "availableForms": [
               "Slices",
               "Pieces",
               "Dices",
               "Flakes",
               "Crushed",
               "Powder"
             ],
             "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
             "purity": "No Added Sugar, Sulfites or Colorants",
             "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
             "minOrder": "100 Kilograms"
           },
           "createdAt": "2026-05-31"
         },
         {
           "id": "df-Coconut",
           "name": "Dehydrated Coconut",
           "category": "Dehydrated Fruits",
           "images": [
             IMAGES.exportProducts.DehydratedCoconut
           ],
           "description": "Dehydrated Coconut is prepared from selected mature coconut and processed under controlled conditions to reduce moisture while maintaining its characteristic coconut flavour and aroma.",
           "details": {
             "applications": "• Bakery\n• Confectionery\n• Chocolates\n• Cereals\n• Granola\n• Desserts\n• Curries\n• Snack products\n• Coconut-based foods\n• Food manufacturing"
           },
           "pricing": "Contact Trade Desk",
           "specifications": {
             "origin": "India – sourced from selected coconut-growing regions.",
             "availableForms": [
               "Desiccated",
               "Flakes",
               "Chips",
               "Shreds",
               "Slices",
               "Dices",
               "Powder"
             ],
             "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
             "purity": "No Added Sugar, Sulfites or Colorants",
             "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
             "minOrder": "100 Kilograms"
           },
           "createdAt": "2026-05-31"
         },
         {
           "id": "df-Kiwi",
           "name": "Kiwi Slices",
           "category": "Dehydrated Fruits",
           "images": [
             IMAGES.exportProducts.KiwiSlices
           ],
           "description": "Dehydrated Kiwi is produced from selected kiwi fruit and carefully dehydrated to provide a convenient, shelf-stable ingredient with characteristic kiwi flavour and appearance.",
           "details": {
             "applications": "• Cereals\n• Granola\n• Trail mixes\n• Bakery products\n• Confectionery\n• Desserts\n• Yogurt\n• Ice cream\n• Smoothies\n• Snacks\n• Food-processing applications"
           },
           "pricing": "Contact Trade Desk",
           "specifications": {
             "origin": "India – sourced from selected kiwi-growing regions.",
             "availableForms": [
               "Slices",
               "Dices",
               "Pieces",
               "Chunks",
               "Flakes",
               "Crushed",
               "Powder"
             ],
             "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
             "purity": "No Added Sugar, Sulfites or Colorants",
             "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
             "minOrder": "100 Kilograms"
           },
           "createdAt": "2026-05-31"
         },
     {
       "id": "df-Pomegranate",
       "name": "Pomegranate Arils",
       "category": "Dehydrated Fruits",
       "images": [
         IMAGES.exportProducts.PomegranateArils
       ],
       "description": "Dehydrated Pomegranate is prepared from selected pomegranate fruit and carefully processed to provide a convenient, shelf-stable ingredient with characteristic pomegranate flavour and colour.",
       "details": {
         "applications": "• Cereals\n• Granola\n• Trail mixes\n• Bakery products\n• Confectionery\n• Desserts\n• Beverages\n• Tea blends\n• Snack products\n• Fruit preparations\n• Food manufacturing"
       },
       "pricing": "Contact Trade Desk",
       "specifications": {
         "origin": "India – sourced from selected pomegranate-growing regions.",
         "availableForms": [
           "Arils",
           "Seeds",
           "Pieces",
           "Flakes",
           "Crushed",
           "Powder"
         ],
         "packaging": "100 g • 250 g • 500 g • 1 kg • 5 kg • 10 kg • 20 kg • 25 kg • Customized bulk packaging",
         "purity": "No Added Sugar, Sulfites or Colorants",
         "grade": "Food Grade • Export Grade • Industrial/Commercial Grade",
         "minOrder": "100 Kilograms"
       },
       "createdAt": "2026-05-31"
     },

    ]
  },
  {
    "id": "panchgavya",
    "title": "Panchgavya & Gomay Products",
    "description": "Panchgavya & Gomay Products Supplier & Exporter India | UAE • USA • UK • Singapore • Malaysia\n\nDharaaveda Global Exim is a leading manufacturer & exporter of traditional Panchgavya & Gomay products including Cow Dung Manure, Bio-Enzyme, Organic Fertilizer, Panchgavya Compost, Gomay Idols, Gomay Diyas, Gomay Havan Logs, Havan Samagri, Panchgavya Havan Samagri, Gomay Havan Cups, Natural Dhoop, Panchgavya Dhoop, Gomay Sambrani Dhoop, Cow Dung Dhoop Sticks, Agarbatti, and Sambrani Cups. Custom packaging, bulk orders, and export-quality shipments supplied for international buyers and distributors.",
    "image": IMAGES.exportCategories.panchgavya,
    "products": [
      {
        "id": "pg-ganesh",
        "name": "Gomay Ganesh",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.GomayGanesh
        ],
        "description": "Gomay Ganesh is a traditionally handcrafted Ganesh idol made using cow dung (Gomay) and natural materials. It combines traditional Indian craftsmanship with an eco-conscious approach to festive celebrations.",
        "details": {
          "applications": "• Ganesh Chaturthi\n• Home puja and worship\n• Office and workplace décor\n• Festive occasions\n• Spiritual gifting\n• Eco-friendly celebrations",
          "benefits": "• Supports eco-conscious festive celebrations\n• Made using natural materials\n• Traditional handcrafted product\n• Suitable for gifting and devotional use\n• Designed as an alternative to conventional decorative idols"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "2 Inch",
            "3 Inch",
            "7 Inch",
            "Customized sizes and designs"
          ],
          "packaging": "Individual protective packaging • Gift boxes • Bulk packaging • Customized export packaging",
          "purity": "Natural • Eco-Friendly • Handmade",
          "grade": "Traditional Grade",
          "minOrder": "100 Units"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "pg-shreeyantra",
        "name": "Gomay Shree Yantra",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.GomayShreeYantra
        ],
        "description": "Gomay Shree Yantra is a traditionally crafted spiritual décor product made using Gomay and natural materials, inspired by Indian cultural and spiritual traditions.",
        "details": {
          "applications": "• Puja rooms\n• Home décor\n• Offices\n• Temples\n• Meditation spaces\n• Spiritual gifting",
          "benefits": "• Traditional spiritual décor\n• Natural-material craftsmanship\n• Suitable for puja and meditation spaces\n• Attractive cultural gifting option\n• Eco-conscious decorative choice"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Standard size",
            "Wall-mounted format",
            "Tabletop format",
            "Customized sizes and designs"
          ],
          "packaging": "Individual protective packaging • Gift box • Bulk packaging • Customized export packaging",
          "purity": "Natural • Eco-Friendly • Handmade",
          "grade": "Traditional Grade",
          "minOrder": "100 Units"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "pg-shubhlabh",
        "name": "Gomay Shubh Labh",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.GomayShubhLabh
        ],
        "description": "Gomay Shubh Labh is a traditional decorative product representing auspicious symbols associated with Indian festive and cultural traditions. It is handcrafted using Gomay and natural materials.",
        "details": {
          "applications": "• Home entrance decoration\n• Puja rooms\n• Shops\n• Offices\n• Diwali decoration\n• Festive gifting",
          "benefits": "• Traditional auspicious décor\n• Suitable for festive occasions\n• Natural-material craftsmanship\n• Suitable for gifting\n• Eco-conscious decorative option"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Shubh Labh set",
            "Wall hanging",
            "Door decoration",
            "Tabletop décor",
            "Customized designs"
          ],
          "packaging": "Individual packaging • Gift packaging • Sets • Bulk packaging • Customized packaging",
          "purity": "Natural • Eco-Friendly • Handmade",
          "grade": "Traditional Grade",
          "minOrder": "100 Sets"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "pg-mobilestand",
        "name": "Gomay Mobile Stand",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.GomayMobileStand
        ],
        "description": "Gomay Mobile Stand is an eco-conscious utility product crafted using Gomay and natural materials. It combines traditional craftsmanship with practical everyday use.",
        "details": {
          "applications": "• Mobile phone stand\n• Home use\n• Office desk\n• Workstation décor\n• Study table\n• Gifting",
          "benefits": "• Functional everyday product\n• Natural-material craftsmanship\n• Unique traditional design\n• Suitable for home and office use\n• Eco-conscious gifting option"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Standard mobile stand",
            "Horizontal design",
            "Vertical design",
            "Customized shapes and designs"
          ],
          "packaging": "Individual protective packaging • Gift packaging • Bulk packaging • Customized export packaging",
          "purity": "Natural • Eco-Friendly • Handmade",
          "grade": "Traditional Craft Grade",
          "minOrder": "100 Units"
        },
        "createdAt": "2026-05-31"
      },
     {
       "id": "pg-antiradiation",
       "name": "Gomay Anti-Radiation Chip",
       "category": "Panchgavya Products Catalogue",
       "images": [
         IMAGES.exportProducts.GomayAntiRadiationChip
       ],
       "description": "Gomay Anti-Radiation Chip is a small Gomay-based accessory designed for placement near electronic devices. It is positioned as a traditional and eco-conscious lifestyle product.",
       "details": {
         "applications": "• Mobile phones\n• Laptops\n• Workstations\n• Home and office décor\n• Gifting",
         "benefits": "• Compact and easy to place\n• Traditional Gomay-based product\n• Suitable as a lifestyle accessory\n• Eco-conscious product concept\n• Suitable for gifting"
       },
       "pricing": "Contact Trade Desk",
       "specifications": {
         "origin": "India",
         "availableForms": [
           "Round",
           "Square",
           "Decorative shapes",
           "Customized designs"
         ],
         "packaging": "Individual pouch • Individual box • Gift packaging • Bulk packaging • Customized export packaging",
         "purity": "Natural • Eco-Friendly • Handmade",
         "grade": "Traditional Grade",
         "minOrder": "500 Units"
       },
       "createdAt": "2026-05-31"
     },
      {
        "id": "pg-dhoop",
        "name": "Panchgavya Dhoop",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.PanchgavyaDhoop
        ],
        "description": "Panchgavya Dhoop is a traditional aromatic product prepared using Panchgavya-based and other natural ingredients. It is inspired by traditional Indian practices of using aromatic products during puja and spiritual activities.",
        "details": {
          "applications": "• Puja\n• Meditation\n• Prayer spaces\n• Temples\n• Home fragrance\n• Spiritual ceremonies\n• Traditional rituals",
          "benefits": "• Traditional aromatic experience\n• Suitable for puja and spiritual spaces\n• Convenient to use\n• Natural and traditional product positioning\n• Suitable for gifting and festive occasions"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Dhoop Sticks",
            "Dhoop Cones",
            "Dhoop Cups",
            "Dhoop Tablets",
            "Customized forms"
          ],
          "packaging": "10 pcs • 20 pcs • 50 pcs • 100 pcs • 250 g • 500 g • Bulk packaging • Customized export packaging",
          "purity": "Natural • Eco-Friendly",
          "grade": "Ritual Grade",
          "minOrder": "200 Packs"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "pg-diya",
        "name": "Panchgavya Diya",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.PanchgavyaDiya
        ],
        "description": "Panchgavya Diya is a traditionally crafted diya made using natural Panchgavya-based materials. It is suitable for festivals, puja, religious ceremonies, and decorative use.",
        "details": {
          "applications": "• Diwali\n• Puja\n• Religious ceremonies\n• Temples\n• Home décor\n• Festive gifting",
          "benefits": "• Suitable for traditional celebrations\n• Natural-material craftsmanship\n• Eco-conscious festive option\n• Suitable for gifting\n• Attractive traditional décor"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Single Diya",
            "Set of Diyas",
            "Decorative Diyas",
            "Festival Gift Sets",
            "Customized designs"
          ],
          "packaging": "Single pack • Sets of 2/4/6/12 • Gift boxes • Bulk packaging • Customized festive packaging",
          "purity": "Natural • Eco-Friendly • Handmade",
          "grade": "Traditional Grade",
          "minOrder": "500 Units"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "pg-havansamagri",
        "name": "Panchgavya Havan Samagri",
        "category": "Panchgavya Products Catalogue",
        "images": [
          IMAGES.exportProducts.PanchgavyaHavanSamagri
        ],
        "description": "Panchgavya Havan Samagri is a traditional ritual blend prepared using Panchgavya-based and selected natural ingredients for Havan, Yagna, and other traditional ceremonies.",
        "details": {
          "applications": "• Havan\n• Yagna\n• Puja\n• Religious ceremonies\n• Temple use\n• Traditional rituals",
          "benefits": "• Authentic traditional ritual blend\n• Selected natural ingredients\n• Formulated for sacred fire ceremonies"
        },
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "availableForms": [
            "Powder",
            "Granules",
            "Herbal mix",
            "Traditional Havan blend",
            "Customized formulations"
          ],
          "packaging": "500 g • 1 kg • 5 kg • 25 kg Bulk packaging",
          "purity": "Natural • Pure Ritual Blend",
          "grade": "Ritual Grade • Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
    ]
  }
];
