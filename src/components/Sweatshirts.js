import React,{useState} from 'react'
import "./Sdetails.css"
import { Link } from 'react-router-dom';
const Sweatshirts = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-three-plain-sweatshirt-white/0.webp',
      parahead: 'Pack Of Three Plain..',
      strikeVal: '1649',
      OrgVal: '1499',
      Color: 'White',
      Theme: 'Combo',
      Size: 'S'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-four-plain-sweatshirt-black/0.webp',
      parahead: 'Pack Of Four Plain S..',
      strikeVal: '2049',
      OrgVal: '1899',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'M'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/v-is-for-valorant-sweatshirt-black/0.webp',
      parahead: 'V Is For Valorant Sw..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Trending',
      Size: 'L'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-sweatshirt-black/0.webp',
      parahead: 'Valorant Sweatshirt',
      strikeVal: '749',
      OrgVal: '699',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/i-am-the-hunter-valorant-sweatshirt-black/0.webp',
      parahead: 'I Am The Hunter Valo..',
      strikeVal: '749',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XXL'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/think-big-graphic-printed-sweatshirt-black/0.webp',
      parahead: 'Think Big Graphic Pr..',
      strikeVal: '749',
      OrgVal: '699',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'S'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/swag-dekh-sarcastic-graphic-printed-sweatshirt-black/0.webp',
      parahead: 'Swag Dekh Sarcastic..',
      strikeVal: '839',
      OrgVal: '689',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/perfect-thats-me-typography-sweatshirt-black/0.webp',
      parahead: 'Perfect Thats Me Typ..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/aatm-nirbhar-sweatshirt-black/0.webp',
      parahead: 'Aatm Nirbhar Sweatsh..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Trending',
      Size: 'XL'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/looser-sarcastic-statement-graphic-printed-sweatshirt-black/0.webp',
      parahead: 'Looser Sarcastic Sta..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XXL'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/just-do-it-graphic-printed-regular-fit-sweatshirt-black/0.webp',
      parahead: 'Just Do It Graphic P..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'S'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/raw-real-unfiltered-sweatshirt-navyblue/0.webp',
      parahead: 'Raw Real Unfiltered..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Navyblue',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/dragonballz-graphic-printed-anime-sweatshirt-black/0.webp',
      parahead: 'Dragonballz Graphic..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/joker-sweatshirt-white/0.webp',
      parahead: 'Joker Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/stop-saying-tomorrow-sweatshirt-black/0.webp',
      parahead: 'Stop Saying Tomorrow..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Gym',
      Size: 'XXL' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kothi-bangle-wale-sweatshirt-navyblue/0.webp',
      parahead: 'Kothi Bangle Wale Sw..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/your-design-here-sweatshirt-black/0.webp',
      parahead: 'Your Design Here Swe..',
      strikeVal: '849',
      OrgVal: '699',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rose-sweatshirt-black/0.webp',
      parahead: 'Rose Sweatshirt',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/yes-iam-different-sweatshirt-navyblue/0.webp',
      parahead: 'Yes Iam Different Sw..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Navyblue',
      Theme: 'Socialmedia',
      Size: 'XL'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wakanda-forever-graphic-printed-design-sweatshirt-white/0.webp',
      parahead: 'Wakanda Forever Grap..',
      strikeVal: '899',
      OrgVal: '749',
      Color: 'White',
      Theme: 'Gaming',
      Size: 'XXL'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hacked-anonymous-sweatshirt-black/0.webp',
      parahead: 'Hacked Anonymous Swe..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/the-boys-premium-sweatshirt-white/0.webp',
      parahead: 'The Boys Premium Swe..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Trending',
      Size: 'M'
    },
    {
      id: 22,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/we-are-all-mad-here-regular-fit-sweatshirt-black/0.webp',
      parahead: 'We Are All Mad Here..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 23,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/how-about-no-sweatshirt-white/0.webp',
      parahead: 'How About No Sweatsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'white',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 24,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/gara-eye-naruto-sweatshirt-navyblue/0.webp',
      parahead: 'Gara Eye Naruto Swea..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'XXL'
    },
    {
      id: 25,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/marvel-sweatshirt-black/0.webp',
      parahead: 'Marvel Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 26,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/theres-no-place-like-127-0-0-1-sweatshirt-navyblue/0.webp',
      parahead: 'Theres No Place Like..',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Navyblue',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 27,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/mindset-is-everything-sweatshirt-white/0.webp',
      parahead: 'Mindset Is Everythin..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 28,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/naruto-x-madara-sweatshirt-black/0.webp',
      parahead: 'Naruto X Madara Swea..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 29,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/xxtenction-sweatshirt-red/0.webp',
      parahead: 'Xxtenction Sweatshir..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Music',
      Size: 'XXL'
    },
    {
      id: 30,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/git-sweatshirt-black/0.webp',
      parahead: 'Git Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 31,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/jujutsu-kaisen-sweatshirt-white/0.webp',
      parahead: 'Jujutsu Kaisen Sweat..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 32,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/its-not-a-bug-its-a-feature-sweatshirt-navyblue/0.webp',
      parahead: 'Its Not A Bug Its A..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 33,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-n-roll-sweatshirt-black/0.webp',
      parahead: 'Rock N Roll Sweatshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Music',
      Size: 'XL'
    },
    {
      id: 34,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/coder-noun-sweatshirt-white/0.webp',
      parahead: 'Coder Noun Sweatshir..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 35,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/my-code-works-i-have-no-idea-why-sweatshirt-red/0.webp',
      parahead: 'My Code Works I Have..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 36,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/always-sounds-better-sweatshirt-black/0.webp',
      parahead: 'Always Sounds Better...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Music',
      Size: 'M'
    },
    {
      id: 37,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/developer-sweatshirt-white/0.webp',
      parahead: 'Developer Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 38,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/go-your-own-way-sweatshirt-black/0.webp',
      parahead: 'Go Your Own Way Swea..',
      strikeVal: '779',
      OrgVal: '629',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 39,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-sweatshirt-navyblue/0.webp',
      parahead: 'Rock Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Music',
      Size: 'XXL'
    },
    {
      id: 40,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/toxic-sweatshirt-red/0.webp',
      parahead: 'Toxic Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 41,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-gain-sweatshirt-black/0.webp',
      parahead: 'No Pain No Gain Swea..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 42,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-mode-on-sweatshirt-white/0.webp',
      parahead: 'Code Mode On Sweatsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 43,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kimetsu-no-yaiba-graphic-printed-design-sweatshirt-white/0.webp',
      parahead: 'Kimetsu No Yaiba Gra..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 44,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/things-i-hate-sweatshirt-red/0.webp',
      parahead: 'Things I Hate Sweats..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 45,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/uchiha-itachi-crows-anime-sweatshirt-black/0.webp',
      parahead: 'Uchiha Itachi Crows..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 46,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/deathly-hallows-sweatshirt-navyblue/0.webp',
      parahead: 'Deathly Hallows Swea..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 47,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-super-saiyan-sweatshirt-black/0.webp',
      parahead: 'No Pain No Super Sai..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gym',
      Size: 'L'
    },
    {
      id: 48,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/false-sweatshirt-navyblue/0.webp',
      parahead: 'False Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 49,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/follow-your-dreams-sweatshirt-red/0.webp',
      parahead: 'Follow Your Dreams S..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 50,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wings-of-freedome-attack-on-titan-sweatshirt-black/0.webp',
      parahead: 'Wings Of Freedome At..',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'S'
    },
    {
      id: 51,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/born-to-rule-sweatshirt-white/0.webp',
      parahead: 'Born To Rule Sweatsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 52,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/broken-developer-sweatshirt-navyblue/0.webp',
      parahead: 'Broken Developer Swe..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 53,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-blooded-sweatshirt-black/0.webp',
      parahead: 'Code Blooded Sweatsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 54,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/keep-calm-and-code-on-sweatshirt-navyblue/0.webp',
      parahead: 'Keep Calm And Code..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 55,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/declare-variables-not-war-sweatshirt-red/0.webp',
      parahead: 'Declare Variables No..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 56,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/first-rule-of-programming-sweatshirt-black/0.webp',
      parahead: 'First Rule Of Progra..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 57,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-chest-logo-sweatshirt-black/0.webp',
      parahead: 'Valorant Chest Logo..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 58,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hello-world-sweatshirt-white/0.webp',
      parahead: 'Hello World Sweatshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 59,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/believe-sweatshirt-black/0.webp',
      parahead: 'Believe Sweatshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'M'
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    Theme:[],
    Color:[],
    Size:[],
  });
  const itemsPerPage = 28;

  const [filteredItems, setFilteredItems] = useState(displayItems);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const hasNextPage = indexOfLastItem < filteredItems.length;
  const hasprevbtn = currentPage === 1;

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop(); // Scroll to top when next page is clicked
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop(); // Scroll to top when previous page is clicked
  };
  
  const handleFilterChange = (category, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const handleApplyFilters = () => {
      const filteredItems = displayItems.filter(item=>{
        const isThemeSelected = selectedFilters.Theme.length === 0 || selectedFilters.Theme.includes(item.Theme);
        const isColorSelected = selectedFilters.Color.length === 0 || selectedFilters.Color.includes(item.Color);
        const isSizeSelected = selectedFilters.Size.length === 0 || selectedFilters.Size.includes(item.Size);
    
        return isThemeSelected && isColorSelected && isSizeSelected;
      });
    setFilteredItems(filteredItems);  
    setCurrentPage(1);
    scrollToTop();
  };
  const clearbutton=()=>{
    setSelectedFilters({Theme:[],Color:[],Size:[]});
    setCurrentPage(1);
  }
  return (
    <>
    <div>
    <div className="SweatShop" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="filter">
          <div className="filter-head">
          <h1>Filters</h1>
          <img src={require('../images/filter.png')} alt=""  width={50} height={50} />
          </div>
          <hr />

        <form onSubmit={(e) => { e.preventDefault(); handleApplyFilters(); }}>
          <h3 className='head-form'>Theme</h3> 
          <input type="checkbox" id="Anime" name="Theme" value="Anime" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Anime">Anime&nbsp;</label><br/>
          <input type="checkbox" id="Coding" name="Theme" value="Coding" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Coding">Coding&nbsp;</label><br/>
          <input type="checkbox" id="Combo" name="Theme" value="Combo" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Combo">Combo&nbsp;</label><br/>
          <input type="checkbox" id="Customized" name="Theme" value="Customized" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Customized">Customized&nbsp;</label><br/>
          <input type="checkbox" id="Gaming" name="Theme" value="Gaming" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Gaming">Gaming&nbsp;</label><br/>
          <input type="checkbox" id="Gym" name="Theme" value="Gym" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Gym">Gym&nbsp;</label><br/>
          <input type="checkbox" id="Hacking" name="Theme" value="Hacking" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Hacking">Hacking&nbsp;</label><br/>
          <input type="checkbox" id="Lifestyle" name="Theme" value="Lifestyle" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Lifestyle">Lifestyle&nbsp;</label><br/>
          <input type="checkbox" id="Motivation" name="Theme" value="Motivation" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Motivation">Motivation&nbsp;</label><br/>
          <input type="checkbox" id="Music" name="Theme" value="Music" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Music">Music&nbsp;</label><br/>
          <input type="checkbox" id="Plain" name="Theme" value="Plain" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Plain">Plain&nbsp;</label><br/>
          <input type="checkbox" id="Socialmedia" name="Theme" value="Socialmedia" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Socialmedia">Socialmedia&nbsp;</label><br/>
          <input type="checkbox" id="Trending" name="Theme" value="Trending" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Trending">Trending&nbsp;</label><br/>

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>
            <input type="checkbox" id="Navyblue" name="Color" value="Navyblue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Navyblue">Navyblue&nbsp;</label><br/>
            <input type="checkbox" id="Red" name="Color" value="Red" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Red">Red&nbsp;</label><br/>
            <input type="checkbox" id="White" name="Color" value="White" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="White">White&nbsp;</label><br/>

            <h3 className='head-form'>Size</h3>
              <input type="checkbox" id="S" name="Size" value="S" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="S">S&nbsp;</label><br/>
              <input type="checkbox" id="M" name="Size" value="M" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="M">M&nbsp;</label><br/>
              <input type="checkbox" id="L" name="Size" value="L" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="L">L&nbsp;</label><br/>
              <input type="checkbox" id="XL" name="Size" value="XL" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="XL">XL&nbsp;</label><br/>
              <input type="checkbox" id="XXL" name="Size" value="XXL" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="XXL">XXL&nbsp;</label><br/>
              <br />
              <button className='filter-btn' type='submit'>Apply Filters</button>
              <button className='filter-btn' onClick={clearbutton}>Clear Filters</button>
        </form>

        </div>
        <div className="sweat-content">
          <div className="sweat-head">
            <h1 className='sweatCollection-head'>Explore Our Sweatshirts Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Stay comfortable and stylish with the wide selection of sweatshirts available at hriteshCodeswear.com. Our sweatshirts are perfect for every occasion, whether you're looking for a casual everyday sweatshirt or something to wear to the gym. We have a variety of styles to choose from, including coding sweatshirts, anime sweatshirts, and casual sweatshirts for everyday wear. All of our sweatshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect sweatshirt for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='sweatnofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='sweatnomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="sweat-img">
            {currentItems.map((item,index)=>(
              <Link to={`/sweat/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Sweatshirt</p>
                <p className='para-head'>{item.parahead}</p>
                <p className='amt-head'><strike className='head6'>&#8377;{item.strikeVal}</strike>&nbsp;&nbsp; &#8377;{item.OrgVal}</p>
                <div className="size-container">
                  <div className="s1">S</div>
                  <div className="s1">M</div>
                  <div className="s1">L</div>
                  <div className="s1">XL</div>
                  <div className="s1">XXL</div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
      <div className="sweatpagination">
        <button onClick={handlePreviousPage} disabled={hasprevbtn} className={hasprevbtn?'prevbtn  disabled':'prevbtn'}> Previous </button>
        <button onClick={handleNextPage} disabled={!hasNextPage} className={hasNextPage?'nextbtn':'nextbtn disabled'}> Next </button>
      </div>
      </>
      )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Sweatshirts