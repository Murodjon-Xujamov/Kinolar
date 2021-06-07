const movies = [
  {
    id: "287947",
    title: "Shazam!",
    poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    overview:
      "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    release_date: 1553299200,
    genres: ["Action", "Comedy", "Fantasy"],
  },
  {
    id: "299537",
    title: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    release_date: 1551830400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "522681",
    title: "Escape Room",
    poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
    overview:
      "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
    release_date: 1546473600,
    genres: ["Thriller", "Action", "Horror", "Science Fiction"],
  },
  {
    id: "166428",
    title: "How to Train Your Dragon: The Hidden World",
    poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    overview:
      "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    release_date: 1546473600,
    genres: ["Animation", "Family", "Adventure"],
  },
  {
    id: "450465",
    title: "Glass",
    poster: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    overview:
      "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
    release_date: 1547596800,
    genres: ["Documentary"],
  },
  {
    id: "495925",
    title: "Doraemon the Movie: Nobita's Treasure Island",
    poster: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
    overview:
      "The story is based on Robert Louis Stevenson's Treasure Island novel.",
    release_date: 1520035200,
    genres: ["Animation"],
  },
  {
    id: "329996",
    title: "Dumbo",
    poster: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
    overview:
      "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
    release_date: 1553644800,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "299536",
    title: "Avengers: Infinity War",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: 1524618000,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "458723",
    title: "Us",
    poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
    overview:
      "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
    release_date: 1552521600,
    genres: ["Documentary", "Family"],
  },
  {
    id: "424783",
    title: "Bumblebee",
    poster: "https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
    overview:
      "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
    release_date: 1544832000,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "920",
    title: "Cars",
    poster: "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
    overview:
      "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    release_date: 1149728400,
    genres: ["Animation", "Adventure", "Comedy", "Family"],
  },
  {
    id: "299534",
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    release_date: 1556067600,
    genres: ["Adventure", "Science Fiction", "Action"],
  },
  {
    id: "324857",
    title: "Spider-Man: Into the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    overview:
      "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
    release_date: 1544140800,
    genres: ["Action", "Adventure", "Animation", "Science Fiction", "Comedy"],
  },
  {
    id: "157433",
    title: "Pet Sematary",
    poster: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
    overview:
      "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
    release_date: 1554339600,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "456740",
    title: "Hellboy",
    poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
    overview:
      "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
    release_date: 1554944400,
    genres: ["Fantasy", "Action"],
  },
  {
    id: "537915",
    title: "After",
    poster: "https://image.tmdb.org/t/p/w500/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
    overview:
      "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
    release_date: 1554944400,
    genres: ["Mystery", "Drama"],
  },
  {
    id: "485811",
    title: "Redcon-1",
    poster: "https://image.tmdb.org/t/p/w500/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
    overview:
      "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
    release_date: 1538096400,
    genres: ["Action", "Horror"],
  },
  {
    id: "471507",
    title: "Destroyer",
    poster: "https://image.tmdb.org/t/p/w500/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
    overview:
      "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
    release_date: 1545696000,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "400650",
    title: "Mary Poppins Returns",
    poster: "https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
    overview:
      "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
    release_date: 1544659200,
    genres: ["Documentary"],
  },
  {
    id: "297802",
    title: "Aquaman",
    poster: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    overview:
      "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
    release_date: 1544140800,
    genres: ["Action", "Adventure", "TV Movie"],
  },
  {
    id: "512196",
    title: "Happy Death Day 2U",
    poster: "https://image.tmdb.org/t/p/w500/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
    overview:
      "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
    release_date: 1550016000,
    genres: ["Comedy", "Horror", "Science Fiction"],
  },
  {
    id: "390634",
    title: "Fate/stay night: Heaven’s Feel II. lost butterfly",
    poster: "https://image.tmdb.org/t/p/w500/nInpnGCjhzVhsASIUAmgM1QIhYM.jpg",
    overview:
      "Theatrical-release adaptation of the visual novel 'Fate/stay night', following the third and final route. (Part 2 of a trilogy.)",
    release_date: 1547251200,
    genres: ["Animation", "Action", "Fantasy", "Drama"],
  },
  {
    id: "500682",
    title: "The Highwaymen",
    poster: "https://image.tmdb.org/t/p/w500/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
    overview:
      "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
    release_date: 1552608000,
    genres: ["Music"],
  },
  {
    id: "454294",
    title: "The Kid Who Would Be King",
    poster: "https://image.tmdb.org/t/p/w500/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
    overview:
      "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
    release_date: 1547596800,
    genres: ["Action", "Adventure", "Fantasy", "Family"],
  },
  {
    id: "543103",
    title: "Kamen Rider Heisei Generations FOREVER",
    poster: "https://image.tmdb.org/t/p/w500/kHMuyjlvNIwhCaDFiRwnl45wF7z.jpg",
    overview:
      "In the world of Sougo Tokiwa and Sento Kiryu, their 'companions' are losing their memories one after the other as they're replaced by other people. The Super Time Jacker, Tid , appears before them. He orders his powerful underlings, Another Double and Another Den-O, to pursue a young boy called Shingo. While fighting to protect Shingo, Sougo meets Ataru, a young man who loves Riders, but Ataru says that Kamen Riders aren't real. What is the meaning of those words? While the mystery deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
    release_date: 1545436800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "404368",
    title: "Ralph Breaks the Internet",
    poster: "https://image.tmdb.org/t/p/w500/qEnH5meR381iMpmCumAIMswcQw2.jpg",
    overview:
      "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, 'Sugar Rush.' In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
    release_date: 1542672000,
    genres: ["Family", "Animation", "Comedy", "Adventure"],
  },
  {
    id: "338952",
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    poster: "https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
    overview:
      "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
    release_date: 1542153600,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "399579",
    title: "Alita: Battle Angel",
    poster: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg",
    overview:
      "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
    release_date: 1548892800,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "450001",
    title: "Master Z: Ip Man Legacy",
    poster: "https://image.tmdb.org/t/p/w500/6VxEvOF7QDovsG6ro9OVyjH07LF.jpg",
    overview:
      "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
    release_date: 1545264000,
    genres: ["Action"],
  },
  {
    id: "504172",
    title: "The Mule",
    poster: "https://image.tmdb.org/t/p/w500/klazQbxk3yfuZ8JcfO9jdKOZQJ7.jpg",
    overview:
      "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
    release_date: 1544745600,
    genres: ["Crime", "Comedy"],
  },
  {
    id: "527729",
    title: "Asterix: The Secret of the Magic Potion",
    poster: "https://image.tmdb.org/t/p/w500/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg",
    overview:
      "Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic world in search of a talented young druid to transmit the Secret of the Magic Potion.",
    release_date: 1543968000,
    genres: ["Animation", "Family", "Comedy", "Adventure"],
  },
  {
    id: "118340",
    title: "Guardians of the Galaxy",
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    overview:
      "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    release_date: 1406682000,
    genres: [],
  },
  {
    id: "411728",
    title: "The Professor and the Madman",
    poster: "https://image.tmdb.org/t/p/w500/gtGCDLhfjW96qVarwctnuTpGOtD.jpg",
    overview:
      "Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid 19th century and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum , Dr William Minor.",
    release_date: 1551916800,
    genres: ["Drama", "History", "Mystery", "Thriller"],
  },
  {
    id: "527641",
    title: "Five Feet Apart",
    poster: "https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
    overview:
      "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness.",
    release_date: 1552608000,
    genres: ["Romance", "Drama"],
  },
  {
    id: "576071",
    title: "Unplanned",
    poster: "https://image.tmdb.org/t/p/w500/tvCtAz8z5tF49a7q9RRHvxiTjzv.jpg",
    overview:
      "As one of the youngest Planned Parenthood clinic directors in the nation, Abby Johnson was involved in upwards of 22,000 abortions and counseled countless women on their reproductive choices. Her passion surrounding a woman's right to choose led her to become a spokesperson for Planned Parenthood, fighting to enact legislation for the cause she so deeply believed in. Until the day she saw something that changed everything.",
    release_date: 1553126400,
    genres: ["Drama"],
  },
  {
    id: "283995",
    title: "Guardians of the Galaxy Vol. 2",
    poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    overview:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    release_date: 1492563600,
    genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
  },
  {
    id: "464504",
    title: "A Madea Family Funeral",
    poster: "https://image.tmdb.org/t/p/w500/sFvOTUlZrIxCLdmz1fC16wK0lme.jpg",
    overview:
      "A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where they find themselves unexpectedly planning a funeral that might unveil unpleasant family secrets.",
    release_date: 1551398400,
    genres: ["Comedy"],
  },
  {
    id: "428078",
    title: "Mortal Engines",
    poster: "https://image.tmdb.org/t/p/w500/gLhYg9NIvIPKVRTtvzCWnp1qJWG.jpg",
    overview:
      "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",
    release_date: 1543276800,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "460539",
    title: "Kuppathu Raja",
    poster: "https://image.tmdb.org/t/p/w500/wzLde7keWQqWA0CJYVz0X5RVKjd.jpg",
    overview:
      "Kuppathu Raja is an upcoming Tamil comedy drama film directed by Baba Bhaskar. The film features G. V. Prakash Kumar and Parthiban in the lead roles.",
    release_date: 1554426000,
    genres: ["Drama"],
  },
  {
    id: "24428",
    title: "The Avengers",
    poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    overview:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    release_date: 1335315600,
    genres: ["Documentary"],
  },
  {
    id: "120",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    overview:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    release_date: 1008633600,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "671",
    title: "Harry Potter and the Philosopher's Stone",
    poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    release_date: 1005868800,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "500904",
    title: "A Vigilante",
    poster: "https://image.tmdb.org/t/p/w500/x5MSMGVagNINIWyZaxdjLarTDM3.jpg",
    overview: "A vigilante helps victims escape their domestic abusers.",
    release_date: 1553817600,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "284053",
    title: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    overview:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    release_date: 1508893200,
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
  },
  {
    id: "424694",
    title: "Bohemian Rhapsody",
    poster: "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    release_date: 1540342800,
    genres: ["Music", "Documentary"],
  },
  {
    id: "508763",
    title: "A Dog's Way Home",
    poster: "https://image.tmdb.org/t/p/w500/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg",
    overview:
      "A Dog’s Way Home chronicles the heartwarming adventure of Bella, a dog who embarks on an epic 400-mile journey home after she is separated from her beloved human.",
    release_date: 1547078400,
    genres: ["Drama", "Family", "Adventure"],
  },
  {
    id: "284054",
    title: "Black Panther",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    release_date: 1518480000,
    genres: ["Family", "Drama"],
  },
  {
    id: "335983",
    title: "Venom",
    poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    overview:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    release_date: 1538096400,
    genres: ["Thriller"],
  },
  {
    id: "440472",
    title: "The Upside",
    poster: "https://image.tmdb.org/t/p/w500/hPZ2caow1PCND6qnerfgn6RTXdm.jpg",
    overview:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom.",
    release_date: 1547078400,
    genres: ["Drama"],
  },
  {
    id: "363088",
    title: "Ant-Man and the Wasp",
    poster: "https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg",
    overview:
      "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
    release_date: 1530666000,
    genres: ["Action", "Adventure", "Science Fiction", "Comedy"],
  },
  {
    id: "351286",
    title: "Jurassic World: Fallen Kingdom",
    poster: "https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    overview:
      "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    release_date: 1528246800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "441384",
    title: "The Beach Bum",
    poster: "https://image.tmdb.org/t/p/w500/iXMxdC7T0t3dxislnUNybcvJmAH.jpg",
    overview:
      "An irreverent comedy about the misadventures of Moondog, a rebellious stoner and lovable rogue who lives large.",
    release_date: 1553126400,
    genres: ["Comedy"],
  },
  {
    id: "480530",
    title: "Creed II",
    poster: "https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
    overview:
      "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    release_date: 1542758400,
    genres: ["Drama"],
  },
  {
    id: "399361",
    title: "Triple Frontier",
    poster: "https://image.tmdb.org/t/p/w500/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
    overview:
      "Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.",
    release_date: 1551830400,
    genres: ["Action", "Thriller", "Crime", "Adventure"],
  },
  {
    id: "122917",
    title: "The Hobbit: The Battle of the Five Armies",
    poster: "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    overview:
      "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    release_date: 1418169600,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "400157",
    title: "Wonder Park",
    poster: "https://image.tmdb.org/t/p/w500/8KomINZhIuJeB4oB7k7tkq8tmE.jpg",
    overview:
      "The story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.",
    release_date: 1552521600,
    genres: ["Comedy", "Animation", "Adventure", "Family", "Fantasy"],
  },
  {
    id: "566555",
    title: "Detective Conan: The Fist of Blue Sapphire",
    poster: "https://image.tmdb.org/t/p/w500/jUfCBwhSTE02jTN9REJbHm2lRL8.jpg",
    overview: "23rd Detective Conan Movie.",
    release_date: 1555030800,
    genres: ["Animation", "Action", "Drama", "Mystery", "Comedy"],
  },
  {
    id: "438650",
    title: "Cold Pursuit",
    poster: "https://image.tmdb.org/t/p/w500/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg",
    overview:
      "Nels Coxman's quiet life comes crashing down when his beloved son dies under mysterious circumstances. His search for the truth soon becomes a quest for revenge as he seeks coldblooded justice against a drug lord and his inner circle.",
    release_date: 1549497600,
    genres: ["Action"],
  },
  {
    id: "181808",
    title: "Star Wars: The Last Jedi",
    poster: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    release_date: 1513123200,
    genres: ["Documentary"],
  },
  {
    id: "383498",
    title: "Deadpool 2",
    poster: "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    overview:
      "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    release_date: 1526346000,
    genres: ["Action", "Comedy", "Adventure"],
  },
  {
    id: "157336",
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    overview:
      "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    release_date: 1415145600,
    genres: ["Adventure", "Drama", "Science Fiction"],
  },
  {
    id: "449985",
    title: "Triple Threat",
    poster: "https://image.tmdb.org/t/p/w500/cSpM3QxmoSLp4O1WAMQpUDcaB7R.jpg",
    overview:
      "A crime syndicate places a hit on a billionaire's daughter, making her the target of an elite assassin squad. A small band of down-and-out mercenaries protects her, fighting tooth and nail to stop the assassins from reaching their target.",
    release_date: 1552953600,
    genres: ["Action", "Thriller"],
  },
  {
    id: "99861",
    title: "Avengers: Age of Ultron",
    poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    overview:
      "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    release_date: 1429664400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "271110",
    title: "Captain America: Civil War",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    overview:
      "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    release_date: 1461718800,
    genres: ["Comedy", "Documentary"],
  },
  {
    id: "529216",
    title: "Mirage",
    poster: "https://image.tmdb.org/t/p/w500/oLO9y7GoyAVUVoAWD6jCgY7GQfs.jpg",
    overview:
      "Two storms separated by 25 years. A woman murdered. A daughter missed. Only 72 hours to discover the truth.",
    release_date: 1543536000,
    genres: ["Horror"],
  },
  {
    id: "22",
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    poster: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    overview:
      "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    release_date: 1057712400,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "490132",
    title: "Green Book",
    poster: "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    overview:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    release_date: 1542326400,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "351044",
    title: "Welcome to Marwen",
    poster: "https://image.tmdb.org/t/p/w500/dOULsxYQFsOR0cEBBB20xnjJkPD.jpg",
    overview:
      "When a devastating attack shatters Mark Hogancamp and wipes away all memories, no one expected recovery. Putting together pieces from his old and new life, Mark meticulously creates a wondrous town named Marwen where he can heal and be heroic. As he builds an astonishing art installation — a testament to the most powerful women he knows — through his fantasy world, he draws strength to triumph in the real one.",
    release_date: 1545350400,
    genres: ["Drama", "Comedy", "Fantasy"],
  },
  {
    id: "76338",
    title: "Thor: The Dark World",
    poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    overview:
      "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    release_date: 1383004800,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "460321",
    title: "Close",
    poster: "https://image.tmdb.org/t/p/w500/4kjUGqPIv6kpxJUvjmeQX7nQpKd.jpg",
    overview:
      "A counter-terrorism expert takes a job protecting a young heiress. After an attempted kidnapping puts both of their lives in danger, they must flee.",
    release_date: 1547769600,
    genres: ["Crime", "Drama"],
  },
  {
    id: "327331",
    title: "The Dirt",
    poster: "https://image.tmdb.org/t/p/w500/xGY5rr8441ib0lT9mtHZn7e8Aay.jpg",
    overview:
      "The story of Mötley Crüe and their rise from the Sunset Strip club scene of the early 1980s to superstardom.",
    release_date: 1553212800,
    genres: [],
  },
  {
    id: "412157",
    title: "Steel Country",
    poster: "https://image.tmdb.org/t/p/w500/7QqFn9UzuSnh1uOPeSfYL1MFjkB.jpg",
    overview:
      "When a young boy turns up dead in a sleepy Pennsylvania town, a local sanitation truck driver, Donald, plays detective, embarking on a precarious and obsessive investigation to prove the boy was murdered.",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "122",
    title: "The Lord of the Rings: The Return of the King",
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    overview:
      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    release_date: 1070236800,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "348",
    title: "Alien",
    poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    overview:
      "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    release_date: 296442000,
    genres: ["Drama"],
  },
  {
    id: "140607",
    title: "Star Wars: The Force Awakens",
    poster: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    overview:
      "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    release_date: 1450137600,
    genres: ["Documentary"],
  },
  {
    id: "293660",
    title: "Deadpool",
    poster: "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg",
    overview:
      "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    release_date: 1454976000,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "332562",
    title: "A Star Is Born",
    poster: "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    overview:
      "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    release_date: 1538528400,
    genres: ["Documentary", "Music"],
  },
  {
    id: "426563",
    title: "Holmes & Watson",
    poster: "https://image.tmdb.org/t/p/w500/orEUlKndjV1rEcWqXbbjegjfv97.jpg",
    overview:
      "Detective Sherlock Holmes and Dr. John Watson join forces to investigate a murder at Buckingham Palace. They soon learn that they have only four days to solve the case, or the queen will become the next victim.",
    release_date: 1545696000,
    genres: ["Mystery", "Adventure", "Comedy", "Crime"],
  },
  {
    id: "429197",
    title: "Vice",
    poster: "https://image.tmdb.org/t/p/w500/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
    overview:
      "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
    release_date: 1545696000,
    genres: ["Action", "Thriller"],
  },
  {
    id: "335984",
    title: "Blade Runner 2049",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    release_date: 1507078800,
    genres: ["Documentary"],
  },
  {
    id: "339380",
    title: "On the Basis of Sex",
    poster: "https://image.tmdb.org/t/p/w500/izY9Le3QWtu7xkHq7bjJnuE5yGI.jpg",
    overview:
      "Young lawyer Ruth Bader Ginsburg teams with her husband Marty to bring a groundbreaking case before the U.S. Court of Appeals and overturn a century of sex discrimination.",
    release_date: 1545696000,
    genres: ["Drama", "History"],
  },
  {
    id: "562",
    title: "Die Hard",
    poster: "https://image.tmdb.org/t/p/w500/1fq1IpnuVqkD5BMuaXAUW0eVB21.jpg",
    overview:
      "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    release_date: 584931600,
    genres: ["Action"],
  },
  {
    id: "375588",
    title: "Robin Hood",
    poster: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
    overview:
      "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.",
    release_date: 1542672000,
    genres: ["Family", "Animation"],
  },
  {
    id: "381288",
    title: "Split",
    poster: "https://image.tmdb.org/t/p/w500/bqb9WsmZmDIKxqYmBJ9lj7J6hzn.jpg",
    overview:
      "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
    release_date: 1484784000,
    genres: ["Science Fiction", "Drama"],
  },
  {
    id: "10191",
    title: "How to Train Your Dragon",
    poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    overview:
      "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father",
    release_date: 1268179200,
    genres: ["Fantasy", "Adventure", "Animation", "Family"],
  },
  {
    id: "315635",
    title: "Spider-Man: Homecoming",
    poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    overview:
      "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    release_date: 1499216400,
    genres: ["Action", "Adventure", "Science Fiction", "Drama"],
  },
  {
    id: "603",
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    release_date: 922755600,
    genres: ["Documentary", "Science Fiction"],
  },
  {
    id: "586347",
    title: "The Hard Way",
    poster: "https://image.tmdb.org/t/p/w500/kwtLphVv3ZbIblc79YNYbZuzbzb.jpg",
    overview:
      "After learning of his brother's death during a mission in Romania, a former soldier joins two allies to hunt down a mysterious enemy and take his revenge.",
    release_date: 1553040000,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "141052",
    title: "Justice League",
    poster: "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    overview:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    release_date: 1510704000,
    genres: ["Animation"],
  },
  {
    id: "680",
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    release_date: 779158800,
    genres: [],
  },
  {
    id: "337167",
    title: "Fifty Shades Freed",
    poster: "https://image.tmdb.org/t/p/w500/9ZedQHPQVveaIYmDSTazhT3y273.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    release_date: 1516147200,
    genres: ["Drama", "Romance"],
  },
  {
    id: "102899",
    title: "Ant-Man",
    poster: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    overview:
      "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    release_date: 1436835600,
    genres: ["Documentary"],
  },
  {
    id: "11",
    title: "Star Wars",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    overview:
      "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    release_date: 233370000,
    genres: ["Action"],
  },
  {
    id: "807",
    title: "Se7en",
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    overview:
      "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the 'seven deadly sins' in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    release_date: 811731600,
    genres: ["Crime", "Mystery", "Thriller"],
  },
  {
    id: "27205",
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    overview:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    release_date: 1279155600,
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    id: "767",
    title: "Harry Potter and the Half-Blood Prince",
    poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    overview:
      "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
    release_date: 1246928400,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "1726",
    title: "Iron Man",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    overview:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    release_date: 1209517200,
    genres: ["Drama"],
  },
  {
    id: "87101",
    title: "Terminator Genisys",
    poster: "https://image.tmdb.org/t/p/w500/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
    overview:
      "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    release_date: 1435021200,
    genres: ["Science Fiction", "Action", "Thriller", "Adventure"],
  },
  {
    id: "438799",
    title: "Overlord",
    poster: "https://image.tmdb.org/t/p/w500/l76Rgp32z2UxjULApxGXAPpYdAP.jpg",
    overview:
      "France, June 1944. On the eve of D-Day, some American paratroopers fall behind enemy lines after their aircraft crashes while on a mission to destroy a radio tower in a small village near the beaches of Normandy. After reaching their target, the surviving paratroopers realise that, in addition to fighting the Nazi troops that patrol the village, they also must fight against something else.",
    release_date: 1541030400,
    genres: ["Horror", "War", "Science Fiction"],
  },
  {
    id: "260513",
    title: "Incredibles 2",
    poster: "https://image.tmdb.org/t/p/w500/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    overview:
      "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
    release_date: 1528938000,
    genres: ["Action", "Adventure", "Animation", "Family"],
  },
  {
    id: "672",
    title: "Harry Potter and the Chamber of Secrets",
    poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    overview:
      "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
    release_date: 1037145600,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "487297",
    title: "What Men Want",
    poster: "https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg",
    overview:
      "Magically able to hear what men are thinking, a sports agent uses her newfound ability to turn the tables on her overbearing male colleagues.",
    release_date: 1549584000,
    genres: ["Drama", "Romance"],
  },
  {
    id: "399402",
    title: "Hunter Killer",
    poster: "https://image.tmdb.org/t/p/w500/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg",
    overview:
      "Captain Glass of the USS “Arkansas” discovers that a coup d'état is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.",
    release_date: 1539910800,
    genres: ["Action", "Thriller"],
  },
  {
    id: "466282",
    title: "To All the Boys I've Loved Before",
    poster: "https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    overview:
      "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
    release_date: 1534381200,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "209112",
    title: "Batman v Superman: Dawn of Justice",
    poster: "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    overview:
      "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
    release_date: 1458691200,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "360920",
    title: "The Grinch",
    poster: "https://image.tmdb.org/t/p/w500/stAu0oF6dYDhV5ssbmFUYkQPtCP.jpg",
    overview:
      "The Grinch hatches a scheme to ruin Christmas when the residents of Whoville plan their annual holiday celebration.",
    release_date: 1541635200,
    genres: ["Animation", "Family", "Music"],
  },
  {
    id: "10195",
    title: "Thor",
    poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    release_date: 1303347600,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "514439",
    title: "Breakthrough",
    poster: "https://image.tmdb.org/t/p/w500/t58dx7JIgchr9If5uxn3NmHaHoS.jpg",
    overview:
      "When he was 14, Smith drowned in Lake St. Louis and was dead for nearly an hour. According to reports at the time, CPR was performed 27 minutes to no avail. Then the youth's mother, Joyce Smith, entered the room, praying loudly. Suddenly, there was a pulse, and Smith came around.",
    release_date: 1554944400,
    genres: ["War"],
  },
  {
    id: "278",
    title: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    overview:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    release_date: 780282000,
    genres: ["Drama", "Crime"],
  },
  {
    id: "297762",
    title: "Wonder Woman",
    poster: "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    overview:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    release_date: 1496106000,
    genres: ["Action", "Adventure", "Fantasy", "TV Movie"],
  },
  {
    id: "353081",
    title: "Mission: Impossible - Fallout",
    poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    overview:
      "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
    release_date: 1531443600,
    genres: ["Action", "Adventure"],
  },
  {
    id: "8966",
    title: "Twilight",
    poster: "https://image.tmdb.org/t/p/w500/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    overview:
      "When Bella Swan moves to a small town in the Pacific Northwest to live with her father, she meets the reclusive Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't help but fall in love with him, a fatal move that endangers her own life when a coven of bloodsuckers try to challenge the Cullen clan.",
    release_date: 1227139200,
    genres: ["Animation"],
  },
  {
    id: "62",
    title: "2001: A Space Odyssey",
    poster: "https://image.tmdb.org/t/p/w500/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg",
    overview:
      "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    release_date: -54604800,
    genres: [],
  },
  {
    id: "155",
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    release_date: 1216170000,
    genres: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    id: "12445",
    title: "Harry Potter and the Deathly Hallows: Part 2",
    poster: "https://image.tmdb.org/t/p/w500/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
    overview:
      "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    release_date: 1310000400,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: "207703",
    title: "Kingsman: The Secret Service",
    poster: "https://image.tmdb.org/t/p/w500/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg",
    overview:
      "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    release_date: 1422057600,
    genres: ["Crime", "Comedy", "Action", "Adventure"],
  },
  {
    id: "532321",
    title: "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow",
    poster: "https://image.tmdb.org/t/p/w500/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg",
    overview:
      "Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru's 'date course' with Emilia?",
    release_date: 1538787600,
    genres: ["Animation", "Adventure"],
  },
  {
    id: "263115",
    title: "Logan",
    poster: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    overview:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    release_date: 1488240000,
    genres: ["Comedy", "Drama", "Family"],
  },
  {
    id: "280217",
    title: "The Lego Movie 2: The Second Part",
    poster: "https://image.tmdb.org/t/p/w500/QTESAsBVZwjtGJNDP7utiGV37z.jpg",
    overview:
      "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO® invaders from outer space, wrecking everything faster than they can rebuild.",
    release_date: 1548460800,
    genres: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Science Fiction",
      "Fantasy",
    ],
  },
  {
    id: "135397",
    title: "Jurassic World",
    poster: "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    overview:
      "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
    release_date: 1433552400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "245891",
    title: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    overview:
      "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    release_date: 1413939600,
    genres: [],
  },
  {
    id: "348350",
    title: "Solo: A Star Wars Story",
    poster: "https://image.tmdb.org/t/p/w500/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
    release_date: 1526346000,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "543540",
    title: "The Perfect Date",
    poster: "https://image.tmdb.org/t/p/w500/m5LqnnkN09124CSE8yGskeCv3kb.jpg",
    overview:
      "No beau? No problem! To earn money for college, a high schooler creates a dating app that lets him act as a stand-in boyfriend.",
    release_date: 1555030800,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "12444",
    title: "Harry Potter and the Deathly Hallows: Part 1",
    poster: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    overview:
      "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    release_date: 1287277200,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "198663",
    title: "The Maze Runner",
    poster: "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
    overview:
      "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    release_date: 1410310800,
    genres: ["Action", "Science Fiction", "Thriller"],
  },
  {
    id: "607",
    title: "Men in Black",
    poster: "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
    overview:
      "After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. Agent Kay and new recruit Agent Jay find themselves in the middle of a deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies.",
    release_date: 867805200,
    genres: ["Comedy"],
  },
  {
    id: "337339",
    title: "The Fate of the Furious",
    poster: "https://image.tmdb.org/t/p/w500/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
    overview:
      "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    release_date: 1491958800,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "429471",
    title: "Captive State",
    poster: "https://image.tmdb.org/t/p/w500/cVo7lylXAUDGuvDZBUYaP8Zjbku.jpg",
    overview:
      "Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored.",
    release_date: 1552608000,
    genres: ["Science Fiction"],
  },
  {
    id: "109445",
    title: "Frozen",
    poster: "https://image.tmdb.org/t/p/w500/mbPrrbt8bSLcHSBCHnRclPlMZPl.jpg",
    overview:
      "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    release_date: 1385510400,
    genres: ["Thriller"],
  },
  {
    id: "82702",
    title: "How to Train Your Dragon 2",
    poster: "https://image.tmdb.org/t/p/w500/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    overview:
      "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    release_date: 1402275600,
    genres: ["Fantasy", "Action", "Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "423949",
    title: "Unicorn Store",
    poster: "https://image.tmdb.org/t/p/w500/rGe3eWy3F3qggDZMc86bASN4I7C.jpg",
    overview:
      "A woman named Kit moves back to her parent's house, where she receives a mysterious invitation that would fulfill her childhood dreams.",
    release_date: 1505091600,
    genres: ["Fantasy", "Drama", "Comedy"],
  },
  {
    id: "345940",
    title: "The Meg",
    poster: "https://image.tmdb.org/t/p/w500/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
    overview:
      "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
    release_date: 1533776400,
    genres: ["Science Fiction", "Action", "Thriller"],
  },
  {
    id: "284052",
    title: "Doctor Strange",
    poster: "https://image.tmdb.org/t/p/w500/gwi5kL7HEWAOTffiA14e4SbOGra.jpg",
    overview:
      "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    release_date: 1477357200,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "537059",
    title: "Justice League vs. the Fatal Five",
    poster: "https://image.tmdb.org/t/p/w500/9F4yd1lnTKFHZkme1nuPWmH1hbl.jpg",
    overview:
      "The Justice League faces a powerful new threat — the Fatal Five! Superman, Batman and Wonder Woman seek answers as the time-traveling trio of Mano, Persuader and Tharok terrorize Metropolis in search of budding Green Lantern, Jessica Cruz. With her unwilling help, they aim to free remaining Fatal Five members Emerald Empress and Validus to carry out their sinister plan. But the Justice League has also discovered an ally from another time in the peculiar Star Boy — brimming with volatile power, could he be the key to thwarting the Fatal Five? An epic battle against ultimate evil awaits!",
    release_date: 1553904000,
    genres: ["Animation", "Action", "Science Fiction"],
  },
  {
    id: "443055",
    title: "Love of My Life",
    poster: "https://image.tmdb.org/t/p/w500/7b19Sh0Aef5vGa0OFtvJxLe2SK9.jpg",
    overview: "What if you had only five days to figure out... everything.",
    release_date: 1487289600,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "32657",
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    poster: "https://image.tmdb.org/t/p/w500/brzpTyZ5bnM7s53C1KSk1TmrMO6.jpg",
    overview:
      "Accident prone teenager, Percy discovers he's actually a demi-God, the son of Poseidon, and he is needed when Zeus' lightning is stolen. Percy must master his new found skills in order to prevent a war between the Gods that could devastate the entire world.",
    release_date: 1264982400,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "121",
    title: "The Lord of the Rings: The Two Towers",
    poster: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    overview:
      "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    release_date: 1040169600,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "131631",
    title: "The Hunger Games: Mockingjay - Part 1",
    poster: "https://image.tmdb.org/t/p/w500/ezHakxJHVXdPI6h3TKssEwXYtsg.jpg",
    overview:
      "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    release_date: 1416268800,
    genres: ["Science Fiction", "Adventure", "Thriller"],
  },
  {
    id: "9741",
    title: "Unbreakable",
    poster: "https://image.tmdb.org/t/p/w500/mLuehrGLiK5zFCyRmDDOH6gbfPf.jpg",
    overview:
      "An ordinary man makes an extraordinary discovery when a train accident leaves his fellow passengers dead — and him unscathed. The answer to this mystery could lie with the mysterious Elijah Price, a man who suffers from a disease that renders his bones as fragile as glass.",
    release_date: 974073600,
    genres: ["Romance", "Drama"],
  },
  {
    id: "49026",
    title: "The Dark Knight Rises",
    poster: "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
    overview:
      "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    release_date: 1342400400,
    genres: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    id: "85",
    title: "Raiders of the Lost Ark",
    poster: "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    overview:
      "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
    release_date: 361155600,
    genres: ["Action", "Adventure"],
  },
  {
    id: "439079",
    title: "The Nun",
    poster: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    overview:
      "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2” as the abbey becomes a horrific battleground between the living and the damned.",
    release_date: 1536109200,
    genres: [],
  },
  {
    id: "286217",
    title: "The Martian",
    poster: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    overview:
      "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
    release_date: 1443574800,
    genres: [],
  },
  {
    id: "300681",
    title: "Replicas",
    poster: "https://image.tmdb.org/t/p/w500/hhPBTAn9b4TYOxc1JYNsX4BFAlW.jpg",
    overview:
      "A scientist becomes obsessed with returning his family to normalcy after a terrible accident.",
    release_date: 1540429200,
    genres: ["Thriller", "Science Fiction"],
  },
  {
    id: "10138",
    title: "Iron Man 2",
    poster: "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    overview:
      "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    release_date: 1272416400,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "12155",
    title: "Alice in Wonderland",
    poster: "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    overview:
      "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason – to conquer the horrific Jabberwocky and restore the rightful queen to her throne.",
    release_date: 1267574400,
    genres: ["Animation", "Fantasy"],
  },
  {
    id: "19995",
    title: "Avatar",
    poster: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    overview:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    release_date: 1260403200,
    genres: ["Horror"],
  },
  {
    id: "438674",
    title: "Dragged Across Concrete",
    poster: "https://image.tmdb.org/t/p/w500/dQ9EkVyPYJNVCfP5jWXRe4faUFA.jpg",
    overview:
      "Two policemen, one an old-timer, the other his volatile younger partner, find themselves suspended when a video of their strong-arm tactics becomes the media's cause du jour. Low on cash and with no other options, these two embittered soldiers descend into the criminal underworld to gain their just due, but instead find far more than they wanted awaiting them in the shadows.",
    release_date: 1550707200,
    genres: ["Crime", "Action", "Thriller"],
  },
  {
    id: "259316",
    title: "Fantastic Beasts and Where to Find Them",
    poster: "https://image.tmdb.org/t/p/w500/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
    overview:
      "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
    release_date: 1479254400,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "11253",
    title: "Hellboy II: The Golden Army",
    poster: "https://image.tmdb.org/t/p/w500/fGQAO4RgUzspO7L4u5KXirIn34s.jpg",
    overview:
      "In this continuation to the adventure of the demon superhero, an evil elf breaks an ancient pact between humans and creatures, as he declares war against humanity. He is on a mission to release The Golden Army, a deadly group of fighting machines that can destroy the human race. As Hell on Earth is ready to erupt, Hellboy and his crew set out to defeat the evil prince.",
    release_date: 1215738000,
    genres: [],
  },
  {
    id: "246655",
    title: "X-Men: Apocalypse",
    poster: "https://image.tmdb.org/t/p/w500/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
    overview:
      "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    release_date: 1463533200,
    genres: ["Documentary"],
  },
  {
    id: "553141",
    title: "The Head Hunter",
    poster: "https://image.tmdb.org/t/p/w500/ol0DSLOIN8Rq1BcWDTsk6NNwas6.jpg",
    overview:
      "On the outskirts of a kingdom, a quiet but fierce medieval warrior protects the realm from monsters and the occult. His gruesome collection of heads is missing only one - the monster that killed his daughter years ago. Driven by a thirst for revenge, he travels wild expanses on horseback. When his second chance arrives, it’s in a way far more horrifying than he ever imagined.",
    release_date: 1554426000,
    genres: [],
  },
  {
    id: "396461",
    title: "Under the Silver Lake",
    poster: "https://image.tmdb.org/t/p/w500/cJ9aKlEgTLYtpYjNqin06YqJRUl.jpg",
    overview:
      "Young and disenchanted Sam meets a mysterious and beautiful woman who's swimming in his building's pool one night. When she suddenly vanishes the next morning, Sam embarks on a surreal quest across Los Angeles to decode the secret behind her disappearance, leading him into the murkiest depths of mystery, scandal and conspiracy.",
    release_date: 1529542800,
    genres: ["Drama", "Mystery"],
  },
  {
    id: "1771",
    title: "Captain America: The First Avenger",
    poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    overview:
      "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    release_date: 1311296400,
    genres: ["Documentary"],
  },
  {
    id: "49521",
    title: "Man of Steel",
    poster: "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
    overview:
      "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    release_date: 1370998800,
    genres: [],
  },
  {
    id: "210577",
    title: "Gone Girl",
    poster: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg",
    overview:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    release_date: 1412125200,
    genres: ["Mystery", "Thriller", "Drama"],
  },
  {
    id: "87",
    title: "Indiana Jones and the Temple of Doom",
    poster: "https://image.tmdb.org/t/p/w500/wu0m7HiZyZr4pOp8IpnFHNvGkVV.jpg",
    overview:
      "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
    release_date: 454122000,
    genres: ["Adventure", "Action"],
  },
  {
    id: "346910",
    title: "The Predator",
    poster: "https://image.tmdb.org/t/p/w500/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
    overview:
      "When a kid accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled female scientist can prevent the end of the human race.",
    release_date: 1536109200,
    genres: ["Comedy", "Horror", "Science Fiction", "TV Movie", "Animation"],
  },
  {
    id: "127585",
    title: "X-Men: Days of Future Past",
    poster: "https://image.tmdb.org/t/p/w500/bvN8iUpHyBIvniUk4e52SUZMA7Z.jpg",
    overview:
      "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
    release_date: 1400115600,
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
  },
  {
    id: "679",
    title: "Aliens",
    poster: "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
    overview:
      "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story—all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
    release_date: 522032400,
    genres: [],
  },
  {
    id: "177572",
    title: "Big Hero 6",
    poster: "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    overview:
      "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    release_date: 1414112400,
    genres: ["Adventure", "Family", "Animation", "Action", "Comedy"],
  },
  {
    id: "8587",
    title: "The Lion King",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    overview:
      "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
    release_date: 768272400,
    genres: ["Animation"],
  },
  {
    id: "189",
    title: "Sin City: A Dame to Kill For",
    poster: "https://image.tmdb.org/t/p/w500/50kALxDX4mmzIRljbNbPY0u4cie.jpg",
    overview:
      "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
    release_date: 1408496400,
    genres: ["Crime", "Action", "Thriller"],
  },
  {
    id: "58",
    title: "Pirates of the Caribbean: Dead Man's Chest",
    poster: "https://image.tmdb.org/t/p/w500/l3peI54mf6Z9EBSvS3hnRmOBbFT.jpg",
    overview:
      "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.",
    release_date: 1150765200,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "354912",
    title: "Coco",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    release_date: 1509066000,
    genres: ["Animation", "Family", "Comedy", "Adventure", "Fantasy"],
  },
  {
    id: "272",
    title: "Batman Begins",
    poster: "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    overview:
      "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    release_date: 1118365200,
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: "262500",
    title: "Insurgent",
    poster: "https://image.tmdb.org/t/p/w500/hJij9DQUTLm7c0jNR6etlGZxMhB.jpg",
    overview:
      "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.",
    release_date: 1426636800,
    genres: ["Action", "Adventure", "Science Fiction", "Thriller"],
  },
  {
    id: "520679",
    title: "Her Smell",
    poster: "https://image.tmdb.org/t/p/w500/qEvgdGBMORPS0rz8pqkVH3obLee.jpg",
    overview:
      "A self-destructive punk rocker struggles with sobriety while trying to recapture the creative inspiration that led her band to success.",
    release_date: 1555030800,
    genres: ["Drama", "Music"],
  },
  {
    id: "49051",
    title: "The Hobbit: An Unexpected Journey",
    poster: "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    overview:
      "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    release_date: 1353888000,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "76757",
    title: "Jupiter Ascending",
    poster: "https://image.tmdb.org/t/p/w500/2NCcAZ3M3F0FxENYmammBknwpVn.jpg",
    overview:
      "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
    release_date: 1423008000,
    genres: ["Documentary"],
  },
  {
    id: "405774",
    title: "Bird Box",
    poster: "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    overview:
      "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    release_date: 1544659200,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "335988",
    title: "Transformers: The Last Knight",
    poster: "https://image.tmdb.org/t/p/w500/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
    overview:
      "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
    release_date: 1497574800,
    genres: ["Action", "Science Fiction", "Thriller", "Adventure"],
  },
  {
    id: "505262",
    title: "My Hero Academia: Two Heroes",
    poster: "https://image.tmdb.org/t/p/w500/hC4nTxdhXqFWzgqynGvvXVMiMNp.jpg",
    overview:
      "All Might and Deku accept an invitation to go abroad to a floating and mobile manmade city, called 'I Island', where they research quirks as well as hero supplemental items at the special 'I Expo' convention that is currently being held on the island. During that time, suddenly, despite an iron wall of security surrounding the island, the system is breached by a villain, and the only ones able to stop him are the students of Class 1-A.",
    release_date: 1533258000,
    genres: ["Animation", "Action", "Comedy", "Fantasy", "Adventure"],
  },
  {
    id: "129",
    title: "Spirited Away",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    overview:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    release_date: 995590800,
    genres: ["Animation", "Family", "Fantasy"],
  },
  {
    id: "363676",
    title: "Sully",
    poster: "https://image.tmdb.org/t/p/w500/r09ivJ1GGh5WArqRViRYDQLrTVG.jpg",
    overview:
      "On 15 January 2009, the world witnessed the 'Miracle on the Hudson' when Captain 'Sully' Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and career.",
    release_date: 1473210000,
    genres: ["Drama", "History"],
  },
  {
    id: "673",
    title: "Harry Potter and the Prisoner of Azkaban",
    poster: "https://image.tmdb.org/t/p/w500/v0wMKEEGaNc9evdqGYfIvoWXh24.jpg",
    overview:
      "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black—and turns to sympathetic Professor Lupin for help.",
    release_date: 1085965200,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "402900",
    title: "Ocean's Eight",
    poster: "https://image.tmdb.org/t/p/w500/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
    overview:
      "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    release_date: 1528333200,
    genres: ["Crime", "Comedy", "Action", "Thriller"],
  },
  {
    id: "449563",
    title: "Isn't It Romantic",
    poster: "https://image.tmdb.org/t/p/w500/5xNBYXuv8wqiLVDhsfqCOr75DL7.jpg",
    overview:
      "For a long time, Natalie, an Australian architect living in New York City, had always believed that what she had seen in rom-coms is all fantasy. But after thwarting a mugger at a subway station only to be knocked out while fleeing, Natalie wakes up and discovers that her life has suddenly become her worst nightmare—a romantic comedy—and she is the leading lady.",
    release_date: 1550016000,
    genres: ["Comedy"],
  },
  {
    id: "345887",
    title: "The Equalizer 2",
    poster: "https://image.tmdb.org/t/p/w500/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
    overview:
      "Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when a long-time girl friend is murdered.",
    release_date: 1531962000,
    genres: ["Thriller", "Action", "Crime"],
  },
  {
    id: "447332",
    title: "A Quiet Place",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    overview:
      "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    release_date: 1522717200,
    genres: [],
  },
  {
    id: "82690",
    title: "Wreck-It Ralph",
    poster: "https://image.tmdb.org/t/p/w500/nsUAgWCxqbTD9wkKrv3nBGH2DVk.jpg",
    overview:
      "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    release_date: 1351728000,
    genres: ["Family", "Animation", "Comedy", "Adventure"],
  },
  {
    id: "214756",
    title: "Ted 2",
    poster: "https://image.tmdb.org/t/p/w500/cj9gTID7b2risDJZGGTzR40jyS4.jpg",
    overview:
      "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
    release_date: 1435194000,
    genres: ["Comedy"],
  },
  {
    id: "8392",
    title: "My Neighbor Totoro",
    poster: "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    overview:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    release_date: 577155600,
    genres: ["Fantasy", "Animation", "Family"],
  },
  {
    id: "150540",
    title: "Inside Out",
    poster: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
    overview:
      "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
    release_date: 1433811600,
    genres: [],
  },
  {
    id: "445629",
    title: "Fighting with My Family",
    poster: "https://image.tmdb.org/t/p/w500/cVhe15rJLRjolunSWLBN6xQLyGU.jpg",
    overview:
      "Born into a tight-knit wrestling family, Paige and her brother Zak are ecstatic when they get the once-in-a-lifetime opportunity to try out for the WWE. But when only Paige earns a spot in the competitive training program, she must leave her loved ones behind and face this new cutthroat world alone. Paige's journey pushes her to dig deep and ultimately prove to the world that what makes her different is the very thing that can make her a star.",
    release_date: 1550102400,
    genres: ["Comedy"],
  },
  {
    id: "862",
    title: "Toy Story",
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    overview:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    release_date: 815011200,
    genres: ["Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "260346",
    title: "Taken 3",
    poster: "https://image.tmdb.org/t/p/w500/vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
    overview:
      "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    release_date: 1418688000,
    genres: ["Thriller", "Action"],
  },
  {
    id: "369972",
    title: "First Man",
    poster: "https://image.tmdb.org/t/p/w500/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
    overview:
      "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
    release_date: 1539219600,
    genres: ["Documentary", "Documentary"],
  },
  {
    id: "482981",
    title: "Wild Rose",
    poster: "https://image.tmdb.org/t/p/w500/79THplH9WM7y3gRPYM4dcC0IRPw.jpg",
    overview:
      "A young Scottish singer, Rose-Lynn Harlan, dreams of making it as a country artist in Nashville after being released from prison.",
    release_date: 1555030800,
    genres: ["Drama"],
  },
  {
    id: "300668",
    title: "Annihilation",
    poster: "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
    overview:
      "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    release_date: 1519257600,
    genres: [],
  },
  {
    id: "434555",
    title: "The Possession of Hannah Grace",
    poster: "https://image.tmdb.org/t/p/w500/hDDb0H0uJp2wjoJBbBHbKlYRbug.jpg",
    overview:
      "When a cop who is just out of rehab takes the graveyard shift in a city hospital morgue, she faces a series of bizarre, violent events caused by an evil entity in one of the corpses.",
    release_date: 1543449600,
    genres: ["Horror", "Drama"],
  },
  {
    id: "444090",
    title: "The Ash Lad: In the Hall of the Mountain King",
    poster: "https://image.tmdb.org/t/p/w500/uyJEfpAflLCkqn6PFHu9EHxmbI6.jpg",
    overview:
      "Espen “Ash Lad”, a poor farmer’s son, embarks on a dangerous quest with his brothers to save the princess from a vile troll known as the Mountain King – in order to collect a reward and save his family’s farm from ruin.",
    release_date: 1506646800,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "8355",
    title: "Ice Age: Dawn of the Dinosaurs",
    poster: "https://image.tmdb.org/t/p/w500/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
    overview:
      "Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.",
    release_date: 1246237200,
    genres: ["Animation", "Comedy", "Family", "Adventure"],
  },
  {
    id: "1585",
    title: "It's a Wonderful Life",
    poster: "https://image.tmdb.org/t/p/w500/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
    overview:
      "A holiday favourite for generations...  George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
    release_date: -726883200,
    genres: ["Comedy"],
  },
  {
    id: "597",
    title: "Titanic",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    overview:
      "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    release_date: 879811200,
    genres: ["Action", "Drama", "History"],
  },
  {
    id: "2320",
    title: "Executive Decision",
    poster: "https://image.tmdb.org/t/p/w500/m3CVqpSbvqvqNcY2dBjRQ44kN2l.jpg",
    overview:
      "Terrorists hijack a 747 inbound to Washington D.C., demanding the the release of their imprisoned leader. Intelligence expert David Grant (Kurt Russell) suspects another reason and he is soon the reluctant member of a special assault team that is assigned to intercept the plane and hijackers.",
    release_date: 826848000,
    genres: ["Action", "Adventure", "Drama", "Thriller"],
  },
  {
    id: "76203",
    title: "12 Years a Slave",
    poster: "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
    overview:
      "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.",
    release_date: 1382058000,
    genres: ["Drama", "History"],
  },
  {
    id: "419430",
    title: "Get Out",
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    overview:
      "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    release_date: 1487894400,
    genres: ["Science Fiction"],
  },
  {
    id: "400535",
    title: "Sicario: Day of the Soldado",
    poster: "https://image.tmdb.org/t/p/w500/msqWSQkU403cQKjQHnWLnugv7EY.jpg",
    overview:
      "Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.",
    release_date: 1530061200,
    genres: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    id: "228150",
    title: "Fury",
    poster: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    overview:
      "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    release_date: 1413334800,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "1865",
    title: "Pirates of the Caribbean: On Stranger Tides",
    poster: "https://image.tmdb.org/t/p/w500/8fxendLObfOewRllxiM4X9Ey7S4.jpg",
    overview:
      "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    release_date: 1305334800,
    genres: ["Adventure", "Action", "Fantasy"],
  },
  {
    id: "545377",
    title: "A Mero Hajur 3",
    poster: "https://image.tmdb.org/t/p/w500/aSTmvfXbjTLJO8Gevbk0KR0pkHu.jpg",
    overview: "Third installment in A Mero Hajur film series.",
    release_date: 1555030800,
    genres: ["Romance", "Drama"],
  },
  {
    id: "238",
    title: "The Godfather",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    release_date: 69379200,
    genres: ["Thriller", "Action", "Crime", "Drama"],
  },
  {
    id: "68721",
    title: "Iron Man 3",
    poster: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    overview:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    release_date: 1366246800,
    genres: ["Documentary"],
  },
  {
    id: "76341",
    title: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    overview:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
    release_date: 1431478800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "269149",
    title: "Zootopia",
    poster: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    overview:
      "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    release_date: 1455148800,
    genres: ["Animation", "Adventure", "Family", "Comedy"],
  },
  {
    id: "156022",
    title: "The Equalizer",
    poster: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    overview:
      "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    release_date: 1411520400,
    genres: ["Action", "Thriller", "TV Movie"],
  },
  {
    id: "569104",
    title: "Madura Raja",
    poster: "https://image.tmdb.org/t/p/w500/1zR6dr7FXk3TPHeoS3LeaLsP30.jpg",
    overview:
      "It is the story which narrates the history of raja ,the story is about a don in madhura raja and his actions.",
    release_date: 1555030800,
    genres: ["Action", "Comedy", "Family", "Thriller"],
  },
  {
    id: "1724",
    title: "The Incredible Hulk",
    poster: "https://image.tmdb.org/t/p/w500/2nBpExDoInX3VreBsIm9qOTqXs8.jpg",
    overview:
      "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
    release_date: 1213232400,
    genres: ["Science Fiction", "Action", "Adventure", "Drama"],
  },
  {
    id: "333339",
    title: "Ready Player One",
    poster: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    overview:
      "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    release_date: 1522198800,
    genres: ["Adventure", "Science Fiction"],
  },
  {
    id: "78",
    title: "Blade Runner",
    poster: "https://image.tmdb.org/t/p/w500/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",
    overview:
      "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    release_date: 393814800,
    genres: ["Documentary"],
  },
  {
    id: "9714",
    title: "Home Alone 3",
    poster: "https://image.tmdb.org/t/p/w500/6uOadrCfle0n2LOOxHbgWEdnrm2.jpg",
    overview:
      "9-year-old Alex Pruitt is home alone with the chicken pox. Turns out, due to a mix-up among nefarious spies, Alex was given a toy car concealing a top-secret microchip. Now Alex must fend off the spies as they try break into his house to get it back.",
    release_date: 881884800,
    genres: ["Comedy", "Family"],
  },
  {
    id: "574370",
    title: "Lo dejo cuando quiera",
    poster: "https://image.tmdb.org/t/p/w500/k5LP414yqZSaRAZf9uVh1ufO2mN.jpg",
    overview: "",
    release_date: 1555030800,
  },
  {
    id: "484247",
    title: "A Simple Favor",
    poster: "https://image.tmdb.org/t/p/w500/5EJWZQ8dh99hfgXP9zAD5Ak5Hrn.jpg",
    overview:
      "Stephanie, a dedicated mother and popular vlogger, befriends Emily, a mysterious upper-class woman whose son Nicky attends the same school as Miles, Stephanie's son. When Emily asks her to pick Nicky up from school and then disappears, Stephanie undertakes an investigation that will dive deep into Emily's cloudy past.",
    release_date: 1535504400,
    genres: ["Thriller", "Crime", "Mystery", "Comedy", "Drama"],
  },
  {
    id: "343668",
    title: "Kingsman: The Golden Circle",
    poster: "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
    overview:
      "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
    release_date: 1505869200,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "150689",
    title: "Cinderella",
    poster: "https://image.tmdb.org/t/p/w500/ryKwNlAfDXu0do6SX9h4G9Si1kG.jpg",
    overview:
      "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
    release_date: 1426118400,
    genres: ["Animation"],
  },
  {
    id: "455207",
    title: "Crazy Rich Asians",
    poster: "https://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    overview:
      "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
    release_date: 1534294800,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "162069",
    title: "Doraemon: Nobita's Diary of the Creation of the World",
    poster: "https://image.tmdb.org/t/p/w500/989zACwuc4EiBUNA3Ul7bgMoh0O.jpg",
    overview:
      "Nobita was reading a picture book.In that he sees Adam and Eve disobeying god and eating the apple in the garden of Eden. Nobita comments that their descendants have to face many difficulties because of Adam and Eve's mistake. Then Doraemon reminds Nobita that he had to do his summer vacation research homework.",
    release_date: 794275200,
    genres: ["Animation"],
  },
  {
    id: "291805",
    title: "Now You See Me 2",
    poster: "https://image.tmdb.org/t/p/w500/A81kDB6a1K86YLlcOtZB27jriJh.jpg",
    overview:
      "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
    release_date: 1464829200,
    genres: ["Action", "Comedy", "Thriller"],
  },
  {
    id: "285",
    title: "Pirates of the Caribbean: At World's End",
    poster: "https://image.tmdb.org/t/p/w500/cVFKkJ8Kcuf9zSUdUNB7iKOm4nh.jpg",
    overview:
      "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
    release_date: 1179536400,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "316029",
    title: "The Greatest Showman",
    poster: "https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
    overview:
      "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
    release_date: 1513728000,
    genres: ["Drama"],
  },
  {
    id: "427641",
    title: "Rampage",
    poster: "https://image.tmdb.org/t/p/w500/MGADip4thVSErP34FAAfzFBTZ5.jpg",
    overview:
      "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
    release_date: 1523494800,
    genres: ["Adventure"],
  },
  {
    id: "126889",
    title: "Alien: Covenant",
    poster: "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    overview:
      "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
    release_date: 1494291600,
    genres: ["Science Fiction"],
  },
  {
    id: "137113",
    title: "Edge of Tomorrow",
    poster: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
    overview:
      "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
    release_date: 1401152400,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "447200",
    title: "Skyscraper",
    poster: "https://image.tmdb.org/t/p/w500/3NL1FiTEhU4SWOuWk8lkVCbmnYm.jpg",
    overview:
      "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
    release_date: 1531270800,
    genres: ["Drama"],
  },
  {
    id: "72784",
    title: "The Loft",
    poster: "https://image.tmdb.org/t/p/w500/6UrNb7sdolnuqxBJ4I8OxTUvTmQ.jpg",
    overview:
      "For five men, the opportunity to share a penthouse in the city -- in which to carry on extramarital affairs -- is a dream come true, until the dead body of an unknown woman turns up. Realizing that her killer must be one of their group, the men are gripped by paranoia as each one suspects another. Friendships are tested, loyalties are questioned, and marriages crumble while fear and suspicion run rampant.",
    release_date: 1413248400,
    genres: ["Drama"],
  },
  {
    id: "280",
    title: "Terminator 2: Judgment Day",
    poster: "https://image.tmdb.org/t/p/w500/weVXMD5QBGeQil4HEATZqAkXeEc.jpg",
    overview:
      "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
    release_date: 678502800,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "62177",
    title: "Brave",
    poster: "https://image.tmdb.org/t/p/w500/L6qqU6Q3k4MmPojncNbT43FSTL.jpg",
    overview:
      "Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
    release_date: 1340240400,
    genres: ["Drama", "Music"],
  },
  {
    id: "101",
    title: "Léon: The Professional",
    poster: "https://image.tmdb.org/t/p/w500/jtNOfwZu3zea5grnqpq4nyqXoID.jpg",
    overview:
      "Léon, the top hit man in New York, has earned a rep as an effective 'cleaner'. But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
    release_date: 779504400,
    genres: ["Crime", "Drama", "Action"],
  },
  {
    id: "107846",
    title: "Escape Plan",
    poster: "https://image.tmdb.org/t/p/w500/zdnChkdppJjXl8lvwRz8vn6cs2s.jpg",
    overview:
      "Ray Breslin is the world's foremost authority on structural security. After analyzing every high security prison and learning a vast array of survival skills so he can design escape-proof prisons, his skills are put to the test. He's framed and incarcerated in a master prison he designed himself. He needs to escape and find the person who put him behind bars.",
    release_date: 1381280400,
    genres: ["Action"],
  },
  {
    id: "10184",
    title: "He's Just Not That Into You",
    poster: "https://image.tmdb.org/t/p/w500/ruc33YnCrmCL8PHdPQVzfa4shWX.jpg",
    overview:
      "Remember that really cute guy who said he'd call – and didn't? Maybe he lost your number. Maybe he's in the hospital. Maybe he's awed by your beauty, brains or success. Or maybe... he's just not that into you.",
    release_date: 1233878400,
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    id: "268896",
    title: "Pacific Rim: Uprising",
    poster: "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
    overview:
      "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
    release_date: 1521590400,
    genres: ["Action", "Fantasy", "Science Fiction", "Adventure"],
  },
  {
    id: "102382",
    title: "The Amazing Spider-Man 2",
    poster: "https://image.tmdb.org/t/p/w500/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
    overview:
      "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    release_date: 1397610000,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "2048",
    title: "I, Robot",
    poster: "https://image.tmdb.org/t/p/w500/dlb6JKYv25rJSk2n2hwhOeJ7Dk.jpg",
    overview:
      "In 2035, where robots are common-place and abide by the three laws of robotics, a techno-phobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger.",
    release_date: 1089853200,
    genres: ["Drama", "Fantasy", "Science Fiction"],
  },
  {
    id: "105",
    title: "Back to the Future",
    poster: "https://image.tmdb.org/t/p/w500/xlBivetfrtF84Yx0zISShnNtHYe.jpg",
    overview:
      "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    release_date: 489200400,
    genres: [],
  },
  {
    id: "399055",
    title: "The Shape of Water",
    poster: "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
    overview:
      "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    release_date: 1512086400,
    genres: ["Drama", "Fantasy", "Romance"],
  },
  {
    id: "374720",
    title: "Dunkirk",
    poster: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    overview:
      "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
    release_date: 1500426000,
    genres: ["War", "Action", "Drama"],
  },
  {
    id: "119450",
    title: "Dawn of the Planet of the Apes",
    poster: "https://image.tmdb.org/t/p/w500/ie14Sm0hRI5f7Te2KIfU64NyCPr.jpg",
    overview:
      "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
    release_date: 1403744400,
    genres: ["Science Fiction", "Action", "Drama", "Thriller"],
  },
  {
    id: "493922",
    title: "Hereditary",
    poster: "https://image.tmdb.org/t/p/w500/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
    overview:
      "When Ellen, the matriarch of the Graham family, passes away, her daughter’s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    release_date: 1528074000,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "449924",
    title: "Ip Man 4",
    poster: "https://image.tmdb.org/t/p/w500/b5cz6BoyHrgBnhfDHOW5hXRWbln.jpg",
    overview:
      "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
    release_date: 1571360400,
    genres: ["Action", "Drama", "History"],
  },
  {
    id: "401469",
    title: "Widows",
    poster: "https://image.tmdb.org/t/p/w500/d31SGJSaX29ba5ZUbZcesGoDE7I.jpg",
    overview:
      "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, they join forces to pull off a heist.",
    release_date: 1541462400,
    genres: [],
  },
  {
    id: "381237",
    title: "Office Uprising",
    poster: "https://image.tmdb.org/t/p/w500/fcRAOCmDcFYivMNM5ink3OMMe0V.jpg",
    overview:
      "The compound of an arms manufacturer turns into a zombie nightmare when its workers are given the wrong formula.",
    release_date: 1529370000,
    genres: ["Action", "Comedy", "Horror"],
  },
  {
    id: "510",
    title: "One Flew Over the Cuckoo's Nest",
    poster: "https://image.tmdb.org/t/p/w500/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
    overview:
      "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
    release_date: 185500800,
    genres: ["Drama"],
  },
  {
    id: "500664",
    title: "Upgrade",
    poster: "https://image.tmdb.org/t/p/w500/8fDtXi6gVw8WUMWGT9XFz7YwkuE.jpg",
    overview:
      "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.",
    release_date: 1527814800,
    genres: ["Action", "Thriller", "Science Fiction", "Horror"],
  },
  {
    id: "329865",
    title: "Arrival",
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    overview:
      "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    release_date: 1478736000,
    genres: [],
  },
  {
    id: "491418",
    title: "Instant Family",
    poster: "https://image.tmdb.org/t/p/w500/dic3GdmMpxxfkCQfvZnasb5ZkSG.jpg",
    overview:
      "When Pete and Ellie decide to start a family, they stumble into the world of foster care adoption. They hope to take in one small child but when they meet three siblings, including a rebellious 15 year old girl, they find themselves speeding from zero to three kids overnight.",
    release_date: 1542326400,
    genres: ["Comedy", "Drama", "Family"],
  },
  {
    id: "244786",
    title: "Whiplash",
    poster: "https://image.tmdb.org/t/p/w500/9E949mB5NEq3BZu9nHQgWF2uGGN.jpg",
    overview:
      "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    release_date: 1412902800,
    genres: ["Drama"],
  },
  {
    id: "89",
    title: "Indiana Jones and the Last Crusade",
    poster: "https://image.tmdb.org/t/p/w500/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg",
    overview:
      "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    release_date: 611974800,
    genres: [],
  },
  {
    id: "389015",
    title: "I, Tonya",
    poster: "https://image.tmdb.org/t/p/w500/6gNXwSHxaksR1PjVZRqNapmkgj3.jpg",
    overview:
      "Competitive ice skater Tonya Harding rises amongst the ranks at the U. S. Figure Skating Championships, but her future in the sport is thrown into doubt when her ex-husband intervenes.",
    release_date: 1512691200,
    genres: ["Drama"],
  },
  {
    id: "458594",
    title: "Peppermint",
    poster: "https://image.tmdb.org/t/p/w500/jrzxS0vcbzIIay1sdYm0rgI2QfJ.jpg",
    overview:
      "A grieving mother transforms herself into a vigilante following the murders of her husband and daughter, eluding the authorities to deliver her own personal brand of justice.",
    release_date: 1536195600,
    genres: ["Comedy", "Drama", "Family"],
  },
  {
    id: "238636",
    title: "The Purge: Anarchy",
    poster: "https://image.tmdb.org/t/p/w500/f2HD5iVhJWWv72QVWThUKk09zYy.jpg",
    overview:
      "One night per year, the government sanctions a 12-hour period in which citizens can commit any crime they wish -- including murder -- without fear of punishment or imprisonment. Leo, a sergeant who lost his son, plans a vigilante mission of revenge during the mayhem. However, instead of a death-dealing avenger, he becomes the unexpected protector of four innocent strangers who desperately need his help if they are to survive the night.",
    release_date: 1405558800,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "483906",
    title: "Polar",
    poster: "https://image.tmdb.org/t/p/w500/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg",
    overview:
      "When a retiring assassin realizes that he is the target of a hit, he winds up back in the game going head to head with a gang of younger, ruthless killers.",
    release_date: 1548374400,
    genres: ["Drama"],
  },
  {
    id: "98566",
    title: "Teenage Mutant Ninja Turtles",
    poster: "https://image.tmdb.org/t/p/w500/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
    overview:
      "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
    release_date: 1407373200,
    genres: ["Animation"],
  },
  {
    id: "49017",
    title: "Dracula Untold",
    poster: "https://image.tmdb.org/t/p/w500/dN3D3AvOsZ60jBth9LYhZFjgAUz.jpg",
    overview:
      "Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, including Vlad's son, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire Dracula.",
    release_date: 1412125200,
    genres: ["Horror", "Action", "Drama", "Fantasy", "War"],
  },
  {
    id: "206647",
    title: "Spectre",
    poster: "https://image.tmdb.org/t/p/w500/672kUEMtTHcaVYSVY4eiHEliHFa.jpg",
    overview:
      "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    release_date: 1445817600,
    genres: ["TV Movie", "Horror"],
  },
  {
    id: "411",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    poster: "https://image.tmdb.org/t/p/w500/kzJip9vndXYSKQHCgekrgqbnUrA.jpg",
    overview:
      "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    release_date: 1133913600,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "375262",
    title: "The Favourite",
    poster: "https://image.tmdb.org/t/p/w500/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
    overview:
      "England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",
    release_date: 1542931200,
    genres: ["Documentary"],
  },
  {
    id: "675",
    title: "Harry Potter and the Order of the Phoenix",
    poster: "https://image.tmdb.org/t/p/w500/s836PRwHkLjrOJrfW0eo7B4NJOf.jpg",
    overview:
      "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
    release_date: 1182992400,
    genres: ["Adventure", "Fantasy", "Mystery"],
  },
  {
    id: "1893",
    title: "Star Wars: Episode I - The Phantom Menace",
    poster: "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
    overview:
      "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
    release_date: 927075600,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "812",
    title: "Aladdin",
    poster: "https://image.tmdb.org/t/p/w500/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
    overview:
      "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
    release_date: 722649600,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "294254",
    title: "Maze Runner: The Scorch Trials",
    poster: "https://image.tmdb.org/t/p/w500/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
    overview:
      "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
    release_date: 1441760400,
    genres: ["Action", "Science Fiction", "Thriller"],
  },
  {
    id: "158852",
    title: "Tomorrowland",
    poster: "https://image.tmdb.org/t/p/w500/iHh0nVGVODAFduF6Q6njdSSCEfX.jpg",
    overview:
      "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as 'Tomorrowland.'",
    release_date: 1431997200,
    genres: ["Adventure", "Family", "Mystery", "Science Fiction"],
  },
  {
    id: "315837",
    title: "Ghost in the Shell",
    poster: "https://image.tmdb.org/t/p/w500/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
    overview:
      "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
    release_date: 1490749200,
    genres: ["Animation", "Action", "Science Fiction"],
  },
  {
    id: "181533",
    title: "Night at the Museum: Secret of the Tomb",
    poster: "https://image.tmdb.org/t/p/w500/xwgy305K6qDs3D20xUO4OZu1HPY.jpg",
    overview:
      "When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
    release_date: 1418774400,
    genres: ["Adventure", "Comedy", "Fantasy", "Family"],
  },
  {
    id: "293167",
    title: "Kong: Skull Island",
    poster: "https://image.tmdb.org/t/p/w500/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
    overview:
      "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
    release_date: 1488931200,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "452832",
    title: "Serenity",
    poster: "https://image.tmdb.org/t/p/w500/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
    overview:
      "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
    release_date: 1548288000,
    genres: [],
  },
  {
    id: "674",
    title: "Harry Potter and the Goblet of Fire",
    poster: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    overview:
      "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
    release_date: 1132099200,
    genres: ["Adventure", "Fantasy", "Family"],
  },
  {
    id: "537707",
    title: "Ville Neuve",
    poster: "https://image.tmdb.org/t/p/w500/zrgXO9fFOhqzZOxf76bEk3BjafO.jpg",
    overview:
      "Determined to stop drinking, Joseph moves into a friend's house and convinces his ex-wife Emma to join him. In the troubled times of Quebec independence referendum, this is the account of their stormy reunion.",
    release_date: 1555030800,
    genres: ["Animation", "Drama"],
  },
  {
    id: "487558",
    title: "BlacKkKlansman",
    poster: "https://image.tmdb.org/t/p/w500/8jxqAvSDoneSKRczaK8v9X5gqBp.jpg",
    overview:
      "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
    release_date: 1532912400,
    genres: ["Crime"],
  },
  {
    id: "568",
    title: "Apollo 13",
    poster: "https://image.tmdb.org/t/p/w500/jokiCLdNS58eJTALfNcerQRhwAo.jpg",
    overview:
      "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
    release_date: 804474000,
    genres: ["Documentary"],
  },
  {
    id: "1930",
    title: "The Amazing Spider-Man",
    poster: "https://image.tmdb.org/t/p/w500/dQ8TOCYgP9pzQvSb1cmaalYqdb5.jpg",
    overview:
      "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    release_date: 1340758800,
    genres: [],
  },
  {
    id: "98",
    title: "Gladiator",
    poster: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    overview:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    release_date: 957142800,
    genres: ["Action", "Drama", "Adventure"],
  },
  {
    id: "347375",
    title: "Mile 22",
    poster: "https://image.tmdb.org/t/p/w500/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg",
    overview:
      "An elite group of American operatives, aided by a top-secret tactical command team, must transport an asset who holds life-threatening information to an extraction point 22 miles away through the hostile streets of an Asian city.",
    release_date: 1534381200,
    genres: ["Action", "Thriller"],
  },
  {
    id: "52371",
    title: "LelleBelle",
    poster: "https://image.tmdb.org/t/p/w500/5VEt6htqGEkqHEKMxfiBRsAMtJj.jpg",
    overview:
      "19-year old Belle practices playing the violin diligently, but is unable to impart her music with a sensitive undertone. Her life changes when she discovers that sexual desire stimulates passion in her music.",
    release_date: 1286586000,
    genres: ["Music", "Romance"],
  },
  {
    id: "100402",
    title: "Captain America: The Winter Soldier",
    poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    overview:
      "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
    release_date: 1395273600,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "449443",
    title: "Den of Thieves",
    poster: "https://image.tmdb.org/t/p/w500/AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
    overview:
      "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff’s Dept. and the state’s most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
    release_date: 1516233600,
    genres: ["Action", "Drama", "Crime"],
  },
  {
    id: "517093",
    title: "Balkan Line",
    poster: "https://image.tmdb.org/t/p/w500/2DhIJ1WuXHNFBxlB1jWfMytU22v.jpg",
    overview:
      "1999, Serbia is bombed and Kosovo region is left for plunder by bandits under command of Albanian warlord, Smuk. The removal of the human organs take place within the territories bandits have taken, the robberies, mass assassinations and genocide. Russian intelligence officer Bek Ethoev and former paratrooper turned mercenary Andrey Shatalov head a small detachment tasked with the dangerous mission to stop the terrorism, recapture the airfield used by the bandits and rescue Shatalov's love interest Yasna, who was captured to be harvested for organs, like the rest of the Serbian prisoners.",
    release_date: 1553126400,
    genres: ["Drama", "Action", "War"],
  },
  {
    id: "399360",
    title: "Alpha",
    poster: "https://image.tmdb.org/t/p/w500/afdZAIcAQscziqVtsEoh2PwsYTW.jpg",
    overview:
      "In the prehistoric past, Keda, a young and inexperienced hunter, struggles to return home after being separated from his tribe when bison hunting goes awry. On his way back he will find an unexpected ally.",
    release_date: 1534467600,
    genres: ["Science Fiction"],
  },
  {
    id: "608",
    title: "Men in Black II",
    poster: "https://image.tmdb.org/t/p/w500/enA22EPyzc2WQ1VVyY7zxresQQr.jpg",
    overview:
      "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
    release_date: 1025658000,
    genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
  },
  {
    id: "585",
    title: "Monsters, Inc.",
    poster: "https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
    overview:
      "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
    release_date: 1004572800,
    genres: [],
  },
  {
    id: "194662",
    title: "Birdman",
    poster: "https://image.tmdb.org/t/p/w500/lvWL5ZRlYFh7M7fOvYswcRqyprI.jpg",
    overview:
      "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
    release_date: 1409101200,
    genres: ["Documentary", "Comedy"],
  },
  {
    id: "166426",
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    poster: "https://image.tmdb.org/t/p/w500/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
    overview:
      "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
    release_date: 1495501200,
    genres: ["Adventure", "Action", "Fantasy", "Comedy"],
  },
  {
    id: "592555",
    title: "Tout contre elle",
    poster: "https://image.tmdb.org/t/p/w500/mkQEyqsm1WLfEYTKn8shSW7eIUA.jpg",
    overview:
      "Girlfriend or enemy? Does the young cleaning lady Alice really want to protect the well-heeled Hélène from a scandal or rather blackmail her? In any case, Alice not only found her lifeless body and Hélène's wallet in her employer Svende Petersen's home, but also video footage that weighed heavily on Hélène. Because the married to a budding Member Hélène has fled without help from the apartment of her lover, when she became aware that Svende no longer breathes. But now Alice knows her secret. It becomes Hélène's menacing shadow ...",
    release_date: 1555030800,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "567604",
    title: "Once Upon a Deadpool",
    poster: "https://image.tmdb.org/t/p/w500/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg",
    overview:
      "A kidnapped Fred Savage is forced to endure Deadpool's PG-13 rendition of Deadpool 2 as a Princess Bride-esque story that's full of magic, wonder & zero F's.",
    release_date: 1544486400,
    genres: ["Comedy", "Action"],
  },
  {
    id: "217",
    title: "Indiana Jones and the Kingdom of the Crystal Skull",
    poster: "https://image.tmdb.org/t/p/w500/56As6XEM1flWvprX4LgkPl8ii4K.jpg",
    overview:
      "Set during the Cold War, the Soviets – led by sword-wielding Irina Spalko – are in search of a crystal skull which has supernatural powers related to a mystical Lost City of Gold. After being captured and then escaping from them, Indy is coerced to head to Peru at the behest of a young man whose friend – and Indy's colleague – Professor Oxley has been captured for his knowledge of the skull's whereabouts.",
    release_date: 1211331600,
    genres: ["Adventure", "Action"],
  },
  {
    id: "604",
    title: "The Matrix Reloaded",
    poster: "https://image.tmdb.org/t/p/w500/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
    overview:
      "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
    release_date: 1052960400,
    genres: ["Documentary"],
  },
  {
    id: "438145",
    title: "Black '47",
    poster: "https://image.tmdb.org/t/p/w500/gZiu9RIcMeQLUaDVqQffQTl6bhy.jpg",
    overview:
      "In 1847, when Ireland is in the grip of the Great Famine that has ravaged the country for two long years, Feeney, a hardened Irish Ranger who has been fighting for the British Army abroad, returns home to reunite with his estranged family, only to discover the cruelest reality, a black land where death reigns.",
    release_date: 1536109200,
    genres: [],
  },
  {
    id: "20352",
    title: "Despicable Me",
    poster: "https://image.tmdb.org/t/p/w500/wqtH95Ri9Au2euC4p86lLoFCJQk.jpg",
    overview:
      "Villainous Gru lives up to his reputation as a despicable, deplorable and downright unlikable guy when he hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.",
    release_date: 1278550800,
    genres: ["Animation", "Family"],
  },
  {
    id: "424139",
    title: "Halloween",
    poster: "https://image.tmdb.org/t/p/w500/bXs0zkv2iGVViZEy78teg2ycDBm.jpg",
    overview:
      "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    release_date: 1539824400,
    genres: ["Horror", "Comedy", "Animation"],
  },
  {
    id: "505954",
    title: "T-34",
    poster: "https://image.tmdb.org/t/p/w500/jqBIHiSglRfNxjh1zodHLa9E7zW.jpg",
    overview:
      "In 1944, a courageous group of Russian soldiers managed to escape from German captivity in a half-destroyed legendary T-34 tank. Those were the times of unforgettable bravery, fierce fighting, unbreakable love, and legendary miracles.",
    release_date: 1545868800,
    genres: ["War", "Action"],
  },
  {
    id: "857",
    title: "Saving Private Ryan",
    poster: "https://image.tmdb.org/t/p/w500/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg",
    overview:
      "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    release_date: 901242000,
    genres: ["Drama", "History", "War"],
  },
  {
    id: "184315",
    title: "Hercules",
    poster: "https://image.tmdb.org/t/p/w500/5X3VOy9lD44VclKsWTi8gHZGjhL.jpg",
    overview:
      "Fourteen hundred years ago, a tormented soul walked the earth that was neither man nor god. Hercules was the powerful son of the god king Zeus, for this he received nothing but suffering his entire life. After twelve arduous labors and the loss of his family, this dark, world-weary soul turned his back on the gods finding his only solace in bloody battle. Over the years he warmed to the company of six similar souls, their only bond being their love of fighting and presence of death. These men and woman never question where they go to fight or why or whom, just how much they will be paid. Now the King of Thrace has hired these mercenaries to train his men to become the greatest army of all time. It is time for this bunch of lost souls to finally have their eyes opened to how far they have fallen when they must train an army to become as ruthless and blood thirsty as their reputation has become.",
    release_date: 1406077200,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: "553100",
    title: "Wild and Free",
    poster: "https://image.tmdb.org/t/p/w500/pQJXFgeykKqdk9PdOgHl8ITewkC.jpg",
    overview:
      "Ellie and Jake fall in love, but struggle with their relationship when they discover an unexpected connection between their pasts.",
    release_date: 1539133200,
    genres: ["Drama"],
  },
  {
    id: "93456",
    title: "Despicable Me 2",
    poster: "https://image.tmdb.org/t/p/w500/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    overview:
      "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    release_date: 1372122000,
    genres: ["Animation"],
  },
  {
    id: "67308",
    title: "3-D Sex and Zen: Extreme Ecstasy",
    poster: "https://image.tmdb.org/t/p/w500/mmvFokJgpFmNt522Hfpq3Zfs2Ra.jpg",
    overview:
      "Loosely based on a 17th century erotic Chinese story named The Carnal Prayer Mat, the story follows a young scholar named Yangsheng who gets married to the beautiful daughter of a local merchant. When their sex life proves unsatisfactory, Yangsheng leaves home and journeys to the Pavilion of Ultimate Bliss.",
    release_date: 1302742800,
    genres: ["Drama", "Adventure", "Romance"],
  },
  {
    id: "525763",
    title: "Surrealistic Nightmares: An In-depth Look at Walloon Horror Cinema",
    poster: "https://image.tmdb.org/t/p/w500/5VxpwVlONXgGrZ6dfpDfwZlaMc.jpg",
    overview:
      "After researching the Flemish horror cinema in 'Forgotten Scares', director Steve De Roover - with the help of co-director Jérôme Vandewattyne (Spit'N'Split) - digs deeper in the follow-up documentary 'Surrealistic Nightmares' and shows the beginning of Walloon horror cinema in the '20s (!) and how the genre evolved during the following years. Through unique experiences from the original cast and crew, horror experts and various genre journalists, a broad and in-depth picture is painted about the one-of-a-kind horror legacy from the French side of Belgium, without forgetting the difficult cinema landscape of this small country with two very different languages. 'Surrealistic Nightmares: An In-depth Look at Walloon Horror Cinema' is illustrated by exclusive behind the scene footage, famous film scenes and loads of original promotional artwork.",
    release_date: 1555030800,
    genres: ["Horror", "Documentary"],
  },
  {
    id: "13",
    title: "Forrest Gump",
    poster: "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
    overview:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    release_date: 773456400,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "216015",
    title: "Fifty Shades of Grey",
    poster: "https://image.tmdb.org/t/p/w500/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
    overview:
      "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    release_date: 1423612800,
    genres: ["Drama", "Romance", "Thriller"],
  },
  {
    id: "507680",
    title: "A Deal With The Universe",
    poster: "https://image.tmdb.org/t/p/w500/8OVKrofCWJtGcHfBSjKH4Ou2ubD.jpg",
    overview:
      "In his debut film, assembled entirely from home video footage which he and his partner Tracey shot over the course of a decade, Barker tells the fascinating story behind their journey to conceive.",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "503616",
    title: "Second Act",
    poster: "https://image.tmdb.org/t/p/w500/maUMIZVGs8g1hYtq4dQ9Lg9FtVF.jpg",
    overview:
      "Maya, a 40-year-old woman struggling with frustrations from unfulfilled dreams. Until that is, she gets the chance to prove to Madison Avenue that street smarts are as valuable as book smarts, and that it is never too late for a second act.",
    release_date: 1542844800,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "400155",
    title: "Hotel Transylvania 3: Summer Vacation",
    poster: "https://image.tmdb.org/t/p/w500/o7RY5zNHdH2heGS1hET2Rt6hZOe.jpg",
    overview:
      "Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship’s captain, Ericka, who’s secretly a descendant of Abraham Van Helsing, the notorious monster slayer.",
    release_date: 1530147600,
    genres: ["Family", "Fantasy", "Comedy", "Animation"],
  },
  {
    id: "10764",
    title: "Quantum of Solace",
    poster: "https://image.tmdb.org/t/p/w500/5BzOOL7zknsZSUeJwSa9kGuzHCR.jpg",
    overview:
      "Quantum of Solace continues the adventures of James Bond after Casino Royale. Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    release_date: 1225324800,
    genres: ["Adventure", "Action", "Thriller", "Crime"],
  },
  {
    id: "550",
    title: "Fight Club",
    poster: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
    overview:
      "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    release_date: 939949200,
    genres: [],
  },
  {
    id: "1487",
    title: "Hellboy",
    poster: "https://image.tmdb.org/t/p/w500/uE3uJHBiIJPzcWCZXwgYmxYQNnT.jpg",
    overview:
      "In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause. The Allies raid the camp where the ceremony is taking place, but not before a demon - Hellboy - has already been conjured. Joining the Allied forces, Hellboy eventually grows to adulthood, serving the cause of good rather than evil.",
    release_date: 1080867600,
    genres: ["Fantasy", "Action"],
  },
  {
    id: "424",
    title: "Schindler's List",
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    overview:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    release_date: 755913600,
    genres: ["Documentary"],
  },
  {
    id: "1979",
    title: "Fantastic Four: Rise of the Silver Surfer",
    poster: "https://image.tmdb.org/t/p/w500/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg",
    overview:
      "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
    release_date: 1181696400,
    genres: ["Adventure", "Fantasy", "Action", "Thriller"],
  },
  {
    id: "454983",
    title: "The Kissing Booth",
    poster: "https://image.tmdb.org/t/p/w500/7Dktk2ST6aL8h9Oe5rpk903VLhx.jpg",
    overview:
      "When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
    release_date: 1526000400,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "745",
    title: "The Sixth Sense",
    poster: "https://image.tmdb.org/t/p/w500/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg",
    overview:
      "A psychological thriller about an eight year old boy named Cole Sear who believes he can see into the world of the dead. A child psychologist named Malcolm Crowe comes to Cole to help him deal with his problem, learning that he really can see ghosts of dead people.",
    release_date: 933901200,
    genres: [],
  },
  {
    id: "586654",
    title: "Bottled with Love",
    poster: "https://image.tmdb.org/t/p/w500/o1e0cwEtQyq1LyBKzkPmOvtwYBE.jpg",
    overview:
      "After being stood up, Abbey gets inspired to open her heart in a letter, put it in a bottle and toss it out to sea. Months later, a man fishing discovers it and opts to reach out.",
    release_date: 1555117200,
    genres: ["TV Movie", "Romance"],
  },
  {
    id: "205596",
    title: "The Imitation Game",
    poster: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
    overview:
      "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
    release_date: 1415923200,
    genres: ["Drama", "War"],
  },
  {
    id: "446894",
    title: "Smallfoot",
    poster: "https://image.tmdb.org/t/p/w500/zfaiO7QgpcvR8XDOMokWLRfKeTE.jpg",
    overview:
      "A bright young yeti finds something he thought didn't exist—a human. News of this “smallfoot” throws the simple yeti community into an uproar over what else might be out there in the big world beyond their snowy village.",
    release_date: 1537405200,
    genres: ["Animation", "Family", "Adventure", "Fantasy"],
  },
  {
    id: "621",
    title: "Grease",
    poster: "https://image.tmdb.org/t/p/w500/czVhhAaSBFpakur7U8pOIDV9NUG.jpg",
    overview:
      "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    release_date: 268621200,
    genres: [],
  },
  {
    id: "526050",
    title: "Little",
    poster: "https://image.tmdb.org/t/p/w500/4MDB6jJl3U7xK1Gw64zIqt9pQA4.jpg",
    overview:
      "A woman receives the chance to relive the life of her younger self, at a point in her life when the pressures of adulthood become too much for her to bear.",
    release_date: 1554339600,
    genres: ["Comedy", "Fantasy", "Romance"],
  },
  {
    id: "57158",
    title: "The Hobbit: The Desolation of Smaug",
    poster: "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    overview:
      "The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.",
    release_date: 1386720000,
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    id: "1369",
    title: "Rambo: First Blood Part II",
    poster: "https://image.tmdb.org/t/p/w500/lIyUiHted0eWUceCx2ZHLnQGmgy.jpg",
    overview:
      "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
    release_date: 485485200,
    genres: ["Action", "Adventure", "Thriller", "War"],
  },
  {
    id: "338970",
    title: "Tomb Raider",
    poster: "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    overview:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    release_date: 1520208000,
    genres: ["Action", "Adventure", "Fantasy", "Comedy"],
  },
  {
    id: "18",
    title: "The Fifth Element",
    poster: "https://image.tmdb.org/t/p/w500/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
    overview:
      "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    release_date: 862966800,
    genres: ["Adventure", "Fantasy", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "321612",
    title: "Beauty and the Beast",
    poster: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    overview:
      "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    release_date: 1489622400,
    genres: ["Drama"],
  },
  {
    id: "257445",
    title: "Goosebumps",
    poster: "https://image.tmdb.org/t/p/w500/aeZT9pqEgrmXOGdESFkAuVjX6kw.jpg",
    overview:
      "After moving to a small town, Zach Cooper finds a silver lining when he meets next door neighbor Hannah, the daughter of bestselling Goosebumps series author R.L. Stine. When Zach unintentionally unleashes real monsters from their manuscripts and they begin to terrorize the town, it’s suddenly up to Stine, Zach and Hannah to get all of them back in the books where they belong.",
    release_date: 1438736400,
    genres: ["Adventure", "Horror", "Comedy"],
  },
  {
    id: "86331",
    title: "Desire",
    poster: "https://image.tmdb.org/t/p/w500/fNSXMHxe1i4VOVJxxwJyGzv2ZTG.jpg",
    overview:
      "In a social context deteriorated by a countrywide economic crisis, the life of several people will be turned upside down after they meet Cecile, a character who symbolizes desire.",
    release_date: 1315962000,
    genres: [],
  },
  {
    id: "548066",
    title: "Level 16",
    poster: "https://image.tmdb.org/t/p/w500/kILAL9kJdW3f6wk9Ai0tavgi6mp.jpg",
    overview:
      "The teenage girls of Vestalis Academy are meticulously trained in the art of being “clean girls,” practicing the virtues of perfect femininity. But what exactly are they being trained for? Vivien intends to find out.",
    release_date: 1519084800,
    genres: ["Science Fiction", "Thriller"],
  },
  {
    id: "1924",
    title: "Superman",
    poster: "https://image.tmdb.org/t/p/w500/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
    overview:
      "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.",
    release_date: 282355200,
    genres: ["Action", "Crime", "Science Fiction"],
  },
  {
    id: "224141",
    title: "Into the Woods",
    poster: "https://image.tmdb.org/t/p/w500/k37bYqOUWMqhrfzmR8Mk9sy2jxH.jpg",
    overview:
      "In a woods filled with magic and fairy tale characters, a baker and his wife set out to end the curse put on them by their neighbor, a spiteful witch.",
    release_date: 1419465600,
    genres: ["Thriller"],
  },
  {
    id: "854",
    title: "The Mask",
    poster: "https://image.tmdb.org/t/p/w500/zJUvFtaGPQkcQYE8nmhU66ESpWe.jpg",
    overview:
      "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
    release_date: 775443600,
    genres: ["Action", "Drama", "Crime"],
  },
  {
    id: "10020",
    title: "Beauty and the Beast",
    poster: "https://image.tmdb.org/t/p/w500/7oCAPOphDKpIaxTrnukmDrZ8XKD.jpg",
    overview:
      "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
    release_date: 689990400,
    genres: ["Drama"],
  },
  {
    id: "91314",
    title: "Transformers: Age of Extinction",
    poster: "https://image.tmdb.org/t/p/w500/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    overview:
      "As humanity picks up the pieces, following the conclusion of 'Transformers: Dark of the Moon,' Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
    release_date: 1403658000,
    genres: ["Science Fiction", "Action", "Adventure"],
  },
  {
    id: "442249",
    title: "The First Purge",
    poster: "https://image.tmdb.org/t/p/w500/litjsBoiydO6JlO70uOX4N3WnNL.jpg",
    overview:
      "To push the crime rate below one percent for the rest of the year, the New Founding Fathers of America test a sociological theory that vents aggression for one night in one isolated community. But when the violence of oppressors meets the rage of the others, the contagion will explode from the trial-city borders and spread across the nation.",
    release_date: 1530666000,
    genres: ["Action", "Science Fiction", "Thriller", "Horror"],
  },
  {
    id: "808",
    title: "Shrek",
    poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    overview:
      "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    release_date: 989974800,
    genres: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "446021",
    title: "Bad Times at the El Royale",
    poster: "https://image.tmdb.org/t/p/w500/iNtFgXqXPRMkm1QO8CHn5sHfUgE.jpg",
    overview:
      "Lake Tahoe, 1969. Seven strangers, each one with a secret to bury, meet at El Royale, a decadent motel with a dark past. In the course of a fateful night, everyone will have one last shot at redemption.",
    release_date: 1538614800,
    genres: ["Thriller"],
  },
  {
    id: "590162",
    title: "Falaknuma Das",
    poster: "https://image.tmdb.org/t/p/w500/3X4nW7NgufedkNwjUcLJyVplCVx.jpg",
    overview:
      "A Telugu remake of the cult hit Malayalam movie￼￼￼￼ Angamaly Diaries.",
    release_date: 1555030800,
    genres: ["Action", "Romance", "Thriller"],
  },
  {
    id: "574963",
    title: "This World Won't Break",
    poster: "https://image.tmdb.org/t/p/w500/zNOWwdNd0SgwM3VOBbEfU111ile.jpg",
    overview:
      "A broke-down middle aged Texas troubadour yearns to be remembered like the southern bluesmen before him, but his failings and self-doubt forestall his musical dreams and blind him to the open road.",
    release_date: 1555030800,
    genres: ["Drama", "Music"],
  },
  {
    id: "41233",
    title: "Step Up 3D",
    poster: "https://image.tmdb.org/t/p/w500/rPcqa5TZ7S63RNmCuY45ZizFBen.jpg",
    overview:
      "A tight-knit group of New York City street dancers, including Luke and Natalie, team up with NYU freshman Moose, and find themselves pitted against the world's best hip hop dancers in a high-stakes showdown that will change their lives forever.",
    release_date: 1280883600,
    genres: ["Drama", "Romance"],
  },
  {
    id: "442062",
    title: "Goosebumps 2: Haunted Halloween",
    poster: "https://image.tmdb.org/t/p/w500/t2wy38iiMpB8WsgJi3lYeDnGh2H.jpg",
    overview:
      "Two boys face an onslaught from witches, monsters, ghouls and a talking dummy after they discover a mysterious book by author R. L. Stine.",
    release_date: 1539219600,
    genres: ["Adventure", "Comedy", "Fantasy", "Family", "Horror"],
  },
  {
    id: "169917",
    title: "A Walk Among the Tombstones",
    poster: "https://image.tmdb.org/t/p/w500/bQTHTZezSudf27mMQtedHf1XpgO.jpg",
    overview:
      "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
    release_date: 1411002000,
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "6023",
    title: "P.S. I Love You",
    poster: "https://image.tmdb.org/t/p/w500/nuOGIDqDFaX20i4Zfi5VN47lqXh.jpg",
    overview:
      "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
    release_date: 1195084800,
    genres: ["Family"],
  },
  {
    id: "587270",
    title: "The Accordionist's Son",
    poster: "https://image.tmdb.org/t/p/w500/pzN4lZwb91CpDlkcDO9MlxYrR5C.jpg",
    overview:
      "Two men are forced to face their dark past as part of the Basque separatist movement of the 1960s.",
    release_date: 1555030800,
    genres: ["Drama"],
  },
  {
    id: "564898",
    title: "Mine 9",
    poster: "https://image.tmdb.org/t/p/w500/7hxM3HmO3vS8ZxPyFlXgI0tqXug.jpg",
    overview:
      "Two miles into the earth, nine Appalachian miners struggle to survive after a methane explosion leaves them with one hour of oxygen.",
    release_date: 1555030800,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "102651",
    title: "Maleficent",
    poster: "https://image.tmdb.org/t/p/w500/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
    overview:
      "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
    release_date: 1401238800,
    genres: ["Fantasy", "Adventure", "Action", "Family", "Romance"],
  },
  {
    id: "61012",
    title: "Silent Hill: Revelation 3D",
    poster: "https://image.tmdb.org/t/p/w500/3mKCa7NszrLyfKWAVFOd5G527ba.jpg",
    overview:
      "Heather Mason and her father have been on the run, always one step ahead of dangerous forces that she doesn't fully understand, Now on the eve of her 18th birthday, plagued by horrific nightmares and the disappearance of her father, Heather discovers she's not who she thinks she is. The revelation leads her deeper into a demonic world that threatens to trap her forever.",
    release_date: 1349830800,
    genres: ["Thriller", "Horror", "Mystery"],
  },
  {
    id: "14161",
    title: "2012",
    poster: "https://image.tmdb.org/t/p/w500/zaqam2RNscH5ooYFWInV6hjx6y5.jpg",
    overview:
      "Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up. He warns U.S. President Thomas Wilson that the crust of the earth is becoming unstable and that without proper preparations for saving a fraction of the world's population, the entire race is doomed. Meanwhile, writer Jackson Curtis stumbles on the same information. While the world's leaders race to build 'arks' to escape the impending cataclysm, Curtis struggles to find a way to save his family. Meanwhile, volcanic eruptions and earthquakes of unprecedented strength wreak havoc around the world.",
    release_date: 1255136400,
    genres: ["Drama", "Romance"],
  },
  {
    id: "146216",
    title: "RED 2",
    poster: "https://image.tmdb.org/t/p/w500/jW7bHZgkHKUtUJCsThFuqbZGVUL.jpg",
    overview:
      "Retired C.I.A. agent Frank Moses reunites his unlikely team of elite operatives for a global quest to track down a missing portable nuclear device.",
    release_date: 1374109200,
    genres: ["Action", "Comedy", "Crime", "Thriller"],
  },
  {
    id: "401981",
    title: "Red Sparrow",
    poster: "https://image.tmdb.org/t/p/w500/oy6EYWzTwcIMjQYTS6uXS7JXGOx.jpg",
    overview:
      "Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
    release_date: 1519776000,
    genres: ["Mystery", "Thriller"],
  },
  {
    id: "426543",
    title: "The Nutcracker and the Four Realms",
    poster: "https://image.tmdb.org/t/p/w500/9vPDY8e7YxLwgVum7YZIUJbr4qc.jpg",
    overview:
      "A young girl is transported into a magical world of gingerbread soldiers and an army of mice.  In Disney’s magical take on the classic The Nutcracker, Clara wants a one-of-a-kind key that will unlock a box holding a priceless gift. A golden thread presented at her godfather’s holiday party leads her to the coveted key—which promptly disappears into a strange and mysterious parallel world. There Clara encounters a soldier, a gang of mice and the regents of three magical Realms. But she must brave the ominous Fourth Realm, home to the tyrant Mother Ginger, to retrieve her key and return harmony to the unstable world.",
    release_date: 1540515600,
    genres: ["Fantasy", "Adventure", "Family"],
  },
  {
    id: "225886",
    title: "Sex Tape",
    poster: "https://image.tmdb.org/t/p/w500/An0sAEBH7BuXlnGPIISnqLBvjNh.jpg",
    overview:
      "When Jay and Annie first got together, their romantic connection was intense – but ten years and two kids later, the flame of their love needs a spark.  To kick things up a notch, they decide – why not? – to make a video of themselves trying out every position in The Joy of Sex in one marathon three-hour session.  It seems like a great idea – until they discover that their most private video is no longer private.  With their reputations on the line, they know they’re just one click away from being laid bare to the world... but as their race to reclaim their video leads to a night they'll never forget, they'll find that their video will expose even more than they bargained for.",
    release_date: 1405558800,
    genres: ["Comedy"],
  },
  {
    id: "324552",
    title: "John Wick: Chapter 2",
    poster: "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    overview:
      "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    release_date: 1486512000,
    genres: ["Documentary"],
  },
  {
    id: "361292",
    title: "Suspiria",
    poster: "https://image.tmdb.org/t/p/w500/dzWTnkert9EoiPWldWJ15dnfAFl.jpg",
    overview:
      "A darkness swirls at the center of a world-renowned dance company, one that will engulf the troupe's artistic director, an ambitious young dancer and a grieving psychotherapist. Some will succumb to the nightmare, others will finally wake up.",
    release_date: 1539219600,
    genres: [],
  },
  {
    id: "334543",
    title: "Lion",
    poster: "https://image.tmdb.org/t/p/w500/kCELJH1tCmaRLqvwIgKDb09aEaw.jpg",
    overview:
      "A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia; 25 years later, he sets out to find his lost family.",
    release_date: 1479945600,
    genres: ["Drama"],
  },
  {
    id: "12429",
    title: "Ponyo",
    poster: "https://image.tmdb.org/t/p/w500/yp8vEZflGynlEylxEesbYasc06i.jpg",
    overview:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    release_date: 1216429200,
    genres: ["Animation", "Family"],
  },
  {
    id: "17979",
    title: "A Christmas Carol",
    poster: "https://image.tmdb.org/t/p/w500/goHDZUnqZJ7FN4h48Qh6MzJNExl.jpg",
    overview:
      "Miser Ebenezer Scrooge is awakened on Christmas Eve by spirits who reveal to him his own miserable existence, what opportunities he wasted in his youth, his current cruelties, and the dire fate that awaits him if he does not change his ways. Scrooge is faced with his own story of growing bitterness and meanness, and must decide what his own future will hold: death or redemption.",
    release_date: 1257292800,
    genres: ["Animation", "Family"],
  },
  {
    id: "10587",
    title: "Police Academy 4: Citizens on Patrol",
    poster: "https://image.tmdb.org/t/p/w500/vvk5aWBJE3EqDX2ln6M4J4UiUXr.jpg",
    overview:
      "A new batch of recruits arrives at Police Academy, this time a group of civilian volunteers who have joined Commandant Lassard's new Citizens on Patrol program. Although the community relations project has strong governmental support, a disgusted Captain Harris is determined to see it fail.",
    release_date: 544323600,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "557",
    title: "Spider-Man",
    poster: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    overview:
      "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers.",
    release_date: 1020214800,
    genres: [],
  },
  {
    id: "49530",
    title: "In Time",
    poster: "https://image.tmdb.org/t/p/w500/3Mwj2sIONQckOZP3YwsUXF7U5I4.jpg",
    overview:
      "In the not-too-distant future the aging gene has been switched off. To avoid overpopulation, time has become the currency and the way people pay for luxuries and necessities. The rich can live forever, while the rest try to negotiate for their immortality. A poor young man who comes into a fortune of time, though too late to help his mother from dying. He ends up on the run from a corrupt police force known as 'time keepers'.",
    release_date: 1319677200,
    genres: ["Animation"],
  },
  {
    id: "16869",
    title: "Inglourious Basterds",
    poster: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    overview:
      "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as 'The Basterds' are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
    release_date: 1250557200,
    genres: ["Drama", "Action", "Thriller", "War"],
  },
  {
    id: "583631",
    title: "Tank Cleaner",
    poster: "https://image.tmdb.org/t/p/w500/w2Hwdz7311HGUP1lp0rXMKFRdyz.jpg",
    overview:
      "A young orphan boy working as a tank cleaner is trapped in a water tank by someone. He struggles for his life for four days in this tank full of water.",
    release_date: 1555030800,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "336843",
    title: "Maze Runner: The Death Cure",
    poster: "https://image.tmdb.org/t/p/w500/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg",
    overview:
      "Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",
    release_date: 1515542400,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "589861",
    title: "Colewell",
    poster: "https://image.tmdb.org/t/p/w500/mWpQvXkRuLLSXshOAFURyObb3xw.jpg",
    overview:
      "In tiny Colewell, Pennsylvania, the residents gather at the post office for mail and gossip, while the days pass quiet and serene. That is until news comes that the office is to close, and beloved clerk Nora (a marvelous Karen Allen) is left to fight for her job and reflect on the choices she has made that kept her in Colewell for so many years. Touching, with a hint of melancholy, Tom Quinn’s eloquent film is an ode to small-town life and the quiet emotions that come with nostalgia and memories of the past. As fears arise around her future and her past becomes ever more present, Nora states, “I don’t want to be lonely,” but what that means is elusive. Colewell gorgeously captures rural America, while giving space to the beauty of time passing and reflecting on what determines a life well lived.",
    release_date: 1555117200,
    genres: ["Drama"],
  },
  {
    id: "429203",
    title: "The Old Man & the Gun",
    poster: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
    overview:
      "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public.  Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
    release_date: 1538010000,
    genres: ["Comedy", "Crime", "Drama"],
  },
  {
    id: "330459",
    title: "Rogue One: A Star Wars Story",
    poster: "https://image.tmdb.org/t/p/w500/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg",
    overview:
      "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
    release_date: 1481673600,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "372058",
    title: "Your Name.",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    overview:
      "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    release_date: 1472173200,
    genres: ["Music"],
  },
  {
    id: "454992",
    title: "The Spy Who Dumped Me",
    poster: "https://image.tmdb.org/t/p/w500/tpPERI5i6yjT73jYWyZ9iWltQ9L.jpg",
    overview:
      "Audrey and Morgan, two thirty-year-old best friends in Los Angeles, are thrust unexpectedly into an international conspiracy when Audrey’s ex-boyfriend shows up at their apartment with a team of deadly assassins on his trail.",
    release_date: 1533171600,
    genres: ["Action", "Comedy"],
  },
  {
    id: "578665",
    title: "Love's Twisting Path",
    poster: "https://image.tmdb.org/t/p/w500/jxb79FHQOozKMro0iv8eN1El5AW.jpg",
    overview:
      "A love story torn by swords... In Kyoto in the last days of Edo Period, the bloody conflict continues between local feudal domains, who aim to overthrow the Tokugawa Shogunate, and the Shogun's police and city patrol. Tajuro Kiyokawa, once the master of the sword but now a depraved samurai who left his domain putting aside his past ambition, barely makes ends meet. Toyo, a woman who runs a tavern next door, feels affection for Tajuro who guards her place from nasty customers, but he never realizes Toyo's feeling... One day, Kazuma, a half-sibling of Tajuro, came to Kyoto to count on his brother. Kazuma has always looked him up and believed that Tajuro left the domain to pursue his ambition to conquer the shogunate. The city patrol finally finds Tajuro, the one marked as a subversive, and attacks him. What fate awaits for Tajuro, Toyo and Kazuma after a battle staking their lives...?",
    release_date: 1555030800,
    genres: ["Drama"],
  },
  {
    id: "8367",
    title: "Robin Hood: Prince of Thieves",
    poster: "https://image.tmdb.org/t/p/w500/hbRnWUNJkKKVN5mkcuC5ooqjE4e.jpg",
    overview:
      "When the dastardly Sheriff of Nottingham murders Robin's father, the legendary archer vows vengeance. To accomplish his mission, Robin joins forces with a band of exiled villagers (and comely Maid Marian), and together they battle to end the evil sheriff's reign of terror.",
    release_date: 676861200,
    genres: ["Crime", "Thriller"],
  },
  {
    id: "41439",
    title: "Saw: The Final Chapter",
    poster: "https://image.tmdb.org/t/p/w500/z0pT5jNWwSdazvrqPBVs1sdKjxu.jpg",
    overview:
      "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
    release_date: 1287622800,
  },
  {
    id: "627",
    title: "Trainspotting",
    poster: "https://image.tmdb.org/t/p/w500/6UTzw3kipgTYAJCX8GExoXzcVOx.jpg",
    overview:
      "Mark Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    release_date: 825033600,
    genres: ["Drama", "Crime"],
  },
  {
    id: "228967",
    title: "The Interview",
    poster: "https://image.tmdb.org/t/p/w500/tIDC4xT65l7a8qbgg8GvwD5g8c5.jpg",
    overview:
      "Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show 'Skylark Tonight'. When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.",
    release_date: 1419465600,
    genres: ["Drama"],
  },
  {
    id: "480414",
    title: "The Curse of La Llorona",
    poster: "https://image.tmdb.org/t/p/w500/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg",
    overview:
      "A social worker dealing with the disappearance of two children fears for her own family after beginning the investigation.",
    release_date: 1555462800,
    genres: ["Thriller", "Horror", "Mystery"],
  },
  {
    id: "782",
    title: "Gattaca",
    poster: "https://image.tmdb.org/t/p/w500/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
    overview:
      "Science fiction drama about a future society in the era of indefinite eugenics where humans are set on a life course depending on their DNA. The young Vincent Freeman is born with a condition that would prevent him from space travel, yet he is determined to infiltrate the GATTACA space program.",
    release_date: 873594000,
    genres: ["Thriller", "Science Fiction", "Mystery", "Romance"],
  },
  {
    id: "592545",
    title: "Athiran",
    poster: "https://image.tmdb.org/t/p/w500/mpcZ49Z4VH5niZVhiY0rwLJDMS0.jpg",
    overview:
      "In an isolated hospital in the high ranges of Kerala, an autistic patient with special skills piques the interest of a psychiatrist, whose investigation into her past leads to startling revelations",
    release_date: 1555030800,
    genres: ["Romance", "Thriller"],
  },
  {
    id: "10285",
    title: "Jason Goes to Hell: The Final Friday",
    poster: "https://image.tmdb.org/t/p/w500/Aacq05foqiWdXqetFv02HBvMoJy.jpg",
    overview:
      "Jason Voorhees, the living, breathing essence of evil, is back for one fierce, final fling! Tracked down and blown to bits by a special FBI task force, everyone now assumes that he's finally dead. But everybody assumes wrong. Jason has been reborn with the bone-chilling ability to assume the identity of anyone he touches. The terrifying truth is that he could be anywhere, or anybody. In this shocking, blood-soaked finale to Jason's carnage-ridden reign of terror, the horrible secret of his unstoppable killing instinct is finally revealed.",
    release_date: 745203600,
    genres: ["Horror"],
  },
  {
    id: "589514",
    title: "Лошо момиче",
    poster: "https://image.tmdb.org/t/p/w500/2e43PF9o1nqYIRpnTlpfFPJu4w7.jpg",
    overview: "",
    release_date: 1555030800,
  },
  {
    id: "588212",
    title: "Beyond The Noise",
    poster: "https://image.tmdb.org/t/p/w500/qTPeDf4Kq6uKbiNmNBmkYZtzOpC.jpg",
    overview:
      "Seven-year-old Oskar lives in his own world. Other kids avoid him. He enjoys walking around outside and recording sounds with his toy tape recorder. At a family gathering, Oskar overhears a conversation between two adults that will change his life and worldview forever.",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "68718",
    title: "Django Unchained",
    poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    overview:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    release_date: 1356393600,
    genres: ["Drama", "Western"],
  },
  {
    id: "4935",
    title: "Howl's Moving Castle",
    poster: "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg",
    overview:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    release_date: 1100822400,
    genres: ["Fantasy", "Animation", "Adventure"],
  },
  {
    id: "440021",
    title: "Happy Death Day",
    poster: "https://image.tmdb.org/t/p/w500/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
    overview:
      "Caught in a bizarre and terrifying time warp, college student Tree finds herself repeatedly reliving the day of her murder, ultimately realizing that she must identify the killer and the reason for her death before her chances of survival run out.",
    release_date: 1507770000,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "637",
    title: "Life Is Beautiful",
    poster: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
    overview:
      "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    release_date: 882576000,
    genres: [],
  },
  {
    id: "585747",
    title: "Satsujinki wo Kauonna",
    poster: "https://image.tmdb.org/t/p/w500/kqR0NFQhMC2VFfBgWxQ6drv4bNk.jpg",
    overview:
      "When Kyoko was a child her stepfather loved her sexually. She took refuge in the world of fantasy and multiple personalities. Kyoko has three flat-mates now one of whom is a lesbian who is into Kyoko. In turn, Kyoko is beginning to be horny. Unfortunately, this is not helping Kyoko's precarious mental state.",
    release_date: 1555030800,
  },
  {
    id: "106",
    title: "Predator",
    poster: "https://image.tmdb.org/t/p/w500/biznhvfedHPp9GKjlVFXH6OZtyU.jpg",
    overview:
      "Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in with the forest, taking trophies from the bodies of its victims as it goes along. Occasionally seeing through its eyes, the audience sees it is an intelligent alien hunter, hunting them for sport, killing them off one at a time.",
    release_date: 550458000,
    genres: ["Horror", "Thriller", "Crime", "Drama", "Mystery"],
  },
  {
    id: "591903",
    title: "Mimicry Freaks",
    poster: "https://image.tmdb.org/t/p/w500/6mUZbds1Y6auHZKVMmXDqbInEB1.jpg",
    overview: "",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "177677",
    title: "Mission: Impossible - Rogue Nation",
    poster: "https://image.tmdb.org/t/p/w500/oUDKymEL932AeHyl4A4ee8zuBLF.jpg",
    overview:
      "Ethan and team take on their most impossible mission yet—eradicating 'The Syndicate', an International and highly-skilled rogue organisation committed to destroying the IMF.",
    release_date: 1437613200,
    genres: ["Action", "Adventure"],
  },
  {
    id: "281338",
    title: "War for the Planet of the Apes",
    poster: "https://image.tmdb.org/t/p/w500/ijQHiImv16vNSeZQsmih04kwn0C.jpg",
    overview:
      "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
    release_date: 1499734800,
    genres: ["Drama", "Science Fiction", "War"],
  },
  {
    id: "408",
    title: "Snow White and the Seven Dwarfs",
    poster: "https://image.tmdb.org/t/p/w500/b43jrEguirXjtAVgXMiTvs8wUhC.jpg",
    overview:
      "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as 'the fairest in the land,' and Snow White's beauty surpasses her own.",
    release_date: -1010880000,
    genres: ["Romance", "Fantasy"],
  },
  {
    id: "136795",
    title: "The Heat",
    poster: "https://image.tmdb.org/t/p/w500/yERBa1y5zNUOTRKQPiDCPIc2fuv.jpg",
    overview:
      "Uptight and straight-laced, FBI Special Agent Sarah Ashburn is a methodical investigator with a reputation for excellence--and hyper-arrogance. Shannon Mullins, one of Boston P.D.'s 'finest,' is foul-mouthed and has a very short fuse, and uses her gut instinct and street smarts to catch the most elusive criminals. Neither has ever had a partner, or a friend for that matter. When these two wildly incompatible law officers join forces to bring down a ruthless drug lord, they become the last thing anyone expected: Buddies.",
    release_date: 1372294800,
    genres: [],
  },
  {
    id: "589856",
    title: "When I'm a Moth",
    poster: "https://image.tmdb.org/t/p/w500/93fhha9hqegT8IoVmZSCaxDHk5v.jpg",
    overview:
      "An 'un-biopic' of the young Hilary Rodham set in 1969, during the unverifiable weeks her autobiography has her working at an Alaskan salmon cannery. A parable about America, political narratives, and the absence of free will.",
    release_date: 1555030800,
    genres: [],
  },
  {
    id: "111",
    title: "Scarface",
    poster: "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    overview:
      "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    release_date: 439689600,
    genres: [],
  },
  {
    id: "176",
    title: "Saw",
    poster: "https://image.tmdb.org/t/p/w500/pparEGTCxcTiImyVFoKD0LX11N8.jpg",
    overview:
      "Obsessed with teaching his victims the value of life, a deranged, sadistic serial killer abducts the morally wayward. Once captured, they must face impossible choices in a horrific game of survival. The victims must fight to win their lives back, or die trying...",
    release_date: 1096592400,
    genres: ["Crime", "Horror", "Thriller"],
  },
  {
    id: "77338",
    title: "The Intouchables",
    poster: "https://image.tmdb.org/t/p/w500/ttx4GQl0azO6NJFWj4XNZCQOY7S.jpg",
    overview:
      "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
    release_date: 1320192000,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "953",
    title: "Madagascar",
    poster: "https://image.tmdb.org/t/p/w500/uHkmbxb70IQhV4q94MiBe9dqVqv.jpg",
    overview:
      "Alex the lion is the king of the urban jungle, the main attraction at New York’s Central Park Zoo. He and his best friends—Marty the zebra, Melman the giraffe and Gloria the hippo—have spent their whole lives in blissful captivity before an admiring public and with regular meals provided for them. Not content to leave well enough alone, Marty lets his curiosity get the better of him and makes his escape—with the help of some prodigious penguins—to explore the world.",
    release_date: 1116982800,
    genres: ["Drama"],
  },
  {
    id: "14160",
    title: "Up",
    poster: "https://image.tmdb.org/t/p/w500/eAdO0qa9m0NFSVLZ26PvCwmPlsr.jpg",
    overview:
      "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    release_date: 1243472400,
    genres: [],
  },
  {
    id: "62764",
    title: "Mirror Mirror",
    poster: "https://image.tmdb.org/t/p/w500/lXaFFfsOW1G2e671hzU6eYoMqjC.jpg",
    overview:
      "After she spends all her money, an evil enchantress queen schemes to marry a handsome, wealthy prince. There's just one problem - he's in love with a beautiful princess, Snow White. Now, joined by seven rebellious dwarves, Snow White launches an epic battle of good vs. evil...",
    release_date: 1331769600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "339403",
    title: "Baby Driver",
    poster: "https://image.tmdb.org/t/p/w500/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
    overview:
      "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    release_date: 1498611600,
    genres: [],
  },
  {
    id: "1587",
    title: "What's Eating Gilbert Grape",
    poster: "https://image.tmdb.org/t/p/w500/8FxWgsfDNosewo7H65oE4QkOb7g.jpg",
    overview:
      "Gilbert has to care for his brother Arnie and his obese mother, which gets in the way when love walks into his life.",
    release_date: 756086400,
    genres: ["Romance", "Drama"],
  },
  {
    id: "106646",
    title: "The Wolf of Wall Street",
    poster: "https://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
    overview:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    release_date: 1387929600,
    genres: [],
  },
  {
    id: "103",
    title: "Taxi Driver",
    poster: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    overview:
      "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    release_date: 192499200,
    genres: ["Comedy"],
  },
  {
    id: "2062",
    title: "Ratatouille",
    poster: "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
    overview:
      "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
    release_date: 1182474000,
    genres: ["Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "71676",
    title: "Ghost Rider: Spirit of Vengeance",
    poster: "https://image.tmdb.org/t/p/w500/fDtIZXLNreDHk3mOskJYABrQNOQ.jpg",
    overview:
      "When the devil resurfaces with aims to take over the world in human form, Johnny Blaze reluctantly comes out of hiding to transform into the flame-spewing supernatural hero Ghost Rider -- and rescue a 10-year-old boy from an unsavory end.",
    release_date: 1323475200,
    genres: ["Action", "Fantasy", "Thriller"],
  },
  {
    id: "72190",
    title: "World War Z",
    poster: "https://image.tmdb.org/t/p/w500/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg",
    overview:
      "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
    release_date: 1371690000,
    genres: [],
  },
  {
    id: "22803",
    title: "Law Abiding Citizen",
    poster: "https://image.tmdb.org/t/p/w500/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
    overview:
      "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal.",
    release_date: 1255568400,
    genres: [],
  },
  {
    id: "10144",
    title: "The Little Mermaid",
    poster: "https://image.tmdb.org/t/p/w500/plcZXvI310FkbwIptvd6rqk63LP.jpg",
    overview:
      "This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
    release_date: 627264000,
    genres: ["Drama"],
  },
  {
    id: "18239",
    title: "The Twilight Saga: New Moon",
    poster: "https://image.tmdb.org/t/p/w500/j5jM5pq78ObAXX1WhTsb115EkLl.jpg",
    overview:
      "Forks, Washington resident Bella Swan is reeling from the departure of her vampire love, Edward Cullen, and finds comfort in her friendship with Jacob Black, a werewolf. But before she knows it, she's thrust into a centuries-old conflict, and her desire to be with Edward at any cost leads her to take greater and greater risks.",
    release_date: 1237075200,
    genres: ["Adventure", "Fantasy", "Drama", "Romance"],
  },
  {
    id: "14",
    title: "American Beauty",
    poster: "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg",
    overview:
      "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    release_date: 937357200,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "13475",
    title: "Star Trek",
    poster: "https://image.tmdb.org/t/p/w500/lV5OpzAss1z06YNagOVap1I35mH.jpg",
    overview:
      "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
    release_date: 1241571600,
    genres: ["Documentary"],
  },
  {
    id: "463272",
    title: "Johnny English Strikes Again",
    poster: "https://image.tmdb.org/t/p/w500/tCBxnZwLiY1BOKw3tH6AxHZdqPh.jpg",
    overview:
      "Disaster strikes when a criminal mastermind reveals the identities of all active undercover agents in Britain. The secret service can now rely on only one man - Johnny English. Currently teaching at a minor prep school, Johnny springs back into action to find the mysterious hacker. For this mission to succeed, he’ll need all of his skills - what few he has - as the man with yesterday’s analogue methods faces off against tomorrow’s digital technology.",
    release_date: 1536800400,
    genres: ["Comedy"],
  },
  {
    id: "341013",
    title: "Atomic Blonde",
    poster: "https://image.tmdb.org/t/p/w500/jdL6isPaY13aWFzLUdpbctgArO6.jpg",
    overview:
      "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
    release_date: 1501030800,
    genres: [],
  },
  {
    id: "157350",
    title: "Divergent",
    poster: "https://image.tmdb.org/t/p/w500/lmIh6aeCQXA4sLt58l6qB1o54BE.jpg",
    overview:
      "In a world divided into factions based on personality types, Tris learns that she's been classified as Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.",
    release_date: 1394755200,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "581475",
    title: "Juanita",
    poster: "https://image.tmdb.org/t/p/w500/yKq6LErlgWizCtl3DcdYv86xn2e.jpg",
    overview:
      "Fed up with her deadbeat grown kids and marginal urban existence, Juanita takes a Greyhound bus to Paper Moon, Montana where she reinvents herself and finds her mojo.",
    release_date: 1552003200,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "147441",
    title: "Exodus: Gods and Kings",
    poster: "https://image.tmdb.org/t/p/w500/uaDj37JtvLan9tihxZ18e6qL33b.jpg",
    overview:
      "The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.",
    release_date: 1417564800,
    genres: ["Adventure", "Drama", "Action"],
  },
  {
    id: "2454",
    title: "The Chronicles of Narnia: Prince Caspian",
    poster: "https://image.tmdb.org/t/p/w500/g2fnrbnvynLIMN8954yL8y6ZXsO.jpg",
    overview:
      "One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir.",
    release_date: 1210813200,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "44214",
    title: "Black Swan",
    poster: "https://image.tmdb.org/t/p/w500/rH19vkjAzCZ0HIUvrgB3rowm68h.jpg",
    overview:
      "A journey through the psyche of a young ballerina whose starring role as the duplicitous swan queen turns out to be a part for which she becomes frighteningly perfect.",
    release_date: 1291334400,
    genres: ["Documentary"],
  },
  {
    id: "324786",
    title: "Hacksaw Ridge",
    poster: "https://image.tmdb.org/t/p/w500/jhWbYeUNOA5zAb6ufK6pXQFXqTX.jpg",
    overview:
      "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    release_date: 1475802000,
    genres: ["Drama", "History", "War"],
  },
  {
    id: "1571",
    title: "Live Free or Die Hard",
    poster: "https://image.tmdb.org/t/p/w500/smfNnLNbjNgpiOS7npW8mxF9A5Z.jpg",
    overview:
      "John McClane is back and badder than ever, and this time he's working for Homeland Security. He calls on the services of a young hacker in his bid to stop a ring of Internet terrorists intent on taking control of America's computer infrastructure.",
    release_date: 1182301200,
    genres: ["Action", "Thriller"],
  },
  {
    id: "254128",
    title: "San Andreas",
    poster: "https://image.tmdb.org/t/p/w500/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
    overview:
      "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    release_date: 1432688400,
    genres: ["Action"],
  },
  {
    id: "348893",
    title: "Boyka: Undisputed IV",
    poster: "https://image.tmdb.org/t/p/w500/7QGdIJWWTkPhVjpQ0zA6z69khod.jpg",
    overview:
      "In the fourth installment of the fighting franchise, Boyka is shooting for the big leagues when an accidental death in the ring makes him question everything he stands for. When he finds out the wife of the man he accidentally killed is in trouble, Boyka offers to fight in a series of impossible battles to free her from a life of servitude",
    release_date: 1470013200,
    genres: ["Thriller", "Action", "Crime"],
  },
  {
    id: "359940",
    title: "Three Billboards Outside Ebbing, Missouri",
    poster: "https://image.tmdb.org/t/p/w500/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
    overview:
      "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    release_date: 1510272000,
    genres: ["Crime", "Drama"],
  },
  {
    id: "863",
    title: "Toy Story 2",
    poster: "https://image.tmdb.org/t/p/w500/eVGu0zsezaSCuN67zgNhzjeNI9Z.jpg",
    overview:
      "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    release_date: 941245200,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: "1366",
    title: "Rocky",
    poster: "https://image.tmdb.org/t/p/w500/i5xiwdSsrecBvO7mIfAJixeEDSg.jpg",
    overview:
      "When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer  Mickey Goldmill to make the most of this once in a lifetime break.",
    release_date: 217382400,
    genres: ["Action"],
  },
  {
    id: "50620",
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    poster: "https://image.tmdb.org/t/p/w500/jHE7WUf3FDod8vw3O3twh0JVZun.jpg",
    overview:
      "After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
    release_date: 1352764800,
    genres: ["Adventure", "Fantasy", "Drama", "Romance"],
  },
  {
    id: "350",
    title: "The Devil Wears Prada",
    poster: "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    overview:
      "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
    release_date: 1151629200,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "377",
    title: "A Nightmare on Elm Street",
    poster: "https://image.tmdb.org/t/p/w500/wGTpGGRMZmyFCcrY2YoxVTIBlli.jpg",
    overview:
      "Teenagers in a small town are dropping like flies, apparently in the grip of mass hysteria causing their suicides. A cop's daughter, Nancy Thompson (Heather Langenkamp) traces the cause to child molester Fred Krueger (Robert Englund), who was burned alive by angry parents many years before. Krueger has now come back in the dreams of his killers' children, claiming their lives as his revenge. Nancy and her boyfriend, Glen (Johnny Depp), must devise a plan to lure the monster out of the realm of nightmares and into the real world...",
    release_date: 469238400,
    genres: ["Horror"],
  },
  {
    id: "1368",
    title: "First Blood",
    poster: "https://image.tmdb.org/t/p/w500/fVamGe8rfEQUrMbzumL1t0DslCA.jpg",
    overview:
      "When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats his way into the action-movie hall of fame. Hounded by a relentless sheriff, Rambo employs heavy-handed guerilla tactics to shake the cops off his tail.",
    release_date: 404092800,
    genres: ["Action", "Adventure", "Thriller", "War"],
  },
  {
    id: "241259",
    title: "Alice Through the Looking Glass",
    poster: "https://image.tmdb.org/t/p/w500/uGsjYHPZ0NbI7GHrHlq98D4kFYB.jpg",
    overview:
      "In the sequel to Tim Burton's 'Alice in Wonderland', Alice Kingsleigh returns to Underland and faces a new adventure in saving the Mad Hatter.",
    release_date: 1464138000,
    genres: ["Animation"],
  },
  {
    id: "433249",
    title: "IO",
    poster: "https://image.tmdb.org/t/p/w500/utH781EwjzzXQC6fZUO3cw8L5Ht.jpg",
    overview:
      "As a young scientist searches for a way to save a dying Earth, she finds a connection with a man who's racing to catch the last shuttle off the planet.",
    release_date: 1547769600,
    genres: ["Science Fiction"],
  },
  {
    id: "47971",
    title: "xXx: Return of Xander Cage",
    poster: "https://image.tmdb.org/t/p/w500/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg",
    overview:
      "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    release_date: 1484265600,
    genres: ["Action", "Adventure", "Crime"],
  },
  {
    id: "657",
    title: "From Russia with Love",
    poster: "https://image.tmdb.org/t/p/w500/zx4V17FP8oclNvOpTgs2iCCtiYk.jpg",
    overview:
      "Agent 007 is back in the second installment of the James Bond series, this time battling a secret crime organization known as SPECTRE. Russians Rosa Klebb and Kronsteen are out to snatch a decoding device known as the Lektor, using the ravishing Tatiana to lure Bond into helping them. Bond willingly travels to meet Tatiana in Istanbul, where he must rely on his wits to escape with his life in a series of deadly encounters with the enemy",
    release_date: -196473600,
    genres: ["Action", "Thriller", "Adventure"],
  },
  {
    id: "27578",
    title: "The Expendables",
    poster: "https://image.tmdb.org/t/p/w500/tDynwDj3pvexrEQ8wb0uy8EdcGQ.jpg",
    overview:
      "Barney Ross leads a band of highly skilled mercenaries including knife enthusiast Lee Christmas, a martial arts expert, heavy weapons specialist, demolitionist, and a loose-cannon sniper. When the group is commissioned by the mysterious Mr. Church to assassinate the dictator of a small South American island, Barney and Lee visit the remote locale to scout out their opposition and discover the true nature of the conflict engulfing the city.",
    release_date: 1280797200,
    genres: [],
  },
  {
    id: "310",
    title: "Bruce Almighty",
    poster: "https://image.tmdb.org/t/p/w500/nF9hly6Dk2pcQFSnuxugI34RpCC.jpg",
    overview:
      "Bruce Nolan toils as a 'human interest' television reporter in Buffalo, N.Y., but despite his high ratings and the love of his beautiful girlfriend, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God—and the Almighty responds, endowing Bruce with all of His divine powers.",
    release_date: 1053651600,
    genres: ["Fantasy", "Comedy"],
  },
  {
    id: "938",
    title: "For a Few Dollars More",
    poster: "https://image.tmdb.org/t/p/w500/3yv5WcpTqzIq8FsoVUs4pvFqk9j.jpg",
    overview:
      "Two bounty hunters are in pursuit of 'El Indio,' one of the most wanted fugitives in the western territories, and his gang.",
    release_date: -127440000,
    genres: ["Western"],
  },
  {
    id: "418827",
    title: "Sister's Younger Husband",
    poster: "https://image.tmdb.org/t/p/w500/cj2DPcWKDfd57cqVeFA40rZgbE6.jpg",
    overview:
      "A sexy brother-in-law approached her? And he’s a younger man?  Mi-yeon, who was adopted into her family when she was little, is living with her older sister, Si-yeon and Si-yeon’s husband. Mi-yeon’s desire towards her brother-in-law grows more and more every night when she gets to watch the affectionate interaction between her older sister and the brother-in-law. One day, Mi-yeon seduces her brother-in-law and the two end up crossing the line when they should not have. As the situation goes on, Mi-yeon finds out her older sister is also having affairs outside the marriage. Mi-yeon tries to clear up the relationship with her brother-in-law out of guilty feeling. However, she hears something shocking from the brother-in-law.",
    release_date: 1476147600,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "24021",
    title: "The Twilight Saga: Eclipse",
    poster: "https://image.tmdb.org/t/p/w500/sOpCY4by0bkEu9LbVXVCOpWWKzF.jpg",
    overview:
      "Bella once again finds herself surrounded by danger as Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob, knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella is confronted with the most important decision of her life.",
    release_date: 1277254800,
    genres: ["Adventure", "Fantasy", "Drama", "Romance"],
  },
  {
    id: "353486",
    title: "Jumanji: Welcome to the Jungle",
    poster: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
    overview:
      "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    release_date: 1512777600,
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
  },
  {
    id: "390845",
    title: "A Delicious Flight",
    poster: "https://image.tmdb.org/t/p/w500/xLZQdhtdQasK2LwD86xhwe19pYG.jpg",
    overview:
      "The in- flight service for Hong Kong starts now!  An erotic story that took place in the spacious blue sky!  An innocent actress runs away from the scandal with an idol, the impudent idol that ruined her career, a passionate manager who is devoted to her and his ex-girlfriend who is now a sexy stewardess. These four that should never be together run into each other in an airplane. No one can run away and the most cheeky and erotic things happen here.",
    release_date: 1446336000,
    genres: ["Romance"],
  },
  {
    id: "1891",
    title: "The Empire Strikes Back",
    poster: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
    overview:
      "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
    release_date: 327632400,
    genres: ["Science Fiction"],
  },
  {
    id: "425",
    title: "Ice Age",
    poster: "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    overview:
      "With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
    release_date: 1015718400,
    genres: [],
  },
  {
    id: "809",
    title: "Shrek 2",
    poster: "https://image.tmdb.org/t/p/w500/oljiDFPyMY437BRRV69AzVDSiKy.jpg",
    overview:
      "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
    release_date: 1084928400,
    genres: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "1422",
    title: "The Departed",
    poster: "https://image.tmdb.org/t/p/w500/kWWAt2FMRbqLFFy8o5R4Zr8cMAb.jpg",
    overview:
      "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    release_date: 1160010000,
    genres: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    id: "411088",
    title: "The Invisible Guest",
    poster: "https://image.tmdb.org/t/p/w500/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
    overview:
      "'The Invisible Guest” turns on a young businessman who wakes up in a hotel room locked from the inside with the dead body of his lover next to him. He hires a prestigious lawyer, and over one night they work together to clarify what happened in a frenetic race against time.",
    release_date: 1474506000,
    genres: ["Mystery", "Crime", "Thriller"],
  },
  {
    id: "254470",
    title: "Pitch Perfect 2",
    poster: "https://image.tmdb.org/t/p/w500/oFBQUufCV4c8WZoNhtGM17p884H.jpg",
    overview:
      "The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name, and regain their status, the Bellas take on a seemingly impossible task: winning an international competition no American team has ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for the trip, the Bellas can hopefully accomplish their dreams.",
    release_date: 1430960400,
    genres: ["Comedy", "Music"],
  },
  {
    id: "489999",
    title: "Searching",
    poster: "https://image.tmdb.org/t/p/w500/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg",
    overview:
      "After David Kim's 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. But 37 hours later and without a single lead, David decides to search the one place no one has looked yet, where all secrets are kept today: his daughter's laptop.",
    release_date: 1535072400,
    genres: ["Drama"],
  },
  {
    id: "198184",
    title: "Chappie",
    poster: "https://image.tmdb.org/t/p/w500/hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg",
    overview:
      "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    release_date: 1425427200,
    genres: ["Crime", "Action", "Science Fiction"],
  },
  {
    id: "34584",
    title: "The NeverEnding Story",
    poster: "https://image.tmdb.org/t/p/w500/jq67Zg1TVXNZxTvcXxfIdxK3IWV.jpg",
    overview:
      "While hiding from bullies in his school's attic, a young boy discovers the extraordinary land of Fantasia, through a magical book called The Neverending Story. The book tells the tale of Atreyu, a young warrior who, with the help of a luck dragon named Falkor, must save Fantasia from the destruction of The Nothing.",
    release_date: 449974800,
    genres: ["Adventure", "Fantasy", "Science Fiction"],
  },
  {
    id: "589859",
    title: "We Believe in Dinosaurs",
    poster: "https://image.tmdb.org/t/p/w500/9gYWHIlw4dpV9A5fhSJeg8qtj8Y.jpg",
    overview:
      "Williamstown, Kentucky, is home to the Ark Encounter – a “life-size” creationist museum filled with all of the creatures that traveled in Noah's Ark, including dinosaurs. With incredible access to the park leading up to its opening, the filmmakers expose the larger system behind the creationist movement, piecing together the many factors that have led to the museum presenting its information as historical fact, and the people who are fighting to set the scientific record straight. Amid a climate of science denial and a well-funded corporate behemoth, three Kentuckians (a local geologist, an ex-creationist, and an atheist activist) try their best to challenge the movement that is taking over their home state.  Meanwhile, fervent believers work diligently to create the lifelike animatronics that will be on display in the Ark. Leaving judgement aside, this documentary challenges the deep-seated doctrine that is passed down among creationists, pitting scientific fact vs. religious belief.",
    release_date: 1555117200,
    genres: ["Documentary"],
  },
  {
    id: "507076",
    title: "Climax",
    poster: "https://image.tmdb.org/t/p/w500/j594woyeGeEGvlSZ95sZuA5uCot.jpg",
    overview:
      "Young dancers gather in a remote and empty school building to rehearse on a cold and wintry night. The all-night celebration soon turns into a hallucinatory nightmare when they learn that their sangria is laced with LSD.",
    release_date: 1537318800,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "227159",
    title: "Horrible Bosses 2",
    poster: "https://image.tmdb.org/t/p/w500/boBOkwIqgrs8noxBUSDkkicKa4K.jpg",
    overview:
      "Dale, Kurt and Nick decide to start their own business but things don't go as planned because of a slick investor, prompting the trio to pull off a harebrained and misguided kidnapping scheme.",
    release_date: 1416960000,
    genres: ["Comedy"],
  },
  {
    id: "339846",
    title: "Baywatch",
    poster: "https://image.tmdb.org/t/p/w500/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    overview:
      "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    release_date: 1494550800,
    genres: ["Action", "Comedy"],
  },
  {
    id: "12",
    title: "Finding Nemo",
    poster: "https://image.tmdb.org/t/p/w500/wTLyzRc4Dr9dHgwh3EXUKnveA6Q.jpg",
    overview:
      "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    release_date: 1054256400,
    genres: ["Animation", "Family"],
  },
  {
    id: "463821",
    title: "The House with a Clock in Its Walls",
    poster: "https://image.tmdb.org/t/p/w500/qM66Hv4ByAxnilr0jaqCA9uOD4Y.jpg",
    overview:
      "When ten-year-old Lewis is suddenly orphaned, he is sent to live with his Uncle Jonathan in a creaky (and creepy) old mansion with a mysterious ticking noise that emanates from the walls. Upon discovering that his uncle is a warlock, Lewis begins learning magic, but when he rebelliously resurrects an evil warlock he must find the secret of the house and save the world from destruction.",
    release_date: 1536973200,
    genres: ["Fantasy", "Family"],
  },
  {
    id: "58574",
    title: "Sherlock Holmes: A Game of Shadows",
    poster: "https://image.tmdb.org/t/p/w500/y1MYZkwhZK6L0Jy4YMuPktzDOfn.jpg",
    overview:
      "There is a new criminal mastermind at large (Professor Moriarty) and not only is he Holmes’ intellectual equal, but his capacity for evil and lack of conscience may give him an advantage over the  detective.",
    release_date: 1321920000,
    genres: ["Adventure", "Action", "Crime", "Mystery"],
  },
  {
    id: "1124",
    title: "The Prestige",
    poster: "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    overview:
      "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    release_date: 1161219600,
    genres: ["Drama", "Mystery", "Thriller"],
  },
  {
    id: "313369",
    title: "La La Land",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    overview:
      "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    release_date: 1480377600,
    genres: ["Comedy", "Music"],
  },
  {
    id: "12100",
    title: "Windtalkers",
    poster: "https://image.tmdb.org/t/p/w500/547q4HXlvEcS06lujfb2yzsTP3H.jpg",
    overview:
      "Joe Enders is a gung-ho Marine assigned to protect a 'windtalker' - one of several Navajo Indians who were used to relay messages during World War II because their spoken language was indecipherable to Japanese code breakers.",
    release_date: 1024016400,
    genres: ["Drama", "Action", "History", "War"],
  },
  {
    id: "1572",
    title: "Die Hard: With a Vengeance",
    poster: "https://image.tmdb.org/t/p/w500/5ndvEFzy2kGSnN2MXBdmsbH9nAD.jpg",
    overview:
      "New York detective John McClane is back and kicking bad-guy butt in the third installment of this action-packed series, which finds him teaming with civilian Zeus Carver to prevent the loss of innocent lives. McClane thought he'd seen it all, until a genius named Simon engages McClane, his new 'partner' -- and his beloved city -- in a deadly game that demands their concentration.",
    release_date: 800845200,
    genres: ["Action", "Thriller"],
  },
  {
    id: "256961",
    title: "Paul Blart: Mall Cop 2",
    poster: "https://image.tmdb.org/t/p/w500/59NF8vsPV84KLhsWBH7rHZbLpDN.jpg",
    overview:
      "Security guard Paul Blart is headed to Las Vegas to attend a Security Guard Expo with his teenage daughter Maya before she departs for college. While at the convention, he inadvertently discovers a heist - and it's up to Blart to apprehend the criminals.",
    release_date: 1429146000,
    genres: ["Action", "Comedy", "Family"],
  },
  {
    id: "492452",
    title: "Ben Is Back",
    poster: "https://image.tmdb.org/t/p/w500/eSPiprXuWqwMGi6t8BkdiTz9Ou3.jpg",
    overview:
      "19-year-old Ben Burns unexpectedly returns home to his family's suburban home on Christmas Eve morning. Ben's mother, Holly, is relieved and welcoming but wary of her son staying clean. Over a turbulent 24 hours, new truths are revealed, and a mother's undying love for her son is tested as she does everything in her power to keep him safe.",
    release_date: 1543968000,
    genres: ["Drama"],
  },
  {
    id: "429",
    title: "The Good, the Bad and the Ugly",
    poster: "https://image.tmdb.org/t/p/w500/eWivEg4ugIMAd7d4uWI37b17Cgj.jpg",
    overview:
      "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    release_date: -95472000,
    genres: ["Documentary", "Comedy"],
  },
  {
    id: "101299",
    title: "The Hunger Games: Catching Fire",
    poster: "https://image.tmdb.org/t/p/w500/7c1JtraYsjMMnk8Md0IMoyRzqZJ.jpg",
    overview:
      "Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a 'Victor's Tour' of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.",
    release_date: 1384473600,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "62211",
    title: "Monsters University",
    poster: "https://image.tmdb.org/t/p/w500/odW4WVN5hALNDQlL7A97nU6fiAv.jpg",
    overview:
      "A look at the relationship between Mike and Sulley during their days at Monsters University — when they weren't necessarily the best of friends.",
    release_date: 1371690000,
    genres: ["Animation", "Family"],
  },
  {
    id: "6479",
    title: "I Am Legend",
    poster: "https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    overview:
      "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    release_date: 1197590400,
    genres: [],
  },
  {
    id: "60599",
    title: "Arbitrage",
    poster: "https://image.tmdb.org/t/p/w500/oVJF2KTmNB8ZFkp0aUSay7d0Opf.jpg",
    overview:
      "A troubled hedge fund magnate, desperate to complete the sale of his trading empire, makes an error that forces him to turn to an unlikely person for help.",
    release_date: 1347584400,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "710",
    title: "GoldenEye",
    poster: "https://image.tmdb.org/t/p/w500/bFzjdy6ucvNlXmJwoSoYfufV6lP.jpg",
    overview:
      "James Bond must unmask the mysterious head of the Janus Syndicate and prevent the leader from utilizing the GoldenEye weapons system to inflict devastating revenge on Britain.",
    release_date: 816480000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "18785",
    title: "The Hangover",
    poster: "https://image.tmdb.org/t/p/w500/jjCPcxw7QCmFPYM1t3BThdEawJK.jpg",
    overview:
      "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
    release_date: 1243904400,
    genres: ["Comedy"],
  },
  {
    id: "9806",
    title: "The Incredibles",
    poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    overview:
      "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    release_date: 1099612800,
    genres: ["Action", "Adventure", "Animation", "Family"],
  },
  {
    id: "394741",
    title: "Stan & Ollie",
    poster: "https://image.tmdb.org/t/p/w500/8qDBDXA8Od8gc4IQMnoXUKyj8Pf.jpg",
    overview:
      "With their golden era long behind them, comedy duo Stan Laurel and Oliver Hardy embark on a variety hall tour of Britain and Ireland. Despite the pressures of a hectic schedule, and with the support of their wives Lucille and Ida – a formidable double act in their own right – the pair's love of performing, as well as for each other, endures as they secure their place in the hearts of their adoring public",
    release_date: 1545955200,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "19908",
    title: "Zombieland",
    poster: "https://image.tmdb.org/t/p/w500/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
    overview:
      "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
    release_date: 1254877200,
    genres: ["Comedy", "Horror"],
  },
  {
    id: "53182",
    title: "300: Rise of an Empire",
    poster: "https://image.tmdb.org/t/p/w500/7lqsbSbSJVU5jYVso1j3lvC9Ehu.jpg",
    overview:
      "Greek general Themistokles attempts to unite all of Greece by leading the charge that will change the course of the war. Themistokles faces the massive invading Persian forces led by mortal-turned-god, Xerxes and Artemesia, the vengeful commander of the Persian navy.",
    release_date: 1393977600,
    genres: [],
  },
  {
    id: "9659",
    title: "Mad Max",
    poster: "https://image.tmdb.org/t/p/w500/5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
    overview:
      "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
    release_date: 292726800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "454293",
    title: "Night School",
    poster: "https://image.tmdb.org/t/p/w500/uQVIQDc3foTPodZw0ie1Or0CXBn.jpg",
    overview:
      "Teddy Walker is a successful salesman whose life takes an unexpected turn when he accidentally blows up his place of employment. Forced to attend night school to get his GED, Teddy soon finds himself dealing with a group of misfit students, his former high school nemesis and a feisty teacher who doesn't think he's too bright.",
    release_date: 1538010000,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "218",
    title: "The Terminator",
    poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    overview:
      "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the 'Terminator' back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
    release_date: 467596800,
    genres: ["Action", "Science Fiction", "Thriller"],
  },
  {
    id: "453",
    title: "A Beautiful Mind",
    poster: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
    overview:
      "John Nash is a brilliant but asocial mathematician fighting schizophrenia. After he accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    release_date: 1008028800,
    genres: ["Drama", "Romance"],
  },
  {
    id: "339964",
    title: "Valerian and the City of a Thousand Planets",
    poster: "https://image.tmdb.org/t/p/w500/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg",
    overview:
      "In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.",
    release_date: 1500512400,
    genres: ["Adventure", "Science Fiction", "Action"],
  },
  {
    id: "24",
    title: "Kill Bill: Vol. 1",
    poster: "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    overview:
      "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
    release_date: 1065747600,
    genres: ["Action", "Crime"],
  },
  {
    id: "463684",
    title: "Velvet Buzzsaw",
    poster: "https://image.tmdb.org/t/p/w500/3rViQPcrWthMNecp5XnkKev6BzW.jpg",
    overview:
      "Big money artists and mega-collectors pay a high price when art collides with commerce. After a series of paintings by an unknown artist are discovered, a supernatural force enacts revenge on those who have allowed their greed to get in the way of art.",
    release_date: 1548979200,
    genres: ["Thriller", "Mystery", "Horror"],
  },
  {
    id: "601",
    title: "E.T. the Extra-Terrestrial",
    poster: "https://image.tmdb.org/t/p/w500/trEGc4UQWj8eLS5MyeGRxeTwlqY.jpg",
    overview:
      "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
    release_date: 392605200,
    genres: [],
  },
  {
    id: "11224",
    title: "Cinderella",
    poster: "https://image.tmdb.org/t/p/w500/4nssBcQUBadCTBjrAkX46mVEKts.jpg",
    overview:
      "Cinderella has faith her dreams of a better life will come true. With help from her loyal mice friends and a wave of her Fairy Godmother's wand, Cinderella's rags are magically turned into a glorious gown and off she goes to the Royal Ball. But when the clock strikes midnight, the spell is broken, leaving a single glass slipper... the only key to the ultimate fairy-tale ending!",
    release_date: -625795200,
    genres: ["Animation"],
  },
  {
    id: "112160",
    title: "Sexual Chronicles of a French Family",
    poster: "https://image.tmdb.org/t/p/w500/p9zRDTqKZpEdfti9jRmo5bqiYdd.jpg",
    overview:
      "Three generations of a French family open up about their sexual experiences and desires after young Romain is caught masturbating in his biology class.",
    release_date: 1336525200,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "954",
    title: "Mission: Impossible",
    poster: "https://image.tmdb.org/t/p/w500/lirMXnE7NoVLDr3qeqf48fR1mk4.jpg",
    overview:
      "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
    release_date: 832726800,
    genres: ["Comedy", "Family"],
  },
  {
    id: "1402",
    title: "The Pursuit of Happyness",
    poster: "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    overview:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    release_date: 1166054400,
    genres: ["Drama"],
  },
  {
    id: "240",
    title: "The Godfather: Part II",
    poster: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    overview:
      "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    release_date: 156729600,
    genres: ["Drama", "Crime"],
  },
  {
    id: "316727",
    title: "The Purge: Election Year",
    poster: "https://image.tmdb.org/t/p/w500/ubLbY97m8lYJ3Fykh7nfiwB5eth.jpg",
    overview:
      "Two years after choosing not to kill the man who killed his son, former police sergeant Leo Barnes has become head of security for Senator Charlene Roan, the front runner in the next Presidential election due to her vow to eliminate the Purge. On the night of what should be the final Purge, a betrayal from within the government forces Barnes and Roan out onto the street where they must fight to survive the night.",
    release_date: 1467162000,
    genres: ["Action", "Horror", "Thriller"],
  },
  {
    id: "19404",
    title: "Dilwale Dulhania Le Jayenge",
    poster: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    overview:
      "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    release_date: 814147200,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "446101",
    title: "Assassination Nation",
    poster: "https://image.tmdb.org/t/p/w500/q2Nmyqh84rMiBwNfC2jMjuQluW4.jpg",
    overview:
      "High school senior Lily and her group of friends live in a haze of texts, posts, selfies and chats just like the rest of the world. So, when an anonymous hacker starts posting details from the private lives of everyone in their small town, the result is absolute madness leaving Lily and her friends questioning whether they'll live through the night.",
    release_date: 1537491600,
    genres: ["Thriller", "Comedy", "Horror"],
  },
  {
    id: "158015",
    title: "The Purge",
    poster: "https://image.tmdb.org/t/p/w500/1x4fHaDdlpWT5P2UV4ClKguWbTE.jpg",
    overview:
      "Given the country's overcrowded prisons, the U.S. government begins to allow 12-hour periods of time in which all illegal activity is legal. During one of these free-for-alls, a family must protect themselves from a home invasion.",
    release_date: 1369962000,
    genres: ["Comedy"],
  },
  {
    id: "401847",
    title: "Can You Ever Forgive Me?",
    poster: "https://image.tmdb.org/t/p/w500/hPuZR2bFoV0kuBrA98exWyvTf40.jpg",
    overview:
      "When bestselling celebrity biographer is no longer able to get published because she has fallen out of step with current tastes, she turns her art form to deception.",
    release_date: 1539910800,
    genres: ["Drama", "Crime", "Comedy"],
  },
  {
    id: "446807",
    title: "The Girl in the Spider's Web",
    poster: "https://image.tmdb.org/t/p/w500/w4ibr8R702DCjwYniry1D1XwQXj.jpg",
    overview:
      "In Stockholm, Sweden, hacker Lisbeth Salander is hired by Frans Balder, a computer engineer, to retrieve a program that he believes it is too dangerous to exist.",
    release_date: 1540429200,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "41592",
    title: "StreetDance 3D",
    poster: "https://image.tmdb.org/t/p/w500/oqWSenAtDQsWjMLVTMEDvcCtafU.jpg",
    overview:
      "In order to win the Street Dance Championships, a dance crew is forced to work with ballet dancers from the Royal Dance School in exchange for rehearsal space.",
    release_date: 1274230800,
    genres: ["Drama", "Music", "Romance"],
  },
  {
    id: "407436",
    title: "Mowgli: Legend of the Jungle",
    poster: "https://image.tmdb.org/t/p/w500/clRnzMsFoMIdC7I5JsG6dnnHH8l.jpg",
    overview:
      "A human child raised by wolves, must face off against a menacing tiger named Shere Khan, as well as his own origins.",
    release_date: 1543104000,
    genres: ["Adventure", "Drama"],
  },
  {
    id: "10193",
    title: "Toy Story 3",
    poster: "https://image.tmdb.org/t/p/w500/4cpGytCB0eqvRks4FAlJoUJiFPG.jpg",
    overview:
      "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    release_date: 1276650000,
    genres: ["Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "589860",
    title: "The Seer and the Unseen",
    poster: "https://image.tmdb.org/t/p/w500/zv6uPdw1C9HZ4sTDS7TV94MKgHV.jpg",
    overview:
      "THE SEER AND THE UNSEEN is a magically real fable about invisible elves, financial collapse and the surprising power of belief, told through the story of an Icelandic woman - a real life Lorax who speaks on behalf of nature under threat. Through her heroic story, SEER explores the surprising power of belief, the profound meaning of home; and, the invisible forces - be they elves or the market - that shape our visible worlds and transform our natural landscapes.",
    release_date: 1555117200,
    genres: [],
  },
  {
    id: "185",
    title: "A Clockwork Orange",
    poster: "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
    overview:
      "Demonic gang-leader Alex goes on the spree of rape, mugging and murder with his pack of 'droogs'. But he's a boy who also likes Beethoven's Ninth and a bit of 'the old in-out, in-out'. He later finds himself at the mercy of the state and its brainwashing experiment designed to take violence off the streets.",
    release_date: 61862400,
    genres: ["Science Fiction", "Drama"],
  },
  {
    id: "169",
    title: "Predator 2",
    poster: "https://image.tmdb.org/t/p/w500/7OAAsKvYwEq23ppBSq8NfJ0iUuo.jpg",
    overview:
      "Ten years after a band of mercenaries first battled a vicious alien, the invisible creature from another world has returned to Earth—and this time, it’s drawn to the gang-ruled and ravaged city of Los Angeles. When it starts murdering drug dealers, detective-lieutenant Mike Harrigan and his police force set out to capture the creature, ignoring warnings from a mysterious government agent to stay away.",
    release_date: 659059200,
    genres: ["Science Fiction", "Action", "Thriller"],
  },
  {
    id: "87818",
    title: "Movie 43",
    poster: "https://image.tmdb.org/t/p/w500/uYa06GxHsCsELx9vOQ11vsT0Aa6.jpg",
    overview:
      "The film is composed of multiple comedy shorts presented through an overarching segment titled 'The Pitch', in which Charlie Wessler, a mad screenwriter, is attempting to pitch a script to film executive Griffin Schraeder. After revealing several of the stories in his script, Wessler becomes agitated when Schraeder dismisses his outrageous ideas, and he pulls a gun on him and forces him to listen to multiple other stories before making Schraeder consult his manager, Bob Mone, to purchase the film.",
    release_date: 1356998400,
    genres: ["Comedy"],
  },
  {
    id: "75656",
    title: "Now You See Me",
    poster: "https://image.tmdb.org/t/p/w500/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    overview:
      "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    release_date: 1369789200,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "559",
    title: "Spider-Man 3",
    poster: "https://image.tmdb.org/t/p/w500/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg",
    overview:
      "The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
    release_date: 1177981200,
    genres: [],
  },
  {
    id: "70981",
    title: "Prometheus",
    poster: "https://image.tmdb.org/t/p/w500/omy5CiDMQnGqQUEJ9gNLOGPZQFW.jpg",
    overview:
      "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    release_date: 1338339600,
    genres: [],
  },
  {
    id: "694",
    title: "The Shining",
    poster: "https://image.tmdb.org/t/p/w500/vJq1poTiRDFdLCSTCNrzQuPtnVz.jpg",
    overview:
      "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    release_date: 327805200,
    genres: ["Horror"],
  },
  {
    id: "11324",
    title: "Shutter Island",
    poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
    overview:
      "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
    release_date: 1266105600,
    genres: ["Drama", "Thriller", "Mystery"],
  },
  {
    id: "4011",
    title: "Beetlejuice",
    poster: "https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
    overview:
      "Thanks to an untimely demise via drowning, a young couple end up as poltergeists in their New England farmhouse, where they fail to meet the challenge of scaring away the insufferable new owners, who want to make drastic changes. In desperation, the undead newlyweds turn to an expert frightmeister, but he's got a diabolical agenda of his own.",
    release_date: 573091200,
    genres: ["Fantasy", "Comedy"],
  },
  {
    id: "8619",
    title: "Master and Commander: The Far Side of the World",
    poster: "https://image.tmdb.org/t/p/w500/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
    overview:
      "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
    release_date: 1068768000,
    genres: ["Adventure", "Drama", "War"],
  },
  {
    id: "11970",
    title: "Hercules",
    poster: "https://image.tmdb.org/t/p/w500/16JPL3c6ET7ibfO35WjjWxCaVmj.jpg",
    overview:
      "Bestowed with superhuman strength, a young mortal named Hercules sets out to prove himself a hero in the eyes of his father, the great god Zeus. Along with his friends Pegasus, a flying horse, and Phil, a personal trainer, Hercules is tricked by the hilarious, hotheaded villain Hades, who's plotting to take over Mount Olympus!",
    release_date: 866768400,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: "605",
    title: "The Matrix Revolutions",
    poster: "https://image.tmdb.org/t/p/w500/8IpEO76zc1GuHiFVE5aCEL03qJs.jpg",
    overview:
      "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
    release_date: 1067990400,
    genres: ["Documentary"],
  },
  {
    id: "240832",
    title: "Lucy",
    poster: "https://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    overview:
      "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    release_date: 1406250000,
    genres: ["Drama"],
  },
  {
    id: "772",
    title: "Home Alone 2: Lost in New York",
    poster: "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    overview:
      "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas eve.",
    release_date: 722131200,
    genres: ["Comedy", "Family", "Adventure", "Crime"],
  },
  {
    id: "10386",
    title: "The Iron Giant",
    poster: "https://image.tmdb.org/t/p/w500/kPwxXszZDhCShmb82tCjkV15XsV.jpg",
    overview:
      "In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
    release_date: 933901200,
    genres: ["Adventure", "Animation", "Family", "Science Fiction", "Comedy"],
  },
  {
    id: "454619",
    title: "Overboard",
    poster: "https://image.tmdb.org/t/p/w500/qauHzSQJdo9VYX4NKn9PdWnvXOV.jpg",
    overview:
      "A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee. A remake of the 1987 comedy.",
    release_date: 1525309200,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "457136",
    title: "Mary Queen of Scots",
    poster: "https://image.tmdb.org/t/p/w500/b5RMzLAyq5QW6GtN9sIeAEMLlBI.jpg",
    overview:
      "In 1561, Mary Stuart, widow of the King of France, returns to Scotland, reclaims her rightful throne and menaces the future of Queen Elizabeth I as ruler of England, because she has a legitimate claim to the English throne. Betrayals, rebellions, conspiracies and their own life choices imperil both Queens. They experience the bitter cost of power, until their tragic fate is finally fulfilled.",
    release_date: 1544140800,
    genres: [],
  },
  {
    id: "465914",
    title: "If Beale Street Could Talk",
    poster: "https://image.tmdb.org/t/p/w500/qhUIOTSi3kr4290tKrVyeriyvrv.jpg",
    overview:
      "After her fiance is falsely imprisoned, a pregnant African-American woman sets out to clear his name and prove his innocence.",
    release_date: 1543536000,
    genres: ["Documentary"],
  },
  {
    id: "115",
    title: "The Big Lebowski",
    poster: "https://image.tmdb.org/t/p/w500/d4J7GotCjvDJBAYayZBTc5nLbbP.jpg",
    overview:
      "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink white Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.",
    release_date: 889142400,
    genres: [],
  },
  {
    id: "640",
    title: "Catch Me If You Can",
    poster: "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    overview:
      "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
    release_date: 1040774400,
    genres: ["Action", "Comedy", "Drama"],
  },
  {
    id: "38757",
    title: "Tangled",
    poster: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    overview:
      "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
    release_date: 1265155200,
    genres: ["Action", "Adventure"],
  },
  {
    id: "36930",
    title: "Staying on Top",
    poster: "https://image.tmdb.org/t/p/w500/fsL2aZR9JJUZU2B03ZpPw7wd7Yu.jpg",
    overview:
      "Prolific low-budget filmmaker John Quinn (Hollywood Lives) wrote and directed this addition to the Playboy Eros Collection line of upscale softcore sex dramas. Holly Sampson stars as Kathrine Phillips, an advertising executive working her way up the corporate ladder. Refreshingly for this sort of film, she achieves her career goals through merit rather than sex, which is the method employed by her devious corporate rival Cindy (Angela Davies). Cindy is bedding one of Kathrine's hottest prospective clients in an underhanded attempt to advance her own position. Kathrine stays true to her principles, quitting her job in disgust and dumping Jake (Danny Pape), the philandering photographer whom she has been seeing, before planning her effective, yet admirably ethical revenge. Kathrine starts her own agency with a like-minded secretary, Tai (Sasha Rochelle), and soon works her way to the top in truly heroic fashion. Ava Lake, Mia, and Holly Hollywood co-star.",
    release_date: 1009843200,
    genres: ["Romance", "Drama"],
  },
  {
    id: "312221",
    title: "Creed",
    poster: "https://image.tmdb.org/t/p/w500/iBq4od6j1ZAvDVO7hwmHT2Xf2Bt.jpg",
    overview:
      "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    release_date: 1448409600,
    genres: ["Horror"],
  },
  {
    id: "840",
    title: "Close Encounters of the Third Kind",
    poster: "https://image.tmdb.org/t/p/w500/4zfedS25uMAhgm6YQhc9bhKHbLl.jpg",
    overview:
      "After an encounter with UFOs, a line worker feels undeniably drawn to an isolated area in the wilderness where something spectacular is about to happen.",
    release_date: 248486400,
    genres: ["Science Fiction", "Drama"],
  },
  {
    id: "11360",
    title: "Dumbo",
    poster: "https://image.tmdb.org/t/p/w500/hKDdllslMtsU9JixAv5HR9biXlp.jpg",
    overview:
      "Dumbo is a baby elephant born with oversized ears and a supreme lack of confidence. But thanks to his even more diminutive buddy -- Timothy the Mouse -- the pint-sized pachyderm learns to surmount all obstacles.",
    release_date: -889743600,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "22821",
    title: "The Boondock Saints II: All Saints Day",
    poster: "https://image.tmdb.org/t/p/w500/evpmr93ChS31RaCS5ZiNr6qUnMG.jpg",
    overview:
      "Skillfully framed by an unknown enemy for the murder of a priest, wanted vigilante MacManus brothers Murphy and Connor must come out of hiding on a sheep farm in Ireland to fight for justice in Boston.",
    release_date: 1259020800,
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    id: "658",
    title: "Goldfinger",
    poster: "https://image.tmdb.org/t/p/w500/aKNFzaqQgPzsGXnsMc4kJH5hFIV.jpg",
    overview:
      "Special agent 007 comes face to face with one of the most notorious villains of all time, and now he must outwit and outgun the powerful tycoon to prevent him from cashing in on a devious scheme to raid Fort Knox -- and obliterate the world's economy.",
    release_date: -166924800,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "562289",
    title: "De Pernas Pro Ar 3",
    poster: "https://image.tmdb.org/t/p/w500/7O75EXzA8sx6gTuCGEvYcG13MYq.jpg",
    overview: "",
    release_date: 1554944400,
    genres: ["Comedy"],
  },
  {
    id: "9334",
    title: "The Scorpion King",
    poster: "https://image.tmdb.org/t/p/w500/aITIsX20tACn6jgtyDcCYpRT216.jpg",
    overview:
      "In ancient Egypt, peasant Mathayus is hired to exact revenge on the powerful Memnon and the sorceress Cassandra, who are ready to overtake Balthazar's village. Amid betrayals, thieves, abductions and more, Mathayus strives to bring justice to his complicated world.",
    release_date: 1019091600,
    genres: ["Documentary", "History"],
  },
  {
    id: "602",
    title: "Independence Day",
    poster: "https://image.tmdb.org/t/p/w500/2e5t7edZcGcE7IQhr3hbdrJudUW.jpg",
    overview:
      "On July 2, a giant alien mothership enters orbit around Earth and deploys several dozen saucer-shaped 'destroyer' spacecraft that quickly lay waste to major cities around the planet. On July 3, the United States conducts a coordinated counterattack that fails. On July 4, a plan is devised to gain access to the interior of the alien mothership in space, in order to plant a nuclear missile.",
    release_date: 835664400,
    genres: ["Drama"],
  },
  {
    id: "168259",
    title: "Furious 7",
    poster: "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    overview:
      "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    release_date: 1427850000,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "364",
    title: "Batman Returns",
    poster: "https://image.tmdb.org/t/p/w500/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
    overview:
      "Having defeated the Joker, Batman now faces the Penguin - a warped and deformed individual who is intent on being accepted into Gotham society. Crooked businessman Max Schreck is coerced into helping him become Mayor of Gotham and they both attempt to expose Batman in a different light. Selina Kyle, Max's secretary, is thrown from the top of a building and is transformed into Catwoman - a mysterious figure who has the same personality disorder as Batman. Batman must attempt to clear his name, all the time deciding just what must be done with the Catwoman.",
    release_date: 708915600,
    genres: ["Action", "Fantasy"],
  },
  {
    id: "37724",
    title: "Skyfall",
    poster: "https://image.tmdb.org/t/p/w500/izrHg2UzxG3YXTBcKFaUbYp9LWA.jpg",
    overview:
      "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
    release_date: 1351126800,
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    id: "1370",
    title: "Rambo III",
    poster: "https://image.tmdb.org/t/p/w500/pTVm2HrqV5kOt8tG4ZURNuhrmAq.jpg",
    overview:
      "Combat has taken its toll on Rambo, but he's finally begun to find inner peace in a monastery. When Rambo's friend and mentor Col. Trautman asks for his help on a top secret mission to Afghanistan, Rambo declines but must reconsider when Trautman is captured.",
    release_date: 580438800,
    genres: ["Action", "Adventure", "Thriller", "War"],
  },
  {
    id: "449176",
    title: "Love, Simon",
    poster: "https://image.tmdb.org/t/p/w500/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
    overview:
      "Everyone deserves a great love story. But for seventeen-year old Simon Spier it's a little more complicated: he's yet to tell his family or friends he's gay and he doesn't know the identity of the anonymous classmate he's fallen for online.",
    release_date: 1518739200,
    genres: [],
  },
  {
    id: "75612",
    title: "Oblivion",
    poster: "https://image.tmdb.org/t/p/w500/2ncs7hqBsEjFMqt6Y7ShBCO9tWs.jpg",
    overview:
      "Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
    release_date: 1365555600,
    genres: [],
  },
  {
    id: "217993",
    title: "Justice League: War",
    poster: "https://image.tmdb.org/t/p/w500/eu6zEhpt9QVgZk8T4FJCwKCbJkq.jpg",
    overview:
      "The world is under attack by an alien armada led by the powerful Apokoliptian, Darkseid. A group of superheroes consisting of Superman, Batman, Wonder Woman, The Flash, Green Lantern, Cyborg, and Shazam must set aside their differences and gather together to defend Earth.",
    release_date: 1391299200,
    genres: ["Animation", "Action"],
  },
  {
    id: "769",
    title: "GoodFellas",
    poster: "https://image.tmdb.org/t/p/w500/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg",
    overview:
      "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    release_date: 653101200,
    genres: ["Drama", "Crime"],
  },
  {
    id: "124905",
    title: "Godzilla",
    poster: "https://image.tmdb.org/t/p/w500/iBZhbCVhLpyxAfW1B8ePUxjScrx.jpg",
    overview:
      "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
    release_date: 1400029200,
    genres: ["Science Fiction"],
  },
  {
    id: "100042",
    title: "Dumb and Dumber To",
    poster: "https://image.tmdb.org/t/p/w500/mktwkMjmoR83eXNakk0M2nh1cty.jpg",
    overview:
      "20 years after the dimwits set out on their first adventure, they head out in search of one of their long lost children in the hope of gaining a new kidney.",
    release_date: 1415750400,
    genres: ["Comedy"],
  },
  {
    id: "64688",
    title: "21 Jump Street",
    poster: "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    overview:
      "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
    release_date: 1331510400,
    genres: ["Action", "Comedy", "Crime"],
  },
  {
    id: "241554",
    title: "Run All Night",
    poster: "https://image.tmdb.org/t/p/w500/frzdzHceByAIlwVKvSvY9zqpjyV.jpg",
    overview:
      "Brooklyn mobster and prolific hit man Jimmy Conlon has seen better days. Longtime best friend of a mob boss, Jimmy is haunted by the sins of his past—as well as a dogged police detective who’s been one step behind Jimmy for 30 years. But when Jimmy’s estranged son becomes a target, Jimmy must make a choice between the crime family he chose and the real family he abandoned long ago. Now, with nowhere safe to turn, Jimmy has just one night to figure out exactly where his loyalties lie and to see if he can finally make things right.",
    release_date: 1426032000,
    genres: ["Action", "Drama", "Thriller"],
  },
  {
    id: "1452",
    title: "Superman Returns",
    poster: "https://image.tmdb.org/t/p/w500/qIegbn6DSUYmggfwxOBNOVS35q.jpg",
    overview:
      "Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.",
    release_date: 1151456400,
    genres: ["Science Fiction", "Action", "Adventure"],
  },
  {
    id: "166424",
    title: "Fantastic Four",
    poster: "https://image.tmdb.org/t/p/w500/oeMpEsjmiT9PEJbRM1Fm7TZ1dE0.jpg",
    overview:
      "Four young outsiders teleport to a dangerous universe, which alters their physical form in shocking ways. Their lives irrevocably upended, the team must learn to harness their daunting new abilities and work together to save Earth from a former friend turned enemy.",
    release_date: 1438736400,
    genres: [],
  },
  {
    id: "320288",
    title: "Dark Phoenix",
    poster: "https://image.tmdb.org/t/p/w500/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
    overview:
      "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    release_date: 1559696400,
    genres: ["Science Fiction", "Action", "Adventure"],
  },
  {
    id: "5548",
    title: "RoboCop",
    poster: "https://image.tmdb.org/t/p/w500/hHtOgGb3NihlyRATHlKPaFApbrd.jpg",
    overview:
      "In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
    release_date: 553482000,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "37165",
    title: "The Truman Show",
    poster: "https://image.tmdb.org/t/p/w500/dOmxN9xhLITi43j2xGFEcsgv7QM.jpg",
    overview:
      "Truman Burbank is the star of 'The Truman Show', a 24-hour-a-day 'reality' TV show that broadcasts every aspect of his life -- live and in color -- without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows -- including his wife and his best friend -- is really an actor, paid to be part of his life.",
    release_date: 896922000,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "537996",
    title: "The Ballad of Buster Scruggs",
    poster: "https://image.tmdb.org/t/p/w500/voxl654m7p36y8FLu8oQD7dfwwK.jpg",
    overview:
      "Vignettes weaving together the stories of six individuals in the old West at the end of the Civil War. Following the tales of a sharp-shooting songster, a wannabe bank robber, two weary traveling performers, a lone gold prospector, a woman traveling the West to an uncertain future, and a motley crew of strangers undertaking a carriage ride.",
    release_date: 1541721600,
    genres: ["Comedy", "Drama", "Western"],
  },
  {
    id: "9738",
    title: "Fantastic Four",
    poster: "https://image.tmdb.org/t/p/w500/8HLQLILZLhDQWO6JDpvY6XJLH75.jpg",
    overview:
      "During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these 'Fantastic Four' must now thwart the evil plans of Dr. Doom and save the world from certain destruction.",
    release_date: 1120006800,
    genres: [],
  },
  {
    id: "73",
    title: "American History X",
    poster: "https://image.tmdb.org/t/p/w500/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
    overview:
      "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    release_date: 909705600,
    genres: ["Drama"],
  },
  {
    id: "1573",
    title: "Die Hard 2",
    poster: "https://image.tmdb.org/t/p/w500/wUEizkONxPZmIWQ2lnMttW0suXH.jpg",
    overview:
      "Off-duty cop John McClane is gripped with a feeling of déjà vu when, on a snowy Christmas Eve in the nation’s capital, terrorists seize a major international airport, holding thousands of holiday travelers hostage. Renegade military commandos led by a murderous rogue officer plot to rescue a drug lord from justice and are prepared for every contingency except one: McClane’s smart-mouthed heroics.",
    release_date: 646880400,
    genres: ["Action", "Thriller"],
  },
  {
    id: "10527",
    title: "Madagascar: Escape 2 Africa",
    poster: "https://image.tmdb.org/t/p/w500/agRbLOHgN46TQO4YdKR462iR7To.jpg",
    overview:
      "Alex, Marty, and other zoo animals find a way to escape from Madagascar when the penguins reassemble a wrecked airplane. The precariously repaired craft stays airborne just long enough to make it to the African continent. There the New Yorkers encounter members of their own species for the first time. Africa proves to be a wild place, but Alex and company wonder if it is better than their Central Park home.",
    release_date: 1225324800,
    genres: ["Family", "Animation", "Comedy"],
  },
  {
    id: "691",
    title: "The Spy Who Loved Me",
    poster: "https://image.tmdb.org/t/p/w500/3ZxHKFxMYvAko680DsRgAZKWcLi.jpg",
    overview:
      "Russian and British submarines with nuclear missiles on board both vanish from sight without a trace. England and Russia both blame each other as James Bond tries to solve the riddle of the disappearing ships. But the KGB also has an agent on the case.",
    release_date: 237085200,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "10192",
    title: "Shrek Forever After",
    poster: "https://image.tmdb.org/t/p/w500/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg",
    overview:
      "A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
    release_date: 1273971600,
    genres: ["Comedy", "Adventure", "Fantasy", "Animation", "Family"],
  },
  {
    id: "10895",
    title: "Pinocchio",
    poster: "https://image.tmdb.org/t/p/w500/1nCzeRj75ygXIG8r63TbkfeqM9x.jpg",
    overview:
      "Lonely toymaker Geppetto has his wishes answered when the Blue Fairy arrives to bring his wooden puppet Pinocchio to life. Before becoming a real boy, however, Pinocchio must prove he's worthy as he sets off on an adventure with his whistling sidekick and conscience, Jiminy Cricket.",
    release_date: -942192000,
    genres: [],
  },
  {
    id: "500",
    title: "Reservoir Dogs",
    poster: "https://image.tmdb.org/t/p/w500/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg",
    overview:
      "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    release_date: 715395600,
    genres: ["Drama"],
  },
  {
    id: "257344",
    title: "Pixels",
    poster: "https://image.tmdb.org/t/p/w500/d26S5EfVXLNxRXqyFy1yyl3qRq3.jpg",
    overview:
      "Video game experts are recruited by the military to fight 1980s-era video game characters who've attacked New York.",
    release_date: 1437008400,
    genres: ["Science Fiction"],
  },
  {
    id: "270946",
    title: "Penguins of Madagascar",
    poster: "https://image.tmdb.org/t/p/w500/gbtwoYMWlG0HZe7sDaTOoijtXCu.jpg",
    overview:
      "Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it.",
    release_date: 1416614400,
    genres: ["Family", "Animation", "Adventure", "Comedy"],
  },
  {
    id: "214",
    title: "Saw III",
    poster: "https://image.tmdb.org/t/p/w500/dfl7ti4ataetiyoOg3SI0FA9KeP.jpg",
    overview:
      "Jigsaw has disappeared. Along with his new apprentice Amanda, the puppet-master behind the cruel, intricate games that have terrified a community and baffled police has once again eluded capture and vanished. While city detective scramble to locate him, Doctor Lynn Denlon and Jeff Reinhart are unaware that they are about to become the latest pawns on his vicious chessboard.",
    release_date: 1161910800,
    genres: ["Horror", "Thriller", "Crime"],
  },
  {
    id: "955",
    title: "Mission: Impossible II",
    poster: "https://image.tmdb.org/t/p/w500/l2uHFznAMEAgSV3YsT6uUGIsJQO.jpg",
    overview:
      "With computer genius Luther Stickell at his side and a beautiful thief on his mind, agent Ethan Hunt races across Australia and Spain to stop a former IMF agent from unleashing a genetically engineered biological weapon called Chimera. This mission, should Hunt choose to accept it, plunges him into the center of an international crisis of terrifying magnitude.",
    release_date: 959130000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "438808",
    title: "White Boy Rick",
    poster: "https://image.tmdb.org/t/p/w500/tIyqAObXHVHpJmbpun95d5iYlMx.jpg",
    overview:
      "The story of teenager, Richard Wershe Jr., who became an undercover informant for the police during the 1980s and was ultimately arrested for drug-trafficking and sentenced to life in prison.",
    release_date: 1536886800,
    genres: ["Crime", "Drama"],
  },
  {
    id: "950",
    title: "Ice Age: The Meltdown",
    poster: "https://image.tmdb.org/t/p/w500/hzJzd0OFRHjSykLuSmDG8ssPJAn.jpg",
    overview:
      "Diego, Manny and Sid return in this sequel to the hit animated movie Ice Age. This time around, the deep freeze is over, and the ice-covered earth is starting to melt, which will destroy the trio's cherished valley. The impending disaster prompts them to reunite and warn all the other beasts about the desperate situation.",
    release_date: 1143594000,
    genres: ["Animation", "Family", "Comedy", "Adventure"],
  },
  {
    id: "1894",
    title: "Star Wars: Episode II - Attack of the Clones",
    poster: "https://image.tmdb.org/t/p/w500/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    overview:
      "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
    release_date: 1021424400,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "10515",
    title: "Castle in the Sky",
    poster: "https://image.tmdb.org/t/p/w500/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    overview:
      "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    release_date: 523328400,
    genres: [
      "Adventure",
      "Fantasy",
      "Animation",
      "Action",
      "Family",
      "Romance",
    ],
  },
  {
    id: "390043",
    title: "The Hitman's Bodyguard",
    poster: "https://image.tmdb.org/t/p/w500/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
    overview:
      "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
    release_date: 1502845200,
    genres: ["Action", "Comedy"],
  },
  {
    id: "10528",
    title: "Sherlock Holmes",
    poster: "https://image.tmdb.org/t/p/w500/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    overview:
      "Eccentric consulting detective, Sherlock Holmes and Doctor John Watson battle to bring down a new nemesis and unravel a deadly plot that could destroy England.",
    release_date: 1261526400,
    genres: [],
  },
  {
    id: "398818",
    title: "Call Me by Your Name",
    poster: "https://image.tmdb.org/t/p/w500/tcNniniS4rfqrLH0oORikJfnIwY.jpg",
    overview:
      "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",
    release_date: 1504227600,
    genres: ["Drama", "Romance"],
  },
  {
    id: "36557",
    title: "Casino Royale",
    poster: "https://image.tmdb.org/t/p/w500/wmRTS3WrXRi8GJdpDae1NifYNwx.jpg",
    overview:
      "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond – on his maiden mission as a 00 Agent – to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
    release_date: 1163462400,
    genres: ["Adventure", "Action", "Comedy"],
  },
  {
    id: "50619",
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    poster: "https://image.tmdb.org/t/p/w500/dSSzv6JrlwS48pBeTNSswLJXOYF.jpg",
    overview:
      "The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world. Bella soon discovers she is pregnant, and during a nearly fatal childbirth, Edward finally fulfills her wish to become immortal. But the arrival of their remarkable daughter, Renesmee, sets in motion a perilous chain of events that pits the Cullens and their allies against the Volturi, the fearsome council of vampire leaders, setting the stage for an all-out battle.",
    release_date: 1300147200,
    genres: ["Adventure", "Fantasy", "Romance"],
  },
  {
    id: "527261",
    title: "The Silence",
    poster: "https://image.tmdb.org/t/p/w500/lTVOquzxw2DPF3MKuYd1ynz9F6H.jpg",
    overview:
      "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
    release_date: 1557968400,
    genres: [],
  },
  {
    id: "448095",
    title: "I Still See You",
    poster: "https://image.tmdb.org/t/p/w500/9fqzZs922V8OmwgO11Eqclof2mQ.jpg",
    overview:
      "A spellbinding and romantic supernatural thriller. Ten years after an apocalyptic event left the world haunted by ghosts, Roni receives a threatening message from beyond the grave. Joining forces with a mysterious classmate, Kirk, Roni descends into a shadow world that blurs the bounds of the living and the dead-and begins a desperate race against time to stop a cunning killer.",
    release_date: 1538010000,
    genres: ["Thriller", "Fantasy"],
  },
  {
    id: "787",
    title: "Mr. & Mrs. Smith",
    poster: "https://image.tmdb.org/t/p/w500/wzIO3ytxeSNt1wRpXLIdkNbGoDm.jpg",
    overview:
      "After five (or six) years of vanilla-wedded bliss, ordinary suburbanites John and Jane Smith are stuck in a huge rut. Unbeknownst to each other, they are both coolly lethal, highly-paid assassins working for rival organisations. When they discover they're each other's next target, their secret lives collide in a spicy, explosive mix of wicked comedy, pent-up passion, nonstop action and high-tech weaponry.",
    release_date: 1118106000,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "399174",
    title: "Isle of Dogs",
    poster: "https://image.tmdb.org/t/p/w500/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg",
    overview:
      "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
    release_date: 1521763200,
    genres: ["Crime", "Thriller", "Action"],
  },
  {
    id: "64690",
    title: "Drive",
    poster: "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    overview:
      "A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.",
    release_date: 1312592400,
    genres: ["Comedy", "Drama", "Crime"],
  },
  {
    id: "9718",
    title: "Talladega Nights: The Ballad of Ricky Bobby",
    poster: "https://image.tmdb.org/t/p/w500/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg",
    overview:
      "Lifelong friends and national idols Ricky Bobby and Cal Naughton Jr. have earned their NASCAR stripes with their uncanny knack of finishing races in the first and second slots, respectively, and slinging catchphrases like 'Shake and bake!' But when a rival French driver coasts onto the track to challenge their records, they'll have to floor it to retain their top-dog status.",
    release_date: 1154653200,
    genres: ["Comedy"],
  },
  {
    id: "118",
    title: "Charlie and the Chocolate Factory",
    poster: "https://image.tmdb.org/t/p/w500/wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg",
    overview:
      "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    release_date: 1121216400,
    genres: ["Adventure", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "296",
    title: "Terminator 3: Rise of the Machines",
    poster: "https://image.tmdb.org/t/p/w500/vvevzdYIrk2636maNW4qeWmlPFG.jpg",
    overview:
      "It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.",
    release_date: 1057107600,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "49049",
    title: "Dredd",
    poster: "https://image.tmdb.org/t/p/w500/wLx65gtGVnUFCxceHWGszcruCZj.jpg",
    overview:
      "In the future, America is a dystopian wasteland. The latest scourge is Ma-Ma, a prostitute-turned-drug pusher with a dangerous new drug and aims to take over the city. The only possibility of stopping her is an elite group of urban police called Judges, who combine the duties of judge, jury and executioner to deliver a brutal brand of swift justice. But even the top-ranking Judge, Dredd, discovers that taking down Ma-Ma isn’t as easy as it seems in this explosive adaptation of the hugely popular comic series.",
    release_date: 1346979600,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "252838",
    title: "The Wedding Ringer",
    poster: "https://image.tmdb.org/t/p/w500/lO1T66rjnM8Sdn1p6VV6AXKkfen.jpg",
    overview:
      "Doug Harris is a loveable but socially awkward groom-to-be with a problem: he has no best man.  With less than two weeks to go until he marries the girl of his dreams, Doug is referred to Jimmy Callahan, owner and CEO of Best Man, Inc., a company that provides flattering best men for socially challenged guys in need.  What ensues is a hilarious wedding charade as they try to pull off the big con, and an unexpected budding bromance between Doug and his fake\\n best man Jimmy.",
    release_date: 1421366400,
    genres: ["Comedy"],
  },
  {
    id: "578",
    title: "Jaws",
    poster: "https://image.tmdb.org/t/p/w500/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
    overview:
      "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
    release_date: 172281600,
    genres: ["Animation"],
  },
  {
    id: "22538",
    title: "Scott Pilgrim vs. the World",
    poster: "https://image.tmdb.org/t/p/w500/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg",
    overview:
      "Scott Pilgrim is a 23 year old radical Canadian gamer and wannabe rockstar who falls in love with an American delivery girl, Ramona Flowers, and must defeat her seven evil exes to be able to date her.",
    release_date: 1280192400,
    genres: ["Action", "Comedy", "Romance"],
  },
  {
    id: "426426",
    title: "Roma",
    poster: "https://image.tmdb.org/t/p/w500/kxZUWtJGbGqaUdXCYg2CTs8wyEc.jpg",
    overview:
      "In 1970s Mexico City, two domestic workers help a mother of four while her husband is away for an extended period of time.",
    release_date: 1535158800,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "171274",
    title: "Inherent Vice",
    poster: "https://image.tmdb.org/t/p/w500/7XhdTcivvkNcdAXrEijgh0Eoabb.jpg",
    overview:
      "In Los Angeles at the turn of the 1970s, drug-fueled detective Larry 'Doc' Sportello investigates the disappearance of an ex-girlfriend.",
    release_date: 1419465600,
    genres: ["Comedy", "Romance", "Crime", "Drama", "Mystery"],
  },
  {
    id: "420818",
    title: "The Lion King",
    poster: "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    overview:
      "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    release_date: 1563325200,
    genres: ["Animation"],
  },
  {
    id: "539",
    title: "Psycho",
    poster: "https://image.tmdb.org/t/p/w500/nR4LD4ZJg2n6LZQpcOrLFdMq0cD.jpg",
    overview:
      "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    release_date: -301190400,
    genres: ["Thriller"],
  },
  {
    id: "9502",
    title: "Kung Fu Panda",
    poster: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    overview:
      "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the 'chosen one' and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
    release_date: 1212541200,
    genres: ["Adventure", "Animation", "Action"],
  },
  {
    id: "273248",
    title: "The Hateful Eight",
    poster: "https://image.tmdb.org/t/p/w500/cB932BToOpAGGnYgbzXvyfoiEwM.jpg",
    overview:
      "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    release_date: 1451001600,
    genres: ["Crime", "Drama", "Mystery", "Western"],
  },
  {
    id: "490033",
    title: "Holiday",
    poster: "https://image.tmdb.org/t/p/w500/5NU063sVE2Y3zNg8isOIG5RSrDL.jpg",
    overview:
      "A love triangle featuring the trophy girlfriend of a petty drug lord, caught up in a web of luxury and violence in a modern dark gangster tale set in the beautiful port city of Bodrum on the Turkish Riviera.",
    release_date: 1539219600,
    genres: ["Drama", "Action", "Comedy", "Crime", "Romance", "Family"],
  },
  {
    id: "262504",
    title: "Allegiant",
    poster: "https://image.tmdb.org/t/p/w500/ecDWL1WvcAVxZOmoYxa6c1tuTCL.jpg",
    overview:
      "Beatrice Prior and Tobias Eaton venture into the world outside of the fence and are taken into protective custody by a mysterious agency known as the Bureau of Genetic Welfare.",
    release_date: 1457481600,
    genres: ["Adventure", "Science Fiction", "Action", "Mystery"],
  },
  {
    id: "440298",
    title: "Cold War",
    poster: "https://image.tmdb.org/t/p/w500/6rbS8oPIgUMhQgIX8oGVTtlNgLR.jpg",
    overview:
      "A man and a woman meet in the ruins of post-war Poland. With vastly different backgrounds and temperaments, they are fatally mismatched and yet drawn to each other.",
    release_date: 1528419600,
    genres: ["Animation"],
  },
  {
    id: "20526",
    title: "TRON: Legacy",
    poster: "https://image.tmdb.org/t/p/w500/vuifSABRpSnxCAOxEnWpNbZSXpp.jpg",
    overview:
      "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
    release_date: 1291939200,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "278154",
    title: "Ice Age: Collision Course",
    poster: "https://image.tmdb.org/t/p/w500/xczYhncwMnuX98AshyZHgPOFNCl.jpg",
    overview:
      "Set after the events of Continental Drift, Scrat's epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and embark on a quest full of thrills and spills, highs and lows, laughter and adventure while traveling to exotic new lands and encountering a host of colorful new characters.",
    release_date: 1466643600,
    genres: ["Adventure", "Animation", "Family", "Comedy"],
  },
  {
    id: "242582",
    title: "Nightcrawler",
    poster: "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    overview:
      "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    release_date: 1414026000,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "4258",
    title: "Scary Movie 5",
    poster: "https://image.tmdb.org/t/p/w500/2uXj7DCoSknaUzIHJ3F460Z7t24.jpg",
    overview:
      "Home with their newly-formed family, happy parents Dan and Jody are haunted by sinister, paranormal activities. Determined to expel the insidious force, they install security cameras and discover their family is being stalked by an evil dead demon.",
    release_date: 1365642000,
    genres: ["Comedy"],
  },
  {
    id: "73723",
    title: "The Lorax",
    poster: "https://image.tmdb.org/t/p/w500/tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
    overview:
      "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
    release_date: 1330560000,
    genres: ["Animation", "Family"],
  },
  {
    id: "249397",
    title: "Nymphomaniac: Vol. II",
    poster: "https://image.tmdb.org/t/p/w500/fYLbO4UpumgNHVnsyDQkXG87Q1k.jpg",
    overview:
      "The continuation of Joe's sexually dictated life delves into the darker aspects of her adult life and what led to her being in Seligman's care.",
    release_date: 1387929600,
    genres: ["Drama", "Mystery"],
  },
  {
    id: "192102",
    title: "3 Days to Kill",
    poster: "https://image.tmdb.org/t/p/w500/sliYPOgeUuf62qktgXbfMBmYvj1.jpg",
    overview:
      "A dangerous international spy is determined to give up his high stakes life to finally build a closer relationship with his estranged wife and daughter. But first, he must complete one last mission - even if it means juggling the two toughest assignments yet: hunting down the world's most ruthless terrorist and looking after his teenage daughter for the first time in ten years, while his wife is out of town.",
    release_date: 1392336000,
    genres: ["Action", "Drama", "Thriller", "Crime"],
  },
  {
    id: "56292",
    title: "Mission: Impossible - Ghost Protocol",
    poster: "https://image.tmdb.org/t/p/w500/7GCKNRbzcA4rJXAKoE8KS9IDnZP.jpg",
    overview:
      "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
    release_date: 1323216000,
    genres: ["Action", "Thriller", "Adventure"],
  },
  {
    id: "10681",
    title: "WALL·E",
    poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    overview:
      "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
    release_date: 1214096400,
    genres: ["Animation", "Family", "Science Fiction"],
  },
  {
    id: "1927",
    title: "Hulk",
    poster: "https://image.tmdb.org/t/p/w500/qnngKqAcqfH2pBxDoKu5lxzSbTo.jpg",
    overview:
      "Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.",
    release_date: 1055984400,
    genres: [],
  },
  {
    id: "13186",
    title: "Wrong Turn 2: Dead End",
    poster: "https://image.tmdb.org/t/p/w500/oPhLpWpVtmzLZFwnUqfsk3IYoRw.jpg",
    overview:
      "Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!",
    release_date: 1188003600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "10358",
    title: "Zack and Miri Make a Porno",
    poster: "https://image.tmdb.org/t/p/w500/40qxr2p2s297Q1mWFJOsRatQPK0.jpg",
    overview:
      "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.",
    release_date: 1221699600,
    genres: ["Comedy"],
  },
  {
    id: "458253",
    title: "Missing Link",
    poster: "https://image.tmdb.org/t/p/w500/gEkKHiiQRVUSX15Iwo8VFydXrtu.jpg",
    overview:
      "The charismatic Sir Lionel Frost considers himself to be the world's foremost investigator of myths and monsters. Trouble is, none of his small-minded, high-society peers seems to recognize this. Hoping to finally gain acceptance from these fellow adventurers, Sir Lionel travels to the Pacific Northwest to prove the existence of a legendary creature known as the missing link.",
    release_date: 1554339600,
    genres: ["Family", "Adventure"],
  },
  {
    id: "630",
    title: "The Wizard of Oz",
    poster: "https://image.tmdb.org/t/p/w500/pfAZFD7I2hxW9HCChTuAzsdE6UX.jpg",
    overview:
      "Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.",
    release_date: -958777200,
    genres: ["Family", "Fantasy", "Documentary", "Comedy", "Music"],
  },
  {
    id: "381284",
    title: "Hidden Figures",
    poster: "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
    overview:
      "The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson – brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history – the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
    release_date: 1481328000,
    genres: ["Drama", "History"],
  },
  {
    id: "429422",
    title: "Fonzo",
    poster: "https://image.tmdb.org/t/p/w500/75gDv38UgRtAukSxNXcjatyQmEa.jpg",
    overview:
      "Once a ruthless businessman and bootlegger who ruled Chicago with an iron fist, Alfonse Capone was the most infamous and feared gangster of American lore. At the age of 47, following nearly a decade of imprisonment, dementia rots Alfonse’s mind and his past becomes present as harrowing memories of his violent and brutal origins melt into his waking life",
    release_date: 1577750400,
    genres: ["Crime", "Drama"],
  },
  {
    id: "6637",
    title: "National Treasure: Book of Secrets",
    poster: "https://image.tmdb.org/t/p/w500/xxoIBbvmTj1ZttzV439jAvoovTw.jpg",
    overview:
      "Benjamin Franklin Gates and Dr. Abigail Chase re-team with Riley Poole and, now armed with a stack of long-lost pages from John Wilkes Booth’s diary, Ben must follow a clue left there to prove his ancestor’s innocence in the assassination of Abraham Lincoln.",
    release_date: 1197504000,
    genres: ["Action", "Adventure", "Mystery", "Thriller"],
  },
  {
    id: "10157",
    title: "Police Academy 2: Their First Assignment",
    poster: "https://image.tmdb.org/t/p/w500/cIyvBInW2aGms0zyV9Pgwp9UPJ4.jpg",
    overview:
      "Officer Carey Mahoney and his cohorts have finally graduated from the Police Academy and are about to hit the streets on their first assignment. Question is, are they ready to do battle with a band of graffiti-tagging terrorists? Time will tell, but don't sell short this cheerful band of doltish boys in blue.",
    release_date: 480816000,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "564",
    title: "The Mummy",
    poster: "https://image.tmdb.org/t/p/w500/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    overview:
      "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt. It has been over three thousand years since former High Priest Imhotep suffered a fate worse than death as a punishment for a forbidden love—along with a curse that guarantees eternal doom upon the world if he is ever awoken.",
    release_date: 924224400,
    genres: [],
  },
  {
    id: "77",
    title: "Memento",
    poster: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
    overview:
      "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
    release_date: 971226000,
    genres: ["Documentary"],
  },
  {
    id: "1091",
    title: "The Thing",
    poster: "https://image.tmdb.org/t/p/w500/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
    overview:
      "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
    release_date: 393814800,
    genres: ["Family"],
  },
  {
    id: "13967",
    title: "Miss Potter",
    poster: "https://image.tmdb.org/t/p/w500/zl6iIciTIAjQvBuGTKRZugZ5Hvy.jpg",
    overview:
      "The story of Beatrix Potter, the author of the beloved and best-selling children's book, 'The Tale of Peter Rabbit', and her struggle for love, happiness and success.",
    release_date: 1165104000,
    genres: ["Drama", "Family", "Romance"],
  },
  {
    id: "109451",
    title: "Cloudy with a Chance of Meatballs 2",
    poster: "https://image.tmdb.org/t/p/w500/tT2DN1tWk1zpCxqvaaNY8yP8Awn.jpg",
    overview:
      "After the disastrous food storm in the first film, Flint and his friends are forced to leave the town. Flint accepts the invitation from his idol Chester V to join The Live Corp Company, which has been tasked to clean the island, and where the best inventors in the world create technologies for the betterment of mankind. When Flint discovers that his machine still operates and now creates mutant food beasts like living pickles, hungry tacodiles, shrimpanzees and apple pie-thons, he and his friends must return to save the world.",
    release_date: 1380157200,
    genres: ["Animation", "Family", "Comedy"],
  },
  {
    id: "541560",
    title: "The Wind",
    poster: "https://image.tmdb.org/t/p/w500/kcfPHZHSQODLCWdkUVLYATNyEVo.jpg",
    overview:
      "A supernatural thriller set in the Western frontier of the late 1800s, The Wind stars Caitlin Gerard as a plains-woman driven mad by the harshness and isolation of the untamed land.",
    release_date: 1536541200,
    genres: [],
  },
  {
    id: "646",
    title: "Dr. No",
    poster: "https://image.tmdb.org/t/p/w500/E0J8HxoDFA8f9TS5c6e6thsszz.jpg",
    overview:
      "In the film that launched the James Bond saga, Agent 007 battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder, to confront a megalomaniacal villain in his massive island headquarters.",
    release_date: -228614400,
    genres: ["Comedy"],
  },
  {
    id: "297556",
    title: "Justice League: Throne of Atlantis",
    poster: "https://image.tmdb.org/t/p/w500/wjD6lr6vi9DIwwyDZaOjGpIbulu.jpg",
    overview:
      "After the events of Justice League: War, Ocean Master and Black Manta have declared a war against the surface in retaliation of the aftermath of Apokoliptian-tyrant Darkseid's planetary invasion. Queen Atlanna seeks out her other son, Ocean Master’s half-brother Arthur Curry, a half-human with aquatic powers with no knowledge of his Atlantean heritage, to restore balance.  Living with powers he doesn’t understand and seeing the danger around him, Curry takes steps to embrace his destiny, joining the Justice League, and with his new teammates he battles to save Earth from total destruction.",
    release_date: 1422316800,
    genres: ["Science Fiction", "Action", "Animation", "Adventure"],
  },
  {
    id: "19661",
    title: "Mirage",
    poster: "https://image.tmdb.org/t/p/w500/8nehdmAeBxExUt2J5x3BHU4VS7i.jpg",
    overview:
      "New York City. David Stillwell struggles to recover his memory before the people who are trying to kill him succeed. Who is he, who are they, and why is he surrounded by murder?",
    release_date: -131760000,
    genres: ["Horror"],
  },
  {
    id: "72197",
    title: "The Pirates! In an Adventure with Scientists!",
    poster: "https://image.tmdb.org/t/p/w500/gxQWAhT2Hpsid1aBQQmQyYP6brw.jpg",
    overview:
      "The luxuriantly bearded Pirate Captain is a boundlessly enthusiastic, if somewhat less-than-successful, terror of the High Seas. With a rag-tag crew at his side, and seemingly blind to the impossible odds stacked against him, the Captain has one dream: to beat his bitter rivals Black Bellamy and Cutlass Liz to the much coveted Pirate of the Year Award. It’s a quest that takes our heroes from the shores of exotic Blood Island to the foggy streets of Victorian London. Along the way they battle a diabolical queen and team up with a haplessly smitten young scientist, but never lose sight of what a pirate loves best: adventure!",
    release_date: 1331510400,
    genres: ["Animation", "Adventure", "Family", "Comedy"],
  },
  {
    id: "71668",
    title: "Piranha 3DD",
    poster: "https://image.tmdb.org/t/p/w500/mv2Ej9WPVWivNvtMTTxgb07c7N9.jpg",
    overview:
      "After the events at Lake Victoria, the prehistoric school of blood-thirsty piranhas make their way into swimming pools, plumbing, and a newly opened water park.",
    release_date: 1336698000,
    genres: ["Horror", "Thriller", "Comedy"],
  },
  {
    id: "11036",
    title: "The Notebook",
    poster: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    overview:
      "An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths.",
    release_date: 1088125200,
    genres: ["Drama", "War"],
  },
  {
    id: "670",
    title: "Oldboy",
    poster: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    overview:
      "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
    release_date: 1064710800,
    genres: ["Drama", "Thriller", "Mystery", "Action"],
  },
  {
    id: "535736",
    title: "DreadOut",
    poster: "https://image.tmdb.org/t/p/w500/4uwxfZBJzk7d1xsbRFgG92R7JtW.jpg",
    overview:
      "Based on a terrifying local survival horror video game, a group of students enter an abandoned building for popularity but end up discovering a mystic portal to the land of the dead.",
    release_date: 1546473600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "68735",
    title: "Warcraft",
    poster: "https://image.tmdb.org/t/p/w500/k3a41SS1q5xmbvzPvzTIfG7GDlp.jpg",
    overview:
      "The peaceful realm of Azeroth stands on the brink of war as its civilization faces a fearsome race of invaders: orc warriors fleeing their dying home to colonize another. As a portal opens to connect the two worlds, one army faces destruction and the other faces extinction. From opposing sides, two heroes are set on a collision course that will decide the fate of their family, their people, and their home.",
    release_date: 1464138000,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "400579",
    title: "Tully",
    poster: "https://image.tmdb.org/t/p/w500/wDI4YXBXolMYi15Qx2kClvdSERM.jpg",
    overview:
      "Marlo, a mother of three including a newborn, is gifted a night nanny by her brother. Hesitant to the extravagance at first, Marlo comes to form a bond with the thoughtful, surprising, and sometimes challenging nanny named Tully.",
    release_date: 1525395600,
    genres: ["Drama"],
  },
  {
    id: "668",
    title: "On Her Majesty's Secret Service",
    poster: "https://image.tmdb.org/t/p/w500/pMOZWDBtvocTVGNIgQZbxn6byyw.jpg",
    overview:
      "James Bond tracks his archnemesis, Ernst Blofeld, to a mountaintop retreat where he is training an army of beautiful, lethal women. Along the way, Bond falls for Italian contessa Tracy Draco, and marries her in order to get closer to Blofeld.",
    release_date: -1728000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "10545",
    title: "The Hunchback of Notre Dame",
    poster: "https://image.tmdb.org/t/p/w500/7k0fr2xLCTChjN8MnGNThTP9uEB.jpg",
    overview:
      "When Quasimodo defies the evil Frollo and ventures out to the Festival of Fools, the cruel crowd jeers him. Rescued by fellow outcast the gypsy Esmeralda, Quasi soon finds himself battling to save the people and the city he loves.",
    release_date: 835318800,
    genres: [],
  },
  {
    id: "107",
    title: "Snatch",
    poster: "https://image.tmdb.org/t/p/w500/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
    overview:
      "The second film from British director Guy Ritchie. Snatch tells an obscure story similar to his first fast-paced crazy character-colliding filled film “Lock, Stock and Two Smoking Barrels.” There are two overlapping stories here – one is the search for a stolen diamond, and the other about a boxing promoter who’s having trouble with a psychotic gangster.",
    release_date: 967770000,
    genres: ["Thriller", "Crime"],
  },
  {
    id: "861",
    title: "Total Recall",
    poster: "https://image.tmdb.org/t/p/w500/wVbeL6fkbTKSmNfalj4VoAUUqJv.jpg",
    overview:
      "Construction worker Douglas Quaid discovers a memory chip in his brain during a virtual-reality trip. He also finds that his past has been invented to conceal a plot of planetary domination. Soon, he's off to Mars to find out who he is and who planted the chip.",
    release_date: 644202000,
    genres: [],
  },
  {
    id: "43074",
    title: "Ghostbusters",
    poster: "https://image.tmdb.org/t/p/w500/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
    overview:
      "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
    release_date: 1468458000,
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "10340",
    title: "Lady and the Tramp",
    poster: "https://image.tmdb.org/t/p/w500/wXKeGea4htM7Yz3yo7hYXbs3FhV.jpg",
    overview:
      "Lady, a golden cocker spaniel, meets up with a mongrel dog who calls himself the Tramp. He is obviously from the wrong side of town, but happenings at Lady's home make her decide to travel with him for a while.",
    release_date: -459043200,
    genres: ["Family", "Animation"],
  },
  {
    id: "193893",
    title: "Let's Be Cops",
    poster: "https://image.tmdb.org/t/p/w500/pf4FoUr2phn5WyZjU7rLXSiW1Ve.jpg",
    overview:
      "It's the ultimate buddy cop movie except for one thing: they're not cops.  When two struggling pals dress as police officers for a costume party, they become neighborhood sensations.  But when these newly-minted “heroes” get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.",
    release_date: 1407891600,
    genres: [],
  },
  {
    id: "1417",
    title: "Pan's Labyrinth",
    poster: "https://image.tmdb.org/t/p/w500/hyZ8srM2hmrtDhw1ED9Ny9r0AKW.jpg",
    overview:
      "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks.",
    release_date: 1156467600,
    genres: ["Fantasy", "Drama", "War"],
  },
  {
    id: "116745",
    title: "The Secret Life of Walter Mitty",
    poster: "https://image.tmdb.org/t/p/w500/g7UNoP2rEEP4y6Xzo3EEslqdxo3.jpg",
    overview:
      "A timid magazine photo manager who lives life vicariously through daydreams embarks on a true-life adventure when a negative goes missing.",
    release_date: 1387324800,
    genres: ["Comedy", "Fantasy", "Romance"],
  },
  {
    id: "163",
    title: "Ocean's Twelve",
    poster: "https://image.tmdb.org/t/p/w500/4y8WH1lIpXp0qxUWkYmObhuMRIU.jpg",
    overview:
      "Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam – but a Europol agent is hot on their heels.",
    release_date: 1102550400,
    genres: ["Thriller", "Crime"],
  },
  {
    id: "128",
    title: "Princess Mononoke",
    poster: "https://image.tmdb.org/t/p/w500/pdtzEreKvKAlqa2YEBaGwiA45V8.jpg",
    overview:
      "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    release_date: 868669200,
    genres: ["Documentary"],
  },
  {
    id: "194",
    title: "Amélie",
    poster: "https://image.tmdb.org/t/p/w500/slVnvaH6fpF22154vnjQJdXCVZd.jpg",
    overview:
      "At a tiny Parisian café, the adorable yet painfully shy Amélie (Audrey Tautou) accidentally discovers a gift for helping others. Soon Amelie is spending her days as a matchmaker, guardian angel, and all-around do-gooder. But when she bumps into a handsome stranger, will she find the courage to become the star of her very own love story?",
    release_date: 988160400,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "551027",
    title: "Ave Maryam",
    poster: "https://image.tmdb.org/t/p/w500/yXLUSNRDXcblemYBw97NgYp5bqU.jpg",
    overview:
      "Sister Maryam spends her days taking care of the residents in a home for elderly nuns. Maryam finds herself forced to make a choice between staying true to her vow or abandoning everything for the pursuit of personal happiness.",
    release_date: 1554944400,
    genres: ["Drama"],
  },
  {
    id: "76163",
    title: "The Expendables 2",
    poster: "https://image.tmdb.org/t/p/w500/5kdnOxTei0Cgbi6pryFPZoX9apS.jpg",
    overview:
      "Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.",
    release_date: 1344387600,
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    id: "1734",
    title: "The Mummy Returns",
    poster: "https://image.tmdb.org/t/p/w500/kdJsW7hcy1lrj7tdMPycTAQPAiR.jpg",
    overview:
      "Rick and Evelyn O’Connell, along with their 8-year-old son Alex, discover the key to the legendary Scorpion King’s might: the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn’t above kidnapping its new bearer, Alex, to gain control of Anubis’s otherworldly army.",
    release_date: 988938000,
    genres: ["Adventure", "Action", "Fantasy"],
  },
  {
    id: "571346",
    title: "American Kamasutra",
    poster: "https://image.tmdb.org/t/p/w500/6PlW27Cnaa6mtKeDxZPPBStfRiH.jpg",
    overview:
      "A young woman finds herself involved in a dangerous love triangle when she gets involved with the writer of a popular steamy novel.",
    release_date: 1544659200,
    genres: ["Drama", "Romance"],
  },
  {
    id: "346672",
    title: "Underworld: Blood Wars",
    poster: "https://image.tmdb.org/t/p/w500/sDupSRbqxJhSrjKQI33w7Fd8Owz.jpg",
    overview:
      "Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
    release_date: 1479945600,
    genres: ["Action", "Fantasy", "Horror", "Drama"],
  },
  {
    id: "265208",
    title: "Wild Card",
    poster: "https://image.tmdb.org/t/p/w500/aHoA79UCj5b4I2v23XTVxAGLzRc.jpg",
    overview:
      "When a Las Vegas bodyguard with lethal skills and a gambling problem gets in trouble with the mob, he has one last play… and it's all or nothing.",
    release_date: 1421193600,
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    id: "401478",
    title: "Death Race: Beyond Anarchy",
    poster: "https://image.tmdb.org/t/p/w500/1PrlKvPUbDQAqFQBCyyt68hLLl.jpg",
    overview:
      "Black Ops specialist Connor Gibson infiltrates a maximum security prison to take down legendary driver Frankenstein in a violent and brutal car race.",
    release_date: 1517270400,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "1562",
    title: "28 Weeks Later",
    poster: "https://image.tmdb.org/t/p/w500/d7vvXpS5TG14gyZ2CZzJoxmGgVN.jpg",
    overview:
      "In this chilling sequel to 28 Days Later, the inhabitants of the British Isles appear to have lost their battle against the onslaught of disease, as the deadly rage virus has killed every citizen there. Six months later, a group of Americans dare to set foot on the isles, convinced the danger has come and gone. But it soon becomes all too clear that the scourge continues to live, waiting to pounce on its next victims.",
    release_date: 1177549200,
    genres: ["Horror"],
  },
  {
    id: "24418",
    title: "Cirque du Freak: The Vampire's Assistant",
    poster: "https://image.tmdb.org/t/p/w500/3Z2f50SKyHMWLLFH8OsV6hFoKLF.jpg",
    overview:
      "Darren Shan is a regular teenage kid. He and his friend Steve find out about a Freak Show coming to town and work hard at trying to find tickets. They do, and together they go to 'Cirque du Freak' where they see many strange acts including a wolf-man and a bearded lady",
    release_date: 1256259600,
    genres: ["Adventure", "Fantasy", "Action", "Thriller"],
  },
  {
    id: "131634",
    title: "The Hunger Games: Mockingjay - Part 2",
    poster: "https://image.tmdb.org/t/p/w500/lImKHDfExAulp16grYm8zD5eONE.jpg",
    overview:
      "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
    release_date: 1447804800,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "270303",
    title: "It Follows",
    poster: "https://image.tmdb.org/t/p/w500/x2dcGp1RNYsVY2n6GeFraBLeibv.jpg",
    overview:
      "For 19-year-old Jay, fall should be about school, boys and weekends out at the lake. But a seemingly innocent physical encounter turns sour and gives her the inescapable sense that someone, or something, is following her. Faced with this burden, Jay and her teenage friends must find a way to escape the horror that seems to be only a few steps behind.",
    release_date: 1415836800,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "817",
    title: "Austin Powers: The Spy Who Shagged Me",
    poster: "https://image.tmdb.org/t/p/w500/f2ohIBEbc3eERyU5pgSknm8DqUj.jpg",
    overview:
      "When diabolical genius, Dr. Evil travels back in time to steal superspy Austin Powers's ‘mojo’, Austin must return to the swingin' '60s himself – with the help of American agent, Felicity Shagwell – to stop the dastardly plan. Once there, Austin faces off against Dr. Evil's army of minions and saves the world in his own unbelievably groovy way.",
    release_date: 928803600,
    genres: ["Adventure", "Comedy", "Crime", "Science Fiction"],
  },
  {
    id: "9487",
    title: "A Bug's Life",
    poster: "https://image.tmdb.org/t/p/w500/kHgWI1AbYnYPZrUl5DCwzq9tyB2.jpg",
    overview:
      "On behalf of 'oppressed bugs everywhere,' an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.",
    release_date: 911952000,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "2105",
    title: "American Pie",
    poster: "https://image.tmdb.org/t/p/w500/5P68by2Thn8wHAziyWGEw2O7hco.jpg",
    overview:
      "At a high-school party, four friends find that losing their collective virginity isn't as easy as they had thought. But they still believe that they need to do so before college. To motivate themselves, they enter a pact to all 'score.' by their senior prom.",
    release_date: 931482000,
    genres: [],
  },
  {
    id: "9880",
    title: "The Princess Diaries",
    poster: "https://image.tmdb.org/t/p/w500/wA4lgl8gmoICSShviCkEB61nIBB.jpg",
    overview:
      "A socially awkward but very bright 15-year-old girl being raised by a single mom discovers that she is the princess of a small European country because of the recent death of her long-absent father, who, unknown to her, was the crown prince of Genovia. She must make a choice between continuing the life of a San Francisco teen or stepping up to the throne.",
    release_date: 996800400,
    genres: ["Comedy", "Family", "Romance"],
  },
  {
    id: "268",
    title: "Batman",
    poster: "https://image.tmdb.org/t/p/w500/tDexQyu6FWltcd0VhEDK7uib42f.jpg",
    overview:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    release_date: 614566800,
    genres: ["Family", "Adventure", "Comedy", "Science Fiction", "Crime"],
  },
  {
    id: "515042",
    title: "Free Solo",
    poster: "https://image.tmdb.org/t/p/w500/v4QfYZMACODlWul9doN9RxE99ag.jpg",
    overview:
      "Follow Alex Honnold as he attempts to become the first person to ever free solo climb Yosemite's 3,000 foot high El Capitan wall. With no ropes or safety gear, this would arguably be the greatest feat in rock climbing history.",
    release_date: 1539306000,
    genres: ["Documentary"],
  },
  {
    id: "188222",
    title: "Entourage",
    poster: "https://image.tmdb.org/t/p/w500/y8zMue7ibjg7vXma6XE5tkQ3KiS.jpg",
    overview:
      "Movie star Vincent Chase, together with his boys, Eric, Turtle and Johnny, are back…and back in business with super agent-turned-studio head Ari Gold. Some of their ambitions have changed, but the bond between them remains strong as they navigate the capricious and often cutthroat world of Hollywood.",
    release_date: 1433293200,
    genres: ["Comedy"],
  },
  {
    id: "420814",
    title: "Christopher Robin",
    poster: "https://image.tmdb.org/t/p/w500/i6Ytex4d3CdfIKJFxB5v5vh24vb.jpg",
    overview:
      "Christopher Robin, the boy who had countless adventures in the Hundred Acre Wood, has grown up and lost his way. Now it’s up to his spirited and loveable stuffed animals, Winnie The Pooh, Tigger, Piglet, and the rest of the gang, to rekindle their friendship and remind him of endless days of childlike wonder and make-believe, when doing nothing was the very best something.",
    release_date: 1533171600,
    genres: ["Adventure", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "19913",
    title: "(500) Days of Summer",
    poster: "https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg",
    overview:
      "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
    release_date: 1247792400,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "140300",
    title: "Kung Fu Panda 3",
    poster: "https://image.tmdb.org/t/p/w500/nlr2oxuYsHXt0wdtmzaOuVBoNC0.jpg",
    overview:
      "Continuing his 'legendary adventures of awesomeness', Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.",
    release_date: 1453507200,
    genres: ["Action", "Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "72545",
    title: "Journey 2: The Mysterious Island",
    poster: "https://image.tmdb.org/t/p/w500/hLZHJjsZ83Wfn3MRteNb6ew0WC7.jpg",
    overview:
      "Sean Anderson partners with his mom's boyfriend on a mission to find his grandfather, who is thought to be missing on a mythical island.",
    release_date: 1326931200,
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    id: "278927",
    title: "The Jungle Book",
    poster: "https://image.tmdb.org/t/p/w500/tOEOlmLP71IojeJ91dyJ9Nsb8O8.jpg",
    overview:
      "A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.",
    release_date: 1459990800,
    genres: [],
  },
  {
    id: "7451",
    title: "xXx",
    poster: "https://image.tmdb.org/t/p/w500/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
    overview:
      "Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government 'recruits' him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.",
    release_date: 1028854800,
    genres: [],
  },
  {
    id: "813",
    title: "Airplane!",
    poster: "https://image.tmdb.org/t/p/w500/hiURvJjCgk0s10urHVCg80TFF11.jpg",
    overview:
      "Alcoholic pilot, Ted Striker has developed a fear of flying due to wartime trauma, but nevertheless boards a passenger jet in an attempt to woo back his stewardess girlfriend. Food poisoning decimates the passengers and crew, leaving it up to Striker to land the plane with the help of a glue-sniffing air traffic controller and Striker's vengeful former Air Force captain, who must both talk him down.",
    release_date: 331347600,
    genres: ["Comedy"],
  },
  {
    id: "472451",
    title: "Boy Erased",
    poster: "https://image.tmdb.org/t/p/w500/oZbhTdi0ZQY7iiSQ0L7h3ya6NDF.jpg",
    overview:
      "Jared, the son of a Baptist pastor in a small American town, is outed to his parents at age 19. Jared is faced with an ultimatum: attend a gay conversion therapy program – or be permanently exiled and shunned by his family, friends, and faith.",
    release_date: 1537750800,
    genres: ["Drama"],
  },
  {
    id: "533",
    title: "Wallace & Gromit: The Curse of the Were-Rabbit",
    poster: "https://image.tmdb.org/t/p/w500/cMQ2lNd7sBe6PCf6zF5QxrKzbRG.jpg",
    overview:
      "Cheese-loving eccentric Wallace and his cunning canine pal, Gromit, investigate a mystery in Nick Park's animated adventure, in which the lovable inventor and his intrepid pup run a business ridding the town of garden pests. Using only humane methods that turn their home into a halfway house for evicted vermin, the pair stumble upon a mystery involving a voracious vegetarian monster that threatens to ruin the annual veggie-growing contest.",
    release_date: 1125795600,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "133805",
    title: "Carrie",
    poster: "https://image.tmdb.org/t/p/w500/kloXz9qwO23z9Kbt3z3MgnjF4xO.jpg",
    overview:
      "A reimagining of the classic horror tale about Carrie White, a shy girl outcast by her peers and sheltered by her deeply religious mother, who unleashes telekinetic terror on her small town after being pushed too far at her senior prom.",
    release_date: 1381885200,
    genres: ["Music"],
  },
  {
    id: "314095",
    title: "The Lost City of Z",
    poster: "https://image.tmdb.org/t/p/w500/ik3ebv7J18fs6cHkmu91oxz7EGt.jpg",
    overview:
      "A true-life drama in the 1920s, centering on British explorer Col. Percy Fawcett, who discovered evidence of a previously unknown, advanced civilazation in the Amazon and disappeared whilst searching for it.",
    release_date: 1489536000,
    genres: ["Adventure", "Drama", "History", "Action"],
  },
  {
    id: "253",
    title: "Live and Let Die",
    poster: "https://image.tmdb.org/t/p/w500/4i88LrZEaQ8iJohlw6BBx3ypX5q.jpg",
    overview:
      "James Bond must investigate a mysterious murder case of a British agent in New Orleans. Soon he finds himself up against a gangster boss named Mr. Big.",
    release_date: 110678400,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "707",
    title: "A View to a Kill",
    poster: "https://image.tmdb.org/t/p/w500/arJF829RP9cYvh0NU70dC5TtXSa.jpg",
    overview:
      "A newly developed microchip designed by Zorin Industries for the British Government that can survive the electromagnetic radiation caused by a nuclear explosion has landed in the hands of the KGB. James Bond must find out how and why. His suspicions soon lead him to big industry leader Max Zorin.",
    release_date: 485744400,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "11130",
    title: "The Princess Diaries 2: Royal Engagement",
    poster: "https://image.tmdb.org/t/p/w500/zhCXNZx01acjrq677cVmNs0qRIu.jpg",
    overview:
      "Mia Thermopolis is now a college graduate and on her way to Genovia to take up her duties as princess. Her best friend Lilly also joins her for the summer. Mia continues her 'princess lessons'- riding horses side-saddle, archery, and other royal. But her complicated life is turned upside down once again when she not only learns that she is to take the crown as queen earlier than expected...",
    release_date: 1091754000,
    genres: ["Comedy", "Drama", "Family", "Romance"],
  },
  {
    id: "28",
    title: "Apocalypse Now",
    poster: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
    overview:
      "At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, 'does not exist, nor will it ever exist.' His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.",
    release_date: 303526800,
    genres: ["Fantasy"],
  },
  {
    id: "8871",
    title: "How the Grinch Stole Christmas",
    poster: "https://image.tmdb.org/t/p/w500/1WZbbPApEivA421gCOluuzMMKCk.jpg",
    overview:
      "Inside a snowflake exists the magical land of Whoville. In Whoville, live the Whos, an almost mutated sort of Munchkin-like people. All the Whos love Christmas, yet just outside of their beloved Whoville lives the Grinch. The Grinch is a nasty creature that hates Christmas, and plots to steal it away from the Whos, whom he equally abhors. Yet a small child, Cindy Lou Who, decides to try befriending the Grinch.",
    release_date: 974419200,
    genres: ["Family", "Comedy", "Fantasy"],
  },
  {
    id: "64682",
    title: "The Great Gatsby",
    poster: "https://image.tmdb.org/t/p/w500/nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg",
    overview:
      "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
    release_date: 1368147600,
    genres: [],
  },
  {
    id: "1271",
    title: "300",
    poster: "https://image.tmdb.org/t/p/w500/lGv19gokQvgC7jgjWqapIachnxU.jpg",
    overview:
      "Based on Frank Miller's graphic novel, '300' is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
    release_date: 1173225600,
    genres: ["Comedy", "Drama", "Fantasy"],
  },
  {
    id: "49519",
    title: "The Croods",
    poster: "https://image.tmdb.org/t/p/w500/27zvjVOtOi5ped1HSlJKNsKXkFH.jpg",
    overview:
      "The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever.",
    release_date: 1363737600,
    genres: ["Animation", "Adventure", "Family"],
  },
  {
    id: "1892",
    title: "Return of the Jedi",
    poster: "https://image.tmdb.org/t/p/w500/mDCBQNhR6R0PVFucJl0O4Hp5klZ.jpg",
    overview:
      "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
    release_date: 422499600,
    genres: [],
  },
  {
    id: "81003",
    title: "Kung Fu Panda: Secrets of the Masters",
    poster: "https://image.tmdb.org/t/p/w500/4DlsFecqDZPEgDPWIW45DiFIOit.jpg",
    overview:
      "Po and the Furious Five uncover the legend of three of kung fu's greatest heroes: Master Thundering Rhino, Master Storming Ox, and Master Croc.",
    release_date: 1323648000,
    genres: ["Animation", "Action"],
  },
  {
    id: "10661",
    title: "You Don't Mess with the Zohan",
    poster: "https://image.tmdb.org/t/p/w500/gBhLQmpCPoKFMCGsulMbIFzrBID.jpg",
    overview:
      "An Israeli counterterrorism soldier with a secretly fabulous ambition to become a Manhattan hairstylist. Zohan's desire runs so deep that he'll do anything -- including faking his own death and going head-to-head with an Arab cab driver -- to make his dreams come true.",
    release_date: 1212627600,
    genres: ["Comedy", "Action"],
  },
  {
    id: "49018",
    title: "Insidious",
    poster: "https://image.tmdb.org/t/p/w500/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg",
    overview:
      "A family discovers that dark spirits have invaded their home after their son inexplicably falls into an endless sleep. When they reach out to a professional for help, they learn things are a lot more personal than they thought.",
    release_date: 1284339600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "445793",
    title: "Husband & Wife",
    poster: "https://image.tmdb.org/t/p/w500/pu2Ogkz1zrObFX8MGTaPqwfUq2V.jpg",
    overview:
      "Married for ten years, in full crisis, thinking about divorce. But following a failed scientific experiment, they suddenly find one inside the body of the other.",
    release_date: 1492045200,
    genres: ["Comedy"],
  },
  {
    id: "215",
    title: "Saw II",
    poster: "https://image.tmdb.org/t/p/w500/gTnaTysN8HsvVQqTRUh8m35mmUA.jpg",
    overview:
      "When a new murder victim is discovered with all the signs of Jigsaw's hand, Detective Eric Matthews begins a full investigation and apprehends Jigsaw with little effort. But for Jigsaw, getting caught is just another part of his plan. Eight more of his victims are already fighting for their lives and now it's time for Matthews to join the game...",
    release_date: 1130461200,
    genres: ["Horror"],
  },
  {
    id: "652",
    title: "Troy",
    poster: "https://image.tmdb.org/t/p/w500/zda0VWRKHnUSX7B7NOPqVUlu9zK.jpg",
    overview:
      "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.",
    release_date: 1083546000,
    genres: ["Adventure", "History"],
  },
  {
    id: "75780",
    title: "Jack Reacher",
    poster: "https://image.tmdb.org/t/p/w500/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg",
    overview:
      "When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note: 'Get Jack Reacher!' So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.",
    release_date: 1355961600,
    genres: ["Crime", "Drama", "Thriller", "Action"],
  },
  {
    id: "949",
    title: "Heat",
    poster: "https://image.tmdb.org/t/p/w500/obpPQskaVpSiC9RcJRB6iWDTCXS.jpg",
    overview:
      "Obsessive master thief, Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective, Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
    release_date: 818985600,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "134",
    title: "O Brother, Where Art Thou?",
    poster: "https://image.tmdb.org/t/p/w500/2YztYilviFCYcEtDAnrOstUWGie.jpg",
    overview:
      "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.",
    release_date: 967597200,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "76285",
    title: "Percy Jackson: Sea of Monsters",
    poster: "https://image.tmdb.org/t/p/w500/y4j0oCo6v6G3GKCumMjy4QdFlmR.jpg",
    overview:
      "In their quest to confront the ultimate evil, Percy and his friends battle swarms of mythical creatures to find the mythical Golden Fleece and to stop an ancient evil from rising.",
    release_date: 1375837200,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "4951",
    title: "10 Things I Hate About You",
    poster: "https://image.tmdb.org/t/p/w500/ujERk3aKABXU3NDXOAxEQYTHe9A.jpg",
    overview:
      "On the first day at his new school, Cameron instantly falls for Bianca, the gorgeous girl of his dreams. The only problem is that Bianca is forbidden to date until her ill-tempered, completely un-dateable older sister Kat goes out, too. In an attempt to solve his problem, Cameron singles out the only guy who could possibly be a match for Kat: a mysterious bad boy with a nasty reputation of his own.",
    release_date: 922755600,
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    id: "296098",
    title: "Bridge of Spies",
    poster: "https://image.tmdb.org/t/p/w500/1pNAmSWKLosPyuVqh0zx43Pzqh5.jpg",
    overview:
      "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.",
    release_date: 1444870800,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "5336",
    title: "Salò, or the 120 Days of Sodom",
    poster: "https://image.tmdb.org/t/p/w500/xnaDdiRfZlJaTf6JRc4in40eaeI.jpg",
    overview:
      "Four corrupted fascist libertines round up 9 teenage boys and girls and subject them to 120 days of sadistic physical, mental and sexual torture.",
    release_date: 185846400,
    genres: ["Documentary"],
  },
  {
    id: "161",
    title: "Ocean's Eleven",
    poster: "https://image.tmdb.org/t/p/w500/v5D7K4EHuQHFSjveq8LGxdSfrGS.jpg",
    overview:
      "Less than 24 hours into his parole, charismatic thief Danny Ocean is already rolling out his next plan: In one night, Danny's hand-picked crew of specialists will attempt to steal more than $150 million from three Las Vegas casinos. But to score the cash, Danny risks his chances of reconciling with ex-wife, Tess.",
    release_date: 1007683200,
    genres: ["Thriller", "Music", "Comedy", "Crime"],
  },
  {
    id: "341174",
    title: "Fifty Shades Darker",
    poster: "https://image.tmdb.org/t/p/w500/y8SDjMI2uejj2e2NaAmiI9dnPki.jpg",
    overview:
      "When a wounded Christian Grey tries to entice a cautious Ana Steele back into his life, she demands a new arrangement before she will give him another chance. As the two begin to build trust and find stability, shadowy figures from Christian’s past start to circle the couple, determined to destroy their hopes for a future together.",
    release_date: 1486512000,
    genres: ["Drama", "Romance"],
  },
  {
    id: "1265",
    title: "Bridge to Terabithia",
    poster: "https://image.tmdb.org/t/p/w500/3xFxGodKPMFLheS8rujFSmLfcq4.jpg",
    overview:
      "Jesse Aarons trained all summer to become the fastest runner in school, so he's very upset when newcomer Leslie Burke outruns him and everyone else. Despite this and other differences, including that she's rich, he's poor, and she's a city girl, he's a country boy, the two become fast friends. Together, they create Terabithia, a land of monsters, trolls, ogres, and giants and rule as king and queen.",
    release_date: 1171584000,
    genres: ["Drama", "Family", "Fantasy"],
  },
  {
    id: "170",
    title: "28 Days Later",
    poster: "https://image.tmdb.org/t/p/w500/w4SL5hv0qOanrN7GjwNgtjF1RtD.jpg",
    overview:
      "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
    release_date: 1036022400,
    genres: ["Horror", "Thriller", "Science Fiction"],
  },
  {
    id: "44114",
    title: "3some",
    poster: "https://image.tmdb.org/t/p/w500/sDc7hkSnNyVGQ5GeBeqhvjj9Xvy.jpg",
    overview:
      "In an attempt to help his friend with his impotence, Jaime sets up two friends together. But after the failure, he comes in to help. What first appeared to be just a sexual experience evolves to a full romantic relationship of three people.",
    release_date: 1256432400,
    genres: ["Romance", "Drama"],
  },
  {
    id: "271718",
    title: "Trainwreck",
    poster: "https://image.tmdb.org/t/p/w500/wrY629UTCUAKLJ4CxQXz6DCE7pr.jpg",
    overview:
      "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
    release_date: 1437094800,
    genres: [],
  },
  {
    id: "136400",
    title: "2 Guns",
    poster: "https://image.tmdb.org/t/p/w500/ptURGAFktibhk7DEAbMazlmNqWa.jpg",
    overview:
      "A DEA agent and an undercover Naval Intelligence officer who have been tasked with investigating one another find they have been set up by the mob -- the very organization the two men believe they have been stealing money from.",
    release_date: 1375405200,
    genres: ["Action", "Comedy", "Crime"],
  },
  {
    id: "491472",
    title: "At Eternity's Gate",
    poster: "https://image.tmdb.org/t/p/w500/7rUnZrcSyfwfloeI5aoccztSLSg.jpg",
    overview:
      "Famed but tormented artist Vincent van Gogh spends his final years in Arles, France, painting masterworks of the natural world that surrounds him.",
    release_date: 1542240000,
    genres: ["Drama"],
  },
  {
    id: "10674",
    title: "Mulan",
    poster: "https://image.tmdb.org/t/p/w500/bJ0DxWQDLdjSJmFHwtximVdgJ5P.jpg",
    overview:
      "A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.",
    release_date: 898131600,
    genres: [],
  },
  {
    id: "138103",
    title: "The Expendables 3",
    poster: "https://image.tmdb.org/t/p/w500/6MD1qPgEdvOfPCJkA1dq0SdOz2.jpg",
    overview:
      "Barney, Christmas and the rest of the team comes face-to-face with Conrad Stonebanks, who years ago co-founded The Expendables with Barney. Stonebanks subsequently became a ruthless arms trader and someone who Barney was forced to kill… or so he thought. Stonebanks, who eluded death once before, now is making it his mission to end The Expendables -- but Barney has other plans. Barney decides that he has to fight old blood with new blood, and brings in a new era of Expendables team members, recruiting individuals who are younger, faster and more tech-savvy. The latest mission becomes a clash of classic old-school style versus high-tech expertise in the Expendables’ most personal battle yet.",
    release_date: 1407114000,
    genres: ["Documentary"],
  },
  {
    id: "10693",
    title: "Peter Pan",
    poster: "https://image.tmdb.org/t/p/w500/6UTZmeQcxbtW32MyR5nKIx7ID4f.jpg",
    overview:
      "Leaving the safety of their nursery behind, Wendy, Michael and John follow Peter Pan to a magical world where childhood lasts forever. But while in Neverland, the kids must face Captain Hook and foil his attempts to get rid of Peter for good.",
    release_date: -533433600,
    genres: ["Music", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "201088",
    title: "Blackhat",
    poster: "https://image.tmdb.org/t/p/w500/6KGxFPcGcyYnN4ct96nmYoabLZ6.jpg",
    overview:
      "A man is released from prison to help American and Chinese authorities pursue a mysterious cyber criminal. The dangerous search leads them from Chicago to Hong Kong.",
    release_date: 1421107200,
    genres: ["Crime", "Thriller", "Action"],
  },
  {
    id: "220882",
    title: "London Fields",
    poster: "https://image.tmdb.org/t/p/w500/7OfQVm5GexlAREp8FoR4ILxp35T.jpg",
    overview:
      "Clairvoyant femme fatale, Nicola Six has been living with a dark premonition of her impending death by murder. She begins a tangled love affair with three uniquely different men—one of whom she knows will be her murderer.",
    release_date: 1537405200,
    genres: ["Crime", "Mystery", "Thriller", "Drama"],
  },
  {
    id: "159824",
    title: "Hotel Transylvania 2",
    poster: "https://image.tmdb.org/t/p/w500/kKFgwQnR5q08UFsAvtoYyTIiHyj.jpg",
    overview:
      "When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.",
    release_date: 1442797200,
    genres: ["Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "8363",
    title: "Superbad",
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    overview:
      "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    release_date: 1187312400,
    genres: ["Comedy"],
  },
  {
    id: "353491",
    title: "The Dark Tower",
    poster: "https://image.tmdb.org/t/p/w500/i9GUSgddIqrroubiLsvvMRYyRy0.jpg",
    overview:
      "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O’Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.",
    release_date: 1501722000,
    genres: [],
  },
  {
    id: "1593",
    title: "Night at the Museum",
    poster: "https://image.tmdb.org/t/p/w500/uY9k8t2FQkMj60obnAnsPKLxHCE.jpg",
    overview:
      "Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits.",
    release_date: 1161306000,
    genres: ["Adventure", "Comedy", "Fantasy", "Family"],
  },
  {
    id: "120467",
    title: "The Grand Budapest Hotel",
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    overview:
      "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
    release_date: 1393372800,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "8699",
    title: "Anchorman: The Legend of Ron Burgundy",
    poster: "https://image.tmdb.org/t/p/w500/9rQceSyOxJpOVsJRhkgoxNqbkvA.jpg",
    overview:
      "It's the 1970s, and San Diego super-sexist anchorman Ron Burgundy is the top dog in local TV, but that's all about to change when ambitious reporter Veronica Corningstone arrives as a new employee at his station.",
    release_date: 1089334800,
    genres: ["Comedy"],
  },
  {
    id: "46853",
    title: "Playing with Love",
    poster: "https://image.tmdb.org/t/p/w500/prAbJSVBQepa1XmiRvM4K4TIPca.jpg",
    overview:
      "Laura and Fabrizio have been meeting every summer in the forest by her parent's summer home. Fabrizio is a solitary boy with only his dog for company; Laura a sweet but unconfident child. This summer new aspects enter into their story as both are growing up. Laura is falling in love with Fabrizio, while he displays a new sexual awareness of her masked by his malice. Things develop further when they meet Sylvia who, unlike the innocent Laura, is confident and assertive. Fabrizio develops a fascination with her, eventually bribing Laura to fetch her to the forest to join them in play.",
    release_date: 232678800,
    genres: ["Drama"],
  },
  {
    id: "10140",
    title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
    poster: "https://image.tmdb.org/t/p/w500/pP27zlm9yeKrCeDZLFLP2HKELot.jpg",
    overview:
      "This time around Edmund and Lucy Pevensie, along with their pesky cousin Eustace Scrubb find themselves swallowed into a painting and on to a fantastic Narnian ship headed for the very edges of the world.",
    release_date: 1281661200,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "762",
    title: "Monty Python and the Holy Grail",
    poster: "https://image.tmdb.org/t/p/w500/jVztLnCw6F5YNOgEchm3QFydbYZ.jpg",
    overview:
      "King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They reach Camelot, but Arthur decides not  to enter, as 'it is a silly place'.",
    release_date: 170208000,
    genres: ["Comedy", "Animation", "Music"],
  },
  {
    id: "1949",
    title: "Zodiac",
    poster: "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
    overview:
      "The true story of the investigation of the 'Zodiac Killer', a serial killer who terrified the San Francisco Bay Area, taunting police with his ciphers and letters.  The case becomes an obsession for three men as their lives and careers are built and destroyed by the endless trail of clues.",
    release_date: 1172793600,
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "517814",
    title: "Capernaum",
    poster: "https://image.tmdb.org/t/p/w500/mFnfTVADj8yOxwzprYOmTPselk8.jpg",
    overview:
      "Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
    release_date: 1538787600,
    genres: ["Drama"],
  },
  {
    id: "6477",
    title: "Alvin and the Chipmunks",
    poster: "https://image.tmdb.org/t/p/w500/fONOOf3RmWnCKFwSl9e0z61KlZs.jpg",
    overview:
      "A struggling songwriter named Dave Seville finds success when he comes across a trio of singing chipmunks: mischievous leader Alvin, brainy Simon, and chubby, impressionable Theodore.",
    release_date: 1197504000,
    genres: [],
  },
  {
    id: "458423",
    title: "Mamma Mia! Here We Go Again",
    poster: "https://image.tmdb.org/t/p/w500/aWicerX4Y7n7tUwRAVHsVcBBpj2.jpg",
    overview:
      "Five years after meeting her three fathers, Sophie Sheridan prepares to open her mother’s hotel. In 1979, young Donna Sheridan meets the men who each could be Sophie’s biological father.",
    release_date: 1531098000,
    genres: [],
  },
  {
    id: "72105",
    title: "Ted",
    poster: "https://image.tmdb.org/t/p/w500/2ZetTSYM8ATcrxh4Otge99GJRTz.jpg",
    overview:
      "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.",
    release_date: 1340931600,
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "891",
    title: "All the President's Men",
    poster: "https://image.tmdb.org/t/p/w500/cPtSHR7D2WGsDBfnC5DxV927hKn.jpg",
    overview:
      "In the run-up to the 1972 elections, Washington Post reporter Bob Woodward covers what seems to be a minor break-in at the Democratic Party National Headquarters. He is surprised to find top lawyers already on the defense case, and the discovery of names and addresses of Republican fund organizers on the accused further arouses his suspicions. After the editor of the Post runs with the story and assigns Woodward and Carl Bernstein to it, they find the trail leading higher and higher in the Republican Party—and eventually into the White House itself.",
    release_date: 197427600,
    genres: ["Documentary", "TV Movie", "History"],
  },
  {
    id: "752",
    title: "V for Vendetta",
    poster: "https://image.tmdb.org/t/p/w500/kxekpqZUpO5W65QT12goucFvyx9.jpg",
    overview:
      "In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.",
    release_date: 1142380800,
    genres: ["Action", "Thriller", "Fantasy"],
  },
  {
    id: "927",
    title: "Gremlins",
    poster: "https://image.tmdb.org/t/p/w500/72Y1X9pMSjXQ7mKB6pBEoMhL0OQ.jpg",
    overview:
      "When Billy Peltzer is given a strange but adorable pet named Gizmo for Christmas, he inadvertently breaks the three important rules of caring for a Mogwai, and unleashes a horde of mischievous gremlins on a small town.",
    release_date: 455418000,
    genres: ["Fantasy", "Horror", "Comedy"],
  },
  {
    id: "146233",
    title: "Prisoners",
    poster: "https://image.tmdb.org/t/p/w500/tuZhZ6biFMr5n9YSVuHOJnNL1uU.jpg",
    overview:
      "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
    release_date: 1379466000,
    genres: ["Drama", "War"],
  },
  {
    id: "15144",
    title: "Sixteen Candles",
    poster: "https://image.tmdb.org/t/p/w500/A3WGCAgJF33kZdlxUdyXHYdbYax.jpg",
    overview:
      "A teenage girls deals with her parents forgetting her birthday and a crush on her high school's heartthrob.",
    release_date: 452480400,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "68726",
    title: "Pacific Rim",
    poster: "https://image.tmdb.org/t/p/w500/mmznhaQDwlHWpUwKuNxtQiubbmM.jpg",
    overview:
      "When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroes—a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)—who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse.",
    release_date: 1373504400,
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    id: "70",
    title: "Million Dollar Baby",
    poster: "https://image.tmdb.org/t/p/w500/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg",
    overview:
      "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
    release_date: 1103068800,
    genres: ["Comedy", "Family"],
  },
  {
    id: "412988",
    title: "The Happytime Murders",
    poster: "https://image.tmdb.org/t/p/w500/rWxkur51srfVnMn2QOFjE7mbq6h.jpg",
    overview:
      "In a world where human beings and puppets live together, when the members of the cast of a children's television show aired during the 1990s begin to get murdered one by one, puppet Phil Philips, a former LAPD detective who fell in disgrace and turned into a private eye, takes on the case at the request of his old boss in order to assist detective Edwards, who was his partner in the past.",
    release_date: 1534899600,
    genres: ["Action", "Comedy", "Crime"],
  },
  {
    id: "81188",
    title: "Rise of the Guardians",
    poster: "https://image.tmdb.org/t/p/w500/kUBkmlWriPbNMijL2m3LtmPYPTb.jpg",
    overview:
      "When an evil spirit known as Pitch lays down the gauntlet to take over the world, the immortal Guardians must join forces for the first time to protect the hopes, beliefs and imagination of children all over the world.",
    release_date: 1353456000,
    genres: ["Animation", "Family", "Fantasy"],
  },
  {
    id: "395990",
    title: "Death Wish",
    poster: "https://image.tmdb.org/t/p/w500/g0eEEZAqMf98ULQnoiORuazjOpn.jpg",
    overview:
      "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
    release_date: 1519948800,
    genres: ["Horror", "Comedy", "Family"],
  },
  {
    id: "181283",
    title: "Child 44",
    poster: "https://image.tmdb.org/t/p/w500/qqGhMt31HVUN3WnH0L2r0OWq38E.jpg",
    overview:
      "Set in Stalin-era Soviet Union, a disgraced MGB agent is dispatched to investigate a series of child murders -- a case that begins to connect with the very top of party leadership.",
    release_date: 1426377600,
    genres: ["Crime", "Thriller"],
  },
  {
    id: "11968",
    title: "Into the Blue",
    poster: "https://image.tmdb.org/t/p/w500/qMqxpRlPwSOIL1t1vtPj8WE8tPj.jpg",
    overview:
      "When they take some friends on an extreme sport adventure, the last thing Jared and Sam expect to see below the shark-infested waters is a legendary pirate ship rumored to contain millions of dollars in gold. But their good fortune is short-lived, as a ruthless gang of criminals gets word of what they have uncovered.",
    release_date: 1128042000,
    genres: ["Comedy"],
  },
  {
    id: "204922",
    title: "Before I Go to Sleep",
    poster: "https://image.tmdb.org/t/p/w500/1sSWpTupVixOanIpZdLGzsKvcZS.jpg",
    overview:
      "A woman wakes up every day, remembering nothing as a result of a traumatic accident in her past. One day, new terrifying truths emerge that force her to question everyone around her.",
    release_date: 1409706000,
    genres: ["Mystery", "Drama"],
  },
  {
    id: "393",
    title: "Kill Bill: Vol. 2",
    poster: "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
    overview:
      "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do … but kill Bill.",
    release_date: 1082077200,
    genres: ["Action", "Crime"],
  },
  {
    id: "8358",
    title: "Cast Away",
    poster: "https://image.tmdb.org/t/p/w500/4x4puNUAqBpi9sUMYL5dNPSdB6I.jpg",
    overview:
      "Chuck, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia ditches at sea during a terrible storm. He's the only survivor, and he washes up on a tiny island with nothing but some flotsam and jetsam from the aircraft's cargo.",
    release_date: 977443200,
    genres: ["Adventure", "Drama"],
  },
  {
    id: "57800",
    title: "Ice Age: Continental Drift",
    poster: "https://image.tmdb.org/t/p/w500/6NSFKyOz7ppsd0KY6g4HInIZ53P.jpg",
    overview:
      "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    release_date: 1340672400,
    genres: ["Animation", "Comedy", "Adventure", "Family"],
  },
  {
    id: "2164",
    title: "Stargate",
    poster: "https://image.tmdb.org/t/p/w500/fyTqTETiXncfESLyKfkgEs7qg7d.jpg",
    overview:
      "An interstellar teleportation device, found in Egypt, leads to a planet with humans resembling ancient Egyptians who worship the god Ra.",
    release_date: 783216000,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "138832",
    title: "We're the Millers",
    poster: "https://image.tmdb.org/t/p/w500/qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg",
    overview:
      "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    release_date: 1375837200,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "421658",
    title: "Final Score",
    poster: "https://image.tmdb.org/t/p/w500/5m3FEfxGQ7MdNNfUwNtA6paXRDs.jpg",
    overview:
      "When a stadium is seized by a group of heavily armed criminals during a major sporting event, an ex-soldier must use all his military skills to save both the daughter of a fallen comrade and the huge crowd unaware of the danger.",
    release_date: 1536282000,
    genres: ["Action", "Adventure"],
  },
  {
    id: "399905",
    title: "Female War: A Nasty Deal",
    poster: "https://image.tmdb.org/t/p/w500/krVAqta9NXvLHpQsW2YUtcD5bfP.jpg",
    overview:
      "Painter Ha-rim became blind due to an unfortunate accident. His wife Sun-yeong searches far and low for a cornea donor until she meets terminal cancer patient Dae-geun. These two make a startling and dangerous deal for Ha-rim's cornea.",
    release_date: 1443315600,
    genres: ["Drama", "Romance"],
  },
  {
    id: "242512",
    title: "Ouija",
    poster: "https://image.tmdb.org/t/p/w500/gwjHlGjK2xXKpjd65BWyAMwzTWC.jpg",
    overview:
      "A group of friends must confront their most terrifying fears when they awaken the dark powers of an ancient spirit board.",
    release_date: 1414112400,
    genres: [],
  },
  {
    id: "1375",
    title: "Rocky V",
    poster: "https://image.tmdb.org/t/p/w500/cGbQZyTvivmC6UhmoSB1OBoLY3B.jpg",
    overview:
      "A lifetime of taking shots has ended Rocky’s career, and a crooked accountant has left him broke. Inspired by the memory of his trainer, however, Rocky finds glory in training and takes on an up-and-coming boxer.",
    release_date: 656208000,
    genres: ["Comedy"],
  },
  {
    id: "38",
    title: "Eternal Sunshine of the Spotless Mind",
    poster: "https://image.tmdb.org/t/p/w500/w9Ct6sLEK3Ph4bA2Oeqfg8rT8uP.jpg",
    overview:
      "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    release_date: 1079654400,
    genres: ["Science Fiction", "Drama", "Romance"],
  },
  {
    id: "2502",
    title: "The Bourne Supremacy",
    poster: "https://image.tmdb.org/t/p/w500/7IYGiDrquvX3q7e9PV6Pejs6b2g.jpg",
    overview:
      "When a CIA operation to purchase classified Russian documents is blown by a rival agent, who then shows up in the sleepy seaside village where Bourne and Marie have been living. The pair run for their lives and Bourne, who promised retaliation should anyone from his former life attempt contact, is forced to once again take up his life as a trained assassin to survive.",
    release_date: 1090544400,
    genres: ["Action", "Drama", "Thriller"],
  },
  {
    id: "10882",
    title: "Sleeping Beauty",
    poster: "https://image.tmdb.org/t/p/w500/oQTDuu9kKLUXwb6XmBoqyAiVLhB.jpg",
    overview:
      "A beautiful princess born in a faraway kingdom is destined by a terrible curse to prick her finger on the spindle of a spinning wheel and fall into a deep sleep that can only be awakened by true love's first kiss. Determined to protect her, her parents ask three fairies to raise her in hiding. But the evil Maleficent is just as determined to seal the princess's fate.",
    release_date: -344822400,
    genres: ["Family", "Fantasy"],
  },
  {
    id: "172385",
    title: "Rio 2",
    poster: "https://image.tmdb.org/t/p/w500/tpCqpv8y0cDb7mgIPeTv70W9vmF.jpg",
    overview:
      "It's a jungle out there for Blu, Jewel and their three kids after they're hurtled from Rio de Janeiro to the wilds of the Amazon. As Blu tries to fit in, he goes beak-to-beak with the vengeful Nigel, and meets the most fearsome adversary of all: his father-in-law.",
    release_date: 1395187200,
    genres: ["Documentary", "Drama"],
  },
  {
    id: "264660",
    title: "Ex Machina",
    poster: "https://image.tmdb.org/t/p/w500/9goPE2IoMIXxTLWzl7aizwuIiLh.jpg",
    overview:
      "Caleb, a 26 year old coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    release_date: 1421798400,
    genres: ["Drama", "Science Fiction"],
  },
  {
    id: "152601",
    title: "Her",
    poster: "https://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WD7UaBBn37.jpg",
    overview:
      "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user's every needs. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
    release_date: 1387324800,
    genres: ["Drama"],
  },
  {
    id: "82700",
    title: "After Earth",
    poster: "https://image.tmdb.org/t/p/w500/kteClJzPpygDW40xyICWfzmYTIW.jpg",
    overview:
      "One thousand years after cataclysmic events forced humanity's escape from Earth, Nova Prime has become mankind's new home. Legendary General Cypher Raige returns from an extended tour of duty to his estranged family, ready to be a father to his 13-year-old son, Kitai. When an asteroid storm damages Cypher and Kitai's craft, they crash-land on a now unfamiliar and dangerous Earth. As his father lies dying in the cockpit, Kitai must trek across the hostile terrain to recover their rescue beacon. His whole life, Kitai has wanted nothing more than to be a soldier like his father. Today, he gets his chance.",
    release_date: 1369875600,
    genres: ["Science Fiction", "Action", "Adventure"],
  },
  {
    id: "455980",
    title: "Tag",
    poster: "https://image.tmdb.org/t/p/w500/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg",
    overview:
      "For one month every year, five highly competitive friends hit the ground running in a no-holds-barred game of tag they’ve been playing since the first grade. This year, the game coincides with the wedding of their only undefeated player, which should finally make him an easy target. But he knows they’re coming...and he’s ready.",
    release_date: 1527642000,
    genres: ["Drama"],
  },
  {
    id: "76492",
    title: "Hotel Transylvania",
    poster: "https://image.tmdb.org/t/p/w500/eJGvzGrsfe2sqTUPv5IwLWXjVuR.jpg",
    overview:
      "Welcome to Hotel Transylvania, Dracula's lavish five-stake resort, where monsters and their families can live it up and no humans are allowed. One special weekend, Dracula has invited all his best friends to celebrate his beloved daughter Mavis's 118th birthday. For Dracula catering to all of these legendary monsters is no problem but the party really starts when one ordinary guy stumbles into the hotel and changes everything!",
    release_date: 1348102800,
    genres: ["Animation", "Adventure", "Family"],
  },
  {
    id: "1966",
    title: "Alexander",
    poster: "https://image.tmdb.org/t/p/w500/faVET7EulRCnYRwi65jnHqR2di8.jpg",
    overview:
      "Alexander, the King of Macedonia, leads his legions against the giant Persian Empire. After defeating the Persians, he leads his army across the then known world, venturing farther than any westerner had ever gone, all the way to India.",
    release_date: 1100995200,
    genres: ["Action"],
  },
  {
    id: "400617",
    title: "Phantom Thread",
    poster: "https://image.tmdb.org/t/p/w500/yZ8j8xKk2xQ1d88hB8YG6LZfRQj.jpg",
    overview:
      "Renowned British dressmaker Reynolds Woodcock comes across Alma, a young, strong-willed woman, who soon becomes a fixture in his life as his muse and lover.",
    release_date: 1514160000,
    genres: [],
  },
  {
    id: "109414",
    title: "This Is the End",
    poster: "https://image.tmdb.org/t/p/w500/7Wdc3etyBJA4432TYtz6n9GQd1c.jpg",
    overview:
      "While attending a party at James Franco's house, Seth Rogen, Jay Baruchel and many other celebrities are faced with the apocalypse.",
    release_date: 1370998800,
    genres: ["Action", "Comedy"],
  },
  {
    id: "17654",
    title: "District 9",
    poster: "https://image.tmdb.org/t/p/w500/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
    overview:
      "Thirty years ago, aliens arrive on Earth. Not to conquer or give aid, but to find refuge from their dying planet. Separated from humans in a South African area called District 9, the aliens are managed by Multi-National United, which is unconcerned with the aliens' welfare but will do anything to master their advanced technology. When a company field agent contracts a mysterious virus that begins to alter his DNA, there is only one place he can hide: District 9.",
    release_date: 1249434000,
    genres: ["Science Fiction"],
  },
  {
    id: "59967",
    title: "Looper",
    poster: "https://image.tmdb.org/t/p/w500/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
    overview:
      "In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
    release_date: 1348621200,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "49013",
    title: "Cars 2",
    poster: "https://image.tmdb.org/t/p/w500/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    overview:
      "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
    release_date: 1307754000,
    genres: ["Animation", "Family", "Adventure", "Comedy"],
  },
  {
    id: "600",
    title: "Full Metal Jacket",
    poster: "https://image.tmdb.org/t/p/w500/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
    overview:
      "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    release_date: 551667600,
    genres: ["Drama", "War"],
  },
  {
    id: "46195",
    title: "Rio",
    poster: "https://image.tmdb.org/t/p/w500/i8QoA3gOrvhU7sfihVVneNqlBuS.jpg",
    overview:
      "Captured by smugglers when he was just a hatchling, a macaw named Blu never learned to fly and lives a happily domesticated life in Minnesota with his human friend, Linda. Blu is thought to be the last of his kind, but when word comes that Jewel, a lone female, lives in Rio de Janeiro, Blu and Linda go to meet her. Animal smugglers kidnap Blu and Jewel, but the pair soon escape and begin a perilous adventure back to freedom -- and Linda.",
    release_date: 1301792400,
    genres: ["Crime"],
  },
  {
    id: "190859",
    title: "American Sniper",
    poster: "https://image.tmdb.org/t/p/w500/i1U46OwMc6vlm7OoSUKfqUH615e.jpg",
    overview:
      "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime target of insurgents. Despite grave danger and his struggle to be a good husband and father to his family back in the States, Kyle serves four tours of duty in Iraq. However, when he finally returns home, he finds that he cannot leave the war behind.",
    release_date: 1418256000,
    genres: ["War", "Action"],
  },
  {
    id: "638",
    title: "Lost Highway",
    poster: "https://image.tmdb.org/t/p/w500/5POhfNeFPIi4VUNwCTaK85sh98r.jpg",
    overview:
      "A tormented jazz musician finds himself lost in an enigmatic story involving murder, surveillance, gangsters, doppelgangers, and an impossible transformation inside a prison cell.",
    release_date: 853286400,
    genres: ["Drama", "Thriller", "Mystery"],
  },
  {
    id: "9273",
    title: "Ace Ventura: When Nature Calls",
    poster: "https://image.tmdb.org/t/p/w500/wcinCf1ov2D6M3P7BBZkzQFOiIb.jpg",
    overview:
      "Summoned from an ashram in Tibet, Ace finds himself on a perilous journey into the jungles of Africa to find Shikaka, the missing sacred animal of the friendly Wachati tribe. He must accomplish this before the wedding of the Wachati's Princess to the prince of the warrior Wachootoos. If Ace fails, the result will be a vicious tribal war.",
    release_date: 815961600,
    genres: ["Crime", "Comedy", "Adventure"],
  },
  {
    id: "22970",
    title: "The Cabin in the Woods",
    poster: "https://image.tmdb.org/t/p/w500/zZZe5wn0udlhMtdlDjN4NB72R6e.jpg",
    overview:
      "Five college friends spend the weekend at a remote cabin in the woods, where they get more than they bargained for. Together, they must discover the truth behind the cabin in the woods.",
    release_date: 1334192400,
    genres: ["Horror", "Comedy", "Thriller"],
  },
  {
    id: "13387",
    title: "Transporter 3",
    poster: "https://image.tmdb.org/t/p/w500/ngpLhUccj6mlvAVpiIa7jUcFxhT.jpg",
    overview:
      "Frank Martin puts the driving gloves on to deliver Valentina, the kidnapped daughter of a Ukranian government official, from Marseilles to Odessa on the Black Sea. En route, he has to contend with thugs who want to intercept Valentina's safe delivery and not let his personal feelings get in the way of his dangerous objective.",
    release_date: 1227657600,
    genres: ["Action", "Adventure", "Thriller", "Crime"],
  },
  {
    id: "68734",
    title: "Argo",
    poster: "https://image.tmdb.org/t/p/w500/2HVkfkgY1nvWTCRj3H1zTmlghUG.jpg",
    overview:
      "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.",
    release_date: 1349917200,
    genres: ["Action", "Comedy"],
  },
  {
    id: "187",
    title: "Sin City",
    poster: "https://image.tmdb.org/t/p/w500/8qGW691AOyqbKsEhpe7nHwMEbRe.jpg",
    overview:
      "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    release_date: 1112317200,
    genres: ["Horror"],
  },
  {
    id: "65754",
    title: "The Girl with the Dragon Tattoo",
    poster: "https://image.tmdb.org/t/p/w500/vbLedKc1BUF4FOH1GyHW62FulCc.jpg",
    overview:
      "This English-language adaptation of the Swedish novel by Stieg Larsson follows a disgraced journalist, Mikael Blomkvist, as he investigates the disappearance of a weary patriarch's niece from 40 years ago. He is aided by the pierced, tattooed, punk computer hacker named Lisbeth Salander. As they work together in the investigation, Blomkvist and Salander uncover immense corruption beyond anything they have ever imagined.",
    release_date: 1323820800,
    genres: ["Thriller", "Crime", "Mystery", "Drama"],
  },
  {
    id: "318846",
    title: "The Big Short",
    poster: "https://image.tmdb.org/t/p/w500/isuQWbJPbjybBEWdcCaBUPmU0XO.jpg",
    overview: "The men who made millions from a global economic meltdown.",
    release_date: 1449792000,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "8393",
    title: "The Gods Must Be Crazy",
    poster: "https://image.tmdb.org/t/p/w500/kO7YwEuyTfjXP8plVhmcLf3IlUq.jpg",
    overview:
      "Misery is brought to a small group of Sho in the Kalahari desert in the form of a cola bottle. In his quest to throw the evil object over the edge of the earth, Xixo encounters Western 'civilization,' a haphazard doctor and a tyranical despot.",
    release_date: 337395600,
    genres: ["Action", "Comedy"],
  },
  {
    id: "39514",
    title: "RED",
    poster: "https://image.tmdb.org/t/p/w500/jKntKE55uQTk38NwvkOMbxclBUT.jpg",
    overview:
      "When his peaceful life is threatened by a high-tech assassin, former black-ops agent, Frank Moses reassembles his old team in a last ditch effort to survive and uncover his assailants.",
    release_date: 1286931600,
    genres: ["Mystery"],
  },
  {
    id: "274857",
    title: "King Arthur: Legend of the Sword",
    poster: "https://image.tmdb.org/t/p/w500/9kKXH6eJpzoFGhCbTN3FVwSQK3n.jpg",
    overview:
      "When the child Arthur’s father is murdered, Vortigern, Arthur’s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Excalibur from the stone, his life is turned upside down and he is forced to acknowledge his true legacy... whether he likes it or not.",
    release_date: 1494378000,
    genres: ["Action", "Drama", "Fantasy"],
  },
  {
    id: "561",
    title: "Constantine",
    poster: "https://image.tmdb.org/t/p/w500/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
    overview:
      "John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.",
    release_date: 1107820800,
    genres: ["Drama", "Fantasy", "Horror"],
  },
  {
    id: "429351",
    title: "12 Strong",
    poster: "https://image.tmdb.org/t/p/w500/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg",
    overview:
      "A team of CIA agents and special forces head into Afghanistan in the aftermath of the September 11th attacks in an attempt to dismantle the Taliban.",
    release_date: 1516060800,
    genres: ["Drama", "Action", "History", "War"],
  },
  {
    id: "141",
    title: "Donnie Darko",
    poster: "https://image.tmdb.org/t/p/w500/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg",
    overview:
      "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
    release_date: 979776000,
    genres: ["Fantasy", "Drama", "Mystery"],
  },
  {
    id: "1245",
    title: "The Remains of the Day",
    poster: "https://image.tmdb.org/t/p/w500/qtwipjmSypSQuSvz5BNirSxZqbg.jpg",
    overview:
      "A rule bound head butler's world of manners and decorum in the household he maintains is tested by the arrival of a housekeeper who falls in love with him in post-WWI Britain. The possibility of romance and his master's cultivation of ties with the Nazi cause challenge his carefully maintained veneer of servitude.",
    release_date: 752457600,
    genres: ["Drama", "Romance"],
  },
  {
    id: "277",
    title: "Underworld",
    poster: "https://image.tmdb.org/t/p/w500/zsnQ41UZ3jo1wEeemF0eA9cAIU0.jpg",
    overview:
      "Vampires and werewolves have waged a nocturnal war against each other for centuries. But all bets are off when a female vampire warrior named Selene, who's famous for her strength and werewolf-hunting prowess, becomes smitten with a peace-loving male werewolf, Michael, who wants to end the war.",
    release_date: 1063933200,
    genres: ["Drama", "Crime"],
  },
  {
    id: "47933",
    title: "Independence Day: Resurgence",
    poster: "https://image.tmdb.org/t/p/w500/jzpvh0Ic7jL9GX4NLE1Tx2GUCrN.jpg",
    overview:
      "We always knew they were coming back. Using recovered alien technology, the nations of Earth have collaborated on an immense defense program to protect the planet. But nothing can prepare us for the aliens’ advanced and unprecedented force. Only the ingenuity of a few brave men and women can bring our world back from the brink of extinction.",
    release_date: 1466557200,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "28178",
    title: "Hachi: A Dog's Tale",
    poster: "https://image.tmdb.org/t/p/w500/cuuzSt0dzY6k9xduN9tTSCIUvZ7.jpg",
    overview:
      "A drama based on the true story of a college professor's bond with the abandoned dog he takes into his home.",
    release_date: 1244854800,
    genres: ["Drama", "Family"],
  },
  {
    id: "9335",
    title: "Transporter 2",
    poster: "https://image.tmdb.org/t/p/w500/cdm17vK8PxHfTi7ayZf6WKbOgUO.jpg",
    overview:
      "Professional driver Frank Martin is living in Miami, where he is temporarily filling in for a friend as the chauffeur for a government narcotics control policymaker and his family. The young boy in the family is targeted for kidnapping, and Frank immediately becomes involved in protecting the child and exposing the kidnappers.",
    release_date: 1122944400,
    genres: ["Documentary"],
  },
  {
    id: "277685",
    title: "Unfriended",
    poster: "https://image.tmdb.org/t/p/w500/jS2KDUROSaAxBqerik7mopMCG8v.jpg",
    overview:
      "While video chatting one night, six high school friends receive a Skype message from a classmate who killed herself exactly one year ago. A first they think it's a prank, but when the girl starts revealing the friends' darkest secrets, they realize they are dealing with something out of this world, something that wants them dead.",
    release_date: 1429232400,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "7485",
    title: "Shooter",
    poster: "https://image.tmdb.org/t/p/w500/tyRP8JedrDkPPvH3JxKYsdP2esu.jpg",
    overview:
      "A marksman living in exile is coaxed back into action after learning of a plot to kill the president. Ultimately double-crossed and framed for the attempt, he goes on the run to track the real killer and find out who exactly set him up, and why??",
    release_date: 1174521600,
    genres: [],
  },
  {
    id: "195589",
    title: "Neighbors",
    poster: "https://image.tmdb.org/t/p/w500/dyO9BQ4M4flTOAzP79rmsz61yAT.jpg",
    overview:
      "A couple with a newborn baby face unexpected difficulties after they are forced to live next to a fraternity house.",
    release_date: 1399510800,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "36670",
    title: "Never Say Never Again",
    poster: "https://image.tmdb.org/t/p/w500/zhoAL4o1STGgLbLxJ9r1ijfyHC9.jpg",
    overview:
      "James Bond returns as the secret agent 007 one more time to battle the evil organization SPECTRE. Bond must defeat Largo, who has stolen two atomic warheads for nuclear blackmail. But Bond has an ally in Largo's girlfriend, the willowy Domino, who falls for Bond and seeks revenge. This is the last time for Sean Connery as Her Majesty's Secret Agent 007. Made outside of the traditional Broccoli production environment due to separate rights having been obtained for this specific Ian Fleming story.",
    release_date: 434332800,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "125509",
    title: "Wrong Turn 5: Bloodlines",
    poster: "https://image.tmdb.org/t/p/w500/i9prGtsGbWzaH30bp8TXPEs6QGm.jpg",
    overview:
      "A small West Virginia town is hosting the legendary Mountain Man Festival on Halloween, where throngs of costumed party goers gather for a wild night of music and mischief. But an inbred family of hillbilly cannibals kill the fun when they trick and treat themselves to a group of visiting college students.",
    release_date: 1350954000,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "157849",
    title: "A Most Wanted Man",
    poster: "https://image.tmdb.org/t/p/w500/6B76Z5Ct758RfKFoFg37skVRiMp.jpg",
    overview:
      "A Chechen Muslim illegally immigrates to Hamburg and becomes a person of interest for a covert government team which tracks the movements of potential terrorists.",
    release_date: 1406250000,
    genres: ["Thriller"],
  },
  {
    id: "289720",
    title: "Outcast",
    poster: "https://image.tmdb.org/t/p/w500/efsgCTlofzIuysfokEp7hwQnUho.jpg",
    overview:
      "A mysterious warrior teams up with the daughter and son of a deposed Chinese Emperor to defeat their cruel Uncle, who seeks their deaths.",
    release_date: 1411693200,
    genres: ["Fantasy", "Horror"],
  },
  {
    id: "50546",
    title: "Just Go with It",
    poster: "https://image.tmdb.org/t/p/w500/ez1EDULOCUUCySHOZU6tz97qbtM.jpg",
    overview:
      "A plastic surgeon, romancing a much younger schoolteacher, enlists his loyal assistant to pretend to be his soon to be ex-wife, in order to cover up a careless lie. When more lies backfire, the assistant's kids become involved, and everyone heads off for a weekend in Hawaii that will change all their lives.",
    release_date: 1297296000,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "84892",
    title: "The Perks of Being a Wallflower",
    poster: "https://image.tmdb.org/t/p/w500/aKCvdFFF5n80P2VdS7d8YBwbCjh.jpg",
    overview:
      "15-year-old freshman Charlie is a wallflower, always watching life from the sidelines, until two charismatic senior students become his mentors. Free-spirited Sam and her stepbrother Patrick help Charlie discover the joys of friendship, first love, music and more, while a teacher sparks Charlie's dreams of becoming a writer.",
    release_date: 1348102800,
    genres: ["Drama"],
  },
  {
    id: "1374",
    title: "Rocky IV",
    poster: "https://image.tmdb.org/t/p/w500/jmvpwgW5M2kduR9zB0q8qGFC4zM.jpg",
    overview:
      "After iron man Drago, a highly intimidating 6-foot-5, 261-pound Soviet athlete, kills Apollo Creed in an exhibition match, Rocky comes to the heart of Russia for 15 pile-driving boxing rounds of revenge.",
    release_date: 501379200,
    genres: ["Documentary", "History"],
  },
  {
    id: "50456",
    title: "Hanna",
    poster: "https://image.tmdb.org/t/p/w500/gRvxRMtejJa9jjfDDUibUIfIJbP.jpg",
    overview:
      "A 16-year-old girl raised by her father to be the perfect assassin is dispatched on a mission across Europe. Tracked by a ruthless operatives, she faces startling revelations about her existence and questions about her humanity.",
    release_date: 1302138000,
    genres: ["Action", "Thriller", "Adventure"],
  },
  {
    id: "479226",
    title: "The Purity of Vengeance",
    poster: "https://image.tmdb.org/t/p/w500/uTdaeGpznkLfyhAzLlrdssD621R.jpg",
    overview:
      "In an older apartment in Copenhagen, some craftsmen make a scary discovery: behind a fake wall they find three mummified bodies sitting around a dining table with a free space ready. Carl Mørck and Assad from Department Q now have to find out who the mummies are and for whom the fourth place is intended. They soon discover that the previous inhabitants of the apartment trace back to an infamous women's hospital at Sprogø island, where attempts at forced sterilization were a regular part of the daily lives of the women who were brought to the hospital. The horror at the hospital is an overdue chapter in the history of Denmark, but there are people who say that the experiments are still up in our time. Carl and Assad start a race with time to prevent new murders and assaults.",
    release_date: 1538614800,
    genres: ["Crime", "Thriller", "Mystery", "Drama"],
  },
  {
    id: "353616",
    title: "Pitch Perfect 3",
    poster: "https://image.tmdb.org/t/p/w500/jtIhBvMco4CvUB9XxfAm5FeSXMJ.jpg",
    overview:
      "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    release_date: 1513728000,
    genres: ["Comedy", "Music"],
  },
  {
    id: "308266",
    title: "War Dogs",
    poster: "https://image.tmdb.org/t/p/w500/mDcPRjZC1bb6LavFU3gwsWdVfCM.jpg",
    overview:
      "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
    release_date: 1471395600,
    genres: ["Documentary", "History", "War"],
  },
  {
    id: "398173",
    title: "The House That Jack Built",
    poster: "https://image.tmdb.org/t/p/w500/bMUGNkPaHOurcBK9g3XpJx3fxuO.jpg",
    overview:
      "Failed architect, engineer and vicious murderer Jack narrates the details of some of his most elaborately orchestrated crimes, each of them a towering piece of art that defines his life's work as a serial killer for twelve years.",
    release_date: 1538960400,
    genres: ["Animation"],
  },
  {
    id: "33",
    title: "Unforgiven",
    poster: "https://image.tmdb.org/t/p/w500/yKyLJmRAtyXEEYKOvPhKHXIcPq9.jpg",
    overview:
      "William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff.",
    release_date: 713149200,
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: "2501",
    title: "The Bourne Identity",
    poster: "https://image.tmdb.org/t/p/w500/vN6jGCuzefysLVFrzK3Vs6xAdu1.jpg",
    overview:
      "Wounded to the brink of death and suffering from amnesia, Jason Bourne is rescued at sea by a fisherman. With nothing to go on but a Swiss bank account number, he starts to reconstruct his life, but finds that many people he encounters want him dead. However, Bourne realizes that he has the combat and mental skills of a world-class spy—but who does he work for?",
    release_date: 1024016400,
    genres: ["Action", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "8810",
    title: "Mad Max 2",
    poster: "https://image.tmdb.org/t/p/w500/ffzRLeZaKP6YCaTVieWeSLccC4y.jpg",
    overview:
      "Max Rockatansky returns as the heroic loner who drives the dusty roads of a postapocalyptic Australian Outback in an unending search for gasoline. Arrayed against him and the other scraggly defendants of a fuel-depot encampment are the bizarre warriors commanded by the charismatic Lord Humungus, a violent leader whose scruples are as barren as the surrounding landscape.",
    release_date: 378000000,
    genres: ["Adventure", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "11237",
    title: "Anacondas: The Hunt for the Blood Orchid",
    poster: "https://image.tmdb.org/t/p/w500/gTlVy3wUApAanIAPdx3yz0YOROD.jpg",
    overview:
      "The blood orchid - A rare flower that holds the secret of eternal life and a fortune to the pharmaceutical company that finds it. Led by a two-fisted soldier of fortune, a scientific expedition is sent deep into the jungles of Borneo to locate and bring back samples of the legendary plant. Battling their way upriver, the explorers brave poisonous insects, ferocious crocodiles and savage headhunters, unaware they're being stalked by an even greater danger: a nest of giant anacondas, voracious, fifty-foot-long flesh-eaters who'll stop at nothing to protect their breeding ground, the blood orchid's home.",
    release_date: 1093482000,
    genres: ["Adventure", "Action", "Horror", "Thriller"],
  },
  {
    id: "553030",
    title: "Dirty God",
    poster: "https://image.tmdb.org/t/p/w500/jmbCoaki8csu4cfH9Pa8FuFQGmp.jpg",
    overview:
      "Jade is a young mother in the prime of her life when an acid attack leaves her severely burned. While her face has been reconstructed, her beauty is lost beneath the scars. Descending a self-destructive path with relationships crumbling, Jade must take drastic action to reclaim her life.",
    release_date: 1554944400,
    genres: ["Drama"],
  },
  {
    id: "186",
    title: "Lucky Number Slevin",
    poster: "https://image.tmdb.org/t/p/w500/x21s3p5wPww534nYj1cWakTcqz4.jpg",
    overview:
      "Slevin is mistakenly put in the middle of a personal war between the city’s biggest criminal bosses. Under constant watch, Slevin must try not to get killed by an infamous assassin and come up with an idea of how to get out of his current dilemma. A film with many twists and turns.",
    release_date: 1140739200,
    genres: ["Drama", "Thriller", "Crime", "Mystery"],
  },
  {
    id: "460668",
    title: "I Feel Pretty",
    poster: "https://image.tmdb.org/t/p/w500/rmP8b6vxbpK1sPinnUqXHKq0VkT.jpg",
    overview:
      "A head injury causes a woman to develop an extraordinary amount of confidence and believe she's drop dead gorgeous.",
    release_date: 1524099600,
    genres: ["Comedy"],
  },
  {
    id: "454652",
    title: "Colette",
    poster: "https://image.tmdb.org/t/p/w500/pGiUIkcTOEn2CwE5CUBFxWkcyxO.jpg",
    overview:
      "After marrying a successful Parisian writer known commonly as Willy, Sidonie-Gabrielle Colette is transplanted from her childhood home in rural France to the intellectual and artistic splendor of Paris. Soon after, Willy convinces Colette to ghostwrite for him. She pens a semi-autobiographical novel about a witty and brazen country girl named Claudine, sparking a bestseller and a cultural sensation. After its success, Colette and Willy become the talk of Paris and their adventures inspire additional Claudine novels.",
    release_date: 1537491600,
    genres: ["Romance", "Drama"],
  },
  {
    id: "460019",
    title: "Truth or Dare",
    poster: "https://image.tmdb.org/t/p/w500/ei2waWQAG8NP244WShIFgGu9IOu.jpg",
    overview:
      "A harmless game of 'Truth or Dare' among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.",
    release_date: 1523494800,
    genres: ["Family", "Drama"],
  },
  {
    id: "584134",
    title: "Whispering Corridors",
    poster: "https://image.tmdb.org/t/p/w500/d76z9MpZbqv9M0to4ssf0zg4PzF.jpg",
    overview:
      "Alex (Angga Yunanda) a new highschool student met Maggie (Amanda Rawles) and become best friends. Suddenly weird things started to happen in their highschool.",
    release_date: 1554944400,
    genres: ["Horror"],
  },
  {
    id: "28609",
    title: "Dragon Ball Z: Dead Zone",
    poster: "https://image.tmdb.org/t/p/w500/ywtyEDTM2YO7qod7USNNwhrAfvA.jpg",
    overview:
      "Gohan has been kidnapped! To make matters worse, the evil Garlic Jr. is gathering the Dragonballs to wish for immortality. Only then will Garlic Jr. be able to take over the Earth in order to gain revenge for the death of his father. Goku rushes to save Gohan, but arrives at the fortress just as Garlic Jr. summons the Eternal Dragon! Krillin and Piccolo try to help Goku, but their combined powers.",
    release_date: 613875600,
    genres: ["Animation", "Action"],
  },
  {
    id: "34433",
    title: "Dragon Ball Z: Broly – The Legendary Super Saiyan",
    poster: "https://image.tmdb.org/t/p/w500/6iO8TJCyLI4BiPYOvdwzPV2bhoV.jpg",
    overview:
      "As Goku investigates the destruction of the Southern Galaxy, Vegeta is taken to be King of the New Planet Vegeta, and to destroy the Legendary Super Saiyan, Broly.",
    release_date: 731376000,
    genres: ["Animation", "Adventure", "Family", "Science Fiction"],
  },
  {
    id: "15255",
    title: "Undisputed II: Last Man Standing",
    poster: "https://image.tmdb.org/t/p/w500/ySuVrhk9vUKeBzXJbR29WoK1NNS.jpg",
    overview:
      "Sequel to the 2002 film. This time, Heavyweight Champ George 'Iceman' Chambers (White) is sent to a Russian jail on trumped-up drug charges. In order to win his freedom he must fight against the jailhouse fighting champ Uri Boyka (Adkins) in a battle to the death. This time he is not fighting for a title, he is fighting for his life!",
    release_date: 1144717200,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "22705",
    title: "Cheeky",
    poster: "https://image.tmdb.org/t/p/w500/7gqcEgJfTltbLo76nZTl8umgM1Y.jpg",
    overview:
      "While scouting out apartments in London for her Venetian boyfriend, Carla rents an apartment that overlooks the Thames. There she meet the lesbian hyper-horny real estate agent Moira.",
    release_date: 949017600,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "384680",
    title: "Hostiles",
    poster: "https://image.tmdb.org/t/p/w500/rqoezyB51GfhiloOB5ZErg5HXas.jpg",
    overview:
      "A legendary Native American-hating Army captain nearing retirement in 1892 is given one last assignment: to escort a Cheyenne chief and his family through dangerous territory back to his Montana reservation.",
    release_date: 1513900800,
    genres: [],
  },
  {
    id: "10327",
    title: "Legally Blonde 2: Red, White & Blonde",
    poster: "https://image.tmdb.org/t/p/w500/4kC0UGTuJgFnlZq2ZM6OiY7nuY8.jpg",
    overview:
      "After Elle Woods, the eternally perky, fashionably adventurous, famously blonde Harvard Law grad gets fired by her law firm because of her opposition to animal testing, she takes her fight to Washington. As an aide for Congresswoman Victoria Rudd, she pushes for a bill to ban testing once and for all, but it's her building's doorman who advises her on how to get her way on the Hill.",
    release_date: 1057107600,
    genres: ["Comedy"],
  },
  {
    id: "7518",
    title: "Over the Hedge",
    poster: "https://image.tmdb.org/t/p/w500/6qKM3Rl1tQgOFO1fMA7DAizWZ5n.jpg",
    overview:
      "A scheming raccoon fools a mismatched family of forest creatures into helping him repay a debt of food, by invading the new suburban sprawl that popped up while they were hibernating – and learns a lesson about family himself.",
    release_date: 1147827600,
    genres: [],
  },
  {
    id: "210860",
    title: "Mortdecai",
    poster: "https://image.tmdb.org/t/p/w500/qo9ko4fmIOoIGUN0iqwS0KcKM57.jpg",
    overview:
      "Art dealer, Charles Mortdecai, searches for a stolen painting rumored to contain a secret code that gains access to hidden Nazi gold.",
    release_date: 1421798400,
    genres: ["Comedy", "Adventure"],
  },
  {
    id: "23823",
    title: "Wrong Turn 3: Left for Dead",
    poster: "https://image.tmdb.org/t/p/w500/84s4LMWuGbm4xPWW5PSbHyQhh33.jpg",
    overview:
      "A group of people find themselves trapped in the backwoods of West Virginia, fighting for their lives against a group of vicious and horribly disfigured inbred cannibals.",
    release_date: 1230768000,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "68724",
    title: "Elysium",
    poster: "https://image.tmdb.org/t/p/w500/goiWTT9wTvbBBH8ixFpVZEguULr.jpg",
    overview:
      "In the year 2159, two classes of people exist: the very wealthy who live on a pristine man-made space station called Elysium, and the rest, who live on an overpopulated, ruined Earth. Secretary Rhodes (Jodie Foster), a hard line government ofﬁcial, will stop at nothing to enforce anti-immigration laws and preserve the luxurious lifestyle of the citizens of Elysium. That doesn’t stop the people of Earth from trying to get in, by any means they can. When unlucky Max (Matt Damon) is backed into a corner, he agrees to take on a daunting mission that, if successful, will not only save his life, but could bring equality to these polarized worlds.",
    release_date: 1375837200,
    genres: ["Drama", "War"],
  },
  {
    id: "13183",
    title: "Watchmen",
    poster: "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
    overview:
      "In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered, an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger.",
    release_date: 1236211200,
    genres: ["Drama"],
  },
  {
    id: "109443",
    title: "Anchorman 2: The Legend Continues",
    poster: "https://image.tmdb.org/t/p/w500/55volAzeebtFzyrx7DJkegvw8Ta.jpg",
    overview:
      "With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm.",
    release_date: 1387324800,
    genres: ["Comedy"],
  },
  {
    id: "7299",
    title: "Equilibrium",
    poster: "https://image.tmdb.org/t/p/w500/q6VzUsHs4Z3myBHkrPAA3avfGwn.jpg",
    overview:
      "In a dystopian future, a totalitarian regime maintains peace by subduing the populace with a drug, and displays of emotion are punishable by death. A man in charge of enforcing the law rises to overthrow the system.",
    release_date: 1039132800,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "122906",
    title: "About Time",
    poster: "https://image.tmdb.org/t/p/w500/iR1bVfURbN7r1C46WHFbwCkVve.jpg",
    overview:
      "The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life – so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",
    release_date: 1376614800,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "574",
    title: "The Man Who Knew Too Much",
    poster: "https://image.tmdb.org/t/p/w500/gy8YBRjCQRIT9x9G9F5fpnFD4xw.jpg",
    overview:
      "A widescreen, Technicolor remake by Hitchcock of his 1934 film of the same title. A couple vacationing in Morocco with their young son accidentally stumble upon an assassination plot. When the child is kidnapped to ensure their silence, they have to take matters into their own hands to save him.",
    release_date: -428716800,
    genres: ["Crime", "Mystery", "Thriller"],
  },
  {
    id: "181812",
    title: "Star Wars: The Rise of Skywalker",
    poster: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    overview:
      "The next installment in the franchise and the conclusion of the “Star Wars“ sequel trilogy as well as the “Skywalker Saga“.",
    release_date: 1576627200,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "41154",
    title: "Men in Black 3",
    poster: "https://image.tmdb.org/t/p/w500/90DdoEStzeObs96fsYf4GG544iN.jpg",
    overview:
      "Agents J and K are back...in time. J has seen some inexplicable things in his 15 years with the Men in Black, but nothing, not even aliens, perplexes him as much as his wry, reticent partner. But when K's life and the fate of the planet are put at stake, Agent J will have to travel back in time to put things right. J discovers that there are secrets to the universe that K never told him - secrets that will reveal themselves as he teams up with the young Agent K to save his partner, the agency, and the future of humankind.",
    release_date: 1337734800,
    genres: ["Action", "Comedy", "Science Fiction"],
  },
  {
    id: "445651",
    title: "The Darkest Minds",
    poster: "https://image.tmdb.org/t/p/w500/94RaS52zmsqaiAe1TG20pdbJCZr.jpg",
    overview:
      "After a disease kills 98% of America's children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.",
    release_date: 1533171600,
    genres: ["Science Fiction"],
  },
  {
    id: "1895",
    title: "Star Wars: Episode III - Revenge of the Sith",
    poster: "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    overview:
      "Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice – Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring – the twin children born in secrecy who will grow up to become heroes.",
    release_date: 1116291600,
    genres: ["Science Fiction", "Adventure", "Action"],
  },
  {
    id: "9472",
    title: "DodgeBall: A True Underdog Story",
    poster: "https://image.tmdb.org/t/p/w500/yEOVrTOvVFtd0hsw2Sjfm2t6aVn.jpg",
    overview:
      "When megalomaniacal White Goodman, the owner of a trendy, high-end fitness center, makes a move to take over the struggling local gym run by happy-go-lucky Pete La Fleur, there's only one way for La Fleur to fight back: dodgeball. Aided by a dodgeball guru and Goodman's attorney, La Fleur and his rag-tag team of underdogs launch a knock-down, drag-out battle in which the winner takes all.",
    release_date: 1087520400,
    genres: ["Comedy"],
  },
  {
    id: "391713",
    title: "Lady Bird",
    poster: "https://image.tmdb.org/t/p/w500/iySFtKLrWvVzXzlFj7x1zalxi5G.jpg",
    overview:
      "A California high school student plans to escape from her family and small town by going to college in New York, much to the disapproval of wildly loving, deeply opinionated and strong-willed mother.",
    release_date: 1504832400,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "260514",
    title: "Cars 3",
    poster: "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg",
    overview:
      "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, inspiration from the late Fabulous Hudson Hornet, and a few unexpected turns. Proving that #95 isn't through yet will test the heart of a champion on Piston Cup Racing’s biggest stage!",
    release_date: 1497488400,
    genres: ["Horror"],
  },
  {
    id: "487670",
    title: "The Death of Superman",
    poster: "https://image.tmdb.org/t/p/w500/y0uxSHaSFmt6XaBJgjkeLqe7aM.jpg",
    overview:
      "When a hulking monster arrives on Earth and begins a mindless rampage, the Justice League is quickly called in to stop it. But it soon becomes apparent that only Superman can stand against the monstrosity.",
    release_date: 1547337600,
    genres: ["Animation", "Action", "Drama", "Science Fiction"],
  },
  {
    id: "10047",
    title: "The Messenger: The Story of Joan of Arc",
    poster: "https://image.tmdb.org/t/p/w500/rIvZPfts3aD4b5nROAysnOtSzlX.jpg",
    overview:
      "In 1429 a teenage girl from a remote French village stood before her King with a message she claimed came from God; that she would defeat the world's greatest army and liberate her country from its political and religious turmoil. Following her mission to reclaim god's diminished kingdom - through her amazing victories until her violent and untimely death.",
    release_date: 940986000,
    genres: ["Adventure", "Drama", "Action", "History", "War"],
  },
  {
    id: "334074",
    title: "Survivor",
    poster: "https://image.tmdb.org/t/p/w500/npyCpfYyYknFoY2iJPyfqp70FVX.jpg",
    overview:
      "A Foreign Service Officer in London tries to prevent a terrorist attack set to hit New York, but is forced to go on the run when she is framed for crimes she did not commit.",
    release_date: 1432170000,
    genres: ["Action", "Horror", "Science Fiction"],
  },
  {
    id: "95",
    title: "Armageddon",
    poster: "https://image.tmdb.org/t/p/w500/qcF8qt8toajvQllOMVRCUqZCxjV.jpg",
    overview:
      "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.",
    release_date: 899254800,
    genres: ["Action"],
  },
  {
    id: "138843",
    title: "The Conjuring",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    overview:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
    release_date: 1374109200,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "308531",
    title: "Teenage Mutant Ninja Turtles: Out of the Shadows",
    poster: "https://image.tmdb.org/t/p/w500/euVaCiCWz3AALcQXHT6aUqdGUo6.jpg",
    overview:
      "After supervillain Shredder escapes custody, he joins forces with mad scientist Baxter Stockman and two dimwitted henchmen, Bebop and Rocksteady, to unleash a diabolical plan to take over the world. As the Turtles prepare to take on Shredder and his new crew, they find themselves facing an even greater evil with similar intentions: the notorious Krang.",
    release_date: 1464742800,
    genres: ["Action", "Adventure", "Comedy", "Family", "Science Fiction"],
  },
  {
    id: "445571",
    title: "Game Night",
    poster: "https://image.tmdb.org/t/p/w500/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg",
    overview:
      "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
    release_date: 1519257600,
    genres: ["Mystery", "Comedy", "Crime"],
  },
  {
    id: "2976",
    title: "Hairspray",
    poster: "https://image.tmdb.org/t/p/w500/fgMka3HtFvI5OgW1eYdR9XpySxH.jpg",
    overview:
      "Pleasantly plump teenager Tracy Turnblad auditions to be on Baltimore's most popular dance show - The Corny Collins Show - and lands a prime spot. Through her newfound fame, she becomes determined to help her friends and end the racial segregation that has been a staple of the show.",
    release_date: 1184288400,
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    id: "399796",
    title: "Life of the Party",
    poster: "https://image.tmdb.org/t/p/w500/749iUAWQWeutQuTd9excjmigecw.jpg",
    overview:
      "Dumped by her husband, longtime housewife Deanna turns regret into reset by going back to college. Winding up at the same school as her daughter, Deanna plunges headlong into the campus experience – embracing fun, freedom and frat boys.",
    release_date: 1525914000,
    genres: ["Drama", "TV Movie"],
  },
  {
    id: "8681",
    title: "Taken",
    poster: "https://image.tmdb.org/t/p/w500/wrJjDB8SSJJKcpXVf4KAxZIHvBZ.jpg",
    overview:
      "While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.",
    release_date: 1203292800,
    genres: [],
  },
  {
    id: "55721",
    title: "Bridesmaids",
    poster: "https://image.tmdb.org/t/p/w500/cruSkSZJEmv9pbDoHBwdHdsnvHO.jpg",
    overview:
      "Annie's life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian's maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she’ll show Lillian and her bridesmaids just how far you’ll go for someone you love.",
    release_date: 1305248400,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "556803",
    title: "The Princess Switch",
    poster: "https://image.tmdb.org/t/p/w500/A8XgZE8CsHiYN243MEd07GLCep.jpg",
    overview:
      "When a down-to-earth Chicago baker and a soon-to-be princess discover they look like twins, they hatch a Christmastime plan to trade places.",
    release_date: 1542326400,
    genres: ["Drama", "Romance"],
  },
  {
    id: "76617",
    title: "Texas Chainsaw 3D",
    poster: "https://image.tmdb.org/t/p/w500/dwIQ7WDCSiIcNdbferTcU7uI0KV.jpg",
    overview:
      "A young woman learns that she has inherited a Texas estate from her deceased grandmother. After embarking on a road trip with friends to uncover her roots, she finds she is the sole owner of a lavish, isolated Victorian mansion. But her newfound wealth comes at a price as she stumbles upon a horror that awaits her in the mansion’s dank cellars.",
    release_date: 1357171200,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "49524",
    title: "R.I.P.D.",
    poster: "https://image.tmdb.org/t/p/w500/fQ7CI5zmmhZlHuYBFKgK9w4hwlS.jpg",
    overview:
      "A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him. Based on the comic by Peter M. Lenkov.",
    release_date: 1374109200,
    genres: ["Western"],
  },
  {
    id: "2770",
    title: "American Pie 2",
    poster: "https://image.tmdb.org/t/p/w500/wa3vePBNEfAJtzXs8WFTyD7bliD.jpg",
    overview:
      "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest party ever to be seen, even if the preparation doesn't always go to plan. Especially when Stifler, Finch and Jim become more close to each other than they ever want to be and when Jim mistakes super glue for lubricant...",
    release_date: 997405200,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "8224",
    title: "8MM",
    poster: "https://image.tmdb.org/t/p/w500/h9JCnVmuJgr37czGoNynXAoOJjj.jpg",
    overview:
      "A small, seemingly innocuous plastic reel of film leads surveillance specialist Tom Welles down an increasingly dark and frightening path. With the help of the streetwise Max, he relentlessly follows a bizarre trail of evidence to determine the fate of a complete stranger. As his work turns into obsession, he drifts farther and farther away from his wife, family and simple life as a small-town PI.",
    release_date: 919987200,
    genres: ["Thriller", "Crime", "Mystery"],
  },
  {
    id: "454227",
    title: "Outlaw King",
    poster: "https://image.tmdb.org/t/p/w500/rT49ousKUWN3dV7UlhaC9onTNdl.jpg",
    overview:
      "Forced into exile by the English after being crowned King of Scotland, legendary warrior Robert the Bruce fights to reclaim the throne.",
    release_date: 1541721600,
    genres: ["Drama", "Action", "History"],
  },
  {
    id: "629",
    title: "The Usual Suspects",
    poster: "https://image.tmdb.org/t/p/w500/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg",
    overview:
      "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
    release_date: 806115600,
    genres: ["Drama", "Crime", "Thriller"],
  },
  {
    id: "371638",
    title: "The Disaster Artist",
    poster: "https://image.tmdb.org/t/p/w500/jj84nF5vYRD0HUTowBKcrKk8hZP.jpg",
    overview:
      "An aspiring actor in Hollywood meets an enigmatic stranger by the name of Tommy Wiseau, the meeting leads the actor down a path nobody could have predicted; creating the worst movie ever made.",
    release_date: 1489276800,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "956",
    title: "Mission: Impossible III",
    poster: "https://image.tmdb.org/t/p/w500/5l0hS4A119jCA1A02XsFZHq1uRD.jpg",
    overview:
      "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
    release_date: 1146618000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "396371",
    title: "Molly's Game",
    poster: "https://image.tmdb.org/t/p/w500/in43bQ7k0ttr666IPP94IlbQbTR.jpg",
    overview:
      "Molly Bloom, a young skier and former Olympic hopeful becomes a successful entrepreneur (and a target of an FBI investigation) when she establishes a high-stakes, international poker game.",
    release_date: 1513814400,
    genres: ["Crime", "Drama"],
  },
  {
    id: "109439",
    title: "The Hangover Part III",
    poster: "https://image.tmdb.org/t/p/w500/vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
    overview:
      "This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
    release_date: 1369270800,
    genres: ["Comedy"],
  },
  {
    id: "395",
    title: "AVP: Alien vs. Predator",
    poster: "https://image.tmdb.org/t/p/w500/2DKoPom57PVtJWcJlq7bS7JpahU.jpg",
    overview:
      "When scientists discover something in the Arctic that appears to be a buried Pyramid, they send a research team out to investigate. Little do they know that they are about to step into a hunting ground where Aliens are grown as sport for the Predator race.",
    release_date: 1092272400,
    genres: ["Adventure", "Science Fiction", "Action", "Horror"],
  },
  {
    id: "8913",
    title: "Pet Sematary",
    poster: "https://image.tmdb.org/t/p/w500/8ZtH1V4rhrtP53ezlEWrCaMALXF.jpg",
    overview:
      "Dr. Louis Creed's family moves into the country house of their dreams and discover a pet cemetery at the back of their property. The cursed burial ground deep in the woods brings the dead back to life -- with 'minor' problems. At first, only the family's cat makes the return trip, but an accident forces a heartbroken father to contemplate the unthinkable.",
    release_date: 609123600,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "53932",
    title: "The Ages of Lulu",
    poster: "https://image.tmdb.org/t/p/w500/zwQrgqrMSqidARZrquEjQ10T8bX.jpg",
    overview:
      "Fifteen-year-old Lulu has never known any affection from her family. But when she goes to a rock concert with Pablo, a friend of the family, he introduces Lulu to her first sexual experience. Years later, Pablo and Lulu have married; Pablo has created a sheltered, private world for Lulu, into which nothing intrudes. However, Lulu tires of her cloistered existence, and begins hanging out in shady bars, looking for vicarious thrills and danger.",
    release_date: 661046400,
    genres: ["Drama"],
  },
  {
    id: "1359",
    title: "American Psycho",
    poster: "https://image.tmdb.org/t/p/w500/3ddHhfMlZHZCefHDeaP8FzSoH4Y.jpg",
    overview:
      "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
    release_date: 955587600,
    genres: [],
  },
  {
    id: "508",
    title: "Love Actually",
    poster: "https://image.tmdb.org/t/p/w500/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg",
    overview:
      "Follows seemingly unrelated people as their lives begin to intertwine while they fall in – and out – of love. Affections languish and develop as Christmas draws near.",
    release_date: 1062896400,
    genres: ["Drama"],
  },
  {
    id: "97020",
    title: "RoboCop",
    poster: "https://image.tmdb.org/t/p/w500/gM5ql3BKYmHG3WtZ0buKXN7xY8O.jpg",
    overview:
      "In RoboCop, the year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology.  Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America.  Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it.  When Alex Murphy – a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit – is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer.  OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine.",
    release_date: 1391040000,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "622",
    title: "The Ninth Gate",
    poster: "https://image.tmdb.org/t/p/w500/rxw9l9YNL14ODdmAavUwHLBjiDo.jpg",
    overview:
      "An all-expenses-paid international search for a rare copy of the book, 'The Nine Gates of the Shadow Kingdom' brings an unscrupulous book dealer deep into a world of murder, double-dealing and satanic worship.",
    release_date: 935542800,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "6977",
    title: "No Country for Old Men",
    poster: "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    overview:
      "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
    release_date: 1194480000,
    genres: ["Documentary"],
  },
  {
    id: "281957",
    title: "The Revenant",
    poster: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    overview:
      "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
    release_date: 1451001600,
    genres: ["Horror"],
  },
  {
    id: "8909",
    title: "Wanted",
    poster: "https://image.tmdb.org/t/p/w500/rTvUr2ESdZ1Ht5zNbgUNmNEHyUT.jpg",
    overview:
      "Doormat Wesley Gibson discovers that his recently murdered father – who Wesley never knew – belonged to a secret guild of assassins. After a leather-clad sexpot drafts Wesley into the society, he hones his innate killing skills and turns avenger.",
    release_date: 1213837200,
    genres: ["Action"],
  },
  {
    id: "1491",
    title: "The Illusionist",
    poster: "https://image.tmdb.org/t/p/w500/wlRNgr1AsodUmpUTl3eFz2Hfl20.jpg",
    overview:
      "With his eye on a lovely aristocrat, a gifted illusionist named Eisenheim uses his powers to win her away from her betrothed, a crowned prince. But Eisenheim's scheme creates tumult within the monarchy and ignites the suspicion of a dogged inspector.",
    release_date: 1155862800,
    genres: ["Fantasy"],
  },
  {
    id: "1948",
    title: "Crank",
    poster: "https://image.tmdb.org/t/p/w500/toaY9CoMAy37QNv8HbbUqWS4X1Q.jpg",
    overview:
      "Professional assassin Chev Chelios learns his rival has injected him with a poison that will kill him if his heart rate drops.",
    release_date: 1156986000,
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    id: "396806",
    title: "Anon",
    poster: "https://image.tmdb.org/t/p/w500/xhBTO9n3fxy3HJt7WlR9h9vvVmk.jpg",
    overview:
      "Set in a near-future world where there is no privacy, ignorance or anonymity, our private memories are recorded and crime almost ceases to exist. In trying to solve a series of unsolved murders, Sal Frieland stumbles onto a young woman who appears to have subverted the system and disappeared. She has no identity, no history and no record. Sal realizes it may not be the end of crime but the beginning. Known only as 'The Girl', Sal must find her before he becomes the next victim.",
    release_date: 1525309200,
    genres: ["Science Fiction", "Thriller"],
  },
  {
    id: "154400",
    title: "The Drop",
    poster: "https://image.tmdb.org/t/p/w500/tISeGHqQTzL91FVf8y6wyDU3TIO.jpg",
    overview:
      "Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost.",
    release_date: 1410483600,
    genres: ["Drama"],
  },
  {
    id: "7555",
    title: "Rambo",
    poster: "https://image.tmdb.org/t/p/w500/bFjt1JwDRn98j03UQgQ005bNrti.jpg",
    overview:
      "When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action.  Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.",
    release_date: 1201132800,
    genres: ["Action", "Thriller"],
  },
  {
    id: "406997",
    title: "Wonder",
    poster: "https://image.tmdb.org/t/p/w500/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
    overview:
      "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
    release_date: 1510531200,
    genres: [],
  },
  {
    id: "10719",
    title: "Elf",
    poster: "https://image.tmdb.org/t/p/w500/zDHFQmaxlTIJGQDfTrLTL9RK2tQ.jpg",
    overview:
      "When young Buddy falls into Santa's gift sack on Christmas Eve, he's transported back to the North Pole and raised as a toy-making elf by Santa's helpers. But as he grows into adulthood, he can't shake the nagging feeling that he doesn't belong. Buddy vows to visit Manhattan and find his real dad, a workaholic publisher.",
    release_date: 1065661200,
    genres: ["Comedy", "Family", "Fantasy"],
  },
  {
    id: "3035",
    title: "Frankenstein",
    poster: "https://image.tmdb.org/t/p/w500/jFpc9w3RmYeaOXMEfrtgshwVf4u.jpg",
    overview:
      "Henry Frankenstein is a doctor who is trying to discover a way to make the dead walk. He succeeds and creates a monster that has to deal with living again.",
    release_date: -1202774400,
    genres: [],
  },
  {
    id: "222935",
    title: "The Fault in Our Stars",
    poster: "https://image.tmdb.org/t/p/w500/clmvI4B5JB2ToPGtiHodaLMFaoM.jpg",
    overview:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    release_date: 1400202000,
    genres: ["Romance", "Drama"],
  },
  {
    id: "10625",
    title: "Mean Girls",
    poster: "https://image.tmdb.org/t/p/w500/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
    overview:
      "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    release_date: 1083286800,
    genres: ["Comedy"],
  },
  {
    id: "9479",
    title: "The Nightmare Before Christmas",
    poster: "https://image.tmdb.org/t/p/w500/vFujAtlgTEh0ngIMs4hpGVdJ3TV.jpg",
    overview:
      "Tired of scaring humans every October 31 with the same old bag of tricks, Jack Skellington, the spindly king of Halloween Town, kidnaps Santa Claus and plans to deliver shrunken heads and other ghoulish gifts to children on Christmas morning. But as Christmas approaches, Jack's rag-doll girlfriend, Sally, tries to foil his misguided plans.",
    release_date: 750124800,
    genres: ["Animation", "Family"],
  },
  {
    id: "123553",
    title: "The Mortal Instruments: City of Bones",
    poster: "https://image.tmdb.org/t/p/w500/yD3FHZ5gE0uKpBCYsxlq82UJCcP.jpg",
    overview:
      "In New York City, Clary Fray, a seemingly ordinary teenager, learns that she is descended from a line of Shadowhunters — half-angel warriors who protect humanity from evil forces. After her mother disappears, Clary joins forces with a group of Shadowhunters and enters Downworld, an alternate realm filled with demons, vampires, and a host of other creatures. Clary and her companions must find and protect an ancient cup that holds the key to her mother's future.",
    release_date: 1377046800,
    genres: ["Action", "Adventure", "Drama", "Mystery", "Romance", "Fantasy"],
  },
  {
    id: "44833",
    title: "Battleship",
    poster: "https://image.tmdb.org/t/p/w500/mXb3hot6ZW4hMfpZSK7UtD70WgM.jpg",
    overview:
      "When mankind beams a radio signal into space, a reply comes from ‘Planet G’, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential that his brother, and his fiancée's father, Admiral Shane, expect of him.",
    release_date: 1334106000,
    genres: [],
  },
  {
    id: "162",
    title: "Edward Scissorhands",
    poster: "https://image.tmdb.org/t/p/w500/1RFIbuW9Z3eN9Oxw2KaQG5DfLmD.jpg",
    overview:
      "A small suburban town receives a visit from a castaway unfinished science experiment named Edward.",
    release_date: 660355200,
    genres: ["Fantasy", "Drama", "Romance"],
  },
  {
    id: "391",
    title: "A Fistful of Dollars",
    poster: "https://image.tmdb.org/t/p/w500/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg",
    overview:
      "The Man With No Name enters the Mexican village of San Miguel in the midst of a power struggle among the three Rojo brothers and sheriff John Baxter. When a regiment of Mexican soldiers bearing gold intended to pay for new weapons is waylaid by the Rojo brothers, the stranger inserts himself into the middle of the long-simmering battle, selling false information to both sides for his own benefit.",
    release_date: -167356800,
    genres: ["Western"],
  },
  {
    id: "9257",
    title: "S.W.A.T.",
    poster: "https://image.tmdb.org/t/p/w500/9dkLVqkQs3PGXWlzmMYBAQytdpD.jpg",
    overview:
      "Hondo Harrelson recruits Jim Street to join an elite unit of the Los Angeles Police Department. Together they seek out more members, including tough Deke Kay and single mom Chris Sanchez. The team's first big assignment is to escort crime boss Alex Montel to prison. It seems routine, but when Montel offers a huge reward to anyone who can break him free, criminals of various stripes step up for the prize.",
    release_date: 1060304400,
    genres: ["Comedy"],
  },
  {
    id: "616",
    title: "The Last Samurai",
    poster: "https://image.tmdb.org/t/p/w500/lsasOSgYI85EHygtT5SvcxtZVYT.jpg",
    overview:
      "Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurai's way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.",
    release_date: 1070582400,
    genres: ["Drama", "Action"],
  },
  {
    id: "4922",
    title: "The Curious Case of Benjamin Button",
    poster: "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg",
    overview:
      "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.",
    release_date: 1230163200,
    genres: ["Fantasy", "Drama", "Thriller", "Mystery", "Romance"],
  },
  {
    id: "1878",
    title: "Fear and Loathing in Las Vegas",
    poster: "https://image.tmdb.org/t/p/w500/jwUnGcLBzKNEIzgUUVWAUSwuuBt.jpg",
    overview:
      "Raoul Duke and his attorney Dr. Gonzo drive a red convertible across the Mojave desert to Las Vegas with a suitcase full of drugs to cover a motorcycle race. As their consumption of drugs increases at an alarming rate, the stoned duo trash their hotel room and fear legal repercussions. Duke begins to drive back to L.A., but after an odd run-in with a cop, he returns to Sin City and continues his wild drug binge.",
    release_date: 895798800,
    genres: ["Adventure", "Drama", "Comedy"],
  },
  {
    id: "254",
    title: "King Kong",
    poster: "https://image.tmdb.org/t/p/w500/lBtlVlECMW98tz3a3O1C2s1vric.jpg",
    overview:
      "In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady.",
    release_date: 1134345600,
    genres: [],
  },
  {
    id: "392044",
    title: "Murder on the Orient Express",
    poster: "https://image.tmdb.org/t/p/w500/kc2gJjebceoFgOQbukzPzP8SXVZ.jpg",
    overview:
      "Genius Belgian detective Hercule Poirot investigates the murder of an American tycoon aboard the Orient Express train.",
    release_date: 1509667200,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "8277",
    title: "American Pie Presents: Beta House",
    poster: "https://image.tmdb.org/t/p/w500/cEJMqmCGdKJkmjWwi3Iv6l4kMIK.jpg",
    overview:
      "Erik, Ryan, and Cooze start college and pledge the Beta House fraternity, presided over by none other than legendary Dwight Stifler. But chaos ensues when a fraternity of geeks threatens to stop the debauchery and the Betas have to make a stand for their right to party.",
    release_date: 1197244800,
    genres: ["Comedy"],
  },
  {
    id: "12092",
    title: "Alice in Wonderland",
    poster: "https://image.tmdb.org/t/p/w500/1cbF3s99hCQcFdWG8hrGhKSBles.jpg",
    overview:
      "On a golden afternoon, young Alice follows a White Rabbit, who disappears down a nearby rabbit hole. Quickly following him, she tumbles into the burrow - and enters the merry, topsy-turvy world of Wonderland! Memorable songs and whimsical escapades highlight Alice's journey, which culminates in a madcap encounter with the Queen of Hearts - and her army of playing cards!",
    release_date: -583804800,
    genres: ["Animation", "Fantasy"],
  },
  {
    id: "9762",
    title: "Step Up",
    poster: "https://image.tmdb.org/t/p/w500/9Y2i54Etpx7JvCxj6D8P3VAH152.jpg",
    overview:
      "Everyone deserves a chance to follow their dreams, but some people only get one shot. Tyler Gage is a rebel from the wrong side of Baltimore's tracks and the only thing that stands between him and an unfulfilled life are his dreams of one day making it out of there. Nora is a privileged ballet dancer attending Baltimore's ultra-elite Maryland School of the Arts",
    release_date: 1155258000,
    genres: ["Animation"],
  },
  {
    id: "1647",
    title: "The Recruit",
    poster: "https://image.tmdb.org/t/p/w500/zd9eNagUB7FEaqffnSw3n3Nii4p.jpg",
    overview:
      "A brilliant CIA trainee must prove his worth at the Farm, the agency's secret training grounds, where he learns to watch his back and trust no one.",
    release_date: 1043971200,
    genres: [],
  },
  {
    id: "117251",
    title: "White House Down",
    poster: "https://image.tmdb.org/t/p/w500/hXLScIERphkTsMGdfKKvF4p4SPB.jpg",
    overview:
      "Capitol Policeman John Cale has just been denied his dream job with the Secret Service of protecting President James Sawyer. Not wanting to let down his little girl with the news, he takes her on a tour of the White House, when the complex is overtaken by a heavily armed paramilitary group. Now, with the nation's government falling into chaos and time running out, it's up to Cale to save the president, his daughter, and the country.",
    release_date: 1372294800,
    genres: ["Action", "Drama", "Thriller"],
  },
  {
    id: "27576",
    title: "Salt",
    poster: "https://image.tmdb.org/t/p/w500/ppXyhOe8UCEOrBRSYqE3SkHwrcR.jpg",
    overview:
      "As a CIA officer, Evelyn Salt swore an oath to duty, honor and country. Her loyalty will be tested when a defector accuses her of being a Russian spy. Salt goes on the run, using all her skills and years of experience as a covert operative to elude capture. Salt's efforts to prove her innocence only serve to cast doubt on her motives, as the hunt to uncover the truth behind her identity continues and the question remains: 'Who is Salt?'",
    release_date: 1279674000,
    genres: [],
  },
  {
    id: "8274",
    title: "American Pie Presents: Band Camp",
    poster: "https://image.tmdb.org/t/p/w500/NfxIDnzDCL8vSPjQAtetIzOAxE.jpg",
    overview:
      "Everyone has 'moved on', except for Sherman and Jim Levenstein's still understanding father. Little Matt Stiffler wants to join his older brother Steve's business and, after everything Matt has heard from Jim's band-geek wife, he plans to go back to band camp and make a video of his own.",
    release_date: 1130634000,
    genres: ["Comedy"],
  },
  {
    id: "1495",
    title: "Kingdom of Heaven",
    poster: "https://image.tmdb.org/t/p/w500/uk55nBEFIQFveIiy9jvLGiVtk4h.jpg",
    overview:
      "After his wife dies, a blacksmith named Balian is thrust into royalty, political intrigue and bloody holy wars during the Crusades.",
    release_date: 1115082000,
    genres: ["Drama", "Action", "Adventure", "History", "War"],
  },
  {
    id: "7551",
    title: "Déjà Vu",
    poster: "https://image.tmdb.org/t/p/w500/hL8W0qgoPKw7xQy7LMir2numqsP.jpg",
    overview:
      "Called in to recover evidence in the aftermath of a horrific explosion on a New Orleans ferry, Federal agent Doug Carlin gets pulled away from the scene and taken to a top-secret government lab that uses a time-shifting surveillance device to help prevent crime.",
    release_date: 1164153600,
    genres: [],
  },
  {
    id: "61791",
    title: "Rise of the Planet of the Apes",
    poster: "https://image.tmdb.org/t/p/w500/cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg",
    overview:
      "Scientist Will Rodman is determined to find a cure for Alzheimer's, the disease which has slowly consumed his father. Will feels certain he is close to a breakthrough and tests his latest serum on apes, noticing dramatic increases in intelligence and brain activity in the primate subjects – especially Caesar, his pet chimpanzee.",
    release_date: 1312333200,
    genres: ["Thriller", "Action", "Drama", "Science Fiction"],
  },
  {
    id: "13342",
    title: "Fast Times at Ridgemont High",
    poster: "https://image.tmdb.org/t/p/w500/kBMHVEbMoV9TTzijZSUhAWYd2am.jpg",
    overview:
      "Follows a group of high school students growing up in southern California, based on the real-life adventures chronicled by Cameron Crowe. Stacy Hamilton and Mark Ratner are looking for a love interest, and are helped along by their older classmates, Linda Barrett and Mike Damone, respectively. The center of the film is held by Jeff Spicoli, a perpetually stoned surfer dude who faces off with the resolute Mr. Hand, who is convinced that everyone is on dope.",
    release_date: 398048400,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "11778",
    title: "The Deer Hunter",
    poster: "https://image.tmdb.org/t/p/w500/wT3DeCZ3Ax5VYhKu6ajyEvA1hXG.jpg",
    overview:
      "A group of working-class friends decides to enlist in the Army during the Vietnam War and finds it to be hellish chaos -- not the noble venture they imagined. Before they left, Steven married his pregnant girlfriend -- and Michael and Nick were in love with the same woman. But all three are different men upon their return.",
    release_date: 281923200,
    genres: ["Drama", "War"],
  },
  {
    id: "389",
    title: "12 Angry Men",
    poster: "https://image.tmdb.org/t/p/w500/wh0f80G6GZvYBNiYmvqFngt3IYq.jpg",
    overview:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    release_date: -403056000,
    genres: ["Crime", "Drama"],
  },
  {
    id: "188927",
    title: "Star Trek Beyond",
    poster: "https://image.tmdb.org/t/p/w500/65NVDW2LnHt2ko3m8ACxFo8E21f.jpg",
    overview:
      "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
    release_date: 1467853200,
    genres: ["Documentary"],
  },
  {
    id: "9589",
    title: "Christiane F.",
    poster: "https://image.tmdb.org/t/p/w500/pxjCfoKO48JJN7L3QieYGOwWDig.jpg",
    overview:
      "This movie portrays the drug scene in Berlin in the 70s, following tape recordings of Christiane F. 14 years old Christiane lives with her mother and little sister in a typical multi-storey apartment building in Berlin. She's fascinated by the 'Sound', a new disco with most modern equipment. Although she's legally too young, she asks a friend to take her. There she meets Detlef, who's in a clique where everybody's on drugs. Step by step she gets drawn deeper into the scene.",
    release_date: 354934800,
    genres: ["Documentary", "Drama"],
  },
  {
    id: "395992",
    title: "Life",
    poster: "https://image.tmdb.org/t/p/w500/lja0Kh17LLleh6DhtixEh7Z7T6D.jpg",
    overview:
      "The six-member crew of the International Space Station is tasked with studying a sample from Mars that may be the first proof of extra-terrestrial life, which proves more intelligent than ever expected.",
    release_date: 1490140800,
    genres: ["Drama"],
  },
  {
    id: "581420",
    title: "Walk. Ride. Rodeo.",
    poster: "https://image.tmdb.org/t/p/w500/eUQyvpTtirjQRYi4gVRsVrDvf6T.jpg",
    overview:
      "Tells the incredible true story of Amberley Snyder, a nationally ranked rodeo barrel racer who defies the odds after barely surviving a car accident that leaves her paralyzed from the waist down.",
    release_date: 1552003200,
    genres: ["Drama"],
  },
  {
    id: "346364",
    title: "It",
    poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    overview:
      "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    release_date: 1504659600,
    genres: [],
  },
  {
    id: "8467",
    title: "Dumb and Dumber",
    poster: "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
    overview:
      "Lloyd and Harry are two men whose stupidity is really indescribable. When Mary, a beautiful woman, loses an important suitcase with money before she leaves for Aspen, the two friends (who have found the suitcase) decide to return it to her. After some 'adventures' they finally get to Aspen where, using the lost money they live it up and fight for Mary's heart.",
    release_date: 787536000,
    genres: ["Comedy"],
  },
  {
    id: "505058",
    title: "Unfriended: Dark Web",
    poster: "https://image.tmdb.org/t/p/w500/gnj2opTQWGaLtB7kZ4OuMtG2RWa.jpg",
    overview:
      "​When a 20-something finds a cache of hidden files on his new laptop, he and his friends are unwittingly thrust into the depths of the dark web. They soon discover someone has been watching their every move and will go to unimaginable lengths to protect the dark web.",
    release_date: 1531962000,
    genres: ["Horror"],
  },
  {
    id: "948",
    title: "Halloween",
    poster: "https://image.tmdb.org/t/p/w500/yzVhqSi3XkEQOovR4yy2lVTZiQO.jpg",
    overview:
      "Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
    release_date: 278035200,
    genres: ["Horror", "Comedy", "Animation"],
  },
  {
    id: "571632",
    title: "Another Child",
    poster: "https://image.tmdb.org/t/p/w500/ukGYYwHzBoGau8BnYtO5rPHhaxH.jpg",
    overview:
      "An ordinary 17-year-old girl Joo-ri finds out that her father is having an affair with the mother of her classmate Yoon-ah. Joo-ri and Yoon-ah try to stop them from seeing each other but it only makes things worse. And to top it off, they discover that Yoon-ah’s mother, a single mom, is pregnant. Soon, everyone involved are confronted by this circle of conflict and they must each struggle through their own growing pains.",
    release_date: 1554944400,
    genres: ["Drama"],
  },
  {
    id: "11576",
    title: "It's a Mad, Mad, Mad, Mad World",
    poster: "https://image.tmdb.org/t/p/w500/5S8VWhy4aE47MOTYqrFitTS5Jpw.jpg",
    overview:
      "A group of strangers come across a man dying after a car crash who proceeds to tell them about the $350,000 he buried in California. What follows is the madcap adventures of those strangers as each attempts to claim the prize for himself.",
    release_date: -194140800,
    genres: [],
  },
  {
    id: "259693",
    title: "The Conjuring 2",
    poster: "https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
    overview:
      "Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.",
    release_date: 1463101200,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "274854",
    title: "The Last Witch Hunter",
    poster: "https://image.tmdb.org/t/p/w500/qXvOpA2nhK5HQ6I95sN3nnMtfjH.jpg",
    overview:
      "The modern world holds many secrets, but by far the most astounding is that witches still live among us; vicious supernatural creatures intent on unleashing the Black Death upon the world and putting an end to the human race once and for all. Armies of witch hunters have battled this unnatural enemy for centuries, including Kaulder, a valiant warrior who many years ago slayed the all-powerful Witch Queen, decimating her followers in the process. In the moments right before her death, the Queen cursed Kaulder with immortality, forever separating him from his beloved wife and daughter. Today, Kaulder is the last living hunter who has spent his immortal life tracking down rogue witches, all the while yearning for his long-lost family.",
    release_date: 1445389200,
    genres: ["Fantasy", "Action", "Adventure", "Science Fiction"],
  },
  {
    id: "238713",
    title: "Spy",
    poster: "https://image.tmdb.org/t/p/w500/vPBmfMHxQvRRNGYD5S5ko2KnX56.jpg",
    overview:
      "A desk-bound CIA analyst volunteers to go undercover to infiltrate the world of a deadly arms dealer, and prevent diabolical global disaster.",
    release_date: 1430874000,
    genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "381283",
    title: "mother!",
    poster: "https://image.tmdb.org/t/p/w500/2yOKarmL8B4oXaLXUdHu882SUbu.jpg",
    overview:
      "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
    release_date: 1505264400,
    genres: ["Drama"],
  },
  {
    id: "273481",
    title: "Sicario",
    poster: "https://image.tmdb.org/t/p/w500/tw0lXhbNkklvseuJ4aYldkVyXV7.jpg",
    overview:
      "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
    release_date: 1442451600,
    genres: ["Drama"],
  },
  {
    id: "1367",
    title: "Rocky II",
    poster: "https://image.tmdb.org/t/p/w500/a9UbfUELZHj96tBVWnKrDrtnQcr.jpg",
    overview:
      "After Rocky goes the distance with champ Apollo Creed, both try to put the fight behind them and move on. Rocky settles down with Adrian but can't put his life together outside the ring, while Creed seeks a rematch to restore his reputation. Soon enough, the 'Master of Disaster' and the 'Italian Stallion' are set on a collision course for a climactic battle that is brutal and unforgettable.",
    release_date: 298256400,
    genres: ["Drama"],
  },
  {
    id: "88751",
    title: "Journey to the Center of the Earth",
    poster: "https://image.tmdb.org/t/p/w500/myhj05hTAcQL2rhOrMqWxiioo49.jpg",
    overview:
      "On a quest to find out what happened to his missing brother, a scientist, his nephew and their mountain guide discover a fantastic and dangerous lost world in the center of the earth.",
    release_date: 1215651600,
    genres: ["Animation", "Family"],
  },
  {
    id: "4638",
    title: "Hot Fuzz",
    poster: "https://image.tmdb.org/t/p/w500/zPib4ukTSdXvHP9pxGkFCe34f3y.jpg",
    overview:
      "As a former London constable, Nicholas Angel finds it difficult to adapt to his new assignment in the sleepy British village of Sandford. Not only does he miss the excitement of the big city, but he also has a well-meaning oaf for a partner. However, when a series of grisly accidents rocks Sandford, Angel smells something rotten in the idyllic village.",
    release_date: 1171411200,
    genres: ["Crime", "Action", "Comedy"],
  },
  {
    id: "506072",
    title: "Prospect",
    poster: "https://image.tmdb.org/t/p/w500/1HpAwszXLsD8GeypDzK0me7fPFA.jpg",
    overview:
      "A teenage girl and her father travel to a remote alien moon, aiming to strike it rich. They've secured a contract to harvest a large deposit of the elusive gems hidden in the depths of the moon's toxic forest. But there are others roving the wilderness and the job quickly devolves into a fight to survive.",
    release_date: 1538442000,
    genres: ["Action", "Science Fiction", "Drama"],
  },
  {
    id: "310307",
    title: "The Founder",
    poster: "https://image.tmdb.org/t/p/w500/xeOtdI9895jGHI0CeKsE5R7qiws.jpg",
    overview:
      "The true story of how Ray Kroc, a salesman from Illinois, met Mac and Dick McDonald, who were running a burger operation in 1950s Southern California. Kroc was impressed by the brothers’ speedy system of making the food and saw franchise potential. He maneuvered himself into a position to be able to pull the company from the brothers and create a billion-dollar empire.",
    release_date: 1473728400,
    genres: ["Drama", "History"],
  },
  {
    id: "576748",
    title: "Hanggang Kailan?",
    poster: "https://image.tmdb.org/t/p/w500/iltlxbwXfoimsOIDOIqNDywJVta.jpg",
    overview:
      "Donnie and Kath, a couple who are on a trip to celebrate their second anniversary. However,  it suddenly leads to their decision that this trip will be their last.",
    release_date: 1549411200,
    genres: ["Romance", "Drama"],
  },
  {
    id: "14836",
    title: "Coraline",
    poster: "https://image.tmdb.org/t/p/w500/gPMh5rsVrDDAYMDbTcz6Up1DQ4z.jpg",
    overview:
      "When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.",
    release_date: 1233792000,
    genres: ["Animation", "Family"],
  },
  {
    id: "44912",
    title: "Green Lantern",
    poster: "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    overview:
      "For centuries, a small but powerful force of warriors called the Green Lantern Corps has sworn to keep intergalactic order. Each Green Lantern wears a ring that grants him superpowers. But when a new enemy called Parallax threatens to destroy the balance of power in the Universe, their fate and the fate of Earth lie in the hands of the first human ever recruited.",
    release_date: 1308186000,
    genres: ["Adventure", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "459910",
    title: "Braven",
    poster: "https://image.tmdb.org/t/p/w500/253Bw5I3Zj3e2thCThjO7byEUCL.jpg",
    overview:
      "A logger defends his family from a group of dangerous drug runners.",
    release_date: 1517443200,
    genres: ["Drama", "Action"],
  },
  {
    id: "313297",
    title: "Kubo and the Two Strings",
    poster: "https://image.tmdb.org/t/p/w500/la6QA9tk4Foq8OBH2Dyh5dTcw6H.jpg",
    overview:
      "Kubo mesmerizes the people in his village with his magical gift for spinning wild tales with origami. When he accidentally summons an evil spirit seeking vengeance, Kubo is forced to go on a quest to solve the mystery of his fallen samurai father and his mystical weaponry, as well as discover his own magical powers.",
    release_date: 1471482000,
    genres: ["Animation", "Adventure", "Family"],
  },
  {
    id: "11895",
    title: "Police Academy 6: City Under Siege",
    poster: "https://image.tmdb.org/t/p/w500/gRFJ3xLewH1rwEplZBfKS4vGpFV.jpg",
    overview:
      "Our favourite police men are called together to deal with a gang who rob banks and jewelers. Using their various talents as well as their extraordinary luck, the crooks stand no chance against our men and women wearing blue..",
    release_date: 605404800,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "10112",
    title: "The Aristocats",
    poster: "https://image.tmdb.org/t/p/w500/1BVOSmQUhphMgnTxnXyfQ9tL1Sc.jpg",
    overview:
      "When Madame Adelaide Bonfamille leaves her fortune to Duchess and her children—Bonfamille’s beloved family of cats—the butler plots to steal the money and kidnaps the legatees, leaving them out on a country road. All seems lost until the wily Thomas O’Malley Cat and his jazz-playing alley cats come to the aristocats’ rescue.",
    release_date: 30758400,
    genres: ["Animation", "Comedy", "Family", "Adventure"],
  },
  {
    id: "2118",
    title: "L.A. Confidential",
    poster: "https://image.tmdb.org/t/p/w500/Rzope4Pk93Rg1Q2Ae8H0FYwa7n.jpg",
    overview:
      "Three detectives in the corrupt and brutal L.A. police force of the 1950s use differing methods to uncover a conspiracy behind the shotgun slayings of the patrons at an all-night diner.",
    release_date: 874630800,
    genres: [],
  },
  {
    id: "1830",
    title: "Lord of War",
    poster: "https://image.tmdb.org/t/p/w500/xEdwdFZRwrNAvTDx0fAV3MAInaA.jpg",
    overview:
      "Yuri Orlov is a globetrotting arms dealer and, through some of the deadliest war zones, he struggles to stay one step ahead of a relentless Interpol agent, his business rivals and even some of his customers who include many of the world’s most notorious dictators. Finally, he must also face his own conscience.",
    release_date: 1126832400,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "192",
    title: "The Name of the Rose",
    poster: "https://image.tmdb.org/t/p/w500/d6dlbTBb3N7nXDz7tQslDJs2jgv.jpg",
    overview:
      "14th-century Franciscan monk William of Baskerville and his young novice arrive at a conference to find that several monks have been murdered under mysterious circumstances. To solve the crimes, William must rise up against the Church's authority and fight the shadowy conspiracy of monastery monks using only his intelligence – which is considerable.",
    release_date: 527907600,
    genres: ["Romance", "Drama"],
  },
  {
    id: "2567",
    title: "The Aviator",
    poster: "https://image.tmdb.org/t/p/w500/lx4kWcZc3o9PaNxlQpEJZM17XUI.jpg",
    overview:
      "A biopic depicting the life of filmmaker and aviation pioneer Howard Hughes from 1927 to 1947, during which time he became a successful film producer and an aviation magnate, while simultaneously growing more unstable due to severe obsessive-compulsive disorder.",
    release_date: 1103241600,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "10096",
    title: "13 Going on 30",
    poster: "https://image.tmdb.org/t/p/w500/iNZdSIfhSCMtRILDNyhLn8UKeSG.jpg",
    overview:
      "After total humiliation at her thirteenth birthday party, Jenna Rink wants to just hide until she's thirty. With a little magic, her wish is granted, but it turns out that being thirty isn't as always as awesome as she thought it would be!",
    release_date: 1081818000,
    genres: ["Comedy", "Fantasy", "Romance"],
  },
  {
    id: "238615",
    title: "Self/less",
    poster: "https://image.tmdb.org/t/p/w500/b03zZZTE17iH6klsInFOlrgfYRN.jpg",
    overview:
      "An extremely wealthy elderly man dying from cancer undergoes a radical medical procedure that transfers his consciousness to the body of a healthy young man but everything may not be as good as it seems when he starts to uncover the mystery of the body's origins and the secret organization that will kill to keep its secrets.",
    release_date: 1436490000,
    genres: ["Thriller"],
  },
  {
    id: "1278",
    title: "The Dreamers",
    poster: "https://image.tmdb.org/t/p/w500/abdsharkteGNBA1BchSZ1DCoMtZ.jpg",
    overview:
      "A young American studying in Paris in 1968 strikes up a friendship with a French brother and sister. Set against the background of the '68 Paris student riots.",
    release_date: 1062378000,
    genres: [],
  },
  {
    id: "51876",
    title: "Limitless",
    poster: "https://image.tmdb.org/t/p/w500/mA77y2AMLkjBNRv0dtsWYQRu4IU.jpg",
    overview:
      "A paranoia-fueled action thriller about an unsuccessful writer whose life is transformed by a top-secret 'smart drug' that allows him to use 100% of his brain and become a perfect version of himself. His enhanced abilities soon attract shadowy forces that threaten his new life in this darkly comic and provocative film.",
    release_date: 1299542400,
    genres: ["Thriller", "Mystery", "Science Fiction"],
  },
  {
    id: "4247",
    title: "Scary Movie",
    poster: "https://image.tmdb.org/t/p/w500/lRQiJXETkCnVVurHmglNvMXrZOx.jpg",
    overview:
      "Following on the heels of popular teen-scream horror movies, with uproarious comedy and biting satire. Marlon and Shawn Wayans, Shannon Elizabeth and Carmen Electra pitch in to skewer some of Hollywood's biggest blockbusters, including Scream, I Know What You Did Last Summer, The Matrix, American Pie and The Blair Witch Project.",
    release_date: 962931600,
    genres: ["Horror"],
  },
  {
    id: "544",
    title: "There's Something About Mary",
    poster: "https://image.tmdb.org/t/p/w500/g03pwohXHOI75InM3zraiaEGguO.jpg",
    overview:
      "For Ted, prom night went about as bad as it’s possible for any night to go. Thirteen years later, he finally gets another chance with his old prom date, only to run up against other suitors including the sleazy detective he hired to find her.",
    release_date: 900464400,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "58595",
    title: "Snow White and the Huntsman",
    poster: "https://image.tmdb.org/t/p/w500/8HUa5kRubYbnAD5UVpnhTGGgMTW.jpg",
    overview:
      "After the Evil Queen marries the King, she performs a violent coup in which the King is murdered and his daughter, Snow White, is taken captive. Almost a decade later, a grown Snow White is still in the clutches of the Queen. In order to obtain immortality, The Evil Queen needs the heart of Snow White. After Snow escapes the castle, the Queen sends the Huntsman to find her in the Dark Forest.",
    release_date: 1338339600,
    genres: ["Adventure", "Fantasy", "Drama"],
  },
  {
    id: "63815",
    title: "Something Something... Unakkum Enakkum",
    poster: "https://image.tmdb.org/t/p/w500/2jBF95UVce5prCBVbBSRCApulrC.jpg",
    overview:
      "The story starts in a jail, where prisoner Muthupandi (Prabhu) is being interrogated by a police officer (Vijayakumar) about his past. Without hesitation, Muthupandi tells. Muthupandi is a son of the soil, a very hard working self-made man who dotes on his only sister Kavitha (Trisha Krishnan). Their mother died very early and it was Muthupandi who brought up Kavitha with a lot of love and affection. Kavitha’s best friend Lalitha (Richa Pallod), who is getting married, takes Kavitha to her house for the nuptial ceremony. As an emotional scene prior to this notes, this is the first time Kavitha has been away from her brother.",
    release_date: 1150592400,
    genres: ["Romance", "Drama", "Action"],
  },
  {
    id: "8456",
    title: "Never Back Down",
    poster: "https://image.tmdb.org/t/p/w500/mYkTq569KOtjdq5zo9mrEY6ecip.jpg",
    overview:
      "Rebellious Jake Tyler is lured into an ultimate underground fight Scene at his new high school, after receiving threats to the safety of his friends and family Jake decides to seek the mentoring of a veteran fighter who trains him for one final no-holds-barred elimination fight with his nemesis and local martial arts champion Ryan McCarthy.",
    release_date: 1204588800,
    genres: ["Drama", "Action"],
  },
  {
    id: "620",
    title: "Ghostbusters",
    poster: "https://image.tmdb.org/t/p/w500/h5Qz8J4T8YQnbZzHXM73WVYYVPK.jpg",
    overview:
      "After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting 'ghostbusters' who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.",
    release_date: 455418000,
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "64635",
    title: "Total Recall",
    poster: "https://image.tmdb.org/t/p/w500/fucmGeZYM4yzqJUnDTc4pKQNCej.jpg",
    overview:
      "Welcome to Rekall, the company that can turn your dreams into real memories. For a factory worker named Douglas Quaid, even though he's got a beautiful wife who he loves, the mind-trip sounds like the perfect vacation from his frustrating life - real memories of life as a super-spy might be just what he needs. But when the procedure goes horribly wrong, Quaid becomes a hunted man. Finding himself on the run from the police - controlled by Chancellor Cohaagen, the leader of the free world - Quaid teams up with a rebel fighter to find the head of the underground resistance and stop Cohaagen. The line between fantasy and reality gets blurred and the fate of his world hangs in the balance as Quaid discovers his true identity, his true love, and his true fate.",
    release_date: 1343869200,
    genres: [],
  },
  {
    id: "8077",
    title: "Alien³",
    poster: "https://image.tmdb.org/t/p/w500/hlabk6APJUeihZDaSD9N6iI0f4g.jpg",
    overview:
      "After escaping with Newt and Hicks from the alien planet, Ripley crash lands on Fiorina 161, a prison planet and host to a correctional facility. Unfortunately, although Newt and Hicks do not survive the crash, a more unwelcome visitor does. The prison does not allow weapons of any kind, and with aid being a long time away, the prisoners must simply survive in any way they can.",
    release_date: 706496400,
    genres: ["Science Fiction", "Action", "Horror"],
  },
  {
    id: "1637",
    title: "Speed",
    poster: "https://image.tmdb.org/t/p/w500/o1Zs7VaS9y2GYH9CLeWxaVLWd3x.jpg",
    overview:
      "Los Angeles SWAT cop Jack Traven is up against bomb expert Howard Payne, who's after major ransom money. First it's a rigged elevator in a very tall building. Then it's a rigged bus--if it slows, it will blow, bad enough any day, but a nightmare in LA traffic. And that's still not the end.",
    release_date: 771123600,
    genres: ["Action", "Drama", "Romance"],
  },
  {
    id: "470229",
    title: "Summer of 84",
    poster: "https://image.tmdb.org/t/p/w500/qPitgXPCIFh23yCEjqnCZnfhBig.jpg",
    overview:
      "Summer is usually a time for fun and games, but some teens get much more danger than they bargained for after beginning to suspect their neighbor is a serial murderer.",
    release_date: 1533862800,
    genres: ["Thriller", "Mystery", "Drama", "Horror"],
  },
  {
    id: "1371",
    title: "Rocky III",
    poster: "https://image.tmdb.org/t/p/w500/lklrplDDuALhY3k8IDFdRqtpZPk.jpg",
    overview:
      "Now the world champion, Rocky Balboa is living in luxury and only fighting opponents who pose no threat to him in the ring, until Clubber Lang challenges him to a bout. After taking a pounding from Lang, the humbled champ turns to former bitter rival Apollo Creed for a rematch with Lang.",
    release_date: 391395600,
    genres: ["Drama"],
  },
  {
    id: "5825",
    title: "National Lampoon's Christmas Vacation",
    poster: "https://image.tmdb.org/t/p/w500/64NKasFKx6aOTKRg4mv76l0IwZR.jpg",
    overview:
      "It's Christmas time and the Griswolds are preparing for a family seasonal celebration, but things never run smoothly for Clark, his wife Ellen and their two kids. Clark's continual bad luck is worsened by his obnoxious family guests, but he manages to keep going knowing that his Christmas bonus is due soon.",
    release_date: 628473600,
    genres: ["Comedy"],
  },
  {
    id: "452",
    title: "The Idiots",
    poster: "https://image.tmdb.org/t/p/w500/zICUj2GCVubqp6p9BgpmudNVfvR.jpg",
    overview:
      "With his first Dogma-95 film director Lars von Trier opens up a completely new film platform. With a mix of home-video and documentary styles the film tells the story of a group of young people who have decided to get to know their “inner-idiots” and thus not only facing and breaking their outer appearance but also their inner.",
    release_date: 893725200,
    genres: ["Romance", "Drama"],
  },
  {
    id: "2044",
    title: "The Lake House",
    poster: "https://image.tmdb.org/t/p/w500/tHpc1118dYWLnHZleGhwZxRbpae.jpg",
    overview:
      "A lonely doctor who once occupied an unusual lakeside home begins exchanging love letters with its former resident, a frustrated architect. They must try to unravel the mystery behind their extraordinary romance before it's too late.",
    release_date: 1150419600,
    genres: ["Romance", "Drama", "Mystery"],
  },
  {
    id: "39254",
    title: "Real Steel",
    poster: "https://image.tmdb.org/t/p/w500/4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
    overview:
      "Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After his robot is trashed, he reluctantly teams up with his estranged son to rebuild and train an unlikely contender.",
    release_date: 1317171600,
    genres: ["Action", "Drama", "Science Fiction", "Family"],
  },
  {
    id: "593035",
    title: "Alien Warfare",
    poster: "https://image.tmdb.org/t/p/w500/rJOj0T5DyChfECevDg0xpEGznsl.jpg",
    overview:
      "A team of Navy Seals investigates a mysterious science outpost only to have to combat a squad of powerful alien soldiers.",
    release_date: 1554426000,
    genres: ["Action", "Science Fiction"],
  },
  {
    id: "699",
    title: "For Your Eyes Only",
    poster: "https://image.tmdb.org/t/p/w500/xV4Nnr6DjjERlqNikqDQX8LUgua.jpg",
    overview:
      "A British spy ship has sunk and on board was a hi-tech encryption device. James Bond is sent to find the device that holds British launching instructions before the enemy Soviets get to it first.",
    release_date: 362106000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "203801",
    title: "The Man from U.N.C.L.E.",
    poster: "https://image.tmdb.org/t/p/w500/zkacOORjKJxRswDurffyvkMwriS.jpg",
    overview:
      "At the height of the Cold War, a mysterious criminal organization plans to use nuclear weapons and technology to upset the fragile balance of power between the United States and Soviet Union. CIA agent Napoleon Solo and KGB agent Illya Kuryakin are forced to put aside their hostilities and work together to stop the evildoers in their tracks. The duo's only lead is the daughter of a missing German scientist, whom they must find soon to prevent a global catastrophe.",
    release_date: 1439427600,
    genres: ["Comedy", "Action", "Adventure"],
  },
  {
    id: "415",
    title: "Batman & Robin",
    poster: "https://image.tmdb.org/t/p/w500/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",
    overview:
      "Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo.",
    release_date: 866768400,
    genres: ["Science Fiction", "Action", "Fantasy", "Comedy"],
  },
  {
    id: "63",
    title: "Twelve Monkeys",
    poster: "https://image.tmdb.org/t/p/w500/170VKibfqMR1k0eaR2pIj830MgW.jpg",
    overview:
      "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
    release_date: 820195200,
    genres: ["Science Fiction", "Thriller", "Mystery"],
  },
  {
    id: "828",
    title: "The Day the Earth Stood Still",
    poster: "https://image.tmdb.org/t/p/w500/x2DquTpLTq54aPFDnqlwY7apCC3.jpg",
    overview:
      "An alien and a robot land on earth after World War II and tell mankind to be peaceful or face destruction. A classic science fiction film from Robert Wise with an exceptional message.",
    release_date: -577238400,
    genres: ["Drama", "Science Fiction", "Thriller"],
  },
  {
    id: "476299",
    title: "Ghostland",
    poster: "https://image.tmdb.org/t/p/w500/tt9YSQlArAj6849SQQJ5ryNgcJs.jpg",
    overview:
      "A mother of two inherits a home from her aunt. On the first night in the new home she is confronted with murderous intruders and fights for her daughters’ lives. Sixteen years later the daughters reunite at the house, and that is when things get strange . . .",
    release_date: 1521072000,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "15472",
    title: "The Girl with the Dragon Tattoo",
    poster: "https://image.tmdb.org/t/p/w500/j4Ra0SvYM08winX6fxn6AknlygV.jpg",
    overview:
      "Swedish thriller based on Stieg Larsson's novel about a male journalist and a young female hacker. In the opening of the movie, Mikael Blomkvist, a middle-aged publisher for the magazine Millennium, loses a libel case brought by corrupt Swedish industrialist Hans-Erik Wennerström. Nevertheless, he is hired by Henrik Vanger in order to solve a cold case, the disappearance of Vanger's niece",
    release_date: 1235692800,
    genres: ["Thriller", "Crime", "Mystery", "Drama"],
  },
  {
    id: "5549",
    title: "RoboCop 2",
    poster: "https://image.tmdb.org/t/p/w500/uL3Ab6SOcN35ZTF2XrE1NzFwXdl.jpg",
    overview:
      "After a successful deployment of the Robocop Law Enforcement unit, OCP sees its goal of urban pacification come closer and closer, but as this develops, a new narcotic known as 'Nuke' invades the streets led by God-delirious leader Cane. As this menace grows, it may prove to be too much for Murphy to handle. OCP tries to replicate the success of the first unit, but ends up with failed prototypes with suicidal issues... until Dr. Faxx, a scientist straying away from OCP's path, uses Cane as the new subject for the Robocop 2 project, a living God.",
    release_date: 646016400,
    genres: ["Action", "Adventure", "Crime", "Science Fiction", "Thriller"],
  },
  {
    id: "470",
    title: "21 Grams",
    poster: "https://image.tmdb.org/t/p/w500/wZ0l6or5juuVWqDkLEgaghs4f9l.jpg",
    overview:
      "This is the story of three gentle persons: Paul Rivers, an ailing mathematician lovelessly married to an English émigré; Christina Peck, an upper-middle-class suburban housewife, happily married and mother of two little girl; and Jack Jordan, an ex-convict who has found in his Christian faith the strength to raise a family. They will be brought together by a terrible accident that will change their lives. By the final frame, none of them will be the same as they will learn harsh truths about love, faith, courage, desire and guilt, and how chance can change our worlds irretrievably—forever.",
    release_date: 1062810000,
    genres: ["Drama", "Crime", "Thriller"],
  },
  {
    id: "82675",
    title: "Taken 2",
    poster: "https://image.tmdb.org/t/p/w500/ufl53tKfEEtAFbClksgfAS6nznT.jpg",
    overview:
      "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
    release_date: 1348707600,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "11430",
    title: "The Lion King 1½",
    poster: "https://image.tmdb.org/t/p/w500/sVJME5R1NmTXtbdnAxYPx7Xa7kr.jpg",
    overview:
      "Timon the meerkat and Pumbaa the warthog are best pals and the unsung heroes of the African savanna. This prequel to the smash Disney animated adventure takes you back -- way back -- before Simba's adventure began. You'll find out all about Timon and Pumbaa and tag along as they search for the perfect home and attempt to raise a rambunctious lion cub.",
    release_date: 1076025600,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: "34851",
    title: "Predators",
    poster: "https://image.tmdb.org/t/p/w500/gsnUhWMYLSD8VZS7nrMT9mj9BYr.jpg",
    overview:
      "A mercenary reluctantly leads a motley crew of warriors who soon come to realize they've been captured and deposited on an alien planet by an unknown nemesis. With the exception of a peculiar physician, they are all cold-blooded killers, convicts, death squad members... hunters who have now become the hunted.",
    release_date: 1278118800,
    genres: ["Action", "Science Fiction", "Adventure", "Thriller"],
  },
  {
    id: "4234",
    title: "Scream 3",
    poster: "https://image.tmdb.org/t/p/w500/geD86M58Zkv6O6lLbA1tHllH8B4.jpg",
    overview:
      "A murdering spree begins to happen again, this time its targeted toward the original Woodsboro survivors and those associated with the movie inside a movie, 'Stab 3'. Sydney must face the demons of her past to stop the killer.",
    release_date: 949536000,
    genres: ["Horror", "Mystery"],
  },
  {
    id: "52520",
    title: "Underworld: Awakening",
    poster: "https://image.tmdb.org/t/p/w500/jN0uuc8U6M3sTg9zEaliJV60Stf.jpg",
    overview:
      "Having escaped years of imprisonment, vampire warrioress Selene finds herself in a changed world where humans have discovered the existence of both Vampire and Lycan clans and are conducting an all-out war to eradicate both immortal species. Now Selene must battle the humans and a frightening new breed of super Lycans to ensure the death dealers' survival.",
    release_date: 1326931200,
    genres: ["Fantasy", "Action", "Horror"],
  },
  {
    id: "134374",
    title: "Pain & Gain",
    poster: "https://image.tmdb.org/t/p/w500/ddTWL7lZafCJ2VqWdaGg0pl8Adb.jpg",
    overview:
      "Daniel Lugo, manager of the Sun Gym in 1990s Miami, decides that there is only one way to achieve his version of the American dream: extortion. To achieve his goal, he recruits musclemen Paul and Adrian as accomplices. After several failed attempts, they abduct rich businessman Victor Kershaw and convince him to sign over all his assets to them. But when Kershaw makes it out alive, authorities are reluctant to believe his story.",
    release_date: 1366246800,
    genres: ["Thriller", "Crime", "Action", "Comedy"],
  },
  {
    id: "335",
    title: "Once Upon a Time in the West",
    poster: "https://image.tmdb.org/t/p/w500/3RymloPYcEPx30T1vTrz2cXaVnh.jpg",
    overview:
      "A widow whose land and life are in danger as the railroad is getting closer and closer to taking them over. A mysterious harmonica player joins forces with a desperado to protect the woman and her land.",
    release_date: -32486400,
    genres: ["Documentary"],
  },
  {
    id: "329",
    title: "Jurassic Park",
    poster: "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    overview:
      "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
    release_date: 739760400,
    genres: [],
  },
  {
    id: "9473",
    title: "South Park: Bigger, Longer & Uncut",
    poster: "https://image.tmdb.org/t/p/w500/tS0PedvA2mFO9VCHYwQpaU1K36U.jpg",
    overview:
      "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced 'corrupted', and their parents pressure the United States to wage war against Canada.",
    release_date: 930704400,
    genres: ["Animation", "Comedy", "Music"],
  },
  {
    id: "54138",
    title: "Star Trek Into Darkness",
    poster: "https://image.tmdb.org/t/p/w500/Aim3kVNh1MPIxPEFeJrl9e9Uf1a.jpg",
    overview:
      "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
    release_date: 1367715600,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "628",
    title: "Interview with the Vampire",
    poster: "https://image.tmdb.org/t/p/w500/t7NU8IcmcNBrlunCxiycX9JV7Rp.jpg",
    overview:
      "A vampire relates his epic life story of love, betrayal, loneliness, and dark hunger to an over-curious reporter.",
    release_date: 784512000,
    genres: ["Horror", "Drama", "Fantasy"],
  },
  {
    id: "42949",
    title: "Arthur 3: The War of the Two Worlds",
    poster: "https://image.tmdb.org/t/p/w500/wBT40NqmBz65WYmIGhDnWcgzPcA.jpg",
    overview:
      "Maltazard, the Evil M, is now 7 feet tall and evolving among the humans, causing terror wherever he goes. His goal is simple: forming an army of giant henchmen and ruling over the universe. Meanwhile, Arthur is still a Minimoy, and thus in a state where he's unable to fend him off. With the help of Selenia and Betameche, he hatches a plan to regain his usual size: all they must do is infiltrate Arthur's house through the pipeworks, catch an electric train from his bedroom to his grandfather's study and find an elixir that will make him grow back to his human size. Sounds simple enough, if it weren't for Darkos, Maltazard's own son, hot on their tails.",
    release_date: 1282438800,
    genres: ["Animation", "Adventure", "Fantasy", "Family"],
  },
  {
    id: "474214",
    title: "Trading Paint",
    poster: "https://image.tmdb.org/t/p/w500/yV9G1nO6YxEWzXblqMUFoS19R9v.jpg",
    overview:
      "A stock car racing legend is drawn back to the dirt track when his son, an aspiring driver, joins a rival racing team.",
    release_date: 1550793600,
    genres: ["Action"],
  },
  {
    id: "253344",
    title: "Some Kind of Beautiful",
    poster: "https://image.tmdb.org/t/p/w500/2rW0u6qDw8kBRS4Ak3Wx1uauYaq.jpg",
    overview:
      "By day, Richard Haig is a successful and well-respected English professor at renowned Trinity College in Cambridge.  By night, Richard indulges his own romantic fantasies with a steady stream of beautiful undergraduates.  But Richard has grown tired of the  game and is looking for something more meaningful and lasting.  So when Kate, Richard’s tanned, athletic, 25-year-old American girlfriend tells him that she is pregnant, Richard is thrilled.  He looks forward to having a family of his own,  being a father his children could be proud of, not some sex-fueled bobcat.  There is only one problem.  Richard’s not in love with Kate.  Richard is in love with Kate’s sister, Olivia. He had been in love with her ever since he first saw her.",
    release_date: 1437008400,
    genres: ["Comedy"],
  },
  {
    id: "9543",
    title: "Prince of Persia: The Sands of Time",
    poster: "https://image.tmdb.org/t/p/w500/lkp1GFmWyf7k2WKvKIQuuGyichI.jpg",
    overview:
      "A rogue prince reluctantly joins forces with a mysterious princess and together, they race against dark forces to safeguard an ancient dagger capable of releasing the Sands of Time – gift from the gods that can reverse time and allow its possessor to rule the world.",
    release_date: 1274230800,
    genres: ["Adventure", "Fantasy", "Action", "Romance"],
  },
  {
    id: "384521",
    title: "The Cloverfield Paradox",
    poster: "https://image.tmdb.org/t/p/w500/dJe4s2h9hac0Fu3pQVV4OuWe8kU.jpg",
    overview:
      "Orbiting above a planet on the brink of war, scientists test a device to solve an energy crisis and end up face-to-face with a dark alternate reality.",
    release_date: 1517702400,
    genres: ["Mystery", "Thriller", "Horror", "Science Fiction"],
  },
  {
    id: "311",
    title: "Once Upon a Time in America",
    poster: "https://image.tmdb.org/t/p/w500/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
    overview:
      "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    release_date: 454122000,
    genres: ["Drama", "Crime"],
  },
  {
    id: "13160",
    title: "Over Her Dead Body",
    poster: "https://image.tmdb.org/t/p/w500/85moNqAncGlJXEwt4Ja3DfNbiQY.jpg",
    overview:
      "After his fiancée, Kate, dies in an accident on their wedding day, veterinarian Henry grows depressed. To help him move on, his sister has him visit psychic Ashley and gives her Kate's diary. Ashley uses the journal's details to convincingly deliver the fake message that Kate wants Henry to move on. However, Kate's ghost is watching over Ashley and Henry. Furious when they fall for each other, she vows to sabotage their relationship.",
    release_date: 1201824000,
    genres: ["Comedy"],
  },
  {
    id: "37135",
    title: "Tarzan",
    poster: "https://image.tmdb.org/t/p/w500/a0Syo09bmNJgehjfeVL6meR9Mjh.jpg",
    overview:
      "Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan. He then finds out that he's human. Now Tarzan must make the decision as to which family he should belong to...",
    release_date: 929667600,
    genres: ["Animation"],
  },
  {
    id: "187017",
    title: "22 Jump Street",
    poster: "https://image.tmdb.org/t/p/w500/ajB6cGvoy04438RzvfO6Sz28yMK.jpg",
    overview:
      "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men, college might be the best thing that ever happened to them.",
    release_date: 1401930000,
    genres: ["Crime", "Comedy", "Action"],
  },
  {
    id: "59",
    title: "A History of Violence",
    poster: "https://image.tmdb.org/t/p/w500/rrc6GiAKHDrUjp8OmdVng9hRWBn.jpg",
    overview:
      "An average family is thrust into the spotlight after the father commits a seemingly self-defense murder at his diner.",
    release_date: 1127437200,
    genres: ["Drama", "Thriller", "Crime"],
  },
  {
    id: "157547",
    title: "Oculus",
    poster: "https://image.tmdb.org/t/p/w500/iaJjGlF1lVN9Zzh555Czk7TjqwW.jpg",
    overview:
      "A woman tries to exonerate her brother's murder conviction by proving that the crime was committed by a supernatural phenomenon.",
    release_date: 1396486800,
    genres: ["Horror"],
  },
  {
    id: "137106",
    title: "The Lego Movie",
    poster: "https://image.tmdb.org/t/p/w500/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
    overview:
      "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from gluing the universe together.",
    release_date: 1391644800,
    genres: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Science Fiction",
      "Fantasy",
    ],
  },
  {
    id: "401200",
    title: "Kursk",
    poster: "https://image.tmdb.org/t/p/w500/1Y09MkMJ8CESSPW4fcbDm9s5cAS.jpg",
    overview:
      "The story of the 2000 K-141 Kursk submarine disaster and the governmental negligence that followed. As the sailors fight for survival, their families desperately battle political obstacles and impossible odds to save them.",
    release_date: 1541548800,
    genres: ["Drama", "History", "Thriller", "Action"],
  },
  {
    id: "197",
    title: "Braveheart",
    poster: "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
    overview:
      "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.",
    release_date: 801277200,
    genres: [],
  },
  {
    id: "296524",
    title: "Deepwater Horizon",
    poster: "https://image.tmdb.org/t/p/w500/u6c5xkR0eIzlnxcQoMBlySH6ann.jpg",
    overview:
      "A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.",
    release_date: 1475110800,
    genres: ["Documentary"],
  },
  {
    id: "709",
    title: "Licence to Kill",
    poster: "https://image.tmdb.org/t/p/w500/eaHTaaAPBhO995R67mrFMsPwCdr.jpg",
    overview:
      "When drug lord Franz Sanchez exacts his brutal vengeance on Bond's friend Felix Leiter, 007 resigns from the British Secret Service and begins a fierce vendetta against the master criminal. Bond won't be satisfied until Sanchez is defeated, and to accomplish this aim he allies himself with a beautiful pilot and Sanchez's sexy girlfriend.",
    release_date: 615776400,
    genres: ["Documentary"],
  },
  {
    id: "47964",
    title: "A Good Day to Die Hard",
    poster: "https://image.tmdb.org/t/p/w500/evxtv4e8Amm436Y5rW16RkGu8pX.jpg",
    overview:
      "Iconoclastic, take-no-prisoners cop John McClane, finds himself for the first time on foreign soil after traveling to Moscow to help his wayward son Jack - unaware that Jack is really a highly-trained CIA operative out to stop a nuclear weapons heist. With the Russian underworld in pursuit, and battling a countdown to war, the two McClanes discover that their opposing methods make them unstoppable heroes.",
    release_date: 1360108800,
    genres: [],
  },
  {
    id: "440471",
    title: "Escape Plan 2: Hades",
    poster: "https://image.tmdb.org/t/p/w500/Aqhl55vpzxNFqVfc2DpedUsR39L.jpg",
    overview:
      "Ray Breslin manages an elite team of security specialists trained in the art of breaking people out of the world's most impenetrable prisons. When his most trusted operative, Shu Ren, is kidnapped and disappears inside the most elaborate prison ever built, Ray must track him down with the help of some of his former friends.",
    release_date: 1528160400,
    genres: ["Action"],
  },
  {
    id: "2503",
    title: "The Bourne Ultimatum",
    poster: "https://image.tmdb.org/t/p/w500/d4DuphCHCjVUyffExnK5nLbn39K.jpg",
    overview:
      "Bourne is brought out of hiding once again by reporter Simon Ross who is trying to unveil Operation Blackbriar, an upgrade to Project Treadstone, in a series of newspaper columns. Information from the reporter stirs a new set of memories, and Bourne must finally uncover his dark past while dodging The Company's best efforts to eradicate him.",
    release_date: 1186102800,
    genres: ["Action", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "302699",
    title: "Central Intelligence",
    poster: "https://image.tmdb.org/t/p/w500/7Ou0TRJLi72AwLEUlo7Kym4XuNB.jpg",
    overview:
      "After he reunites with an old pal through Facebook, a mild-mannered accountant is lured into the world of international espionage.",
    release_date: 1465952400,
    genres: ["Action", "Comedy", "Mystery"],
  },
  {
    id: "396422",
    title: "Annabelle: Creation",
    poster: "https://image.tmdb.org/t/p/w500/snYI6TDLkB8wL7SHFyBV6qkJuPx.jpg",
    overview:
      "Several years after the tragic death of their little girl, a doll maker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the doll maker's possessed creation—Annabelle.",
    release_date: 1501722000,
    genres: ["Horror", "Mystery", "Thriller"],
  },
  {
    id: "979",
    title: "Irreversible",
    poster: "https://image.tmdb.org/t/p/w500/rxeDxo8FvZpLu6iplNpxdtAVnfu.jpg",
    overview:
      "Events over the course of one traumatic night in Paris unfold in reverse-chronological order as the beautiful Alex is brutally raped and beaten by a stranger in the underpass. Her boyfriend and ex-lover take matters into their own hands by hiring two criminals to help them find the rapist so that they can exact revenge. A simultaneously beautiful and terrible examination of the destructive nature of cause and effect, and how time destroys everything.",
    release_date: 1022029200,
    genres: [],
  },
  {
    id: "183011",
    title: "Justice League: The Flashpoint Paradox",
    poster: "https://image.tmdb.org/t/p/w500/8Ku5Mv7VOcDqdtwXcKW7iKfTtkv.jpg",
    overview:
      "When time travel allows a past wrong to be righted for The Flash and his family, the ripples of the event prove disastrous as a fractured, alternate reality now exists where a Justice League never formed, and even Superman is nowhere to be found. Teaming with a grittier, more violent Dark Knight and Cyborg, Flash races to restore the continuity of his original timeline while this new world is ravaged by a fierce war between Wonder Woman's Amazons and Aquaman’s Atlanteans.",
    release_date: 1374973200,
    genres: ["Fantasy", "Science Fiction", "Animation", "Action", "Adventure"],
  },
  {
    id: "9552",
    title: "The Exorcist",
    poster: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    overview:
      "12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.",
    release_date: 125712000,
    genres: ["Documentary"],
  },
  {
    id: "399035",
    title: "The Commuter",
    poster: "https://image.tmdb.org/t/p/w500/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
    overview:
      "A businessman, on his daily commute home, gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
    release_date: 1515628800,
    genres: ["Action"],
  },
  {
    id: "16859",
    title: "Kiki's Delivery Service",
    poster: "https://image.tmdb.org/t/p/w500/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    overview:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    release_date: 617677200,
    genres: ["Adventure", "Comedy", "Fantasy", "Mystery"],
  },
  {
    id: "708",
    title: "The Living Daylights",
    poster: "https://image.tmdb.org/t/p/w500/4qfEjHgXZSfWu6STDFhNVcgIexH.jpg",
    overview:
      "James Bond helps a Russian General escape into the west. He soon finds out that the KGB wants to kill him for helping the General. A little while later the General is kidnapped from the Secret Service leading 007 to be suspicious.",
    release_date: 551926800,
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    id: "634",
    title: "Bridget Jones's Diary",
    poster: "https://image.tmdb.org/t/p/w500/kAygHXKmq5Io2UUYkMBUXVRwUQy.jpg",
    overview:
      "A chaotic Bridget Jones meets a snobbish lawyer, and he soon enters her world of imperfections.",
    release_date: 987123600,
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    id: "429417",
    title: "Ghost Stories",
    poster: "https://image.tmdb.org/t/p/w500/7a0sai9k5jr7YJRP5S3YIDErMVY.jpg",
    overview:
      "Professor Phillip Goodman devotes his life to exposing phony psychics and fraudulent supernatural shenanigans. His skepticism soon gets put to the test when he receives news of three chilling and inexplicable cases -- disturbing visions in an abandoned asylum, a car accident deep in the woods and the spirit of an unborn child. Even scarier -- each of the macabre stories seems to have a sinister connection to the professor's own life.",
    release_date: 1516406400,
    genres: [],
  },
  {
    id: "14306",
    title: "Marley & Me",
    poster: "https://image.tmdb.org/t/p/w500/pnB6hjTKylb0Ve2nUWt16gzkErr.jpg",
    overview:
      "A newly married couple who, in the process of starting a family, learn many of life's important lessons from their trouble-loving retriever, Marley. Packed with plenty of laughs to lighten the load, the film explores the highs and lows of marriage, maturity and confronting one's own mortality, as seen through the lens of family life with a dog.",
    release_date: 1230163200,
    genres: ["Comedy", "Family"],
  },
  {
    id: "423",
    title: "The Pianist",
    poster: "https://image.tmdb.org/t/p/w500/3DzePKMbLMIM636S6syCy3cLPqj.jpg",
    overview:
      "The true story of pianist Wladyslaw Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    release_date: 1032224400,
    genres: [],
  },
  {
    id: "405817",
    title: "Young Mother: The Original",
    poster: "https://image.tmdb.org/t/p/w500/zUR661hBxr5YxPKJoYllqpI8Qh8.jpg",
    overview:
      "I had a dream...sleeping with you and Hwa-yeong.  Jin-goo and Joo-hee were happy until one day their daughter Hwa-yeong, who had eloped with another man, came home. Hwa-yeong and Jin-goo were a couple at school and she had gotten pregnant. So things took place quickly and they got to live with Hwa-yeong's mother Joo-hee. However, when Hwa-yeong found out she wasn't pregnant, hit it off with another man and left the house. Jin-goo and Joo-hee had fallen in love while she was gone. Hwa-yeong had broken up with her other man and came home. However, she finds it weird that Jin-goo is still at her mother's house. Jin-goo and Joo-hee put out all sorts of lies to hide the truth from Hwa-yeong.",
    release_date: 1466643600,
    genres: ["Drama", "Romance"],
  },
  {
    id: "170522",
    title: "Asterix: The Mansions of the Gods",
    poster: "https://image.tmdb.org/t/p/w500/oZYyisfvWY6N6KvC6cs9N6Anyht.jpg",
    overview:
      "In order to wipe out the Gaulish village by any means necessary, Caesar plans to absorb the villagers into Roman culture by having an estate built next to the village to start a new Roman colony.",
    release_date: 1416960000,
    genres: ["Animation", "Comedy", "Adventure", "Family"],
  },
  {
    id: "9078",
    title: "The Sword in the Stone",
    poster: "https://image.tmdb.org/t/p/w500/7lyeeuhGAJSNXYEW34S8mJ1bwI8.jpg",
    overview:
      "Wart is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for him beyond mere squiredom. He starts by trying to give him an education, believing that once one has an education, one can go anywhere. Needless to say, it doesn't quite work out that way.",
    release_date: -189993600,
    genres: ["Adventure", "Family", "Fantasy"],
  },
  {
    id: "12162",
    title: "The Hurt Locker",
    poster: "https://image.tmdb.org/t/p/w500/8SwjvOchYljr7tSKpNeHjpyPbg5.jpg",
    overview:
      "Forced to play a dangerous game of cat-and-mouse in the chaos of war, an elite Army bomb squad unit must come together in a city where everyone is a potential enemy and every object could be a deadly bomb.",
    release_date: 1223600400,
    genres: ["Drama", "Thriller", "War"],
  },
  {
    id: "13888",
    title: "Return to the Blue Lagoon",
    poster: "https://image.tmdb.org/t/p/w500/jhUTLuPgc3Qcvr5xtji8oiWSfYy.jpg",
    overview:
      "In this sequel to the 1980 classic, two children are stranded on a beautiful island in the South Pacific. With no adults to guide them, the two make a simple life together and eventually become tanned teenagers in love.",
    release_date: 681094800,
    genres: ["Adventure", "Drama"],
  },
  {
    id: "105864",
    title: "The Good Dinosaur",
    poster: "https://image.tmdb.org/t/p/w500/dM50iVbcnzQUIoc9TmUUk0SP4P4.jpg",
    overview:
      "An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
    release_date: 1447459200,
    genres: ["Adventure", "Animation", "Family"],
  },
  {
    id: "437",
    title: "Cube 2: Hypercube",
    poster: "https://image.tmdb.org/t/p/w500/bEqqwtwUP7lm56VyeVONhv9JtYu.jpg",
    overview:
      "The sequel to the low budget first film ‘Cube.’ This time the prisoners find them selves in a more advanced cube environment that they must escape from before they are killed. A science fiction film where space and time have more than one path.",
    release_date: 1018832400,
    genres: ["Thriller", "Science Fiction", "Mystery"],
  },
  {
    id: "33125",
    title: "Border",
    poster: "https://image.tmdb.org/t/p/w500/sFyftHJ5wXdZXHDKBhQX2mPWZLr.jpg",
    overview:
      "It's 1971, and 2000 members of the Pakistani Army—armed with tanks—are at war with just 150 men in a battalion of Indian soldiers based in the Longewala region of Punjab.",
    release_date: 868755600,
    genres: [],
  },
  {
    id: "297761",
    title: "Suicide Squad",
    poster: "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
    overview:
      "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    release_date: 1470186000,
    genres: ["Action", "Animation", "Science Fiction"],
  },
  {
    id: "487672",
    title: "Reign of the Supermen",
    poster: "https://image.tmdb.org/t/p/w500/e9TzqscNRUaG8HqEP3K1jUvi8pC.jpg",
    overview:
      "In the wake of The Death of Superman, the world is still mourning the loss of the Man of Steel following his fatal battle with the monster Doomsday. However, no sooner as his body been laid to rest than do four new bearers of the Superman shield come forward to take on the mantle. The Last Son of Krypton, Superboy, Steel, and the Cyborg Superman all attempt to fill the vacuum left by the world's greatest champion. Meanwhile, Superman's death has also signaled to the universe that Earth is vulnerable. Can these new Supermen and the rest of the heroes prove them wrong?",
    release_date: 1547337600,
    genres: ["Animation", "Action", "Science Fiction"],
  },
  {
    id: "9902",
    title: "Wrong Turn",
    poster: "https://image.tmdb.org/t/p/w500/ixBGcbQKvl2N4VZmJfmQkyKBJCX.jpg",
    overview:
      "Chris crashes into a carload of other young people, and the group of stranded motorists is soon lost in the woods of West Virginia, where they're hunted by three cannibalistic mountain men who are grossly disfigured by generations of inbreeding.",
    release_date: 1054256400,
    genres: ["Horror"],
  },
  {
    id: "136799",
    title: "Trolls",
    poster: "https://image.tmdb.org/t/p/w500/zKu5MNy9QW1a5ZHgv7iAp3kRZpE.jpg",
    overview:
      "Lovable and friendly, the trolls love to play around. But one day, a mysterious giant shows up to end the party. Poppy, the optimistic leader of the Trolls, and her polar opposite, Branch, must embark on an adventure that takes them far beyond the only world they’ve ever known.",
    release_date: 1476320400,
    genres: ["Adventure", "Family", "Comedy", "Fantasy", "Music", "Animation"],
  },
  {
    id: "14979",
    title: "Thick as Thieves",
    poster: "https://image.tmdb.org/t/p/w500/sgRY2ie8koJxfOScMuvzHQ9TuZX.jpg",
    overview:
      "A master thief recruits a notorious thief to help him steal two famous Faberge eggs from an impenetrable vault in an effort to pull off one final job and repay his debt to the Russian mob.",
    release_date: 1231459200,
    genres: ["Drama", "Action", "Comedy", "Crime"],
  },
  {
    id: "429300",
    title: "Adrift",
    poster: "https://image.tmdb.org/t/p/w500/5gLDeADaETvwQlQow5szlyuhLbj.jpg",
    overview:
      "A true story of survival, as a young couple's chance encounter leads them first to love, and then on the adventure of a lifetime as they face one of the most catastrophic hurricanes in recorded history.",
    release_date: 1527728400,
    genres: [],
  },
  {
    id: "594",
    title: "The Terminal",
    poster: "https://image.tmdb.org/t/p/w500/pXNomqKcKXAQbuWxehb2N3XFKfn.jpg",
    overview:
      "Viktor Navorski is a man without a country; his plane took off just as a coup d'etat exploded in his homeland, leaving it in shambles, and now he's stranded at Kennedy Airport, where he's holding a passport that nobody recognizes. While quarantined in the transit lounge until authorities can figure out what to do with him, Viktor simply goes on living – and courts romance with a beautiful flight attendant.",
    release_date: 1087434000,
    genres: ["Science Fiction", "Thriller"],
  },
  {
    id: "788",
    title: "Mrs. Doubtfire",
    poster: "https://image.tmdb.org/t/p/w500/szvidvi0Fo4j2gmMtk1sNe1rkzw.jpg",
    overview:
      "Loving but irresponsible dad Daniel Hillard, estranged from his exasperated spouse, is crushed by a court order allowing only weekly visits with his kids. When Daniel learns his ex needs a housekeeper, he gets the job -- disguised as an English nanny. Soon he becomes not only his children's best pal but the kind of parent he should have been from the start.",
    release_date: 754099200,
    genres: [],
  },
  {
    id: "4982",
    title: "American Gangster",
    poster: "https://image.tmdb.org/t/p/w500/8sV6nWuKczuXRt0C6EWoXqJAj6G.jpg",
    overview:
      "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan. He does so by buying heroin directly from the source in South East Asia and he comes up with a unique way of importing the drugs into the United States. Based on a true story.",
    release_date: 1193961600,
    genres: ["Drama", "Crime"],
  },
  {
    id: "8698",
    title: "The League of Extraordinary Gentlemen",
    poster: "https://image.tmdb.org/t/p/w500/kdAuVFP63XXxnb983ry2pLCKd9S.jpg",
    overview:
      "To prevent a world war from breaking out, famous characters from Victorian literature band together to do battle against a cunning villain.",
    release_date: 1057885200,
    genres: ["Fantasy", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "266856",
    title: "The Theory of Everything",
    poster: "https://image.tmdb.org/t/p/w500/rvix5zBaADWbEFp3KWbtf55RMUs.jpg",
    overview:
      "The Theory of Everything is the extraordinary story of one of the world’s greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde.",
    release_date: 1416960000,
    genres: ["Drama"],
  },
  {
    id: "335797",
    title: "Sing",
    poster: "https://image.tmdb.org/t/p/w500/lW0kUtXTOVlHTVhDO2VzNBACAHX.jpg",
    overview:
      "A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.",
    release_date: 1479859200,
    genres: ["Drama"],
  },
  {
    id: "1018",
    title: "Mulholland Drive",
    poster: "https://image.tmdb.org/t/p/w500/tVxGt7uffLVhIIcwuldXOMpFBPX.jpg",
    overview:
      "Blonde Betty Elms has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia. Meanwhile, as the two set off to solve the second woman's identity, filmmaker Adam Kesher runs into ominous trouble while casting his latest project.",
    release_date: 999910800,
    genres: ["Thriller", "Drama", "Mystery"],
  },
  {
    id: "62206",
    title: "30 Minutes or Less",
    poster: "https://image.tmdb.org/t/p/w500/gkCO4bf8kDxF4wsUOMzhYk3Pgz2.jpg",
    overview:
      "Two fledgling criminals kidnap a pizza delivery guy, strap a bomb to his chest, and advise him that he has mere hours to rob a bank or else...",
    release_date: 1313024400,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "475557",
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    overview:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    release_date: 1570064400,
    genres: ["Drama"],
  },
  {
    id: "40807",
    title: "50/50",
    poster: "https://image.tmdb.org/t/p/w500/aZ3JKeCV4EmprxrbzIDuyb7M7AZ.jpg",
    overview:
      "Inspired by a true story, a comedy centered on a 27-year-old guy who learns of his cancer diagnosis, and his subsequent struggle to beat the disease.",
    release_date: 1317344400,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "8536",
    title: "Superman II",
    poster: "https://image.tmdb.org/t/p/w500/r9ZRah6rYBoRuPyj8g5Ei411XNM.jpg",
    overview:
      "Three escaped criminals from the planet Krypton test the Man of Steel's mettle. Led by Gen. Zod, the Kryptonians take control of the White House and partner with Lex Luthor to destroy Superman and rule the world. But Superman, who attempts to make himself human in order to get closer to Lois, realizes he has a responsibility to save the planet.",
    release_date: 344736000,
    genres: ["Documentary"],
  },
  {
    id: "810",
    title: "Shrek the Third",
    poster: "https://image.tmdb.org/t/p/w500/jaNe16gE9zdAYyVwRqmlmRKshHm.jpg",
    overview:
      "The King of Far Far Away has died and Shrek and Fiona are to become King &amp; Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.",
    release_date: 1179363600,
    genres: ["Fantasy", "Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "4108",
    title: "The Transporter",
    poster: "https://image.tmdb.org/t/p/w500/v3QIFUWgtVN4wejVuDZowuyJ20W.jpg",
    overview:
      "Former Special Forces officer, Frank Martin will deliver anything to anyone for the right price, and his no-questions-asked policy puts him in high demand. But when he realizes his latest cargo is alive, it sets in motion a dangerous chain of events. The bound and gagged Lai is being smuggled to France by a shady American businessman, and Frank works to save her as his own illegal activities are uncovered by a French detective.",
    release_date: 1033520400,
    genres: ["Thriller", "Action", "Crime", "Mystery"],
  },
  {
    id: "644",
    title: "A.I. Artificial Intelligence",
    poster: "https://image.tmdb.org/t/p/w500/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg",
    overview:
      "David, a robotic boy—the first of his kind programmed to love—is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David. Without final acceptance by humans or machines, David embarks on a journey to discover where he truly belongs, uncovering a world in which the line between robot and machine is both vast and profoundly thin.",
    release_date: 993776400,
    genres: ["Documentary"],
  },
  {
    id: "68737",
    title: "Seventh Son",
    poster: "https://image.tmdb.org/t/p/w500/7Q8DfXSjcFSSQDOxz1Sk865wNqI.jpg",
    overview:
      "John Gregory, who is a seventh son of a seventh son and also the local spook, has protected the country from witches, boggarts, ghouls and all manner of things that go bump in the night. However John is not young anymore, and has been seeking an apprentice to carry on his trade. Most have failed to survive. The last hope is a young farmer's son named Thomas Ward. Will he survive the training to become the spook that so many others couldn't?",
    release_date: 1418342400,
    genres: ["Documentary"],
  },
  {
    id: "13885",
    title: "Sweeney Todd: The Demon Barber of Fleet Street",
    poster: "https://image.tmdb.org/t/p/w500/gAW4J1bkRjZKmFsJsIiOBASeoAp.jpg",
    overview:
      "The infamous story of Benjamin Barker, a.k.a Sweeney Todd, who sets up a barber shop down in London which is the basis for a sinister partnership with his fellow tenant, Mrs. Lovett. Based on the hit Broadway musical.",
    release_date: 1198108800,
    genres: ["Horror"],
  },
  {
    id: "9377",
    title: "Ferris Bueller's Day Off",
    poster: "https://image.tmdb.org/t/p/w500/kKhvDqvxaXSJXWjVKjCTeHvNKd3.jpg",
    overview:
      "A high school slacker pretends to be sick to skip school and have an exciting day off alongside his girlfriend and his best buddy through Chicago, while trying to outwit his obsessive school principal and his unconformited sister along the way.",
    release_date: 518835600,
    genres: ["Comedy"],
  },
  {
    id: "8916",
    title: "Antz",
    poster: "https://image.tmdb.org/t/p/w500/lWPjxbUMpAHFkJpZHHNWhQaRsax.jpg",
    overview:
      "In this animated hit, a neurotic worker ant in love with a rebellious princess rises to unlikely stardom when he switches places with a soldier. Signing up to march in a parade, he ends up under the command of a bloodthirsty general. But he's actually been enlisted to fight against a termite army.",
    release_date: 907290000,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "258509",
    title: "Alvin and the Chipmunks: The Road Chip",
    poster: "https://image.tmdb.org/t/p/w500/16OcuuW5z509WILR6BmscNdXgw0.jpg",
    overview:
      "Through a series of misunderstandings, Alvin, Simon and Theodore come to believe that Dave is going to propose to his new girlfriend in New York City - and dump them. They have three days to get to him and stop the proposal.",
    release_date: 1450310400,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "591",
    title: "The Da Vinci Code",
    poster: "https://image.tmdb.org/t/p/w500/6jexEWBXepwB1ZLpCEllI04Agrb.jpg",
    overview:
      "A murder in Paris’ Louvre Museum and cryptic clues in some of Leonardo da Vinci’s most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that — should it come to light — could rock the very foundations of Christianity.",
    release_date: 1147827600,
    genres: ["Documentary"],
  },
  {
    id: "20760",
    title: "Lilo & Stitch 2: Stitch has a Glitch",
    poster: "https://image.tmdb.org/t/p/w500/vcn7a7ENxi5TBTlka4wYLzmKQIp.jpg",
    overview:
      "Now, we find the rowdy extraterrestrial getting used to life with his new ohana. However, a malfunction in the ultimate creation of Dr. Jumba soon emerges, which reinstates his destructive programming and threatens to both ruin his friendship with Lilo and to short him out for good!",
    release_date: 1106352000,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: "380",
    title: "Rain Man",
    poster: "https://image.tmdb.org/t/p/w500/8L6EMburnnVx8cvQmhGgC826JNc.jpg",
    overview:
      "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
    release_date: 597801600,
    genres: ["Drama"],
  },
  {
    id: "682",
    title: "The Man with the Golden Gun",
    poster: "https://image.tmdb.org/t/p/w500/zULDLrGE42iTiizMJKDoTGbIKlu.jpg",
    overview:
      "A golden bullet has 007 engraved on it as it smashes into the secret service headquarters. The bullet came from the professional killer Scaramanga who has yet to miss a target and James Bond begins a mission to try and stop him.",
    release_date: 155088000,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "18360",
    title: "Night at the Museum: Battle of the Smithsonian",
    poster: "https://image.tmdb.org/t/p/w500/dNvYjzFuSSY7DCVZK7zzaZFemHt.jpg",
    overview:
      "Hapless museum night watchman Larry Daley must help his living, breathing exhibit friends out of a pickle now that they've been transferred to the archives at the Smithsonian Institution. Larry's (mis)adventures this time include close encounters with Amelia Earhart, Abe Lincoln and Ivan the Terrible.",
    release_date: 1242781200,
    genres: ["Adventure", "Fantasy", "Action", "Comedy", "Family"],
  },
  {
    id: "60308",
    title: "Moneyball",
    poster: "https://image.tmdb.org/t/p/w500/4yIQq1e6iOcaZ5rLDG3lZBP3j7a.jpg",
    overview:
      "The story of Oakland Athletics general manager Billy Beane's successful attempt to put together a baseball team on a budget, by employing computer-generated analysis to draft his players.",
    release_date: 1316653200,
    genres: ["Drama"],
  },
  {
    id: "513421",
    title: "Discarnate",
    poster: "https://image.tmdb.org/t/p/w500/5NAWW7zTG0zhrBfHk0sTy1hQlFb.jpg",
    overview:
      "A neuroscientist's obsession with a drug that expands the human mind inadvertently unleashes a deadly supernatural force on his team.",
    release_date: 1555635600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "239563",
    title: "St. Vincent",
    poster: "https://image.tmdb.org/t/p/w500/x78Z5mAropO7AbcXnCHAj7zycPX.jpg",
    overview:
      "A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.",
    release_date: 1412816400,
    genres: ["Music"],
  },
  {
    id: "87421",
    title: "Riddick",
    poster: "https://image.tmdb.org/t/p/w500/xhdDd6Gd6EaPBwNdCjNW2HCnIQY.jpg",
    overview:
      "Betrayed by his own kind and left for dead on a desolate planet, Riddick fights for survival against alien predators and becomes more powerful and dangerous than ever before. Soon bounty hunters from throughout the galaxy descend on Riddick only to find themselves pawns in his greater scheme for revenge. With his enemies right where he wants them, Riddick unleashes a vicious attack of vengeance before returning to his home planet of Furya to save it from destruction.",
    release_date: 1378083600,
    genres: ["Science Fiction", "Action", "Thriller"],
  },
  {
    id: "38234",
    title: "Undisputed III: Redemption",
    poster: "https://image.tmdb.org/t/p/w500/g8KB77SPA7SyU8eid6TAEpt9skU.jpg",
    overview:
      "Russian inmate Boyka, now severely hobbled by the knee injury suffered at the end of Undisputed 2. No longer the feared prison fighter he was, he has declined so far that he is now good only for cleaning toilets. But when a new prison fight tournament begins - an international affair, matching the best fighters from prisons around the globe, enticing them with the promise of freedom for the winner - Boyka must reclaim his dignity and fight for his position in the tournament.",
    release_date: 1274490000,
    genres: ["Action", "Thriller"],
  },
  {
    id: "137",
    title: "Groundhog Day",
    poster: "https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg",
    overview:
      "A narcissistic T.V. weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.",
    release_date: 729388800,
    genres: ["Romance", "Fantasy", "Drama", "Comedy"],
  },
  {
    id: "9339",
    title: "Click",
    poster: "https://image.tmdb.org/t/p/w500/oL0k5JA53PyoHSZqKb3cNkhwBCE.jpg",
    overview:
      "A workaholic architect finds a universal remote that allows him to fast-forward and rewind to different parts of his life. Complications arise when the remote starts to overrule his choices.",
    release_date: 1150938000,
    genres: ["Horror"],
  },
  {
    id: "14574",
    title: "The Boy in the Striped Pyjamas",
    poster: "https://image.tmdb.org/t/p/w500/2C8QCXdMlojTxZjfBlINr4FWcb6.jpg",
    overview:
      "When his family moves from their home in Berlin to a strange new house in Poland, young Bruno befriends Shmuel, a boy who lives on the other side of the fence where everyone seems to be wearing striped pajamas. Unaware of Shmuel's fate as a Jewish prisoner or the role his own Nazi father plays in his imprisonment, Bruno embarks on a dangerous journey inside the camp's walls.",
    release_date: 1210122000,
    genres: ["War", "Drama"],
  },
  {
    id: "87827",
    title: "Life of Pi",
    poster: "https://image.tmdb.org/t/p/w500/leKQao68zra3SY2cPHZLzEbdLKT.jpg",
    overview:
      "The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean.",
    release_date: 1353369600,
    genres: ["Adventure", "Drama", "Action"],
  },
  {
    id: "747",
    title: "Shaun of the Dead",
    poster: "https://image.tmdb.org/t/p/w500/13vOO3DtEG0OYEbgcvVS6XimoIP.jpg",
    overview:
      "Shaun lives a supremely uneventful life, which revolves around his girlfriend, his mother, and, above all, his local pub. This gentle routine is threatened when the dead return to life and make strenuous attempts to snack on ordinary Londoners.",
    release_date: 1081472400,
    genres: ["Horror", "Comedy"],
  },
  {
    id: "43593",
    title: "Piranha 3D",
    poster: "https://image.tmdb.org/t/p/w500/lMLS2OFBbNYMSB1ZbVp4q2S4zTU.jpg",
    overview:
      "Each year the population of sleepy Lake Victoria, Arizona explodes from 5,000 to 50,000 residents for the annual Spring Break celebration. But then, an earthquake opens an underwater chasm, releasing an enormous swarm of ancient Piranha that have been dormant for thousands of years, now with a taste for human flesh. This year, there's something more to worry about than the usual hangovers and complaints from locals, a new type of terror is about to be cut loose on Lake Victoria.",
    release_date: 1282266000,
    genres: ["Comedy", "Horror"],
  },
  {
    id: "13053",
    title: "Bolt",
    poster: "https://image.tmdb.org/t/p/w500/z9VHoUcZ1GiH3f3qYz7Me7Zc1Fd.jpg",
    overview:
      "Bolt is the star of the biggest show in Hollywood. The only problem is, he thinks it's real. After he's accidentally shipped to New York City and separated from Penny, his beloved co-star and owner, Bolt must harness all his 'super powers' to find a way home.",
    release_date: 1201564800,
    genres: ["Drama", "Action", "Crime"],
  },
  {
    id: "9453",
    title: "Caligula",
    poster: "https://image.tmdb.org/t/p/w500/s70rkV8NtEbxHwdjZDDNAKeuZHW.jpg",
    overview:
      "The perversion behind imperial Rome, the epic story of Rome's mad Emporer. All the details of his cruel, bizarre reign are revealed right here: His unholy sexual passion for his sister, his marriage to Rome's most infamous prostitute, his fiendishly inventive means of disposing those who would oppose him, and more.",
    release_date: 285724800,
    genres: [],
  },
  {
    id: "1246",
    title: "Rocky Balboa",
    poster: "https://image.tmdb.org/t/p/w500/kriSNwerSbYIiAVYqEWH3QjD4IY.jpg",
    overview:
      "When he loses a highly publicized virtual boxing match to ex-champ Rocky Balboa, reigning heavyweight titleholder, Mason Dixon retaliates by challenging Rocky to a nationally televised, 10-round exhibition bout. To the surprise of his son and friends, Rocky agrees to come out of retirement and face an opponent who's faster, stronger and thirty years his junior.",
    release_date: 1166572800,
    genres: ["Drama"],
  },
  {
    id: "157353",
    title: "Transcendence",
    poster: "https://image.tmdb.org/t/p/w500/5JwUgEz7KL1gMIeeGJ2vj9lUwUS.jpg",
    overview:
      "Two leading computer scientists work toward their goal of Technological Singularity,  as a radical anti-technology organization fights to prevent them from creating a world where computers can transcend the abilities of the human brain.",
    release_date: 1397610000,
    genres: ["Documentary"],
  },
  {
    id: "138697",
    title: "Don Jon",
    poster: "https://image.tmdb.org/t/p/w500/uh8bwvgGXeUKzdL4oSul9zxyTcd.jpg",
    overview:
      "A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.",
    release_date: 1374800400,
    genres: ["Romance", "Comedy", "Drama"],
  },
  {
    id: "1824",
    title: "50 First Dates",
    poster: "https://image.tmdb.org/t/p/w500/zm9dfA5iwq4vGopD86WPoHXO40T.jpg",
    overview:
      "Henry is a player skilled at seducing women. But when this veterinarian meets Lucy, a girl with a quirky problem when it comes to total recall, he realizes it's possible to fall in love all over again…and again, and again. That's because the delightful Lucy has no short-term memory, so Henry must woo her day after day until he finally sweeps her off her feet.",
    release_date: 1076630400,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "10865",
    title: "Atlantis: The Lost Empire",
    poster: "https://image.tmdb.org/t/p/w500/8fUEFPUTF7kBMuKPiSQHxPvd8EZ.jpg",
    overview:
      "The world's most highly qualified crew of archaeologists and explorers is led by historian Milo Thatch as they board the incredible 1,000-foot submarine Ulysses and head deep into the mysteries of the sea. The underwater expedition takes an unexpected turn when the team's mission must switch from exploring Atlantis to protecting it.",
    release_date: 991443600,
    genres: ["Animation", "Family", "Adventure", "Science Fiction"],
  },
  {
    id: "65",
    title: "8 Mile",
    poster: "https://image.tmdb.org/t/p/w500/7BmQj8qE1FLuLTf7Xjf9sdIHzoa.jpg",
    overview:
      "The setting is Detroit in 1995. The city is divided by 8 Mile, a road that splits the town in half along racial lines. A young white rapper, Jimmy 'B-Rabbit' Smith Jr. summons strength within himself to cross over these arbitrary boundaries to fulfill his dream of success in hip hop. With his pal Future and the three one third in place, all he has to do is not choke.",
    release_date: 1036713600,
    genres: ["Drama", "Music"],
  },
  {
    id: "9593",
    title: "Last Action Hero",
    poster: "https://image.tmdb.org/t/p/w500/yTfjHPqh7C7bkfMtEKx2mPdorQw.jpg",
    overview:
      "Danny is obsessed with a fictional movie character action hero Jack Slater. When a magical ticket transports him into Jack's latest adventure, Danny finds himself in a world where movie magic and reality collide. Now it's up to Danny to save the life of his hero and new friend.",
    release_date: 740365200,
    genres: ["Adventure", "Fantasy", "Action", "Comedy", "Family"],
  },
  {
    id: "45772",
    title: "Gnomeo & Juliet",
    poster: "https://image.tmdb.org/t/p/w500/vVQwgfS9gSFviVT4gS7tZAmhRFc.jpg",
    overview:
      "A version of Shakespeare's play, set in the world of warring indoor and outdoor gnomes. Garden gnomes Gnomeo and Juliet have as many obstacles to overcome as their quasi namesakes when they are caught up in a feud between neighbors. But with plastic pink flamingos and lawnmower races in the mix, can this young couple find lasting happiness?",
    release_date: 1294876800,
    genres: ["Animation", "Family"],
  },
  {
    id: "28468",
    title: "The Key",
    poster: "https://image.tmdb.org/t/p/w500/e6g2geNLgFzMbriH6EvSJZD78nx.jpg",
    overview:
      "After twenty years of marriage, art professor Nino Rolfe attempts to break down his wife Teresa's conventional modesty. Noticing her affection for their daughter's fiancé, Nino instigates her sexual interest in him as well. This sets off a chain of unexpected events and emotional complications, as Nino and his unpredictable fascist daughter find that they both enjoy being jealous.",
    release_date: 435283200,
    genres: ["Drama"],
  },
  {
    id: "23483",
    title: "Kick-Ass",
    poster: "https://image.tmdb.org/t/p/w500/GPiMXaDC2NdDIldLgtijHFTeKH.jpg",
    overview:
      "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
    release_date: 1269216000,
    genres: ["Action", "Crime"],
  },
  {
    id: "249070",
    title: "Hitman: Agent 47",
    poster: "https://image.tmdb.org/t/p/w500/52NXkgvzRYjRnqRPpqjpiwsIgRG.jpg",
    overview:
      "An assassin teams up with a woman to help her find her father and uncover the mysteries of her ancestry.",
    release_date: 1440032400,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "700",
    title: "Octopussy",
    poster: "https://image.tmdb.org/t/p/w500/yoosZitM9igSk3Sd0sBXIhKlAh1.jpg",
    overview:
      "James Bond is sent to investigate after a fellow “00” agent is found dead with a priceless Fabergé egg. James Bond follows the mystery and uncovers a smuggling scandal and a Russian General who wants to provoke a new World War.",
    release_date: 423622800,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "592965",
    title: "Moonlight People",
    poster: "https://image.tmdb.org/t/p/w500/aUE2tKCOMvnkYY3iK90l23vkNiM.jpg",
    overview: "",
    release_date: 1555203600,
    genres: ["Romance", "Science Fiction", "Music", "Mystery"],
  },
  {
    id: "175112",
    title: "Tinker Bell and the Pirate Fairy",
    poster: "https://image.tmdb.org/t/p/w500/qZLBe9Z8Y6WSDVqbqTQJUf8V1mp.jpg",
    overview:
      "Zarina, a smart and ambitious dust-keeper fairy who’s captivated by Blue Pixie Dust and its endless possibilities, flees Pixie Hollow and joins forces with the scheming pirates of Skull Rock, who make her captain of their ship. Tinker Bell and her friends must embark on an epic adventure to find Zarina, and together they go sword-to-sword with the band of pirates led by a cabin boy named James, who’ll soon be known as Captain Hook himself.",
    release_date: 1392249600,
    genres: ["Animation", "Family"],
  },
  {
    id: "381289",
    title: "A Dog's Purpose",
    poster: "https://image.tmdb.org/t/p/w500/3jcNvhtVQe5Neoffdic39fRactM.jpg",
    overview:
      "A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.",
    release_date: 1484784000,
    genres: ["Comedy", "Drama", "Family", "Fantasy", "Adventure"],
  },
  {
    id: "10603",
    title: "George of the Jungle",
    poster: "https://image.tmdb.org/t/p/w500/3ezRDeK5RGvsq1Yui0tYVQhxDdu.jpg",
    overview:
      "After Baby George survives a plane crash in the jungle, he is rescued and then adopted by a wise ape. Years later, grown-up George saves a US noble woman, Ursula Stanhope while she is on a safari—and takes her to the jungle to live with him. While Ursula's lover continues his search for Ursula and the one who took her, George slowly learns the rules of human relationships.",
    release_date: 868928400,
    genres: ["Adventure", "Comedy", "Family"],
  },
  {
    id: "792",
    title: "Platoon",
    poster: "https://image.tmdb.org/t/p/w500/m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg",
    overview:
      "As a young and naive recruit in Vietnam, Chris Taylor faces a moral crisis when confronted with the horrors of war and the duality of man.",
    release_date: 535334400,
    genres: ["Drama", "War", "Action"],
  },
  {
    id: "11137",
    title: "The Prince & Me",
    poster: "https://image.tmdb.org/t/p/w500/ch7nicyvJM0Ga1WlFmUHRBWfOLK.jpg",
    overview:
      "A fairy tale love-story about pre-med student Paige who falls in love with a Danish Prince 'Eddie' who refused to follow the traditions of his parents and has come to the US to quench his thirst for rebellion. Paige and Edward come from two different worlds, but there is an undeniable attraction between them.",
    release_date: 1080432000,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "4488",
    title: "Friday the 13th",
    poster: "https://image.tmdb.org/t/p/w500/4nbUlVEg31I8lchI3bu3Oq3Ks4t.jpg",
    overview:
      "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    release_date: 326682000,
    genres: [],
  },
  {
    id: "296096",
    title: "Me Before You",
    poster: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    overview:
      "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
    release_date: 1464829200,
    genres: ["Drama", "Romance"],
  },
  {
    id: "428605",
    title: "Prostitution",
    poster: "https://image.tmdb.org/t/p/w500/8fYEZfHcIEcKRn9rG2quV2l6IOk.jpg",
    overview:
      "Soo-hyeon and Hye-ji are sitting on a pile of debt thanks to their husband and father who ran away in the middle of the night. Tae-san the loan shark demands the money no matter what. He rapes the mother and daughter and requires them to join prostitution. They survive day by day selling themselves until one day, Tae-san suggests a way they can clean slate over one night and that is for the mother and daughter to have the most extreme sex with one man.",
    release_date: 1479945600,
    genres: ["Documentary", "Drama"],
  },
  {
    id: "12405",
    title: "Slumdog Millionaire",
    poster: "https://image.tmdb.org/t/p/w500/5WU6uusqJrLfiBaNs3KpF4o8Lnj.jpg",
    overview:
      "Jamal Malik is an impoverished Indian teen who becomes a contestant on the Hindi version of ‘Who Wants to Be a Millionaire?’ but, after he wins, he is suspected of cheating.",
    release_date: 1210554000,
    genres: ["Drama", "Romance"],
  },
  {
    id: "538207",
    title: "We Die Young",
    poster: "https://image.tmdb.org/t/p/w500/dB0Dl2nDRmvplaJLeHSfkppJXHs.jpg",
    overview:
      "Lucas, a 14-year-old boy inducted into the gang life in Washington D.C., is determined that his 10-year-old brother won't follow the same path. When an Afghanistan war veteran comes into the neighborhood, an opportunity arises.",
    release_date: 1549497600,
    genres: ["Drama"],
  },
  {
    id: "407451",
    title: "A Wrinkle in Time",
    poster: "https://image.tmdb.org/t/p/w500/yAcb58vipewa1BfNit2RjE6boXA.jpg",
    overview:
      "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him.",
    release_date: 1520467200,
    genres: ["Adventure", "Science Fiction", "Family", "Fantasy"],
  },
  {
    id: "567860",
    title: "Fyre",
    poster: "https://image.tmdb.org/t/p/w500/yFsP0BAJhAH3RTXCAnGvI1CtaUb.jpg",
    overview:
      "He promised supermodels and yachts, but delivered tents and cheese sandwiches. How one man engineered a music festival disaster.",
    release_date: 1547769600,
    genres: ["Drama"],
  },
  {
    id: "9340",
    title: "The Goonies",
    poster: "https://image.tmdb.org/t/p/w500/eBU7gCjTCj9n2LTxvCSIXXOvHkD.jpg",
    overview:
      "A young teenager named Mikey Walsh finds an old treasure map in his father's attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.",
    release_date: 486954000,
    genres: ["Adventure", "Comedy", "Family"],
  },
  {
    id: "10204",
    title: "Around the World in 80 Days",
    poster: "https://image.tmdb.org/t/p/w500/bBiMw6Jtg8tSTcEq8jFV7qk9TRW.jpg",
    overview:
      "A bet pits a British inventor, a Chinese thief and a French artist on a worldwide adventure that they can circle the globe in 80 days.",
    release_date: 1087347600,
    genres: ["Animation"],
  },
  {
    id: "307081",
    title: "Southpaw",
    poster: "https://image.tmdb.org/t/p/w500/r6QlMEQGNvM0YpbN04qhx5xdMiQ.jpg",
    overview:
      "Billy 'The Great' Hope, the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis, a former fighter who trains the city's toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.",
    release_date: 1434330000,
    genres: ["Action", "Drama"],
  },
  {
    id: "437557",
    title: "Blockers",
    poster: "https://image.tmdb.org/t/p/w500/uvlUQXg0AlpGzKukO11K7QtW3Yu.jpg",
    overview:
      "When three parents discover their daughters’ pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.",
    release_date: 1520985600,
    genres: ["Comedy"],
  },
  {
    id: "830",
    title: "Forbidden Planet",
    poster: "https://image.tmdb.org/t/p/w500/aq0OQfRS7hDDI8vyD0ICbH9eguC.jpg",
    overview:
      "A rescue team from earth lands their flying saucer-like spacecraft on an alien world, to discover they are not only not welcomed by the lone survivor of a missing scientific expedition sent there two decades earlier, but, once they have determined to investigate the deaths of his colleagues and bring him back home by force, along with his planet-born daughter, find themselves subjected to assault by something invisible which seems intent on preventing them from leaving the planet, ever.",
    release_date: -435456000,
    genres: ["Science Fiction"],
  },
  {
    id: "13004",
    title: "Barbie and the Diamond Castle",
    poster: "https://image.tmdb.org/t/p/w500/dvjFM3GgYm3gDZ6Ulw0JurDYs4r.jpg",
    overview:
      "Liana and Alexa (Barbie and Teresa) are best friends who share everything, including their love of singing. One day while walking through the forest home from the village, the girls meet an old beggar who gives them a magical mirror. As they clean the mirror and sing, a musical apprentice muse named Melody appears in the mirror's surface, and tells the girls about the secret of the Diamond Castle.",
    release_date: 1199145600,
    genres: ["Animation", "Family"],
  },
  {
    id: "11451",
    title: "Herbie Fully Loaded",
    poster: "https://image.tmdb.org/t/p/w500/7lTfTZ8CDfXw09eAv3OOvsbCVgs.jpg",
    overview:
      "Maggie Peyton, the new owner of Number 53 - the free-wheelin' Volkswagen bug with a mind of its own - puts the car through its paces on the road to becoming a NASCAR competitor.",
    release_date: 1119402000,
    genres: ["Comedy", "Family", "Adventure", "Fantasy", "Romance"],
  },
  {
    id: "296099",
    title: "Vacation",
    poster: "https://image.tmdb.org/t/p/w500/z79MzBerDAW2EOQZCobFTO4dJ7P.jpg",
    overview:
      "Hoping to bring his family closer together and to recreate his childhood vacation for his own kids, a grown up Rusty Griswold takes his wife and their two sons on a cross-country road trip to the coolest theme park in America, Walley World. Needless to say, things don't go quite as planned.",
    release_date: 1438045200,
    genres: ["Drama"],
  },
  {
    id: "1735",
    title: "The Mummy: Tomb of the Dragon Emperor",
    poster: "https://image.tmdb.org/t/p/w500/A3acM1lX5PNWQa6r5qeMAJOxbnT.jpg",
    overview:
      "Archaeologist Rick O'Connell travels to China, pitting him against an emperor from the 2,000-year-old Han dynasty who's returned from the dead to pursue a quest for world domination. This time, O'Connell enlists the help of his wife and son to quash the so-called 'Dragon Emperor' and his abuse of supernatural power.",
    release_date: 1214874000,
    genres: ["Adventure", "Action", "Fantasy"],
  },
  {
    id: "207",
    title: "Dead Poets Society",
    poster: "https://image.tmdb.org/t/p/w500/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
    overview:
      "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    release_date: 612752400,
    genres: ["Drama"],
  },
  {
    id: "9486",
    title: "Johnny English",
    poster: "https://image.tmdb.org/t/p/w500/vxWakJalIcLO1J8yyFEOVQzuLsv.jpg",
    overview:
      "Rowan plays the eponymous lead character in a spoof spy thriller. During the course of the story we follow our hero as he attempts to single-handedly save the country from falling into the hands of a despot.",
    release_date: 1047600000,
    genres: ["Crime", "Adventure", "Action", "Comedy", "Thriller"],
  },
  {
    id: "302946",
    title: "The Accountant",
    poster: "https://image.tmdb.org/t/p/w500/nztAld019tFjllW7VCJvPFiFkt8.jpg",
    overview:
      "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities and the body count starts to rise.",
    release_date: 1476320400,
    genres: ["Drama"],
  },
  {
    id: "346648",
    title: "Paddington 2",
    poster: "https://image.tmdb.org/t/p/w500/zuXMvSQq9F7H29qzuUm0qyUqw6m.jpg",
    overview:
      "Paddington, now happily settled with the Browns, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy, but it is stolen.",
    release_date: 1510185600,
    genres: ["Adventure", "Comedy", "Family"],
  },
  {
    id: "379149",
    title: "The Foreigner",
    poster: "https://image.tmdb.org/t/p/w500/rwM4hzrmc5HiWfQD9ls9DL4QgGl.jpg",
    overview:
      "Quan is a humble London businessman whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love – his teenage daughter – dies in a senseless act of politically-motivated terrorism. His relentless search to find the terrorists leads to a cat-and-mouse conflict with a British government official whose own past may hold the clues to the identities of the elusive killers.",
    release_date: 1506560400,
    genres: [],
  },
  {
    id: "36643",
    title: "The World Is Not Enough",
    poster: "https://image.tmdb.org/t/p/w500/uzHuGbDwubzhOt68DjQq8JPVVaJ.jpg",
    overview:
      "Greed, revenge, world dominance and high-tech terrorism – it's all in a day's work for Bond, who's on a mission to protect a beautiful oil heiress from a notorious terrorist. In a race against time that culminates in a dramatic submarine showdown, Bond works to defuse the international power struggle that has the world's oil supply hanging in the balance.",
    release_date: 942796800,
    genres: [],
  },
  {
    id: "7443",
    title: "Chicken Run",
    poster: "https://image.tmdb.org/t/p/w500/8XgmIsbpVamdhwcNVsYzohFZTtT.jpg",
    overview:
      "Having been hopelessly repressed and facing eventual certain death at the British chicken farm where they are held, Ginger the chicken along with the help of Rocky the American rooster decide to rebel and lead their fellow chickens in a great escape from the murderous farmers Mr. and Mrs. Tweedy and their farm of doom.",
    release_date: 961549200,
    genres: ["Animation"],
  },
  {
    id: "60304",
    title: "Hansel & Gretel: Witch Hunters",
    poster: "https://image.tmdb.org/t/p/w500/j343Rpj3WeNvP0SV80zveve70io.jpg",
    overview:
      "After getting a taste for blood as children, Hansel and Gretel have become the ultimate vigilantes, hell-bent on retribution. Now, unbeknownst to them, Hansel and Gretel have become the hunted, and must face an evil far greater than witches... their past.",
    release_date: 1358380800,
    genres: [],
  },
  {
    id: "667",
    title: "You Only Live Twice",
    poster: "https://image.tmdb.org/t/p/w500/2fOOIEWVT4MgnsuSJ1JwAApBiAI.jpg",
    overview:
      "A mysterious space craft kidnaps a Russian and American space capsule and brings the world on the verge of another World War. James Bond investigates the case in Japan and meets with his archenemy Blofeld. The fifth film from the legendary James Bond series starring Sean Connery as the British super agent.",
    release_date: -80697600,
    genres: [],
  },
  {
    id: "19912",
    title: "The Final Destination",
    poster: "https://image.tmdb.org/t/p/w500/5vxXrr1MqGsT4NNeRITpfDnl4Rq.jpg",
    overview:
      "After a young man's premonition of a deadly race-car crash helps saves the lives of his peers, Death sets out to collect those who evaded their end.",
    release_date: 1251248400,
    genres: ["Horror", "Mystery"],
  },
  {
    id: "10431",
    title: "War",
    poster: "https://image.tmdb.org/t/p/w500/5zUOw8LVC8RY7A6JquDftLkLytv.jpg",
    overview:
      "FBI agent Jack Crawford is out for revenge when his partner is killed and all clues point to the mysterious assassin Rogue. But when Rogue turns up years later to take care of some unfinished business, he triggers a violent clash of rival gangs. Will the truth come out before it's too late? And when the dust settles, who will remain standing?",
    release_date: 1187917200,
    genres: ["Drama"],
  },
  {
    id: "117263",
    title: "Olympus Has Fallen",
    poster: "https://image.tmdb.org/t/p/w500/gKnx04MxnKcf5uOdhHhAAkqcCg.jpg",
    overview:
      "When the White House (Secret Service Code: 'Olympus') is captured by a terrorist mastermind and the President is kidnapped, disgraced former Presidential guard Mike Banning finds himself trapped within the building. As the national security team scrambles to respond, they are forced to rely on Banning's inside knowledge to help retake the White House, save the President and avert an even bigger disaster.",
    release_date: 1363737600,
    genres: ["Action", "Thriller"],
  },
  {
    id: "467938",
    title: "Revenge",
    poster: "https://image.tmdb.org/t/p/w500/lDjY67pqcIoQCe0kK91TVgL14om.jpg",
    overview:
      "Jen is enjoying a romantic getaway with her wealthy boyfriend, which is disrupted when his friends suddenly arrive. Tension mounts at the house until the situation culminates in an unexpected way.",
    release_date: 1505005200,
    genres: ["Documentary"],
  },
  {
    id: "314365",
    title: "Spotlight",
    poster: "https://image.tmdb.org/t/p/w500/gWkgMnIsd8Od7iyhEEKL5G4Qq6J.jpg",
    overview:
      "In 2001, editor Marty Baron of The Boston Globe assigns a team of journalists to investigate allegations against John Geoghan, an unfrocked priest accused of molesting more than 80 boys. Led by editor Walter 'Robby' Robinson, reporters Michael Rezendes, Matt Carroll and Sacha Pfeiffer interview victims and try to unseal sensitive documents. The reporters make it their mission to provide proof of a cover-up of sexual abuse within the Roman Catholic Church.",
    release_date: 1446768000,
    genres: ["Animation"],
  },
  {
    id: "419478",
    title: "Midnight Sun",
    poster: "https://image.tmdb.org/t/p/w500/vPG2zEKPXhovPW9S91SRnwr5JM1.jpg",
    overview:
      "Katie, a 17-year-old, has been sheltered since childhood and confined to her house during the day by a rare disease that makes even the smallest amount of sunlight deadly. Fate intervenes when she meets Charlie and they embark on a summer romance.",
    release_date: 1521676800,
    genres: ["Documentary"],
  },
  {
    id: "299687",
    title: "The 5th Wave",
    poster: "https://image.tmdb.org/t/p/w500/37vpRkrD4OxQN0MQ7C59eszkylh.jpg",
    overview:
      "16-year-old Cassie Sullivan tries to survive in a world devastated by the waves of an alien invasion that has already decimated the population and knocked mankind back to the Stone Age.",
    release_date: 1452729600,
    genres: ["Adventure", "Science Fiction"],
  },
  {
    id: "853",
    title: "Enemy at the Gates",
    poster: "https://image.tmdb.org/t/p/w500/9cSoNnB31hGY2mL78VT8mAbz6nR.jpg",
    overview:
      "A Russian and a German sniper play a game of cat-and-mouse during the Battle of Stalingrad.",
    release_date: 984528000,
    genres: ["War", "History", "Romance", "Drama", "Action"],
  },
  {
    id: "714",
    title: "Tomorrow Never Dies",
    poster: "https://image.tmdb.org/t/p/w500/yWXNZHE4k4jlQhGhBEiLwYa2rIt.jpg",
    overview:
      "A deranged media mogul is staging international incidents to pit the world’s superpowers against each other. Now 007 must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium.",
    release_date: 881798400,
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    id: "289",
    title: "Casablanca",
    poster: "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    overview:
      "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    release_date: -855187200,
    genres: ["Action"],
  },
  {
    id: "2907",
    title: "The Addams Family",
    poster: "https://image.tmdb.org/t/p/w500/qFf8anju5f2epI0my8RdwwIXFIP.jpg",
    overview:
      "Uncle Fester has been missing for 25 years. An evil doctor finds out and introduces a fake Fester in an attempt to get the Addams Family's money. The youngest daughter has some doubts about the new uncle Fester, but the fake uncle adapts very well to the strange family. Can the doctor carry out her evil plans and take over the Addams Family's fortune?",
    release_date: 690768000,
    genres: ["Horror", "Comedy", "Fantasy"],
  },
  {
    id: "440161",
    title: "The Sisters Brothers",
    poster: "https://image.tmdb.org/t/p/w500/7Tl2nZ6uvmxwK14Skbf9VFHEHpX.jpg",
    overview:
      "Oregon, 1851. Hermann Kermit Warm, a chemist and aspiring gold prospector, keeps a profitable secret that the Commodore wants to know, so he sends the Sisters brothers, two notorious assassins, to capture him on his way to California.",
    release_date: 1537318800,
    genres: ["Comedy", "Western"],
  },
  {
    id: "462919",
    title: "Sierra Burgess Is a Loser",
    poster: "https://image.tmdb.org/t/p/w500/vjnHRySiVM4YcBYzjCxw344y9g.jpg",
    overview:
      "A case of mistaken identity results in unexpected romance when the most popular girl in high school and the biggest loser must come together to win over their crushes.",
    release_date: 1536282000,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "7446",
    title: "Tropic Thunder",
    poster: "https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg",
    overview:
      "Vietnam veteran 'Four Leaf' Tayback's memoir, Tropic Thunder, is being made into a film, but Director Damien Cockburn can’t control the cast of prima donnas. Behind schedule and over budget, Cockburn is ordered by a studio executive to get filming back on track, or risk its cancellation. On Tayback's advice, Cockburn drops the actors into the middle of the jungle to film the remaining scenes but, unbeknownst to the actors and production, the group have been dropped in the middle of the Golden Triangle, the home of heroin-producing gangs.",
    release_date: 1218243600,
    genres: ["Action", "Comedy"],
  },
  {
    id: "4148",
    title: "Revolutionary Road",
    poster: "https://image.tmdb.org/t/p/w500/1jYKJEGcgbkEjlKuY94Dv7BVe1P.jpg",
    overview:
      "A young couple living in a Connecticut suburb during the mid-1950s struggle to come to terms with their personal problems while trying to raise their two children. Based on a novel by Richard Yates.",
    release_date: 1229644800,
    genres: ["Drama", "Romance"],
  },
  {
    id: "76494",
    title: "What to Expect When You're Expecting",
    poster: "https://image.tmdb.org/t/p/w500/qh7uMpujUVST7edga1kg2IYju2C.jpg",
    overview:
      "Challenges of impending parenthood turn the lives of five couples upside down. Two celebrities are unprepared for the surprise demands of pregnancy; hormones wreak havoc on a baby-crazy author, while her husband tries not to be outdone by his father, who's expecting twins with his young trophy wife; a photographer's husband isn't sure about his wife's adoption plans; a one-time hook-up results in a surprise pregnancy for rival food-truck owners.",
    release_date: 1337216400,
    genres: ["Romance", "Comedy", "Drama"],
  },
  {
    id: "81",
    title: "Nausicaä of the Valley of the Wind",
    poster: "https://image.tmdb.org/t/p/w500/sIpcATxMrKHRRUJAGI5UIUT7XMG.jpg",
    overview:
      "After a global war, the seaside kingdom known as the Valley of the Wind remains one of the last strongholds on Earth untouched by a poisonous jungle and the powerful insects that guard it. Led by the courageous Princess Nausicaä, the people of the Valley engage in an epic struggle to restore the bond between humanity and Earth.",
    release_date: 447811200,
    genres: ["Adventure", "Animation", "Fantasy"],
  },
  {
    id: "50124",
    title: "Frivolous Lola",
    poster: "https://image.tmdb.org/t/p/w500/n691GdFEMP3bBZ3SvLxFD2paAOz.jpg",
    overview:
      "The story takes place in northern Italy in the 1950's. Lola and Masetto are about to get married. Masetto wants to keep Lola as a virgin until they are married. But Lola is impatient to remain in chastity until the wedding night. She wants to be sure that Masetto is a good lover, before she commits herself into marriage. She does everything to trick Masetto into breaking the moral tradition.",
    release_date: 885340800,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "107985",
    title: "The World's End",
    poster: "https://image.tmdb.org/t/p/w500/kpglnOBYmKn0AkkWDzGxzKHDbds.jpg",
    overview:
      "Five friends who reunite in an attempt to top their epic pub crawl from 20 years earlier unwittingly become humankind's only hope for survival.",
    release_date: 1374109200,
    genres: ["Documentary"],
  },
  {
    id: "3933",
    title: "Corpse Bride",
    poster: "https://image.tmdb.org/t/p/w500/isb2Qow76GpqYmsSyfdMfsYAjts.jpg",
    overview:
      "Set in a 19th-century european village, this stop-motion animation feature follows the story of Victor, a young man whisked away to the underworld and wed to a mysterious corpse bride, while his real bride Victoria waits bereft in the land of the living.",
    release_date: 1126486800,
    genres: ["Romance", "Fantasy", "Animation"],
  },
  {
    id: "282035",
    title: "The Mummy",
    poster: "https://image.tmdb.org/t/p/w500/zxkY8byBnCsXodEYpK8tmwEGXBI.jpg",
    overview:
      "Though safely entombed in a crypt deep beneath the unforgiving desert, an ancient queen whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
    release_date: 1496710800,
    genres: [],
  },
  {
    id: "926",
    title: "Galaxy Quest",
    poster: "https://image.tmdb.org/t/p/w500/fZXSwgZknp81vmciTb86rw0MejV.jpg",
    overview:
      "The stars of a 1970s sci-fi show - now scraping a living through re-runs and sci-fi conventions - are beamed aboard an alien spacecraft. Believing the cast's heroic on-screen dramas are historical documents of real-life adventures, the band of aliens turn to the ailing celebrities for help in their quest to overcome the oppressive regime in their solar system.",
    release_date: 945907200,
    genres: ["Comedy", "Family", "Science Fiction"],
  },
  {
    id: "81005",
    title: "Jack the Giant Slayer",
    poster: "https://image.tmdb.org/t/p/w500/xLbVsFpAlwf6khU3gG1yaRBPeC.jpg",
    overview:
      "The story of an ancient war that is reignited when a young farmhand unwittingly opens a gateway between our world and a fearsome race of giants. Unleashed on the Earth for the first time in centuries, the giants strive to reclaim the land they once lost, forcing the young man, Jack into the battle of his life to stop them. Fighting for a kingdom, its people, and the love of a brave princess, he comes face to face with the unstoppable warriors he thought only existed in legend–and gets the chance to become a legend himself.",
    release_date: 1361923200,
    genres: ["Action", "Adventure", "Family", "Fantasy"],
  },
  {
    id: "2251",
    title: "Unfaithful",
    poster: "https://image.tmdb.org/t/p/w500/bjiHEhuiwhIygzjczbTPAA07cGc.jpg",
    overview:
      "Connie is a wife and mother whose 11-year marriage to Edward has lost its sexual spark. When Connie literally runs into handsome book collector Paul, he sweeps her into an all-consuming affair. But Edward soon becomes suspicious and decides to confront the other man.",
    release_date: 1020992400,
    genres: [],
  },
  {
    id: "6978",
    title: "Big Trouble in Little China",
    poster: "https://image.tmdb.org/t/p/w500/gI2Qs1yTTj3NcESJyttCkbmJ4k9.jpg",
    overview:
      "When trucker Jack Burton agreed to take his friend, Wang Chi, to pick up his fiancee at the airport, he never expected to get involved in a supernatural battle between good and evil. Wang's fiancee has emerald green eyes, which make her a perfect target for immortal sorcerer Lo Pan and his three invincible cronies. Lo Pan must marry a girl with green eyes so he can regain his physical form.",
    release_date: 517798800,
    genres: ["Comedy", "Action"],
  },
  {
    id: "8960",
    title: "Hancock",
    poster: "https://image.tmdb.org/t/p/w500/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg",
    overview:
      "Hancock is a down-and-out superhero who's forced to employ a PR expert to help repair his image when the public grows weary of all the damage he's inflicted during his lifesaving heroics. The agent's idea of imprisoning the antihero to make the world miss him proves successful, but will Hancock stick to his new sense of purpose or slip back into old habits?",
    release_date: 1214874000,
    genres: [],
  },
  {
    id: "2899",
    title: "Asterix & Obelix: Mission Cleopatra",
    poster: "https://image.tmdb.org/t/p/w500/sDrF8Z2GaRQjYzDuusEABohmMir.jpg",
    overview:
      "The Egyptian Queen Cleopatra bets against the Roman Emperor, Julius Caesar, that her people are still great, even if the times of the Pharaohs has long passed. She vows (against all logic) to build a new palace for Caesar within three months. Since all her architects are either busy otherwise or too conservative in style, this ambivalent honor falls to Edifis. He is to build the palace and be covered in gold or, if not, his fate is to be eaten by crocodiles. Edifis calls upon an old friend to help him out: The fabulous Druid Getafix from Gaul, who brews a fantastic potion that gives supernatural strength. In order to help and protect the old Druid, Asterix and Obelix accompany him on his journey to Egypt. When Julius Caesar gets wind of the project succeeding, he has the building site attacked by his troops in order to win the bet and not lose face. But just like the local pirates, he hasn't counted on Asterix and Obelix.",
    release_date: 1012262400,
    genres: ["Family", "Fantasy", "Comedy", "Adventure"],
  },
  {
    id: "146",
    title: "Crouching Tiger, Hidden Dragon",
    poster: "https://image.tmdb.org/t/p/w500/iNDVBFNz4XyYzM9Lwip6atSTFqf.jpg",
    overview:
      "Two warriors in pursuit of a stolen sword and a notorious fugitive are led to an impetuous, physically-skilled, teenage nobleman's daughter, who is at a crossroads in her life.",
    release_date: 962845200,
    genres: ["Action", "Adventure"],
  },
  {
    id: "340666",
    title: "Nocturnal Animals",
    poster: "https://image.tmdb.org/t/p/w500/iTlTUsFkZiwfIlg8pxuX4mbO7US.jpg",
    overview:
      "Susan Morrow receives a book manuscript from her ex-husband – a man she left 20 years earlier – asking for her opinion of his writing. As she reads, she is drawn into the fictional life of Tony Hastings, a mathematics professor whose family vacation turns violent.",
    release_date: 1478217600,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "86834",
    title: "Noah",
    poster: "https://image.tmdb.org/t/p/w500/trtD17IqSWV9Nbn4OILztc9GuCX.jpg",
    overview:
      "A man who suffers visions of an apocalyptic deluge takes measures to protect his family from the coming flood.",
    release_date: 1394150400,
    genres: ["Drama"],
  },
  {
    id: "298250",
    title: "Jigsaw",
    poster: "https://image.tmdb.org/t/p/w500/2mUqHJG7ZiGwZYIylczFCsRPbXM.jpg",
    overview:
      "Dead bodies begin to turn up all over the city, each meeting their demise in a variety of grisly ways. All investigations begin to point the finger at deceased killer John Kramer.",
    release_date: 1508979600,
    genres: [],
  },
  {
    id: "6557",
    title: "27 Dresses",
    poster: "https://image.tmdb.org/t/p/w500/rEfourJfgEyKiewwH8ZkUYt9AqE.jpg",
    overview:
      "Altruistic Jane finds herself facing her worst nightmare as her younger sister announces her engagement to the man Jane secretly adores.",
    release_date: 1199923200,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "1813",
    title: "The Devil's Advocate",
    poster: "https://image.tmdb.org/t/p/w500/5ZzBGpxy55OQzHxKVY11IpY6a0o.jpg",
    overview:
      "A hotshot lawyer gets more than he bargained for when he learns his new boss is Lucifer himself.",
    release_date: 877050000,
    genres: ["Mystery", "Drama"],
  },
  {
    id: "14564",
    title: "Rings",
    poster: "https://image.tmdb.org/t/p/w500/5FoczK6tDFzC9OyHiMMNIeNspek.jpg",
    overview:
      "Julia becomes worried about her boyfriend, Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a 'movie within the movie' that no one has ever seen before.",
    release_date: 1485907200,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "4513",
    title: "30 Days of Night",
    poster: "https://image.tmdb.org/t/p/w500/uyiJDaKadunrMB35bEZ5TAvzz3a.jpg",
    overview:
      "This is the story of an isolated Alaskan town that is plunged into darkness for a month each year when the sun sinks below the horizon. As the last rays of light fade, the town is attacked by a bloodthirsty gang of vampires bent on an uninterrupted orgy of destruction. Only the small town's husband-and-wife Sheriff team stand between the survivors and certain destruction.",
    release_date: 1192582800,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "36647",
    title: "Blade",
    poster: "https://image.tmdb.org/t/p/w500/e6ErRnIgKmoBtcKpht3amsMfo52.jpg",
    overview:
      "When Blade's mother was bitten by a vampire during pregnancy, she did not know that she gave her son a special gift while dying—all the good vampire attributes in combination with the best human skills. Blade and his mentor battle an evil vampire rebel who plans to take over the outdated vampire council, capture Blade and resurrect a voracious blood god.",
    release_date: 903661200,
    genres: ["Action", "Horror"],
  },
  {
    id: "424121",
    title: "Apostle",
    poster: "https://image.tmdb.org/t/p/w500/rd269f2Yftxxam3EOJPYVwrvjIJ.jpg",
    overview:
      "In 1905, a man travels to a remote island in search of his missing sister who has been kidnapped by a mysterious religious cult.",
    release_date: 1537491600,
    genres: ["Drama"],
  },
  {
    id: "9732",
    title: "The Lion King 2: Simba's Pride",
    poster: "https://image.tmdb.org/t/p/w500/sWR1x6UCMCGN9xEf8RGhPS934X0.jpg",
    overview:
      "The circle of life continues for Simba, now fully grown and in his rightful place as the king of Pride Rock. Simba and Nala have given birth to a daughter, Kiara who's as rebellious as her father was. But Kiara drives her parents to distraction when she catches the eye of Kovu, the son of the evil lioness, Zira. Will Kovu steal Kiara's heart?",
    release_date: 909190800,
    genres: ["Family", "Animation", "Drama"],
  },
  {
    id: "8780",
    title: "Baby Mama",
    poster: "https://image.tmdb.org/t/p/w500/caN4dYx3eV8k0pOrbZPesTEP50D.jpg",
    overview:
      "A successful, single businesswoman who dreams of having a baby discovers she is infertile and hires a working class woman to be her unlikely surrogate.",
    release_date: 1209085200,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "116149",
    title: "Paddington",
    poster: "https://image.tmdb.org/t/p/w500/hy70yIiMQEHMzRaVlMkOPlao2Ws.jpg",
    overview:
      "A young Peruvian bear travels to London in search of a new home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family.",
    release_date: 1417132800,
    genres: ["Comedy", "Adventure", "Family"],
  },
  {
    id: "419743",
    title: "Disobedience",
    poster: "https://image.tmdb.org/t/p/w500/skPT4ffWhlmmDOMNEdxOiP6Emfz.jpg",
    overview:
      "A woman learns about the death of her Orthodox Jewish father, a rabbi. She returns home and has romantic feelings rekindled for her best childhood friend, who is now married to her cousin.",
    release_date: 1505005200,
    genres: ["Drama"],
  },
  {
    id: "554792",
    title: "Nakee 2",
    poster: "https://image.tmdb.org/t/p/w500/zboT7sbKpI6UXCMj9P62APkNFjJ.jpg",
    overview:
      "A new detective was sent to investigate unusual events in a rural village in the north-east of Thailand which was believed to be involved with the mythical giant snake called Nakee.",
    release_date: 1539824400,
    genres: ["Drama", "Fantasy", "Romance"],
  },
  {
    id: "49444",
    title: "Kung Fu Panda 2",
    poster: "https://image.tmdb.org/t/p/w500/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg",
    overview:
      "Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.",
    release_date: 1306285200,
    genres: ["Animation", "Family"],
  },
  {
    id: "947",
    title: "Lawrence of Arabia",
    poster: "https://image.tmdb.org/t/p/w500/vOEbimiBaTQr9SDFfDHHWCZdZK2.jpg",
    overview:
      "The story of British officer T.E. Lawrence's mission to aid the Arab tribes in their revolt against the Ottoman Empire during the First World War. Lawrence becomes a flamboyant, messianic figure in the cause of Arab unity but his psychological instability threatens to undermine his achievements.",
    release_date: -222825600,
    genres: ["Documentary"],
  },
  {
    id: "205584",
    title: "Gods of Egypt",
    poster: "https://image.tmdb.org/t/p/w500/hzH7fwaTyQNITLo40Hu3R7cVMqv.jpg",
    overview: "A common thief joins a mythical god on a quest through Egypt.",
    release_date: 1456358400,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "316023",
    title: "Mike and Dave Need Wedding Dates",
    poster: "https://image.tmdb.org/t/p/w500/rK0UwpiE3PSdGahfDZLCummxMwd.jpg",
    overview:
      "Mike and Dave are young, adventurous, fun-loving brothers who tend to get out of control at family gatherings. When their sister Jeanie reveals her Hawaiian wedding plans, the rest of the Stangles insist that the brothers bring respectable dates. After placing an ad on Craigslist, the siblings decide to pick Tatiana and Alice, two charming and seemingly normal women. Once they arrive on the island, however, Mike and Dave realize that their companions are ready to get wild and party.",
    release_date: 1467853200,
    genres: ["Comedy"],
  },
  {
    id: "43947",
    title: "I Spit on Your Grave",
    poster: "https://image.tmdb.org/t/p/w500/7hUHtWT0I0ex84megfNKdTPTRWK.jpg",
    overview:
      "A remake of the 1979 controversial cult classic, I Spit on Your Grave retells the horrific tale of writer Jennifer Hills who takes a retreat from the city to a charming cabin in the woods to start on her next book. But Jennifer's presence in the small town attracts the attention of a few morally deprived locals led by Johnny, the town's service station owner, his two co-workers, Andy and Stanley, who along with their socially and mentally challenged friend Matthew, set out one night to teach this city girl a lesson.",
    release_date: 1276736400,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "165",
    title: "Back to the Future Part II",
    poster: "https://image.tmdb.org/t/p/w500/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",
    overview:
      "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
    release_date: 627696000,
    genres: ["TV Movie", "Documentary"],
  },
  {
    id: "14869",
    title: "G.I. Joe: The Rise of Cobra",
    poster: "https://image.tmdb.org/t/p/w500/wEr0FAAKPjlZ63i2WuuB2ge8OWv.jpg",
    overview:
      "From the Egyptian desert to deep below the polar ice caps, the elite G.I. JOE team uses the latest in next-generation spy and military equipment to fight the corrupt arms dealer Destro and the growing threat of the mysterious Cobra organization to prevent them from plunging the world into chaos.",
    release_date: 1249347600,
    genres: ["Adventure", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "283601",
    title: "Galveston",
    poster: "https://image.tmdb.org/t/p/w500/q4oJPtd6ilux9NU9wXomTWBI90B.jpg",
    overview:
      "After a violent encounter, Roy finds Rocky and sees something in her eyes that prompts a fateful decision. He takes her with him as he flees to Galveston, an action as ill-advised as it is inescapable.",
    release_date: 1539133200,
    genres: [],
  },
  {
    id: "856",
    title: "Who Framed Roger Rabbit",
    poster: "https://image.tmdb.org/t/p/w500/lYfRc57Kx9VgLZ48iulu0HKnM15.jpg",
    overview:
      "'Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime suspect.",
    release_date: 582858000,
    genres: [],
  },
  {
    id: "223702",
    title: "Sausage Party",
    poster: "https://image.tmdb.org/t/p/w500/6jjOY2Vgii2wbUOYNWkMLLqnpZB.jpg",
    overview:
      "Sausage Party, the first R-rated CG animated movie, is about one sausage leading a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
    release_date: 1468198800,
    genres: ["Adventure", "Animation", "Comedy", "Fantasy"],
  },
  {
    id: "27022",
    title: "The Sorcerer's Apprentice",
    poster: "https://image.tmdb.org/t/p/w500/qC4i8fj4IpkOHUFQ1Lg85hiIF5B.jpg",
    overview:
      "Balthazar Blake is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath. Balthazar can't do it alone, so he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness.",
    release_date: 1278982800,
    genres: ["Action", "Adventure", "Drama", "Family", "Fantasy", "Romance"],
  },
  {
    id: "9291",
    title: "The Longest Yard",
    poster: "https://image.tmdb.org/t/p/w500/nbKcVBcxF96ARW2oKHqDYAcLdu.jpg",
    overview:
      "Pro quarter-back, Paul Crewe and former college champion and coach, Nate Scarboro are doing time in the same prison. Asked to put together a team of inmates to take on the guards, Crewe enlists the help of Scarboro to coach the inmates to victory in a football game 'fixed' to turn out quite another way.",
    release_date: 1117155600,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "8961",
    title: "Bad Boys II",
    poster: "https://image.tmdb.org/t/p/w500/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg",
    overview:
      "Out-of-control, trash-talking buddy cops Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force reunite, and bullets fly, cars crash and laughs explode as they pursue a whacked-out drug lord from the streets of Miami to the barrios of Cuba. But the real fireworks result when Marcus discovers that playboy Mike is secretly romancing Marcus’ sexy sister.",
    release_date: 1058490000,
    genres: ["Adventure", "Action", "Comedy", "Thriller", "Crime"],
  },
  {
    id: "297",
    title: "Meet Joe Black",
    poster: "https://image.tmdb.org/t/p/w500/fDPAjvfPMomkKF7cMRmL5Anak61.jpg",
    overview:
      "When the grim reaper comes to collect the soul of megamogul Bill Parrish, he arrives with a proposition: Host him for a 'vacation' among the living in trade for a few more days of existence. Parrish agrees, and using the pseudonym Joe Black, Death begins taking part in Parrish's daily agenda and falls in love with the man's daughter. Yet when Black's holiday is over, so is Parrish's life.",
    release_date: 910828800,
    genres: ["Fantasy", "Drama", "Romance"],
  },
  {
    id: "59859",
    title: "Kick-Ass 2",
    poster: "https://image.tmdb.org/t/p/w500/4LUzG0blTn6JMhUwXSmjPqNFNXL.jpg",
    overview:
      "After Kick-Ass’ insane bravery inspires a new wave of self-made masked crusaders, he joins a patrol led by the Colonel Stars and Stripes. When these amateur superheroes are hunted down by Red Mist — reborn as The Mother Fucker — only the blade-wielding Hit-Girl can prevent their annihilation.",
    release_date: 1374022800,
    genres: ["Action", "Adventure", "Crime"],
  },
  {
    id: "11153",
    title: "National Lampoon's Vacation",
    poster: "https://image.tmdb.org/t/p/w500/q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
    overview:
      "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
    release_date: 428202000,
    genres: ["Comedy", "Adventure"],
  },
  {
    id: "440",
    title: "Aliens vs Predator: Requiem",
    poster: "https://image.tmdb.org/t/p/w500/5iTwPDNtvK6ZZF607BHBbU3HO0B.jpg",
    overview:
      "The iconic creatures from two of the scariest film franchises in movie history wage their most brutal battle ever—in our own backyard. The small town of Gunnison, Colorado becomes a war zone between two of the deadliest extra-terrestrial life forms—the Alien and the Predator. When a Predator scout ship crash-lands in the hills outside the town, Alien Facehuggers and a hybrid Alien/Predator are released and begin to terrorize the town.",
    release_date: 1198540800,
    genres: ["Fantasy", "Action", "Science Fiction", "Thriller", "Horror"],
  },
  {
    id: "36955",
    title: "True Lies",
    poster: "https://image.tmdb.org/t/p/w500/pweFTnzzTfGK68woSVkiTgjLzWm.jpg",
    overview:
      "Harry Tasker is a secret agent for the United States Government. For years, he has kept his job from his wife, but is forced to reveal his identity and try to stop nuclear terrorists when he and his wife are kidnapped by them.",
    release_date: 774234000,
    genres: ["Action", "Thriller"],
  },
  {
    id: "6399",
    title: "A Friend Is a Treasure",
    poster: "https://image.tmdb.org/t/p/w500/8fl6sXVv5fWMpDxFDab54qc71tv.jpg",
    overview:
      "Alan gets a map to some war treasure which the Japanese army left behind on a small Pacific island at the end of World War II. But some gangsters try to steal the map from him and so he hides on Charlie's boat which just leaves the harbor. He manipulates the ship's compass so that Charlie is not aware that he is sailing to the treasure island. But when they step on the island, they discover that it is not as abandoned as they believed: there are some natives - and a Japanese soldier still defending the treasure",
    release_date: 376704000,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "9268",
    title: "Eraser",
    poster: "https://image.tmdb.org/t/p/w500/1FUV5ZmEkbxvqwQW0az4tFFOSmo.jpg",
    overview:
      "U.S. Marshall John Kruger erases the identities of people enrolled in the Witness Protection Program. His current assignment is to protect Lee Cullen, who's uncovered evidence that the weapons manufacturer she works for has been selling to terrorist groups. When Kruger discovers that there's a corrupt agent within the program, he must guard his own life while trying to protect Lee's.",
    release_date: 835318800,
    genres: ["Drama"],
  },
  {
    id: "10591",
    title: "The Girl Next Door",
    poster: "https://image.tmdb.org/t/p/w500/5mVyFHSY2rSsNgD4NfEwV82HigU.jpg",
    overview:
      "Exceptionally ambitious high schooler Matthew has aspirations for a career in politics when he falls in love with his gorgeous 19-year-old neighbor, Danielle. But Matthew's bright future is jeopardized when he finds Danielle was once a porn star. As Danielle's past catches up with her, Matthew's love for her forces him to re-evaluate his goals.",
    release_date: 1081472400,
    genres: ["TV Movie", "Thriller"],
  },
  {
    id: "8665",
    title: "K-19: The Widowmaker",
    poster: "https://image.tmdb.org/t/p/w500/ji7YWKx40TM8YexbRqfJZKMhQY3.jpg",
    overview:
      "When Russia's first nuclear submarine malfunctions on its maiden voyage, the crew must race to save the ship and prevent a nuclear disaster.",
    release_date: 1027040400,
    genres: ["Drama", "History", "War", "Thriller", "Mystery"],
  },
  {
    id: "9654",
    title: "The Italian Job",
    poster: "https://image.tmdb.org/t/p/w500/eSkjK4kctyrWpFhxl35GPvSs6tI.jpg",
    overview:
      "Charlie Croker pulled off the crime of a lifetime. The one thing that he didn't plan on was being double-crossed. Along with a drop-dead gorgeous safecracker, Croker and his team take off to re-steal the loot and end up in a pulse-pounding, pedal-to-the-metal chase that careens up, down, above and below the streets of Los Angeles.",
    release_date: 1054256400,
    genres: ["Action", "Crime"],
  },
  {
    id: "38055",
    title: "Megamind",
    poster: "https://image.tmdb.org/t/p/w500/uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg",
    overview:
      "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
    release_date: 1288227600,
    genres: ["Animation", "Action", "Comedy", "Family", "Science Fiction"],
  },
  {
    id: "97367",
    title: "The Place Beyond the Pines",
    poster: "https://image.tmdb.org/t/p/w500/vY5j2xQzMGWmxBuhQo0HfA4Lxqb.jpg",
    overview:
      "A motorcycle stunt rider considers committing a crime in order to provide for his wife and child, an act that puts him on a collision course with a cop-turned-politician.",
    release_date: 1363737600,
    genres: ["Drama", "Crime"],
  },
  {
    id: "402",
    title: "Basic Instinct",
    poster: "https://image.tmdb.org/t/p/w500/76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg",
    overview:
      "A police detective is in charge of the investigation of a brutal murder, in which a beautiful and seductive woman could be involved.",
    release_date: 701049600,
    genres: ["Thriller", "Mystery"],
  },
  {
    id: "660",
    title: "Thunderball",
    poster: "https://image.tmdb.org/t/p/w500/kQdyq96yvqrPCkLdaiucsE92neO.jpg",
    overview:
      "A criminal organization has obtained two nuclear bombs and are asking for a 100 million pound ransom in the form of diamonds in seven days or they will use the weapons. The secret service sends James Bond to the Bahamas to once again save the world.",
    release_date: -127699200,
    genres: [],
  },
  {
    id: "13417",
    title: "Kronk's New Groove",
    poster: "https://image.tmdb.org/t/p/w500/kyMrt0RPVC8LDpdMrk1DjN6Gqdu.jpg",
    overview:
      "Kronk, now chef and Head Delivery Boy of Mudka's Meat Hut, is fretting over the upcoming visit of his father. Kronk's father always disapproved of young Kronk's culinary interests and wished that Kronk instead would settle down with a wife and a large house on a hill.",
    release_date: 1133740800,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: "10483",
    title: "Death Race",
    poster: "https://image.tmdb.org/t/p/w500/5A79GeOb3uChQ0l0ZDjDyODKQp3.jpg",
    overview:
      "Terminal Island, New York: 2020. Overcrowding in the US penal system has reached a breaking point. Prisons have been turned over to a monolithic Weyland Corporation, which sees jails full of thugs as an opportunity for televised sport. Adrenalized inmates, a global audience hungry for violence and a spectacular, enclosed arena come together to form the 'Death Race', the biggest, most brutal event.",
    release_date: 1219366800,
    genres: ["Action", "Adventure", "Comedy", "Science Fiction", "Thriller"],
  },
  {
    id: "49040",
    title: "The Bourne Legacy",
    poster: "https://image.tmdb.org/t/p/w500/ucqtAussxYNRw4lGvRaSbRJLskV.jpg",
    overview:
      "New CIA operative, Aaron Cross experiences life-or-death stakes that have been triggered by the previous actions of Jason Bourne.",
    release_date: 1344387600,
    genres: ["Action", "Thriller"],
  },
  {
    id: "642",
    title: "Butch Cassidy and the Sundance Kid",
    poster: "https://image.tmdb.org/t/p/w500/oDpDXln1x3sbnt8wQBKsU6J5txT.jpg",
    overview:
      "In late 1890s Wyoming, Butch Cassidy is the affable, clever and talkative leader of the outlaw Hole in the Wall Gang. His closest companion is the laconic dead-shot 'Sundance Kid'. As the west rapidly becomes civilized, the law finally catches up to Butch, Sundance and their gang.  Chased doggedly by a special posse, the two decide to make their way to South America in hopes of evading their pursuers once and for all.",
    release_date: -8640000,
    genres: [],
  },
  {
    id: "254904",
    title: "The November Man",
    poster: "https://image.tmdb.org/t/p/w500/4ejNFbCgLMDAuy7jFQmc7cr6UAW.jpg",
    overview:
      "An ex- CIA operative is brought back in on a very personal mission and finds himself pitted against his former pupil in a deadly game involving high level CIA officials and the Russian president-elect.",
    release_date: 1409101200,
    genres: ["Crime", "Action", "Thriller"],
  },
  {
    id: "58233",
    title: "Johnny English Reborn",
    poster: "https://image.tmdb.org/t/p/w500/1T6qnlTVkrGr0mpgZbpSwVU5FWW.jpg",
    overview:
      "The most prominent heads of state in the world begin gathering for a conference that could have a major impact on global politics. When MI-7 receives word that the Chinese premier has become the target of some high-powered killers, it falls on Johnny English to save the day. Armed with the latest high-tech weaponry and gadgets that would make even James Bond jealous, the once-disgraced agent uncovers evidence of a massive conspiracy involving some of the world's most powerful organisations, and vows to redeem his tarnished reputation by stopping the killers before they can strike.",
    release_date: 1316048400,
    genres: ["Crime", "Adventure", "Action", "Comedy", "Thriller"],
  },
  {
    id: "7980",
    title: "The Lovely Bones",
    poster: "https://image.tmdb.org/t/p/w500/q037kF34JCHKeoVSNVrv21Tj6Im.jpg",
    overview:
      "After being brutally murdered, 14-year-old Susie Salmon watches from heaven over her grief-stricken family -- and her killer. As she observes their daily lives, she must balance her thirst for revenge with her desire for her family to heal.",
    release_date: 1261785600,
    genres: ["Fantasy", "Drama"],
  },
  {
    id: "9016",
    title: "Treasure Planet",
    poster: "https://image.tmdb.org/t/p/w500/zMKatZ0c0NCoKzfizaCzVUcbKMf.jpg",
    overview:
      "When space galleon cabin boy Jim Hawkins discovers a map to an intergalactic 'loot of a thousand worlds,' a cyborg cook named John Silver teaches him to battle supernovas and space storms. But, soon, Jim realizes Silver is a pirate intent on mutiny!",
    release_date: 1038268800,
    genres: ["Adventure", "Animation", "Family", "Fantasy", "Science Fiction"],
  },
  {
    id: "9802",
    title: "The Rock",
    poster: "https://image.tmdb.org/t/p/w500/j5mxLNWjUlXUUk8weFBtnF4afIR.jpg",
    overview:
      "FBI chemical warfare expert Stanley Goodspeed is sent on an urgent mission with a former British spy, John Patrick Mason, to stop Gen. Francis X. Hummel from launching chemical weapons on Alcatraz Island into San Francisco. Gen. Hummel demands $100 million in war reparations to be paid to the families of slain servicemen who died on covert operations. After their SEAL team is wiped out, Stanley and John deal with the soldiers on their own.",
    release_date: 834022800,
    genres: ["Documentary"],
  },
  {
    id: "7131",
    title: "Van Helsing",
    poster: "https://image.tmdb.org/t/p/w500/gsFun8nATm52aGHeT8ueAel98nE.jpg",
    overview:
      "Famed monster slayer Gabriel Van Helsing is dispatched to Transylvania to assist the last of the Valerious bloodline in defeating Count Dracula. Anna Valerious reveals that Dracula has formed an unholy alliance with Dr. Frankenstein's monster and is hell-bent on exacting a centuries-old curse on her family.",
    release_date: 1083718800,
    genres: ["Horror", "Adventure", "Action"],
  },
  {
    id: "7453",
    title: "The Hitchhiker's Guide to the Galaxy",
    poster: "https://image.tmdb.org/t/p/w500/tcrkbs4ezEklmvt39b01881P6CN.jpg",
    overview:
      "Mere seconds before the Earth is to be demolished by an alien construction crew, Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of 'The Hitchhiker's Guide to the Galaxy.'",
    release_date: 1114650000,
    genres: ["Adventure", "Comedy", "Family", "Science Fiction"],
  },
  {
    id: "11546",
    title: "Police Academy: Mission to Moscow",
    poster: "https://image.tmdb.org/t/p/w500/3517XQ9LpoEykyYq2TuDNS45MPP.jpg",
    overview:
      "The Russians need help in dealing with the Mafia and so they seek help with the veterans of the Police Academy. They head off to Moscow, in order to find evidence against Konstantin Konali, who marketed a computer game that everyone in the world is playing.",
    release_date: 771123600,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "9837",
    title: "The Prince of Egypt",
    poster: "https://image.tmdb.org/t/p/w500/2xUjYwL6Ol7TLJPPKs7sYW5PWLX.jpg",
    overview:
      "This is the extraordinary tale of two brothers named Moses and Ramses, one born of royal blood, and one an orphan with a secret past. Growing up the best of friends, they share a strong bond of free-spirited youth and good-natured rivalry. But the truth will ultimately set them at odds, as one becomes the ruler of the most powerful empire on earth, and the other the chosen leader of his people! Their final confrontation will forever change their lives and the world.",
    release_date: 913680000,
    genres: ["Adventure", "Animation", "Drama", "Family", "Music", "Comedy"],
  },
  {
    id: "928",
    title: "Gremlins 2: The New Batch",
    poster: "https://image.tmdb.org/t/p/w500/jN7yvxnIHRozhq2mzWZDE5GPRc0.jpg",
    overview:
      "Young sweethearts Billy and Kate move to the Big Apple, land jobs in a high-tech office park and soon reunite with the friendly and lovable Gizmo. But a series of accidents creates a whole new generation of Gremlins. The situation worsens when the devilish green creatures invade a top-secret laboratory and develop genetically altered powers, making them even harder to destroy!",
    release_date: 645411600,
    genres: ["Comedy", "Horror", "Fantasy"],
  },
  {
    id: "364689",
    title: "Ferdinand",
    poster: "https://image.tmdb.org/t/p/w500/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg",
    overview:
      "Ferdinand, a little bull, prefers sitting quietly under a cork tree just smelling the flowers versus jumping around, snorting, and butting heads with other bulls. As Ferdinand grows big and strong, his temperament remains mellow, but one day five men come to choose the 'biggest, fastest, roughest bull' for the bullfights in Madrid and Ferdinand is mistakenly chosen.  Based on the classic 1936 children's book by Munro Leaf.",
    release_date: 1512777600,
    genres: ["Animation", "Family", "Adventure", "Comedy"],
  },
  {
    id: "589880",
    title: "RoboWoman",
    poster: "https://image.tmdb.org/t/p/w500/zwW0iELS0BusGoEUf8kGMXKufOJ.jpg",
    overview:
      "On her last day at a temp agency, Vivica Stevens is attacked, beaten and left for dead by a co-worker and his friends. Through the use of futuristic “cybernetic” upgrades, she tracks down her assailants to execute bloody revenge.",
    release_date: 1554944400,
    genres: ["Science Fiction"],
  },
  {
    id: "22794",
    title: "Cloudy with a Chance of Meatballs",
    poster: "https://image.tmdb.org/t/p/w500/qhOhIKf7QEyQ5dMrRUqs5eTX1Oq.jpg",
    overview:
      "Inventor Flint Lockwood creates a machine that makes clouds rain food, enabling the down-and-out citizens of Chewandswallow to feed themselves. But when the falling food reaches gargantuan proportions, Flint must scramble to avert disaster. Can he regain control of the machine and put an end to the wild weather before the town is destroyed?",
    release_date: 1253149200,
    genres: ["Animation", "Family"],
  },
  {
    id: "276907",
    title: "Legend",
    poster: "https://image.tmdb.org/t/p/w500/4shf5Alq4KWCKqrAAQe0JGJHYp5.jpg",
    overview:
      "Suave, charming and volatile, Reggie Kray and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders while running nightclubs and protection rackets. With police Detective Leonard 'Nipper' Read hot on their heels, the brothers continue their rapid rise to power and achieve tabloid notoriety.",
    release_date: 1441760400,
    genres: ["Action", "Drama", "Romance"],
  },
  {
    id: "2069",
    title: "The Whole Nine Yards",
    poster: "https://image.tmdb.org/t/p/w500/r4FvRHW1J9FAOnCYchZ7QanQ04e.jpg",
    overview:
      "After a mobster agrees to cooperate with an FBI investigation in order to stay out of prison, he's relocated by the authorities to a life of suburban anonymity as part of a witness protection program. It's not long before a couple of his new neighbours figure out his true identity and come knocking to see if he'd be up for one more hit—suburban style.",
    release_date: 950832000,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "298",
    title: "Ocean's Thirteen",
    poster: "https://image.tmdb.org/t/p/w500/5Hjp3pOvvO4DBAId3dxUsuIpfEm.jpg",
    overview:
      "Danny Ocean's team of criminals are back and composing a plan more personal than ever. When ruthless casino owner Willy Bank doublecrosses Reuben Tishkoff, causing a heart attack, Danny Ocean vows that he and his team will do anything to bring down Willy Bank along with everything he's got. Even if it means asking for help from an enemy.",
    release_date: 1181091600,
    genres: ["Crime", "Thriller"],
  },
  {
    id: "395991",
    title: "Only the Brave",
    poster: "https://image.tmdb.org/t/p/w500/rwJVB0muOMhkI5pTt9wwr4XCMBY.jpg",
    overview:
      "Members of the Granite Mountain Hotshots battle deadly wildfires to save an Arizona town.",
    release_date: 1506042000,
    genres: [],
  },
  {
    id: "5550",
    title: "RoboCop 3",
    poster: "https://image.tmdb.org/t/p/w500/qiado0k3alMfeRpOld27Iefumub.jpg",
    overview:
      "The mega corporation Omni Consumer Products is still bent on creating their pet project, Delta City, to replace the rotting city of Detroit. Unfortunately, the inhabitants of the area have no intention of abandoning their homes simply for desires of the company. To this end, OCP have decided to force them to leave by employing a ruthless mercenary army to attack and harass them. An underground resistance begins and in this fight, Robocop must decide where his loyalties lie.",
    release_date: 735008400,
    genres: ["Action", "Adventure", "Crime", "Science Fiction", "Thriller"],
  },
  {
    id: "447404",
    title: "Pokémon: Detective Pikachu",
    poster: "https://image.tmdb.org/t/p/w500/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
    overview:
      "In a world where people collect pocket-size monsters (pokemon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
    release_date: 1557277200,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: "227348",
    title: "Paranormal Activity: The Marked Ones",
    poster: "https://image.tmdb.org/t/p/w500/fJJaRTLbCL3MVtE7j4IpiUWwpMA.jpg",
    overview:
      "Seventeen-year-old Jesse has been hearing terrifying sounds coming from his neighbor’s apartment, but when he turns on his camera and sets out to uncover their source, he encounters an ancient evil that won’t rest until it’s claimed his very soul.",
    release_date: 1388534400,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "1538",
    title: "Collateral",
    poster: "https://image.tmdb.org/t/p/w500/iOpi3ut5DhQIbrVVjlnmfy2U7dI.jpg",
    overview:
      "Cab driver Max picks up a man who offers him $600 to drive him around. But the promise of easy money sours when Max realizes his fare is an assassin.",
    release_date: 1091581200,
    genres: ["Comedy"],
  },
  {
    id: "429476",
    title: "Hell Fest",
    poster: "https://image.tmdb.org/t/p/w500/qgLlnlrUtTKXkdrgMBwUfkyAkya.jpg",
    overview:
      "On Halloween night at a horror theme park, a costumed killer begins slaying innocent patrons who believe that it's all part of the festivities.",
    release_date: 1538010000,
    genres: ["Horror"],
  },
  {
    id: "340837",
    title: "A Cure for Wellness",
    poster: "https://image.tmdb.org/t/p/w500/d4fXuJS3zZcAZfz2HYDtnwqtnwn.jpg",
    overview:
      "An ambitious young executive is sent to retrieve his company's CEO from an idyllic but mysterious 'wellness center' at a remote location in the Swiss Alps but soon suspects that the spa's miraculous treatments are not what they seem.",
    release_date: 1487116800,
    genres: ["Horror", "Mystery", "Science Fiction", "Thriller"],
  },
  {
    id: "7345",
    title: "There Will Be Blood",
    poster: "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    overview:
      "Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his adopted son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainviews motives and intentions, starting a slow-burning feud that threatens both their lives.",
    release_date: 1198800000,
    genres: ["Drama"],
  },
  {
    id: "27582",
    title: "The Mechanic",
    poster: "https://image.tmdb.org/t/p/w500/fDAEJr4WLZLJQmckA2JZNICt0u3.jpg",
    overview:
      "Arthur Bishop is a 'mechanic' - an elite assassin with a strict code and unique talent for cleanly eliminating targets. It's a job that requires professional perfection and total detachment, and Bishop is the best in the business. But when he is ordered to take out his mentor and close friend Harry, Bishop is anything but detached.",
    release_date: 1294876800,
    genres: ["Romance", "Comedy"],
  },
  {
    id: "698",
    title: "Moonraker",
    poster: "https://image.tmdb.org/t/p/w500/6LrJdXNmu5uHOVALZxVYd44Lva0.jpg",
    overview:
      "During the transportation of a Space Shuttle a Boeing 747 crashes in the Atlantic Ocean yet when they go to look for the destroyed shuttle it is not there. James Bond investigates the missing mission space shuttle and soon learns that the shuttles owner Hugo Drax wants to kill all of mankind.",
    release_date: 299206800,
    genres: ["Action", "Adventure", "Thriller", "Science Fiction"],
  },
  {
    id: "593060",
    title: "The Spy Who Fell to Earth",
    poster: "https://image.tmdb.org/t/p/w500/nIc9a0vCG00TmCObDazpmYtiDAs.jpg",
    overview:
      "The life and mysterious death of Ashraf Marwan, an Egyptian billionaire and Israeli spy.",
    release_date: 1554080400,
    genres: ["Documentary", "Mystery"],
  },
  {
    id: "37834",
    title: "Knight and Day",
    poster: "https://image.tmdb.org/t/p/w500/a7JmOBMNj5erYTgt4u1mQgvHItu.jpg",
    overview:
      "A fugitive couple goes on a glamorous and sometimes deadly adventure where nothing and no one – even themselves – are what they seem. Amid shifting alliances and unexpected betrayals, they race across the globe, with their survival ultimately hinging on the battle of truth vs. trust.",
    release_date: 1276563600,
    genres: ["Action", "Comedy"],
  },
  {
    id: "157386",
    title: "The Spectacular Now",
    poster: "https://image.tmdb.org/t/p/w500/tYDbDuZ3K4Xwp3cwtmZM6k53bwq.jpg",
    overview:
      "Sutter, a popular party animal unexpectedly meets the introverted Aimee after waking up on a stranger's lawn. As Sutter deals with the problems in his life and Aimee plans for her future beyond school, an unexpected romance blossoms between them.",
    release_date: 1375405200,
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "252",
    title: "Willy Wonka & the Chocolate Factory",
    poster: "https://image.tmdb.org/t/p/w500/vmpsZkrs4Uvkp9r1atL8B3frA63.jpg",
    overview:
      "Eccentric candy man Willy Wonka prompts a worldwide frenzy when he announces that golden tickets hidden inside five of his delicious candy bars will admit their lucky holders into his top-secret confectionary. But does Wonka have an agenda hidden amid a world of Oompa Loompas and chocolate rivers?",
    release_date: 47001600,
    genres: ["Family", "Fantasy", "Comedy"],
  },
  {
    id: "419831",
    title: "I Kill Giants",
    poster: "https://image.tmdb.org/t/p/w500/cvit6HDbXHE6W5kGPd47jd0wthQ.jpg",
    overview:
      "Sophia, a new high school student, tries to make friends with Barbara, who tells her that “she kills giants,” protecting this way her hometown and its inhabitants, who do not understand her strange behavior.",
    release_date: 1516492800,
    genres: ["Drama", "Fantasy"],
  },
  {
    id: "188161",
    title: "A Million Ways to Die in the West",
    poster: "https://image.tmdb.org/t/p/w500/n9SicwnoNGWBwE75le27sUhCLMm.jpg",
    overview:
      "As a cowardly farmer begins to fall for the mysterious new woman in town, he must put his new-found courage to the test when her husband, a notorious gun-slinger, announces his arrival.",
    release_date: 1400720400,
    genres: ["Comedy", "Western"],
  },
  {
    id: "4523",
    title: "Enchanted",
    poster: "https://image.tmdb.org/t/p/w500/8KCNzCArLlvLdQoHx6npua2VSVc.jpg",
    overview:
      "The beautiful princess Giselle is banished by an evil queen from her magical, musical animated land and finds herself in the gritty reality of the streets of modern-day Manhattan. Shocked by this strange new environment that doesn't operate on a 'happily ever after' basis, Giselle is now adrift in a chaotic world badly in need of enchantment. But when Giselle begins to fall in love with a charmingly flawed divorce lawyer who has come to her aid - even though she is already promised to a perfect fairy tale prince back home - she has to wonder: Can a storybook view of romance survive in the real world?",
    release_date: 1195516800,
    genres: ["Comedy"],
  },
  {
    id: "426613",
    title: "The Miseducation of Cameron Post",
    poster: "https://image.tmdb.org/t/p/w500/xFLJDW3na8AADFzQJT6bM1VU5zs.jpg",
    overview:
      "In 1993, teenager Cameron is sent to a gay conversion therapy center after getting caught with another girl in the back seat of a car on prom night. Run by the strict and severe Dr. Lydia Marsh and her brother, Reverend Rick, the center is built upon repenting for 'same sex attraction.' In the face of intolerance and denial, Cameron meets a group of fellow sinners including the amputee stoner Jane, and her friend, the Lakota Two-Spirit, Adam. Together, this group of teenagers form an unlikely family as they fight to survive.",
    release_date: 1531875600,
    genres: ["Drama"],
  },
  {
    id: "10198",
    title: "The Princess and the Frog",
    poster: "https://image.tmdb.org/t/p/w500/yprv5PbnEksoVj2v6XEnDBg9joR.jpg",
    overview:
      "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
    release_date: 1260230400,
    genres: ["Romance", "Family", "Animation"],
  },
  {
    id: "8839",
    title: "Casper",
    poster: "https://image.tmdb.org/t/p/w500/2ah8fNJFZVU3vcXhU5xfAYi2eym.jpg",
    overview:
      "Furious that her late father only willed her his gloomy-looking mansion rather than his millions, Carrigan Crittenden is ready to burn the place to the ground when she discovers a map to a treasure hidden in the house. But when she enters the rickety mansion to seek her claim, she is frightened away by a wicked wave of ghosts. Determined to get her hands on this hidden fortune, she hires afterlife therapist Dr. James Harvey to exorcise the ghosts from the mansion. Harvey and his daughter Kat move in, and soon Kat meets Casper, the ghost of a young boy who's 'the friendliest ghost you know.' But not so friendly are Casper's uncles--Stretch, Fatso and Stinkie--who are determined to drive all 'fleshies' away.",
    release_date: 801450000,
    genres: [],
  },
  {
    id: "1427",
    title: "Perfume: The Story of a Murderer",
    poster: "https://image.tmdb.org/t/p/w500/2wrFrUej8ri5EpjgIkjKTAnr686.jpg",
    overview:
      "Jean-Baptiste Grenouille, born in the stench of 18th century Paris, develops a superior olfactory sense, which he uses to create the world's finest perfumes. However, his work takes a dark turn as he tries to preserve scents in the search for the ultimate perfume.",
    release_date: 1158109200,
    genres: ["Crime", "Fantasy", "Drama"],
  },
  {
    id: "521",
    title: "Dial M for Murder",
    poster: "https://image.tmdb.org/t/p/w500/4qPIsFXLVH9feiRBpCf2XRZqK4k.jpg",
    overview:
      "An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.",
    release_date: -492134400,
    genres: ["Thriller"],
  },
  {
    id: "91586",
    title: "Insidious: Chapter 2",
    poster: "https://image.tmdb.org/t/p/w500/chnxUtTmTRZh5FE7Ha4aUOZ9ahs.jpg",
    overview:
      "The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world.",
    release_date: 1378947600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "535167",
    title: "The Wandering Earth",
    poster: "https://image.tmdb.org/t/p/w500/woo56L6LYYoM89DYBCU2C6LO1at.jpg",
    overview:
      "The sun is dying out, a group of brave astronauts set out to find a new home for the entire human race and the planet.",
    release_date: 1549324800,
    genres: ["Science Fiction", "Action", "Drama"],
  },
  {
    id: "7552",
    title: "Fun with Dick and Jane",
    poster: "https://image.tmdb.org/t/p/w500/1NBVGBi8Z6MhJBAJ5SuRMqP7o3T.jpg",
    overview:
      "After Dick Harper loses his job at Globodyne in an Enron-esque collapse, he and his wife, Jane, turn to crime in order to handle the massive debt they now face. Two intelligent people, Dick and Jane actually get pretty good at robbing people and even enjoy it -- but they have second thoughts when they're reminded that crime can hurt innocent people. When the couple hears that Globodyne boss Jack McCallister actually swindled the company, they plot revenge.",
    release_date: 1135123200,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "431530",
    title: "A Bad Moms Christmas",
    poster: "https://image.tmdb.org/t/p/w500/gPNHolu7AGnrB7r5kvJRRTfwMFR.jpg",
    overview:
      "Amy, Kiki and Carla – three under-appreciated and over-burdened women – rebel against the challenges and expectations of the Super Bowl for mothers: Christmas. And if creating a more perfect holiday for their families wasn’t hard enough, they have to do all of that while hosting and entertaining their own mothers.",
    release_date: 1509494400,
    genres: ["Comedy"],
  },
  {
    id: "246741",
    title: "What We Do in the Shadows",
    poster: "https://image.tmdb.org/t/p/w500/pDKJFVofjfQj0cUa7z4NAXZavW.jpg",
    overview:
      "Vampire housemates try to cope with the complexities of modern life and show a newly turned hipster some of the perks of being undead.",
    release_date: 1403139600,
    genres: ["Comedy", "Horror"],
  },
  {
    id: "12118",
    title: "Police Academy 3: Back in Training",
    poster: "https://image.tmdb.org/t/p/w500/pBxGgWSR0CMaCVMA2kQS5MWU1z3.jpg",
    overview:
      "When police funding is cut, the Governor announces he must close one of the academies. To make it fair, the two police academies must compete against each other to stay in operation. Mauser persuades two officers in Lassard's academy to better his odds, but things don't quite turn out as expected...",
    release_date: 511660800,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "209189",
    title: "Life of Crime",
    poster: "https://image.tmdb.org/t/p/w500/apO5xGmcEHpdIBc3Zreax7MXl2m.jpg",
    overview:
      "Two common criminals get more than they bargained for after kidnapping the wife of a corrupt real-estate developer who shows no interest in paying the $1 million dollar ransom for her safe return.",
    release_date: 1379120400,
    genres: ["Documentary"],
  },
  {
    id: "514124",
    title: "How About Adolf?",
    poster: "https://image.tmdb.org/t/p/w500/uJ8MvRQdlCIvqKiRBwW9Zxxa9N7.jpg",
    overview:
      "The family dinner at Stephan and Elisabeth could have been wonderful. But when Thomas announces that he and his pregnant girlfriend Anna are going to call their son Adolf, the hosts and the family friend René are stuck in the throat.",
    release_date: 1539824400,
    genres: ["Comedy"],
  },
  {
    id: "2268",
    title: "The Golden Compass",
    poster: "https://image.tmdb.org/t/p/w500/lyaS7S4emzEaYUcSnCvyqfJpOcA.jpg",
    overview:
      "After overhearing a shocking secret, precocious orphan Lyra Belacqua trades her carefree existence roaming the halls of Jordan College for an otherworldly adventure in the far North, unaware that it's part of her destiny.",
    release_date: 1196726400,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "18269",
    title: "Lady and the Tramp II: Scamp's Adventure",
    poster: "https://image.tmdb.org/t/p/w500/nS3nhUZUSY8dWEsRmKILfiOC3F0.jpg",
    overview:
      "Lady and Tramp's mischievous pup, Scamp, gets fed up with rules and restrictions imposed on him by life in a family, and longs for a wild and free lifestyle. He runs away from home and into the streets where he joins a pack of stray dogs known as the 'Junkyard Dogs.' Buster, the pack's leader, takes an instant disliking to the 'house-dog' and considers him a rival. Angel, a junkyard pup Scamp's age, longs for the safety and comfort of life in a family and the two become instant companions. Will Scamp choose the wild and free life of a stray or the unconditional love of his family?",
    release_date: 982454400,
    genres: ["Romance", "Animation", "Family"],
  },
  {
    id: "9870",
    title: "Forgetting Sarah Marshall",
    poster: "https://image.tmdb.org/t/p/w500/j2KXt3gObsAaRj9RKpCp8tiosTk.jpg",
    overview:
      "When Sarah Marshall dumps aspiring musician Peter Bretter for rock star Aldous Snow, Peter's world comes crashing down. His best friend suggests that Peter should get away from everything and to fly off to Hawaii to escape all his problems. After arriving in Hawaii and meeting the beautiful Rachel Jansen, Peter is shocked to see not only Aldous Snow in Hawaii, but also Sarah Marshall.",
    release_date: 1208394000,
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    id: "126963",
    title: "Dragon Ball Z: Battle of Gods",
    poster: "https://image.tmdb.org/t/p/w500/nxZEdYcHMuD8SSuwusDnK9CD2H1.jpg",
    overview:
      "The events of Battle of Gods take place some years after the battle with Majin Buu, which determined the fate of the entire universe. After awakening from a long slumber, Beerus, the God of Destruction is visited by Whis, his attendant and learns that the galactic overlord Frieza has been defeated by a Super Saiyan from the North Quadrant of the universe named Goku, who is also a former student of the North Kai. Ecstatic over the new challenge, Goku ignores King Kai's advice and battles Beerus, but he is easily overwhelmed and defeated. Beerus leaves, but his eerie remark of 'Is there nobody on Earth more worthy to destroy?' lingers on. Now it is up to the heroes to stop the God of Destruction before all is lost.",
    release_date: 1364601600,
    genres: ["Animation", "Action"],
  },
  {
    id: "9804",
    title: "Waterworld",
    poster: "https://image.tmdb.org/t/p/w500/f4Q6BKm1lv9u5xoffbIIwrOYf6z.jpg",
    overview:
      "In a futuristic world where the polar ice caps have melted and made Earth a liquid planet, a beautiful barmaid rescues a mutant seafarer from a floating island prison. They escape, along with her young charge, Enola, and sail off aboard his ship. But the trio soon becomes the target of a menacing pirate who covets the map to 'Dryland' – which is tattooed on Enola's back.",
    release_date: 806893200,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "9471",
    title: "Charlie's Angels: Full Throttle",
    poster: "https://image.tmdb.org/t/p/w500/n4cdJ0Wqxb7C0HmZbcaC4eYnkIf.jpg",
    overview:
      "The Angels are charged with finding a pair of missing rings that are encoded with the personal information of members of the Witness Protection Program. As informants are killed, the ladies target a rogue agent who might be responsible.",
    release_date: 1056675600,
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: "376867",
    title: "Moonlight",
    poster: "https://image.tmdb.org/t/p/w500/93NN95a71MsQ4tR2zSLv8BNK2qh.jpg",
    overview:
      "The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.",
    release_date: 1477011600,
    genres: [],
  },
  {
    id: "85446",
    title: "Step Up Revolution",
    poster: "https://image.tmdb.org/t/p/w500/ab9T58BlOPauWd9tMnK0HhwYY7u.jpg",
    overview:
      "Emily arrives in Miami with aspirations to become a professional dancer. She sparks with Sean, the leader of a dance crew whose neighborhood is threatened by Emily's father's development plans.",
    release_date: 1343264400,
    genres: ["Music"],
  },
  {
    id: "11549",
    title: "Invasion of the Body Snatchers",
    poster: "https://image.tmdb.org/t/p/w500/8BrMQmgwGzIHSyBjCDOLOdi79fJ.jpg",
    overview:
      "A small-town doctor learns that the population of his community is being replaced by emotionless alien duplicates.",
    release_date: -438825600,
    genres: [],
  },
  {
    id: "7191",
    title: "Cloverfield",
    poster: "https://image.tmdb.org/t/p/w500/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg",
    overview:
      "Five young New Yorkers throw their friend a going-away party the night that a monster the size of a skyscraper descends upon the city. Told from the point of view of their video camera, the film is a document of their attempt to survive the most surreal, horrifying event of their lives.",
    release_date: 1200355200,
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    id: "16290",
    title: "Jackass 3D",
    poster: "https://image.tmdb.org/t/p/w500/54Juiwh59XhBrSsBH8B6M03a6rL.jpg",
    overview:
      "Jackass 3D is a 3-D film and the third movie of the Jackass series. It follows the same premise as the first two movies, as well as the TV series. It is a compilation of various pranks, stunts and skits. Before the movie begins, a brief introduction is made by Beavis and Butt-head explaining the 3D technology behind the movie. The intro features the cast lining up and then being attacked by various objects in slow-motion. The movie marks the 10th anniversary of the franchise, started in 2000.",
    release_date: 1287104400,
    genres: ["Comedy", "Documentary", "Action"],
  },
  {
    id: "65057",
    title: "The Descendants",
    poster: "https://image.tmdb.org/t/p/w500/mCpYsKQNOtaBYJWCRYYuFmLsB6X.jpg",
    overview:
      "With his wife Elizabeth on life support after a boating accident, Hawaiian land baron, Matt King takes his daughters on a trip from Oahu to Kauai to confront the young real estate broker, who was having an affair with Elizabeth before her misfortune.",
    release_date: 1315530000,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "10530",
    title: "Pocahontas",
    poster: "https://image.tmdb.org/t/p/w500/kZ1ft0QZ4e3zDUPMBftEkwI9ftd.jpg",
    overview:
      "Pocahontas, daughter of a Native American tribe chief, falls in love with an English soldier as colonists invade 17th century Virginia.",
    release_date: 803091600,
    genres: [],
  },
  {
    id: "180",
    title: "Minority Report",
    poster: "https://image.tmdb.org/t/p/w500/qtgFcnwh9dAFLocsDk2ySDVS8UF.jpg",
    overview:
      "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge.",
    release_date: 1024534800,
    genres: ["Action", "Thriller", "Science Fiction", "Mystery"],
  },
  {
    id: "1250",
    title: "Ghost Rider",
    poster: "https://image.tmdb.org/t/p/w500/1pyU94dAY7npDQCKuxCSyX9KthN.jpg",
    overview:
      "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson, the love of his life. Years later, Johnny's path crosses again with Roxanne, now a go-getting reporter, and also with Mephistopheles, who offers to release Johnny's soul if Johnny becomes the fabled, fiery 'Ghost Rider'.",
    release_date: 1171584000,
    genres: ["Documentary"],
  },
  {
    id: "3580",
    title: "Changeling",
    poster: "https://image.tmdb.org/t/p/w500/dsCAryPlgLlpZu80hhLTwQHRIpU.jpg",
    overview:
      "Christine Collins is overjoyed when her kidnapped son is brought back home. But when Christine suspects that the boy returned to her isn't her child, the police captain has her committed to an asylum.",
    release_date: 1201651200,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "2135",
    title: "The Time Machine",
    poster: "https://image.tmdb.org/t/p/w500/9QB6wIc6XOtoi02uUCLSvY0onSL.jpg",
    overview:
      "Hoping to alter the events of the past, a 19th century inventor instead travels 800,000 years into the future, where he finds mankind divided into two warring races.",
    release_date: 1015200000,
    genres: ["Documentary", "Science Fiction"],
  },
  {
    id: "10867",
    title: "Malena",
    poster: "https://image.tmdb.org/t/p/w500/p1DmuHTnvhsWFvWX0xnMWrLBVZ5.jpg",
    overview:
      "On the day in 1940 that Italy enters the war, two things happen to the 12-year-old Renato: he gets his first bike, and he gets his first look at Malèna. She is a beautiful, silent outsider who's moved to this Sicilian town to be with her husband, Nico. He promptly goes off to war, leaving her to the lustful eyes of the men and the sharp tongues of the women. During the next few years, as Renato grows toward manhood, he watches Malèna suffer and prove her mettle. He sees her loneliness, then grief when Nico is reported dead, the effects of slander on her relationship with her father, her poverty and search for work, and final humiliations. Will Renato learn courage from Malèna and stand up for her?",
    release_date: 972608400,
    genres: ["Drama"],
  },
  {
    id: "433",
    title: "Mary Poppins",
    poster: "https://image.tmdb.org/t/p/w500/ei8hhYCMfURfPOXKBnyl61be2iV.jpg",
    overview:
      "A magical nanny employs music and adventure to help two neglected children become closer to their father.",
    release_date: -168739200,
    genres: ["Documentary"],
  },
  {
    id: "80321",
    title: "Madagascar 3: Europe's Most Wanted",
    poster: "https://image.tmdb.org/t/p/w500/ekraj4ksvIKeuvQVEevEJkuybZd.jpg",
    overview:
      "Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo. They are forced to take a detour to Europe to find the penguins and chimps who broke the bank at a Monte Carlo casino. When French animal-control officer Capitaine Chantel DuBois picks up their scent, Alex and company are forced to hide out in a traveling circus.",
    release_date: 1338944400,
    genres: ["Animation", "Family", "Comedy"],
  },
  {
    id: "13207",
    title: "Friday the 13th",
    poster: "https://image.tmdb.org/t/p/w500/fLTQgFpOJA4iyuazewxPof13xSY.jpg",
    overview:
      "Ignoring the warnings of the locals, a group of teenage camp counselors takes on the job of reopening Camp Crystal Lake — on Friday the 13th no less, and raise the ire of Jason Voorhees, a masked, homicidal maniac.",
    release_date: 1234310400,
    genres: [],
  },
  {
    id: "15092",
    title: "Crank: High Voltage",
    poster: "https://image.tmdb.org/t/p/w500/tzTC4EEvF0OPL63frEiogxL2T8M.jpg",
    overview:
      "Chelios faces a Chinese mobster who has stolen his nearly indestructible heart and replaced it with a battery-powered ticker that requires regular jolts of electricity to keep working.",
    release_date: 1239843600,
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    id: "576026",
    title: "Boggart",
    poster: "https://image.tmdb.org/t/p/w500/amn6ZxnazHGZAONxVVfra08L40M.jpg",
    overview:
      "In the ordinary and bustling city of Moscow there is an unusual House, overgrown with hundreds of secrets and mysteries. In this house there is a strange apartment, in which not a single tenant has stayed for a long time. And only when an independent mother with a charming 8-year-old daughter Alina comes to this “nice” apartment, new tenants will find out that their living space is not easy, and the real Boggart lives in it. Only here the keeper of the hearth has long been offended by the entire human race and will do all imaginable nastiness, just to be left alone in the ill-fated apartment. But everything changes when the evil witch challenges Homeovy ...",
    release_date: 1554944400,
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "82633",
    title: "Lawless",
    poster: "https://image.tmdb.org/t/p/w500/kmjy8rX4lY2x1UCJIH24VvUtDXJ.jpg",
    overview:
      "Set in the Depression-era Franklin County, Virginia, a bootlegging gang is threatened by authorities who want a cut of their profits.",
    release_date: 1346202000,
    genres: ["Thriller", "TV Movie", "Crime", "Drama"],
  },
  {
    id: "10590",
    title: "We Were Soldiers",
    poster: "https://image.tmdb.org/t/p/w500/d5uupBAORxnFNbkNQ2G0Bi2cpY8.jpg",
    overview:
      "The story of the first major battle of the American phase of the Vietnam War and the soldiers on both sides that fought it.",
    release_date: 1014940800,
    genres: ["Documentary"],
  },
  {
    id: "466411",
    title: "Speed Kills",
    poster: "https://image.tmdb.org/t/p/w500/f4p18CwxidvznZYMA6m4qv5FCvp.jpg",
    overview:
      "Speedboat racing champion and multimillionaire, Ben Aronoff (Don Aronow), leads a double life that lands him in trouble with the law and drug lords.",
    release_date: 1542326400,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "44865",
    title: "The Grandmaster",
    poster: "https://image.tmdb.org/t/p/w500/gw38Ye5Zsah2kiJ6ecsfBEWx3lL.jpg",
    overview:
      "Ip Man's peaceful life in Foshan changes after Gong Yutian seeks an heir for his family in Southern China. Ip Man then meets Gong Er who challenges him for the sake of regaining her family's honor. After the Second Sino-Japanese War, Ip Man moves to Hong Kong and struggles to provide for his family. In the mean time, Gong Er chooses the path of vengeance after her father was killed by Ma San.",
    release_date: 1357776000,
    genres: ["Action", "Drama", "History"],
  },
  {
    id: "11688",
    title: "The Emperor's New Groove",
    poster: "https://image.tmdb.org/t/p/w500/wwbgkXQBEKtnyIJapk6gUgWkVw8.jpg",
    overview:
      "Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home will be destroyed to make room for Kuzco's new summer home. Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally turns him into a llama, who accidentally ends up in Pacha's village. Pacha offers to help Kuzco if he doesn't destroy his house, and so they form an unlikely partnership.",
    release_date: 976320000,
    genres: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "239877",
    title: "The Mafia Kills Only in Summer",
    poster: "https://image.tmdb.org/t/p/w500/AtjMj0P9k17HROr2hp9DWgt4XnF.jpg",
    overview:
      "While Arturo tries to gain the love of Flora, he witnesses the history of Sicily from 1969 to 1992, miraculously dodging the crimes of the Mafia and supporting as a journalist the heroic struggle of the judges and policemen who fought this infamous organization.",
    release_date: 1385596800,
    genres: ["Romance", "Comedy", "Crime", "Drama"],
  },
  {
    id: "9323",
    title: "Ghost in the Shell",
    poster: "https://image.tmdb.org/t/p/w500/9gC88zYUBARRSThcG93MvW14sqx.jpg",
    overview:
      "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as 'The Puppetmaster' begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
    release_date: 816652800,
    genres: ["Animation", "Action", "Science Fiction"],
  },
  {
    id: "264644",
    title: "Room",
    poster: "https://image.tmdb.org/t/p/w500/pCURNjeomWbMSdiP64gj8NVVHTQ.jpg",
    overview:
      "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
    release_date: 1444957200,
    genres: ["Drama", "Documentary"],
  },
  {
    id: "64686",
    title: "47 Ronin",
    poster: "https://image.tmdb.org/t/p/w500/xDHnmcroujCRG0ysYQaiswjbyHd.jpg",
    overview:
      "Kai—an outcast—joins Oishi, the leader of 47 outcast samurai.  Together they seek vengeance upon the treacherous overlord who killed their master and banished their kind.  To restore honour to their homeland, the warriors embark upon a quest that challenges them with a series of trials that would destroy ordinary warriors.",
    release_date: 1386288000,
    genres: ["Action", "Drama"],
  },
  {
    id: "283366",
    title: "Miss Peregrine's Home for Peculiar Children",
    poster: "https://image.tmdb.org/t/p/w500/6lSkpu2SDj71KTBy2DllM6CaFYA.jpg",
    overview:
      "A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
    release_date: 1475024400,
    genres: ["Drama", "Fantasy", "Adventure", "Family"],
  },
  {
    id: "52451",
    title: "The Three Musketeers",
    poster: "https://image.tmdb.org/t/p/w500/w2LbQ8FvZiQpWvZyHljaOeiNknK.jpg",
    overview:
      "The hot-headed young D'Artagnan along with three former legendary but now down on their luck Musketeers must unite and defeat a beautiful double agent and her villainous employer from seizing the French throne and engulfing Europe in war.",
    release_date: 1314752400,
    genres: ["Action", "Animation", "Family"],
  },
  {
    id: "406990",
    title: "What Happened to Monday",
    poster: "https://image.tmdb.org/t/p/w500/o6EsOqITcSzcdwD1zxBM9imdxjr.jpg",
    overview:
      "In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their own.",
    release_date: 1503018000,
    genres: ["Science Fiction", "Thriller", "Drama"],
  },
  {
    id: "11423",
    title: "Memories of Murder",
    poster: "https://image.tmdb.org/t/p/w500/dVZJByLhVpbKp4YKAChM12MxSNn.jpg",
    overview:
      "1986 Gyunggi Province. The body of a young woman is found brutally raped and murdered. Two months later, a series of rapes and murders commences under similar circumstances. And in a country that had never known such crimes, the dark whispers about a serial murderer grow louder. A special task force is set up in the area, with two local detectives Park Doo-Man and Jo Young-Goo joined by a detective from Seoul who requested to be assigned to the case.",
    release_date: 1051146000,
    genres: ["Action", "Crime", "Thriller", "TV Movie"],
  },
  {
    id: "152",
    title: "Star Trek: The Motion Picture",
    poster: "https://image.tmdb.org/t/p/w500/ffo56udrkF28ICTv3Xx1S9X6Dw4.jpg",
    overview:
      "When a destructive space entity is spotted approaching Earth, Admiral Kirk resumes command of the Starship Enterprise in order to intercept, examine, and hopefully stop it.",
    release_date: 313286400,
    genres: ["Science Fiction", "Adventure", "Mystery"],
  },
  {
    id: "816",
    title: "Austin Powers: International Man of Mystery",
    poster: "https://image.tmdb.org/t/p/w500/5uD4dxNX8JKFjWKYMHyOsqhi5pN.jpg",
    overview:
      "As a swingin' fashion photographer by day and a groovy British superagent by night, Austin Powers is the '60s' most shagadelic spy, baby! But can he stop megalomaniac Dr. Evil after the bald villain freezes himself and unthaws in the '90s? With the help of sexy sidekick Vanessa Kensington, he just might.",
    release_date: 862534800,
    genres: ["Science Fiction", "Comedy", "Crime"],
  },
  {
    id: "2059",
    title: "National Treasure",
    poster: "https://image.tmdb.org/t/p/w500/20MSnfTICmwvAs2YJTqcSTjwBDc.jpg",
    overview:
      "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do.",
    release_date: 1100822400,
    genres: [],
  },
  {
    id: "10131",
    title: "A Nightmare on Elm Street 4: The Dream Master",
    poster: "https://image.tmdb.org/t/p/w500/boStYG7jKdoIZTduiOOsUVknD13.jpg",
    overview:
      "Dream demon Freddy Krueger is resurrected from his apparent demise, and rapidly tracks down and kills the remainder of the Elm Street kids. However, Kristen, who can draw others into her dreams, wills her special ability to her friend Alice. Alice soon realizes that Freddy is taking advantage of that unknown power to pull a new group of children into his foul domain.",
    release_date: 587955600,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "10258",
    title: "The Madagascar Penguins in a Christmas Caper",
    poster: "https://image.tmdb.org/t/p/w500/gOVdfrRfzQjYwezOxIap13j05d8.jpg",
    overview:
      "During the holiday season, when the animals of the Central Park Zoo are preparing for Christmas, Private, the youngest of the penguins notices that the Polar Bear is all alone. Assured that nobody should have to spend Christmas alone, Private goes into the city for some last-minute Christmas shopping. Along the way, he gets stuffed into a stocking",
    release_date: 1127437200,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    id: "20662",
    title: "Robin Hood",
    poster: "https://image.tmdb.org/t/p/w500/9NS5QGOfck24yL3bZqWeW06PgPC.jpg",
    overview:
      "When soldier Robin happens upon the dying Robert of Loxley, he promises to return the man's sword to his family in Nottingham. There, he assumes Robert's identity; romances his widow, Marion; and draws the ire of the town's sheriff and King John's henchman, Godfrey.",
    release_date: 1273626000,
    genres: ["Family", "Animation"],
  },
  {
    id: "8065",
    title: "21",
    poster: "https://image.tmdb.org/t/p/w500/efG8Po57alqSlhqHU1lXJ3duG6t.jpg",
    overview:
      "Ben Campbell is a young, highly intelligent, student at M.I.T. in Boston who strives to succeed. Wanting a scholarship to transfer to Harvard School of Medicine with the desire to become a doctor, Ben learns that he cannot afford the $300,000 for the four to five years of schooling as he comes from a poor, working-class background. But one evening, Ben is introduced by his unorthodox math professor Micky Rosa into a small but secretive club of five. Students Jill, Choi, Kianna, and Fisher, who are being trained by Professor Rosa of the skill of card counting at blackjack.",
    release_date: 1206576000,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "123025",
    title: "Batman: The Dark Knight Returns, Part 1",
    poster: "https://image.tmdb.org/t/p/w500/kkjTbwV1Xnj8wBL52PjOcXzTbnb.jpg",
    overview:
      "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?",
    release_date: 1346893200,
    genres: ["Action", "Animation", "Mystery"],
  },
  {
    id: "569547",
    title: "Black Mirror: Bandersnatch",
    poster: "https://image.tmdb.org/t/p/w500/fR0VZ0VE598zl1lrYf7IfBqEwQ2.jpg",
    overview:
      "In 1984, a young programmer begins to question reality as he adapts a dark fantasy novel into a video game. A mind-bending tale with multiple endings.",
    release_date: 1545955200,
    genres: ["Science Fiction", "Mystery", "Drama", "Thriller", "TV Movie"],
  },
  {
    id: "563",
    title: "Starship Troopers",
    poster: "https://image.tmdb.org/t/p/w500/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg",
    overview:
      "Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as 'the Bugs'.",
    release_date: 878860800,
    genres: [],
  },
  {
    id: "755",
    title: "From Dusk Till Dawn",
    poster: "https://image.tmdb.org/t/p/w500/xs8xS14Oyhz0GpXQHpAc1hritOW.jpg",
    overview:
      "Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive 'from dusk till dawn' at the rendezvous point, which turns out to be a Hell of a strip joint.",
    release_date: 822009600,
    genres: ["Horror", "Action", "Thriller", "Crime"],
  },
  {
    id: "57201",
    title: "The Lone Ranger",
    poster: "https://image.tmdb.org/t/p/w500/b2je2ZybNIzAOL1K1WPbbT6zt2M.jpg",
    overview:
      "The Texas Rangers chase down a gang of outlaws led by Butch Cavendish, but the gang ambushes the Rangers, seemingly killing them all. One survivor is found, however, by an American Indian named Tonto, who nurses him back to health. The Ranger, donning a mask and riding a white stallion named Silver, teams up with Tonto to bring the unscrupulous gang and others of that ilk to justice.",
    release_date: 1372813200,
    genres: ["Adventure", "Western"],
  },
  {
    id: "49529",
    title: "John Carter",
    poster: "https://image.tmdb.org/t/p/w500/7GSSyUUgUEXm1rhmiPGSRuKoqnK.jpg",
    overview:
      "John Carter is a war-weary, former military captain who's inexplicably transported to the mysterious and exotic planet of Barsoom (Mars) and reluctantly becomes embroiled in an epic conflict. It's a world on the brink of collapse, and Carter rediscovers his humanity when he realizes the survival of Barsoom and its people rests in his hands.",
    release_date: 1331078400,
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    id: "446354",
    title: "The Post",
    poster: "https://image.tmdb.org/t/p/w500/h4XG3g6uMMPIBPjAoQhC2QIMdkl.jpg",
    overview:
      "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.",
    release_date: 1513900800,
    genres: [],
  },
  {
    id: "23437",
    title: "A Nightmare on Elm Street",
    poster: "https://image.tmdb.org/t/p/w500/4W2GvVM89Xu4HTxUbun4AO0yOAJ.jpg",
    overview:
      "The film that brings back horror icon Freddy Krueger as a darker and more sinister character than ever before. While Freddy is on the prowl a group of teenagers being stalked soon learn they all have a common factor making them targets for this twisted killer.",
    release_date: 1272589200,
    genres: ["Horror"],
  },
  {
    id: "127380",
    title: "Finding Dory",
    poster: "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    overview:
      "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
    release_date: 1466038800,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "474395",
    title: "Teen Titans Go! To the Movies",
    poster: "https://image.tmdb.org/t/p/w500/mFHihhE9hlvJEk2f1AqdLRaYHd6.jpg",
    overview:
      "All the major DC superheroes are starring in their own films, all but the Teen Titans, so Robin is determined to remedy this situation by getting over his role as a sidekick and becoming a movie star. Thus, with a few madcap ideas and an inspirational song in their hearts, the Teen Titans head to Hollywood to fulfill their dreams.",
    release_date: 1532653200,
    genres: ["Animation", "Action", "Comedy", "Science Fiction"],
  },
  {
    id: "505192",
    title: "Shoplifters",
    poster: "https://image.tmdb.org/t/p/w500/4nfRUOv3LX5zLn98WS1WqVBk9E9.jpg",
    overview:
      "After one of their shoplifting sessions, Osamu and his son come across a little girl in the freezing cold. At first reluctant to shelter the girl, Osamu’s wife agrees to take care of her after learning of the hardships she faces. Although the family is poor, barely making enough money to survive through petty crime, they seem to live happily together until an unforeseen incident reveals hidden secrets, testing the bonds that unite them.",
    release_date: 1527901200,
    genres: ["Drama", "Crime"],
  },
  {
    id: "243683",
    title: "Step Up All In",
    poster: "https://image.tmdb.org/t/p/w500/bM9U2WDQKeQhdQX4kwdk72Drpaz.jpg",
    overview:
      "All-stars from the previous Step Up installments come together in glittering Las Vegas, battling for a victory that could define their dreams and their careers.",
    release_date: 1405472400,
    genres: ["Romance", "Drama", "Music"],
  },
  {
    id: "79",
    title: "Hero",
    poster: "https://image.tmdb.org/t/p/w500/vxgZto2Cz7ILHAlmRXt50I2brB2.jpg",
    overview:
      "One man defeated three assassins who sought to murder the most powerful warlord in pre-unified China.",
    release_date: 1027299600,
    genres: ["Drama"],
  },
  {
    id: "589863",
    title: "Ai Weiwei: Yours Truly",
    poster: "https://image.tmdb.org/t/p/w500/eGNX7nOXzI8OyzidKKjbHYR8aqg.jpg",
    overview:
      "Ai Weiwei, famous for his large-scale installation work and his dogged social justice advocacy, created a career-defining work in 2015 with @Large, mounted at Alcatraz, the emblematic site associated with egregious incarceration conditions and radical Native American protest. At the core of @Large were portraits of prisoners of conscience coupled with the opportunity to write letters of solidarity to the imprisoned. In her impassioned and powerful film, exhibition curator Cheryl Haines visits several current and former prisoners, including American whistleblower Chelsea Manning, and learns how these letters were vital to their survival.  “The misconception of totalitarianism is that freedom can be imprisoned. This is not the case. When you constrain freedom, freedom will take flight and land on a windowsill.”\\n — Ai Weiwei",
    release_date: 1555203600,
    genres: [],
  },
  {
    id: "686",
    title: "Contact",
    poster: "https://image.tmdb.org/t/p/w500/bCpMIywuNZeWt3i5UMLEIc0VSwM.jpg",
    overview:
      "Contact is a science fiction film about an encounter with alien intelligence. Based on the novel by Carl Sagan the film starred Jodie Foster as the one chosen scientist who must make some difficult decisions between her beliefs, the truth, and reality.",
    release_date: 868582800,
    genres: [],
  },
  {
    id: "433498",
    title: "Papillon",
    poster: "https://image.tmdb.org/t/p/w500/ahF5c6vyP8HWMqIwlhecbRALkjq.jpg",
    overview:
      "Henri “Papillon” Charrière, a safecracker from the Parisian underworld, is wrongfully convicted and sentenced to life imprisonment in the penal colony of French Guiana, where he forges a strong friendship with Louis Dega, a counterfeiter who needs his protection.",
    release_date: 1504746000,
    genres: [],
  },
  {
    id: "37136",
    title: "The Naked Gun: From the Files of Police Squad!",
    poster: "https://image.tmdb.org/t/p/w500/zT0mhZqZQJE1gSY5Eg9qcGP4NYo.jpg",
    overview:
      "When the incompetent Officer Frank Drebin seeks the ruthless killer of his partner, he stumbles upon an attempt to assassinate Queen Elizabeth.",
    release_date: 597024000,
    genres: ["Comedy", "Crime"],
  },
  {
    id: "1494",
    title: "Curse of the Golden Flower",
    poster: "https://image.tmdb.org/t/p/w500/cuX11HZlkNFHCieu8UyWmMeMXkg.jpg",
    overview:
      "During China's Tang dynasty the emperor has taken the princess of a neighboring province as wife. She has borne him two sons and raised his eldest. Now his control over his dominion is complete, including the royal family itself.",
    release_date: 1166659200,
    genres: ["Action", "Drama", "Fantasy"],
  },
  {
    id: "1429",
    title: "25th Hour",
    poster: "https://image.tmdb.org/t/p/w500/8AYVa7X4kMlQkn1sC6nVyKnzikV.jpg",
    overview:
      "In New York City in the days following the events of 9/11, Monty Brogan is a convicted drug dealer about to start a seven-year prison sentence, and his final hours of freedom are devoted to hanging out with his closest buddies and trying to prepare his girlfriend for his extended absence.",
    release_date: 1039996800,
    genres: ["Crime", "Drama"],
  },
  {
    id: "79218",
    title: "Ice Age: A Mammoth Christmas",
    poster: "https://image.tmdb.org/t/p/w500/kwLi6MLlVsPWMVB9gOpFo5n7HZR.jpg",
    overview:
      "When Sid accidentally destroys Manny's heirloom Christmas rock and ends up on Santa's naughty list, he leads a hilarious quest to the North Pole to make things right and ends up making things much worse. Now it's up to Manny and his prehistoric posse to band together and save Christmas for the entire world!",
    release_date: 1322092800,
    genres: ["Animation", "Family", "TV Movie"],
  },
  {
    id: "587866",
    title: "Kader Postası",
    poster: "https://image.tmdb.org/t/p/w500/pEXMy2g3hyiJzoINR2TnCgKnfjN.jpg",
    overview: "A film by Elif Akarsu Polat and Cigdem Bozali.",
    release_date: 1555203600,
    genres: [],
  },
  {
    id: "340022",
    title: "Gringo",
    poster: "https://image.tmdb.org/t/p/w500/dxeVPklFwng2IowqRPNI4od6aXv.jpg",
    overview:
      "An American businessman with a stake in a pharmaceutical company that's about to go public finds his life is thrown into turmoil by an incident in Mexico.",
    release_date: 1520467200,
    genres: ["Drama"],
  },
  {
    id: "291870",
    title: "Dirty Grandpa",
    poster: "https://image.tmdb.org/t/p/w500/qSJE2KloazcGrpGCCUVVX8ZKlsW.jpg",
    overview:
      "Jason Kelly is one week away from marrying his boss's uber-controlling daughter, putting him on the fast track for a partnership at the law firm. However, when the straight-laced Jason is tricked into driving his foul-mouthed grandfather, Dick, to Daytona for spring break, his pending nuptials are suddenly in jeopardy. Between riotous frat parties, bar fights, and an epic night of karaoke, Dick is on a quest to live his life to the fullest and bring Jason along for the ride.",
    release_date: 1453334400,
    genres: ["Comedy"],
  },
  {
    id: "45269",
    title: "The King's Speech",
    poster: "https://image.tmdb.org/t/p/w500/uQ538BfYLDJh3GXlzRZLo0j7PFj.jpg",
    overview:
      "The King's Speech tells the story of the man who became King George VI, the father of Queen Elizabeth II. After his brother abdicates, George ('Bertie') reluctantly assumes the throne. Plagued by a dreaded stutter and considered unfit to be king, Bertie engages the help of an unorthodox speech therapist named Lionel Logue. Through a set of unexpected techniques, and as a result of an unlikely friendship, Bertie is able to find his voice and boldly lead the country into war.",
    release_date: 1283734800,
    genres: ["Drama", "History"],
  },
  {
    id: "476292",
    title: "Maquia: When the Promised Flower Blooms",
    poster: "https://image.tmdb.org/t/p/w500/hL3NqRE2ccR4Y2sYSJTrmalRjrz.jpg",
    overview:
      "A story of encounters and partings interwoven between people; this is a human drama with feelings that touch one's heart gradually, which everyone has experienced at least once.",
    release_date: 1519430400,
    genres: ["Animation", "Drama", "Fantasy"],
  },
  {
    id: "10734",
    title: "Escape from Alcatraz",
    poster: "https://image.tmdb.org/t/p/w500/fEXxILY3zm8821sEMSHrD1rjMe.jpg",
    overview:
      "Escape from Alcatraz tells the story of the only three men ever to escape from the infamous maximum security prison at Alcatraz. In 29 years, the seemingly impenetrable federal penitentiary, which housed Al Capone and 'Birdman' Robert Stroud, was only broken once - by three men never heard of again.",
    release_date: 298861200,
    genres: ["Crime", "Drama"],
  },
  {
    id: "13223",
    title: "Gran Torino",
    poster: "https://image.tmdb.org/t/p/w500/w3zz8djZKknVpkpHi0I7kqibzbC.jpg",
    overview:
      "Walt Kowalski is a widower who holds onto his prejudices despite the changes in his Michigan neighborhood and the world around him. Kowalski is a grumpy, tough-minded, unhappy old man who can't get along with either his kids or his neighbors. He is a Korean War veteran whose prize possession is a 1972 Gran Torino he keeps in mint condition. When his neighbor Thao, a young Hmong teenager under pressure from his gang member cousin, tries to steal his Gran Torino, Kowalski sets out to reform the youth. Drawn against his will into the life of Thao's family, Kowalski is soon taking steps to protect them from the gangs that infest their neighborhood.",
    release_date: 1228780800,
    genres: ["Drama"],
  },
  {
    id: "11878",
    title: "Yojimbo",
    poster: "https://image.tmdb.org/t/p/w500/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg",
    overview:
      "A nameless ronin, or samurai with no master, enters a small village in feudal Japan where two rival businessmen are struggling for control of the local gambling trade. Taking the name Sanjuro Kuwabatake, the ronin convinces both silk merchant Tazaemon and sake merchant Tokuemon to hire him as a personal bodyguard, then artfully sets in motion a full-scale gang war between the two ambitious and unscrupulous men.",
    release_date: -274147200,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "8645",
    title: "The Happening",
    poster: "https://image.tmdb.org/t/p/w500/v1Cw6WaCjNqInpAzUwbXB4LGgoX.jpg",
    overview:
      "When a deadly airborne virus threatens to wipe out the northeastern United States, teacher Elliott Moore (Mark Wahlberg) and his wife (Zooey Deschanel) flee from contaminated cities into the countryside in a fight to discover the truth. Is it terrorism, the accidental release of some toxic military bio weapon -- or something even more sinister? John Leguizamo and Betty Buckley co-star in this thriller from writer-director M. Night Shyamalan.",
    release_date: 1213146000,
    genres: ["Comedy"],
  },
  {
    id: "156717",
    title: "Death Race: Inferno",
    poster: "https://image.tmdb.org/t/p/w500/p7NEoMmv6fcMk4Hea3S7eIgssjH.jpg",
    overview:
      "Carl Lucas / Frankenstein has won four of his races and needs to win one more to win his freedom. Before his final race, Lucas and his team, car and all, are transferred to another prison where they will compete in a Death Race in the desert. Also, at the same time, Ceaser runs into a marketer who wants to franchise the Death Race program.",
    release_date: 1357257600,
    genres: ["Action", "Science Fiction", "Thriller"],
  },
  {
    id: "587",
    title: "Big Fish",
    poster: "https://image.tmdb.org/t/p/w500/tjK063yCgaBAluVU72rZ6PKPH2l.jpg",
    overview:
      "Throughout his life Edward Bloom has always been a man of big appetites, enormous passions and tall tales. In his later years, he remains a huge mystery to his son, William. Now, to get to know the real man, Will begins piecing together a true picture of his father from flashbacks of his amazing adventures.",
    release_date: 1072310400,
    genres: ["Animation"],
  },
  {
    id: "4824",
    title: "The Jackal",
    poster: "https://image.tmdb.org/t/p/w500/wkLF73oenC1n1DDKKU7oyLKVcMa.jpg",
    overview:
      "Hired by a powerful member of the Russian mafia to avenge an FBI sting that left his brother dead, a psychopathic hitman known only as The Jackal proves an elusive target for the people charged with the task of bringing him down: a deputy FBI director, a Russian MVK Major,  and a jailed IRA terrorist who can recognize him.",
    release_date: 879465600,
    genres: ["Action", "Thriller", "Adventure", "Crime"],
  },
  {
    id: "460885",
    title: "Mandy",
    poster: "https://image.tmdb.org/t/p/w500/m0yf7J7HsKeK6E81SMRcX8vx6mH.jpg",
    overview:
      "The Shadow Mountains, 1983. Red and Mandy lead a loving and peaceful existence; but when their pine-scented haven is savagely destroyed, Red is catapulted into a phantasmagoric journey filled with bloody vengeance and laced with fire.",
    release_date: 1536800400,
    genres: ["Drama"],
  },
  {
    id: "339692",
    title: "Shot Caller",
    poster: "https://image.tmdb.org/t/p/w500/qLmLz2wtyYvmW8Ult3l2ngOnW8v.jpg",
    overview:
      "A newly-released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.",
    release_date: 1499907600,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "200727",
    title: "Love, Rosie",
    poster: "https://image.tmdb.org/t/p/w500/2HOd431LX9ggqSpBIJ7qyYhATyo.jpg",
    overview:
      "Since the moment they met at age 5, Rosie and Alex have been best friends, facing the highs and lows of growing up side by side. A fleeting shared moment, one missed opportunity, and the decisions that follow send their lives in completely different directions. As each navigates the complexities of life, love, and everything in between, they always find their way back to each other - but is it just friendship, or something more?  Based on Cecelia Ahern's bestselling novel, LOVE, ROSIE is a heart-warming, modern comedy-of-errors posing the ultimate question: do we really only get one shot at true love?",
    release_date: 1413421200,
    genres: [],
  },
  {
    id: "97630",
    title: "Zero Dark Thirty",
    poster: "https://image.tmdb.org/t/p/w500/coeTvXKAYZlrcIfsCfYV5Hw1npu.jpg",
    overview:
      "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
    release_date: 1355875200,
    genres: ["Thriller", "Drama", "History"],
  },
  {
    id: "470044",
    title: "The Hate U Give",
    poster: "https://image.tmdb.org/t/p/w500/2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
    overview:
      "Raised in a poverty-stricken slum, a 16-year-old girl named Starr now attends a suburban prep school. After she witnesses a police officer shoot her unarmed best friend, she's torn between her two very different worlds as she tries to speak her truth.",
    release_date: 1539910800,
    genres: ["Crime", "Drama"],
  },
  {
    id: "504075",
    title: "Wolf Warrior 3",
    poster: "https://image.tmdb.org/t/p/w500/detm29wsfhS1bz5YdURvDePiUY3.jpg",
    overview:
      "The third movie about a Chinese special force soldier with extraordinary marksmanship.",
    release_date: 0,
    genres: ["Action", "War"],
  },
  {
    id: "3597",
    title: "I Know What You Did Last Summer",
    poster: "https://image.tmdb.org/t/p/w500/7OfTWTQEvPcwPrOdeLH0F3h6GRZ.jpg",
    overview:
      "As they celebrate their high school graduation, four friends are involved in a hit-and-run accident when their car hits and apparently kills a pedestrian on an isolated roadway. They dispose of the body and vow to keep the incident a secret, a year later somebody starts sending them letters bearing the warning 'I Know What You Did Last Summer'.",
    release_date: 877050000,
    genres: ["Thriller", "Horror"],
  },
  {
    id: "76726",
    title: "Chronicle",
    poster: "https://image.tmdb.org/t/p/w500/xENglsVIIWEEhhB5lgpy33tGcKI.jpg",
    overview:
      "Three high school students make an incredible discovery, leading to their developing uncanny powers beyond their understanding. As they learn to control their abilities and use them to their advantage, their lives start to spin out of control, and their darker sides begin to take over.",
    release_date: 1328054400,
    genres: ["Documentary"],
  },
  {
    id: "11544",
    title: "Lilo & Stitch",
    poster: "https://image.tmdb.org/t/p/w500/d73UqZWyw3MUMpeaFcENgLZ2kWS.jpg",
    overview:
      "As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien 'puppy' of an independent little girl named Lilo and learns about loyalty, friendship, and 'ohana, the Hawaiian tradition of family.",
    release_date: 1024621200,
    genres: [],
  },
  {
    id: "398181",
    title: "You Were Never Really Here",
    poster: "https://image.tmdb.org/t/p/w500/ktPbjD6nYg5NxmeTt72Iqaw5GD0.jpg",
    overview:
      "A traumatised veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, Joe's nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.",
    release_date: 1510099200,
    genres: ["Thriller"],
  },
  {
    id: "502682",
    title: "Book Club",
    poster: "https://image.tmdb.org/t/p/w500/6ORGBbOA45pfKQXvntPf46NoFGO.jpg",
    overview:
      "Four lifelong friends have their lives forever changed after reading Fifty Shades of Grey in their monthly book club.",
    release_date: 1526605200,
    genres: ["Comedy"],
  },
  {
    id: "5176",
    title: "3:10 to Yuma",
    poster: "https://image.tmdb.org/t/p/w500/voMB69AsLnPNmtfbrBl0lbeFKDH.jpg",
    overview:
      "In Arizona in the late 1800s, infamous outlaw Ben Wade and his vicious gang of thieves and murderers have plagued the Southern Railroad. When Wade is captured, Civil War veteran Dan Evans, struggling to survive on his drought-plagued ranch, volunteers to deliver him alive to the '3:10 to Yuma', a train that will take the killer to trial.",
    release_date: 1189040400,
    genres: ["Drama", "Western"],
  },
  {
    id: "10330",
    title: "Freaky Friday",
    poster: "https://image.tmdb.org/t/p/w500/ipKcZ4Up7dp18XpsfYUc9NKZy3g.jpg",
    overview:
      "Mother and daughter bicker over everything -- what Anna wears, whom she likes and what she wants to do when she's older. In turn, Anna detests Tess's fiancé. When a magical fortune cookie switches their personalities, they each get a peek at how the other person feels, thinks and lives.",
    release_date: 1059872400,
    genres: ["TV Movie", "Comedy", "Family", "Fantasy"],
  },
  {
    id: "6466",
    title: "Freddy vs. Jason",
    poster: "https://image.tmdb.org/t/p/w500/gJuWIl3xQ0QAxwIWnxsoT56bcfH.jpg",
    overview:
      "Evil dream-demon Freddy Krueger devises a plan to manipulate the unstoppable Jason Vorhees into hacking up the teenagers of Elm Street in an effort to make people remember the name Freddy Krueger, thus freeing him from limbo.",
    release_date: 1060909200,
    genres: ["Horror", "Comedy"],
  },
  {
    id: "119283",
    title: "Parker",
    poster: "https://image.tmdb.org/t/p/w500/u1cl4RsdqMjolVVsHwiLRPN1CT2.jpg",
    overview:
      "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist.",
    release_date: 1358899200,
    genres: ["Drama", "Crime"],
  },
  {
    id: "460555",
    title: "Operation Red Sea",
    poster: "https://image.tmdb.org/t/p/w500/6ctXBO0o5fKQvGdSJsPc8TAYCvp.jpg",
    overview:
      "A squad of the Jiaolong Commando Unit - Sea Dragon, a spec ops team of the Chinese Navy, carries out a hostage rescue operation in the nation of Yewaire, on the Arabian Peninsula, and fiercely fights against local rebel groups and Zaka, a terrorist organization.",
    release_date: 1518739200,
    genres: ["Action", "Thriller", "War", "Drama"],
  },
  {
    id: "9325",
    title: "The Jungle Book",
    poster: "https://image.tmdb.org/t/p/w500/xzpNa3RjKHfIijeqVuL72IgBvwy.jpg",
    overview:
      "The boy Mowgli makes his way to the man-village with Bagheera, the wise panther. Along the way he meets jazzy King Louie, the hypnotic snake Kaa and the lovable, happy-go-lucky bear Baloo, who teaches Mowgli 'The Bare Necessities' of life and the true meaning of friendship.",
    release_date: -69724800,
    genres: [],
  },
  {
    id: "9279",
    title: "Jingle All the Way",
    poster: "https://image.tmdb.org/t/p/w500/bdxrZBGtWaLYkjMmwaSIiTwpSnS.jpg",
    overview:
      "Meet Howard Langston, a salesman for a mattress company is constantly busy at his job, and he also constantly disappoints his son, after he misses his son's karate exposition, his son tells Howard that he wants for Christmas is an action figure of his son's television hero, he tries hard to to make it up to him. Unfortunately for Howard, it is Christmas Eve, and every store is sold out of Turbo Man, now Howard must travel all over town and compete with everybody else to find a Turbo Man action figure.",
    release_date: 848016000,
    genres: ["Animation"],
  },
  {
    id: "10948",
    title: "The Fox and the Hound",
    poster: "https://image.tmdb.org/t/p/w500/1382VHxqZDXu2t8i46zf4fP71JG.jpg",
    overview:
      "When a feisty little fox named Tod is adopted into a farm family, he quickly becomes friends with a fun and adorable hound puppy named Copper. Life is full of hilarious adventures until Copper is expected to take on his role as a hunting dog -- and the object of his search is his best friend!",
    release_date: 363574800,
    genres: ["Animation"],
  },
  {
    id: "44115",
    title: "127 Hours",
    poster: "https://image.tmdb.org/t/p/w500/dC4OeWxsQBqHEKnoUh9nF7S8Cm6.jpg",
    overview:
      "The true story of mountain climber Aron Ralston's remarkable adventure to save himself after a fallen boulder crashes on his arm and traps him in an isolated canyon in Utah.",
    release_date: 1288915200,
    genres: ["Adventure", "Drama", "Thriller"],
  },
  {
    id: "300669",
    title: "Don't Breathe",
    poster: "https://image.tmdb.org/t/p/w500/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg",
    overview:
      "A group of teens break into a blind man's home thinking they'll get away with the perfect crime. They're wrong.",
    release_date: 1472086800,
    genres: [],
  },
  {
    id: "16614",
    title: "Adventureland",
    poster: "https://image.tmdb.org/t/p/w500/3ovx1gcQeDIW22IF1TqiugKQv3W.jpg",
    overview:
      "In the summer of 1987, a college graduate takes a 'nowhere' job at his local amusement park, only to find it's the perfect course to get him prepared for the real world.",
    release_date: 1238720400,
    genres: ["Comedy"],
  },
  {
    id: "325189",
    title: "Teen Beach 2",
    poster: "https://image.tmdb.org/t/p/w500/AdqZVbaUAEnmRjYr13Rmnb7ZvIS.jpg",
    overview:
      "Dive in and rock out with the hottest surf sequel under the sun! Now that summer's over and school has begun, Brady (Ross Lynch) and Mack's (Maia Mitchell) relationship seems headed for a wipeout — until Lela, Tanner and the 'Wet Side Story' kids show up! Dazzled by the novelty and variety of the modern world, Lela wants to stay, but the real world and the 'reel' world just don't mix. Can Mack and Brady find the magic to get the kids home and get their own romance back on track before it's too late? Packed with electrifying song &amp; dance numbers and hilarious fish-out-of-water wackiness, 'Teen Beach 2' is 'wow-abunga' fun for everyone!",
    release_date: 1435280400,
    genres: ["TV Movie", "Family", "Comedy", "Fantasy"],
  },
  {
    id: "8328",
    title: "Step Up 2: The Streets",
    poster: "https://image.tmdb.org/t/p/w500/wGCRkvgoVRML29w2XWOdRbMJh5Q.jpg",
    overview:
      "When rebellious street dancer Andie lands at the elite Maryland School of the Arts, she finds herself fighting to fit in while also trying to hold onto her old life. When she joins forces with the schools hottest dancer, Chase, to form a crew of classmate outcasts to compete in Baltimore s underground dance battle The Streets.",
    release_date: 1202947200,
    genres: ["Music", "Drama", "Romance"],
  },
  {
    id: "8413",
    title: "Event Horizon",
    poster: "https://image.tmdb.org/t/p/w500/qfluaDXv0cIdLwgQWzNB2piHL2q.jpg",
    overview:
      "In 2047 a group of astronauts are sent to investigate and salvage the starship 'Event Horizon' which disappeared mysteriously 7 years before on its maiden voyage. With the its return, the crew of the 'Lewis and Clark' discovers the real truth behind the disappearance of the 'Event Horizon' – and something even more terrifying.",
    release_date: 871606800,
    genres: ["Drama"],
  },
  {
    id: "14128",
    title: "Cinderella II: Dreams Come True",
    poster: "https://image.tmdb.org/t/p/w500/gmyZ10NuMrQ5FZHXsqVpRQJ5JPy.jpg",
    overview:
      "As a newly crowned princess, Cinderella quickly learns that life at the Palace - and her royal responsibilities - are more challenging than she had imagined. In three heartwarming tales, Cinderella calls on her animal friends and her Fairy Godmother to help as she brings her own grace and charm to her regal role and discovers that being true to yourself is the best way to make your dreams come true.",
    release_date: 1014422400,
    genres: ["Family", "Animation", "Romance", "Fantasy"],
  },
  {
    id: "534",
    title: "Terminator Salvation",
    poster: "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    overview:
      "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe.",
    release_date: 1242781200,
    genres: ["Animation", "Action", "Adventure"],
  },
  {
    id: "26505",
    title: "Arthur and the Revenge of Maltazard",
    poster: "https://image.tmdb.org/t/p/w500/rHCL0HwlQvU01TLRRHZFlvsVEqt.jpg",
    overview:
      "Arthur answers a distress call from Princess Selenia, who is menaced by the nefarious Maltazard.",
    release_date: 1259193600,
    genres: ["Adventure", "Fantasy", "Animation", "Family"],
  },
  {
    id: "324852",
    title: "Despicable Me 3",
    poster: "https://image.tmdb.org/t/p/w500/6t3YWl7hrr88lCEFlGVqW5yV99R.jpg",
    overview:
      "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    release_date: 1497488400,
    genres: ["Action", "Animation", "Comedy", "Family", "Adventure"],
  },
  {
    id: "333371",
    title: "10 Cloverfield Lane",
    poster: "https://image.tmdb.org/t/p/w500/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg",
    overview:
      "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.",
    release_date: 1457568000,
    genres: ["Thriller", "Science Fiction", "Drama", "Horror"],
  },
  {
    id: "12230",
    title: "One Hundred and One Dalmatians",
    poster: "https://image.tmdb.org/t/p/w500/9klDisS1sVb5LljRhpYJ0TUbPzt.jpg",
    overview:
      "When a litter of dalmatian puppies are abducted by the minions of Cruella De Vil, the parents must find them before she uses them for a diabolical fashion statement.",
    release_date: -281923200,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "302401",
    title: "Snowden",
    poster: "https://image.tmdb.org/t/p/w500/yfK7zxNL63VWfluFuoUaJj5PdNw.jpg",
    overview:
      "CIA employee Edward Snowden leaks thousands of classified documents to the press.",
    release_date: 1473901200,
    genres: ["Drama", "History", "Crime", "Thriller"],
  },
  {
    id: "345",
    title: "Eyes Wide Shut",
    poster: "https://image.tmdb.org/t/p/w500/7MYA9RbyJmDCIC5KNM4mDsdTJI.jpg",
    overview:
      "After Dr. Bill Hartford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
    release_date: 932086800,
    genres: [],
  },
  {
    id: "142061",
    title: "Batman: The Dark Knight Returns, Part 2",
    poster: "https://image.tmdb.org/t/p/w500/arEZYd6uMOFTILne9Ux0A8qctMe.jpg",
    overview:
      "Batman has stopped the reign of terror that The Mutants had cast upon his city.  Now an old foe wants a reunion and the government wants The Man of Steel to put a stop to Batman.",
    release_date: 1358467200,
    genres: ["Action", "Animation", "Mystery"],
  },
  {
    id: "397837",
    title: "Before I Fall",
    poster: "https://image.tmdb.org/t/p/w500/eowzonDJMCuNXoJGVkP9Z7oCmiM.jpg",
    overview:
      "Samantha Kingston has everything. Then, everything changes. After one fateful night, she wakes up with no future at all. Trapped into reliving the same day over and over, she begins to question just how perfect her life really was.",
    release_date: 1488412800,
    genres: ["Drama", "Mystery", "Thriller", "Fantasy"],
  },
  {
    id: "387592",
    title: "Early Man",
    poster: "https://image.tmdb.org/t/p/w500/hXukFwTKOe7izDsf3ZOdeYikRxF.jpg",
    overview:
      "Dug, along with his sidekick Hognob, unite a cavemen tribe to save their hidden valley from being spoiled and, all together as a team, to face the menace of a mysterious and mighty enemy, on the turf of an ancient and sacred sport.",
    release_date: 1516924800,
    genres: ["Family", "Comedy", "Animation", "Adventure"],
  },
  {
    id: "13374",
    title: "Ice Princess",
    poster: "https://image.tmdb.org/t/p/w500/oLWeyvu0ZJrpxDsRrzsMeaGzyZp.jpg",
    overview:
      "With the help of her coach, her parents, and the boy who drives the Zamboni machine, nothing can stop Casey from realizing her dream to be a champion figure skater.",
    release_date: 1111017600,
    genres: ["Drama", "Comedy", "Family"],
  },
  {
    id: "546219",
    title: "Byomkesh Gotro",
    poster: "https://image.tmdb.org/t/p/w500/iFTONcQuVNivSDZMV7Uao1AePq2.jpg",
    overview:
      "Convinced that his life is in jeopardy, Satyakam, the son of a business magnate hailing from Mussoorie, approaches Byomkesh with a plea for help. The legendary detective soon heads to Mussoorie, where he finds out that the youngsters worst fears have come true. Can Byomkesh unravel the mystery shrouding Satyakam's murder before it is too late?",
    release_date: 1539306000,
    genres: ["Mystery", "Thriller"],
  },
  {
    id: "12279",
    title: "Spy Kids 3-D: Game Over",
    poster: "https://image.tmdb.org/t/p/w500/oP53PyexPlQd1xDt8kkvX5LdQdT.jpg",
    overview:
      "Carmen's caught in a virtual reality game designed by the Kids' new nemesis, the Toymaker. It's up to Juni to save his sister, and ultimately the world.",
    release_date: 1059094800,
    genres: ["Action", "Adventure", "Comedy", "Family", "Science Fiction"],
  },
  {
    id: "121734",
    title: "Tad, the Lost Explorer",
    poster: "https://image.tmdb.org/t/p/w500/vmysxjUJkYmp6CmjNOKOeHMOzFA.jpg",
    overview:
      "Tad is a celebrity archaeologist and adventurer just like his hero Max Mordon... in his dreams! In reality, Tad is a Chicago construction worker. One day, however, he is mistaken for a real professor and takes his place on a flight to Peru in search of the lost city of Paititi.",
    release_date: 1344560400,
    genres: ["Animation", "Adventure", "Comedy", "Family"],
  },
  {
    id: "41280",
    title: "Private Lessons",
    poster: "https://image.tmdb.org/t/p/w500/dTkBOgOv3tpCnfMY6kX2MCYibo3.jpg",
    overview:
      "Phillip Filmore is a naive, 15-year-old, preoccupied with sex, who develops a crush on Nicole Mallow, the new 30-something, French housekeeper and sitter to look after him when Phillip's father is out of town for the summer on a 'business' trip. But Mr. Filmore's unscrupulous chauffeur, Lester Lewis, takes advantage of Phillip's crush on Nicole to hire her to seduce the youth, then draws her into a plot to fake her own death in a blackmail scheme aimed to drain Phillip's trust fund.",
    release_date: 367203600,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "70160",
    title: "The Hunger Games",
    poster: "https://image.tmdb.org/t/p/w500/iQK0pkTQC60XR3Zlu2pp8kujoqW.jpg",
    overview:
      "Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.",
    release_date: 1331510400,
    genres: ["Documentary"],
  },
  {
    id: "388",
    title: "Inside Man",
    poster: "https://image.tmdb.org/t/p/w500/mf4i9zZVXMmqWsEb9D0OAY7k3t.jpg",
    overview:
      "When an armed, masked gang enter a Manhattan bank, lock the doors and take hostages, the detective assigned to effect their release enters negotiations preoccupied with corruption charges he is facing.",
    release_date: 1143072000,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "27",
    title: "9 Songs",
    poster: "https://image.tmdb.org/t/p/w500/91O7z0vo7MiNWd5xD2BoivwbQsb.jpg",
    overview:
      "Matt, a young glaciologist, soars across the vast, silent, icebound immensities of the South Pole as he recalls his love affair with Lisa. They meet at a mobbed rock concert in a vast music hall - London's Brixton Academy. They are in bed at night's end. Together, over a period of several months, they pursue a mutual sexual passion whose inevitable stages unfold in counterpoint to nine live-concert songs.",
    release_date: 1089939600,
    genres: ["Drama", "Music", "Romance"],
  },
  {
    id: "55846",
    title: "Blitz",
    poster: "https://image.tmdb.org/t/p/w500/qjqmhhc7uLub22mhu4V6DjOBwXM.jpg",
    overview:
      "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers.",
    release_date: 1305853200,
    genres: [],
  },
  {
    id: "3170",
    title: "Bambi",
    poster: "https://image.tmdb.org/t/p/w500/wV9e2y4myJ4KMFsyFfWYcUOawyK.jpg",
    overview:
      "Bambi's tale unfolds from season to season as the young prince of the forest learns about life, love, and friends.",
    release_date: -864169200,
    genres: ["Drama"],
  },
  {
    id: "1701",
    title: "Con Air",
    poster: "https://image.tmdb.org/t/p/w500/xPvDtJcD9MYF15QBjIfrxlcddgV.jpg",
    overview:
      "When the government puts all its rotten criminal eggs in one airborne basket, it's asking for trouble. Before you can say, 'Pass the barf bag,' the crooks control the plane, led by creepy Cyrus 'The Virus' Grissom. Watching his every move is the just-released Cameron Poe, who'd rather reunite with his family.",
    release_date: 865126800,
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    id: "43641",
    title: "Superman/Shazam!: The Return of Black Adam",
    poster: "https://image.tmdb.org/t/p/w500/3MgwChvi42N1RnhQE9A4pQVHyUY.jpg",
    overview:
      "Chosen the world’s protector against the Seven Deadly Enemies of Man – pride, envy, greed, hatred, selfishness, laziness and injustice – young Billy Batson accepts his destiny as Captain Marvel. Battling alongside Superman against nefarious Black Adam, Billy soon discovers the challenge super heroes ultimately face: is it revenge or justice?",
    release_date: 1289260800,
    genres: ["Animation", "Action"],
  },
  {
    id: "334533",
    title: "Captain Fantastic",
    poster: "https://image.tmdb.org/t/p/w500/2sFME73GaD8UsUxPUKe60cPdLif.jpg",
    overview:
      "A father living in the forests of the Pacific Northwest with his six young kids tries to assimilate back into society.",
    release_date: 1467421200,
    genres: ["Adventure", "Comedy", "Drama"],
  },
  {
    id: "615",
    title: "The Passion of the Christ",
    poster: "https://image.tmdb.org/t/p/w500/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg",
    overview:
      "'The Passion of the Christ' is a film about the last 12 hours in the life of Jesus. Director Mel Gibson received much criticism from critics and audiences for his explicit depiction of and focus on violence and on Christ's suffering, especially on the part of the Jewish community. The film's languages are Arabic, Latin and Hebrew and it's actors are laymen which was controversially received as well.",
    release_date: 1077667200,
    genres: ["Documentary"],
  },
  {
    id: "50348",
    title: "The Lincoln Lawyer",
    poster: "https://image.tmdb.org/t/p/w500/gOn8Ve9Yi8fxjRkmLr5BZoOc7KV.jpg",
    overview:
      "A lawyer conducts business from the back of his Lincoln town car while representing a high-profile client in Beverly Hills.",
    release_date: 1300320000,
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: "369885",
    title: "Allied",
    poster: "https://image.tmdb.org/t/p/w500/sV4lXM32quwminL3TP36nlNPp7Q.jpg",
    overview:
      "In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
    release_date: 1479340800,
    genres: ["Action", "Drama", "War", "Romance", "Thriller"],
  },
  {
    id: "10152",
    title: "Dumb and Dumberer: When Harry Met Lloyd",
    poster: "https://image.tmdb.org/t/p/w500/cSe9Kg3OzQskQbBtjaUPAaqca5n.jpg",
    overview:
      "This wacky prequel to the 1994 blockbuster goes back to the lame-brained Harry and Lloyd's days as classmates at a Rhode Island high school, where the unprincipled principal puts the pair in remedial courses as part of a scheme to fleece the school.",
    release_date: 1050282000,
    genres: ["Comedy"],
  },
  {
    id: "80274",
    title: "Ender's Game",
    poster: "https://image.tmdb.org/t/p/w500/tBgkQqrO2RMgGQR6zod3bSjcPWx.jpg",
    overview:
      "Based on the classic novel by Orson Scott Card, Ender's Game is the story of the Earth's most gifted children training to defend their homeplanet in the space wars of the future.",
    release_date: 1382490000,
    genres: ["Science Fiction", "Action", "Adventure"],
  },
  {
    id: "23168",
    title: "The Town",
    poster: "https://image.tmdb.org/t/p/w500/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg",
    overview:
      "Doug MacRay is a longtime thief, who, smarter than the rest of his crew, is looking for his chance to exit the game. When a bank job leads to the group kidnapping an attractive branch manager, he takes on the role of monitoring her – but their burgeoning relationship threatens to unveil the identities of Doug and his crew to the FBI Agent who is on their case.",
    release_date: 1284512400,
    genres: [],
  },
  {
    id: "4133",
    title: "Blow",
    poster: "https://image.tmdb.org/t/p/w500/ii4sylRdQnLFPMCLhaER7vb0J6N.jpg",
    overview:
      "A boy named George Jung grows up in a struggling family in the 1950's. His mother nags at her husband as he is trying to make a living for the family. It is finally revealed that George's father cannot make a living and the family goes bankrupt. George does not want the same thing to happen to him, and his friend Tuna, in the 1960's, suggests that he deal marijuana. He is a big hit in California in the 1960's, yet he goes to jail, where he finds out about the wonders of cocaine. As a result, when released, he gets rich by bringing cocaine to America. However, he soon pays the price.",
    release_date: 986346000,
    genres: [],
  },
  {
    id: "598",
    title: "City of God",
    poster: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    overview:
      "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro’s most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé. Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...",
    release_date: 1012867200,
    genres: ["Documentary"],
  },
  {
    id: "527435",
    title: "The Christmas Chronicles",
    poster: "https://image.tmdb.org/t/p/w500/5Il2EMSF2KecrUKZPuen6BZmaCP.jpg",
    overview:
      "Siblings Kate and Teddy try to prove Santa Claus is real, but when they accidentally cause his sleigh to crash, they have to save Christmas.",
    release_date: 1542844800,
    genres: ["Family", "Fantasy", "Adventure"],
  },
  {
    id: "929",
    title: "Godzilla",
    poster: "https://image.tmdb.org/t/p/w500/1wki1OaDA35RarysOPet25a8hVQ.jpg",
    overview:
      "When a freighter is viciously attacked in the Pacific Ocean, a team of experts -- including biologist Niko Tatopoulos and scientists Elsie Chapman and Mendel Craven -- concludes that an oversized reptile is the culprit. Before long, the giant lizard is loose in Manhattan, destroying everything within its reach. The team chases the monster to Madison Square Garden, where a brutal battle ensues.",
    release_date: 895626000,
    genres: ["Science Fiction"],
  },
  {
    id: "8488",
    title: "Hitch",
    poster: "https://image.tmdb.org/t/p/w500/63pBekwgDeDthPZzADssCmSrYwL.jpg",
    overview:
      "Dating coach Alex 'Hitch' Hitchens mentors a bumbling client, Albert, who hopes to win the heart of the glamorous Allegra Cole. While Albert makes progress, Hitch faces his own romantic setbacks when proven techniques fail to work on Sara Melas, a tabloid reporter digging for dirt on Allegra Cole's love life. When Sara discovers Hitch's connection to Albert – now Allegra's boyfriend – it threatens to destroy both relationships.",
    release_date: 1108080000,
    genres: [],
  },
  {
    id: "11679",
    title: "xXx: State of the Union",
    poster: "https://image.tmdb.org/t/p/w500/MM1r8HQUn6VG0Njr8S6cmXHyvJ.jpg",
    overview:
      "Ice Cube stars as Darius Stone, a thrill-seeking troublemaker whose criminal record and extreme sports obsession make him the perfect candidate to be the newest XXX agent. He must save the U.S. government from a deadly conspiracy led by five-star general and Secretary of Defense George Deckert (played by Willem Dafoe).",
    release_date: 1114563600,
    genres: ["Action", "Adventure", "Crime", "Drama", "Mystery", "Thriller"],
  },
  {
    id: "77987",
    title: "Only God Forgives",
    poster: "https://image.tmdb.org/t/p/w500/kWjjFSng1JttmDRwDROoGcIArEh.jpg",
    overview:
      "Julian, who runs a Thai boxing club as a front organization for his family's drug smuggling operation, is forced by his mother Crystal to find and kill the individual responsible for his brother's recent death.",
    release_date: 1369184400,
    genres: ["Drama", "Thriller", "Crime"],
  },
  {
    id: "44683",
    title: "Tinker Bell and the Great Fairy Rescue",
    poster: "https://image.tmdb.org/t/p/w500/vuwcXForVzBgLWh6rkxip4m77gn.jpg",
    overview:
      "During a summer stay on the mainland, Tinker Bell is accidentally discovered while investigating a little girl's fairy house. As the other fairies, led by the brash Vidia, launch a daring rescue in the middle of a fierce storm, Tink develops a special bond with the lonely, little girl.",
    release_date: 1281661200,
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
  },
  {
    id: "11774",
    title: "Lemony Snicket's A Series of Unfortunate Events",
    poster: "https://image.tmdb.org/t/p/w500/r7S57FpBsCljWc9fBUo2Iy5XGew.jpg",
    overview:
      "Three wealthy children's parents are killed in a fire. When they are sent to a distant relative, they find out that he is plotting to kill them and seize their fortune.  This movie is extremely alarming, an expression which here means 'a thrilling misadventure involving three ingenious orphans and a villainous actor named Count Olaf (Jim Carrey) who wants their enormous fortune.'  It includes a suspicious fire, delicious pasta, Jim Carrey, poorly behaved looches, Billy Connolly, an incredibly deadly viper, Meryl Streep, and the voice of an imposter named Jude Law.",
    release_date: 1103155200,
    genres: ["Adventure", "Comedy", "Family"],
  },
  {
    id: "2108",
    title: "The Breakfast Club",
    poster: "https://image.tmdb.org/t/p/w500/c0bdxKVRevkw50LOnk6B8d3e4s.jpg",
    overview:
      "Five disparate high school students meet in Saturday detention, and discover they have a lot more in common than they thought.",
    release_date: 477273600,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "465365",
    title: "My Brother Loves Me Too Much",
    poster: "https://image.tmdb.org/t/p/w500/dtSguACVTiZM6jZ1Lj6XaDo12Lb.jpg",
    overview:
      "Setoka Tachibana is a female high school student who has confessed her feelings to other boys 12 times, but has been rebuffed each time. Her older brother Haruka Tachibana cares for his younger sister deeply, but he keeps secret from her that they are not blood related. One day, Setoka's first love Takane Serikawa appears after many years and approaches her.",
    release_date: 1498784400,
    genres: ["Comedy", "Romance"],
  },
  {
    id: "2898",
    title: "As Good as It Gets",
    poster: "https://image.tmdb.org/t/p/w500/e4DQl8UobpJ0DqTEmQInbWH174A.jpg",
    overview:
      "New York City. Melvin Udall, a cranky, bigoted, obsessive-compulsive writer, finds his life turned upside down when neighboring gay artist Simon is hospitalized and his dog is entrusted to Melvin. In addition, Carol, the only waitress who will tolerate him, must leave work to care for her sick son, making it impossible for Melvin to eat breakfast.",
    release_date: 882489600,
    genres: [],
  },
  {
    id: "565",
    title: "The Ring",
    poster: "https://image.tmdb.org/t/p/w500/gghD2ZIPjMzLnnBuT3AZQGYnIW9.jpg",
    overview:
      "It sounded like just another urban legend: A videotape filled with nightmarish images, leading to a phone call foretelling the viewer's death in exactly seven days. As a newspaper reporter, Rachel Keller was naturally skeptical of the story, until four teenagers all met with mysterious deaths exactly one week after watching just such a tape. Allowing her investigative curiosity to get the better of her, Rachel tracks down the video... and watches it. Now she has just seven days to unravel the mystery of the Ring.",
    release_date: 1034902800,
    genres: ["Drama"],
  },
  {
    id: "13486",
    title: "The Scorpion King: Rise of a Warrior",
    poster: "https://image.tmdb.org/t/p/w500/6mPBRYOn4hl4151yWhs02ZLEdv9.jpg",
    overview:
      "The heroic tale of young Mathayus and his relentless quest for justice against an evil and powerful villain, King Sargon. Mathayus faces heart-stopping tribulations during his adventurous, odds-defying trajectory toward his ultimate destiny: becoming the formidable warrior king of an ancient desert empire.",
    release_date: 1216429200,
    genres: ["Fantasy", "Action", "Adventure", "Science Fiction"],
  },
  {
    id: "26389",
    title: "From Paris with Love",
    poster: "https://image.tmdb.org/t/p/w500/poVoLKLxUqsTLSntA40Po2F78dZ.jpg",
    overview:
      "James Reese has a good job as an ambassador's aid in France, but his real passion is a side gig, working in a minor role in the CIA. He would love to be a full-fledged agent and can't believe his luck when he lands an assignment with Charlie Wax. Trigger-happy Charlie soon has James crying for his desk job, but when he learns that the same guys they're trying to catch are after him, James realizes that Charlie may be his only hope of survival.",
    release_date: 1265241600,
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "12437",
    title: "Underworld: Rise of the Lycans",
    poster: "https://image.tmdb.org/t/p/w500/6pLPWF7AXhljLJf8WTli9BuVfyv.jpg",
    overview:
      "A prequel to the first two Underworld films, this fantasy explains the origins of the feud between the Vampires and the Lycans. Aided by his secret love, Sonja, courageous Lucian leads the Lycans in battle against brutal Vampire king Viktor. Determined to break the king's enslavement of his people, Lucian faces off against the Death Dealer army in a bid for Lycan independence.",
    release_date: 1232582400,
    genres: ["Fantasy", "Action", "Adventure", "Science Fiction", "Thriller"],
  },
  {
    id: "1885",
    title: "The Karate Kid",
    poster: "https://image.tmdb.org/t/p/w500/kpDjt9N52zUZYMqe7TCCn04DZvp.jpg",
    overview:
      "Hassled by the school bullies, Daniel LaRusso has his share of adolescent woes. Luckily, his apartment building houses a resident martial arts master: Kesuke Miyagi, who agrees to train Daniel ... and ends up teaching him much more than self-defense. Armed with newfound confidence, skill and wisdom, Daniel ultimately faces off against his tormentors in this hugely popular classic underdog tale.",
    release_date: 456714000,
    genres: [],
  },
  {
    id: "589848",
    title: "Bloodroot",
    poster: "https://image.tmdb.org/t/p/w500/iB1z8QCEsy5qtrQQMOVjATVSSV4.jpg",
    overview:
      "Douglas Tirola’s latest documentary traces the evolution of feminism through the lives of two exceptional women, Noel and Selma, who came of age in the ’50s when women were relegated to the roles of wives and mothers. During the height of the women’s movement, Noel, a former teen model and Playboy bunny, meets and falls in love with Selma, a tough, outspoken radical feminist. Both women choose to leave their comfortable, yet unsatisfying marriages and children to come out as lesbians. The two share a love of cooking and gardening and, in the ’70s, open Bloodroot, the first vegetarian collective restaurant and bookstore in Bridgeport, Connecticut. By interspersing archival footage and clips from The Stepford Wives, Tirola affectionately chronicles the cultural shifts of the last 40 years as Noel and Selma attempt to keep Bloodroot open as an indispensable gathering spot for progressive women.",
    release_date: 1554944400,
    genres: ["Documentary"],
  },
  {
    id: "586128",
    title: "Dagli occhi dell'amore",
    poster: "https://image.tmdb.org/t/p/w500/gHU2hCZ94g4yYwSVSwQBEZV7Ffq.jpg",
    overview: "",
    release_date: 1554944400,
    genres: [],
  },
  {
    id: "525",
    title: "The Blues Brothers",
    poster: "https://image.tmdb.org/t/p/w500/3DiSrcYELCLkwnjl9EZp2pkKGep.jpg",
    overview:
      "Jake Blues is just out of jail, and teams up with his brother, Elwood on a 'mission from God' to raise funds for the orphanage in which they grew up. The only thing they can do is do what they do best: play music. So they get their old band together, and set out on their way—while getting in a bit of trouble here and there.",
    release_date: 330051600,
    genres: ["Music"],
  },
  {
    id: "5915",
    title: "Into the Wild",
    poster: "https://image.tmdb.org/t/p/w500/2MSGZEE6XZd2r4ODNziwAw7Hpw0.jpg",
    overview:
      "After graduating from Emory University in 1992, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity, and hitchhikes to Alaska to live in the wilderness.",
    release_date: 1189472400,
    genres: ["TV Movie"],
  },
  {
    id: "11713",
    title: "Fist of Fury",
    poster: "https://image.tmdb.org/t/p/w500/dlcipCOa9hlfBBz7kCAyjsf3q0E.jpg",
    overview:
      "Chen Zhen returns to the international compound of China only to learn of his beloved teacher's death. This is compounded by the continual racist harassment by the Japanese population in the area. Unlike his friends, he confronts it head on with his mastery of martial arts while investigating his teacher's murder.",
    release_date: 70070400,
    genres: ["Action"],
  },
  {
    id: "324668",
    title: "Jason Bourne",
    poster: "https://image.tmdb.org/t/p/w500/xA7N41glw17MBQtcWSm2eBlBRuG.jpg",
    overview:
      "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
    release_date: 1469581200,
    genres: ["Action", "Thriller"],
  },
  {
    id: "9846",
    title: "To Live and Die in L.A.",
    poster: "https://image.tmdb.org/t/p/w500/2iW3pSihBIhXjnBQmUJ0mAiZbB5.jpg",
    overview:
      "A fearless Secret Service agent will stop at nothing to bring down the counterfeiter who killed his partner.",
    release_date: 499651200,
    genres: ["Crime", "Thriller", "Action"],
  },
  {
    id: "834",
    title: "Underworld: Evolution",
    poster: "https://image.tmdb.org/t/p/w500/yT1EDKhCzAumcZeBoAxqm0nY2H8.jpg",
    overview:
      "As the war between the vampires and the Lycans rages on, Selene, a former member of the Death Dealers (an elite vampire special forces unit that hunts werewolves), and Michael, the werewolf hybrid, work together in an effort to unlock the secrets of their respective bloodlines.",
    release_date: 1137024000,
    genres: ["Fantasy", "Action", "Science Fiction", "Thriller"],
  },
  {
    id: "9693",
    title: "Children of Men",
    poster: "https://image.tmdb.org/t/p/w500/k9IAS4TehZFcKi4HVByxZNPfqex.jpg",
    overview:
      "In 2027, in a chaotic world in which humans can no longer procreate, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea, where her child's birth may help scientists save the future of humankind.",
    release_date: 1158886800,
    genres: ["Drama", "Action", "Thriller", "Science Fiction"],
  },
  {
    id: "524",
    title: "Casino",
    poster: "https://image.tmdb.org/t/p/w500/4TS5O1IP42bY2BvgMxL156EENy.jpg",
    overview:
      "In early-1970s Las Vegas, low-level mobster Sam 'Ace' Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.",
    release_date: 816998400,
    genres: ["Crime"],
  },
  {
    id: "128883",
    title: "Crayon Shin-chan: The Legend Called: Dance! Amigo!",
    poster: "https://image.tmdb.org/t/p/w500/uJQyyUORauQS9dFiBSDliDaiJeV.jpg",
    overview:
      "Something sinister's afoot in Kasukabe. Shin-chan doesn't know what it is, but he's pretty sure it involves samba-dancing doppelgängers.",
    release_date: 1145062800,
    genres: ["Comedy", "Animation"],
  },
  {
    id: "498248",
    title: "Mia and the White Lion",
    poster: "https://image.tmdb.org/t/p/w500/zXfwBeYe0RnqsJ0dnBoFTB4SSrG.jpg",
    overview:
      "A young girl from London moves to Africa with her parents where she befriends a lion cub.",
    release_date: 1545782400,
    genres: ["Adventure", "Family"],
  },
  {
    id: "2292",
    title: "Clerks",
    poster: "https://image.tmdb.org/t/p/w500/pAWnnz8qPmTygCjkOCGSAMQ6AJ4.jpg",
    overview:
      "Convenience and video store clerks Dante and Randal are sharp-witted, potty-mouthed and bored out of their minds. So in between needling customers, the counter jockeys play hockey on the roof, visit a funeral home and deal with their love lives.",
    release_date: 779418000,
    genres: ["Comedy"],
  },
  {
    id: "11619",
    title: "Flushed Away",
    poster: "https://image.tmdb.org/t/p/w500/o4JlinGGDwxfmtvyUotZQdDdLA2.jpg",
    overview:
      "London high-society mouse, Roddy is flushed down the toilet by Sid, a common sewer rat. Hang on for a madcap adventure deep in the sewer bowels of Ratropolis, where Roddy meets the resourceful Rita, the rodent-hating Toad and his faithful thugs, Spike and Whitey.",
    release_date: 1161478800,
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    id: "583762",
    title: "Күлүк Хомус",
    poster: "https://image.tmdb.org/t/p/w500/wRbWtt7FlyohJH2U0354qQjOfvW.jpg",
    overview: "",
    release_date: 1554944400,
  },
  {
    id: "38050",
    title: "The Adjustment Bureau",
    poster: "https://image.tmdb.org/t/p/w500/A4wKf04g4DCVAWC67uPGozIJPGw.jpg",
    overview:
      "A man glimpses the future Fate has planned for him – and chooses to fight for his own destiny. Battling the powerful Adjustment Bureau across, under and through the streets of New York, he risks his destined greatness to be with the only woman he's ever loved.",
    release_date: 1299110400,
    genres: ["Science Fiction", "Thriller", "Romance"],
  },
  {
    id: "476764",
    title: "The Front Runner",
    poster: "https://image.tmdb.org/t/p/w500/9QKzd31H1bCjMAJ8HoaASWqbHfY.jpg",
    overview:
      "Gary Hart, former Senator of Colorado, becomes the front-runner for the Democratic presidential nomination in 1987. Hart's intelligence, charisma and idealism makes him popular with young voters, leaving him with a seemingly clear path to the White House. All that comes crashing down when allegations of an extramarital affair surface in the media, forcing the candidate to address a scandal that threatens to derail his campaign and personal life.",
    release_date: 1541462400,
    genres: ["Drama", "History"],
  },
  {
    id: "49047",
    title: "Gravity",
    poster: "https://image.tmdb.org/t/p/w500/wmUeEacsFZzDndaeOtNNmy26rYJ.jpg",
    overview:
      "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
    release_date: 1380762000,
    genres: [],
  },
  {
    id: "9611",
    title: "Romy and Michele's High School Reunion",
    poster: "https://image.tmdb.org/t/p/w500/etg1pHDwJfWbr5XeOkVxErjBRld.jpg",
    overview:
      "Two not-too-bright party girls reinvent themselves for their high school reunion. Armed with a borrowed Jaguar, new clothes and the story of their success as the inventors of Post-It notes, Romy and Michele descend on their alma mater, but their façade crumbles quickly.",
    release_date: 861930000,
    genres: ["Comedy"],
  },
  {
    id: "153518",
    title: "The Angry Birds Movie",
    poster: "https://image.tmdb.org/t/p/w500/js0eWaAlLNMilNrgSRdl7sKI3F1.jpg",
    overview:
      "An island populated entirely by happy, flightless birds or almost entirely. In this paradise, Red, a bird with a temper problem, speedy Chuck, and the volatile Bomb have always been outsiders. But when the island is visited by mysterious green piggies, it’s up to these unlikely outcasts to figure out what the pigs are up to.",
    release_date: 1462928400,
    genres: ["Animation", "Comedy", "Adventure", "Family"],
  },
  {
    id: "554739",
    title: "The Final Wish",
    poster: "https://image.tmdb.org/t/p/w500/3lFQPOhOAg1gAQgFsXdfYfXFbI6.jpg",
    overview:
      "Following the passing of his father, Aaron Hammond returns to his hometown to help his devastated mother and to confront his past demons. Sifting through his father’s belongings, Aaron comes upon a mysterious item that is far more than it seems.",
    release_date: 1548288000,
    genres: ["Horror"],
  },
  {
    id: "3131",
    title: "Gangs of New York",
    poster: "https://image.tmdb.org/t/p/w500/lemqKtcCuAano5aqrzxYiKC8kkn.jpg",
    overview:
      "It's 1863. America was born in the streets. Amsterdam Vallon returns to the Five Points of America to seek vengeance against the psychotic gangland kingpin, Bill the Butcher, who murdered his father years earlier. With an eager pickpocket by his side and a whole new army, Vallon fights his way to seek vengeance on the Butcher and restore peace in the area.",
    release_date: 1039824000,
    genres: ["Crime"],
  },
  {
    id: "293863",
    title: "The Age of Adaline",
    poster: "https://image.tmdb.org/t/p/w500/MbILysGhjAbnZi1Okae9wYqLMx.jpg",
    overview:
      "After 29-year-old Adaline recovers from a nearly lethal accident, she inexplicably stops growing older. As the years stretch on and on, Adaline keeps her secret to herself  until she meets a man who changes her life.",
    release_date: 1429146000,
    genres: ["Fantasy", "Drama", "Romance"],
  },
  {
    id: "239",
    title: "Some Like It Hot",
    poster: "https://image.tmdb.org/t/p/w500/hVIKyTK13AvOGv7ICmJjK44DTzp.jpg",
    overview:
      "Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.",
    release_date: -340588800,
    genres: [],
  },
  {
    id: "517839",
    title: "Border",
    poster: "https://image.tmdb.org/t/p/w500/8KzOTRlKjdAKQTemV41hq86ldFS.jpg",
    overview:
      "When a border guard with a sixth sense for identifying smugglers encounters the first person she cannot prove is guilty, she is forced to confront terrifying revelations about herself and humankind.",
    release_date: 1538010000,
    genres: [],
  },
  {
    id: "308369",
    title: "Me and Earl and the Dying Girl",
    poster: "https://image.tmdb.org/t/p/w500/p0cMBeUZVkkDEMkXfpbCMz9hE0v.jpg",
    overview:
      "Greg is coasting through senior year of high school as anonymously as possible, avoiding social interactions like the plague while secretly making spirited, bizarre films with Earl, his only friend. But both his anonymity and friendship threaten to unravel when his mother forces him to befriend a classmate with leukemia.",
    release_date: 1434070800,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "288158",
    title: "The Woman in Black 2: Angel of Death",
    poster: "https://image.tmdb.org/t/p/w500/9NcUFNCSzw4IFci3OhbX8ZyzoFn.jpg",
    overview:
      "40 years after the first haunting at Eel Marsh House, a group of children evacuated from WWII London arrive, awakening the house's darkest inhabitant.",
    release_date: 1419897600,
    genres: ["Thriller", "Horror", "Drama"],
  },
  {
    id: "371608",
    title: "The Strangers: Prey at Night",
    poster: "https://image.tmdb.org/t/p/w500/vdxLpPsZkPZdFrREp7eSeSzcimj.jpg",
    overview:
      "A family’s road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family’s every limit as they struggle to survive.",
    release_date: 1520380800,
    genres: ["Horror", "Thriller"],
  },
  {
    id: "6145",
    title: "Fracture",
    poster: "https://image.tmdb.org/t/p/w500/552MFwiHvSoTuRvRtum5iCqhTXe.jpg",
    overview:
      "A husband is on trial for the attempted murder of his wife, in what is seemingly an open/shut case for the ambitious district attorney trying to put him away. However, there are surprises for both around every corner, and, as a suspenseful game of cat-and-mouse is played out, each must manipulate and outwit the other.",
    release_date: 1177030800,
    genres: [],
  },
  {
    id: "74534",
    title: "The Best Exotic Marigold Hotel",
    poster: "https://image.tmdb.org/t/p/w500/gNWiOKTWDvPTpr7QfPWk18gLftz.jpg",
    overview:
      "British retirees travel to India to take up residence in what they believe is a newly restored hotel. Less luxurious than its advertisements, the Marigold Hotel nevertheless slowly begins to charm in unexpected ways as the residents find new purpose in their old age.",
    release_date: 1322438400,
    genres: ["Drama", "Comedy"],
  },
  {
    id: "2252",
    title: "Eastern Promises",
    poster: "https://image.tmdb.org/t/p/w500/dpiJWb4NrWgcOg2rusuLhDM0hTm.jpg",
    overview:
      "A Russian teenager, living in London, dies during childbirth but leaves clues to a midwife in her journal, that could tie her child to a rape involving a violent Russian mob family.",
    release_date: 1189731600,
    genres: ["Thriller", "Crime", "Mystery"],
  },
  {
    id: "82650",
    title: "Diary of a Wimpy Kid: Dog Days",
    poster: "https://image.tmdb.org/t/p/w500/7pTvjELxw0f0E6sUPGtPEl4WD0S.jpg",
    overview:
      "School is out and Greg is ready for the days of summer, when all his plans go wrong. What on earth is he going to do all summer?",
    release_date: 1343869200,
    genres: ["Comedy", "Family"],
  },
  {
    id: "8859",
    title: "Dude, Where's My Car?",
    poster: "https://image.tmdb.org/t/p/w500/tc6sLnnaOZk08YndHd53aPlUast.jpg",
    overview:
      "Jesse and Chester, two bumbling stoners, wake up one morning from a night of partying and cannot remember where they parked their car. They encounter a variety of people while looking for it, including their angry girlfriends, an angry street gang, a transexual stripper, a cult of alien seeking fanatics, and aliens in human form looking for a mystical device that could save or destroy the world.",
    release_date: 976838400,
    genres: ["Comedy", "Science Fiction"],
  },
  {
    id: "11631",
    title: "Mamma Mia!",
    poster: "https://image.tmdb.org/t/p/w500/zdUA4FNHbXPadzVOJiU0Rgn6cHR.jpg",
    overview:
      "An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she's raised alone. But, the daughter has secretly invited three of her mother's ex-lovers in the hopes of finding her biological father.",
    release_date: 1214960400,
    genres: ["Comedy"],
  },
  {
    id: "1607",
    title: "A Bronx Tale",
    poster: "https://image.tmdb.org/t/p/w500/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
    overview:
      "Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss. Complicating matters is the youngster's growing attraction - forbidden in his neighborhood - for a beautiful black girl.",
    release_date: 747968400,
    genres: ["Drama", "Crime"],
  },
  {
    id: "11665",
    title: "Get Smart",
    poster: "https://image.tmdb.org/t/p/w500/gpBK7S3ZooMAP8MhA1N5JvOHwUl.jpg",
    overview:
      "When the identities of secret agents from Control are compromised, the Chief promotes hapless but eager analyst Maxwell Smart and teams him with stylish, capable Agent 99, the only spy whose cover remains intact. Can they work together to thwart the evil plans of KAOS and its crafty operative?",
    release_date: 1213837200,
    genres: ["Action", "Comedy", "Family"],
  },
  {
    id: "9461",
    title: "Enter the Dragon",
    poster: "https://image.tmdb.org/t/p/w500/zN7OOSARMLVzl9xJqkW2CcZ3xhY.jpg",
    overview:
      "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.",
    release_date: 114393600,
    genres: ["Action"],
  },
  {
    id: "865",
    title: "The Running Man",
    poster: "https://image.tmdb.org/t/p/w500/yADpAIbHCQBNy9xv9WmR9uGilK9.jpg",
    overview:
      "By 2017, the global economy has collapsed and American society has become a totalitarian police state, censoring all cultural activity. The government pacifies the populace by broadcasting a number of game shows in which convicted criminals fight for their lives, including the gladiator-style The Running Man, hosted by the ruthless Damon Killian, where “runners” attempt to evade “stalkers” and certain death for a chance to be pardoned and set free.",
    release_date: 563760000,
    genres: ["Crime", "Drama"],
  },
  {
    id: "1443",
    title: "The Virgin Suicides",
    poster: "https://image.tmdb.org/t/p/w500/1NCQtXPQnaHRjOZVmktA9BSM35F.jpg",
    overview:
      "A group of male friends become obsessed with five mysterious sisters who are sheltered by their strict, religious parents.",
    release_date: 956278800,
    genres: ["Drama", "Romance"],
  },
  {
    id: "526051",
    title: "Look Away",
    poster: "https://image.tmdb.org/t/p/w500/8WTEFOwFBx0mHurnEfv27I0FOe2.jpg",
    overview:
      "A timid and reclusive 18-year-old high school student is alienated by her parents and ruthlessly rejected by her peers. Desperate and isolated, she confides in her own reflection — and in the mirror she finds her imagined evil twin, someone who supports her, encourages her and knows all her secret desires. When the “girls” trade places, repressed sexuality and a ferocious violence erupt with a dangerous sense of freedom.",
    release_date: 1539306000,
    genres: ["Documentary"],
  },
  {
    id: "258480",
    title: "Carol",
    poster: "https://image.tmdb.org/t/p/w500/uHwjbztkPEW3lcfsbKGO3XlaPjL.jpg",
    overview:
      "In 1950s New York, a department-store clerk who dreams of a better life falls for an older, married woman.",
    release_date: 1447977600,
    genres: ["Fantasy"],
  },
  {
    id: "416494",
    title: "Status Update",
    poster: "https://image.tmdb.org/t/p/w500/E4twRNScyq3g6tRpvK6X8LdD1z.jpg",
    overview:
      "After being uprooted by his parents' separation and unable to fit into his new hometown, a teenager stumbles upon a magical app that causes his social media updates to come true.",
    release_date: 1518134400,
    genres: [],
  },
  {
    id: "7840",
    title: "10,000 BC",
    poster: "https://image.tmdb.org/t/p/w500/lg3HcDLC5Kx3RNPQjeXvvS6nen3.jpg",
    overview:
      "A prehistoric epic that follows a young mammoth hunter's journey through uncharted territory to secure the future of his tribe.",
    release_date: 1203638400,
    genres: ["Adventure", "Action", "Drama", "Fantasy"],
  },
  {
    id: "359412",
    title: "Marauders",
    poster: "https://image.tmdb.org/t/p/w500/bAvmDn5C7arBoRrfaG3b3Kdue1q.jpg",
    overview:
      "An untraceable group of elite bank robbers is chased by a suicidal FBI agent who uncovers a deeper purpose behind the robbery-homicides.",
    release_date: 1467334800,
    genres: ["Horror"],
  },
  {
    id: "571",
    title: "The Birds",
    poster: "https://image.tmdb.org/t/p/w500/z0iYrJ6GsAMP3abOha7uGMuc5kZ.jpg",
    overview:
      "Chic socialite Melanie Daniels enjoys a passing flirtation with an eligible attorney in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the bird population runs amok. Suddenly, the townsfolk face a massive avian onslaught, with the feathered fiends inexplicably attacking people all over Bodega Bay.",
    release_date: -213494400,
    genres: ["Documentary"],
  },
  {
    id: "337170",
    title: "American Made",
    poster: "https://image.tmdb.org/t/p/w500/23ILgoPSO5ShKcTZOuiTVfqFAUB.jpg",
    overview:
      "The true story of pilot Barry Seal, who transported contraband for the CIA and the Medellin cartel in the 1980s.",
    release_date: 1502931600,
    genres: ["Documentary", "History"],
  },
  {
    id: "1923",
    title: "Twin Peaks: Fire Walk with Me",
    poster: "https://image.tmdb.org/t/p/w500/mxsGXqetGnirf99qapYd5MMY1VL.jpg",
    overview:
      "In the questionable town of Deer Meadow, Washington, FBI Agent Desmond inexplicably disappears while hunting for the man who murdered a teen girl. The killer is never apprehended, and, after experiencing dark visions and supernatural encounters, Agent Dale Cooper chillingly predicts that the culprit will claim another life. Meanwhile, in the more cozy town of Twin Peaks, hedonistic beauty Laura Palmer hangs with lowlifes and seems destined for a grisly fate.",
    release_date: 707533200,
    genres: ["Drama", "Mystery"],
  },
  {
    id: "152760",
    title: "The Monuments Men",
    poster: "https://image.tmdb.org/t/p/w500/wiWAg4mKV2S4vImPxsPRIdj2R2B.jpg",
    overview:
      "Based on the true story of the greatest treasure hunt in history, The Monuments Men is an action drama focusing on seven over-the-hill, out-of-shape museum directors, artists, architects, curators, and art historians who went to the front lines of WWII to rescue the world’s artistic masterpieces from Nazi thieves and return them to their rightful owners.  With the art hidden behind enemy lines, how could these guys hope to succeed?",
    release_date: 1390521600,
    genres: ["War", "Drama", "History", "Action"],
  },
  {
    id: "11216",
    title: "Cinema Paradiso",
    poster: "https://image.tmdb.org/t/p/w500/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
    overview:
      "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    release_date: 595728000,
    genres: ["Drama", "Romance"],
  },
  {
    id: "13382",
    title: "Rudolph the Red-Nosed Reindeer",
    poster: "https://image.tmdb.org/t/p/w500/WvJj5TsW3lPJcbbvZtJazsFhvY.jpg",
    overview:
      "Sam the snowman tells us the story of a young red-nosed reindeer who, after being ousted from the reindeer games because of his glowing nose, teams up with Hermey, an elf who wants to be a dentist, and Yukon Cornelius, the prospector. They run into the Abominable Snowman and find a whole island of misfit toys. Rudoph vows to see if he can get Santa to help the toys, and he goes back to the North Pole on Christmas Eve. But Santa's sleigh is fogged in. But when Santa looks over Rudolph, he gets a very bright idea...",
    release_date: -160012800,
    genres: ["Animation", "Family", "Fantasy", "Music"],
  },
  {
    id: "346",
    title: "Seven Samurai",
    poster: "https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    overview:
      "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
    release_date: -494985600,
    genres: ["Action", "Drama"],
  },
  {
    id: "15512",
    title: "Monsters vs Aliens",
    poster: "https://image.tmdb.org/t/p/w500/aao1lKR87XFasISD3rr6UzkZyJ0.jpg",
    overview:
      "When Susan Murphy is unwittingly clobbered by a meteor full of outer space gunk on her wedding day, she mysteriously grows to 49-feet-11-inches. The military jumps into action and captures Susan, secreting her away to a covert government compound. She is renamed Ginormica and placed in confinement with a ragtag group of Monsters...",
    release_date: 1237420800,
    genres: ["Animation"],
  },
  {
    id: "381341",
    title: "Perfect Strangers",
    poster: "https://image.tmdb.org/t/p/w500/3wknM629Vryofb1HNo2YnLQnQyn.jpg",
    overview:
      "During a dinner, a group of friends decide to share whatever text message or phone call they will receive during the evening - and all hell breaks loose.",
    release_date: 1455148800,
    genres: ["Drama", "Romance"],
  },
  {
    id: "454615",
    title: "Black Water",
    poster: "https://image.tmdb.org/t/p/w500/tIcZAB5AmRN8fIDXfDZ2aUok9qa.jpg",
    overview:
      "A deep cover operative awakens to find himself imprisoned on a submarine. With the help of a fellow prisoner and an amateur agent, he must race against the clock to escape the vessel and expose who set him up.",
    release_date: 1526605200,
    genres: ["Action", "Thriller"],
  },
  {
    id: "571689",
    title: "Sons of Denmark",
    poster: "https://image.tmdb.org/t/p/w500/tmq2TnoV7VRtdEcDjqCOYs131lc.jpg",
    overview:
      "One year after a major bomb attack in Copenhagen radicalisation around the country has intensified and ethnic tensions are running high. The next parliamentary election is near, and the extremely nationalist politicial leader Martin Nordahl is set for a landslide victory. 19-year old Zakaria gets involved in a radical organisation, where he forms a bond with Ali. The two men cannot agree with the current state of the country, which is turning on its own citizens because of their migration background, and decide to act. However, they are both just tools in the hands of people with power. As the men try to make their mark, their brotherhood will be tested and their actions will have grave consequences on their lives.",
    release_date: 1554944400,
    genres: ["Thriller", "Drama"],
  },
  {
    id: "370663",
    title: "Below Her Mouth",
    poster: "https://image.tmdb.org/t/p/w500/nTGbq37hYLuNy7YgMg0gVLma0NS.jpg",
    overview:
      "An unexpected affair quickly escalates into a heart-stopping reality for two women whose passionate connection changes their lives forever.",
    release_date: 1486684800,
    genres: ["Drama", "Romance"],
  },
];
