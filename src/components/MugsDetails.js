import React,{useState} from 'react'
import "./Mdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const MugsDetails = (props) => {
    const {cartData,addToCart} = useCart();
    const [image,setImage] = useState(true);
    const [pincode, setPincode] = useState('');
    const [availability, setAvailability] = useState(null);
    const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
    const displayItems = [
        {
          id: 0,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Demon-Slayer-Kimetsu-No-Yaiba-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Demon-Slayer-Kimetsu-No-Yaiba-standard-mug-black/0.webp',
          parahead: 'Demon Slayer Kimetsu...',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '499',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 1,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/your-design-here-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/your-design-here-mug-white/0.webp',
          parahead: 'Customized Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '699',
          OrgVal: '549',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 2,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/titan-shifters-attack-on-titan-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/titan-shifters-attack-on-titan-standard-mug-black/0.webp',
          parahead: 'Titan Shifters Attac..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '699',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 3,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/silent-voice-standard-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/silent-voice-standard-mug-white/0.webp',
          parahead: 'Silent Voice Standar..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '699',
          OrgVal: '549',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 4,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-cute-anime-friends-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-cute-anime-friends-standard-mug-black/0.webp',
          parahead: 'Chibi Cute Anime Fri..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '699',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 5,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aot-eren-yeager-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aot-eren-yeager-standard-mug-black/0.webp',
          parahead: 'Aot Eren Yeager Stan..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '599',
          OrgVal: '499',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 6,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-cute-chibi-characters-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-cute-chibi-characters-standard-mug-black/0.webp',
          parahead: 'Attack On Titan Cute..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '300',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 7,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-s3-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-s3-standard-mug-black/0.webp',
          parahead: 'Attack On Titan S3 S..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '500',
          OrgVal: '449',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 8,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/attack-on-titan-standard-mug-black/0.webp',
          parahead: 'Attack On Titan Stan..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '490',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 9,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Blue-Lock-nagi-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Blue-Lock-nagi-standard-mug-black/0.webp',
          parahead: 'Blue Lock Nagi Stand..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 10,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Tokyo-Revengers-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/Tokyo-Revengers-standard-mug-black/0.webp',
          parahead: 'Tokyo Revengers Stan..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 11,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/annie-leonhart-attack-on-titan-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/annie-leonhart-attack-on-titan-standard-mug-black/0.webp',
          parahead: 'Annie Leonhart Attac..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '499',
          OrgVal: '399',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 12,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bts-kpop-standard-mug-black/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bts-kpop-standard-mug-black/0.webp',
          parahead: 'Bts Kpop Standard Mu..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '350',
          OrgVal: '299',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 13,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-adorable-cute-anime-girl-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/chibi-adorable-cute-anime-girl-mug-white/0.webp',
          parahead: 'Chibi Adorable Cute..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '455',
          OrgVal: '250',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 14,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/code-blooded-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/code-blooded-mug-red/0.webp',
          parahead: 'Code Blooded Ceramic..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '599',
          OrgVal: '499',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard' 
        },
        {
          id: 15,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/marvel-comics-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/marvel-comics-mug-white/0.webp',
          parahead: 'Marvel Comics Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '355',
          OrgVal: '299',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 16,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/minion-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/minion-mug-white/0.webp',
          parahead: 'Minion Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '255',
          OrgVal: '150',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 17,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/python-no-problem-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/python-no-problem-mug-white/0.webp',
          parahead: 'Python No Problem Mu..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '458',
          OrgVal: '350',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 18,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/she-hulk-marvel-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/she-hulk-marvel-mug-white/0.webp',
          parahead: 'She Hulk Marvel Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '250',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 19,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aws-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/aws-mug-white/0.webp',
          parahead: 'Aws Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '400',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 20,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/batman-marvel-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/batman-marvel-mug-white/0.webp',
          parahead: 'Batman Marvel Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '300',
          OrgVal: '259',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 21,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/youtube-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/youtube-mug-white/0.webp',
          parahead: 'Youtube Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '350',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 22,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/captain-marvel-mug-white/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/captain-marvel-mug-white/0.webp',
          parahead: 'Captain Marvel Mug',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '599',
          OrgVal: '549',
          Color: 'White',
          Theme: 'Anime',
          Size: 'Standard'
        },
        {
          id: 23,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/01000011-mug-red_inner/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/01000011-mug-red_inner/0.webp',
          parahead: '01000011 Ceramic Cof..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '350',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 24,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bro-code-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/bro-code-mug-red/0.webp',
          parahead: 'Bro Code Ceramic Mug..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '350',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 25,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/caution-i-curse-when-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/caution-i-curse-when-mug-red/0.webp',
          parahead: 'Caution I Curse When..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '350',
          OrgVal: '255',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 26,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/coder-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/coder-mug-red/0.webp',
          parahead: 'Coder Ceramic Coffee..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '549',
          OrgVal: '399',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 27,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/declare-variables-not-war-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/declare-variables-not-war-mug-red/0.webp',
          parahead: 'Declare Variables No..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '600',
          OrgVal: '549',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 28,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/display-noun-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/display-noun-mug-red/0.webp',
          parahead: 'Display Noun Ceramic..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '499',
          OrgVal: '399',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 29,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/eat-sleep-code-repeat-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/eat-sleep-code-repeat-mug-red/0.webp',
          parahead: 'Eat Sleep Code Repea..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '350',
          OrgVal: '299',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 30,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/false-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/false-mug-red/0.webp',
          parahead: 'False Ceramic Mug..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '399',
          OrgVal: '250',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 31,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/hello-world-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/hello-world-mug-red/0.webp',
          parahead: 'Hello World Ceramic..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '399',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 32,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-am-offline-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-am-offline-mug-red/0.webp',
          parahead: 'I Am Offline Ceramic..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '400',
          OrgVal: '300',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 33,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-hate-programming-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-hate-programming-mug-red/0.webp',
          parahead: 'I Hate Programming..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '450',
          OrgVal: '299',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 34,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-need-a-br-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/i-need-a-br-mug-red/0.webp',
          parahead: 'I Need A Break Ceram..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '399',
          OrgVal: '350',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
        },
        {
          id: 35,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/if-brain-empty-mug-red/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mugs/if-brain-empty-mug-red/0.webp',
          parahead: 'If Brain Empty Ceram..',
          productdesc:'Silent Voice Standard Mug: Coffee, a coders great companion when feeling lazy deserves its own appropriate container. So, to fulfil that demand we present you this: A Premium Mug personalized to a coders demand!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'White',
          Theme: 'Coding',
          Size: 'Standard'
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
    <div className="mdetails">
        <div className="mdetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="mdetails-contain2">
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
        <div className="mdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
          <br /><br />
          <h3>Color :&nbsp;&nbsp;{selectedItem.Color}</h3>
          <div className="size-container">
                  <p>Size :</p>
                  <div className="s1">Standard</div>
          </div>
          <hr />
          <p className='amt-head'><strike className='head6'>&#8377;{selectedItem.strikeVal}</strike>&nbsp;&#8377;{selectedItem.OrgVal}<sup className='freeship'>(Free Shipping)</sup></p>
          
          <div className="mugspincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='mugsavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="mugsshopbtn">
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

export default MugsDetails
