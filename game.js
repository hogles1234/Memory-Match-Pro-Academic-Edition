//GAME CONTENT DATA 
// Structure: GAME_DATA[category][difficulty] = array of GAMES (one per level).
// Each GAME = { title, pairs: [ [[textA,emojiA],[textB,emojiB]]] }
// getPairs() picks game[(currentLevel-1) % games.length].pairs

const GAME_DATA = {

  // MATHEMATICS 
  Math: {
    Easy: [
      {
        title: 'Numbers and Counting',
        pairs: [
          [['1','☝️'],['One','']],
          [['2','✌️'],['Two','']],
          [['3','🤟'],['Three','']],
          [['4','🍀'],['Four','']],
        ]
      },
      {
        title: 'Basic Operations',
        pairs: [
          [['2 + 2',''],['4','']],
          [['3 - 1',''],['2','']],
          [['2 × 4',''],['8','']],
          [['6 ÷ 2',''],['3','']],
        ]
      },
      {
        title: 'Shapes and Geometry',
        pairs: [
          [['⚪',''],['Round shape, no corners','']],
          [['⬛',''],['4 equal sides, 4 corners','']],
          [['🔺',''],['3 sides, 3 corners','']],
          [['▭',''],['Opposite sides equal','']],
        ]
      },
      {
        title: 'Number Patterns',
        pairs: [
          [['1, 2, 3, ___',''],['4','']],
          [['2, 4, 6, ___',''],['8','']],
          [['5, 10, 15, ___',''],['20','']],
          [['10, 9, 8, ___',''],['7','']],
        ]
      },
      {
        title: 'Greater Than / Less Than',
        pairs: [
          [['3 > 2',''],['Three is greater than 2','']],
          [['5 < 8',''],['Five is less than eight','']],
          [['4 = 4',''],['Four equals four','']],
          [['7 > 5',''],['Seven is greater than five','']],
        ]
      },
    ],

    Medium: [
      {
        title: 'Numbers and Counting',
        pairs: [
          [['✌️ 2',''],['Two','']],
          [['🍀 4',''],['Four','']],
          [['🎲 6',''],['Six','']],
          [['🪐 8',''],['Eight','']],
          [['🔟 10',''],['Ten','']],
          [['🌟 12',''],['Twelve','']],
        ]
      },
      {
        title: 'Basic Operations',
        pairs: [
          [['3 + 2',''],['5','']],
          [['5 - 2',''],['3','']],
          [['2 × 3',''],['6','']],
          [['6 ÷ 2',''],['3','']],
          [['4 + 1',''],['5','']],
          [['8 ÷ 4',''],['2','']],
        ]
      },
      {
        title: 'Shapes and Geometry',
        pairs: [
          [['⬟ Pentagon',''],['5 sides','']],
          [['⬣ Hexagon',''],['6 sides','']],
          [['🥚 Oval',''],['Egg-shaped, 0 corners','']],
          [['🔶 Diamond',''],['Pointy top and bottom','']],
          [['📏 Trapezoid',''],['Parallel sides','']],
          [['🛑 Octagon',''],['8 sides','']],
        ]
      },
      {
        title: 'Number Patterns',
        pairs: [
          [['3, 6, 9, ___',''],['12','']],
          [['20, 18, 16, ___',''],['14','']],
          [['1, 4, 7, ___',''],['10','']],
          [['100, 90, 80, ___',''],['70','']],
          [['2, 5, 8, ___',''],['11','']],
          [['1, 1, 2, 3, 5, ___',''],['8','']],
        ]
      },
      {
        title: 'Greater Than / Less Than',
        pairs: [
          [['7 > 4',''],['Seven is greater than four','']],
          [['3 < 8',''],['Three is less than eight','']],
          [['5 = 5',''],['Five equals five','']],
          [['9 > 6',''],['Nine is greater than six','']],
          [['2 < 7',''],['Two is less than seven','']],
          [['10 = 10',''],['Ten equals ten','']],
        ]
      },
    ],

    Hard: [
      {
        title: 'Numbers and Counting',
        pairs: [
          [['🖐 5',''],['Five','']],
          [['🔟 10',''],['Ten','']],
          [['🎈 20',''],['Twenty','']],
          [['🍭 30',''],['Thirty','']],
          [['🌙 40',''],['Forty','']],
          [['🎲 50',''],['Fifty','']],
          [['🚀 60',''],['Sixty','']],
          [['🌟 70',''],['Seventy','']],
        ]
      },
      {
        title: 'Basic Operations',
        pairs: [
          [['6 + 6',''],['12','']],
          [['31 + 14',''],['45','']],
          [['21 - 7',''],['14','']],
          [['12 × 3',''],['36','']],
          [['11 × 8',''],['88','']],
          [['18 ÷ 3',''],['6','']],
          [['24 ÷ 4',''],['6','']],
          [['4 - 16',''],['12','']],
        ]
      },
      {
        title: 'Shapes and Geometry',
        pairs: [
          [['⚪ Circle',''],['Round shape','']],
          [['⬛ Square',''],['4 equal sides','']],
          [['🔺 Triangle',''],['3 sides','']],
          [['▭ Rectangle',''],['Opposite sides equal','']],
          [['🥚 Oval',''],['No corners','']],
          [['🔶 Diamond',''],['Pointy edges','']],
          [['⭐ Star',''],['5 points','']],
          [['💖 Heart',''],['Valentine shape','']],
        ]
      },
      {
        title: 'Number Patterns',
        pairs: [
          [['4, 8, 12, ___',''],['16','']],
          [['50, 45, 40, ___',''],['35','']],
          [['3, 9, 27, ___',''],['81','']],
          [['64, 32, 16, ___',''],['8','']],
          [['1, 3, 6, 10, ___',''],['15','']],
          [['2, 6, 18, ___',''],['54','']],
          [['81, 27, 9, ___',''],['3','']],
          [['1, 4, 9, 16, ___',''],['25','']],
        ]
      },
      {
        title: 'Greater Than / Less Than',
        pairs: [
          [['3 > 2',''],['Three is greater than 2','']],
          [['5 < 8',''],['Five is less than eight','']],
          [['4 = 4',''],['Four equals four','']],
          [['7 > 5',''],['Seven is greater than five','']],
          [['2 < 6',''],['Two is less than six','']],
          [['9 = 9',''],['Nine equals nine','']],
          [['10 > 1',''],['Ten is greater than 1','']],
          [['3 < 5',''],['Three is less than 5','']],
        ]
      },
    ],
  },

  //SHAPES 
  Shapes: {
    Easy: [
      {
        title: 'Basic 2D Shapes',
        pairs: [
          [['⚪',''],['Circle – Round shape','']],
          [['⬛',''],['Square – Equal sides','']],
          [['🔺',''],['Triangle – 3 sides','']],
          [['📏',''],['Rectangle – Long shape','']],
        ]
      },
      {
        title: 'How Many Sides?',
        pairs: [
          [['🔺 Triangle',''],['3 sides','']],
          [['⬛ Square',''],['4 sides, all equal','']],
          [['📏 Rectangle',''],['4 sides, opposite equal','']],
          [['⚪ Circle',''],['0 sides','']],
        ]
      },
      {
        title: '3D Shapes',
        pairs: [
          [['🎲',''],['Cube – Like a dice','']],
          [['⚽',''],['Sphere – Like a ball','']],
          [['🥤',''],['Cylinder – Like a can','']],
          [['🍦',''],['Cone – Like ice cream','']],
        ]
      },
      {
        title: 'Shapes in Real Life',
        pairs: [
          [['🍕 Pizza Slice',''],['🔺 Triangle','']],
          [['🕒 Clock',''],['⚪ Circle','']],
          [['🪟 Window',''],['⬛ Square','']],
          [['🚪 Door',''],['📏 Rectangle','']],
        ]
      },
      {
        title: 'Match the Shape Name',
        pairs: [
          [['⚪ Circle',''],['Round shape','']],
          [['⬛ Square',''],['Four equal sides','']],
          [['🔺 Triangle',''],['Three sides','']],
          [['📏 Rectangle',''],['Long and short sides','']],
        ]
      },
    ],

    Medium: [
      {
        title: 'Basic 2D Shapes',
        pairs: [
          [['Oval',''],['🥚','']],
          [['Diamond',''],['🔶','']],
          [['Star',''],['⭐','']],
          [['Heart',''],['❤️','']],
          [['Pentagon',''],['⬟','']],
          [['Hexagon',''],['⬣','']],
        ]
      },
      {
        title: 'How Many Sides?',
        pairs: [
          [['⬟ Pentagon',''],['5 sides','']],
          [['⬣ Hexagon',''],['6 sides','']],
          [['🥚 Oval',''],['0 sides','']],
          [['🔶 Diamond',''],['4 sides','']],
          [['🛑 Octagon',''],['8 sides','']],
          [['⭐ Star',''],['10 sides','']],
        ]
      },
      {
        title: '3D Shapes',
        pairs: [
          [['🛕 Pyramid',''],['Like Egypt','']],
          [['📦 Rectangular Prism',''],['Like a shoebox','']],
          [['🎲 Cube',''],['Like a dice','']],
          [['🏀 Sphere',''],['Like a ball','']],
          [['🥫 Cylinder',''],['Like a can','']],
          [['🍦 Cone',''],['Like ice cream','']],
        ]
      },
      {
        title: 'Shapes in Real Life',
        pairs: [
          [['🛑 Stop Sign',''],['Octagon','']],
          [['🥚 Egg',''],['Oval','']],
          [['🪁 Kite',''],['Diamond','']],
          [['🌟 Starfish',''],['Star','']],
          [['🎲 Dice',''],['Cube','']],
          [['⚽ Ball',''],['Sphere','']],
        ]
      },
      {
        title: 'Match the Shape Name',
        pairs: [
          [['🥚 Oval',''],['Egg shape','']],
          [['🔶 Diamond',''],['Pointy top and bottom','']],
          [['⭐ Star',''],['Five points','']],
          [['❤️ Heart',''],['Valentine shape','']],
          [['⬟ Pentagon',''],['Five sides','']],
          [['⬣ Hexagon',''],['Six sides','']],
        ]
      },
    ],

    Hard: [
      {
        title: 'Basic 2D Shapes',
        pairs: [
          [['🛑 Octagon',''],['8 sides','']],
          [['Trapezoid',''],['4 sides, 2 are parallel','']],
          [['Crescent',''],['🌙','']],
          [['Cross',''],['✝️','']],
          [['Arrow',''],['➡️','']],
          [['Semicircle',''],['Half a circle','']],
          [['Heptagon',''],['7 sides','']],
          [['Nonagon',''],['9 sides','']],
        ]
      },
      {
        title: 'How Many Corners?',
        pairs: [
          [['Triangle',''],['3 corners','']],
          [['Decagon',''],['10 corners','']],
          [['Rectangle',''],['4 corners','']],
          [['Pentagon',''],['5 corners','']],
          [['Hexagon',''],['6 corners','']],
          [['Octagon',''],['8 corners','']],
          [['Circle',''],['0 corners','']],
          [['Nonagon',''],['9 corners','']],
        ]
      },
      {
        title: '3D Shapes',
        pairs: [
          [['Cube','🎲'],['Like a dice','']],
          [['Sphere','⚽'],['Like a ball','']],
          [['Cylinder','🥫'],['Like a can','']],
          [['Cone','🍦'],['Like ice cream','']],
          [['Pyramid','🛕'],['Like Egypt','']],
          [['Rectangular Prism','📦'],['Like a shoebox','']],
          [['Triangular Prism','🍫'],['Like a Toblerone','']],
          [['Hemisphere','🍨'],['Half a sphere','']],
        ]
      },
      {
        title: 'Shapes in Real Life',
        pairs: [
          [['Can of soda','🥫'],['Cylinder','']],
          [['Ice cream cone','🍦'],['Cone','']],
          [['House roof','🏠'],['Triangle','']],
          [['Honeycomb cell',''],['Hexagon','']],
          [['Pizza box','📦'],['Rectangular Prism','']],
          [['Globe','🌍'],['Sphere','']],
          [['Party hat','🥳'],['Cone','']],
          [['Soccer ball','⚽'],['Sphere (with pentagons)','']],
        ]
      },
      {
        title: 'Match the Shape Name',
        pairs: [
          [['Octagon','🛑'],['Eight sides','']],
          [['Trapezoid',''],['Looks like a table','']],
          [['Parallelogram',''],['Slanted rectangle','']],
          [['Rhombus','♦'],['Diamond shape','']],
          [['Crescent','🌙'],['Moon shape','']],
          [['Cross','➕'],['Plus sign shape','']],
          [['Arrow','➡️'],['Points a direction','']],
          [['Semicircle','🌓'],['Half of a circle','']],
        ]
      },
    ],
  },

  // ANIMALS 
  Animals: {
    Easy: [
      {
        title: 'Farm Animals',
        pairs: [
          [['Cow','🐄'],['Says moo','']],
          [['Pig','🐖'],['Says oink','']],
          [['Chicken','🐔'],['Says cluck','']],
          [['Sheep','🐑'],['Says baa','']],
        ]
      },
      {
        title: 'Zoo Animals',
        pairs: [
          [['Lion','🦁'],['King of the jungle','']],
          [['Elephant','🐘'],['Has a long trunk','']],
          [['Giraffe','🦒'],['Has a long neck','']],
          [['Monkey','🐒'],['Loves bananas','']],
        ]
      },
      {
        title: 'Ocean Animals',
        pairs: [
          [['🐬 Dolphin',''],['Smart swimmer','']],
          [['🦈 Shark',''],['Sharp teeth','']],
          [['🐢 Turtle',''],['Slow swimmer','']],
          [['🐙 Octopus',''],['Has 8 arms','']],
        ]
      },
      {
        title: 'Animal Homes',
        pairs: [
          [['🐻 Bear',''],['Lives in a cave','']],
          [['🐦 Bird',''],['Lives in a nest','']],
          [['🦊 Fox',''],['Lives in a den','']],
          [['🐰 Rabbit',''],['Lives in a burrow','']],
        ]
      },
      {
        title: 'Baby Animals',
        pairs: [
          [['🐶 Puppy',''],['Baby dog','']],
          [['🐱 Kitten',''],['Baby cat','']],
          [['🐮 Calf',''],['Baby cow','']],
          [['🐑 Lamb',''],['Baby sheep','']],
        ]
      },
    ],

    Medium: [
      {
        title: 'Farm Animals',
        pairs: [
          [['Horse','🐎'],['Says neigh','']],
          [['Duck','🦆'],['Says quack','']],
          [['Goat','🐐'],['Says maa','']],
          [['Turkey','🦃'],['Says gobble','']],
          [['Donkey','🌾'],['Says hee-haw','']],
          [['Rooster','⏰'],['Says cock-a-doodle-doo','']],
        ]
      },
      {
        title: 'Zoo Animals',
        pairs: [
          [['Zebra','🦓'],['Has black and white stripes','']],
          [['Tiger','🐅'],['Has orange and black stripes','']],
          [['Kangaroo','🦘'],['Jumps and has a pouch','']],
          [['Panda','🐼'],['Black and white, loves bamboo','']],
          [['Polar Bear','🐻‍❄️'],['Lives where it\'s cold','']],
          [['Penguin','🐧'],['Waddles, cannot fly','']],
        ]
      },
      {
        title: 'Ocean Animals',
        pairs: [
          [['🐳 Whale',''],['Biggest sea animal','']],
          [['🦀 Crab',''],['Walks sideways','']],
          [['🐠 Clownfish',''],['Orange and white fish','']],
          [['🦑 Squid',''],['Shoots ink','']],
          [['🐬 Dolphin',''],['Very smart','']],
          [['⭐ Starfish',''],['Sea star','']],
        ]
      },
      {
        title: 'Wild Animals',
        pairs: [
          [['🦊 Fox',''],['Bushy tail','']],
          [['🐺 Wolf',''],['Howls at the moon','']],
          [['🦌 Deer',''],['Has antlers','']],
          [['🐍 Snake',''],['Slithers','']],
          [['🦉 Owl',''],['Active at night','']],
          [['🦇 Bat',''],['Hangs upside down','']],
        ]
      },
      {
        title: 'Animal Babies',
        pairs: [
          [['🐣 Chick',''],['Baby chicken','']],
          [['🐷 Piglet',''],['Baby pig','']],
          [['🐴 Foal',''],['Baby horse','']],
          [['🐐 Kid',''],['Baby goat','']],
          [['🦆 Duckling',''],['Baby duck','']],
          [['🐻 Cub',''],['Baby bear','']],
        ]
      },
    ],

    Hard: [
      {
        title: 'Farm Animals',
        pairs: [
          [['🐄 Cow gives us',''],['🥛 Milk','']],
          [['🐔 Chicken gives us',''],['🥚 Eggs','']],
          [['🐑 Sheep gives us',''],['🧶 Wool','']],
          [['🐖 Pig lives in',''],['A sty','']],
          [['🐎 Horse lives in',''],['A stable','']],
          [['🦆 Duck lives in',''],['A pond','']],
          [['🐮 Baby cow is called',''],['Calf','']],
          [['🐑 Baby sheep is called',''],['Lamb','']],
        ]
      },
      {
        title: 'Zoo Animals',
        pairs: [
          [['🐆 Cheetah',''],['Fastest land animal','']],
          [['🦛 Hippo',''],['Lives in water, big mouth','']],
          [['🦏 Rhino',''],['Has a horn','']],
          [['🦍 Gorilla',''],['Biggest primate','']],
          [['🦥 Sloth',''],['Very slow animal','']],
          [['🦩 Flamingo',''],['Pink bird','']],
          [['🐨 Koala',''],['Eats eucalyptus','']],
          [['🦚 Peacock',''],['Colorful tail','']],
        ]
      },
      {
        title: 'Ocean Animals',
        pairs: [
          [['🐋 Blue Whale',''],['Largest animal on Earth','']],
          [['🦈 Great White Shark',''],['Dangerous predator','']],
          [['🐙 Octopus',''],['8 tentacles','']],
          [['🐢 Sea Turtle',''],['Carries a shell','']],
          [['🦑 Squid',''],['Shoots black ink','']],
          [['🐠 Angelfish',''],['Colorful fins','']],
          [['🦀 Hermit Crab',''],['Lives in shells','']],
          [['🐬 Dolphin',''],['Intelligent swimmer','']],
        ]
      },
      {
        title: 'Jungle Animals',
        pairs: [
          [['🐅 Tiger',''],['Jungle predator','']],
          [['🦧 Orangutan',''],['Swings on trees','']],
          [['🐍 Python',''],['Giant snake','']],
          [['🦉 Owl',''],['Nocturnal bird','']],
          [['🐺 Wolf',''],['Hunts in packs','']],
          [['🦌 Deer',''],['Eats plants','']],
          [['🦊 Fox',''],['Clever animal','']],
          [['🐻 Bear',''],['Hibernates','']],
        ]
      },
      {
        title: 'Animal Facts',
        pairs: [
          [['🦒 Giraffe',''],['Tallest land animal','']],
          [['🐘 Elephant',''],['Has strong memory','']],
          [['🐧 Penguin',''],['Cannot fly','']],
          [['🦘 Kangaroo',''],['Carries babies in pouch','']],
          [['🐼 Panda',''],['Eats bamboo','']],
          [['🦇 Bat',''],['Mammal that flies','']],
          [['🐬 Dolphin',''],['Uses echolocation','']],
          [['🦜 Parrot',''],['Can mimic sounds','']],
        ]
      },
    ],
  },

  // COLORS 
  Colors: {
    Easy: [
      {
        title: 'Primary Colors',
        pairs: [
          [['🔴',''],['Red','']],
          [['🔵',''],['Blue','']],
          [['🟡',''],['Yellow','']],
          [['🟢',''],['Green','']],
        ]
      },
      {
        title: 'More Colors',
        pairs: [
          [['🟠',''],['Orange','']],
          [['🟣',''],['Purple','']],
          [['⚫',''],['Black','']],
          [['⚪',''],['White','']],
        ]
      },
      {
        title: 'Color Mixing',
        pairs: [
          [['Red + Yellow',''],['🟠 Orange','']],
          [['Blue + Yellow',''],['🟢 Green','']],
          [['Red + Blue',''],['🟣 Purple','']],
          [['Black + White',''],['⚫⚪ Gray','']],
        ]
      },
      {
        title: 'Colors in Nature',
        pairs: [
          [['🌞 Sun',''],['🟡 Yellow','']],
          [['🌊 Ocean',''],['🔵 Blue','']],
          [['🌿 Leaf',''],['🟢 Green','']],
          [['🌹 Rose',''],['🔴 Red','']],
        ]
      },
      {
        title: 'Rainbow Colors',
        pairs: [
          [['1st Rainbow Color',''],['Red','']],
          [['2nd Rainbow Color',''],['Orange','']],
          [['3rd Rainbow Color',''],['Yellow','']],
          [['4th Rainbow Color',''],['Green','']],
        ]
      },
    ],

    Medium: [
      {
        title: 'Extended Colors',
        pairs: [
          [['🟠',''],['Orange','']],
          [['🟣',''],['Purple','']],
          [['🟤',''],['Brown','']],
          [['⚫',''],['Black','']],
          [['⚪',''],['White','']],
          [['🩷',''],['Pink','']],
        ]
      },
      {
        title: 'Color Mixing',
        pairs: [
          [['Red + Yellow',''],['Orange','']],
          [['Blue + Yellow',''],['Green','']],
          [['Red + Blue',''],['Purple','']],
          [['Red + White',''],['Pink','']],
          [['White + Black',''],['Gray','']],
          [['Red + Green',''],['Brown','']],
        ]
      },
      {
        title: 'Colors in Nature',
        pairs: [
          [['☁️ Cloud',''],['White','']],
          [['🌊 Ocean',''],['Blue','']],
          [['🌿 Leaf',''],['Green','']],
          [['🌹 Rose',''],['Red','']],
          [['🌞 Sun',''],['Yellow','']],
          [['🍇 Grapes',''],['Purple','']],
        ]
      },
      {
        title: 'Rainbow Order',
        pairs: [
          [['1st Rainbow Color',''],['Red','']],
          [['2nd Rainbow Color',''],['Orange','']],
          [['3rd Rainbow Color',''],['Yellow','']],
          [['4th Rainbow Color',''],['Green','']],
          [['5th Rainbow Color',''],['Blue','']],
          [['6th Rainbow Color',''],['Violet','']],
        ]
      },
      {
        title: 'Shades of Colors',
        pairs: [
          [['Light Blue',''],['🩵 Sky blue','']],
          [['Dark Blue',''],['🔵 Navy','']],
          [['Light Green',''],['🌿 Lime','']],
          [['Dark Green',''],['🌲 Forest','']],
          [['Light Pink',''],['🩷 Rose','']],
          [['Dark Red',''],['🔴 Crimson','']],
        ]
      },
    ],

    Hard: [
      {
        title: 'Color Names',
        pairs: [
          [['Red',''],['🔴','']],
          [['Blue',''],['🔵','']],
          [['Yellow',''],['🟡','']],
          [['Green',''],['🟢','']],
          [['Orange',''],['🟠','']],
          [['Purple',''],['🟣','']],
          [['Cyan',''],['🩵','']],
          [['Magenta',''],['🩷','']],
        ]
      },
      {
        title: 'Color Mixing (Advanced)',
        pairs: [
          [['Red + Yellow',''],['Orange','']],
          [['Blue + Yellow',''],['Green','']],
          [['Red + Blue',''],['Purple','']],
          [['Red + White',''],['Pink','']],
          [['Blue + White',''],['Light Blue','']],
          [['Yellow + White',''],['Cream','']],
          [['Black + White',''],['Gray','']],
          [['Red + Green',''],['Brown','']],
        ]
      },
      {
        title: 'Colors in Nature',
        pairs: [
          [['🌞 Sun',''],['Yellow','']],
          [['🌊 Ocean',''],['Blue','']],
          [['🌿 Leaf',''],['Green','']],
          [['🌹 Rose',''],['Red','']],
          [['☁️ Cloud',''],['White','']],
          [['🌑 Night Sky',''],['Black','']],
          [['🍇 Grapes',''],['Purple','']],
          [['🥕 Carrot',''],['Orange','']],
        ]
      },
      {
        title: 'Rainbow Order (Full)',
        pairs: [
          [['1st Rainbow Color',''],['Red','']],
          [['2nd Rainbow Color',''],['Orange','']],
          [['3rd Rainbow Color',''],['Yellow','']],
          [['4th Rainbow Color',''],['Green','']],
          [['5th Rainbow Color',''],['Blue','']],
          [['6th Rainbow Color',''],['Indigo','']],
          [['7th Rainbow Color',''],['Violet','']],
          [['Acronym for Rainbow',''],['ROYGBIV','']],
        ]
      },
      {
        title: 'Shades and Tints',
        pairs: [
          [['🩵 Cyan',''],['Blue-Green','']],
          [['🩷 Magenta',''],['Pink-Purple','']],
          [['🟤 Brown',''],['Dark Orange-Red','']],
          [['🌸 Lavender',''],['Light Purple','']],
          [['🌿 Lime',''],['Bright Yellow-Green','']],
          [['🔵 Navy',''],['Dark Blue','']],
          [['🟡 Gold',''],['Shiny Yellow','']],
          [['⚫ Charcoal',''],['Dark Gray','']],
        ]
      },
    ],
  },
};


