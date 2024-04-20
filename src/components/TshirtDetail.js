import React,{useState} from 'react'
import "./Tdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const TshirtDetail = (props) => {
  const {cartData,addToCart} = useCart();
  const [image,setImage] = useState(true);
  const [pincode, setPincode] = useState('');
  const [availability, setAvailability] = useState(null);
  const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
  const displayItems = [
    {
      id: 0,
      image: 't1.webp',
      oriImage: 't1-ori.webp',
      parahead: 'Think Outside The Bo..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 1,
      image: 't2.webp',
      oriImage: 't2-ori.webp',
      parahead: 'Wolverine Design Tsh..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 2,
      image: 't3.webp',
      oriImage: 't3-ori.webp',
      parahead: 'Super Hero Cuttable..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 3,
      image: 't4.webp',
      oriImage: 't4-ori.webp',
      parahead: 'Stay True Design Tsh..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 4,
      image: 't5.webp',
      oriImage: 't5-ori.webp',
      parahead: 'Work Hard Dream Big..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 5,
      image: 't6.webp',
      oriImage: 't6-ori.webp',
      parahead: 'Pack Of Five Plain T...',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '1949',
      OrgVal: '1799',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'XL'
    },
    {
      id: 6,
      image: 't7.webp',
      oriImage: 't7-ori.webp',
      parahead: 'Pack Of Three Plain..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '839',
      OrgVal: '689',
      Color: 'Navyblue',
      Theme: 'Combo',
      Size: 'XL'
    },
    {
      id: 7,
      image: 't8.webp',
      oriImage: 't8-ori.webp',
      parahead: 'Sunnies Today Dog Ch..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 8,
      image: 't9.webp',
      oriImage: 't9-ori.webp',
      parahead: 'Simpsons Designs Tsh..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XXL'
    },
    {
      id: 9,
      image: 't10.webp',
      oriImage: 't10-ori.webp',
      parahead: 'Ryomen Sukuna Anime',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 10,
    image: 't11.webp',
    oriImage: 't11-ori.webp',
    parahead: 'Knock Out Sarcasm De..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '649',
    OrgVal: '499',
    Color: 'Black',
    Theme: 'Anime',
    Size: 'XXL'
  },
  {
    id: 11,
    image: 't12.webp',
    oriImage: 't12-ori.webp',
    parahead: 'Donald Duck Premium..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '649',
    OrgVal: '499',
    Color: 'Black',
    Theme: 'Anime',
    Size: 'S'
  },
  {
    id: 12,
    image: 't13.webp',
    oriImage: 't13-ori.webp',
    parahead: 'Courage The Cowardly..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '749',
    OrgVal: '599',
    Color: 'Black',
    Theme: 'Trending',
    Size: 'L'
  },
  {
    id: 13,
    image: 't14.webp',
    oriImage: 't14-ori.webp',
    parahead: 'Anime Design Regular..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Anime',
    Size: 'S'
  },
  {
    id: 14,
    image: 't15.webp',
    oriImage: 't15-ori.webp',
    parahead: 'Wakanda Forever Grap..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '749',
    OrgVal: '599',
    Color: 'Black',
    Theme: 'Trending',
    Size: 'L' 
  },
  {
    id: 15,
    image: 't16.webp',
    oriImage: 't16-ori.webp',
    parahead: 'Kimetsu No Yaiba Gra..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '799',
    OrgVal: '649',
    Color: 'Navyblue',
    Theme: 'Customized',
    Size: 'M'
  },
  {
    id: 16,
    image: 't17.webp',
    oriImage: 't17-ori.webp',
    parahead: 'Customized Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '849',
    OrgVal: '699',
    Color: 'Blue',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 17,
    image: 't18.webp',
    oriImage: 't18-ori.webp',
    parahead: 'One Piece Pirate Gra',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '799',
    OrgVal: '649',
    Color: 'Bottlegreen',
    Theme: 'Socialmedia',
    Size: 'S'
  },
  {
    id: 18,
    image: 't19.webp',
    oriImage: 't19-ori.webp',
    parahead: 'Face Look Of Devil G..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '799',
    OrgVal: '649',
    Color: 'Maroon',
    Theme: 'Socialmedia',
    Size: 'L'
  },
  {
    id: 19,
    image: 't20.webp',
    oriImage: 't20-ori.webp',
    parahead: 'Bad Boy Mens Typogra..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '899',
    OrgVal: '749',
    Color: 'Bottlegreen',
    Theme: 'Socialmedia',
    Size: 'XL'
  },
  {
    id: 20,
    image: 't21.webp',
    oriImage: 't21-ori.webp',
    parahead: 'Share Prosper Graphi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '749',
    OrgVal: '599',
    Color: 'Maroon',
    Theme: 'Trending',
    Size: 'XXL'
  },
  {
    id: 21,
    image: 't22.webp',
    oriImage: 't22-ori.webp',
    parahead: 'We Are All Artist Mu..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Music',
    Size: 'XXL'
  },
  {
    id: 22,
    image: 't23.webp',
    oriImage: 't23-ori.webp',
    parahead: 'Breaking Code Chest..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 23,
    image: 't24.webp',
    oriImage: 't24-ori.webp',
    parahead: 'Never Mind Typograph..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 24,
    image: 't25.webp',
    oriImage: 't25-ori.webp',
    parahead: 'V Is For Valorant Ts..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Customized',
    Size: 'S'
  },
  {
    id: 25,
    image: 't26.webp',
    oriImage: 't26-ori.webp',
    parahead: 'Valorant Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Customized',
    Size: 'L'
  },
  {
    id: 26,
    image: 't27.webp',
    oriImage: 't27-ori.webp',
    parahead: 'Valorant Chest Logo..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '549',
    OrgVal: '399',
    Color: 'Black',
    Theme: 'Gaming',
    Size: 'M'
  },
  {
    id: 27,
    image: 't28.webp',
    oriImage: 't28-ori.webp',
    parahead: 'Breaking Code Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 28,
    image: 't29.webp',
    oriImage: 't29-ori.webp',
    parahead: 'Hung Over Graphic Pr..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Anime',
    Size: 'XL'
  },
  {
    id: 29,
    image: 't30.webp',
    oriImage: 't30-ori.webp',
    parahead: 'Aatm Nirbhar Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Skyblue',
    Theme: 'Motivation',
    Size: 'XXL'
  },
  {
    id: 30,
    image: 't31.webp',
    oriImage: 't31-ori.webp',
    parahead: 'Loser Sarcastic Stat..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Trending',
    Size: 'S'
  },
  {
    id: 31,
    image: 't32.webp',
    oriImage: 't32-ori.webp',
    parahead: 'Swag Dekh Sarcastic..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Socialmedia',
    Size: 'M'
  },
  {
    id: 32,
    image: 't33.webp',
    oriImage: 't33-ori.webp',
    parahead: 'Just Do It Graphic P..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Lifestyle',
    Size: 'L'
  },
  {
    id: 33,
    image: 't34.webp',
    oriImage: 't34-ori.webp',
    parahead: 'Think Big Graphic Pr...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Red',
    Theme: 'Motivation',
    Size: 'XL'
  },
  {
    id: 34,
    image: 't35.webp',
    oriImage: 't35-ori.webp',
    parahead: 'I Am The Hunter Valo...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Gym',
    Size: 'XXL'
  },
  {
    id: 35,
    image: 't36.webp',
    oriImage: 't36-ori.webp',
    parahead: 'I Have 3 Moods Tshir...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Hacking',
    Size: 'S'
  },
  {
    id: 36,
    image: 't37.webp',
    oriImage: 't37-ori.webp',
    parahead: 'Just Do It Graphic P...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Motivation',
    Size: 'M'
  },
  {
    id: 37,
    image: 't38.webp',
    oriImage: 't38-ori.webp',
    parahead: 'Social Media Like Co...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Socialmedia',
    Size: 'L'
  },
  {
    id: 38,
    image: 't39.webp',
    oriImage: 't39-ori.webp',
    parahead: 'Dragonballz Graphic...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '779',
    OrgVal: '629',
    Color: 'Black',
    Theme: 'Gaming',
    Size: 'XL'
  },
  {
    id: 39,
    image: 't40.webp',
    oriImage: 't40-ori.webp',
    parahead: 'Marvel Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Trending',
    Size: 'XXL'
  },
  {
    id: 40,
    image: 't41.webp',
    oriImage: 't41-ori.webp',
    parahead: 'Joker Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Pink',
    Theme: 'Customized',
    Size: 'S'
  },
  {
    id: 41,
    image: 't42.webp',
    oriImage: 't42-ori.webp',
    parahead: 'Pack Of Three Plain ...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '949',
    OrgVal: '799',
    Color: 'Bottlegreen',
    Theme: 'Combo',
    Size: 'M'
  },
  {
    id: 42,
    image: 't43.webp',
    oriImage: 't43-ori.webp',
    parahead: 'Kothi Bangle Wale Ts..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Trending',
    Size: 'L'
  },
  {
    id: 43,
    image: 't44.webp',
    oriImage: 't44-ori.webp',
    parahead: 'Rose Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Anime',
    Size: 'XL'
  },
  {
    id: 44,
    image: 't45.webp',
    oriImage: 't45-ori.webp',
    parahead: 'Yes Iam Different Ts..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Lifestyle',
    Size: 'XXL'
  },
  {
    id: 45,
    image: 't46.webp',
    oriImage: 't46-ori.webp',
    parahead: 'Stop Saying Tomorrow..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 46,
    image: 't47.webp',
    oriImage: 't47-ori.webp',
    parahead: 'We Are All Mad Here..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Hacking',
    Size: 'S'
  },
  {
    id: 47,
    image: 't48.webp',
    oriImage: 't48-ori.webp',
    parahead: 'Raw Real Unfiltered..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Gym',
    Size: 'M'
  },
  {
    id: 48,
    image: 't49.webp',
    oriImage: 't49-ori.webp',
    parahead: 'One More Rep Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Gym',
    Size: 'L'
  },
  {
    id: 49,
    image: 't50.webp',
    oriImage: 't50-ori.webp',
    parahead: 'Marvel Logo Printed..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Socialmedia',
    Size: 'XL'
  },
  {
    id: 50,
    image: 't51.webp',
    oriImage: 't51-ori.webp',
    parahead: 'Plain Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '549',
    OrgVal: '399',
    Color: 'Black',
    Theme: 'Plain',
    Size: 'XXL'
  },
  {
    id: 51,
    image: 't52.webp',
    oriImage: 't52-ori.webp',
    parahead: 'Pikachu Pokemon Tshi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Gaming',
    Size: 'L'
  },
  {
    id: 52,
    image: 't53.webp',
    oriImage: 't53-ori.webp',
    parahead: 'Gamer Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Gaming',
    Size: 'XL'
  },
  {
    id: 53,
    image: 't54.webp',
    oriImage: 't54-ori.webp',
    parahead: 'Scooby Doo Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Gaming',
    Size: 'M'
  },
  {
    id: 54,
    image: 't55.webp',
    oriImage: 't55-ori.webp',
    parahead: 'First Rule Of Progra..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Coding',
    Size: 'S'
  },
  {
    id: 55,
    image: 't56.webp',
    oriImage: 't56-ori.webp',
    parahead: 'Lion Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Anime',
    Size: 'L'
  },
  {
    id: 56,
    image: 't57.webp',
    oriImage: 't57-ori.webp',
    parahead: 'Bulls 23 Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 57,
    image: 't58.webp',
    oriImage: 't58-ori.webp',
    parahead: 'My Code Works I Have..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Skyblue',
    Theme: 'Coding',
    Size: 'XXL'
  },
  {
    id: 58,
    image: 't59.webp',
    oriImage: 't59-ori.webp',
    parahead: 'Always Sounds Better..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Music',
    Size: 'S'
  },
  {
    id: 59,
    image: 't60.webp',
    oriImage: 't60-ori.webp',
    parahead: 'The Boys Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Socialmedia',
    Size: 'M'
  },
  {
    id: 60,
    image: 't61.webp',
    oriImage: 't61-ori.webp',
    parahead: 'Mood Of The Day Tshi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Customized',
    Size: 'L'
  },
  {
    id: 61,
    image: 't62.webp',
    oriImage: 't62-ori.webp',
    parahead: 'Mindset Is Everythin..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Motivation',
    Size: 'XL'
  },
  {
    id: 62,
    image: 't63.webp',
    oriImage: 't63-ori.webp',
    parahead: 'Wings Of Freedom Att..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '599',
    OrgVal: '449',
    Color: 'Skyblue',
    Theme: 'Anime',
    Size: 'M'
  },
  {
    id: 63,
    image: 't64.webp',
    oriImage: 't64-ori.webp',
    parahead: 'Naruto Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Socialmedia',
    Size: 'S'
  },
  {
    id: 64,
    image: 't65.webp',
    oriImage: 't65-ori.webp',
    parahead: 'Include Awesome H Ts..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 65,
    image: 't66.webp',
    oriImage: 't66-ori.webp',
    parahead: 'How About No Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 66,
    image: 't67.webp',
    oriImage: 't67-ori.webp',
    parahead: 'Follow Your Dreams T..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Motivation',
    Size: 'XXL'
  },
  {
    id: 67,
    image: 't68.webp',
    oriImage: 't68-ori.webp',
    parahead: 'Where Words Fail Mus..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Music',
    Size: 'M'
  },
  {
    id: 68,
    image: 't69.webp',
    oriImage: 't69-ori.webp',
    parahead: 'Code Blooded Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 69,
    image: 't70.webp',
    oriImage: 't70-ori.webp',
    parahead: 'Goku Premium Anime..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Motivation',
    Size: 'XL'
  },
  {
    id: 70,
    image: 't71.webp',
    oriImage: 't71-ori.webp',
    parahead: 'Avengers Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Socialmedia',
    Size: 'L'
  },
  {
    id: 71,
    image: 't72.webp',
    oriImage: 't72-ori.webp',
    parahead: 'Its Not A Bug Its A..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Hacking',
    Size: 'M'
  },
  {
    id: 72,
    image: 't73.webp',
    oriImage: 't73-ori.webp',
    parahead: 'Hacked Anonymous',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Hacking',
    Size: 'XXL'
  },
  {
    id: 73,
    image: 't74.webp',
    oriImage: 't74-ori.webp',
    parahead: 'Xxtenction Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Trending',
    Size: 'S'
  },
  {
    id: 74,
    image: 't75.webp',
    oriImage: 't75-ori.webp',
    parahead: 'Hustle For The Muscl..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Music',
    Size: 'M'
  },
  {
    id: 75,
    image: 't76.webp',
    oriImage: 't76-ori.webp',
    parahead: 'Jujutsu Kaisen Tshir..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '799',
    OrgVal: '649',
    Color: 'Black',
    Theme: 'Trending',
    Size: 'L'
  },
  {
    id: 76,
    image: 't77.webp',
    oriImage: 't77-ori.webp',
    parahead: 'Rock Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Music',
    Size: 'XL'
  },
  {
    id: 77,
    image: 't78.webp',
    oriImage: 't78-ori.webp',
    parahead: 'Leg Day Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Gym',
    Size: 'XXL'
  },
  {
    id: 78,
    image: 't79.webp',
    oriImage: 't79-ori.webp',
    parahead: 'Toxic Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Hacking',
    Size: 'M'
  },
  {
    id: 79,
    image: 't80.webp',
    oriImage: 't80-ori.webp',
    parahead: 'Naruto X Madara Tshi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Trending',
    Size: 'L'
  },
  {
    id: 80,
    image: 't81.webp',
    oriImage: 't81-ori.webp',
    parahead: 'Your Favorite Coder..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Skyblue',
    Theme: 'Hacking',
    Size: 'S'
  },
  {
    id: 81,
    image: 't82.webp',
    oriImage: 't82-ori.webp',
    parahead: 'Declare Variables No..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Red',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 82,
    image: 't83.webp',
    oriImage: 't83-ori.webp',
    parahead: 'Go Your Own Way Tshi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Motivation',
    Size: 'XXL'
  },
  {
    id: 83,
    image: 't84.webp',
    oriImage: 't84-ori.webp',
    parahead: 'Meta Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Socialmedia',
    Size: 'XL'
  },
  {
    id: 84,
    image: 't85.webp',
    oriImage: 't86-ori.webp',
    parahead: 'No Pain No Super Sai...',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Motivation',
    Size: 'M'
  },
  {
    id: 85,
    image: 't86.webp',
    oriImage: 't86-ori.webp',
    parahead: 'Rock N Roll Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Music',
    Size: 'L'
  },
  {
    id: 86,
    image: 't87.webp',
    oriImage: 't87-ori.webp',
    parahead: 'Bts Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Music',
    Size: 'M'
  },
  {
    id: 87,
    image: 't88.webp',
    oriImage: 't88-ori.webp',
    parahead: 'Dragon Head Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Plain',
    Size: 'XL'
  },
  {
    id: 88,
    image: 't89.webp',
    oriImage: 't89-ori.webp',
    parahead: 'Friends Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '539',
    OrgVal: '389',
    Color: 'Black',
    Theme: 'Plain',
    Size: 'XXL'
  },
  {
    id: 89,
    image: 't90.webp',
    oriImage: 't90-ori.webp',
    parahead: 'Believe Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Motivation',
    Size: 'S'
  },
  {
    id: 90,
    image: 't91.webp',
    oriImage: 't91-ori.webp',
    parahead: 'Marshmallow Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Pink',
    Theme: 'Music',
    Size: 'L'
  },
  {
    id: 91,
    image: 't92.webp',
    oriImage: 't92-ori.webp',
    parahead: 'Broken Developer Tsh..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 92,
    image: 't93.webp',
    oriImage: 't93-ori.webp',
    parahead: 'Born To Rule Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Hacking',
    Size: 'XL'
  },
  {
    id: 93,
    image: 't94.webp',
    oriImage: 't94-ori.webp',
    parahead: 'Goku Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Gaming',
    Size: 'S'
  },
  {
    id: 94,
    image: 't95.webp',
    oriImage: 't95-ori.webp',
    parahead: 'No Pain No Gain..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 95,
    image: 't96.webp',
    oriImage: 't96-ori.webp',
    parahead: 'Instagram Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Socialmedia',
    Size: 'XXL'
  },
  {
    id: 96,
    image: 't97.webp',
    oriImage: 't97-ori.webp',
    parahead: 'Security Is Just An..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Hacking',
    Size: 'M'
  },
  {
    id: 97,
    image: 't98.webp',
    oriImage: 't98-ori.webp',
    parahead: 'Light Yagami Death N..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Music',
    Size: 'S'
  },

  {
    id: 98,
    image: 't99.webp',
    oriImage: 't99-ori.webp',
    parahead: 'Github Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Coding',
    Size: 'S'
  },
  {
    id: 99,
    image: 't100.webp',
    oriImage: 't100-ori.webp',
    parahead: 'Maang Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Socialmedia',
    Size: 'M'
  },
  {
    id: 100,
    image: 't101.webp',
    oriImage: 't101-ori.webp',
    parahead: 'One Piece Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Navyblue',
    Theme: 'Hacking',
    Size: 'XXL'
  },
  {
    id: 101,
    image: 't102.webp',
    oriImage: 't102-ori.webp',
    parahead: 'Uchiha Itachi Crows..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '539',
    OrgVal: '389',
    Color: 'Black',
    Theme: 'Gaming',
    Size: 'S'
  },
  {
    id: 102,
    image: 't103.webp',
    oriImage: 't103-ori.webp',
    parahead: 'Spacex Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Bottlegreen',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 103,
    image: 't104.webp',
    oriImage: 't104-ori.webp',
    parahead: 'Developer Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Maroon',
    Theme: 'Coding',
    Size: 'S'
  },
  {
    id: 104,
    image: 't105.webp',
    oriImage: 't105-ori.webp',
    parahead: 'Your Workout Is My..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Gym',
    Size: 'XL'
  },
  {
    id: 105,
    image: 't106.webp',
    oriImage: 't106-ori.webp',
    parahead: 'Things I Hate Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Red',
    Theme: 'Hacking',
    Size: 'S'
  },
  {
    id: 106,
    image: 't107.webp',
    oriImage: 't107-ori.webp',
    parahead: 'Git Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Skyblue',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 107,
    image: 't108.webp',
    oriImage: 't108-ori.webp',
    parahead: 'Hello World Tshirt',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'White',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 108,
    image: 't109.webp',
    oriImage: 't109-ori.webp',
    parahead: 'You Are Special Tshi..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Blue',
    Theme: 'Coding',
    Size: 'M'
  },
  {
    id: 109,
    image: 't110.webp',
    oriImage: 't110-ori.webp',
    parahead: 'Theres No Place Like..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Black',
    Theme: 'Hacking',
    Size: 'M'
  },
  {
    id: 110,
    image: 't111.webp',
    oriImage: 't111-ori.webp',
    parahead: 'It Works Just Dont T..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '699',
    OrgVal: '549',
    Color: 'Lavender',
    Theme: 'Coding',
    Size: 'L'
  },
  {
    id: 111,
    image: 't112.webp',
    oriImage: 't112-ori.webp',
    parahead: 'Saitama One Punch Ma..',
    productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
    strikeVal: '799',
    OrgVal: '649',
    Color: 'Red',
    Theme: 'Lifestyle',
    Size: 'L'
  },
  ];
  const { id } = useParams();

  
  // Ensure the id is a valid number and within the array's index range
  const itemId = parseInt(id);
  if (isNaN(itemId) || itemId < 0 || itemId >= displayItems.length) {
    return <p>Invalid item ID.</p>;
  }

   // Get the selected item using the itemId
   const selectedItem = displayItems[itemId];

   const handleonclickimg=()=>{
    setImage(true);
   }
   const handleonclickimg1=()=>{
    setImage(false);
   }

   const handleCheckAvailability = () => {
    if (validPincodes.includes(pincode)) {
      setAvailability(true);
    } else {
      setAvailability(false);
    }
  };

  const handlescrolltop=()=>{
    window.scrollTo(0,0);
  };

  const handleAddToCart = async (item) => {
    try {
      // Add a note to the database
      const response = await fetch('http://localhost:5000/api/notes/addnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          Image: item.image,
          title: item.parahead,
          Total: item.OrgVal
        })
      });
  
      const data = await response.json();
      console.log('Note added:', data);
  
      // Add the item to the cart
      addToCart(item);
    } catch (error) {
      props.showAlert("Invalid Details","danger")
      console.error('Error adding note:', error.message);
    }
  };

  // setTimeout(() => {
  //   setAvailability(null);
  // }, 2000);

  return (
    <>
    <div>
      <div className="tdetails">
        <div className="tdetails-contain1">
            <div className="small-img">
            <img src={require(`../images1/tshirt/${selectedItem.image}`)} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={require(`../images1/tshirt/${selectedItem.oriImage}`)} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="tdetails-contain2">
        {image ? (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt Image',
                    isFluidWidth: true,
                    src: require(`../images1/tshirt/${selectedItem.image}`),
                  },
                  largeImage: {
                    src: require(`../images1/tshirt/${selectedItem.image}`), // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            ) : (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt OriImage',
                    isFluidWidth: true,
                    src: require(`../images1/tshirt/${selectedItem.oriImage}`),
                  },
                  largeImage: {
                    src: require(`../images1/tshirt/${selectedItem.oriImage}`), // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            )}
        </div>
        <div className="tdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
          <p className='brand'>hriteshCodesWear</p>
          <h1>{selectedItem.parahead}</h1>
          <br />
          <h3>Product Description :</h3>
          <p className='product-desc'>{selectedItem.productdesc}</p>
          <br />
          <h3>Exciting offers :</h3>

          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Get Flat 10% off on all prepaid orders above ₹249 Use coupon <span className='coupon'>HRITESHCODESWEAR10</span></div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Get Customized <span className='coupon'>T-Shirts</span> at only ₹549.</div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Buy 2 get 1 Free and buy 3 get 2 Free on all <span className='coupon'>Caps</span> - Prepaid orders only.</div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Buy 2 get 1 Free and buy 3 get 2 Free on all <span className='coupon'>Mousepads</span> - Prepaid orders only.</div>
          </div>
          <br /> <br />
          <h3>Color :&nbsp;&nbsp;{selectedItem.Color}</h3>
          <div className="size-container">
                  <p>Size :</p>
                  <div className="s1">S</div>
                  <div className="s1">M</div>
                  <div className="s1">L</div>
                  <div className="s1">XL</div>
                  <div className="s1">XXL</div>
          </div>
          <hr />
          <p className='amt-head'><strike className='head6'>&#8377;{selectedItem.strikeVal}</strike>&nbsp;&#8377;{selectedItem.OrgVal}<sup className='freeship'>(Free Shipping)</sup></p>
          
          <div className="pincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='availability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="shopbtn">
          {!localStorage.getItem('token')?<Link to='/login'><button className='shopbtn-BUY' onClick={handlescrolltop}>Buy Now</button> &nbsp;</Link>:
          <Link to={`/buy?image=${encodeURIComponent(selectedItem.image)}&title=${encodeURIComponent(selectedItem.parahead)}&total=${encodeURIComponent(selectedItem.OrgVal)}`}><button className='shopbtn-BUY' onClick={handlescrolltop}>Buy Now</button> &nbsp;</Link>}
          {!localStorage.getItem('token')?<Link to='/login'><button className='shopbtn-CART' onClick={() => {handleAddToCart(selectedItem); handlescrolltop();}}>Add to Cart</button></Link>:<button className='shopbtn-CART' onClick={() => handleAddToCart(selectedItem)}>Add to Cart</button>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TshirtDetail
