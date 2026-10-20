/**
 * Menu transcribed from Pelicans Nest Cafe's in-store menu boards (dated 10/1/26),
 * published on pelicansnestcafe.com.au. Prices AUD incl. GST, exactly as listed.
 * Only obvious typos were fixed (e.g. "Scambled", "Colesaw").
 */

export type MenuItem = { name: string; description?: string; price: string; tags?: string[] };
export type MenuSection = { id: string; title: string; note?: string; items: MenuItem[]; footnote?: string };
export type MenuGroup = { id: string; title: string; blurb?: string; sections: MenuSection[] };

export const breakfastTimes = "Breakfast served until 2pm weekdays, 11:30am weekends & public holidays.";

export const menu: MenuGroup[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    blurb: breakfastTimes,
    sections: [
      {
        id: "eggs",
        title: "Eggs Your Way",
        note: "Fried, poached or scrambled. All meals garnished with rocket.",
        items: [
          { name: "Bacon & Eggs", description: "2 eggs your way, bacon, tomato relish, served on sourdough.", price: "$17.00" },
          { name: "Pumpkin Toast", description: "2 eggs your way, roast pumpkin, caramelised onions, grilled tomato, feta & dukkah on sourdough, tomato relish on side.", price: "$18.00" },
          { name: "Vegetarian", description: "2 eggs your way, homemade corn fritter, grilled tomato, roasted field mushrooms & roasted pumpkin on sourdough, tomato relish on side.", price: "$21.00" },
          { name: "Avo & Eggs", description: "2 eggs your way, choice of bacon or smoked leg ham & avo on sourdough, tomato relish on side.", price: "$22.00" },
          { name: "Avo & Salmon", description: "2 eggs your way, with smoked Tassie salmon, avo & hollandaise sauce on sourdough.", price: "$26.00" },
          { name: "Eggs Benedict", description: "2 poached eggs, wilted spinach & hollandaise with your choice of bacon, smoked leg ham or mushrooms on sourdough or croissant. Smoked salmon extra + $3.00.", price: "$23.50" },
          { name: "Salmon Cakes", description: "2 homemade Tassie salmon cakes, panko crumbed, with 2 poached eggs & hollandaise on side.", price: "$23.00" },
          { name: "Avo & Feta Toast", description: "On sourdough, with lemon & balsamic glaze.", price: "$15.00" },
          { name: "Vegetarian Omelette", description: "2 egg cream mix, with pumpkin, mushroom, spinach, cheese mix, tomato & spring onions.", price: "$22.00" },
          { name: "Chicken or Smoked Leg Ham Omelette", description: "2 egg cream mix with spring onions, cheese mix, spinach, mushrooms & tomato.", price: "$24.00" },
          { name: "Smoked Salmon Omelette", description: "2 egg cream mix with spring onions & spinach topped with Tassie smoked salmon & feta.", price: "$25.00" },
          { name: "Prawn or Crab Omelette", description: "2 egg cream mix, spring onions, cheese mix, drizzled with kewpie mayo.", price: "$25.00" },
          { name: "Scrambled Egg Supreme", description: "2 egg cream mix with spring onions, cheese mix, tomato, spinach, mushrooms & diced smoked leg ham on sourdough.", price: "$22.00" },
          { name: "Wagyu Savoury Mince", description: "2 eggs your way on sourdough.", price: "$23.00" },
          { name: "Big Breakfast", description: "2 eggs your way with sausage, bacon, 1 hash brown, corn fritter, grilled tomato & avocado on sourdough, tomato relish on side.", price: "$28.00" },
        ],
      },
      {
        id: "sweet-beak",
        title: "Sweet Beak Breakfast",
        items: [
          { name: "Raisin Toast", description: "2 thick toasted slices with butter on side.", price: "$8.00" },
          { name: "Toasted Banana Bread", description: "1 slice with butter on side.", price: "$6.00" },
          { name: "Toasted Fruit & Nut Muesli", description: "With your choice of milk or yoghurt. Add mixed berries and banana + $6.00.", price: "$9.00", tags: ["GF"] },
          { name: "Buttermilk Pancakes", description: "3 pancakes, maple flavoured syrup, seasonal mixed berries & banana with ice cream of your choice.", price: "$18.00" },
          { name: "Belgian Waffle", description: "2 waffles, maple flavoured syrup, seasonal mixed berries & banana with ice cream of your choice.", price: "$18.00" },
        ],
      },
      {
        id: "muffin-wrap-roll",
        title: "Muffin, Wrap or Roll",
        note: "All day.",
        items: [
          { name: "Sausage Pattie & Egg", description: "With cheese & tomato relish.", price: "$9.90" },
          { name: "Bacon & Egg", description: "With tomato relish.", price: "$9.90" },
          { name: "Brekkie", description: "Bacon, fried egg, hash brown & tomato relish.", price: "$11.00" },
          { name: "Avo", description: "Fried egg, bacon or smoked leg ham with wilted spinach & tomato relish.", price: "$12.00" },
          { name: "Sweet Chilli Chicken Tender Wrap", description: "With tomato, mixed lettuce & aioli.", price: "$14.00" },
          { name: "Fish Wrap", description: "Tempura battered fish, with coleslaw or mixed lettuce, tomato, beetroot & tartare.", price: "$14.00" },
          { name: "Vegetarian Wrap", description: "Pumpkin, avocado, scrambled egg & wilted spinach with tomato relish.", price: "$14.00" },
          { name: "Bacon & Fried Egg Toastie", description: "With tomato relish on thick brioche.", price: "$9.90" },
        ],
      },
      {
        id: "kids-breakfast",
        title: "Kids Breakfast",
        note: "Breakfast hours.",
        items: [
          { name: "Sunshine Kids Mini Pancake Stack", description: "With nutella, maple flavoured syrup & ice cream of your choice.", price: "$10.00" },
          { name: "Baked Beans & Fried Egg on Toast", price: "$11.00" },
          { name: "Scrambled Egg on Toast", price: "$9.90" },
          { name: "Mini Mixed Cheese Omelette", price: "$9.00" },
          { name: "4 Chicken Nuggets", description: "With chips & tomato sauce.", price: "$9.00" },
        ],
      },
      {
        id: "sides",
        title: "Sides & Add Ons",
        items: [
          { name: "Gluten free bread · Sourdough (1 slice w butter) · Bread roll w butter · Grilled tomato · Tomato relish · Hash brown · Wilted spinach · Hollandaise · Sausage", price: "+ $3.00 each" },
          { name: "Avocado ½ · Halloumi · Bacon (2 rashers) · Corn fritter · Sautéed mushrooms · Baked beans · Roasted pumpkin · 2 eggs your way · Leg ham · Smoked salmon · Grilled chicken", price: "+ $6.00 each" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Snacks",
    sections: [
      {
        id: "burger-list",
        title: "Burgers",
        note: "Served on a milk bun. Gluten free buns / bread extra $2.80.",
        items: [
          { name: "Hamburger", description: "Wagyu beef patty, caramelised onions, tomato, beetroot, mixed lettuce & bbq sauce. Add the lot (bacon, egg & cheese) + $7.00.", price: "$13.00" },
          { name: "Steak Burger / Sandwich", description: "Grain fed rib steak 100–120g, caramelised onions, tomato, beetroot, mixed lettuce & bbq sauce. Add the lot + $7.00.", price: "$19.50" },
          { name: "Bacon & Egg Burger", description: "Bacon, egg, caramelised onions, tomato, beetroot, mixed lettuce & bbq sauce.", price: "$14.00" },
          { name: "Fish Burger", description: "Crumbed, battered or grilled, coleslaw or salad (tomato, beetroot, mixed lettuce) & tartare sauce.", price: "$15.00" },
          { name: "Chicken Burger", description: "Panko crumbed or grilled, avo, bacon with coleslaw or salad.", price: "$18.00" },
          { name: "Veggie Burger", description: "Housemade corn fritter, avo, tomato, beetroot, caramelised onions, mixed lettuce & aioli.", price: "$15.00" },
          { name: "Bug Slider", description: "2 sliders, battered bug tail, carrot, cucumber, mixed lettuce & aioli.", price: "$14.00" },
        ],
      },
      {
        id: "chicken",
        title: "Chicken",
        items: [
          { name: "6 Chicken Wingettes", description: "With smoky bbq sauce.", price: "$9.90" },
          { name: "Karaage Chicken", description: "With kewpie mayo and teriyaki sauce.", price: "$11.00" },
        ],
      },
      {
        id: "chips",
        title: "Chips",
        note: "Gluten free chips: half $3.80 · small $7.00 · medium $10.50 · large $14.00.",
        items: [
          { name: "Chips — Half", price: "$3.80" },
          { name: "Chips — Small", price: "$7.60" },
          { name: "Chips — Medium", price: "$11.40" },
          { name: "Chips — Large", price: "$15.20" },
          { name: "Sweet Potato Chips", price: "$7.70" },
          { name: "Potato Scallop", price: "$3.00" },
          { name: "Hash Brown", price: "$3.00" },
          { name: "Dirty Fries", description: "Small chips with rich gravy & mixed cheese topping.", price: "$15.00" },
        ],
      },
      {
        id: "small-snacks",
        title: "Small Snacks",
        items: [
          { name: "Chicken Nuggets", description: "20 for $20.00.", price: "3 for $3.60" },
          { name: "Popcorn Chicken Bites", price: "$8.00" },
          { name: "Arancini Balls — House Made", description: "With aioli.", price: "4 for $8.80" },
          { name: "Pluto Pup — Large Dagwood Dog", price: "$5.00" },
          { name: "Battered Sav", price: "$4.80" },
          { name: "Crumbed Sausage", price: "$4.40" },
          { name: "Chiko Roll", price: "$5.00" },
          { name: "Spring Roll", price: "$5.00" },
          { name: "Dim Sim — Small", price: "$2.90" },
          { name: "Kabana", price: "$4.50" },
          { name: "Pineapple Fritter", price: "$3.50" },
          { name: "Chicken Fillet", description: "Panko crumbed or grilled.", price: "$6.00" },
          { name: "Mozzarella Sticks", price: "4 for $6.00" },
          { name: "Turkish Garlic Bread", description: "Add mixed cheese + $2.20.", price: "$8.00" },
        ],
      },
    ],
  },
  {
    id: "seafood",
    title: "Fish & Seafood",
    blurb: "Fish by the piece is in the fish builder above.",
    sections: [
      {
        id: "seafood-delights",
        title: "Seafood Delights",
        items: [
          { name: "Grilled Prawn Skewer", description: "Pan fried in garlic butter.", price: "$8.80" },
          { name: "Fish Cake — Homemade", description: "Panko crumbed.", price: "$6.00" },
          { name: "Crumbed Calamari", description: "Plain or salt & pepper.", price: "3 for $4.80" },
          { name: "Aussie Prawn Cutlet", description: "Crumbed.", price: "$4.00" },
          { name: "Sea Scallop", description: "Crumbed.", price: "$4.80" },
          { name: "Mussels", description: "A grade, crumbed.", price: "3 for $4.50" },
          { name: "Fish Bites", description: "Crumbed.", price: "4 for $6.60" },
          { name: "Bugtail", description: "Panko crumbed.", price: "$5.50" },
          { name: "Oysters", description: "Panko crumbed.", price: "3 for $12.00" },
          { name: "Seafood Stick", description: "Crumbed.", price: "$3.00" },
          { name: "Seafood Net Roll", description: "Prawn, crab & vege with sweet chilli sauce.", price: "4 for $8.80" },
        ],
      },
      {
        id: "seafood-packs",
        title: "Seafood Packs",
        note: "All seafood meal platters are crumbed only. All cod is 113–170g and includes lemon, tartare & tomato sauce. Platters are not plated individually; extra plates & cutlery are supplied.",
        items: [
          { name: "Snack Pack", description: "1 cod, chips, tartare & tomato sauce with lemon.", price: "$11.00" },
          { name: "Pirate Pack", description: "1 cod, 1 calamari, 1 prawn cutlet, 1 seafood stick, 1 seafood bite, 1 potato scallop, chips, tartare & tomato sauce with lemon.", price: "$22.00" },
          { name: "Fisherman's Basket", description: "2 cod, 2 calamari, 2 prawn cutlets, 2 seafood sticks, 2 seafood bites, 2 potato scallops, small chips, medium tartare & tomato sauce with lemon.", price: "$44.00" },
          { name: "Beer Battered Flathead", description: "With chips & greek, garden salad or coleslaw, tartare & tomato sauce with lemon.", price: "$28.00" },
        ],
      },
      {
        id: "family-packs",
        title: "Family Packs",
        note: "Takeaway only. Cod fillets in packs are 113–170g, crumbed only. All packs served with lemon.",
        items: [
          { name: "Family Pack", description: "4 crumbed cod, small chips, 1 medium tartare & 1 medium tomato sauce. Add 4 potato scallops + $8.00 (save $4.00).", price: "$40.00" },
          { name: "Mega Fish Pack", description: "6 crumbed cod, medium chips, 2 medium tartare & 2 medium tomato sauce. Add 6 potato scallops + $12.00 (save $6.00).", price: "$56.00" },
          { name: "Jumbo Fish Pack", description: "8 crumbed cod, large chips, 2 medium tartare & 2 medium tomato sauce. Add 8 potato scallops + $16.00 (save $8.00).", price: "$80.00" },
        ],
      },
      {
        id: "prawn-meals",
        title: "Aussie Prawn Meals",
        items: [
          { name: "8 Pan Fried Aussie Prawn Cutlets", description: "With spinach in a creamy sauce of your choice (curry, garlic or spicy chilli) on a bed of rice or fettuccine.", price: "$28.80" },
          { name: "8 Battered Aussie Prawn Cutlets", description: "With honey or sweet & sour sauce, on a bed of rice or fettuccine.", price: "$28.80" },
        ],
      },
      {
        id: "calamari",
        title: "Calamari — Squid",
        items: [
          { name: "Calamari Chest", description: "8 tender hand-cut crumbed rings over chips, tartare & tomato sauce with lemon.", price: "$17.80" },
          { name: "Calamari Meal", description: "8 tender hand-cut strips of crumbed calamari with your choice of seasoning (salt & pepper, lemon chilli garlic, cajun) over chips with tartare & lemon.", price: "$17.80" },
          { name: "Spanish Calamari", description: "8 battered calamari with hand cut roasted potato in tomato relish with aioli & lemon.", price: "$18.50" },
          { name: "Calamari Steak (180–200g)", description: "Tender grilled pineapple-cut squid tube sprinkled with cajun, salt & pepper or lemon chilli garlic seasoning. With chips and a small greek or garden salad, tartare & lemon.", price: "$18.50" },
          { name: "Warm Calamari Salad", description: "Tender hand-cut calamari, pan fried, over greek or garden salad with lemon, coriander ginger & lime dressing on side.", price: "$22.00" },
        ],
      },
      {
        id: "specialties",
        title: "Seafood Specialties",
        items: [
          { name: "Pelican's Mussel Special", description: "Premium mussels in a rich creamy garlic sauce on a bed of rice or fettuccine.", price: "$20.00" },
          { name: "Pelican's Seafood Supreme", description: "Prawns, sea scallops, calamari, mussel meat and fish in a rich creamy garlic sauce on a bed of rice or fettuccine.", price: "$29.00" },
          { name: "Pelican's Seafood Marinara", description: "Prawns, sea scallops, calamari, mussel meat & fish in a rich napolitana sauce on a bed of rice or fettuccine.", price: "$29.00" },
          { name: "Pelican Creamy Grilled Fish Special", description: "Fillet of snapper or barramundi, with spinach in a creamy sauce of your choice (curry, garlic or spicy chilli) on a bed of rice or fettuccine.", price: "$29.00" },
          { name: "Moreton Bay Bug", description: "4 halves pan-fried in garlic butter, served with lemon.", price: "$33.00" },
          { name: "Whole Goldband Snapper Butterflied", description: "Panko crumbed, with chips, greek, garden salad or coleslaw.", price: "$30.00" },
        ],
      },
      {
        id: "oysters",
        title: "Oysters",
        items: [
          { name: "Natural Oysters", price: "6 for $19.00 · 12 for $35.00" },
          { name: "Kilpatrick Oysters", description: "Topped with bacon & worcestershire sauce.", price: "6 for $24.00 · 12 for $44.00" },
          { name: "Oysters Panko Crumbed", price: "3 for $12.00" },
        ],
      },
    ],
  },
  {
    id: "salads-kids",
    title: "Salads & Kids",
    sections: [
      {
        id: "warm-salads",
        title: "Warm Salads",
        items: [
          { name: "Seafood Combination", description: "Pan-fried fish, prawns, calamari, mussel meat & sea scallops with coriander, ginger & lime dressing and a slice of lemon, over greek or garden salad.", price: "$28.00", tags: ["GF"] },
          { name: "Grilled Salmon Salad", description: "Tassie grilled salmon over greek or garden salad, with lemon & coriander, ginger & lime dressing on side.", price: "$26.00", tags: ["GF"] },
          { name: "Smoked Salmon Salad", description: "Shaved Tassie salmon over a greek or garden salad, with coriander, ginger & lime dressing on side.", price: "$24.00", tags: ["GF"] },
          { name: "Lobster Tails Panko Crumbed", description: "Over greek or garden salad with lemon, coriander ginger & lime dressing on side.", price: "$28.00" },
          { name: "Chicken", description: "Tender grilled chicken over greek or garden salad with aioli on the side.", price: "$20.00", tags: ["GF"] },
          { name: "Halloumi Salad", description: "Grilled halloumi, sundried tomatoes, avocado, pumpkin, mixed lettuce, aioli & dukkah. Add grilled chicken + $6.00.", price: "$20.00" },
        ],
      },
      {
        id: "nestlings",
        title: "Nestlings (Kids)",
        items: [
          { name: "Nuggets", description: "4 chicken nuggets, chips & tomato sauce.", price: "$9.00" },
          { name: "Fish Bites", description: "4 crumbed fish bites, chips, tartare & tomato sauce.", price: "$9.00" },
          { name: "Mini Cheese Burger Slider", description: "Chips & tomato sauce.", price: "$9.00" },
          { name: "Mini Chicken Burger Slider", description: "Chips & tomato sauce.", price: "$9.00" },
          { name: "Popcorn Chicken Bites", description: "1 serve.", price: "$8.00" },
          { name: "Mini Pluto Pup", description: "Chips & tomato sauce.", price: "$7.00" },
          { name: "4 Mac & Cheese Bites", description: "Chips & tomato sauce.", price: "$8.00" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Sweets",
    sections: [
      {
        id: "coffee",
        title: "Coffee",
        note: "Small (cup) $4.70 · Regular (mug) $5.70 · Large (takeaway only) $6.70 — cappuccino, flat white, latte, long black, hot mocha, hot chocolate, chai latte, dirty chai, decaf.",
        items: [
          { name: "Affogato", price: "$5.00" },
          { name: "Piccolo", price: "$4.00" },
          { name: "Macchiato", price: "$4.00" },
          { name: "Short Black", price: "$3.80" },
          { name: "Babyccino", price: "$1.80" },
          { name: "Pup Cup", price: "$1.80" },
          { name: "Syrup (caramel, vanilla, hazelnut)", price: "+ $0.80" },
          { name: "Alternative milk (almond, soy, lactose free, oat)", price: "+ $1.00" },
          { name: "Extra coffee shot", price: "+ $1.00" },
        ],
      },
      {
        id: "tea",
        title: "Tea",
        note: "English breakfast, earl grey, green, peppermint.",
        items: [
          { name: "Tea — Small", price: "$3.50" },
          { name: "Tea — Regular", price: "$3.80" },
          { name: "Tea — Large / Pot", price: "$4.50" },
        ],
      },
      {
        id: "iced",
        title: "Iced Drinks",
        items: [
          { name: "Iced Coffee / Mocha", description: "Served with ice cream and cream.", price: "$9.90" },
          { name: "Iced Chocolate", description: "Served with ice cream and cream.", price: "$9.90" },
          { name: "Iced Latte", description: "Coffee, milk & ice.", price: "$7.00" },
          { name: "Iced Long Black", price: "$6.50" },
          { name: "Iced Chai", price: "$7.00" },
        ],
      },
      {
        id: "shakes",
        title: "Shakes, Frappes & Smoothies",
        items: [
          { name: "Frappes", description: "Blended with ice: mango · pomegranate & raspberry · mango, guava & lychee · pine coco · mocha, coffee · chocolate.", price: "$7.70" },
          { name: "Kidshakes", price: "$7.00" },
          { name: "Milkshakes", price: "$9.00" },
          { name: "Thickshakes", description: "Vanilla, caramel, chocolate, strawberry, banana, lime, coffee. Malt + $2.00, alternative milk + $1.00.", price: "$11.00" },
          { name: "Loaded Thickshakes", description: "Snickers, Biscoff, Oreo cookies and cream.", price: "$13.00" },
          { name: "Smoothies", description: "Blended with milk & ice cream: mango or banana.", price: "$9.90" },
        ],
      },
      {
        id: "fruit-smoothies",
        title: "Fruit Smoothies",
        note: "Real fruit blended with your choice of apple juice or coconut water.",
        items: [
          { name: "Berry Go Round", description: "Acai, blueberry, raspberry, banana.", price: "$12.90", tags: ["GF", "Vegan"] },
          { name: "Whitsunday Tropical", description: "Mango, passionfruit, pineapple, banana.", price: "$12.90", tags: ["GF", "Vegan"] },
          { name: "Green Machine", description: "Kiwi, kale, mango, pineapple.", price: "$12.90", tags: ["GF", "Vegan"] },
          { name: "Power Protein", description: "Banana, dates, oats, coconut, pea protein, served with milk. Alternative milk + $1.00.", price: "$12.90" },
        ],
      },
      {
        id: "sweets",
        title: "Ice Cream & Sweet Delights",
        items: [
          { name: "Kids Cone / Cup", price: "$4.40" },
          { name: "Single Cone / Cup", price: "$5.20" },
          { name: "Single Waffle", price: "$6.20" },
          { name: "Extra Scoop", price: "$3.00" },
          { name: "Donut Fries", description: "Dusted in cinnamon sugar.", price: "$7.70" },
          { name: "5 Apple Filled Churro Bites", description: "Dusted in cinnamon sugar. Add ice cream + $4.40.", price: "$8.80" },
        ],
      },
    ],
  },
];

/** Fish by the piece — the build-your-own board. */
export const fish = [
  { id: "cod", name: "Cod", origin: "S.A. Hake · large 180–280g", flavour: "White; large soft flakes; mild sweet flavour.", price: 12.0 },
  { id: "snapper", name: "Snapper", origin: "Goldband", flavour: "White, firm, mild flavour.", price: 17.8 },
  { id: "barra-fillet", name: "Barra Fillet", origin: "Barramundi", flavour: "Moist, sweet earthy flavour.", price: 17.0 },
  { id: "barra-steak", name: "Barra Steak", origin: "Barramundi", flavour: "Moist, sweet earthy flavour.", price: 17.0, only: ["grilled", "gf-grilled"] },
  { id: "salmon", name: "Tassie Salmon", origin: "Tasmania", flavour: "Clean rich flavour.", price: 17.0, only: ["grilled", "gf-grilled"] },
  { id: "sea-perch", name: "Sea Perch", origin: "NZ", flavour: "White fish, firm flakes, mild flavour.", price: 16.8 },
  { id: "whiting", name: "Whiting", origin: "Moreton Bay Qld / Aus", flavour: "White; small firm flakes; very mild flavour.", price: 13.0 },
  { id: "flake", name: "Flake", origin: "Qld / NZ", flavour: "White, firm, mild and sweet.", price: 12.0 },
  { id: "flathead", name: "Flathead", origin: "Australia", flavour: "White, with finely textured flesh.", price: 17.0, only: ["crumbed", "battered"] },
] as const;

export const fishStyles = [
  { id: "crumbed", name: "Crumbed", extra: 0 },
  { id: "battered", name: "Battered", extra: 0 },
  { id: "grilled", name: "Grilled (flour & butter)", extra: 1 },
  { id: "gf-grilled", name: "Gluten free grilled", extra: 2 },
  { id: "panko", name: "Panko crumbed", extra: 0.8 },
] as const;

export const seasonings = ["Cajun", "Salt & Pepper", "Lemon Chilli Garlic", "Garlic Butter"] as const;
export const seasoningPrice = 1;
export const mealPrice = 11;
export const mealDescription = "Add chips & salad — small greek, garden salad or coleslaw";

export const houseNotes = [
  "All prices are inclusive of GST. Menu and prices may change without notification.",
  "Public holidays attract a 15% surcharge.",
  "No bill splitting. No substitutes on menu items.",
  "While we offer gluten-free options, we are not a gluten-free kitchen; cross contamination could occur and we can't guarantee any item is completely free of allergens. Products may contain traces of nuts.",
  "Although great care is taken to remove bones from fish and grit from prawns, some may remain.",
];

export const oilNote = "Our cooking oil is cholesterol free, high in monounsaturated and low in saturated fats — 100% Australian, locally grown & processed.";