// SEQUENCE GAME DATA  — 4 categories × 3 difficulties × 5 rounds
// Each round: { title, steps[] } — steps listed in CORRECT order.
// Easy = 4 steps | Medium = 6 steps | Hard = 8 steps
// The engine shuffles them; the player taps in the right order.

const SEQUENCE_DATA = {

  //MATHEMATICS
  Math: {
    Easy: [
      { title: '☝️ Numbers 1 to 4',
        steps: ['1 ☝️ One','2 ✌️ Two','3 🤟 Three','4 🍀 Four'] },
      { title: '➕ Basic Operations',
        steps: ['3 - 1 = 2','2 + 2 = 4','2 × 4 = 8','6 ÷ 2 = 3'] },
      { title: '🔢 Skip Count by 2',
        steps: ['2','4','6','8'] },
      { title: '📉 Count Down from 10',
        steps: ['10','9','8','7'] },
      { title: '⚖️ Comparisons Sequence',
        steps: ['3 > 2','5 < 8','4 = 4','7 > 5'] },
    ],
    Medium: [
      { title: '🔢 Count by 2s (2 → 12)',
        steps: ['2','4','6','8','10','12'] },
      { title: '➕ Operations by Answer',
        steps: ['8 ÷ 4 = 2','5 - 2 = 3','3 + 2 = 5','4 + 1 = 5','2 × 3 = 6','6 ÷ 2 = 3'] },
      { title: '📈 Pattern +3',
        steps: ['3','6','9','12','15','18'] },
      { title: '📉 Count Down by 2 from 20',
        steps: ['20','18','16','14','12','10'] },
      { title: '⚖️ Comparison Sequence',
        steps: ['2 < 7','3 < 8','5 = 5','7 > 4','9 > 6','10 = 10'] },
    ],
    Hard: [
      { title: '🔢 Multiples up to 70',
        steps: ['🖐 5','🔟 10','🎈 20','🍭 30','🌙 40','🎲 50','🚀 60','🌟 70'] },
      { title: '🌟 Perfect Squares',
        steps: ['1×1=1','2×2=4','3×3=9','4×4=16','5×5=25','6×6=36','7×7=49','8×8=64'] },
      { title: '📈 Triangular Numbers',
        steps: ['1','3','6','10','15','21','28','36'] },
      { title: '➕ Operations (small → large result)',
        steps: ['18÷3=6','24÷4=6','21-7=14','6+6=12','31+14=45','12×3=36','11×8=88','3×27=81'] },
      { title: '⚖️ Comparisons A–H',
        steps: ['3>2','5<8','4=4','7>5','2<6','9=9','10>1','3<5'] },
    ],
  },

  //SHAPES
  Shapes: {
    Easy: [
      { title: '⚪ 2D Shapes: Fewest Sides First',
        steps: ['⚪ Circle — 0 sides','🔺 Triangle — 3 sides','⬛ Square — 4 sides','📏 Rectangle — 4 sides'] },
      { title: '🎲 3D Shapes: Simple → Complex',
        steps: ['⚽ Sphere','🎲 Cube','🥤 Cylinder','🍦 Cone'] },
      { title: '🔢 Sides: 0 → 3 → 4 → 4',
        steps: ['0 sides — Circle','3 sides — Triangle','4 sides — Square','4 sides — Rectangle'] },
      { title: '🌍 Shapes in Real Life',
        steps: ['🕒 Clock → Circle','🪟 Window → Square','🚪 Door → Rectangle','🍕 Pizza Slice → Triangle'] },
      { title: '📐 Shape Names A–Z',
        steps: ['⚪ Circle','📏 Rectangle','⬛ Square','🔺 Triangle'] },
    ],
    Medium: [
      { title: '⬟ 2D Shapes: Fewest → Most Sides',
        steps: ['🥚 Oval — 0','🔶 Diamond — 4','⬟ Pentagon — 5','⬣ Hexagon — 6','🛑 Octagon — 8','⭐ Star — 10'] },
      { title: '🎲 3D Shapes Sequence',
        steps: ['🍦 Cone','🥫 Cylinder','🎲 Cube','🏀 Sphere','📦 Rect. Prism','🛕 Pyramid'] },
      { title: '🔢 Sides Ascending 0→4→5→6→8→10',
        steps: ['Oval — 0 sides','Diamond — 4 sides','Pentagon — 5 sides','Hexagon — 6 sides','Octagon — 8 sides','Star — 10 sides'] },
      { title: '🌍 Real-Life Objects A–Z',
        steps: ['⚽ Ball — Sphere','🎲 Dice — Cube','🥚 Egg — Oval','🪁 Kite — Diamond','🛑 Stop Sign — Octagon','⭐ Starfish — Star'] },
      { title: '📐 Corners Ascending',
        steps: ['Oval — 0 corners','Diamond — 4 corners','Pentagon — 5 corners','Hexagon — 6 corners','Octagon — 8 corners','Star — 10 points'] },
    ],
    Hard: [
      { title: '🔢 Shapes by Sides: 0 → 9',
        steps: ['Circle — 0','Triangle — 3','Square — 4','Pentagon — 5','Hexagon — 6','Heptagon — 7','Octagon — 8','Nonagon — 9'] },
      { title: '🎲 3D Shapes Simple → Complex',
        steps: ['Sphere ⚽','Cube 🎲','Cylinder 🥫','Cone 🍦','Pyramid 🛕','Rect. Prism 📦','Triangular Prism 🍫','Hemisphere 🍨'] },
      { title: '🏠 Real-Life 3D Objects',
        steps: ['🍦 Ice cream → Cone','🥫 Soda can → Cylinder','🏠 House roof → Triangle','🎲 Dice → Cube','📦 Pizza box → Rect. Prism','⚽ Ball → Sphere','🛕 Egypt → Pyramid','🥳 Party hat → Cone'] },
      { title: '📐 Shape Names A–Z (Hard)',
        steps: ['Arrow','Circle','Crescent','Cross','Heptagon','Nonagon','Octagon','Trapezoid'] },
      { title: '🌟 Shape Properties',
        steps: ['Semicircle — half a circle','Crescent — 🌙 moon shape','Trapezoid — table-like','Parallelogram — slanted rect','Rhombus — ♦ diamond','Cross — ➕ plus sign','Arrow — ➡️ direction','Octagon — 🛑 8 sides'] },
    ],
  },

  // ANIMALS 
  Animals: {
    Easy: [
      { title: '🐄 Farm Animals: Smallest → Biggest',
        steps: ['🐔 Chicken','🐑 Sheep','🐖 Pig','🐄 Cow'] },
      { title: '🦁 Zoo Animals A–Z',
        steps: ['🐘 Elephant','🦒 Giraffe','🦁 Lion','🐒 Monkey'] },
      { title: '🐙 Ocean Animals: Smallest → Biggest',
        steps: ['🐙 Octopus','🐢 Turtle','🐬 Dolphin','🦈 Shark'] },
      { title: '🏡 Animal Homes A–Z',
        steps: ['🐰 Rabbit — Burrow','🐻 Bear — Cave','🦊 Fox — Den','🐦 Bird — Nest'] },
      { title: '🍼 Baby Animals A–Z',
        steps: ['🐮 Calf — Baby Cow','🐱 Kitten — Baby Cat','🐑 Lamb — Baby Sheep','🐶 Puppy — Baby Dog'] },
    ],
    Medium: [
      { title: '🐎 Farm Animals A–Z with Sounds',
        steps: ['🌾 Donkey — Hee-haw','🦆 Duck — Quack','🐐 Goat — Maa','🐎 Horse — Neigh','🐓 Rooster — Cock-a-doodle','🦃 Turkey — Gobble'] },
      { title: '🦓 Zoo Animals: Smallest → Biggest',
        steps: ['🐧 Penguin','🐼 Panda','🦓 Zebra','🐅 Tiger','🦘 Kangaroo','🐻‍❄️ Polar Bear'] },
      { title: '🌊 Ocean Animals: Smallest → Biggest',
        steps: ['⭐ Starfish','🦀 Crab','🐠 Clownfish','🦑 Squid','🐬 Dolphin','🐳 Whale'] },
      { title: '🦊 Wild Animals A–Z',
        steps: ['🦇 Bat','🦌 Deer','🦊 Fox','🦉 Owl','🐍 Snake','🐺 Wolf'] },
      { title: '🐣 Baby Animals A–Z',
        steps: ['🐣 Chick — Baby Chicken','🐻 Cub — Baby Bear','🦆 Duckling — Baby Duck','🐴 Foal — Baby Horse','🐐 Kid — Baby Goat','🐷 Piglet — Baby Pig'] },
    ],
    Hard: [
      { title: '🐄 Farm: What They Give / Home',
        steps: ['🐔 Chicken → 🥚 Eggs','🐄 Cow → 🥛 Milk','🐑 Sheep → 🧶 Wool','🐖 Pig → lives in a sty','🐎 Horse → lives in stable','🦆 Duck → lives in pond','Baby cow = 🍼 Calf','Baby sheep = ☁️ Lamb'] },
      { title: '🦁 Zoo Animals: Smallest → Biggest',
        steps: ['🦚 Peacock','🦩 Flamingo','🐨 Koala','🦥 Sloth','🦏 Rhino','🦛 Hippo','🦍 Gorilla','🐆 Cheetah'] },
      { title: '🐋 Ocean Animals: Smallest → Biggest',
        steps: ['🦀 Hermit Crab','🐠 Angelfish','🦑 Squid','🐙 Octopus','🐢 Sea Turtle','🦈 Great White Shark','🐬 Dolphin','🐋 Blue Whale'] },
      { title: '🐅 Jungle / Wild Animals A–Z',
        steps: ['🐻 Bear — Hibernates','🦌 Deer — Eats plants','🦊 Fox — Clever animal','🦉 Owl — Nocturnal','🐍 Python — Giant snake','🦧 Orangutan — Swings on trees','🐅 Tiger — Jungle predator','🐺 Wolf — Hunts in packs'] },
      { title: '🌟 Animal Facts A–Z',
        steps: ['🦇 Bat — Mammal that flies','🐬 Dolphin — Echolocation','🐘 Elephant — Strong memory','🦒 Giraffe — Tallest land animal','🦘 Kangaroo — Carries babies','🐼 Panda — Eats bamboo','🦜 Parrot — Mimics sounds','🐧 Penguin — Cannot fly'] },
    ],
  },

  //COLORS
  Colors: {
    Easy: [
      { title: '🌈 Rainbow Order (first 4)',
        steps: ['🔴 Red','🟠 Orange','🟡 Yellow','🟢 Green'] },
      { title: '🎨 Primary then Secondary',
        steps: ['🔴 Red — Primary','🔵 Blue — Primary','🟡 Yellow — Primary','🟢 Green — Secondary'] },
      { title: '🌞 Colors: Light → Dark',
        steps: ['⚪ White — Snow','🟡 Yellow — Sun','🔴 Red — Apple','🟢 Green — Grass'] },
      { title: '🍎 Color Names A–Z',
        steps: ['🔵 Blue','🟢 Green','🔴 Red','🟡 Yellow'] },
      { title: '🌡️ Warm → Cool Colors',
        steps: ['🔴 Red — Warmest','🟠 Orange — Warm','🟡 Yellow — Warm','🔵 Blue — Cool'] },
    ],
    Medium: [
      { title: '🌈 Rainbow Order (ROYGBV)',
        steps: ['🔴 Red','🟠 Orange','🟡 Yellow','🟢 Green','🔵 Blue','🟣 Violet'] },
      { title: '🎨 Color Mixing Steps',
        steps: ['Red+Yellow → 🟠 Orange','Blue+Yellow → 🟢 Green','Red+Blue → 🟣 Purple','Red+White → 🩷 Pink','Black+White → ⚫⚪ Gray','Red+Green → 🟤 Brown'] },
      { title: '🌸 Colors in Nature A–Z',
        steps: ['⚫ Black — Night sky','🔵 Blue — Ocean','🟢 Green — Leaf','🟠 Orange — Fruit','🩷 Pink — Blossom','🟣 Purple — Grapes'] },
      { title: '🌤️ Light → Dark Shades',
        steps: ['⚪ White','🩷 Pink','🟡 Yellow','🟢 Green','🔵 Blue','⚫ Black'] },
      { title: '🎭 Colors by Mood',
        steps: ['🔵 Blue — Calm','🟢 Green — Nature','🟡 Yellow — Happy','🟠 Orange — Fun','🔴 Red — Energy','🟣 Purple — Creative'] },
    ],
    Hard: [
      { title: '🌈 Full Spectrum (ROYGCBPM)',
        steps: ['🔴 Red','🟠 Orange','🟡 Yellow','🟢 Green','🩵 Cyan','🔵 Blue','🟣 Purple','🩷 Magenta'] },
      { title: '🎨 Color Mixing: Light → Dark Result',
        steps: ['Yellow+White→Cream','Red+White→Pink','Blue+White→Light Blue','Black+White→Gray','Blue+Yellow→Green','Red+Yellow→Orange','Red+Blue→Purple','Red+Green→Brown'] },
      { title: '🌍 Colors in Symbols A–Z',
        steps: ['⚫ Black flag — Danger','🩺 Red Cross — Medical','🟢 Green light — Go','🟡 Yellow light — Slow','🔴 Red light — Stop','⚪ White flag — Peace','🩵 Blue flag — Safe swim','💚 Green heart — Nature'] },
      { title: '🖌️ Art Color Theory',
        steps: ['Primary — Red, Blue, Yellow','Secondary — Green, Orange, Purple','Warm — Red, Orange, Yellow','Cool — Blue, Green, Purple','Tint — Color + White','Shade — Color + Black','Complementary — Opposites','🌈 Acronym — ROYGBIV'] },
      { title: '🌈 Full Rainbow A–Z',
        steps: ['1st — 🔴 Red','2nd — 🟠 Orange','3rd — 🟡 Yellow','4th — 🟢 Green','5th — 🔵 Blue','6th — 🟣 Indigo','7th — 🟣 Violet','Acronym — ROYGBIV'] },
    ],
  },
};

