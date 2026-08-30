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
        "description": "Dharaaveda Global Exim offers premium-quality Indian Turmeric Powder with carefully selected raw material and options based on curcumin content, suitable for food, nutraceutical, wellness and ingredient applications along with completely organic.\n\nABOUT THE PRODUCT:\nOur Turmeric Powder is manufactured from quality turmeric fingers and processed under hygienic conditions to retain its natural colour, aroma and characteristic turmeric properties.\n\nAvailable Curcumin Grades:\n• Standard Grade: Curcumin 3.5%+\n• Premium High-Curcumin Grade: Curcumin 7%+\n(The exact curcumin specification can be confirmed through a batch-wise laboratory test/COA)\n\nQUALITY & LAB TESTING:\nFor export-oriented requirements, the product can be tested for:\n• Curcumin Content\n• Pesticide Residues\n• Heavy Metals\n• Aflatoxins\n• Microbiological Parameters\n• Moisture\n• Other quality parameters as per buyer/import-country requirements\nLab-tested batches with COA and required compliance documentation can be supplied as per customer specification.\n\nBENEFITS OF HIGH-CURCUMIN TURMERIC:\nTurmeric naturally contains curcuminoids, with curcumin being its key bioactive compound. Higher-curcumin turmeric provides a more concentrated source of these compounds.\nPotential wellness benefits associated with curcumin include:\n• Antioxidant support\n• Supports the body's natural inflammatory response\n• Traditionally used to support digestion\n• Supports general wellness and healthy lifestyle\n• Widely used in functional foods and nutraceutical formulations\n(These statements are for general nutritional/wellness information and are not intended to diagnose, treat or prevent any disease)\n\nGRADE & APPLICATIONS:\n• Standard Turmeric Powder (Curcumin 3.5%+): Food products, spices, seasoning, sauces, snacks\n• Premium High-Curcumin (Curcumin 7%+): Premium food ingredients, nutraceuticals, wellness products, functional formulations\n\nPACKAGING:\nAvailable according to buyer requirements:\n• 25 kg food-grade bags\n• 50 kg food-grade bags\n• PP bags with suitable inner food-grade liner\n• Kraft paper bags / customized export packaging\n• Private-label packaging available on request\n• Bulk packaging available for container shipments\nCustomized packing, labelling and specifications can be arranged according to destination-country and buyer requirements.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Sourced from premium turmeric growing regions)",
          "packaging": "25 kg & 50 kg food-grade bags • PP bags with inner liner • Kraft paper bags • Private-label & Bulk shipments",
          "purity": "100% Organic & Lab-Tested with COA (Curcumin, Pesticides, Heavy Metals, Aflatoxins, Microbio, Moisture)",
          "grade": "Standard (Curcumin 3.5%+) • Premium High-Curcumin (Curcumin 7%+)",
          "minOrder": "500 Kilograms"
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
          "packaging": "Multi-layer Kraft Paper Bags (25 kg)",
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
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Fine Powder • Coarse Powder • Whole Coriander Seeds",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Gujarat & Rajasthan, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Fine Powder • Medium Grind • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Spice Blends • Seasonings • Ready-to-Eat Foods • Sauces • Snacks",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Karnataka, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Whole Black Pepper • Cracked Black Pepper • Ground Black Pepper • Coarse Grind",
          "purity": "NABL Lab Tested • Moisture as per Buyer Specification",
          "grade": "Food Processing • Spice Blends • Seasonings • Marinades • Pharmaceuticals • Nutraceuticals",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Idukki, Kerala, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Whole Green Cardamom • Cardamom Seeds • Cardamom Powder",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Spice Blends • Bakery • Confectionery • Beverages • Pharmaceuticals • Ayurveda",
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
        "description": "Ceylon-type sweet cinnamon quills harvested sustainably, carrying very low coumarin and a delicate woody sweetness.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Western Ghats, India",
          "packaging": "Multi-layer Kraft Paper Bags (25 kg)",
          "purity": "100% Pure, Heavy-Metal Free",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Whole Nutmeg • Nutmeg Powder • Cracked Nutmeg",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Bakery • Confectionery • Beverages • Spice Blends • Pharmaceuticals • Ayurveda",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Arunachal Pradesh & Northeast India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Whole • Broken • Powder",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Culinary • Spice Blends • Herbal Products • Beverages • Pharmaceuticals",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Rajasthan & Gujarat, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Whole Fennel Seeds • Fennel Powder • Crushed Fennel",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Spice Blends • Bakery • Confectionery • Beverages • Herbal Products • Ayurveda",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Rajasthan & Uttar Pradesh, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Whole Mustard Seeds • Mustard Powder • Crushed Mustard",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Spice Blends • Pickles • Condiments • Oil Extraction • Seasonings",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Uttarakhand & Himachal Pradesh, India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Whole Bay Leaves • Crushed Bay Leaves • Bay Leaf Powder",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Spice Blends • Soups • Curries • Rice Dishes • Seasonings • Herbal Products",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Coarse Blend • Customized Spice Blends",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Cooking • Curries • Gravies • Marinades • Snacks • Ready-to-Eat Foods • Food Processing",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk, Retail & Private Label Packaging Available • Available Blends: Garam Masala, Kitchen King, Chaat Masala, Pav Bhaji, Biryani, Sabzi, Sambar, Rasam, Tea, Kala, Kanda Lasun, Peri Peri, Custom Blends",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Ready-to-Cook Mixes • Seasonings • Marinades • Snacks • Sauces • Restaurant & Catering",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "s-kalamasala",
        "name": "Dharaaveda Kala Masala",
        "category": "Spices & Seasonings",
        "images": [
          IMAGES.exportProducts.kalaMasala
        ],
        "description": "Dharaaveda Kala Masala is an authentic traditional Maharashtrian spice blend prepared from carefully selected whole spices. The spices are sorted, graded, hygienically processed, and blended in precise proportions to deliver a rich dark colour, distinctive aroma, balanced heat, and deep roasted flavour. No adulteration or unnecessary fillers are added.\n\nApplications:\n• Maharashtrian curries and gravies\n• Vegetable preparations\n• Misal, usal & zunka\n• Vada pav & street-food preparations\n• Rice and pulao\n• Dal and legumes\n• Restaurant & hotel kitchens\n• Ready-to-cook food products\n• Spice blends and food manufacturing\n\nAvailable Forms:\n• Coarse Powder",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – Maharashtra (Sourced from reputed growing regions across India)",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Health Foods • Beverages • Smoothies • Bakery • Food Processing • Nutraceuticals • Natural Food Coloring",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-tomato",
        "name": "Tomato Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.tomatoPowder
        ],
        "description": "Fine spray-dried red tomato powder prepared from ripe organic tomatoes, ideal for instant soups, sauces, and seasoning rubs.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Karnataka Farms, India",
          "packaging": "Laminated moisture-proof drums (20kg)",
          "purity": "100% Pure Dehydrated Vegetable, No Additives",
          "grade": "Premium Spray-Dried / Low-Temp Milled",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Soups • Sauces • Snacks • Bakery • Instant Mixes • Ready-to-Eat Foods",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Coarse Powder • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Seasonings • Spice Blends • Sauces • Snacks • Ready-to-Eat Foods • Bakery",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Coarse Powder • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Beverages • Bakery • Spice Blends • Seasonings • Nutraceuticals • Ayurveda",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Coarse Powder • Customized Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Food Processing • Seasonings • Spice Blends • Soups • Sauces • Snacks • Ready-to-Eat Foods",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail • Fine Powder • Custom Mesh Sizes (on request)",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Nutraceuticals • Smoothies & Beverages • Soups & Sauces • Bakery & Confectionery • Pasta & Noodles • Seasonings",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Custom Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Health Supplements • Soups & Sauces • Bakery & Confectionery • Baby Food Formulations • Smoothies & Beverages",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Custom Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Soups & Sauces • Seasoning & Spice Blends • Instant Food Mixes • Ready-to-Eat Foods • Bakery Products • Snacks",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Custom Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Nutraceuticals & Health Foods • Soups & Sauces • Instant Food Mixes • Seasoning & Spice Blends • Ready-to-Eat Foods",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Custom Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Seasoning & Spice Blends • Snack Food Manufacturing • Instant Food Mixes • Soups & Sauces • Pickle Preparations",
          "minOrder": "500 Kilograms"
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg Multi-layer Kraft Paper Bags • Customized Bulk & Retail Packaging Available • Fine Powder • Custom Mesh Sizes",
          "purity": "Premium Export Quality • Hygienically Processed",
          "grade": "Seasoning & Spice Blends • Soups & Sauces • Instant Food Mixes • Ready-to-Eat Foods • Snacks & Savory Products",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      },
      {
        "id": "vp-mint",
        "name": "Mint Powder",
        "category": "Dehydrated Vegetable Powders",
        "images": [
          IMAGES.exportProducts.mintPowder
        ],
        "description": "High-purity dehydrated mint powder ground to micro-mesh standards for quick solubility and flavor dispersion.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Laminated moisture-proof drums (20kg)",
          "purity": "100% Pure Dehydrated Vegetable, No Additives",
          "grade": "Premium Spray-Dried / Low-Temp Milled",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
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
        "description": "Dharaaveda Global Exim offers premium Banana Powder manufactured from selected ripe bananas, gently dehydrated and finely milled to retain natural sweet flavor, aroma, and nutritional goodness. Ideal for food processing, smoothies, baby food, and nutraceutical formulations.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Custom Retail & Bulk)",
          "purity": "100% Pure Natural Fruit Powder • Free from artificial colors, preservatives or additives",
          "grade": "SEO Keywords: banana powder supplier India • banana powder exporter • bulk banana powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Mango Powder is produced from selected premium-quality mangoes, hygienically processed and dehydrated to preserve natural tropical sweetness, rich aroma, and vibrant color. Widely used in beverages, smoothie mixes, confectionery, and food manufacturing.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Ratnagiri & South India Orchards",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Foil Inserts)",
          "purity": "100% Pure Organic Mango Pulp Powder",
          "grade": "SEO Keywords: mango powder supplier India • mango powder exporter • bulk mango powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Pineapple Powder is prepared from selected ripe pineapples, spray-dried and freeze-dried to retain vibrant golden color, tropical aroma, and natural tangy sweetness. Excellent for smoothies, bakery, and health supplements.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Kerala & Northeast India",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Kraft Bags / Vacuum Foil)",
          "purity": "100% Pure Pineapple Fruit Powder • Rich in Natural Bromelain",
          "grade": "SEO Keywords: pineapple powder supplier India • pineapple powder exporter • bulk pineapple powder",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated Papaya Powder produced from ripe Indian papayas. Hygienically processed to preserve natural color, tropical aroma, enzymes, and digestive health benefits.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Freeze-Dried Powder (25 kg Bags / Custom Retail)",
          "purity": "100% Pure Papaya Powder • No Artificial Colors or Preservatives",
          "grade": "SEO Keywords: papaya powder supplier India • papaya powder exporter • bulk papaya powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Guava Powder is made from ripe guavas, gently spray-dried and freeze-dried to preserve high Vitamin C content, natural fiber, and distinct tropical aroma.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Maharashtra & Andhra Pradesh)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Guava Powder • Rich in Vitamin C & Fiber",
          "grade": "SEO Keywords: guava powder supplier India • guava powder exporter • bulk guava powder",
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
        "description": "Our Pomegranate Powder is produced from ruby-red pomegranate arils, spray-dried and freeze-dried to retain high antioxidant polyphenols, vibrant color, and fruity flavor.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Maharashtra & Gujarat)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Pomegranate Fruit Powder • Rich in Antioxidants",
          "grade": "SEO Keywords: pomegranate powder supplier India • pomegranate powder exporter • bulk pomegranate powder",
          "minOrder": "500 Kilograms"
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
        "description": "Premium Amla Powder (Indian Gooseberry Powder) processed from fresh amla fruits to retain natural Vitamin C, tangy flavor, and potent nutritional bio-compounds.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Custom Retail)",
          "purity": "100% Pure Amla Fruit Powder • High Natural Vitamin C",
          "grade": "SEO Keywords: amla powder supplier India • amla powder exporter • bulk amla powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Strawberry Powder is crafted from fresh strawberries, freeze-dried and finely ground to retain rich berry red color, sweet aroma, and authentic berry flavor.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Mahabaleshwar Orchards)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Strawberry Powder • Free from artificial flavors or additives",
          "grade": "SEO Keywords: strawberry powder supplier • freeze dried strawberry powder • bulk strawberry powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Apple Powder is produced from fresh apples, spray-dried and finely powdered to retain characteristic sweet fruity flavor, natural aroma, and pectin content.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Himachal Pradesh & Kashmir)",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Smoothie Mix (25 kg Bags / Custom Packs)",
          "purity": "100% Pure Apple Fruit Powder",
          "grade": "SEO Keywords: apple powder supplier India • apple powder exporter • bulk apple powder",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated Orange Powder made from fresh oranges. Hygienically processed and spray-dried to retain citrus aroma, natural tangy orange flavor, and Vitamin C.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Nagpur Orchards)",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Smoothie Mix (25 kg Bags / Custom Packs)",
          "purity": "100% Pure Orange Fruit Powder",
          "grade": "SEO Keywords: orange powder supplier India • orange powder exporter • bulk orange powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Lemon Powder is made from fresh lemons, spray-dried to preserve crisp citrus aroma, natural zesty flavor, and citric acid content for beverage and food applications.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Spray-Dried Powder • Smoothie Mix (25 kg Bags / Custom Packs)",
          "purity": "100% Pure Lemon Fruit Powder",
          "grade": "SEO Keywords: lemon powder supplier India • lemon powder exporter • bulk lemon powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Dragon Fruit Powder (Pitaya Powder) is freeze-dried from fresh red dragon fruit to retain striking magenta color, delicate sweetness, and potent antioxidants.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Dragon Fruit Powder • High Antioxidants & Fiber",
          "grade": "SEO Keywords: dragon fruit powder supplier India • freeze dried dragon fruit powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Jackfruit Powder is produced from mature jackfruits, gently dehydrated and freeze-dried to retain sweet tropical aroma, dietary fiber, and nutritional density.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Kerala & Karnataka)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Bulk Foil Packs)",
          "purity": "100% Pure Jackfruit Powder",
          "grade": "SEO Keywords: jackfruit powder supplier India • jackfruit powder exporter • bulk jackfruit powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Chikoo Powder (Sapota Powder) is prepared from ripe sapota fruits, freeze-dried and finely milled to preserve its rich malty caramel flavor and sweetness.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Gujarat & Maharashtra)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Bulk Foil Packs)",
          "purity": "100% Pure Sapota Fruit Powder",
          "grade": "SEO Keywords: chikoo powder supplier India • sapota powder exporter • bulk chikoo powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Coconut Powder is produced from fresh coconut milk and meat, spray-dried and dehydrated into fine creamy powder for confectionery, baking, and instant beverage mixes.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Kerala & Tamil Nadu)",
          "packaging": "Available Forms: Fine Powder • Spray-Dried / Dehydrated Powder (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Dehydrated Coconut Powder",
          "grade": "SEO Keywords: coconut powder supplier India • coconut powder exporter • bulk coconut powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Fig Powder (Anjeer Powder) is produced from premium dried figs, freeze-dried and ground into fine powder for natural sweetening, baking, and smoothie mixes.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Maharashtra)",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Fig Fruit Powder",
          "grade": "SEO Keywords: fig powder supplier • dried fig powder exporter • bulk fig powder",
          "minOrder": "500 Kilograms"
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
        "description": "Our Watermelon Powder is freeze-dried from fresh ripe watermelons to retain bright pink-red color, refreshing sweet taste, and natural lycopene content.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "Available Forms: Fine Powder • Freeze-Dried Powder • Smoothie Mix (25 kg Bags / Vacuum Foil)",
          "purity": "100% Pure Watermelon Powder",
          "grade": "SEO Keywords: watermelon powder supplier • watermelon powder exporter • bulk fruit powder",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "100 ml, 250 ml, 500 ml, 1 L, 5 L & bulk",
          "purity": "100% Pure Moringa",
          "grade": "Cosmetic / Industrial Grade",
          "minOrder": "200 Kilograms"
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
        "description": "Flax Seeds (Linum usitatissimum), commonly known as Alsi Seeds, are premium oilseeds valued for their rich nutritional profile. Naturally high in Omega-3 fatty acids (ALA), dietary fiber, protein, and essential minerals, flax seeds are widely used in the food, nutraceutical, animal feed, and oil extraction industries. Our flax seeds are carefully cleaned, graded, and hygienically packed to meet domestic and international quality standards.\n\nApplications:\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Health Foods & Nutritional Supplements\n• Smoothies & Functional Beverages\n• Cold-Pressed Oil Extraction\n• Animal & Poultry Feed\n• Food Processing Industry\n\nAvailable Forms:\n• Whole Flax Seeds\n• Brown Flax Seeds\n• Golden Flax Seeds\n• Flax Seed Powder\n• Cold-Pressed Flax Seed Oil",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Food-Grade Paper Bags • Jumbo Bags (500–1000 kg) • Customized Private Label & Export Packaging Available",
          "purity": "99% – 99.99%",
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
        "description": "Pumpkin Seeds, commonly known as Pepitas, are nutrient-rich edible seeds obtained from premium-quality pumpkins. Naturally packed with protein, healthy fats, dietary fiber, magnesium, zinc, iron, and antioxidants, they are widely used in the food, nutraceutical, bakery, and snack industries. Our pumpkin seeds are carefully cleaned, graded, and hygienically packed to ensure superior quality, freshness, and export compliance.\n\nApplications:\n• Healthy Snacks\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Trail Mixes & Energy Bars\n• Nutraceutical & Dietary Supplements\n• Salads & Food Garnishing\n• Oil Extraction\n• Food Processing Industry\n\nKey Features:\n• Rich in Protein & Healthy Fats\n• Excellent Source of Magnesium & Zinc\n• High Purity and Uniform Size\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
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
        "description": "Sesame Seeds (Sesamum indicum) are one of the oldest and most valuable oilseeds, renowned for their rich nutritional profile and exceptional oil content. Naturally abundant in protein, healthy fats, calcium, iron, magnesium, antioxidants, and dietary fiber, sesame seeds are extensively used in the food, bakery, confectionery, oil extraction, and nutraceutical industries. Our sesame seeds are sourced from trusted farms, carefully cleaned, machine sorted, and hygienically packed to meet premium domestic and international export standards.\n\nApplications:\n• Bakery & Confectionery\n• Tahini & Sesame Paste Production\n• Edible Oil Extraction\n• Snacks & Energy Bars\n• Breakfast Cereals & Granola\n• Spice Blends & Food Garnishing\n• Health Foods & Nutraceuticals\n• Food Processing Industry\n\nAvailable Forms:\n• Natural White Sesame Seeds\n• Hulled White Sesame Seeds\n• Black Sesame Seeds\n• Brown Sesame Seeds\n• Roasted Sesame Seeds\n• Sesame Seed Oil",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
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
        "description": "Sunflower Seeds (Helianthus annuus) are premium edible oilseeds known for their excellent nutritional value and pleasant nutty flavor. Rich in protein, healthy unsaturated fats, vitamin E, dietary fiber, magnesium, selenium, and antioxidants, sunflower seeds are widely used in the food, bakery, snack, confectionery, and oil extraction industries. Our sunflower seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to ensure superior quality and compliance with international export standards.\n\nApplications:\n• Healthy Snacks\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Trail Mixes & Energy Bars\n• Salads & Food Garnishing\n• Edible Oil Extraction\n• Health Foods & Nutraceuticals\n• Food Processing Industry\n• Animal & Bird Feed\n\nAvailable Forms:\n• Whole Sunflower Seeds (With Shell)\n• Hulled Sunflower Seed Kernels\n• Raw Sunflower Seeds\n• Roasted Sunflower Seeds\n• Salted Sunflower Seeds\n• Sunflower Seed Oil\n\nKey Features:\n• Rich in Vitamin E & Healthy Fats\n• High Protein & Dietary Fiber\n• Uniform Size and Premium Quality\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
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
        "description": "Chia Seeds (Salvia hispanica) are premium nutrient-dense superfoods renowned for their exceptional health benefits. Naturally rich in Omega-3 fatty acids, dietary fiber, plant-based protein, calcium, magnesium, phosphorus, and antioxidants, chia seeds are widely used in the food, beverage, nutraceutical, and health industries. Our chia seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to meet premium domestic and international export standards.\n\nApplications:\n• Health Foods & Superfoods\n• Smoothies & Functional Beverages\n• Bakery & Confectionery\n• Breakfast Cereals & Granola\n• Energy Bars & Trail Mixes\n• Puddings & Desserts\n• Nutraceutical & Dietary Supplements\n• Food Processing Industry\n\nAvailable Forms:\n• Whole Black Chia Seeds\n• Whole White Chia Seeds\n• Organic Chia Seeds\n• Chia Seed Powder\n• Chia Seed Oil\n\nKey Features:\n• Rich in Omega-3 Fatty Acids\n• Excellent Source of Dietary Fiber & Plant Protein\n• High in Calcium, Magnesium & Antioxidants\n• Naturally Gluten-Free\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
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
        "description": "Watermelon Seeds (Citrullus lanatus) are highly nutritious edible seeds valued for their rich content of protein, healthy fats, essential minerals, and antioxidants. They are widely used in the food, bakery, confectionery, snack, and nutraceutical industries. Our premium watermelon seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to ensure superior quality, freshness, and compliance with international export standards.\n\nApplications:\n• Healthy Snacks\n• Bakery & Confectionery\n• Trail Mixes & Energy Bars\n• Breakfast Cereals & Granola\n• Salads & Food Garnishing\n• Traditional Indian Sweets & Desserts\n• Nutraceutical & Dietary Supplements\n• Food Processing Industry\n\nAvailable Forms:\n• Whole Watermelon Seeds (With Shell)\n• Hulled Watermelon Seed Kernels\n• Raw Watermelon Seeds\n• Roasted Watermelon Seeds\n• Salted Watermelon Seeds\n• Watermelon Seed Oil",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
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
        "description": "Basil Seeds (Ocimum basilicum), commonly known as Sabja Seeds or Sweet Basil Seeds, are highly valued for their cooling properties and impressive nutritional profile. Rich in dietary fiber, plant-based protein, antioxidants, calcium, iron, and essential minerals, basil seeds are widely used in beverages, desserts, health foods, and nutraceutical products. Our premium basil seeds are sourced from trusted farms, carefully cleaned, graded, and hygienically packed to meet the highest domestic and international export standards.\n\nApplications:\n• Health Drinks & Functional Beverages\n• Falooda & Traditional Desserts\n• Smoothies & Detox Drinks\n• Ice Cream & Yogurt Toppings\n• Bakery & Confectionery\n• Nutraceutical & Dietary Supplements\n• Weight Management Products\n• Food Processing Industry\n\nAvailable Forms:\n• Whole Basil Seeds (Sabja Seeds)\n• Black Sweet Basil Seeds\n• Machine Cleaned Basil Seeds\n• Sortex Cleaned Basil Seeds\n• Organic Basil Seeds\n• Basil Seed Powder\n\nKey Features:\n• Rich in Dietary Fiber & Antioxidants\n• Excellent Hydration & Cooling Properties\n• High Purity & Uniform Size\n• Hygienically Processed\n• Export-Quality Standards\n• Bulk Supply with Customized Packaging",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg Food-Grade Bags • 25 kg PP Bags • 50 kg PP Bags • HDPE Laminated Bags • Kraft Paper Bags • Jumbo Bags (500–1000 kg) • Customized Retail & Private Label Packaging Available",
          "purity": "99% – 99.99%",
          "grade": "Machine Cleaned • Sortex Cleaned • Export Quality",
          "minOrder": "500 Kilograms"
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
        "description": "Premium-quality dehydrated onion processed from fresh, carefully selected onions. Dehydration helps retain the natural onion flavour and aroma while providing longer shelf life and easy storage.\n\nApplications:\n• Used extensively in food processing, instant foods, soups, sauces, gravies, seasoning blends, snacks, ready-to-eat meals, spice mixes, hotels, restaurants and industrial food manufacturing.\n\nAvailable Forms:\n• Dehydrated Onion Flakes\n• Dehydrated Onion Chopped\n• Dehydrated Onion Minced\n• Dehydrated Onion Granules\n• Dehydrated Onion Powder",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected onion-growing regions",
          "packaging": "5 kg, 10 kg, 20 kg and 25 kg food-grade packaging or customized bulk packaging with inner liner for moisture protection",
          "purity": "100% Pure Onion • Retains natural flavour & aroma",
          "grade": "Food-grade, Export Quality • Customized cuts & specifications available",
          "minOrder": "500 Kilograms"
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
        "description": "Dehydrated Garlic is produced from fresh, carefully selected garlic cloves that are cleaned, sliced, dried, and processed under hygienic conditions. It retains the characteristic aroma, flavor, and nutritional benefits of fresh garlic while offering a longer shelf life and convenient storage.\n\nApplications:\n• Food Processing Industry\n• Seasoning & Spice Blends\n• Ready-to-Eat & Ready-to-Cook Foods\n• Soups & Sauces\n• Snacks & Namkeen\n• Instant Noodles & Pasta\n• Meat & Poultry Products\n• Pickles & Marinades\n• Restaurant & Catering Services\n\nAvailable Forms:\n• Garlic Flakes\n• Garlic Minced\n• Garlic Granules\n• Garlic Powder\n• Garlic Chopped\n• Garlic Kibbled",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India (Sourced from Gujarat, Madhya Pradesh, and Rajasthan)",
          "packaging": "10 kg Food Grade Poly Bags • 20 kg Corrugated Boxes • 25 kg HDPE Bags • 25 kg Paper Bags with Inner Liner • Private Label & Bulk Packaging Available",
          "purity": "100% Pure Garlic • Hygienically Processed",
          "grade": "Premium Export Grade • A Grade • Standard Grade • Customized Specifications Available",
          "minOrder": "500 Kilograms"
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
        "description": "Premium-quality dehydrated ginger prepared from carefully selected fresh ginger. It is hygienically processed and dried to preserve its natural aroma, flavour, colour, and functional properties. Suitable for food manufacturers, spice blenders, seasoning companies, and export markets.\n\nApplications:\n• Spice blends and masala manufacturing\n• Ginger tea and instant beverages\n• Soups, sauces & gravies\n• Bakery & confectionery products\n• Ready-to-eat and ready-to-cook foods\n• Seasonings and snack applications\n• Herbal and wellness formulations\n• Food processing & industrial applications\n\nAvailable Forms:\n• Ginger Powder\n• Ginger Flakes\n• Ginger Granules\n• Ginger Slices\n• Ginger Chopped/Cut",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected ginger-growing regions and processed under hygienic conditions",
          "packaging": "1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Customized private-label packaging available",
          "purity": "Uniform colour, aroma & flavour • Low-moisture dehydrated product",
          "grade": "Premium Export Grade • Food Grade • Lab testing and export documentation available on request",
          "minOrder": "500 Kilograms"
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
        "description": "Premium-quality tomatoes carefully selected, washed, sliced, and dehydrated under controlled conditions to retain their natural colour, flavour, aroma, and nutritional value.\n\nApplications:\n• Used in soups, sauces, gravies, instant foods, pizza toppings, pasta, seasoning blends, ready-to-eat meals, snacks, spice mixes, and food-processing applications.\n\nAvailable Forms:\n• Tomato Flakes\n• Tomato Slices\n• Tomato Granules\n• Tomato Powder\n• Tomato Chunks\n\nShelf Life & Storage:\n• Shelf Life: Typically 12–18 months when stored in a cool, dry place in sealed packaging.\n• Storage: Store in a cool, dry place away from direct sunlight and moisture.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "10 kg / 20 kg / 25 kg bulk food-grade bags or cartons with inner liner • Customized packaging available",
          "purity": "100% Pure Tomato • Retains natural colour, flavour, aroma & nutrition",
          "grade": "Food Grade / Export Grade (Customized specifications available as per buyer requirement)",
          "minOrder": "500 Kilograms"
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
        "description": "Dehydrated Carrot is prepared from fresh, carefully selected carrots that are washed, sorted, cut, and gently dehydrated to reduce moisture while preserving their natural color, flavor, and nutritional properties. It offers convenient storage, longer shelf life, and consistent quality for food processing and culinary applications.\n\nApplications:\n• Soups, sauces & gravies\n• Ready-to-eat and instant foods\n• Seasoning & spice blends\n• Noodles, pasta & instant meals\n• Snacks and savory products\n• Bakery & savory bakery products\n• Baby food and nutritional mixes\n• Food-service and industrial food processing\n\nAvailable Forms:\n• Carrot Flakes\n• Carrot Granules\n• Carrot Powder\n• Carrot Slices\n• Carrot Dices",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20–25 kg bulk packaging • Customized export packaging available",
          "purity": "Gently Dehydrated • Preserves Natural Color & Flavor",
          "grade": "Premium Food Grade • Standard Food Grade • Industrial Food Grade • Customized specifications available",
          "minOrder": "500 Kilograms"
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
        "description": "Dehydrated Beetroot is prepared from fresh, carefully selected beetroot that is cleaned, sliced, and dehydrated under controlled conditions to reduce moisture while preserving its natural colour, flavour, aroma, and nutritional properties. It offers a convenient, shelf-stable alternative to fresh beetroot.\n\nApplications:\n• Food & beverage manufacturing\n• Soups, sauces & gravies\n• Bakery & confectionery products\n• Smoothies, juices & health drinks\n• Seasoning and spice blends\n• Natural food colouring\n• Instant food preparations\n• Snack and ready-to-eat products\n• Nutraceutical and functional food applications\n\nAvailable Forms:\n• Beetroot Flakes\n• Beetroot Powder\n• Beetroot Granules\n• Beetroot Slices\n• Beetroot Dice",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected beetroot-growing regions and processed under controlled hygienic conditions",
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Bulk export packaging: Food-grade inner liner with PP/HDPE outer",
          "purity": "Controlled Hygienic Processing • Retains Natural Colour & Aroma",
          "grade": "Food Grade • Export Grade • Premium Grade available on request • Custom specifications available",
          "minOrder": "500 Kilograms"
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
        "description": "Dehydrated Spinach is fresh spinach that is carefully washed, sorted, processed, and dehydrated to remove moisture while preserving its characteristic green colour, flavour, aroma, and nutritional value. It offers a convenient, shelf-stable alternative to fresh spinach and is suitable for food manufacturing and commercial applications.\n\nAvailable Forms & Applications:\n• Spinach Flakes\n• Spinach Granules\n• Spinach Powder\n• Spinach Chopped\n• Spinach Crushed\n\nStorage:\n• Store in a cool, dry place away from direct sunlight and moisture.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India — sourced from selected spinach-growing regions and processed under controlled hygienic conditions",
          "packaging": "100 g, 250 g, 500 g, 1 kg, 5 kg, 10 kg, 20 kg, 25 kg • Custom bulk packaging as per buyer requirement",
          "purity": "Characteristic Green Colour & Natural Flavor Preserved",
          "grade": "Food Grade • Export Grade • Industrial/Commercial Grade • Customized specifications available",
          "minOrder": "500 Kilograms"
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
        "description": "Dehydrated Cabbage is made from fresh, quality cabbage that is carefully cleaned, cut, and dehydrated to remove moisture while preserving its natural flavour, colour, and nutritional properties. It offers longer shelf life, easy storage, and convenient usage without refrigeration.\n\nApplications:\n• Instant soups & soup mixes\n• Noodles, pasta & ready-to-eat meals\n• Pickles and chutneys\n• Spice & seasoning blends\n• Snack seasonings\n• Sauces, gravies & curry mixes\n• Instant food products\n• Bakery & savoury products\n• Food-service and industrial food processing\n\nAvailable Forms:\n• Flakes\n• Granules\n• Powder\n• Slices\n• Dices\n\nStorage:\n• Store in a cool, dry place away from direct sunlight and moisture.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India – sourced from selected cabbage-growing regions and processed under controlled hygienic conditions",
          "packaging": "5 kg, 10 kg, 20 kg, 25 kg, 50 kg • Customized packaging available on request",
          "purity": "Cleaned, Cut & Dehydrated • Preserves Natural Flavour & Colour",
          "grade": "Food Grade • Export Grade • Premium Grade • Industrial / Bulk Grade • Customized specifications available",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
    ]
  },
  {
    "id": "dehydrated_fruits",
    "title": "Dehydrated Fruits",
    "description": "Premium long-cut and slices of sun-sheltered dehydrated fruits preserving natural sugars, texture, and vitamins.",
    "image": IMAGES.exportCategories.dehydratedFruits,
    "products": [
      {
        "id": "df-banana",
        "name": "Banana Slices",
        "category": "Dehydrated Fruits",
        "images": [
          IMAGES.exportProducts.bananaSlices
        ],
        "description": "Sweet Cavendish banana rounds dehydrated naturally without chemical preservatives, perfect for organic snacking mixes.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Wayanad Highlands, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Hand-sliced Alphonso and Kesar mango strips air-dried to retain sweet tropical fragrance and soft, chewy gourmet texture.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Ratnagiri Orchards, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated slices of sun-ripened organic pineapple slices, structured for gourmet food bags and cereal additives.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated slices of sun-ripened organic apple slices, structured for gourmet food bags and cereal additives.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated slices of sun-ripened organic papaya slices, structured for gourmet food bags and cereal additives.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated slices of sun-ripened organic strawberry slices, structured for gourmet food bags and cereal additives.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
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
        "description": "Premium dehydrated slices of sun-ripened organic guava slices, structured for gourmet food bags and cereal additives.",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "Maharashtra, India",
          "packaging": "Vacuum-sealed poly bags in master cartons (10kg)",
          "purity": "No Added Sugar, Sulfites or Colorants",
          "grade": "Premium Long-Cut Slices",
          "minOrder": "500 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
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
          IMAGES.export.productFallback
        ],
        "description": "Gomay Ganesh is a traditionally handcrafted Ganesh idol made using cow dung (Gomay) and natural materials. It combines traditional Indian craftsmanship with an eco-conscious approach to festive celebrations.\n\nApplications:\n• Ganesh Chaturthi\n• Home puja and worship\n• Office and workplace décor\n• Festive occasions\n• Spiritual gifting\n• Eco-friendly celebrations\n\nAvailable Forms:\n• 2 Inch\n• 3 Inch\n• 7 Inch\n• Customized sizes and designs\n\nBenefits:\n• Supports eco-conscious festive celebrations\n• Made using natural materials\n• Traditional handcrafted product\n• Suitable for gifting and devotional use\n• Designed as an alternative to conventional decorative idols",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Gomay Shree Yantra is a traditionally crafted spiritual décor product made using Gomay and natural materials, inspired by Indian cultural and spiritual traditions.\n\nApplications:\n• Puja rooms\n• Home décor\n• Offices\n• Temples\n• Meditation spaces\n• Spiritual gifting\n\nAvailable Forms:\n• Standard size\n• Wall-mounted format\n• Tabletop format\n• Customized sizes and designs\n\nBenefits:\n• Traditional spiritual décor\n• Natural-material craftsmanship\n• Suitable for puja and meditation spaces\n• Attractive cultural gifting option\n• Eco-conscious decorative choice",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Gomay Shubh Labh is a traditional decorative product representing auspicious symbols associated with Indian festive and cultural traditions. It is handcrafted using Gomay and natural materials.\n\nApplications:\n• Home entrance decoration\n• Puja rooms\n• Shops\n• Offices\n• Diwali decoration\n• Festive gifting\n\nAvailable Forms:\n• Shubh Labh set\n• Wall hanging\n• Door decoration\n• Tabletop décor\n• Customized designs\n\nBenefits:\n• Traditional auspicious décor\n• Suitable for festive occasions\n• Natural-material craftsmanship\n• Suitable for gifting\n• Eco-conscious decorative option",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Gomay Mobile Stand is an eco-conscious utility product crafted using Gomay and natural materials. It combines traditional craftsmanship with practical everyday use.\n\nApplications:\n• Mobile phone stand\n• Home use\n• Office desk\n• Workstation décor\n• Study table\n• Gifting\n\nAvailable Forms:\n• Standard mobile stand\n• Horizontal design\n• Vertical design\n• Customized shapes and designs\n\nBenefits:\n• Functional everyday product\n• Natural-material craftsmanship\n• Unique traditional design\n• Suitable for home and office use\n• Eco-conscious gifting option",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Gomay Anti-Radiation Chip is a small Gomay-based accessory designed for placement near electronic devices. It is positioned as a traditional and eco-conscious lifestyle product.\n\nApplications:\n• Mobile phones\n• Laptops\n• Workstations\n• Home and office décor\n• Gifting\n\nAvailable Forms:\n• Round\n• Square\n• Decorative shapes\n• Customized designs\n\nBenefits:\n• Compact and easy to place\n• Traditional Gomay-based product\n• Suitable as a lifestyle accessory\n• Eco-conscious product concept\n• Suitable for gifting",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Panchgavya Dhoop is a traditional aromatic product prepared using Panchgavya-based and other natural ingredients. It is inspired by traditional Indian practices of using aromatic products during puja and spiritual activities.\n\nApplications:\n• Puja\n• Meditation\n• Prayer spaces\n• Temples\n• Home fragrance\n• Spiritual ceremonies\n• Traditional rituals\n\nAvailable Forms:\n• Dhoop Sticks\n• Dhoop Cones\n• Dhoop Cups\n• Dhoop Tablets\n• Customized forms\n\nBenefits:\n• Traditional aromatic experience\n• Suitable for puja and spiritual spaces\n• Convenient to use\n• Natural and traditional product positioning\n• Suitable for gifting and festive occasions",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Panchgavya Diya is a traditionally crafted diya made using natural Panchgavya-based materials. It is suitable for festivals, puja, religious ceremonies, and decorative use.\n\nApplications:\n• Diwali\n• Puja\n• Religious ceremonies\n• Temples\n• Home décor\n• Festive gifting\n\nAvailable Forms:\n• Single Diya\n• Set of Diyas\n• Decorative Diyas\n• Festival Gift Sets\n• Customized designs\n\nBenefits:\n• Suitable for traditional celebrations\n• Natural-material craftsmanship\n• Eco-conscious festive option\n• Suitable for gifting\n• Attractive traditional décor",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
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
          IMAGES.export.productFallback
        ],
        "description": "Panchgavya Havan Samagri is a traditional ritual blend prepared using Panchgavya-based and selected natural ingredients for Havan, Yagna, and other traditional ceremonies.\n\nApplications:\n• Havan\n• Yagna\n• Puja\n• Religious ceremonies\n• Temple use\n• Traditional rituals\n\nAvailable Forms:\n• Powder\n• Granules\n• Herbal mix\n• Traditional Havan blend\n• Customized formulations\n\nBenefits:\n• Authentic traditional ritual blend\n• Selected natural ingredients\n• Formulated for sacred fire ceremonies",
        "pricing": "Contact Trade Desk",
        "specifications": {
          "origin": "India",
          "packaging": "500 g • 1 kg • 5 kg • 25 kg Bulk packaging",
          "purity": "Natural • Pure Ritual Blend",
          "grade": "Ritual Grade • Export Grade",
          "minOrder": "200 Kilograms"
        },
        "createdAt": "2026-05-31"
      }
    ]
  }
];
