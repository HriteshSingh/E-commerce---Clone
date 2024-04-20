import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Modetails.css"
const Mousepads = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/hello-world-coding-mousepad-colorful/0.webp',
      parahead: 'Hello World Coding M..',
      strikeVal: '299',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/customized-mousepad-colorful/0.webp',
      parahead: 'Customized Mousepad',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'White',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cyber-city-mousepad-colorful/0.webp',
      parahead: 'Cyber City Mousepad',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/demon-slayer-all-hashira-members-mousepad-colorful/0.webp',
      parahead: 'Demon Slayer All Has..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/neon-mountains-mousepad-colorful/0.webp',
      parahead: 'Neon Mountains Mouse..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/be-the-type-of-person-you-want-to-meet-mousepad-colorful/0.webp',
      parahead: 'Be The Type Of Perso..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'White',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/coding-code-rain-mousepad-colorful/0.webp',
      parahead: 'Coding Code Rain Mou..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/data-code-mousepad-colorful/0.webp',
      parahead: 'Data Code Mousepad',
      strikeVal: '299',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eat-sleep-code-repeat-coding-mousepad-colorful/0.webp',
      parahead: 'Eat Sleep Code Repea..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/python-coding-mousepad-colorful/0.webp',
      parahead: 'Python Coding Mousep..',
      strikeVal: '299',
      OrgVal: '260',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/honeycomb-hexagon-mousepad-colorful/0.webp',
      parahead: 'Honeycomb Hexagon..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/the-world-of-windows-mousepad-colorful/0.webp',
      parahead: 'The World Of Windows..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/think-twice-code-once-mousepad-colorful/0.webp',
      parahead: 'Think Twice Code Onc...',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'Colorful',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/vs-code-coding-mousepad-colorful/0.webp',
      parahead: 'Vs Code Coding Mouse..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/windows-mousepad-colorful/0.webp',
      parahead: 'Windows Mousepad',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cloud-coding-mousepad-colorful/0.webp',
      parahead: 'Cloud Coding Mousepa..',
      strikeVal: '399',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren-the%20attack%20titan-rage-mousepad-colorful/0.webp',
      parahead: 'Eren The Attack Tita..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/ethernal-sharingans-mousepad-colorful/0.webp',
      parahead: 'Ethernal Sharingans..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/denji-standing-on-demon-chainsaw-man-mousepad-colorful/0.webp',
      parahead: 'Denji Standing On De..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'White',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/gojo-sotaru-jujutsu-kisen-mousepad-colorful/0.webp',
      parahead: 'Gojo Sotaru Jujutsu..',
      strikeVal: '249',
      OrgVal: '150',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren%20jeager-attack-on-titan-mousepad-colorful/0.webp',
      parahead: 'Eren Jeager Attack O..',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren%20jeager-the-attack%20titan-levi-mousepad-colorful/0.webp',
      parahead: 'Eren Jeager The Atta..',
      strikeVal: '399',
      OrgVal: '299',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 22,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/goku-mousepad-colorful/0.webp',
      parahead: 'Goku Mousepad',
      strikeVal: '299',
      OrgVal: '250',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 23,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/keisuke-baji-mousepad-colorful/0.webp',
      parahead: 'Keisuke Baji Mousepa..',
      strikeVal: '299',
      OrgVal: '255',
      Color: 'Colorful',
      Theme: 'Anime',
      Size: 'S'
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
    <div className="MouseShop" style={{color: props.mode==='light'?'black':'white'}}>
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
            <input type="checkbox" id="Colorful" name="Color" value="Colorful" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Colorful">Colorful&nbsp;</label><br/>
            <input type="checkbox" id="White" name="Color" value="White" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="White">White&nbsp;</label><br/>

            <h3 className='head-form'>Size</h3>
              <input type="checkbox" id="S" name="Size" value="S" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="S">S&nbsp;</label><br/>
              <br />
              <button className='filter-btn' type='submit'>Apply Filters</button>
              <button className='filter-btn' onClick={clearbutton}>Clear Filters</button>
        </form>

        </div>
        <div className="mouse-content">
          <div className="mouse-head">
            <h1 className='mouseCollection-head'>Explore Our Mousepads Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Enhance your computer setup with the high-quality mousepads available at hriteshCodeswear.com. Our mousepads are perfect for every interest, including coding mousepads, anime mousepads, and casual mousepads for everyday use. All of our mousepads are made with durable materials and are designed to provide a smooth and comfortable surface for your mouse. Shop now and find the perfect mousepad for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='mousenofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='mousenomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="mouse-img">
            {currentItems.map((item,index)=>(
              <Link to={`/mouse/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Mousepad</p>
                <p className='para-head'>{item.parahead}</p>
                <p className='amt-head'><strike className='head6'>&#8377;{item.strikeVal}</strike>&nbsp;&nbsp; &#8377;{item.OrgVal}</p>
                <div className="size-container">
                  <div className="s1">S</div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
      <div className="mousepagination">
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

export default Mousepads
