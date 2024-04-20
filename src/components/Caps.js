import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Cdetails.css"
const Caps = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/git-cap-black/0.webp',
      parahead: 'Git Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/c-cap-black/0.webp',
      parahead: 'C Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/css-cap-black/0.webp',
      parahead: 'Css Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/html-cap-black/0.webp',
      parahead: 'Html Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/javascript-cap-black/0.webp',
      parahead: 'Javascript Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/mongodb-cap-black/0.webp',
      parahead: 'Mongodb Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/nodejs-cap-black/0.webp',
      parahead: 'Nodejs Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/react-cap-black/0.webp',
      parahead: 'React Cap',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
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
    <div className="CapsShop" style={{color: props.mode==='light'?'black':'white'}}>
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
              <input type="checkbox" id="L" name="Size" value="L" className='largerchk' onChange={(e) => handleFilterChange('Size', e.target.value)}/>
              <label htmlFor="L">L&nbsp;</label><br/>
              <br />
              <button className='filter-btn' type='submit'>Apply Filters</button>
              <button className='filter-btn' onClick={clearbutton}>Clear Filters</button>
        </form>

        </div>
        <div className="caps-content">
          <div className="caps-head">
            <h1 className='capsCollection-head'>Explore Our Caps Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='capsnofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='capsnomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="caps-img">
            {currentItems.map((item,index)=>(
              <Link to={`/caps/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
            <div className="img-container"  key={item.id} style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
              <div className="img">
                <img src={item.image} alt="" width={195} height={295}/>
              </div>
              <div className="content">
                <p className='grey-head'>Cap</p>
                <p className='para-head'>{item.parahead}</p>
                <p className='amt-head'><strike className='head6'>&#8377;{item.strikeVal}</strike>&nbsp;&nbsp; &#8377;{item.OrgVal}</p>
                <div className="size-container">
                  <div className="s1">L</div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
      <div className="capspagination">
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

export default Caps
