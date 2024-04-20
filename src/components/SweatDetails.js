import React,{useState} from 'react'
import "./Sdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const SweatDetails = (props) => {
    const {cartData,addToCart} = useCart();
    const [image,setImage] = useState(true);
    const [pincode, setPincode] = useState('');
    const [availability, setAvailability] = useState(null);
    const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
    const displayItems = [
        {
            id: 0,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-three-plain-sweatshirt-white/0.webp',
            oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-three-plain-sweatshirt-white/1.webp',
            parahead: 'Pack Of Three Plain..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '1649',
            OrgVal: '1499',
            Color: 'White',
            Theme: 'Combo',
            Size: 'S'
          },
          {
            id: 1,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-four-plain-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/pack-of-four-plain-sweatshirt-black/1.webp',
            parahead: 'Pack Of Four Plain S..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '2049',
            OrgVal: '1899',
            Color: 'Black',
            Theme: 'Combo',
            Size: 'M'
          },
          {
            id: 2,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/v-is-for-valorant-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/v-is-for-valorant-sweatshirt-black/1.webp',
            parahead: 'V Is For Valorant Sw..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Trending',
            Size: 'L'
          },
          {
            id: 3,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-sweatshirt-black/1.webp',
            parahead: 'Valorant Sweatshirt',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '699',
            Color: 'Black',
            Theme: 'Gaming',
            Size: 'XL'
          },
          {
            id: 4,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/i-am-the-hunter-valorant-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/i-am-the-hunter-valorant-sweatshirt-black/1.webp',
            parahead: 'I Am The Hunter Valo..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Gaming',
            Size: 'XXL'
          },
          {
            id: 5,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/think-big-graphic-printed-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/think-big-graphic-printed-sweatshirt-black/1.webp',
            parahead: 'Think Big Graphic Pr..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '699',
            Color: 'Black',
            Theme: 'Motivation',
            Size: 'S'
          },
          {
            id: 6,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/swag-dekh-sarcastic-graphic-printed-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/swag-dekh-sarcastic-graphic-printed-sweatshirt-black/1.webp',
            parahead: 'Swag Dekh Sarcastic..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '839',
            OrgVal: '689',
            Color: 'Black',
            Theme: 'Lifestyle',
            Size: 'M'
          },
          {
            id: 7,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/perfect-thats-me-typography-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/perfect-thats-me-typography-sweatshirt-black/1.webp',
            parahead: 'Perfect Thats Me Typ..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
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
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/aatm-nirbhar-sweatshirt-black/1.webp',
            strikeVal: '599',
            OrgVal: '449',
            Color: 'Black',
            Theme: 'Trending',
            Size: 'XL'
          },
          {
            id: 9,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/looser-sarcastic-statement-graphic-printed-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/looser-sarcastic-statement-graphic-printed-sweatshirt-black/1.webp',
            parahead: 'Looser Sarcastic Sta..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '649',
            OrgVal: '499',
            Color: 'Black',
            Theme: 'Anime',
            Size: 'XXL'
          },
          {
            id: 10,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/just-do-it-graphic-printed-regular-fit-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/just-do-it-graphic-printed-regular-fit-sweatshirt-black/1.webp',
            parahead: 'Just Do It Graphic P..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '649',
            OrgVal: '499',
            Color: 'Black',
            Theme: 'Motivation',
            Size: 'S'
          },
          {
            id: 11,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/raw-real-unfiltered-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/raw-real-unfiltered-sweatshirt-navyblue/1.webp',
            parahead: 'Raw Real Unfiltered..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '649',
            OrgVal: '499',
            Color: 'Navyblue',
            Theme: 'Lifestyle',
            Size: 'M'
          },
          {
            id: 12,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/dragonballz-graphic-printed-anime-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/dragonballz-graphic-printed-anime-sweatshirt-black/1.webp',
            parahead: 'Dragonballz Graphic..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '599',
            Color: 'Black',
            Theme: 'Gaming',
            Size: 'L'
          },
          {
            id: 13,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/joker-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/joker-sweatshirt-white/1.webp',
            parahead: 'Joker Sweatshirt',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Anime',
            Size: 'XL'
          },
          {
            id: 14,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/stop-saying-tomorrow-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/stop-saying-tomorrow-sweatshirt-black/1.webp',
            parahead: 'Stop Saying Tomorrow..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '599',
            Color: 'Black',
            Theme: 'Gym',
            Size: 'XXL' 
          },
          {
            id: 15,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kothi-bangle-wale-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kothi-bangle-wale-sweatshirt-navyblue/1.webp',
            parahead: 'Kothi Bangle Wale Sw..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '799',
            OrgVal: '649',
            Color: 'Navyblue',
            Theme: 'Customized',
            Size: 'S'
          },
          {
            id: 16,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/your-design-here-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/your-design-here-sweatshirt-black/1.webp',
            parahead: 'Your Design Here Swe..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '849',
            OrgVal: '699',
            Color: 'Black',
            Theme: 'Coding',
            Size: 'M'
          },
          {
            id: 17,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rose-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rose-sweatshirt-black/1.webp',
            parahead: 'Rose Sweatshirt',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '799',
            OrgVal: '649',
            Color: 'Black',
            Theme: 'Anime',
            Size: 'L'
          },
          {
            id: 18,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/yes-iam-different-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/yes-iam-different-sweatshirt-navyblue/1.webp',
            parahead: 'Yes Iam Different Sw..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '799',
            OrgVal: '649',
            Color: 'Navyblue',
            Theme: 'Socialmedia',
            Size: 'XL'
          },
          {
            id: 19,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wakanda-forever-graphic-printed-design-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wakanda-forever-graphic-printed-design-sweatshirt-white/1.webp',
            parahead: 'Wakanda Forever Grap..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '899',
            OrgVal: '749',
            Color: 'White',
            Theme: 'Gaming',
            Size: 'XXL'
          },
          {
            id: 20,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hacked-anonymous-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hacked-anonymous-sweatshirt-black/1.webp',
            parahead: 'Hacked Anonymous Swe..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '749',
            OrgVal: '599',
            Color: 'Black',
            Theme: 'Hacking',
            Size: 'S'
          },
          {
            id: 21,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/the-boys-premium-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/the-boys-premium-sweatshirt-white/1.webp',
            parahead: 'The Boys Premium Swe..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Trending',
            Size: 'M'
          },
          {
            id: 22,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/we-are-all-mad-here-regular-fit-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/we-are-all-mad-here-regular-fit-sweatshirt-black/1.webp',
            parahead: 'We Are All Mad Here..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Music',
            Size: 'L'
          },
          {
            id: 23,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/how-about-no-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/how-about-no-sweatshirt-white/1.webp',
            parahead: 'How About No Sweatsh..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'white',
            Theme: 'Lifestyle',
            Size: 'XL'
          },
          {
            id: 24,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/gara-eye-naruto-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/gara-eye-naruto-sweatshirt-navyblue/1.webp',
            parahead: 'Gara Eye Naruto Swea..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Customized',
            Size: 'XXL'
          },
          {
            id: 25,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/marvel-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/marvel-sweatshirt-black/1.webp',
            parahead: 'Marvel Sweatshirt',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Anime',
            Size: 'S'
          },
          {
            id: 26,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/theres-no-place-like-127-0-0-1-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/theres-no-place-like-127-0-0-1-sweatshirt-navyblue/1.webp',
            parahead: 'Theres No Place Like..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '549',
            OrgVal: '399',
            Color: 'Navyblue',
            Theme: 'Hacking',
            Size: 'M'
          },
          {
            id: 27,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/mindset-is-everything-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/mindset-is-everything-sweatshirt-white/1.webp',
            parahead: 'Mindset Is Everythin..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Music',
            Size: 'L'
          },
          {
            id: 28,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/naruto-x-madara-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/naruto-x-madara-sweatshirt-black/1.webp',
            parahead: 'Naruto X Madara Swea..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Anime',
            Size: 'XL'
          },
          {
            id: 29,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/xxtenction-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/xxtenction-sweatshirt-red/1.webp',
            parahead: 'Xxtenction Sweatshir..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Music',
            Size: 'XXL'
          },
          {
            id: 30,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/git-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/git-sweatshirt-black/1.webp',
            parahead: 'Git Sweatshirt',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Coding',
            Size: 'S'
          },
          {
            id: 31,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/jujutsu-kaisen-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/jujutsu-kaisen-sweatshirt-white/1.webp',
            parahead: 'Jujutsu Kaisen Sweat..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Anime',
            Size: 'M'
          },
          {
            id: 32,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/its-not-a-bug-its-a-feature-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/its-not-a-bug-its-a-feature-sweatshirt-navyblue/1.webp',
            parahead: 'Its Not A Bug Its A..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Coding',
            Size: 'L'
          },
          {
            id: 33,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-n-roll-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-n-roll-sweatshirt-black/1.webp',
            parahead: 'Rock N Roll Sweatshi..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Music',
            Size: 'XL'
          },
          {
            id: 34,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/coder-noun-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/coder-noun-sweatshirt-white/1.webp',
            parahead: 'Coder Noun Sweatshir..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Coding',
            Size: 'XXL'
          },
          {
            id: 35,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/my-code-works-i-have-no-idea-why-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/my-code-works-i-have-no-idea-why-sweatshirt-red/1.webp',
            parahead: 'My Code Works I Have..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Hacking',
            Size: 'S'
          },
          {
            id: 36,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/always-sounds-better-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/always-sounds-better-sweatshirt-black/1.webp',
            parahead: 'Always Sounds Better...',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Music',
            Size: 'M'
          },
          {
            id: 37,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/developer-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/developer-sweatshirt-white/1.webp',
            parahead: 'Developer Sweatshirt',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Coding',
            Size: 'L'
          },
          {
            id: 38,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/go-your-own-way-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/go-your-own-way-sweatshirt-black/1.webp',
            parahead: 'Go Your Own Way Swea..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '779',
            OrgVal: '629',
            Color: 'Black',
            Theme: 'Lifestyle',
            Size: 'XL'
          },
          {
            id: 39,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/rock-sweatshirt-navyblue/1.webp',
            parahead: 'Rock Sweatshirt',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Music',
            Size: 'XXL'
          },
          {
            id: 40,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/toxic-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/toxic-sweatshirt-red/1.webp',
            parahead: 'Toxic Sweatshirt',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Customized',
            Size: 'S'
          },
          {
            id: 41,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-gain-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-gain-sweatshirt-black/1.webp',
            parahead: 'No Pain No Gain Swea..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '949',
            OrgVal: '799',
            Color: 'Black',
            Theme: 'Motivation',
            Size: 'M'
          },
          {
            id: 42,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-mode-on-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-mode-on-sweatshirt-white/1.webp',
            parahead: 'Code Mode On Sweatsh..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Coding',
            Size: 'L'
          },
          {
            id: 43,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kimetsu-no-yaiba-graphic-printed-design-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/kimetsu-no-yaiba-graphic-printed-design-sweatshirt-white/1.webp',
            parahead: 'Kimetsu No Yaiba Gra..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Anime',
            Size: 'XL'
          },
          {
            id: 44,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/things-i-hate-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/things-i-hate-sweatshirt-red/1.webp',
            parahead: 'Things I Hate Sweats..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Socialmedia',
            Size: 'XXL'
          },
          {
            id: 45,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/uchiha-itachi-crows-anime-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/uchiha-itachi-crows-anime-sweatshirt-black/1.webp',
            parahead: 'Uchiha Itachi Crows..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Anime',
            Size: 'S'
          },
          {
            id: 46,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/deathly-hallows-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/deathly-hallows-sweatshirt-navyblue/1.webp',
            parahead: 'Deathly Hallows Swea..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Gaming',
            Size: 'M'
          },
          {
            id: 47,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-super-saiyan-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/no-pain-no-super-saiyan-sweatshirt-black/1.webp',
            parahead: 'No Pain No Super Sai..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Gym',
            Size: 'L'
          },
          {
            id: 48,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/false-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/false-sweatshirt-navyblue/1.webp',
            parahead: 'False Sweatshirt',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Coding',
            Size: 'XL'
          },
          {
            id: 49,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/follow-your-dreams-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/follow-your-dreams-sweatshirt-red/1.webp',
            parahead: 'Follow Your Dreams S..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Lifestyle',
            Size: 'XXL'
          },
          {
            id: 50,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wings-of-freedome-attack-on-titan-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/wings-of-freedome-attack-on-titan-sweatshirt-black/1.webp',
            parahead: 'Wings Of Freedome At..',
            productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '549',
            OrgVal: '399',
            Color: 'Black',
            Theme: 'Plain',
            Size: 'S'
          },
          {
            id: 51,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/born-to-rule-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/born-to-rule-sweatshirt-white/1.webp',
            parahead: 'Born To Rule Sweatsh..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Anime',
            Size: 'M'
          },
          {
            id: 52,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/broken-developer-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/broken-developer-sweatshirt-navyblue/1.webp',
            parahead: 'Broken Developer Swe..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Coding',
            Size: 'L'
          },
          {
            id: 53,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-blooded-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/code-blooded-sweatshirt-black/1.webp',
            parahead: 'Code Blooded Sweatsh..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Coding',
            Size: 'XL'
          },
          {
            id: 54,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/keep-calm-and-code-on-sweatshirt-navyblue/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/keep-calm-and-code-on-sweatshirt-navyblue/1.webp',
            parahead: 'Keep Calm And Code..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Navyblue',
            Theme: 'Coding',
            Size: 'XXL'
          },
          {
            id: 55,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/declare-variables-not-war-sweatshirt-red/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/declare-variables-not-war-sweatshirt-red/1.webp',
            parahead: 'Declare Variables No..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Red',
            Theme: 'Coding',
            Size: 'S'
          },
          {
            id: 56,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/first-rule-of-programming-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/first-rule-of-programming-sweatshirt-black/1.webp',
            parahead: 'First Rule Of Progra..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Coding',
            Size: 'M'
          },
          {
            id: 57,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-chest-logo-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/valorant-chest-logo-sweatshirt-black/1.webp',
            parahead: 'Valorant Chest Logo..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Gaming',
            Size: 'L'
          },
          {
            id: 58,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hello-world-sweatshirt-white/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/hello-world-sweatshirt-white/1.webp',
            parahead: 'Hello World Sweatshi..',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'White',
            Theme: 'Coding',
            Size: 'XL'
          },
          {
            id: 59,
            image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/believe-sweatshirt-black/0.webp',
             oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/sweatshirts/believe-sweatshirt-black/1.webp',
            parahead: 'Believe Sweatshirt',
             productdesc:'Keep yourself warm while working on your Git repository with this comfortable and stylish Git sweatshirt. Made from a soft blend of cotton and polyester, this sweatshirt is perfect for long coding sessions or for wearing out with friends. The design features the text "Git" in bold letters.',
            strikeVal: '699',
            OrgVal: '549',
            Color: 'Black',
            Theme: 'Plain',
            Size: 'M'
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
    <div className="sdetails">
        <div className="sdetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="sdetails-contain2">
        {image ? (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt Image',
                    isFluidWidth: true,
                    src: selectedItem.image,
                  },
                  largeImage: {
                    src: selectedItem.image, // Use the same image for demonstration
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
                    src: selectedItem.oriImage,
                  },
                  largeImage: {
                    src: selectedItem.oriImage, // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            )}
        </div>
        <div className="sdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
          
          <div className="sweatpincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='sweatavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="sweatshopbtn">
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

export default SweatDetails
