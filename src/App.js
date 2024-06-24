import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Compontes/Header';
import Footer from './Compontes/Footer';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Compontes/Home';
import About from './Compontes/About';
import Contact from './Compontes/Contact';
import Services from './Compontes/Services';
import Portoflio from './Compontes/Portoflio';
import Team from './Compontes/Team';
import Blog from './Compontes/Blog';
import Portfoliopage from './Compontes/Portfoliopage';

import { BsActivity } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { IoEaselOutline } from "react-icons/io5";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsChatSquareText } from "react-icons/bs";
import Servicespage from './Compontes/Servicespage';
import Teampage from './Compontes/Teampage';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { BsEasel } from "react-icons/bs";
import { FaRegGem } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import './Media.css'
const menu = [
  {
    name:"Home",
    route:"/",
    submenu:[
      "Home 1",
      "Home 2",
      "Home 3",
      "Home 4",
      "Home 5"
    ]
  },

  {
    name:"About",
    route:"/about",
    submenu:[
      "About 1",
      "About 2",
      "About 3",
      "About 4",
      "About 5"
    ]
  },

  {
    name:"Services",
    route:"/servicepage",
    submenu:[
      "Services 1",
      "Services 2",
      "Services 3",
      "Services 4",
      "Services 5"
    ]
  },

  {
    name:"Portoflio",
    route:"/portfoliopage",
    submenu:[
      "Portflio 1",
      "Portflio 2",
      "Portflio 3",
      "Portflio 4",
      "Portflio 5"
    ]
  },

  {
    name:"Team",
    route:"/teampage",
    submenu:[
      "Team 1",
      "Team 2",
      "Team 3",
      "Team 4",
      "Team 5"
    ]
  },

  {
    name:"Contact",
    route:"/contact",
    submenu:[
      "Contact 1",
      "Contact 2",
      "Contact 3",
      "Contact 4",
      "Contact 5"
    ]
  },

]

