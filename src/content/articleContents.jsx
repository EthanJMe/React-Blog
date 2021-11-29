import  pineconeLamp from "../assets/Pinecone_lamp.jpg";
import suspended from "../assets/suspended.jpg"
import equipment from "../assets/equipment.jpg"
import Ethan from "../assets/Ethan.jpg"
import Warren from "../assets/Warren.png"
import MavidDarks from "../assets/MavidDarks.jpg"
let articleContent = [
    {
        route: "/posts/article1",
        text:"For a lamp like the one pictured above, tou will need: LED's and a power supply (made with a source and resistors if necessary). Hollow out the piece you intend to use as the decorative top. Place the lights and power source into the base, then glue the base and the top together.",
        coverImg: pineconeLamp,
        authorNames: "Ethan Meyer, ThatElectronicsGuy",
        authorImg: Ethan,
        title: "Making a Basic Lamp",
        publishDate: "11/16/21"
    },
    {
        route: "/posts/article2",
        text:"yadda yadda",
        coverImg: suspended,
        authorNames: "Warren Meyer, MasterMaker",
        authorImg: Warren,
        title: "Bubble Removal",
        publishDate: "11/17/21"
    },
    {
        route: "/posts/article3",
        text:"yadda yadda",
        coverImg: equipment,
        authorNames: "Mavid Darks, BurlBoy",
        authorImg: MavidDarks,
        title: "Equipment Essentials",
        publishDate: "11/17/21"
    },
]
export default articleContent