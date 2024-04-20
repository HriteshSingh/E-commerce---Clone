import React,{useState} from 'react'
import "./Zipperdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const ZipperDetails = (props) => {
    const {cartData,addToCart} = useCart();
    const [image,setImage] = useState(true);
    const [pincode, setPincode] = useState('');
    const [availability, setAvailability] = useState(null);
    const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
    const displayItems = [
        {
          id: 0,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gymshark-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gymshark-zipperhoodie-black/0.webp',
          parahead: 'Gymshirt Zipper Hood..',
          productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 1,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/css-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/css-zipperhoodie-black/0.webp',
          parahead: 'Css Zipperhoodie',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'M'
        },
        {
          id: 2,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/html-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/html-zipperhoodie-black/0.webp',
          parahead: 'Html Zipperhoodie',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'L'
        },
        {
          id: 3,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/java-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/java-zipperhoodie-black/0.webp',
          parahead: 'Java Zipperhoodie',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XL'
        },
        {
          id: 4,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/javascript-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/javascript-zipperhoodie-black/0.webp',
          parahead: 'Javascript Zipperhoo..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XXL'
        },
        {
          id: 5,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/python-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/python-zipperhoodie-black/0.webp',
          parahead: 'Python Zipperhoodie',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '949',
          OrgVal: '799',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 6,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/battleground-mobile-india-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/battleground-mobile-india-zipperhoodie-black/0.webp',
          parahead: 'Battleground Mobile..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '839',
          OrgVal: '689',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'M'
        },
        {
          id: 7,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/black-dragons-tokyo-revengers-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/black-dragons-tokyo-revengers-zipperhoodie-black/0.webp',
          parahead: 'Black Dragons Tokyo..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '599',
          OrgVal: '449',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'L'
        },
        {
          id: 8,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gara-eye-naruto-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/gara-eye-naruto-zipperhoodie-black/0.webp',
          parahead: 'Gara Eye Naruto Zipp..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '599',
          OrgVal: '449',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XL'
        },
        {
          id: 9,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/god-of-war-kratos-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/god-of-war-kratos-zipperhoodie-black/0.webp',
          parahead: 'God Of War Kratos Zi..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '649',
          OrgVal: '599',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XXL'
        },
        {
          id: 10,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/akatsuki-jutsu-it-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/akatsuki-jutsu-it-zipperhoodie-black/0.webp',
          parahead: 'Akatsuki Jutsu It Zi..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '649',
          OrgVal: '499',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 11,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/hacked-anonymous-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/hacked-anonymous-zipperhoodie-black/0.webp',
          parahead: 'Hacked Anonymous Zip..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '649',
          OrgVal: '599',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'M'
        },
        {
          id: 12,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/itachi-uchiha-on-pole-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/itachi-uchiha-on-pole-zipperhoodie-black/0.webp',
          parahead: 'Itachi Uchiha On Pol..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '749',
          OrgVal: '599',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'L'
        },
        {
          id: 13,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/katana-cool-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/katana-cool-zipperhoodie-black/0.webp',
          parahead: 'Katana Cool Zipperho..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '699',
          OrgVal: '549',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XL'
        },
        {
          id: 14,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/no-pain-no-super-saiyan-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/no-pain-no-super-saiyan-zipperhoodie-black/0.webp',
          parahead: 'No Pain No Super Sai..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '749',
          OrgVal: '599',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XXL' 
        },
        {
          id: 15,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/saitama-one-punch-man-i-am-ok-anime-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/saitama-one-punch-man-i-am-ok-anime-zipperhoodie-black/0.webp',
          parahead: 'Saitama One Punch Ma..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '799',
          OrgVal: '649',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 16,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/spacex-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/spacex-zipperhoodie-black/0.webp',
          parahead: 'Spacex Zipperhoodie',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '849',
          OrgVal: '699',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'M'
        },
        {
          id: 17,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/the-boys-premium-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/the-boys-premium-zipperhoodie-black/0.webp',
          parahead: 'The Boys Premium Zip..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '799',
          OrgVal: '649',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'L'
        },
        {
          id: 18,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/tokyo-manji-gang-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/tokyo-manji-gang-zipperhoodie-black/0.webp',
          parahead: 'Tokyo Manji Gang Zip..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '799',
          OrgVal: '649',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'XL'
        },
        {
          id: 19,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/uchiha-clan-naruto-anime-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/uchiha-clan-naruto-anime-zipperhoodie-black/0.webp',
          parahead: 'Uchiha Clan Naruto A..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '899',
          OrgVal: '749',
          Color: 'Black',
          Theme: 'Black',
          Size: 'XXL'
        },
        {
          id: 20,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/vageto-anime-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/vageto-anime-zipperhoodie-black/0.webp',
          parahead: 'Vageto Anime Zipperh..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '749',
          OrgVal: '599',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 21,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/wings-of-freedome-attack-on-titan-zipperhoodie-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/zipperhoodies/wings-of-freedome-attack-on-titan-zipperhoodie-black/0.webp',
          parahead: 'Wings Of Freedome At..',
           productdesc:'Get ready to hit the gym in style with this premium Gymshirt Zipper Hoodie! Made from a comfortable and durable blend of cotton and polyester, this hoodie is perfect for your workout routine. The vibrant colors and bold graphics are sure to make a statement wherever you go. Whether you\'re running on the treadmill or lifting weights, this hoodie is perfect for any occasion. The adjustable zipper and hood provide extra coverage, while the ribbed cuffs and waistband provide a snug fit. The soft material ensures maximum comfort, and the hoodie is also machine-washable, making it easy to care for. This Gymshirt Zipper Hoodie is a must-have for anyone who takes their workout routine seriously. It makes a great gift for friends and family who are fitness enthusiasts, or for yourself to wear as a symbol of your dedication to fitness',
          strikeVal: '699',
          OrgVal: '549',
          Color: 'Black',
          Theme: 'Coding',
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
    <div className="zdetails">
        <div className="zdetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="zdetails-contain2">
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
        <div className="zdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
          
          <div className="zipperpincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='zipperavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="zippershopbtn">
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

export default ZipperDetails
