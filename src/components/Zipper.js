import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Zipperdetails.css"

const Zipper = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gymshark-zipperhoodie-black/0.webp',
      parahead: 'Gymshirt Zipper Hood..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/css-zipperhoodie-black/0.webp',
      parahead: 'Css Zipperhoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/html-zipperhoodie-black/0.webp',
      parahead: 'Html Zipperhoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/java-zipperhoodie-black/0.webp',
      parahead: 'Java Zipperhoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/javascript-zipperhoodie-black/0.webp',
      parahead: 'Javascript Zipperhoo..',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/python-zipperhoodie-black/0.webp',
      parahead: 'Python Zipperhoodie',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/battleground-mobile-india-zipperhoodie-black/0.webp',
      parahead: 'Battleground Mobile..',
      strikeVal: '839',
      OrgVal: '689',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/black-dragons-tokyo-revengers-zipperhoodie-black/0.webp',
      parahead: 'Black Dragons Tokyo..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gara-eye-naruto-zipperhoodie-black/0.webp',
      parahead: 'Gara Eye Naruto Zipp..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/god-of-war-kratos-zipperhoodie-black/0.webp',
      parahead: 'God Of War Kratos Zi..',
      strikeVal: '649',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/akatsuki-jutsu-it-zipperhoodie-black/0.webp',
      parahead: 'Akatsuki Jutsu It Zi..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/hacked-anonymous-zipperhoodie-black/0.webp',
      parahead: 'Hacked Anonymous Zip..',
      strikeVal: '649',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/itachi-uchiha-on-pole-zipperhoodie-black/0.webp',
      parahead: 'Itachi Uchiha On Pol..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/katana-cool-zipperhoodie-black/0.webp',
      parahead: 'Katana Cool Zipperho..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/no-pain-no-super-saiyan-zipperhoodie-black/0.webp',
      parahead: 'No Pain No Super Sai..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/saitama-one-punch-man-i-am-ok-anime-zipperhoodie-black/0.webp',
      parahead: 'Saitama One Punch Ma..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/spacex-zipperhoodie-black/0.webp',
      parahead: 'Spacex Zipperhoodie',
      strikeVal: '849',
      OrgVal: '699',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/the-boys-premium-zipperhoodie-black/0.webp',
      parahead: 'The Boys Premium Zip..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/tokyo-manji-gang-zipperhoodie-black/0.webp',
      parahead: 'Tokyo Manji Gang Zip..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/uchiha-clan-naruto-anime-zipperhoodie-black/0.webp',
      parahead: 'Uchiha Clan Naruto A..',
      strikeVal: '899',
      OrgVal: '749',
      Color: 'Black',
      Theme: 'Black',
      Size: 'XXL'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/vageto-anime-zipperhoodie-black/0.webp',
      parahead: 'Vageto Anime Zipperh..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/wings-of-freedome-attack-on-titan-zipperhoodie-black/0.webp',
      parahead: 'Wings Of Freedome At..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
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
    <div className="ZipperShop" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="filter">
          <div className="filter-head">
          <h1>Filters</h1>
          <img src={require('../images/filter.png')} alt=""  width={50} height={50} />
          </div>
          <hr />

        <form onSubmit={(e) => { e.preventDefault(); handleApplyFilters(); }}>
          <h3 className='head-form'>Theme</h3> 
          <input type="checkbox" id="Coding" name="Theme" value="Coding" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Coding">Coding&nbsp;</label><br/>
          

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>

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
        <div className="zipper-content">
          <div className="zipper-head">
            <h1 className='zipperCollection-head'>Explore Our Zipperhoodies Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Stay warm and stylish with the wide selection of zipper hoodies available at Codeswear.com. Our zipper hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding zipper hoodies, anime zipper hoodies, and casual zipper hoodies for everyday wear. All of our zipper hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect zipper hoodie for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='zippernofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='zippernomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="zipper-img">
            {currentItems.map((item,index)=>(
              <Link to={`/zipper/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Zipperhoodie</p>
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
      <div className="zipperpagination">
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

export default Zipper