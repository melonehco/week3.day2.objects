// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//  name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const sombra = {
    name: "sombra",
    type: "offense",
    difficulty: "3/3",
    img: "sombra.png",
    saying: "EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story: "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities: [
        {
            name: "MACHINE PISTOL",
            description: "Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name: "HACK",
            description: "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name: "STEALTH",
            description: "Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name: "TRANSLOCATOR",
            description: "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name: "EMP",
            description: "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name: "MACHINE PISTOL",
            description: "Sombra’s fully-automatic machine pistol fires in a short-range spread."
        }
    ]
};

const mercy = {
    name: "mercy",
    type: "support",
    difficulty: "1/3",
    img: "mercy.png",
    saying: "HEROES NEVER DIE.",
    story: "A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace. Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch. Because her parents had been taken by war, Ziegler was opposed to the organization's militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch's head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions. Despite her contributions to Overwatch, she was often at odds with her superiors and the organization's overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war. Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.",
    abilities: [
        {
            name: "CADUCEUS STAFF",
            description: "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal."
        },
        {
            name: "CADUCEUS BLASTER",
            description: "Mercy shoots a round from her sidearm."
        },
        {
            name: "GUARDIAN ANGEL",
            description: "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments."
        },
        {
            name: "RESURRECT",
            description: "Mercy brings a dead ally back into the fight with full health."
        },
        {
            name: "ANGELIC DESCENT",
            description: "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights."
        },
        {
            name: "VALKYRIE",
            description: "Gain the ability to fly. Mercy’s abilities are enhanced."
        }
    ]
};

const dVa = {
    name: "dVa",
    type: "tank",
    difficulty: "2/3",
    img: "dVa.png",
    saying: "I PLAY TO WIN.",
    story: "D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland. Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat. The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed. As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as \"D.Va.\" Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents. Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.",
    abilities: [
        {
            name: "FUSION CANNONS",
            description: "D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active."
        },
        {
            name: "LIGHT GUN",
            description: "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster."
        },
        {
            name: "BOOSTERS",
            description: "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back."
        },
        {
            name: "DEFENSE MATRIX",
            description: "D.Va can maintain this forward-facing targeting array for a short period of time; while active, it'll stop incoming projectiles."
        },
        {
            name: "MICRO MISSILES",
            description: "D.Va launches a volley of explosive rockets."
        },
        {
            name: "SELF-DESTRUCT",
            description: "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents."
        },
        {
            name: "CALL MECH",
            description: "If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray."
        }
    ]
};

// 2) Create an array called "heroes" and store all of the hero object in the array

const heroes = [ sombra, mercy, dVa ];

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

//listener for submit button
//get form content

/** get the basic stuff across all three files working first 
 * up to #2 here, then at least part of methods.js (probably give functions stubs)
 * build up methods.js stub by stub
 * then up to #13 in events.js where it says to do the submit button
 */



// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 



// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
