import React,{useState} from 'react'
import "./Modetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const MouseDetails = (props) => {
    const {cartData,addToCart} = useCart();
    const [image,setImage] = useState(true);
    const [pincode, setPincode] = useState('');
    const [availability, setAvailability] = useState(null);
    const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
    const displayItems = [
        {
          id: 0,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/hello-world-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/hello-world-coding-mousepad-colorful/0.webp',
          parahead: 'Hello World Coding M..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '200',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 1,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/customized-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/customized-mousepad-colorful/0.webp',
          parahead: 'Customized Mousepad',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'White',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 2,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cyber-city-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cyber-city-mousepad-colorful/0.webp',
          parahead: 'Cyber City Mousepad',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 3,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/demon-slayer-all-hashira-members-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/demon-slayer-all-hashira-members-mousepad-colorful/0.webp',
          parahead: 'Demon Slayer All Has..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 4,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/neon-mountains-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/neon-mountains-mousepad-colorful/0.webp',
          parahead: 'Neon Mountains Mouse..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 5,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/be-the-type-of-person-you-want-to-meet-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/be-the-type-of-person-you-want-to-meet-mousepad-colorful/0.webp',
          parahead: 'Be The Type Of Perso..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'White',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 6,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/coding-code-rain-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/coding-code-rain-mousepad-colorful/0.webp',
          parahead: 'Coding Code Rain Mou..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 7,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/data-code-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/data-code-mousepad-colorful/0.webp',
          parahead: 'Data Code Mousepad',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '200',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 8,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eat-sleep-code-repeat-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eat-sleep-code-repeat-coding-mousepad-colorful/0.webp',
          parahead: 'Eat Sleep Code Repea..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 9,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/python-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/python-coding-mousepad-colorful/0.webp',
          parahead: 'Python Coding Mousep..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '260',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 10,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/honeycomb-hexagon-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/honeycomb-hexagon-mousepad-colorful/0.webp',
          parahead: 'Honeycomb Hexagon..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 11,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/the-world-of-windows-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/the-world-of-windows-mousepad-colorful/0.webp',
          parahead: 'The World Of Windows..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 12,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/think-twice-code-once-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/think-twice-code-once-mousepad-colorful/0.webp',
          parahead: 'Think Twice Code Onc...',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'Colorful',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 13,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/vs-code-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/vs-code-coding-mousepad-colorful/0.webp',
          parahead: 'Vs Code Coding Mouse..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 14,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/windows-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/windows-mousepad-colorful/0.webp',
          parahead: 'Windows Mousepad',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S' 
        },
        {
          id: 15,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cloud-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cloud-coding-mousepad-colorful/0.webp',
          parahead: 'Cloud Coding Mousepa..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '399',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Coding',
          Size: 'S'
        },
        {
          id: 16,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/cloud-coding-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren-the%20attack%20titan-rage-mousepad-colorful/0.webp',
          parahead: 'Eren The Attack Tita..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 17,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/ethernal-sharingans-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/ethernal-sharingans-mousepad-colorful/0.webp',
          parahead: 'Ethernal Sharingans..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 18,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/denji-standing-on-demon-chainsaw-man-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/denji-standing-on-demon-chainsaw-man-mousepad-colorful/0.webp',
          parahead: 'Denji Standing On De..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'White',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 19,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/gojo-sotaru-jujutsu-kisen-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/gojo-sotaru-jujutsu-kisen-mousepad-colorful/0.webp',
          parahead: 'Gojo Sotaru Jujutsu..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '249',
          OrgVal: '150',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 20,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/goku-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren%20jeager-attack-on-titan-mousepad-colorful/0.webp',
          parahead: 'Eren Jeager Attack O..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 21,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/goku-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/eren%20jeager-the-attack%20titan-levi-mousepad-colorful/0.webp',
          parahead: 'Eren Jeager The Atta..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '399',
          OrgVal: '299',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 22,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/goku-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/goku-mousepad-colorful/0.webp',
          parahead: 'Goku Mousepad',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '250',
          Color: 'Black',
          Theme: 'Anime',
          Size: 'S'
        },
        {
          id: 23,
          oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/keisuke-baji-mousepad-colorful/1.webp',
          image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/mousepads/keisuke-baji-mousepad-colorful/0.webp',
          parahead: 'Keisuke Baji Mousepa..',
          productdesc:'Get ready to tackle your coding projects in style with the Hello World Coding Mousepad. This mousepad is made from high-quality, durable material, ensuring it will last for a long time and provide a smooth and comfortable surface for your mouse. The graphic features the classic "Hello World" code, making it a perfect way to show off your love for programming and technology. With its size, this mousepad is suitable for all types of mouse, and will provide a stable surface for all your mouse movements. So why wait? Get your hands on this amazing mousepad today and show off your passion for coding and technology in style!',
          strikeVal: '299',
          OrgVal: '255',
          Color: 'Colorful',
          Theme: 'Anime',
          Size: 'S'
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
    <div className="modetails">
        <div className="modetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="modetails-contain2">
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
        <div className="modetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
                  <div className="s1">S</div>
          </div>
          <hr />
          <p className='amt-head'><strike className='head6'>&#8377;{selectedItem.strikeVal}</strike>&nbsp;&#8377;{selectedItem.OrgVal}<sup className='freeship'>(Free Shipping)</sup></p>
          
          <div className="mousepincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='mouseavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="mouseshopbtn">
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

export default MouseDetails