const Image=[
  {
    img:require('../src/image/app-1.jpg'),
    title:"App 1",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/product-1.jpg'),
    title:"Product 1",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/branding-1.jpg'),
    title:"Branding 1",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },
  
  {
    img:require('../src/image/books-1.jpg'),
    title:"Books 1",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/app-2.jpg'),
    title:"App 2",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/product-2.jpg'),
    title:"Product 2",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/branding-2.jpg'),
    title:"Branding 2",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/books-2.jpg'),
    title:"Books 2",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/app-3.jpg'),
    title:"App 2",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/product-3.jpg'),
    title:"Product 3",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/branding-3.jpg'),
    title:"Branding 3",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

  {
    img:require('../src/image/books-3.jpg'),
    title:"Books 3",
    info: "Lorem ipsum, dolor sit amet consectetur"
  },

]

const ser=[
  {
    sericon:<BsActivity/>,
    sertitle:"Nesciunt Mete",
    serinfo:"Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    sera:"Read more"
  },

  {
    sericon:<BsBroadcast/>,
    sertitle:"Eosle Commodi",
    serinfo:"Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    sera:"Read more"
  },

  {
    sericon:<IoEaselOutline/>,
    sertitle:"Ledo Markt",
    serinfo:"Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    sera:"Read more"
  },

  {
    sericon:<BsBoundingBoxCircles/>,
    sertitle:"Asperiores Commodit",
    serinfo:"Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    sera:"Read more"
  },

  {
    sericon:<SlCalender/>,
    sertitle:"Velit Doloremque",
    serinfo:"Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    sera:"Read more"
  },

  {
    sericon:<BsChatSquareText/>,
    sertitle:"Dolori Architecto",
    serinfo:"Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    sera:"Read more"
  }
]

const Teaminfo=[
  {
    teamimg:require('../src/image/team-1.jpg'),
    teamtitle:"Walter White",
    teaminfo:"Web Development",
    teamicon:[
      <FaTwitter />,
      <RiFacebookFill />,
      <FaInstagramSquare />,
      <FaLinkedinIn />
    ]
  },

  {
    teamimg:require('../src/image/team-2.jpg'),
    teamtitle:"Sarah Jhinson",
    teaminfo:"Marketing",
    teamicon:[
      <FaTwitter />,
      <RiFacebookFill />,
      <FaInstagramSquare />,
      <FaLinkedinIn />
    ]
  },

  {
    teamimg:require('../src/image/team-3.jpg'),
    teamtitle:"William Anderson",
    teaminfo:"Content",
    teamicon:[
      <FaTwitter />,
      <RiFacebookFill />,
      <FaInstagramSquare />,
      <FaLinkedinIn />
    ]
  },

  {
    teamimg:require('../src/image/team-4.jpg'),
    teamtitle:"Amanda Jepson",
    teaminfo:"Accountant",
    teamicon:[
      <FaTwitter />,
      <RiFacebookFill />,
      <FaInstagramSquare />,
      <FaLinkedinIn />
    ]
  },
]

const Testi=[
  {
    testiimg:require('../src/image/client-1.png')
  },
  {
    testiimg:require('../src/image/client-2.png')
  },
  {
    testiimg:require('../src/image/client-3.png')
  },
  {
    testiimg:require('../src/image/client-4.png')
  },
  {
    testiimg:require('../src/image/client-5.png')
  },
  {
    testiimg:require('../src/image/client-6.png')
  },
  {
    testiimg:require('../src/image/client-7.png')
  },
  {
    testiimg:require('../src/image/client-8.png')
  },
]

const box=[
  {
    boxicon:<BsEasel />,
    boxinfo:"Lorem Ipsum"
  },

  {
    boxicon:<FaRegGem />,
    boxinfo:"Sed ut perspiciatis"
  },

  {
    boxicon:<BsGeoAlt />,
    boxinfo:"Magni Dolores"
  },

  {
    boxicon:<MdKeyboardCommandKey />,
    boxinfo:"Nemo Enim"
  },
]

const price=[
  {
    pricetitle:"Free Plan",
    priceicon:<BsBox />,
    priceplan:0,
    pricesym:[
      {
        icon:<IoMdCheckmark />,
        value:"Quam adipiscing vitae proin",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nec feugiat nisl pretium",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nulla at volutpat diam uteera",
        key:true
      },

      {
        icon:<IoMdClose/>,
        value:"Pharetra massa massa ultricies",
        key:false
      },

      {
        icon:<IoMdClose/>,
        value:"Massa ultricies mi quis hendrerit",
        key:false
      },
    ],
    pricebtn:"Buy Now"
  },

  {
    pricetitle:"Business Plan",
    priceicon:<IoMdAirplane />,
    priceplan:29,
    pricesym:[
      {
        icon:<IoMdCheckmark />,
        value:"Quam adipiscing vitae proin",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nec feugiat nisl pretium",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nulla at volutpat diam uteera",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Pharetra massa massa ultricies",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Massa ultricies mi quis hendrerit",
        key:true
      },
    ],
    pricebtn:"Buy Now"
  },

  {
    pricetitle:"Developer Plan",
    priceicon:<IoIosSend />,
    priceplan:49,
    pricesym:[
      {
        icon:<IoMdCheckmark />,
        value:"Quam adipiscing vitae proin",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nec feugiat nisl pretium",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Nulla at volutpat diam uteera",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Pharetra massa massa ultricies",
        key:true
      },

      {
        icon:<IoMdCheckmark />,
        value:"Massa ultricies mi quis hendrerit",
        key:true
      },
    ],
    pricebtn:"Buy Now"
  },
]


// https://bootstrapmade.com/demo/Impact/

function App() {
  return (
    <>
      <Header menuname={menu}/>
        <Routes>
          <Route path="/" element={ <Home portoimg={Image} services={ser} team={Teaminfo} testi={Testi} Box={box} Price={price}/> } ></Route>
          <Route path="/home" element={ <Home portoimg={Image} services={ser} team={Teaminfo} testi={Testi} Box={box} Price={price}/> } ></Route>
          <Route path="/about" element={ <About/> } ></Route>
          <Route path="/services" element={ <Services /> } ></Route>
          <Route path="/portoflio" element={ <Portoflio /> } ></Route>
          <Route path="/Team" element={ <Team/> } ></Route>
          <Route path="/blog" element={ <Blog/> } ></Route>
          <Route path="/contact" element={ <Contact/> } ></Route>
          <Route path="/portfoliopage" element={ <Portfoliopage portoimg={Image}/> } ></Route>
          <Route path="/servicepage" element={ <Servicespage services={ser}/> } ></Route>
          <Route path="/teampage" element={ <Teampage team={Teaminfo}/> } ></Route>
        </Routes>
      <Footer/> 
    </>
  );
}
export default App;
