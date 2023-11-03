import Aus from "../assets/images/cleanUpAustralia.jpeg";
import green from "../assets/images/greenNudge.jpeg";
import reef from "../assets/images/reefx.png";
import fish from "../assets/images/fishx.png";
import sea from "../assets/images/sevencleanseas.jpeg";
import Aus2 from "../assets/images/cleanUpAustralia2.jpeg";

const volunteeringOpp = [
  {
    name: "Beach Cleanup",
    description: `Cleanups are often the first touchpoint for people to realise their impact on the environment. At Green Nudge, we believe that an effective cleanup is much more than just picking up trash along the shore. In line with oue goal to 'nudge' (and not to 'instruct'), we aim to redefine the cleanup experience by also weaving in the historical and cultural aspects of the site. Through this approach, we draw the connection between nature and our behaviour to allow participants to develop an appreciation of their natural heritage and environment.`,
    organisation: "GreenNudge",
    date: "Tue, 12 Dec 2023",
    time: "8AM - 10AM",
    location: "East Coast Park",
    category: ["First-Timers", "Family", "Organisations"],
    country: "Singapore",
    volunteerLink: "https://www.greennudge.sg/volunteer",
    dataImage: green,
  },
  {
    name: "ReefX Expedition",
    description: `ReefX is an initiative for recreational scuba divers to contribute towards local reef conservation work in Singapore. On our expeditions, you will get involved with every aspect, from measuring sea cucumbers and recording depths of fish, to taking ID shots (maybe even creating a new biodiversity record!) and helping us input the data for the researchers. Through this experience, you will be undertaking first-hand marine conservation work.`,
    organisation: "Marine Stewards",
    date: "Sat, 2 Dec 2023",
    time: "12PM - 5PM",
    location: "Hantu West",
    category: ["Divers"],
    country: "Singapore",
    volunteerLink:
      "https://www.marinestewards.org/product-page/reefx-survey-dive",
    dataImage: reef,
  },
  {
    name: "FishX",
    description: `FishX provides a hands-on experience to learn about sustainable fishing, learn how to fish using a rod and reel, and try your hand at catching a fish! Fishing lesson is suitable for children, students, families, corporate team bonding activities.`,
    organisation: "Marine Stewards",
    date: "Sat, 9 Dec 2023",
    time: "9.30AM - 12.30PM",
    location: "East Coast Park",
    category: ["First-Timers", "Family", "Students", "Fishing Enthusiasts"],
    country: "Singapore",
    volunteerLink: "https://www.marinestewards.org/fishxbedok",
    dataImage: fish,
  },
  {
    name: "Beach Cleanup Batam Indonesia",
    description: `As one monsoon ends and another begins, Bintan Island in Indonesia’s Riau Archipelago transitions from one ocean plastic nightmare to another. During the North East Monsoon, Bintan’s position, perched at the southern most tip of the South China Sea creates perfect conditions for plastics from some of the world's most plastic polluted waters to sail straight into it. Covering the Marine Protected Area, clogging mangroves and carpeting beaches. 

    Additionally, Bintan unfortunately cannot count on a perfect waste management system and much also leaks directly from the coastal and fishing communities into its once pristine waters. When the South West monsoons kick in, this is ever apparent. 
    
    It’s visible in the data, a switch from plastic pollution which has traveled great distances to get there, often adorned with languages other than Indonesian, to locally produced, locally consumed post consumer packaging... and ghost nets... lot’s of ghost nets from the fishing industry. 
    
    Our cleanup crews here have their work cutout for them and they have been fighting this fight ferociously since 2020.`,
    organisation: "Seven Clean Seas",
    date: "various dates",
    time: "various timings",
    location: "Bintan",
    category: ["First-Timers", "Family", "Organisations"],
    country: "Indonesia",
    volunteerLink: "https://www.sevencleanseas.com/projects/bintan",
    dataImage: sea,
  },
  {
    name: "Marian 4753 Pioneer River Clean Up",
    description: `Melba House. Clean up along the walkway and river area in Marian end of Pioneer Valley.`,
    organisation: "Clean Up Australia",
    date: "Sun, 3 Mar 2024",
    time: "8AM - 12PM",
    location: "1 Anzac Ave, Marian Qld 4753",
    category: ["First-Timers", "Family", "Students", "Organisations"],
    country: "Australia",
    volunteerLink:
      "https://register.cleanup.org.au/fundraisers/loganmoran/marian-4753-pioneer-river",
    dataImage: Aus,
  },
  {
    //actual
    name: "Lake Burrumbeet Shoreline Clean Up",
    description: `Lake Burrumbeet is a very popular water sports, camping, angling, recreational and cultural place located minutes from Ballarat, Victoria. With some 35km of shoreline, and high water levels in recent years, significant quantities of rubbish, dominately plastics, have accumulated along the lake shores.
    Friends of Lake Burrumbeet Inc, a community group dedicated the wellbeing of the lake precinct, is organising a Clean Up event on Sunday 3 March 2024. Other parties and organisation with an interest in Lake Burrumbeet will be invited to participate.`,
    organisation: "Clean Up Australia",
    date: "Sun, 3 Mar 2024",
    time: "8AM - 4PM",
    location: "Lake Burrumbeet",
    category: ["First-Timers", "Family", "Students", "Organisations"],
    country: "Australia",
    volunteerLink:
      "https://register.cleanup.org.au/fundraisers/steveshedden/lake-burrumbeet",
    dataImage: Aus2,
  },
];

export { volunteeringOpp };
