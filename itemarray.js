const items = [
  {
    name: 'stun gun',
    image: 'images/items/cda_stungunicon.png',
    category: 'melees',
    pricerange: 'Under 10k',
    price: '800-1.2k'
  },
  {
    name: 'dragon breath knife',
    image: 'images/items/era_auction20-bbb-dragonbreath-knife-icon.gif',
    category: 'melees',
    pricerange: '10k-50k',
    price: '40k-55k',
    video: "<a href='https://youtu.be/4wu-G7k5r9w?si=s20hyqb0OpJ1iI4k'>About</a>"
  },
  { /////////////////////
    name: 'guardian angel trashpick',
    image: 'images/items/era_auction20-bbb-guardianangel-trashpick-icon.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  {
    name: 'thunder blade',
    image: 'images/items/era_auction20-bbb-majestic-thunderblade-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '70k-75k'
  },
  {
    name: 'inferno blade',
    image: 'images/items/era_auction20-cromyz-infernoblade-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '55k-60k'
  },
  {
    name: 'unknown dimension katana',
    image: 'images/items/era_auction20_mic-unknowndemensionkatanaframes-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '200k-230k'
  },
  {
    name: 'black matter katana',
    image: 'images/items/era_auction21-blackmatter-katana-icon.gif',
    category: 'melees',
    pricerange: '1m+',
    price: '2.3m+'
  },
  { /////////////////////
    name: 'shadow daggers',
    image: 'images/items/era_auction22-cpu-shwknife-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1.7m-2m'
  },
  { /////////////////////
    name: 'karafuru katana',
    image: 'images/items/era_bailey-bf21-karafurukatana-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '65k-75k'
  },
  {
    name: 'ice mage',
    image: 'images/items/era_bailey-presents21-icemage-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '11m-12m'
  },
  {
    name: 'beaver hammer',
    image: 'images/items/era_bas-timo-item-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k+'
  },
  { 
    name: 'Icy Wrath',
    image: 'images/items/era_bbb-xmas19-contest-melee-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: 'Unknown'
  },
  {
    name: 'bolt wand',
    image: 'images/items/era_bf-icon-canwebuildit-medieval-kyle-wand.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '30k-40k'
  },
  {
    name: 'templar dagger',
    image: 'images/items/era_bf-icon-canwebuildit-medieval-vaki-templardagger.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  {
    name: 'golden butterfly knife',
    image: 'images/items/era_bitzsam-goldenbutterflyknife-new-icon.gif',
    category: 'melees',
    pricerange: '1m+',
    price: '2m+'
  },
  {
    name: 'bone trashpick',
    image: 'images/items/era_bone_trashpick-icon.png',
    category: 'trashpicks',
    pricerange: '10k-50k',
    price: '25k-30k'
  },
  {
    name: 'winter staff',
    image: 'images/items/era_bram-winterstaff-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '75k-80k'
  },
  { ///////////////////
    name: 'broken shovel',
    image: 'images/items/era_brokenshovel.png',
    category: 'show-off items',
    pricerange: '1m+',
    price: 'unknown'
  },
  { ///////////////////
    name: 'golden honey stick',
    image: 'images/items/era_cpu-bee22-golden-honey-stick-melee-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '10k-12k'
  },
  { ///////////////////
    name: 'blood trident',
    image: 'images/items/era_cpu-halloween22-blood-trident-icon1.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '70k-85k'
  },
  { ///////////////////
    name: 'chaos blade',
    image: 'images/items/era_cpu-presents22-chaosblade-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '50k-60k'
  },
  { ///////////////////
    name: 'sky breaker',
    image: 'images/items/era_cpu-presents22-thesky-breaker-icon1.png',
    category: 'melees',
    pricerange: '1m+',
    price: '3m+'
  },
  { ///////////////////
    name: 'rainbow skateboard trashpick',
    image: 'images/items/era_crimiz-store-skatepick-icon1.png',
    category: 'trashpicks',
    pricerange: '500k-1m',
    price: '700k-850k'
  },
  {
    name: 'monkey melee',
    image: 'images/items/era_crissi-minimonkey-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '350k-375k'
  },
  { ///////////////////
    name: 'galactic frost blade',
    image: 'images/items/era_crom-xmas22-galactic-frost-blade-icon1.png',
    category: 'melees',
    pricerange: 'Under 10k',
    price: '3k-6k'
  },
  { ///////////////////
    name: 'vanquisher',
    image: 'images/items/era_crom-xmas22-vanquisher-icon-21.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1m-2m'
  },
  {
    name: 'elite blade',
    image: 'images/items/era_elite_blade-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '25-30k'
  },
  {
    name: 'fish slap',
    image: 'images/items/era_fishmelee-icon1.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '22k-25k'
  },
  { ///////////////////
    name: 'pimp hat',
    image: 'images/items/era_hat-icon-0871.png',
    category: 'hats',
    pricerange: '1m+',
    price: 'Unknown'
  },
  { ///////////////////
    name: 'police officer hat',
    image: 'images/items/era_hat-icon-1061.png',
    category: 'hats',
    pricerange: '1m+',
    price: 'Unknown'
  },
  { ///////////////////
    name: 'modern katana',
    image: 'images/items/era_i-mkatana1.png',
    category: 'melees',
    pricerange: '1m+',
    price: 'Unknown'
  },
  {
    name: 'butterfly knife',
    image: 'images/items/era_icon-bitzsam-butterflyknifegold1.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1.2m+'
  },
  {
    name: 'blookat katana',
    image: 'images/items/era_icon-bk-katana.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1m-2m+'
  },
  {
    name: 'black cape',
    image: 'images/items/era_icon-blackcape.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '140k-160k'
  },
  {
    name: 'candy bar melee',
    image: 'images/items/era_icon-candybar.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '35k-45k'
  },
  {
    name: 'taco hammer',
    image: 'images/items/era_icon-cdmtacohammer.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '50k-60k'
  },
  {
    name: 'chaplain dagger',
    image: 'images/items/era_icon-chaplaindagger1.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '12k-15k'
  },
  {
    name: 'cigar trashpick',
    image: 'images/items/era_icon-cigartrashpick.png',
    category: 'trashpicks',
    pricerange: '50k-100k',
    price: '70k-80k'
  },
  { 
    name: 'red drag sword',
    image: 'images/items/era_icon-daggershiz.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '180k-200k'
  },
  { 
    name: 'green drag sword',
    image: 'images/items/era_icon-dragsword-green.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '90k-100k'
  },
  {
    name: 'bunny hammer',
    image: 'images/items/era_icon-e13_5.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '70k-85k'
  },
  {
    name: 'lolli sword',
    image: 'images/items/era_icon-e13_lollisword.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '250k-280k'
  },
  {
    name: 'facebook axe',
    image: 'images/items/era_icon-fbaxe21.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: 'unknown'
  },
  {
    name: 'flamecrow wings',
    image: 'images/items/era_icon-fcwings.png',
    category: 'show-off items',
    pricerange: '500k-1m',
    price: 'unknown'
  },
  {
    name: 'graalians hammer',
    image: 'images/items/era_icon-gchammer.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-120k'
  },
  {
    name: 'ice cream melee',
    image: 'images/items/era_icon-icecreammelee.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '50k-65k'
  },
  {
    name: 'jeni umbrella',
    image: 'images/items/era_icon-jeni-pinkumbrella.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '200k-250k'
  },
  {
    name: 'la chancla',
    image: 'images/items/era_icon-lachancla.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '18k-20k'
  },
  {
    name: 'lollo hammer',
    image: 'images/items/era_icon-lollohammer.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '65k-85k'
  },
  {
    name: 'valentines axe',
    image: 'images/items/era_icon-mamo-vaxe.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  {
    name: 'sapphire dagger',
    image: 'images/items/era_icon-mamo-vdaydagger.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  { ///////////////////
    name: 'pickaxe',
    image: 'images/items/era_icon-minin-pickaxe.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '200k-220k'
  },
  {
    name: 'purple mushroom knife',
    image: 'images/items/era_icon-mushroomknife1.png',
    category: 'mushroom knives',
    pricerange: '500k-1m',
    price: '500k+'
  },
  {
    name: 'red mushroom knife',
    image: 'images/items/era_icon-mushroomknife2.png',
    category: 'mushroom knives',
    pricerange: '500k-1m',
    price: '500k+'
  },
  {
    name: 'blue mushroom knife',
    image: 'images/items/era_icon-mushroomknife3.png',
    category: 'mushroom knives',
    pricerange: '500k-1m',
    price: '600k-1m'
  },
  {
    name: 'noob hammer',
    image: 'images/items/era_icon-noobhammer.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1m+'
  },
  { ///////////////////
    name: 'panda hammer',
    image: 'images/items/era_icon-pandahammer.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '600k-750k'
  },
  {
    name: 'pencil trashpick',
    image: 'images/items/era_icon-pencilmelee.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '180k-200k'
  },
  {
    name: 'pen trashpick',
    image: 'images/items/era_icon-penmelee.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '200k+'
  },
  {
    name: 'homeless witch dagger',
    image: 'images/items/era_icon-princessdagger.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '500k-550k'
  },
  {
    name: 'skateboard trashpick',
    image: 'images/items/era_icon-skateboardtrashpick1-0.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '145k-160k'
  },
  {
    name: 'superfart',
    image: 'images/items/era_icon-superfart.png',
    category: 'show-off items',
    pricerange: '100k-500k',
    price: '110-120k'
  },
  {
    name: 'syringe trashpick',
    image: 'images/items/era_icon-syringetrashpick.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '200k-250k'
  },
  {
    name: 'thermometer trashpick',
    image: 'images/items/era_icon-thermo1.png',
    category: 'trashpicks',
    pricerange: '100k-500k',
    price: '100k-150k'
  },
  {
    name: 'toy bat',
    image: 'images/items/era_icon-toybat.png',
    category: 'show-off items',
    pricerange: '100k-500k',
    price: 'unknown'
  },
  {
    name: 'gold umbrella',
    image: 'images/items/era_icon-umbrellagold.png',
    category: 'umbrellas',
    pricerange: '1m+',
    price: '1.5m+'
  },
  {
    name: 'summer umbrella',
    image: 'images/items/era_icon-umbrellakuroneko.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '450k-500k'
  },
  {
    name: 'flower umbrella',
    image: 'images/items/era_icon-umbrellakuroneko2.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '700k-800k'
  },
  {
    name: 'black umbrella',
    image: 'images/items/era_icon-unbrellamelee.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '110-120k'
  },
  {
    name: 'blue umbrella',
    image: 'images/items/era_icon-unbrellameleeblue.png',
    category: 'umbrellas',
    pricerange: '1m+',
    price: '1m-1.2m'
  },
  {
    name: 'green umbrella',
    image: 'images/items/era_icon-unbrellameleegreen.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '500k-550k'
  },
  {
    name: 'pink umbrella',
    image: 'images/items/era_icon-unbrellameleepink.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '700k-750k'
  },
  {
    name: 'purple umbrella',
    image: 'images/items/era_icon-unbrellameleepurple.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '900k-950k'
  },
  {
    name: 'red umbrella',
    image: 'images/items/era_icon-unbrellameleered.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '800k-850k'
  },
  {
    name: 'white umbrella',
    image: 'images/items/era_icon-unbrellameleewhite.png',
    category: 'umbrellas',
    pricerange: '500k-1m',
    price: '700k-750k'
  },
  {
    name: 'vine whip',
    image: 'images/items/era_icon-vinewhip.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '40k-50k'
  },
  { ///////////////////
    name: 'homeless witch wand',
    image: 'images/items/era_icon-wand-hw.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '500-550k'
  },
  {
    name: 'wizard staff',
    image: 'images/items/era_icon-wizstaff.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  {
    name: 'spd fart',
    image: 'images/items/era_icon_spd13_superfart1.png',
    category: '',
    pricerange: '100k-500k',
    price: '110k-120k'
  },
  { ///////////////////
    name: 'black rose',
    image: 'images/items/era_jeni-blackrose.png',
    category: 'show-off items',
    pricerange: '1m+',
    price: 'Unknown'
  },
  {
    name: 'diamond mushroom knife',
    image: 'images/items/era_jordan-auction-diamondmushknife-icon.png',
    category: 'mushroom knives',
    pricerange: '100k-500k',
    price: '300k-320k'
  },
  {
    name: 'diamond trashpick',
    image: 'images/items/era_jordan-auction-diamondtp-icon.png',
    category: 'trashpicks',
    pricerange: '10k-50k',
    price: '25k-30k'
  },
  {
    name: 'pumpkin umbrella',
    image: 'images/items/era_jordan-auction-pumpkinumbrella-icon.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '250k-270k'
  },
  {
    name: 'recon blade',
    image: 'images/items/era_jordan-halloween19-blade-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '200k-220k'
  },
  {
    name: 'nuclear blade',
    image: 'images/items/era_jordan-nuclearstone-blade-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  {
    name: 'flaming dagger',
    image: 'images/items/era_jordan-xmas20-fireblade-icon1.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '85k-95k'
  },
  {
    name: 'futuristic katana',
    image: 'images/items/era_katana-ani16-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '15k-20k'
  },
  {
    name: 'cat melee',
    image: 'images/items/era_kittymelee-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  { 
    name: 'toy hammer',
    image: 'images/items/era_kuroneko-toyhammer-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '70k-90k'
  },
  { ///////////////////
    name: '3rd place crypt trophy 2015',
    image: 'images/items/era_lafez-crypt-trophy-3th-price.png',
    category: 'show-off items',
    pricerange: '500k-1m',
    price: 'Unknown'
  },
  {
    name: 'marshmallow dagger',
    image: 'images/items/era_marshmallow_mele-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '60-70k'
  },
  {
    name: 'crayon trashpick',
    image: 'images/items/era_mila_red-crayon-icon.png',
    category: 'trashpicks',
    pricerange: '10k-50k',
    price: '15k-18k'
  },
  {
    name: 'chainsaw',
    image: 'images/items/era_motive-chainsawicon.gif',
    category: 'melees',
    pricerange: '50k-100k',
    price: '90k-95k'
  },
  {
    name: 'nature ridden axe',
    image: 'images/items/era_olirus-2018-natureriddenaxe-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '10k-15k'
  },
  {
    name: 'paladin staff',
    image: 'images/items/era_olirus-2018-paladinstaff-icon.png',
    category: '',
    pricerange: '10k-50k',
    price: '45k-50k'
  },
  { ///////////////////
    name: 'blue plasma scythe',
    image: 'images/items/era_olirus-2018-plasmacorpscythe-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  { ///////////////////
    name: 'red plasma scythe',
    image: 'images/items/era_olirus-2018-plasmacorpscythe-iconred.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  {
    name: 'void dagger',
    image: 'images/items/era_olirus-2018-voiddagger-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '3m-3.5m'
  },
  {
    name: 'blue toothed sword',
    image: 'images/items/era_olirus-2019-eventshop-toothedsword-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '12k-14k'
  },
  {
    name: 'red toothed sword',
    image: 'images/items/era_olirus-2019-eventshop-toothedsword2-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '12k-14k'
  },
  {
    name: 'magma axe',
    image: 'images/items/era_olirus-magmaaxe-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '300k-400k'
  },
  {
    name: 'plunger trashpick',
    image: 'images/items/era_plunger_trashpick-icon.png',
    category: 'trashpicks',
    pricerange: '50k-100k',
    price: '50k-60k'
  },
  {
    name: 'abyssal mark',
    image: 'images/items/era_qwerty-bf21-sword-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  {
    name: 'sorcerers wand',
    image: 'images/items/era_qwerty-halloween21-sorcerers-wand-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '15k-18k'
  },
  { ///////////////////
    name: 'water slayer',
    image: 'images/items/era_qwerty-seamonster21-water-sword-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: 'Unknown'
  },
  {
    name: 'dual knives',
    image: 'images/items/era_qwerty-xmas21-dual-knives-icon1.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '120k-130k'
  },
  {
    name: 'dino hat',
    image: 'images/items/era_rare-blackfacehat-icon.gif',
    category: 'hats',
    pricerange: '1m+',
    price: '7m+'
  },
  {
    name: 'christmas umbrella',
    image: 'images/items/era_raul-xmasumbrella-icon.png',
    category: 'umbrellas',
    pricerange: '50k-100k',
    price: '80k-85k'
  },
  {
    name: 'palm umbrella',
    image: 'images/items/era_rima-auctions-palmumbrellaicon.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '210k-230k'
  },
  {
    name: 'legendary hat chest',
    image: 'images/items/era_rima-auctions21-auctionchest-icon.png',
    category: 'hats',
    pricerange: '100k-500k',
    price: '250k-270k'
  },
  {
    name: 'bubbly umbrella',
    image: 'images/items/era_rima-bf22-bubblyumbrella-icon.gif',
    category: 'umbrellas',
    pricerange: '50k-100k',
    price: '80k-90k'
  },
  {
    name: 'rare flower basket',
    image: 'images/items/era_rima-flower2018-rarebasket-icon.png',
    category: '',
    pricerange: '10k-50k',
    price: '35k-45k'
  },
  { ///////////////////
    name: 'ornament spear',
    image: 'images/items/era_rima-presents21-ornamentspear-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '7m+'
  },
  { ///////////////////
    name: 'cupid spear',
    image: 'images/items/era_rima-vday22-lovespear-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: 'Unknown'
  },
  { ///////////////////
    name: 'icy slasher',
    image: 'images/items/era_rima-xmas22-icyslasher-icon-1.png',
    category: 'melees',
    pricerange: '1m+',
    price: '2.5m+'
  },
  {
    name: 'rage blade',
    image: 'images/items/era_shiz-idkblade-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '130k-150k'
  },
  {
    name: 'mermaid staff',
    image: 'images/items/era_sio-seamonster21-mermaidstaff-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '40k-50k'
  },
  {
    name: 'sea staff',
    image: 'images/items/era_sio-summer2021-seastaff-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '14k-16k'
  },
  {
    name: 'ice blade',
    image: 'images/items/era_storm_daggericon1.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  {
    name: 'bamboo sword',
    image: 'images/items/era_timo_bamboosword-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '70k-80k'
  },
  {
    name: 'turkey chunk',
    image: 'images/items/era_timo_turkeychunk-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '22k-27k'
  },
  {
    name: 'rainbow cape',
    image: 'images/items/era_tricky-rainbow22-cape-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '2m+'
  },
  {
    name: 'shark mount',
    image: 'images/items/era_tricky-summer20-sharkie-icon.png',
    category: 'mounts',
    pricerange: '100k-500k',
    price: '100k-110k'
  },
  {
    name: 'shrimp mount',
    image: 'images/items/era_tricky-wgkc21-shrimpomount-icon.png',
    category: 'mounts',
    pricerange: '10k-50k',
    price: '18k-22k'
  },
  { ///////////////////
    name: 'rainbow umbrella',
    image: 'images/items/era_umbrella-rainbow-icon.png',
    category: 'umbrellas',
    pricerange: '1m+',
    price: '1.8m-2m'
  },
  { ///////////////////
    name: 'shrouded edge',
    image: 'images/items/era_vera-auction20-mafiadon-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: 'Unknown'
  },
  {
    name: 'zodiac sign melee',
    image: 'images/items/era_vera-bf20-zodiacsign-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '25k-30k'
  },
  {
    name: 'fangtian spear',
    image: 'images/items/era_vera-cny21-spear-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '20k-25k'
  },
  {
    name: 'ragnarok axe',
    image: 'images/items/era_vera-crypt19-rereborn-axe-icon.png',
    category: '',
    pricerange: '10k-50k',
    price: '7k-11k'
  },
  { ///////////////////
    name: 'flame katana',
    image: 'images/items/era_vera-firekatana-icon.gif',
    category: 'melees',
    pricerange: '1m+',
    price: 'Unknown'
  },
  { ///////////////////
    name: 'devils kanabo',
    image: 'images/items/era_vera-hw22-melee1-icon.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '620k+'
  },
  {
    name: 'ryouma dual blades',
    image: 'images/items/era_vera-jpn21-bkatana-icon.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '650k-680k'
  },
  {
    name: 'neutron katana',
    image: 'images/items/era_vera-neutron-katana-icon1.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '100k-105k'
  },
  {
    name: 'plasma neutron claws',
    image: 'images/items/era_vera-plasma-claws-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1.4m-1.6m'
  },
  {
    name: 'plasma neutron fists',
    image: 'images/items/era_vera-plasma-punch-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '210k-220k'
  },
  {
    name: 'gothic umbrella',
    image: 'images/items/era_vera-presents19-umbrella-icon.png',
    category: 'umbrellas',
    pricerange: '100k-500k',
    price: '400k-450k'
  },
  {
    name: 'peacekeeper',
    image: 'images/items/era_vera-xmas-present-peacekeeper-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '17k-20k'
  },
  {
    name: 'reapers of torment',
    image: 'images/items/era_vera-xmas-present-reapertorment-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '375k-425k'
  },
  {
    name: 'areadbhar',
    image: 'images/items/era_vera-xmas21-spear-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: '1m+'
  },
  {
    name: 'angel wings',
    image: 'images/items/era_water-angelwings-icon.png',
    category: 'mounts',
    pricerange: '1m+',
    price: '4m+'
  },
  { ///////////////////
    name: 'demon wings',
    image: 'images/items/era_water-demonwings-icon.png',
    category: 'mounts',
    pricerange: '1m+',
    price: '3.5m-3.7m'
  },
  {
    name: 'blood sword',
    image: 'images/items/era_yuki-blackfriday20-sword-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '16k-18k'
  },
  {
    name: 'aqua blade',
    image: 'images/items/era_yuki-halloween20-aquablade-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '10k-12k'
  },
  { ///////////////////
    name: 'frost slayer',
    image: 'images/items/era_yuki-xmas20-melee1-icon1.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '10k-11k'
  },
  {
    name: 'inferno slayer',
    image: 'images/items/era_yuki-xmas20-weapon2-icon.png',
    category: 'melees',
    pricerange: '10k-50k',
    price: '45k-50k'
  },
  {
    name: 'kenshi katana',
    image: 'images/items/ezio_katana_icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '105k-115k'
  },
  {
    name: 'spear trashpick',
    image: 'images/items/hermes-spear-icon.png',
    category: 'trashpicks',
    pricerange: '50k-100k',
    price: '50k-55k'
  },
  { ///////////////////
    name: 'pepper pickaxe',
    image: 'images/items/icon_era-cdmbaspepperpickaxe.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '150k-200k'
  },
  { ///////////////////
    name: 'layerd saber',
    image: 'images/items/kuro_lay-bday-melee-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: 'Unknown'
  },
  {
    name: 'layerd dagger',
    image: 'images/items/layerd-birthdaydagger-icon.png',
    category: 'melees',
    pricerange: '100k-500k',
    price: '150k-160k'
  },
  {
    name: 'paint trashpick',
    image: 'images/items/paintbrush-ay-icon.png',
    category: 'trashpicks',
    pricerange: '50k-100k',
    price: '50k-55k'
  },
  { ///////////////////
    name: 'layerd sword',
    image: 'images/items/shiz-lay-b-day-icon.png',
    category: 'melees',
    pricerange: '1m+',
    price: 'Unknown'
  },
  { ///////////////////
    name: 'wind dagger',
    image: 'images/items/shizbdaydagger-icon.png',
    category: 'melees',
    pricerange: '50k-100k',
    price: '50k-60k'
  },
  { ///////////////////
    name: 'mushroom dagger',
    image: 'images/items/timo_mushroomdaggericon.png',
    category: 'melees',
    pricerange: '500k-1m',
    price: '500k-550k'
  },
  { ///////////////////
    name: 'zombie morph',
    image: 'images/items/zombehz.png',
    category: 'show-off items',
    pricerange: '1m+',
    price: '1m+'
  }
];

