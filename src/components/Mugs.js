import React,{useState} from 'react'
import "./Mdetails.css"
import { Link } from 'react-router-dom';
const Mugs = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Demon-Slayer-Kimetsu-No-Yaiba-standard-mug-black/0.webp',
      parahead: 'Demon Slayer Kimetsu...',
      strikeVal: '499',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/your-design-here-mug-white/0.webp',
      parahead: 'Customized Mug',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/titan-shifters-attack-on-titan-standard-mug-black/0.webp',
      parahead: 'Titan Shifters Attac..',
      strikeVal: '699',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/silent-voice-standard-mug-white/0.webp',
      parahead: 'Silent Voice Standar..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-cute-anime-friends-standard-mug-black/0.webp',
      parahead: 'Chibi Cute Anime Fri..',
      strikeVal: '699',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aot-eren-yeager-standard-mug-black/0.webp',
      parahead: 'Aot Eren Yeager Stan..',
      strikeVal: '599',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-cute-chibi-characters-standard-mug-black/0.webp',
      parahead: 'Attack On Titan Cute..',
      strikeVal: '300',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-s3-standard-mug-black/0.webp',
      parahead: 'Attack On Titan S3 S..',
      strikeVal: '500',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-standard-mug-black/0.webp',
      parahead: 'Attack On Titan Stan..',
      strikeVal: '490',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Blue-Lock-nagi-standard-mug-black/0.webp',
      parahead: 'Blue Lock Nagi Stand..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Tokyo-Revengers-standard-mug-black/0.webp',
      parahead: 'Tokyo Revengers Stan..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/annie-leonhart-attack-on-titan-standard-mug-black/0.webp',
      parahead: 'Annie Leonhart Attac..',
      strikeVal: '499',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bts-kpop-standard-mug-black/0.webp',
      parahead: 'Bts Kpop Standard Mu..',
      strikeVal: '350',
      OrgVal: '299',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-adorable-cute-anime-girl-mug-white/0.webp',
      parahead: 'Chibi Adorable Cute..',
      strikeVal: '455',
      OrgVal: '250',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/code-blooded-mug-red/0.webp',
      parahead: 'Code Blooded Ceramic..',
      strikeVal: '599',
      OrgVal: '499',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/marvel-comics-mug-white/0.webp',
      parahead: 'Marvel Comics Mug',
      strikeVal: '355',
      OrgVal: '299',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/minion-mug-white/0.webp',
      parahead: 'Minion Mug',
      strikeVal: '255',
      OrgVal: '150',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/python-no-problem-mug-white/0.webp',
      parahead: 'Python No Problem Mu..',
      strikeVal: '458',
      OrgVal: '350',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/she-hulk-marvel-mug-white/0.webp',
      parahead: 'She Hulk Marvel Mug',
      strikeVal: '450',
      OrgVal: '250',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aws-mug-white/0.webp',
      parahead: 'Aws Mug',
      strikeVal: '450',
      OrgVal: '400',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/batman-marvel-mug-white/0.webp',
      parahead: 'Batman Marvel Mug',
      strikeVal: '300',
      OrgVal: '259',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/youtube-mug-white/0.webp',
      parahead: 'Youtube Mug',
      strikeVal: '450',
      OrgVal: '350',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 22,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/captain-marvel-mug-white/0.webp',
      parahead: 'Captain Marvel Mug',
      strikeVal: '599',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Anime',
      Size: 'Standard'
    },
    {
      id: 23,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/01000011-mug-red_inner/0.webp',
      parahead: '01000011 Ceramic Cof..',
      strikeVal: '450',
      OrgVal: '350',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 24,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bro-code-mug-red/0.webp',
      parahead: 'Bro Code Ceramic Mug..',
      strikeVal: '450',
      OrgVal: '350',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 25,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/caution-i-curse-when-mug-red/0.webp',
      parahead: 'Caution I Curse When..',
      strikeVal: '350',
      OrgVal: '255',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 26,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/coder-mug-red/0.webp',
      parahead: 'Coder Ceramic Coffee..',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 27,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/declare-variables-not-war-mug-red/0.webp',
      parahead: 'Declare Variables No..',
      strikeVal: '600',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 28,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/display-noun-mug-red/0.webp',
      parahead: 'Display Noun Ceramic..',
      strikeVal: '499',
      OrgVal: '399',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 29,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/eat-sleep-code-repeat-mug-red/0.webp',
      parahead: 'Eat Sleep Code Repea..',
      strikeVal: '350',
      OrgVal: '299',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 30,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/false-mug-red/0.webp',
      parahead: 'False Ceramic Mug..',
      strikeVal: '399',
      OrgVal: '250',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 31,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/hello-world-mug-red/0.webp',
      parahead: 'Hello World Ceramic..',
      strikeVal: '450',
      OrgVal: '399',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 32,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-am-offline-mug-red/0.webp',
      parahead: 'I Am Offline Ceramic..',
      strikeVal: '400',
      OrgVal: '300',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 33,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-hate-programming-mug-red/0.webp',
      parahead: 'I Hate Programming..',
      strikeVal: '450',
      OrgVal: '299',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 34,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-need-a-br-mug-red/0.webp',
      parahead: 'I Need A Break Ceram..',
      strikeVal: '399',
      OrgVal: '350',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
    },
    {
      id: 35,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/if-brain-empty-mug-red/0.webp',
      parahead: 'If Brain Empty Ceram..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'White',
      Theme: 'Coding',
      Size: 'Standard'
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
    <div className="MugsShop" style={{color: props.mode==='light'?'black':'white'}}>
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
     

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>
            <input type="checkbox" id="White" name="Color" value="White" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="White">White&nbsp;</label><br/>

            <h3 className='head-form'>Size</h3>
              <input type="checkbox" id="Standard" name="Size" value="Standard" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="Standard">Standard&nbsp;</label><br/>
              <br />
              <button className='filter-btn' type='submit'>Apply Filters</button>
              <button className='filter-btn' onClick={clearbutton}>Clear Filters</button>
        </form>

        </div>
        <div className="mugs-content">
          <div className="mugs-head">
            <h1 className='mugsCollection-head'>Explore Our Mugs Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Stay hydrated and show off your personality with the wide selection of mugs available at hriteshCodeswear.com. Our mugs are perfect for every interest, including coding mugs for tech enthusiasts, anime mugs, and casual mugs for everyday use. All of our mugs are made with high-quality materials and are designed to be durable and long-lasting. Shop now and find the perfect mug for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='mugsnofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='mugsnomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="mugs-img">
            {currentItems.map((item,index)=>(
              <Link to={`/mugs/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Mug</p>
                <p className='para-head'>{item.parahead}</p>
                <p className='amt-head'><strike className='head6'>&#8377;{item.strikeVal}</strike>&nbsp;&nbsp; &#8377;{item.OrgVal}</p>
                <div className="size-container">
                  <div className="s1">Standard</div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
      <div className="mugspagination">
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

export default Mugs