const CARD_BACKS = {
  Easy: 'imgs/card_Easy.png',
  Medium: 'imgs/card_Medium.png',
  Hard: 'imgs/card_Hard.png'
};

const AVATARS = ['🚀','🌟','🎯','🦊','🐯','🦁','🎮','💎','🌙','⭐','🏆','🎪'];
const EXPOSURE_TIME = {Easy: 4000, Medium: 2500, Hard: 1500};

// APP STATE
let state = {
  screen: 'menu',
  role: null,
  gameMode: 'memory',
  studentName: '',
  sessionId: '',
  category: 'Math',
  difficulty: 'Easy',
  totalLevels: 3,
  baseline: 70,
  currentLevel: 1,
  // game stats
  moves: 0,
  matches: 0,
  restarts: 0,
  totalMistakes: 0,
  totalMoves: 0,
  totalTime: 0,
  startTime: null,
  timerInterval: null,
  elapsed: 0,
  // cards
  cards: [],
  flipped: [],
  locked: false,
  // peer
  peer: null,
  conn: null, // student's connection to host
  connections: {}, // host's connections: peerId -> {name, conn}
  students: {}, // studentId -> {name, level, moves, time, accuracy, status, restarts}
  gameStarted: false,
};

// UTILS
function showScreen(id) {
  $('.screen').removeClass('active');
  $('#screen-' + id).addClass('active');
  state.screen = id;
  // hide top header on menu, show on other screens
  if (id === 'menu') {
    $('body').addClass('on-menu');
  } else {
    $('body').removeClass('on-menu');
  }
}