const itemModal = document.getElementById('item-modal');
const modalContent = itemModal.querySelector('.modal-content');

let selectedItem = null;

function openModal(item) {
  // Store the selected item
  selectedItem = item;

  // Display item details in the modal
  modalContent.innerHTML = `
    <span class="close-modal" onclick="closeModal()">&times;</span>
    <h6 class="itemName">${item.name}</h6>
    <img src="${item.image}" alt="${item.name}" class="modalItemImage">
    <p class="category">Category: ${item.category}</p>
    <p class="price">Price: ${item.price}</p>
  `;

  itemModal.style.display = 'block';
}

function closeModal() {
  itemModal.style.display = 'none';

  // Reset the selected item when the modal is closed
  selectedItem = null;

  // Clear the modal content
  modalContent.innerHTML = '';
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function (event) {
  if (event.target === itemModal) {
    closeModal();
  }
};

const container = document.getElementById('item-list');

items.forEach(item => {
  const div = document.createElement('div');
  const img = document.createElement('img');

  img.setAttribute('src', item.image);
  img.setAttribute('alt', item.name);
  div.appendChild(img);
  container.appendChild(div);

  // Add a click event listener to open the modal for the item
  div.addEventListener('click', () => {
    openModal(item);
  });

  // Add item classes based on pricerange
  if (item.pricerange === 'Under 10k') {
    img.classList.add('item1');
  } else if (item.pricerange === '10k-50k') {
    img.classList.add('item2');
  } else if (item.pricerange === '50k-100k') {
    img.classList.add('item3');
  } else if (item.pricerange === '100k-500k') {
    img.classList.add('item4');
  } else if (item.pricerange === '500k-1m') {
    img.classList.add('item5');
  } else if (item.pricerange === '1m+') {
    img.classList.add('item6');
  }
});

// FILTER ITEMS

function filterItems() {
  const filter1 = document.getElementById('filter1').value;
  const filter2 = document.getElementById('filter2').value;

  // Filter items based on the selected criteria
  const filteredItems = items.filter(item => {
    return (
      (filter1 === '' || item.pricerange === filter1) &&
      (filter2 === '' || item.category === filter2)
    );
  });

  // Reset the selected item when filtering
  selectedItem = null;

  // Hide all items
  document.querySelectorAll('#item-list img').forEach(image => {
    image.parentElement.style.display = 'none';
  });

  // Show only the filtered items
  filteredItems.forEach(item => {
    const itemImage = document.querySelector(`img[src='${item.image}']`);
    if (itemImage) {
      itemImage.parentElement.style.display = 'block';
      itemImage.parentElement.addEventListener('click', () => {
        openModal(item);
      });
    }
  });
}

// Function to handle the search input
function searchImages() {
  const searchInput = document.getElementById('search');
  const query = searchInput.value.toLowerCase();
  const images = document.querySelectorAll('#item-list img');

  const filteredImages = items.filter(item => {
    return (
      item.name.toLowerCase().includes(query) &&
      (document.getElementById('filter1').value === '' || item.pricerange === document.getElementById('filter1').value) &&
      (document.getElementById('filter2').value === '' || item.category === document.getElementById('filter2').value)
    );
  });

  // Reset the selected item when searching
  selectedItem = null;

  images.forEach(image => {
    const itemImage = filteredImages.find(item => item.image === image.getAttribute('src'));
    image.parentElement.style.display = itemImage ? 'block' : 'none';
  });
}

// Function to validate search input
function validateSearchInput(inputElement) {
  const inputValue = inputElement.value;
  // Remove any non-alphabet characters and trim the input
  const sanitizedValue = inputValue.replace(/[^A-Za-z\s]/g, '').slice(0, 20);
  inputElement.value = sanitizedValue;
}
