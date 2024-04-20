import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Hdetails.css"
const Hoodies = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-single-color-hoodie-navyblue/0.webp',
      parahead: 'Pack Of Three Plain..',
      strikeVal: '1749',
      OrgVal: '1599',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'S'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-five-plain-hoodie-bottlegreen/0.webp',
      parahead: 'Pack Of Five Plain H..',
      strikeVal: '2749',
      OrgVal: '2599',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'M'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/bad-boy-mens-typography-printed-hoodie-bottlegreen/0.webp',
      parahead: 'Bad Boy Mens Typogra..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hung-over-graphic-printed-sarcasm-hoodie-black/0.webp',
      parahead: 'Hung Over Graphic Pr..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'XL'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/tu-tera-dekh-sarcasm-typography-printed-hoodie-white/0.webp',
      parahead: 'Tu Tera Dekh Sarcasm..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wakanda-forever-graphic-printed-design-hoodie-maroon/0.webp',
      parahead: 'Wakanda Forever Grap..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-hoodie-black/0.webp',
      parahead: 'Valorant Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-chest-logo-hoodie-black/0.webp',
      parahead: 'Valorant Chest Logo..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-logo-printed-hoodie-black/0.webp',
      parahead: 'Marvel Logo Printed..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/your-design-here-hoodie-black/0.webp',
      parahead: 'Your Design Here Hoo..',
      strikeVal: '1149',
      OrgVal: '999',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-am-the-hunter-valorant-hoodie-black/0.webp',
      parahead: 'I Am The Hunter Valo..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-regularfit-hoodie-black/0.webp',
      parahead: 'Breaking Code Regula..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/aatm-nirbhar-hoodie-black/0.webp',
      parahead: 'Aatm Nirbhar Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'L'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/think-big-graphic-printed-hoodie-black/0.webp',
      parahead: 'Think Big Graphic Pr..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/swag-dekh-sarcastic-graphic-printed-hoodie-black/0.webp',
      parahead: 'Swag Dekh Sarcastic..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/perfect-thats-me-typography-hoodie-black/0.webp',
      parahead: 'Perfect Thats Me Typ..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/looser-sarcastic-statement-graphic-printed-hoodie-black/0.webp',
      parahead: 'Looser Sarcastic Sta..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Customized',
      Size: 'M'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-have-3-moods-hoodie-maroon/0.webp',
      parahead: 'I Have 3 Moods Hoodi..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-regular-fit-hoodie-bottlegreen/0.webp',
      parahead: 'Just Do It Graphic P..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/social-media-like-comment-share-graphic-printed-hoodie-navyblue/0.webp',
      parahead: 'Social Media Like Co..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-artist-music-graphic-regular-fit-hoodie-white/0.webp',
      parahead: 'We Are All Artist Mu..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Music',
      Size: 'S'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/dragonballz-hoodie-black/0.webp',
      parahead: 'Dragonballz Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 22,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/joker-hoodie-pink/0.webp',
      parahead: 'Joker Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Pink',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 23,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kothi-bangle-wale-hoodie-white/0.webp',
      parahead: 'Kothi Bangle Wale Ho..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 24,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/yes-iam-different-hoodie-bottlegreen/0.webp',
      parahead: 'Yes Iam Different Ho..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Customized',
      Size: 'XXL'
    },
    {
      id: 25,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-hoodie-black/0.webp',
      parahead: 'Pack Of Three Plain..',
      strikeVal: '1694',
      OrgVal: '1499',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'S'
    },
    {
      id: 26,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kimetsu-no-yaiba-graphic-printed-design-hoodie-maroon/0.webp',
      parahead: 'Kimetsu No Yaiba Gra..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 27,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/rose-hoodie-black/0.webp',
      parahead: 'Rose Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 28,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/stop-saying-tomorrow-hoodie-white/0.webp',
      parahead: 'Stop Saying Tomorrow..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 29,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-chest-logo-hoodie-black/0.webp',
      parahead: 'Breaking Code Chest..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 30,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/never-mind-typography-printed-hoodie-black/0.webp',
      parahead: 'Never Mind Typograph..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'S'
    },
    {
      id: 31,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/raw-real-unfiltered-hoodie-black/0.webp',
      parahead: 'Raw Real Unfiltered..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Customized',
      Size: 'M'
    },
    {
      id: 32,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-more-rep-hoodie-white/0.webp',
      parahead: 'One More Rep Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Gym',
      Size: 'L'
    },
    {
      id: 33,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pikachu-pokemon-hoodie-maroon/0.webp',
      parahead: 'Pikachu Pokemon Ho..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Red',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
      id: 34,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/no-pain-no-super-saiyan-hoodie-navyblue/0.webp',
      parahead: 'No Pain No Super..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Gym',
      Size: 'XXL'
    },
    {
      id: 35,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-pirate-graphic-printed-design-hoodie-navyblue/0.webp',
      parahead: 'One Piece Pirate Gra..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 36,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/mindset-is-everything-hoodie-white/0.webp',
      parahead: 'Mindset Is Everythin..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 37,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hacked-anonymous-hoodie-black/0.webp',
      parahead: 'Hacked Anonymous H..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'L'
    },
    {
      id: 38,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/avengers-hoodie-red/0.webp',
      parahead: 'Avengers Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Red',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 39,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/xxtenction-hoodie-white/0.webp',
      parahead: 'Xxtenction Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Music',
      Size: 'XXL'
    },
    {
      id: 40,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-hoodie-maroon/0.webp',
      parahead: 'One Piece Hoodie',
      strikeVal: '949',
      OrgVal: '649',
      Color: 'Red',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 41,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/cool-gym-hoodie-lavender/0.webp',
      parahead: 'Cool Gym Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Lavender',
      Theme: 'Gym',
      Size: 'M'
    },
    {
      id: 42,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/scooby-doo-hoodie-maroon/0.webp',
      parahead: 'Scooby Doo Hoodie',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 43,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/coder-noun-hoodie-pink/0.webp',
      parahead: 'Coder Noun Hoodie',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Pink',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 44,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-mad-here-regular-fit-hoodie-lavender/0.webp',
      parahead: 'We Are All Mad Here..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 45,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/friends-hoodie-black/0.webp',
      parahead: 'Friends Hoodie',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'S'
    },
    {
      id: 46,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/chrome-dino-offline-hoodie-navyblue/0.webp',
      parahead: 'Chrome Dino Offline..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 47,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wings-of-freedom-attack-on-titan-hoodie-bottlegreen/0.webp',
      parahead: 'Wings Of Freedom Att..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 48,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/first-rule-of-programming-hoodie-black/0.webp',
      parahead: 'First Rule Of Progra..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 49,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/spacex-hoodie-skyblue/0.webp',
      parahead: 'Spacex Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Skyblue',
      Theme: 'Gaming',
      Size: 'XXL'
    },
    {
      id: 50,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/gamer-hoodie-navyblue/0.webp',
      parahead: 'Gamer Hoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 51,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-hoodie-black/0.webp',
      parahead: 'Marvel Hoodie',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 52,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/naruto-hoodie-navyblue/0.webp',
      parahead: 'Naruto Hoodie',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'L'
    },
    {
      id: 53,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marshmallow-hoodie-white/0.webp',
      parahead: 'Marshmallow Hoodie',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 54,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/The-boys-premium-hoodie-bottlegreen/0.webp',
      parahead: 'The Boys Premium Hoo..',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 55,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/squat-bench-deadlift-hoodie-maroon/0.webp',
      parahead: 'Squat Bench Deadlift..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Gym',
      Size: 'S'
    },
    {
      id: 56,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-coffee-repeat-hoodie-lavender/0.webp',
      parahead: 'Code Coffee Repeat..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Lavender',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 57,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-mode-on-hoodie-red/0.webp',
      parahead: 'Code Mode On Hoo..',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 58,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hackerman-hoodie-bottlegreen/0.webp',
      parahead: 'Hackerman Hoodie',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Hacking',
      Size: 'XL'
    },
    {
      id: 59,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-hoodie-black/0.webp',
      parahead: 'Just Do It Graphic P...',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'XXL'
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
    <div className="HoodietshirtShop" style={{color: props.mode==='light'?'black':'white'}}>
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

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>
            <input type="checkbox" id="Bottlegreen" name="Color" value="Bottlegreen" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Bottlegreen">Bottlegreen&nbsp;</label><br/>
            <input type="checkbox" id="Lavender" name="Color" value="Lavender" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Lavender">Lavender&nbsp;</label><br/>
            <input type="checkbox" id="Maroon" name="Color" value="Maroon" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Maroon">Maroon&nbsp;</label><br/>
            <input type="checkbox" id="Navyblue" name="Color" value="Navyblue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Navyblue">Navyblue&nbsp;</label><br/>
            <input type="checkbox" id="Pink" name="Color" value="Pink" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Pink">Pink&nbsp;</label><br/>
            <input type="checkbox" id="Red" name="Color" value="Red" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Red">Red&nbsp;</label><br/>
            <input type="checkbox" id="Skyblue" name="Color" value="Skyblue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Skyblue">Skyblue&nbsp;</label><br/>
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
        <div className="hoodie-content">
          <div className="hoodie-head">
            <h1 className='hoodieCollection-head'>Explore Our Hoodies Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Stay warm and stylish with the wide selection of hoodies available at hriteshCodeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='hoodienofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='hoodienomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="hoodie-img">
            {currentItems.map((item,index)=>(
              <Link to={`/hoodie/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Hoodie</p>
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
      <div className="Hoodie-pagination">
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

export default Hoodies
