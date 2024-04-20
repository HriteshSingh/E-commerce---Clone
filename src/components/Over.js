import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Odetails.css"
const Over = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 't11.webp',
      parahead: 'Knock Out Sarcasm De..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 1,
      image: 't12.webp',
      parahead: 'Donald Duck Premium..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 2,
      image: 't13.webp',
      parahead: 'Courage The Cowardly..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 3,
      image: 't14.webp',
      parahead: 'Anime Design Regular..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 4,
      image: 't5.webp',
      parahead: 'Work Hard Dream Big..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 5,
      image: 't8.webp',
      parahead: 'Sunnies Today Dog Ch..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 6,
      image: 't9.webp',
      parahead: 'Simpsons Designs Tsh..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 7,
      image: 't10.webp',
      parahead: 'Ryomen Sukuna Anime',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 8,
      image: 't15.webp',
      parahead: 'Wakanda Forever Grap..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L' 
    },
    {
      id: 9,
      image: 't25.webp',
      parahead: 'V Is For Valorant Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 10,
      image: 't27.webp',
      parahead: 'Valorant Chest Logo..',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 11,
      image: 't29.webp',
      parahead: 'Hung Over Graphic Pr..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 12,
      image: 't33.webp',
      parahead: 'Just Do It Graphic P..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 13,
      image: 't38.webp',
      parahead: 'Social Media Like Co...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 14,
      image: 't39.webp',
      parahead: 'Dragonballz Graphic...',
      strikeVal: '779',
      OrgVal: '629',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 15,
      image: 't43.webp',
      parahead: 'Kothi Bangle Wale Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 16,
      image: 't44.webp',
      parahead: 'Rose Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 17,
      image: 't45.webp',
      parahead: 'Yes Iam Different Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 18,
      image: 't46.webp',
      parahead: 'Stop Saying Tomorrow..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 19,
      image: 't47.webp',
      parahead: 'We Are All Mad Here..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 20,
      image: 't48.webp',
      parahead: 'Raw Real Unfiltered..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 21,
      image: 't50.webp',
      parahead: 'Marvel Logo Printed..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 22,
      image: 't51.webp',
      parahead: 'Plain Tshirt',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 23,
      image: 't52.webp',
      parahead: 'Pikachu Pokemon Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 24,
      image: 't53.webp',
      parahead: 'Gamer Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 25,
      image: 't57.webp',
      parahead: 'Bulls 23 Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 26,
      image: 't59.webp',
      parahead: 'Always Sounds Better..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 27,
      image: 't60.webp',
      parahead: 'The Boys Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 28,
      image: 't62.webp',
      parahead: 'Mindset Is Everythin..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 29,
      image: 't64.webp',
      parahead: 'Naruto Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 30,
      image: 't65.webp',
      parahead: 'Include Awesome H Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 31,
      image: 't66.webp',
      parahead: 'How About No Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 32,
      image: 't68.webp',
      parahead: 'Where Words Fail Mus..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 33,
      image: 't69.webp',
      parahead: 'Code Blooded Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 34,
      image: 't70.webp',
      parahead: 'Goku Premium Anime..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 35,
      image: 't73.webp',
      parahead: 'Hacked Anonymous',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 36,
      image: 't74.webp',
      parahead: 'Xxtenction Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 37,
      image: 't76.webp',
      parahead: 'Jujutsu Kaisen Tshir..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 38,
      image: 't79.webp',
      parahead: 'Toxic Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 39,
      image: 't84.webp',
      parahead: 'Meta Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 40,
      image: 't88.webp',
      parahead: 'Dragon Head Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 41,
      image: 't89.webp',
      parahead: 'Friends Tshirt',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 42,
      image: 't92.webp',
      parahead: 'Broken Developer Tsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 43,
      image: 't95.webp',
      parahead: 'No Pain No Gain..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 44,
      image: 't96.webp',
      parahead: 'Instagram Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 45,
      image: 't98.webp',
      parahead: 'Light Yagami Death N..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 46,
      image: 't100.webp',
      parahead: 'Maang Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 47,
      image: 't102.webp',
      parahead: 'Uchiha Itachi Crows..',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
      id: 48,
      image: 't108.webp',
      parahead: 'Hello World Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 49,
      image: 't110.webp',
      parahead: 'Theres No Place Like..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
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
    <div className="OvertshirtShop" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="filter">
          <div className="filter-head">
          <h1>Filters</h1>
          <img src={require('../images/filter.png')} alt=""  width={50} height={50} />
          </div>
          <hr />

        <form onSubmit={(e) => { e.preventDefault(); handleApplyFilters(); }}>
          <h3 className='head-form'>Theme</h3> 
          <input type="checkbox" id="Lifestyle" name="Theme" value="Lifestyle" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Lifestyle">Lifestyle&nbsp;</label><br/>

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>
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
        <div className="Over-content">
          <div className="Over-head">
            <h1 className='OverCollection-head'>Explore Our Oversizedtshirts Tshirts Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Welcome to hriteshCodeswear.com, your one-stop shop for stylish and unique Oversizedtshirts tshirts. Buy Oversizedtshirts T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our Oversizedtshirts tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='errorimg' src={require('../images/error.png')} alt=""  width={220}/>
            <p className='nopara'>No matching items found for the selected filters!!!!</p>
           </>
           ):(
            <>
          <div className="Over-img">
            {currentItems.map((item,index)=>(
              <Link to={`/over/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={require(`../images1/tshirt/${item.image}`)} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Tshirt</p>
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
      <div className="Over-pagination">
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

export default Over
