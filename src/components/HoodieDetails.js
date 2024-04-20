import React,{useState} from 'react'
import "./Hdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const HoodieDetails = (props) => {
  const {cartData,addToCart} = useCart();
  const [image,setImage] = useState(true);
  const [pincode, setPincode] = useState('');
  const [availability, setAvailability] = useState(null);
  const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
  const displayItems = [
    {
      id: 0,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-single-color-hoodie-navyblue/0.webp',
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-single-color-hoodie-navyblue/1.webp',
      parahead: 'Pack Of Three Plain..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '1749',
      OrgVal: '1599',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'S'
    },
    {
      id: 1,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-five-plain-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-five-plain-hoodie-bottlegreen/1.webp',
      parahead: 'Pack Of Five Plain H..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '2749',
      OrgVal: '2599',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'M'
    },
    {
      id: 2,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/bad-boy-mens-typography-printed-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/bad-boy-mens-typography-printed-hoodie-bottlegreen/1.webp',
      parahead: 'Bad Boy Mens Typogra..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 3,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hung-over-graphic-printed-sarcasm-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hung-over-graphic-printed-sarcasm-hoodie-black/1.webp',
      parahead: 'Hung Over Graphic Pr..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'XL'
    },
    {
      id: 4,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/tu-tera-dekh-sarcasm-typography-printed-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/tu-tera-dekh-sarcasm-typography-printed-hoodie-white/1.webp',
      parahead: 'Tu Tera Dekh Sarcasm..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 5,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wakanda-forever-graphic-printed-design-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wakanda-forever-graphic-printed-design-hoodie-maroon/1.webp',
      parahead: 'Wakanda Forever Grap..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 6,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-hoodie-black/1.webp',
      parahead: 'Valorant Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 7,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-chest-logo-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/valorant-chest-logo-hoodie-black/1.webp',
      parahead: 'Valorant Chest Logo..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 8,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-logo-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-logo-printed-hoodie-black/1.webp',
      parahead: 'Marvel Logo Printed..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 9,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/your-design-here-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/your-design-here-hoodie-black/1.webp',
      parahead: 'Your Design Here Hoo..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '1149',
      OrgVal: '999',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 10,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-am-the-hunter-valorant-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-am-the-hunter-valorant-hoodie-black/1.webp',
      parahead: 'I Am The Hunter Valo..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 11,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-regularfit-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-regularfit-hoodie-black/1.webp',
      parahead: 'Breaking Code Regula..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 12,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/aatm-nirbhar-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/aatm-nirbhar-hoodie-black/1.webp',
      parahead: 'Aatm Nirbhar Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'L'
    },
    {
      id: 13,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/think-big-graphic-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/think-big-graphic-printed-hoodie-black/1.webp',
      parahead: 'Think Big Graphic Pr..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 14,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/swag-dekh-sarcastic-graphic-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/swag-dekh-sarcastic-graphic-printed-hoodie-black/1.webp',
      parahead: 'Swag Dekh Sarcastic..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL' 
    },
    {
      id: 15,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/perfect-thats-me-typography-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/perfect-thats-me-typography-hoodie-black/1.webp',
      parahead: 'Perfect Thats Me Typ..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 16,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/looser-sarcastic-statement-graphic-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/looser-sarcastic-statement-graphic-printed-hoodie-black/1.webp',
      parahead: 'Looser Sarcastic Sta..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Customized',
      Size: 'M'
    },
    {
      id: 17,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-have-3-moods-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/i-have-3-moods-hoodie-maroon/1.webp',
      parahead: 'I Have 3 Moods Hoodi..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 18,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-regular-fit-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-regular-fit-hoodie-bottlegreen/1.webp',
      parahead: 'Just Do It Graphic P..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 19,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/social-media-like-comment-share-graphic-printed-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/social-media-like-comment-share-graphic-printed-hoodie-navyblue/1.webp',
      parahead: 'Social Media Like Co..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 20,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-artist-music-graphic-regular-fit-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-artist-music-graphic-regular-fit-hoodie-white/1.webp',
      parahead: 'We Are All Artist Mu..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Music',
      Size: 'S'
    },
    {
      id: 21,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/dragonballz-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/dragonballz-hoodie-black/1.webp',
      parahead: 'Dragonballz Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 22,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/joker-hoodie-pink/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/joker-hoodie-pink/1.webp',
      parahead: 'Joker Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Pink',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 23,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kothi-bangle-wale-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kothi-bangle-wale-hoodie-white/1.webp',
      parahead: 'Kothi Bangle Wale Ho..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 24,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/yes-iam-different-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/yes-iam-different-hoodie-bottlegreen/1.webp',
      parahead: 'Yes Iam Different Ho..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Customized',
      Size: 'XXL'
    },
    {
      id: 25,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pack-of-three-plain-hoodie-black/1.webp',
      parahead: 'Pack Of Three Plain..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '1694',
      OrgVal: '1499',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'S'
    },
    {
      id: 26,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kimetsu-no-yaiba-graphic-printed-design-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/kimetsu-no-yaiba-graphic-printed-design-hoodie-maroon/1.webp',
      parahead: 'Kimetsu No Yaiba Gra..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Maroon',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 27,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/rose-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/rose-hoodie-black/1.webp',
      parahead: 'Rose Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 28,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/stop-saying-tomorrow-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/stop-saying-tomorrow-hoodie-white/1.webp',
      parahead: 'Stop Saying Tomorrow..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 29,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-chest-logo-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/breaking-code-chest-logo-hoodie-black/1.webp',
      parahead: 'Breaking Code Chest..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 30,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/never-mind-typography-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/never-mind-typography-printed-hoodie-black/1.webp',
      parahead: 'Never Mind Typograph..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'S'
    },
    {
      id: 31,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/raw-real-unfiltered-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/raw-real-unfiltered-hoodie-black/1.webp',
      parahead: 'Raw Real Unfiltered..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Customized',
      Size: 'M'
    },
    {
      id: 32,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-more-rep-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-more-rep-hoodie-white/1.webp',
      parahead: 'One More Rep Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Gym',
      Size: 'L'
    },
    {
      id: 33,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pikachu-pokemon-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/pikachu-pokemon-hoodie-maroon/1.webp',
      parahead: 'Pikachu Pokemon Ho..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Red',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
      id: 34,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/no-pain-no-super-saiyan-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/no-pain-no-super-saiyan-hoodie-navyblue/1.webp',
      parahead: 'No Pain No Super..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Gym',
      Size: 'XXL'
    },
    {
      id: 35,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-pirate-graphic-printed-design-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-pirate-graphic-printed-design-hoodie-navyblue/1.webp',
      parahead: 'One Piece Pirate Gra..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 36,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/mindset-is-everything-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/mindset-is-everything-hoodie-white/1.webp',
      parahead: 'Mindset Is Everythin..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 37,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hacked-anonymous-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hacked-anonymous-hoodie-black/1.webp',
      parahead: 'Hacked Anonymous H..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'L'
    },
    {
      id: 38,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/avengers-hoodie-red/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/avengers-hoodie-red/1.webp',
      parahead: 'Avengers Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Red',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 39,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/xxtenction-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/xxtenction-hoodie-white/1.webp',
      parahead: 'Xxtenction Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'White',
      Theme: 'Music',
      Size: 'XXL'
    },
    {
      id: 40,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/one-piece-hoodie-maroon/1.webp',
      parahead: 'One Piece Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '649',
      Color: 'Red',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 41,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/cool-gym-hoodie-lavender/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/cool-gym-hoodie-lavender/1.webp',
      parahead: 'Cool Gym Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Lavender',
      Theme: 'Gym',
      Size: 'M'
    },
    {
      id: 42,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/scooby-doo-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/scooby-doo-hoodie-maroon/1.webp',
      parahead: 'Scooby Doo Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 43,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/coder-noun-hoodie-pink/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/coder-noun-hoodie-pink/1.webp',
      parahead: 'Coder Noun Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Pink',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 44,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-mad-here-regular-fit-hoodie-lavender/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/we-are-all-mad-here-regular-fit-hoodie-lavender/1.webp',
      parahead: 'We Are All Mad Here..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 45,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/friends-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/friends-hoodie-black/1.webp',
      parahead: 'Friends Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'S'
    },
    {
      id: 46,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/chrome-dino-offline-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/chrome-dino-offline-hoodie-navyblue/1.webp',
      parahead: 'Chrome Dino Offline..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 47,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wings-of-freedom-attack-on-titan-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/wings-of-freedom-attack-on-titan-hoodie-bottlegreen/1.webp',
      parahead: 'Wings Of Freedom Att..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 48,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/first-rule-of-programming-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/first-rule-of-programming-hoodie-black/1.webp',
      parahead: 'First Rule Of Progra..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
      id: 49,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/spacex-hoodie-skyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/spacex-hoodie-skyblue/1.webp',
      parahead: 'Spacex Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Skyblue',
      Theme: 'Gaming',
      Size: 'XXL'
    },
    {
      id: 50,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/gamer-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/gamer-hoodie-navyblue/1.webp',
      parahead: 'Gamer Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Navyblue',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 51,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marvel-hoodie-black/1.webp',
      parahead: 'Marvel Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 52,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/naruto-hoodie-navyblue/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/naruto-hoodie-navyblue/1.webp',
      parahead: 'Naruto Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'L'
    },
    {
      id: 53,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marshmallow-hoodie-white/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/marshmallow-hoodie-white/1.webp',
      parahead: 'Marshmallow Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
      id: 54,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/The-boys-premium-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/The-boys-premium-hoodie-bottlegreen/1.webp',
      parahead: 'The Boys Premium Hoo..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 55,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/squat-bench-deadlift-hoodie-maroon/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/squat-bench-deadlift-hoodie-maroon/1.webp',
      parahead: 'Squat Bench Deadlift..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Gym',
      Size: 'S'
    },
    {
      id: 56,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-coffee-repeat-hoodie-lavender/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-coffee-repeat-hoodie-lavender/1.webp',
      parahead: 'Code Coffee Repeat..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Lavender',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 57,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-mode-on-hoodie-red/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/code-mode-on-hoodie-red/1.webp',
      parahead: 'Code Mode On Hoo..',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 58,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hackerman-hoodie-bottlegreen/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/hackerman-hoodie-bottlegreen/1.webp',
      parahead: 'Hackerman Hoodie',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Hacking',
      Size: 'XL'
    },
    {
      id: 59,
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-hoodie-black/0.webp',
        oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/just-do-it-graphic-printed-hoodie-black/1.webp',
      parahead: 'Just Do It Graphic P...',
          productdesc:'Elevate your streetwear game with the "Bad Boy Mens Typography Printed Hoodie". This hoodie is designed for those who exude an edgy and rebellious vibe. The front of the hoodie features a bold typography print that reads "Bad Boy" in a unique and stylish font, making a strong statement. The hoodie is made from high-quality and comfortable fabric, ensuring a soft and cozy feel. It comes with a hood and a kangaroo pocket, adding functionality and an extra layer of style. The regular fit offers a relaxed and comfortable silhouette, perfect for everyday wear.',
      strikeVal: '949',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'XXL'
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
    <div className="Hdetails">
        <div className="Hdetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="Hdetails-contain2">
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
        <div className="Hdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
          <br />
          <br />
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
          
          <div className="hoodiepincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='hoodieavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="hoodieshopbtn">
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

export default HoodieDetails