function showToast(msg, dur=2000) {
  $('#toast').text(msg).fadeIn(200);
  setTimeout(() => $('#toast').fadeOut(300), dur);
}

function generateSessionId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let id = '';
  for(let i=0;i<4;i++) id += chars[Math.floor(Math.random()*chars.length)];
  return id;
}

function shuffle(arr) {
  let a = [...arr];
  for(let i=a.length-1;i>0;i--) {
    let j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function formatTime(s) {
  if(s < 60) return s + 's';
  return Math.floor(s/60) + 'm ' + (s%60) + 's';
}

function calcAccuracy() {
  // Use cumulative moves and mistakes across all levels
  const totalMovesAll = state.totalMoves + state.moves;
  const totalMistakesAll = (state.totalMistakes || 0);
  // totalMoves = pairs attempted (each move is 2 cards), matches = successful pairs
  // accuracy = matches / moves * 100
  //  track per-level: state.matches = current level matches, state.moves = current level moves
  // Across levels: totalMoves + moves = total pair attempts, totalMistakes = total mismatches so far
  const totalMatches = totalMovesAll - totalMistakesAll;
  if(totalMovesAll === 0) return 0;
  return Math.round((Math.max(0, totalMatches) / totalMovesAll) * 100);
}

// STARS
(function() {
  $('body').addClass('on-menu'); // menu is default
  const sf = document.getElementById('starfield');
  for(let i=0;i<120;i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random()*3+1;
    s.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*100}%;left:${Math.random()*100}%;animation-duration:${Math.random()*4+2}s;animation-delay:-${Math.random()*6}s`;
    sf.appendChild(s);
  }
})();

// NAVIGATION
$(function() {

$('#btn-play').on('click',()=>showScreen('role'));
$('#btn-help').on('click',()=>showScreen('help'));
// Help tab switching
$(document).on('click', '.help-tab', function() {
  const pane = $(this).data('pane');
  $('.help-tab').removeClass('active');
  $(this).addClass('active');
  $('.help-pane').removeClass('active');
  $('#help-pane-' + pane).addClass('active');
});
$('#btn-about').on('click',()=>showScreen('about'));
$('#btn-exit').on('click',()=>showModal('Exit','Are you sure you want to exit?',[
  {label:'Yes, Exit',cls:'btn-red',cb:()=>window.close()},
  {label:'Cancel',cls:'btn-back',cb:hideModal}
]));
$('#help-back,#about-back').on('click',()=>showScreen('menu'));
$('#role-back').on('click',()=>showScreen('menu'));
$('#join-back').on('click',()=>showScreen('role'));
$('#setup-back').on('click',()=>showScreen('catselect'));
$('#catsel-back').on('click',()=>showScreen('modeselect'));

// Mode card hover effects
$('#mode-memory,#mode-sequence').on('mouseenter',function(){
  $(this).css({'transform':'translateY(-6px)','box-shadow':'0 16px 40px rgba(148,77,198,.55)','border-color':'#ffde59'});
}).on('mouseleave',function(){
  $(this).css({'transform':'','box-shadow':'0 0 24px rgba(148,77,198,.35)','border-color':'var(--planet-purple)'});
});

// Visual category select handlers
$('.catsel-select-btn, .catsel-card').on('click', function() {
  const cat = $(this).data('cat') || $(this).closest('[data-cat]').data('cat');
  if (!cat) return;
  state.category = cat;
  $('#setup-category').val(cat);
  // Update the display name in the setup screen
  const catLabels = { Math: 'Mathematics', Shapes: 'Shapes', Animals: 'Animals', Colors: 'Colors' };
  $('#chosen-cat-name').text(catLabels[cat] || cat);
  initSetup();
  showScreen('setup');
});
$('#btn-restart-game').on('click',restartGame);
$('#game-main-menu,#lc-main-menu,#go-main-menu,#dash-main-menu').on('click',goMainMenu);
$('#dash-exit').on('click',()=>showModal('Exit','End session and exit?',[
  {label:'Exit',cls:'btn-red',cb:()=>goMainMenu()},
  {label:'Cancel',cls:'btn-back',cb:hideModal}
]));

$('#role-student').on('click',()=>{ state.role='student'; showScreen('join'); });
$('#role-instructor').on('click',()=>{ state.role='instructor'; showScreen('modeselect'); });
$('#mode-memory').on('click',()=>{ state.gameMode='memory'; showScreen('catselect'); });
$('#mode-sequence').on('click',()=>{ state.gameMode='sequence'; showScreen('catselect'); });
$('#modesel-back').on('click',()=>showScreen('role'));

// Join Game
$('#btn-join-play').on('click', joinGame);
$('#join-session-id').on('input', function() {
  $(this).val($(this).val().toUpperCase());
});

// Setup
$('#btn-regen-id').on('click',()=>{
  $('#setup-session-id').text(generateSessionId());
});
$('#btn-connect-dashboard').on('click', connectDashboard);

// Dashboard
$('#btn-start-game').on('click', instructorStartGame);
$('#btn-export-csv').on('click', exportCSV);

// Game
$('#btn-next-level').on('click', function() {
  $('#overlay-levelcomplete').removeClass('show');
  nextLevel();
});
$('#lc-menu-btn').on('click', function() {
  $('#overlay-levelcomplete').removeClass('show');
  goMainMenu();
});
$('#btn-play-again').on('click', function() {
  $('#overlay-gameover').removeClass('show');
  state.currentLevel = 1;
  state.totalMoves = 0; state.totalTime = 0;
  state.restarts = 0; state.totalMistakes = 0;
  startGame();
});
$('#go-menu-btn').on('click', function() {
  $('#overlay-gameover').removeClass('show');
  goMainMenu();
});
// btn-play-again handled in overlay binding above

});

// SETUP
function initSetup() {
  const sid = generateSessionId();
  $('#setup-session-id').text(sid);
}

// PEER: INSTRUCTOR
function connectDashboard() {
  state.category = $('#setup-category').val();
  state.difficulty = $('#setup-difficulty').val();
  state.totalLevels = parseInt($('#setup-levels').val());
  state.baseline = parseInt($('#setup-baseline').val());
  state.sessionId = $('#setup-session-id').text().trim();

  const peerId = 'mmp-host-' + state.sessionId;

  showToast('Creating session...', 3000);

  if(state.peer) { try{state.peer.destroy();}catch(e){} }

  state.students = {};
  state.gameStarted = false;

  try {
    state.peer = new Peer(peerId, {debug:0});
  } catch(e) {
    showToast('PeerJS error: ' + e.message, 3000);
    return;
  }

  state.peer.on('open', id => {
    updateDashboard();
    showDashboard();
    showToast('✅ Session ' + state.sessionId + ' is live!', 3000);
  });

  state.peer.on('error', err => {
    if(err.type === 'unavailable-id') {
      state.sessionId = generateSessionId();
      $('#setup-session-id').text(state.sessionId);
      showToast('ID taken, generated new: ' + state.sessionId, 3000);
    } else {
      showToast('Connection error: ' + err.message, 3000);
    }
  });

  state.peer.on('connection', conn => {
    conn.on('open', () => {
      const sid = conn.peer;
      conn.on('data', data => handleStudentData(sid, conn, data));
      conn.on('close', () => {
        if(state.students[sid]) state.students[sid].status = 'Exited';
        updateDashboard();
      });
      // If game already started, send start immediately
      if(state.gameStarted) {
        conn.send({type:'start', category:state.category, difficulty:state.difficulty, totalLevels:state.totalLevels, gameMode:state.gameMode});
      }
    });
  });
}

function handleStudentData(sid, conn, data) {
  if(data.type === 'join') {
    state.students[sid] = {
      name: data.name,
      level: 0, moves: 0, time: 0, accuracy: 0,
      status: 'Waiting',
      restarts: 0,
      conn: conn
    };
    // Update player count across all students
    broadcastPlayerList();
    updateDashboard();
    updateStartZone();
  } else if(data.type === 'telemetry') {
    if(state.students[sid]) {
      Object.assign(state.students[sid], data.stats);
      updateDashboard();
    }
  } else if(data.type === 'done') {
    if(state.students[sid]) {
      Object.assign(state.students[sid], data.stats);
      state.students[sid].status = 'Done';
      updateDashboard();
    }
  }
}

function broadcastPlayerList() {
  const list = Object.values(state.students).map(s=>s.name);
  const count = list.length;
  Object.values(state.students).forEach(s => {
    try { s.conn.send({type:'playerlist', players:list, count:count}); } catch(e) {}
  });
}

function updateStartZone() {
  const count = Object.keys(state.students).length;
  if(count > 0) {
    $('#start-zone').addClass('ready');
    $('#start-zone-msg').text(`${count} student(s) ready — click Start Game!`);
    $('#btn-start-game').prop('disabled', false);
  } else {
    $('#start-zone').removeClass('ready');
    $('#start-zone-msg').text('Waiting for students to join...');
    $('#btn-start-game').prop('disabled', true);
  }
}

function instructorStartGame() {
  state.gameStarted = true;
  Object.values(state.students).forEach(s => {
    s.status = 'Playing';
    try {
      s.conn.send({type:'start', category:state.category, difficulty:state.difficulty, totalLevels:state.totalLevels, gameMode:state.gameMode});
    } catch(e) {}
  });
  updateDashboard();
  showToast('🎮 Game started for all students!', 2000);
}

function showDashboard() {
  $('#dash-session-badge').text(state.sessionId);
  $('#dash-cat-badge').text(state.category);
  $('#dash-diff-badge').text(state.difficulty);
  $('#dash-level-badge').text(state.totalLevels + ' Levels');
  showScreen('dashboard');

  // Periodic sync
  if(window._dashInterval) clearInterval(window._dashInterval);
  window._dashInterval = setInterval(updateDashboard, 2000);
}

function updateDashboard() {
  const students = Object.values(state.students);
  const count = students.length;
  const playing = students.filter(s=>s.status==='Playing').length;
  const avgAcc = count ? Math.round(students.reduce((a,s)=>a+(s.accuracy||0),0)/count) : 0;

  $('#dash-students-joined').text(count);
  $('#dash-playing').text(playing);
  $('#dash-avg-acc').text(avgAcc+'%');

  // Sort by accuracy desc, then moves asc
  const sorted = [...students].sort((a,b)=>{
    if(b.accuracy !== a.accuracy) return (b.accuracy||0)-(a.accuracy||0);
    return (a.moves||0)-(b.moves||0);
  });

  let flags = 0;
  let html = '';
  sorted.forEach((s,i) => {
    const acc = s.accuracy || 0;
    const flag = acc < state.baseline && s.status === 'Playing';
    if(flag) flags++;
    const statusCls = {Done:'status-done',Playing:'status-playing',Exited:'status-exited',Waiting:'status-waiting'}[s.status] || 'status-waiting';
    html += `<tr>
      <td class="rank-num">${i+1}</td>
      <td class="rank-name">${s.name}</td>
      <td>${s.level||0}/${state.totalLevels}</td>
      <td>${s.moves||0}</td>
      <td>${formatTime(s.time||0)}</td>
      <td style="color:${acc<state.baseline?'#e84040':'#3dd68c'}">${acc}%</td>
      <td><span class="${statusCls}">${s.status}</span></td>
      <td>${flag ? '<span class="flag-red">🚩</span>' : '—'}</td>
    </tr>`;
  });

  $('#dash-flags').text(flags);
  $('#rank-tbody').html(html);
  updateStartZone();
}

// PEER: STUDENT
function joinGame() {
  const name = $('#student-name').val().trim();
  const sid = $('#join-session-id').val().trim().toUpperCase();

  if(!name) { $('#join-error').text('Please enter your name.').show(); return; }
  if(sid.length !== 4) { $('#join-error').text('Session ID must be 4 letters.').show(); return; }

  $('#join-error').hide();
  state.studentName = name;
  state.sessionId = sid;

  const hostId = 'mmp-host-' + sid;
  if(state.peer) { try{state.peer.destroy();}catch(e){} }
  state.peer = new Peer(undefined, {debug:0});

  state.peer.on('open', myId => {
    state.conn = state.peer.connect(hostId);

    state.conn.on('open', () => {
      // Connected!
      $('#conn-dot').addClass('connected');
      $('#conn-text').text('Connected to instructor!');
      state.conn.send({type:'join', name:state.studentName});

      // Show waiting room
      $('#wait-welcome').text('Welcome, ' + state.studentName + '!');
      $('#wait-session').text(sid);
      showScreen('waiting');

      // Add self to player list
      addPlayerToList(state.studentName, true);
    });

    state.conn.on('data', data => {
      if(data.type === 'start') {
        state.category = data.category;
        state.difficulty = data.difficulty;
        state.totalLevels = data.totalLevels;
        state.gameMode = data.gameMode || 'memory';
        state.currentLevel = 1;
        state.totalMoves = 0;
        state.totalTime = 0;
        state.restarts = 0;
        startGame();
      } else if(data.type === 'playerlist') {
        updatePlayerList(data.players, data.count);
      }
    });

    state.conn.on('close', () => {
      showToast('⚠️ Disconnected from session', 3000);
    });

    state.conn.on('error', e => {
      $('#join-error').text('Connection failed. Check Session ID.').show();
      showScreen('join');
    });
  });

  state.peer.on('error', e => {
    $('#join-error').text('Could not connect. Check Session ID.').show();
  });

  showToast('Connecting...', 2000);
}

function addPlayerToList(name, isSelf=false) {
  const avatar = AVATARS[Math.floor(Math.random()*AVATARS.length)];
  const item = $(`<div class="player-list-item">
    <span class="player-avatar">${avatar}</span>
    <span class="player-name">${name}${isSelf?' (You)':''}</span>
  </div>`);
  $('#player-list').prepend(item);
}

function updatePlayerList(players, count) {
  $('#player-list').empty();
  players.forEach((name,i) => {
    const avatar = AVATARS[i % AVATARS.length];
    const isSelf = name === state.studentName;
    const item = $(`<div class="player-list-item">
      <span class="player-avatar">${avatar}</span>
      <span class="player-name">${name}${isSelf?' (You)':''}</span>
    </div>`);
    $('#player-list').append(item);
  });
  $('#player-count-badge').text(`👥 ${count} Player${count!==1?'s':''} in Lobby`);
}

// GAME ENGINE
function startGame() {
  // Route to sequence engine when in sequence mode
  if (state.gameMode === 'sequence') {
    state.moves = 0; state.matches = 0; state.elapsed = 0;
    state.flipped = []; state.locked = false;
    startSequenceGame();
    return;
  }
  clearInterval(state.timerInterval);
  state.moves = 0;
  state.matches = 0;
  state.elapsed = 0;
  state.flipped = [];
  state.locked = false;
  state.startTime = Date.now();

  const pairs = getPairs();
  buildCardGrid(pairs);
  updateGameUI();

  // Meta tags
  const diffCls = {Easy:'meta-diff-easy',Medium:'meta-diff-medium',Hard:'meta-diff-hard'}[state.difficulty];
  $('#game-meta-tags').html(`
    <span class="meta-tag meta-cat">${state.category}</span>
    <span class="meta-tag ${diffCls}">${state.difficulty}</span>
    <span class="meta-tag meta-level">Level ${state.currentLevel}/${state.totalLevels}</span>
  `);
  $('#game-student-name').text(state.studentName || 'Player');
  $('#stat-level').text(state.currentLevel + '/' + state.totalLevels);

  showScreen('game');

  // Pre-game exposure
  const expTime = EXPOSURE_TIME[state.difficulty];
  $('#exposure-container').show();
  // Flip all cards face up
  $('.mem-card').addClass('flipped');
  state.locked = true;

  let fill = 100;
  const step = 100 / (expTime / 50);
  $('#exposure-fill').css('width','100%').css('transition','none');

  setTimeout(()=>{
    $('#exposure-fill').css('transition','width ' + expTime + 'ms linear').css('width','0%');
  }, 50);

  setTimeout(() => {
    $('.mem-card').removeClass('flipped');
    $('#exposure-container').hide();
    state.locked = false;
    state.startTime = Date.now();
    // Start timer
    state.timerInterval = setInterval(() => {
      state.elapsed = Math.round((Date.now() - state.startTime) / 1000);
      $('#stat-time').text(formatTime(state.elapsed));
      sendTelemetry();
    }, 1000);
  }, expTime);
}

function getPairs() {
  const games = GAME_DATA[state.category] && GAME_DATA[state.category][state.difficulty];
  if(!games || !games.length) return [];
  // Cycle through games based on current level, wrapping around if more levels than games
  const gameIndex = (state.currentLevel - 1) % games.length;
  const game = games[gameIndex];
  // Show the sub-theme title if element exists
  if(game && game.title && document.getElementById('game-subtitle')) {
    document.getElementById('game-subtitle').textContent = game.title;
  }
  return shuffle(game.pairs);
}

function buildCardGrid(pairs) {
  const n = pairs.length;
  // Create pair of cards for each pair
  let cards = [];
  pairs.forEach((pair, idx) => {
    cards.push({id:idx*2,   pairId:idx, side:0, text:pair[0][0], emoji:pair[0][1]});
    cards.push({id:idx*2+1, pairId:idx, side:1, text:pair[1][0], emoji:pair[1][1]});
  });
  cards = shuffle(cards);
  state.cards = cards;

  // Determine grid cols
  const total = cards.length;
  const cols = total <= 8 ? 4 : total <= 12 ? 4 : 4;

  const $grid = $('#card-grid');
  $grid.css('grid-template-columns', `repeat(${cols}, 1fr)`).empty();

  const backSrc = CARD_BACKS[state.difficulty];

  cards.forEach(card => {
    const hasEmoji = card.emoji && card.emoji.trim();
    const frontContent = hasEmoji
      ? `<div class="card-front-emoji">${card.emoji}</div><div class="card-front-text">${card.text}</div>`
      : `<div class="card-front-text" style="font-size:clamp(13px,2.5vw,20px)">${card.text}</div>`;

    const $card = $(`<div class="mem-card" data-id="${card.id}" data-pair="${card.pairId}">
      <div class="mem-card-inner">
        <div class="card-back"><img class="card-back-img" src="${backSrc}" alt="card back"></div>
        <div class="card-front">${frontContent}</div>
      </div>
    </div>`);

    $card.on('click', function() { flipCard($(this)); });
    $grid.append($card);
  });
}

function flipCard($card) {
  if(state.locked) return;
  if($card.hasClass('flipped') || $card.hasClass('matched')) return;
  if(state.flipped.length >= 2) return;

  sfxCardFlip();
  $card.addClass('flipped');
  state.flipped.push($card);

  if(state.flipped.length === 2) {
    state.moves++;
    updateGameUI();
    checkMatch();
  }
}

function checkMatch() {
  const [$a, $b] = state.flipped;
  const pairA = $a.data('pair');
  const pairB = $b.data('pair');

  if(pairA === pairB) {
    // Match!
    sfxCardRight();
    state.matches++;
    $a.addClass('matched'); $b.addClass('matched');
    state.flipped = [];
    updateGameUI();
    sendTelemetry();

    // Check level complete
    const totalPairs = state.cards.length / 2;
    if(state.matches >= totalPairs) {
      clearInterval(state.timerInterval);
      state.totalTime += state.elapsed;
      state.totalMoves += state.moves;
      setTimeout(levelComplete, 600);
    }
  } else {
    // No match
    sfxCardWrong();
    state.locked = true;
    state.totalMistakes++;
    setTimeout(() => {
      $a.removeClass('flipped');
      $b.removeClass('flipped');
      state.flipped = [];
      state.locked = false;
      updateGameUI();
      sendTelemetry();
    }, 900);
  }
}

function updateGameUI() {
  const acc = calcAccuracy();
  $('#stat-moves').text(state.moves);
  $('#stat-acc').text(acc + '%');
}

function restartGame() {
  if (state.gameMode === 'sequence') {
    clearInterval(seqState.timerInterval);
    state.restarts++;
    state.moves = 0; state.matches = 0;
    startSequenceGame();
    return;
  }
  clearInterval(state.timerInterval);
  state.restarts++;
  state.moves = 0;
  state.matches = 0;
  startGame();
}

function sendTelemetry() {
  if(!state.conn || !state.conn.open) return;
  const acc = calcAccuracy();
  state.conn.send({
    type: 'telemetry',
    stats: {
      level: state.currentLevel,
      moves: state.totalMoves + state.moves,
      time: state.totalTime + state.elapsed,
      accuracy: acc,
      status: 'Playing',
      restarts: state.restarts
    }
  });
}

function levelComplete() {
  if(state.currentLevel >= state.totalLevels) {
    gameOver();
    return;
  }

  const titles = ['⭐ Level Complete!', '🌟 Excellent!', '🏅 Amazing!', '🔥 On Fire!', '💎 Genius!'];
  const subs   = ["Keep going, you're doing great!", "You're on a roll!", "Unstoppable!", "Keep it up!", "Nearly there!"];
  const idx    = Math.min(state.currentLevel - 1, titles.length - 1);
  $('#lc-title').text(titles[idx]);
  $('#lc-sub').text(subs[idx]);
  $('#lc-icon').text(['⭐','🌟','🏅','🔥','💎'][idx] || '⭐');

  $('#lc-moves').text(state.moves);
  $('#lc-time').text(formatTime(state.elapsed));

  let levelMistakes, levelAcc;
  if (state.gameMode === 'sequence') {
    levelMistakes = seqState.mistakes;
    const taps    = seqState.totalTaps;
    levelAcc      = taps === 0 ? 100 : Math.round((seqState.steps.length / taps) * 100);
  } else {
    levelMistakes = state.moves - state.matches;
    levelAcc      = state.moves === 0 ? 100 : Math.round((state.matches / state.moves) * 100);
  }
  $('#lc-mistakes').text(levelMistakes);
  $('#lc-accuracy').text(levelAcc + '%');

  launchConfetti();
  sfxLevelDone();
  $('#overlay-levelcomplete').addClass('show');
}

function nextLevel() {
  if (state.gameMode === 'sequence') {
    state.currentLevel++;
    startSequenceGame();
    return;
  }
  state.totalMoves += state.moves;
  state.totalTime  += state.elapsed;
  state.currentLevel++;
  startGame();
}

function gameOver() {
  let totalMoves, totalTime, totalMistakes;
  if (state.gameMode === 'sequence') {
    totalMoves    = state.totalMoves;
    totalTime     = state.totalTime;
    totalMistakes = state.totalMistakes;
  } else {
    totalMoves    = state.totalMoves + state.moves;
    totalTime     = state.totalTime  + state.elapsed;
    totalMistakes = state.totalMistakes + (state.moves - state.matches);
  }
  const acc = totalMoves === 0 ? 0 : Math.round(Math.max(0, (totalMoves - totalMistakes) / totalMoves) * 100);

  const name = state.studentName || 'Player';
  $('#go-player-name').text('🎉 ' + name);
  $('#go-moves').text(totalMoves);
  $('#go-time').text(formatTime(totalTime));
  $('#go-mistakes').text(Math.max(0, totalMistakes));
  $('#go-acc').text(acc + '%');

  // Show final rankings if instructor role
  if(state.role === 'instructor' && Object.keys(state.students).length) {
    buildFinalRankings();
    $('#final-rankings-wrap').show();
  } else {
    $('#final-rankings-wrap').hide();
  }

  // Notify instructor
  if(state.conn && state.conn.open) {
    state.conn.send({
      type: 'done',
      stats: {
        level: state.currentLevel,
        moves: totalMoves,
        time: totalTime,
        accuracy: acc,
        status: 'Done',
        restarts: state.restarts
      }
    });
  }

  launchConfetti(60);
  sfxLevelDone();
  $('#overlay-gameover').addClass('show');
}

function goMainMenu() {
  clearInterval(state.timerInterval);
  if(window._dashInterval) clearInterval(window._dashInterval);
  if(state.peer) { try{state.peer.destroy();}catch(e){} state.peer=null; }
  state.conn = null;
  state.students = {};
  state.gameStarted = false;
  hideModal();
  showScreen('menu');
}

//EXPORT CSV 
function exportCSV() {
  const students = Object.values(state.students);
  if(!students.length) { showToast('No student data yet!', 2000); return; }

  let csv = 'Rank,Name,Level,Moves,Time(s),Accuracy,Status\n';
  const sorted = [...students].sort((a,b)=>(b.accuracy||0)-(a.accuracy||0));
  sorted.forEach((s,i) => {
    csv += `${i+1},"${s.name}",${s.level||0}/${state.totalLevels},${s.moves||0},${s.time||0},${s.accuracy||0}%,"${s.status}"\n`;
  });

  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `MMP_Session_${state.sessionId}_Results.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 CSV exported!', 2000);
}

// MODAL
function showModal(title, body, btns) {
  $('#modal-title').text(title);
  $('#modal-body').text(body);
  const $bb = $('#modal-btns').empty();
  btns.forEach(b => {
    const $btn = $(`<button class="btn ${b.cls}">${b.label}</button>`);
    $btn.on('click', b.cb);
    $bb.append($btn);
  });
  $('#modal').addClass('show');
}

function hideModal() {
  $('#modal').removeClass('show');
}

// CONFETTI
function launchConfetti(n=40) {
  const colors = ['#f5c842','#f07a28','#3dd68c','#3dd6e8','#e840e8','#ffffff'];
  for(let i=0;i<n;i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `left:${Math.random()*100}vw;top:-10px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*2+2}s;animation-delay:${Math.random()*0.5}s;transform:rotate(${Math.random()*360}deg);width:${Math.random()*10+5}px;height:${Math.random()*10+5}px`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 3000);
  }
}
//SETTINGS & AUDIO ENGINE
const audioSettings = {
  sfxEnabled: true,
  sfxVolume: 0.8,
  musicEnabled: true,
  musicVolume: 0.5,
};

// Load persisted settings
(function loadSettings() {
  try {
    const saved = localStorage.getItem('mmp_settings');
    if (saved) Object.assign(audioSettings, JSON.parse(saved));
  } catch(e) {}
})();

function saveAudioSettings() {
  try { localStorage.setItem('mmp_settings', JSON.stringify(audioSettings)); } catch(e) {}
}

// SFX helpers
const SFX = {
  btnHover:  document.getElementById('sfx-btn-hover'),
  btnPress:  document.getElementById('sfx-btn-press'),
  cardFlip:  document.getElementById('sfx-card-flip'),
  cardRight: document.getElementById('sfx-card-right'),
  cardWrong: document.getElementById('sfx-card-wrong'),
  levelDone: document.getElementById('sfx-level-done'),
};

function playSFX(audioEl) {
  if (!audioSettings.sfxEnabled) return;
  if (!audioEl) return;
  audioEl.volume = audioSettings.sfxVolume;
  audioEl.currentTime = 0;
  audioEl.play().catch(()=>{});
}


function sfxBtnPress()  { playSFX(SFX.btnPress);  }
function sfxBtnHover()  { playSFX(SFX.btnHover);  }
function sfxCardFlip()  { playSFX(SFX.cardFlip);  }
function sfxCardRight() { playSFX(SFX.cardRight); }
function sfxCardWrong() { playSFX(SFX.cardWrong); }
function sfxLevelDone() { playSFX(SFX.levelDone); }

// Music helpers 
function applyAudioSettings() {
  window.mmpAudio = audioSettings;
  const bg = document.getElementById('bg-music');
  if (!bg) return;
  bg.volume = audioSettings.musicEnabled ? audioSettings.musicVolume : 0;
  if (audioSettings.musicEnabled) {
    bg.play().catch(()=>{});
  } else {
    bg.pause();
  }
}

function startBgMusic() {
  if (!audioSettings.musicEnabled) return;
  const bg = document.getElementById('bg-music');
  if (!bg) return;
  bg.volume = audioSettings.musicVolume;
  if (bg.paused) bg.play().catch(()=>{});
}

//  Settings modal 
function openSettings() {
  $('#sfx-toggle').prop('checked', audioSettings.sfxEnabled);
  $('#music-toggle').prop('checked', audioSettings.musicEnabled);
  $('#sfx-volume').val(Math.round(audioSettings.sfxVolume * 100));
  $('#sfx-vol-label').text(Math.round(audioSettings.sfxVolume * 100) + '%');
  $('#music-volume').val(Math.round(audioSettings.musicVolume * 100));
  $('#music-vol-label').text(Math.round(audioSettings.musicVolume * 100) + '%');
  updateSettingsUI();
  $('#settings-modal').addClass('show');
}

function updateSettingsUI() {
  const sfxOn = $('#sfx-toggle').is(':checked');
  const musOn = $('#music-toggle').is(':checked');
  $('#sfx-volume-row').css('opacity', sfxOn ? '1' : '0.4').find('input').prop('disabled', !sfxOn);
  $('#music-volume-row').css('opacity', musOn ? '1' : '0.4').find('input').prop('disabled', !musOn);
}

$(function() {
  // Attach hover / press SFX to every button
  function attachButtonSFX($btns) {
    $btns
      .on('mouseenter', sfxBtnHover)
      .on('mousedown',  sfxBtnPress);
  }
  attachButtonSFX($('button, .role-card, .catsel-card, .catsel-select-btn'));

 
  $(document).on('mouseenter', 'button:not([data-sfx-bound])', function() {
    if (!$(this).data('sfx-bound')) {
      $(this).data('sfx-bound', true).on('mouseenter', sfxBtnHover).on('mousedown', sfxBtnPress);
    }
    sfxBtnHover();
  });

  //Open settings
  $('#btn-settings').on('click', openSettings);

  // Toggle change – live preview
  $('#sfx-toggle').on('change', function() {
    updateSettingsUI();
    // Preview SFX immediately so the user hears whether it works
    if ($(this).is(':checked')) {
      const tmp = audioSettings.sfxEnabled;
      audioSettings.sfxEnabled = true;
      audioSettings.sfxVolume = parseInt($('#sfx-volume').val()) / 100;
      playSFX(SFX.btnPress);
      audioSettings.sfxEnabled = tmp;
    }
  });
  $('#music-toggle').on('change', function() {
    updateSettingsUI();
    // Live-preview music toggle
    const musOn = $(this).is(':checked');
    const vol   = parseInt($('#music-volume').val()) / 100;
    const bg    = document.getElementById('bg-music');
    if (bg) {
      if (musOn) { bg.volume = vol; bg.play().catch(()=>{}); }
      else        { bg.pause(); }
    }
  });

  // Volume slider live labels + live music volume
  $('#sfx-volume').on('input', function() {
    $('#sfx-vol-label').text($(this).val() + '%');
  });
  $('#music-volume').on('input', function() {
    const vol = parseInt($(this).val()) / 100;
    $('#music-vol-label').text($(this).val() + '%');
    // Real-time music volume change
    const bg = document.getElementById('bg-music');
    if (bg && $('#music-toggle').is(':checked')) bg.volume = vol;
  });

  // Save
  $('#settings-save').on('click', function() {
    audioSettings.sfxEnabled   = $('#sfx-toggle').is(':checked');
    audioSettings.musicEnabled = $('#music-toggle').is(':checked');
    audioSettings.sfxVolume    = parseInt($('#sfx-volume').val()) / 100;
    audioSettings.musicVolume  = parseInt($('#music-volume').val()) / 100;
    saveAudioSettings();
    applyAudioSettings();
    $('#settings-modal').removeClass('show');
    showToast('✅ Settings saved!', 1800);
  });

  // Close without saving 
  $('#settings-close').on('click', function() {
    $('#settings-modal').removeClass('show');
    applyAudioSettings(); // revert any live preview changes
  });

  // Start music on first user interaction (browser autoplay)
  $(document).one('click keydown touchstart', function() {
    startBgMusic();
  });

  // Apply on load (volume / mute state)
  applyAudioSettings();
});


// SEQUENCE GAME ENGINE
// Cards are always face-up and shuffled. Player taps in correct order.

var seqState = {
  steps: [],           // [{label, correctIdx}] shuffled
  nextExpected: 0,     // which correctIdx is due next
  mistakes: 0,         // wrong taps this level
  totalTaps: 0,        // every tap (correct + wrong) this level
  elapsed: 0,
  startTime: null,
  timerInterval: null,
  locked: true         // true during exposure, false when playable
};

function getSequenceRound() {
  var rounds = SEQUENCE_DATA[state.category] && SEQUENCE_DATA[state.category][state.difficulty];
  if (!rounds || !rounds.length) return null;
  return rounds[(state.currentLevel - 1) % rounds.length];
}

function startSequenceGame() {
  clearInterval(seqState.timerInterval);
  var round = getSequenceRound();
  if (!round) { showToast('No sequence data for this selection.', 2500); return; }

  // Reset counters
  seqState.nextExpected = 0;
  seqState.mistakes     = 0;
  seqState.totalTaps    = 0;
  seqState.elapsed      = 0;
  seqState.startTime    = null;
  seqState.locked       = true;

  var shuffled = shuffle(round.steps.map(function(label, i) {
    return { label: label, correctIdx: i };
  }));
  seqState.steps = shuffled;

  var diffCls = { Easy:'meta-diff-easy', Medium:'meta-diff-medium', Hard:'meta-diff-hard' }[state.difficulty];
  $('#game-meta-tags').html(
    '<span class="meta-tag meta-cat">' + state.category + '</span>' +
    '<span class="meta-tag ' + diffCls + '">' + state.difficulty + ' — Sequence</span>' +
    '<span class="meta-tag meta-level">Level ' + state.currentLevel + '/' + state.totalLevels + '</span>'
  );
  $('#game-student-name').text(state.studentName || 'Player');
  $('#stat-level').text(state.currentLevel + '/' + state.totalLevels);
  var subtitleEl = document.getElementById('game-subtitle');
  if (subtitleEl) subtitleEl.textContent = round.title;

  buildSequenceGrid(shuffled);
  updateSeqUI();
  showScreen('game');

  // Exposure phase: show cards face-up WITHOUT order numbers
  var expTime = EXPOSURE_TIME[state.difficulty];

  $('#exposure-label').html('👀 Memorise the cards! <b>' + round.title + '</b>');
  $('#exposure-container').show();
  $('#exposure-fill').css({ width: '100%', transition: 'none' });

  // Flip all cards face-up — content visible, no order badges shown
  $('#card-grid .seq-card').addClass('flipped');

  setTimeout(function() {
    $('#exposure-fill').css({ transition: 'width ' + expTime + 'ms linear', width: '0%' });
  }, 50);

  // When exposure ends flip all back face-down, unlock board, start timer
  setTimeout(function() {
    $('#card-grid .seq-card').removeClass('flipped');
    $('#exposure-label').html('🔢 <b>' + round.title + '</b> — tap the cards in the correct order!');
    $('#exposure-fill').css({ width: '0%', transition: 'none' });

    seqState.locked    = false;
    seqState.startTime = Date.now();

    seqState.timerInterval = setInterval(function() {
      seqState.elapsed = Math.round((Date.now() - seqState.startTime) / 1000);
      $('#stat-time').text(formatTime(seqState.elapsed));
      sendTelemetry();
    }, 1000);
  }, expTime);
}

function buildSequenceGrid(steps) {
  var n    = steps.length;
  var cols = n <= 4 ? 2 : n <= 6 ? 3 : 4;
  var $grid = $('#card-grid');
  $grid.css('grid-template-columns', 'repeat(' + cols + ', 1fr)').empty();
  var backSrc = CARD_BACKS[state.difficulty];

  steps.forEach(function(step, displayIdx) {
    var emojiRx = /^((?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\u0000-\u007F])+\s*)/;
    var m     = step.label.match(emojiRx);
    var emoji = m ? m[1].trim() : '';
    var text  = m ? step.label.slice(m[1].length).trim() : step.label;

    var frontHTML = emoji
      ? '<div class="seq-emoji">' + emoji + '</div><div class="seq-text">' + text + '</div>'
      : '<div class="seq-text seq-text-only">' + step.label + '</div>';

    var $card = $(
      '<div class="mem-card seq-card" data-display="' + displayIdx + '" data-correct="' + step.correctIdx + '">' +
        '<div class="mem-card-inner">' +
          '<div class="card-back"><img class="card-back-img" src="' + backSrc + '" alt="card back"></div>' +
          '<div class="card-front seq-card-front">' + frontHTML + '</div>' +
        '</div>' +
      '</div>'
    );

    // Cards start face-down; exposure phase flips them up (no badges), then back down
    (function($c){ $c.on('click', function(){ onSeqCardClick($c); }); })($card);
    $grid.append($card);
  });
}

function onSeqCardClick($card) {
  if (seqState.locked) return;
  if ($card.hasClass('seq-done') || $card.hasClass('seq-locked')) return;

  sfxCardFlip();
  seqState.totalTaps++;

  var correctIdx = parseInt($card.data('correct'));
  var orderNum   = seqState.nextExpected + 1;

  $card.addClass('flipped');

  if (correctIdx === seqState.nextExpected) {
    // ✅ Correct stays face-up, green, badge appears now
    sfxCardRight();
    seqState.nextExpected++;
    $card.addClass('seq-done matched');
    $card.find('.card-front').append('<div class="seq-order-badge">' + orderNum + '</div>');
    updateSeqUI();
    sendTelemetry();

    if (seqState.nextExpected >= seqState.steps.length) {
      clearInterval(seqState.timerInterval);
      var elapsed = Math.round((Date.now() - seqState.startTime) / 1000);
      seqState.elapsed = elapsed;

      state.totalMoves    += seqState.totalTaps;
      state.totalTime     += elapsed;
      state.totalMistakes += seqState.mistakes;
      state.moves   = seqState.totalTaps;
      state.matches = seqState.steps.length;
      state.elapsed = elapsed;

      setTimeout(levelComplete, 700);
    }
  } else {
    // ❌ Wrong briefly reveal the card, shake, flip back face-down
    sfxCardWrong();
    seqState.mistakes++;
    $card.addClass('seq-wrong');
    setTimeout(function() {
      $card.removeClass('seq-wrong flipped');
    }, 650);
    updateSeqUI();
    sendTelemetry();
  }
}

function updateSeqUI() {
  var correct = seqState.nextExpected;
  var taps    = seqState.totalTaps;
  var acc     = taps === 0 ? 100 : Math.round((correct / taps) * 100);
  $('#stat-moves').text(seqState.mistakes);
  $('#stat-acc').text(acc + '%');
}

