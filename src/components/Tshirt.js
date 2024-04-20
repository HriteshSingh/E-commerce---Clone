import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Tshirt = (props) => {
  const displayItems = [
    {
      id: 0,
      image: 't1.webp',
      parahead: 'Think Outside The Bo..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 1,
      image: 't2.webp',
      parahead: 'Wolverine Design Tsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 2,
      image: 't3.webp',
      parahead: 'Super Hero Cuttable..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 3,
      image: 't4.webp',
      parahead: 'Stay True Design Tsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Yellow',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
      id: 4,
      image: 't5.webp',
      parahead: 'Work Hard Dream Big..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 5,
      image: 't6.webp',
      parahead: 'Pack Of Five Plain T...',
      strikeVal: '1949',
      OrgVal: '1799',
      Color: 'Black',
      Theme: 'Combo',
      Size: 'XL'
    },
    {
      id: 6,
      image: 't7.webp',
      parahead: 'Pack Of Three Plain..',
      strikeVal: '839',
      OrgVal: '689',
      Color: 'Navyblue',
      Theme: 'Combo',
      Size: 'XL'
    },
    {
      id: 7,
      image: 't8.webp',
      parahead: 'Sunnies Today Dog Ch..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 8,
      image: 't9.webp',
      parahead: 'Simpsons Designs Tsh..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XXL'
    },
    {
      id: 9,
      image: 't10.webp',
      parahead: 'Ryomen Sukuna Anime',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 10,
      image: 't11.webp',
      parahead: 'Knock Out Sarcasm De..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XXL'
    },
    {
      id: 11,
      image: 't12.webp',
      parahead: 'Donald Duck Premium..',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 12,
      image: 't13.webp',
      parahead: 'Courage The Cowardly..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Trending',
      Size: 'L'
    },
    {
      id: 13,
      image: 't14.webp',
      parahead: 'Anime Design Regular..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'S'
    },
    {
      id: 14,
      image: 't15.webp',
      parahead: 'Wakanda Forever Grap..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Trending',
      Size: 'L' 
    },
    {
      id: 15,
      image: 't16.webp',
      parahead: 'Kimetsu No Yaiba Gra..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Navyblue',
      Theme: 'Customized',
      Size: 'M'
    },
    {
      id: 16,
      image: 't17.webp',
      parahead: 'Customized Tshirt',
      strikeVal: '849',
      OrgVal: '699',
      Color: 'Blue',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 17,
      image: 't18.webp',
      parahead: 'One Piece Pirate Gra',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Bottlegreen',
      Theme: 'Socialmedia',
      Size: 'S'
    },
    {
      id: 18,
      image: 't19.webp',
      parahead: 'Face Look Of Devil G..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Maroon',
      Theme: 'Socialmedia',
      Size: 'L'
    },
    {
      id: 19,
      image: 't20.webp',
      parahead: 'Bad Boy Mens Typogra..',
      strikeVal: '899',
      OrgVal: '749',
      Color: 'Bottlegreen',
      Theme: 'Socialmedia',
      Size: 'XL'
    },
    {
      id: 20,
      image: 't21.webp',
      parahead: 'Share Prosper Graphi..',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Maroon',
      Theme: 'Trending',
      Size: 'XXL'
    },
    {
      id: 21,
      image: 't22.webp',
      parahead: 'We Are All Artist Mu..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Music',
      Size: 'XXL'
    },
    {
      id: 22,
      image: 't23.webp',
      parahead: 'Breaking Code Chest..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 23,
      image: 't24.webp',
      parahead: 'Never Mind Typograph..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 24,
      image: 't25.webp',
      parahead: 'V Is For Valorant Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 25,
      image: 't26.webp',
      parahead: 'Valorant Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Customized',
      Size: 'L'
    },
    {
      id: 26,
      image: 't27.webp',
      parahead: 'Valorant Chest Logo..',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 27,
      image: 't28.webp',
      parahead: 'Breaking Code Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 28,
      image: 't29.webp',
      parahead: 'Hung Over Graphic Pr..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 29,
      image: 't30.webp',
      parahead: 'Aatm Nirbhar Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Skyblue',
      Theme: 'Motivation',
      Size: 'XXL'
    },
    {
      id: 30,
      image: 't31.webp',
      parahead: 'Loser Sarcastic Stat..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Trending',
      Size: 'S'
    },
    {
      id: 31,
      image: 't32.webp',
      parahead: 'Swag Dekh Sarcastic..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Socialmedia',
      Size: 'M'
    },
    {
      id: 32,
      image: 't33.webp',
      parahead: 'Just Do It Graphic P..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
      id: 33,
      image: 't34.webp',
      parahead: 'Think Big Graphic Pr...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 34,
      image: 't35.webp',
      parahead: 'I Am The Hunter Valo...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Gym',
      Size: 'XXL'
    },
    {
      id: 35,
      image: 't36.webp',
      parahead: 'I Have 3 Moods Tshir...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 36,
      image: 't37.webp',
      parahead: 'Just Do It Graphic P...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 37,
      image: 't38.webp',
      parahead: 'Social Media Like Co...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'L'
    },
    {
      id: 38,
      image: 't39.webp',
      parahead: 'Dragonballz Graphic...',
      strikeVal: '779',
      OrgVal: '629',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
      id: 39,
      image: 't40.webp',
      parahead: 'Marvel Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Trending',
      Size: 'XXL'
    },
    {
      id: 40,
      image: 't41.webp',
      parahead: 'Joker Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Pink',
      Theme: 'Customized',
      Size: 'S'
    },
    {
      id: 41,
      image: 't42.webp',
      parahead: 'Pack Of Three Plain ...',
      strikeVal: '949',
      OrgVal: '799',
      Color: 'Bottlegreen',
      Theme: 'Combo',
      Size: 'M'
    },
    {
      id: 42,
      image: 't43.webp',
      parahead: 'Kothi Bangle Wale Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Trending',
      Size: 'L'
    },
    {
      id: 43,
      image: 't44.webp',
      parahead: 'Rose Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Anime',
      Size: 'XL'
    },
    {
      id: 44,
      image: 't45.webp',
      parahead: 'Yes Iam Different Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
      id: 45,
      image: 't46.webp',
      parahead: 'Stop Saying Tomorrow..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 46,
      image: 't47.webp',
      parahead: 'We Are All Mad Here..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 47,
      image: 't48.webp',
      parahead: 'Raw Real Unfiltered..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gym',
      Size: 'M'
    },
    {
      id: 48,
      image: 't49.webp',
      parahead: 'One More Rep Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Gym',
      Size: 'L'
    },
    {
      id: 49,
      image: 't50.webp',
      parahead: 'Marvel Logo Printed..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Socialmedia',
      Size: 'XL'
    },
    {
      id: 50,
      image: 't51.webp',
      parahead: 'Plain Tshirt',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XXL'
    },
    {
      id: 51,
      image: 't52.webp',
      parahead: 'Pikachu Pokemon Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Gaming',
      Size: 'L'
    },
    {
      id: 52,
      image: 't53.webp',
      parahead: 'Gamer Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
      id: 53,
      image: 't54.webp',
      parahead: 'Scooby Doo Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
      id: 54,
      image: 't55.webp',
      parahead: 'First Rule Of Progra..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 55,
      image: 't56.webp',
      parahead: 'Lion Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Anime',
      Size: 'L'
    },
    {
      id: 56,
      image: 't57.webp',
      parahead: 'Bulls 23 Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 57,
      image: 't58.webp',
      parahead: 'My Code Works I Have..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Skyblue',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
      id: 58,
      image: 't59.webp',
      parahead: 'Always Sounds Better..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Music',
      Size: 'S'
    },
    {
      id: 59,
      image: 't60.webp',
      parahead: 'The Boys Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'M'
    },
    {
      id: 60,
      image: 't61.webp',
      parahead: 'Mood Of The Day Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Customized',
      Size: 'L'
    },
    {
      id: 61,
      image: 't62.webp',
      parahead: 'Mindset Is Everythin..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 62,
      image: 't63.webp',
      parahead: 'Wings Of Freedom Att..',
      strikeVal: '599',
      OrgVal: '449',
      Color: 'Skyblue',
      Theme: 'Anime',
      Size: 'M'
    },
    {
      id: 63,
      image: 't64.webp',
      parahead: 'Naruto Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Socialmedia',
      Size: 'S'
    },
    {
      id: 64,
      image: 't65.webp',
      parahead: 'Include Awesome H Ts..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 65,
      image: 't66.webp',
      parahead: 'How About No Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 66,
      image: 't67.webp',
      parahead: 'Follow Your Dreams T..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Motivation',
      Size: 'XXL'
    },
    {
      id: 67,
      image: 't68.webp',
      parahead: 'Where Words Fail Mus..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Music',
      Size: 'M'
    },
    {
      id: 68,
      image: 't69.webp',
      parahead: 'Code Blooded Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 69,
      image: 't70.webp',
      parahead: 'Goku Premium Anime..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Motivation',
      Size: 'XL'
    },
    {
      id: 70,
      image: 't71.webp',
      parahead: 'Avengers Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Socialmedia',
      Size: 'L'
    },
    {
      id: 71,
      image: 't72.webp',
      parahead: 'Its Not A Bug Its A..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 72,
      image: 't73.webp',
      parahead: 'Hacked Anonymous',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'XXL'
    },
    {
      id: 73,
      image: 't74.webp',
      parahead: 'Xxtenction Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Trending',
      Size: 'S'
    },
    {
      id: 74,
      image: 't75.webp',
      parahead: 'Hustle For The Muscl..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Music',
      Size: 'M'
    },
    {
      id: 75,
      image: 't76.webp',
      parahead: 'Jujutsu Kaisen Tshir..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Trending',
      Size: 'L'
    },
    {
      id: 76,
      image: 't77.webp',
      parahead: 'Rock Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Music',
      Size: 'XL'
    },
    {
      id: 77,
      image: 't78.webp',
      parahead: 'Leg Day Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Gym',
      Size: 'XXL'
    },
    {
      id: 78,
      image: 't79.webp',
      parahead: 'Toxic Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 79,
      image: 't80.webp',
      parahead: 'Naruto X Madara Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Trending',
      Size: 'L'
    },
    {
      id: 80,
      image: 't81.webp',
      parahead: 'Your Favorite Coder..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Skyblue',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 81,
      image: 't82.webp',
      parahead: 'Declare Variables No..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 82,
      image: 't83.webp',
      parahead: 'Go Your Own Way Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Motivation',
      Size: 'XXL'
    },
    {
      id: 83,
      image: 't84.webp',
      parahead: 'Meta Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'XL'
    },
    {
      id: 84,
      image: 't85.webp',
      parahead: 'No Pain No Super Sai...',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Motivation',
      Size: 'M'
    },
    {
      id: 85,
      image: 't86.webp',
      parahead: 'Rock N Roll Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 86,
      image: 't87.webp',
      parahead: 'Bts Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Music',
      Size: 'M'
    },
    {
      id: 87,
      image: 't88.webp',
      parahead: 'Dragon Head Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Plain',
      Size: 'XL'
    },
    {
      id: 88,
      image: 't89.webp',
      parahead: 'Friends Tshirt',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XXL'
    },
    {
      id: 89,
      image: 't90.webp',
      parahead: 'Believe Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Motivation',
      Size: 'S'
    },
    {
      id: 90,
      image: 't91.webp',
      parahead: 'Marshmallow Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Pink',
      Theme: 'Music',
      Size: 'L'
    },
    {
      id: 91,
      image: 't92.webp',
      parahead: 'Broken Developer Tsh..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 92,
      image: 't93.webp',
      parahead: 'Born To Rule Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Hacking',
      Size: 'XL'
    },
    {
      id: 93,
      image: 't94.webp',
      parahead: 'Goku Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 94,
      image: 't95.webp',
      parahead: 'No Pain No Gain..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 95,
      image: 't96.webp',
      parahead: 'Instagram Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'XXL'
    },
    {
      id: 96,
      image: 't97.webp',
      parahead: 'Security Is Just An..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 97,
      image: 't98.webp',
      parahead: 'Light Yagami Death N..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Music',
      Size: 'S'
    },
    {
      id: 98,
      image: 't99.webp',
      parahead: 'Github Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 99,
      image: 't100.webp',
      parahead: 'Maang Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Socialmedia',
      Size: 'M'
    },
    {
      id: 100,
      image: 't101.webp',
      parahead: 'One Piece Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Navyblue',
      Theme: 'Hacking',
      Size: 'XXL'
    },
    {
      id: 101,
      image: 't102.webp',
      parahead: 'Uchiha Itachi Crows..',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
      id: 102,
      image: 't103.webp',
      parahead: 'Spacex Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Bottlegreen',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 103,
      image: 't104.webp',
      parahead: 'Developer Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Maroon',
      Theme: 'Coding',
      Size: 'S'
    },
    {
      id: 104,
      image: 't105.webp',
      parahead: 'Your Workout Is My..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Gym',
      Size: 'XL'
    },
    {
      id: 105,
      image: 't106.webp',
      parahead: 'Things I Hate Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Red',
      Theme: 'Hacking',
      Size: 'S'
    },
    {
      id: 106,
      image: 't107.webp',
      parahead: 'Git Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Skyblue',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 107,
      image: 't108.webp',
      parahead: 'Hello World Tshirt',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'White',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 108,
      image: 't109.webp',
      parahead: 'You Are Special Tshi..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Blue',
      Theme: 'Coding',
      Size: 'M'
    },
    {
      id: 109,
      image: 't110.webp',
      parahead: 'Theres No Place Like..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Hacking',
      Size: 'M'
    },
    {
      id: 110,
      image: 't111.webp',
      parahead: 'It Works Just Dont T..',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Lavender',
      Theme: 'Coding',
      Size: 'L'
    },
    {
      id: 111,
      image: 't112.webp',
      parahead: 'Saitama One Punch Ma..',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Red',
      Theme: 'Lifestyle',
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
      <div className="tshirtShop" style={{color: props.mode==='light'?'black':'white'}}>
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
          <input type="checkbox" id="Combo" name="Theme" value="Combo" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Combo">Combo&nbsp;</label><br/>
          <input type="checkbox" id="Customized" name="Theme" value="Customized" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Customized">Customized&nbsp;</label><br/>
          <input type="checkbox" id="Gaming" name="Theme" value="Gaming" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Gaming">Gaming&nbsp;</label><br/>
          <input type="checkbox" id="Gym" name="Theme" value="Gym" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Gym">Gym&nbsp;</label><br/>
          <input type="checkbox" id="Hacking" name="Theme" value="Hacking" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Hacking">Hacking&nbsp;</label><br/>
          <input type="checkbox" id="Lifestyle" name="Theme" value="Lifestyle" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Lifestyle">Lifestyle&nbsp;</label><br/>
          <input type="checkbox" id="Motivation" name="Theme" value="Motivation" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Motivation">Motivation&nbsp;</label><br/>
          <input type="checkbox" id="Music" name="Theme" value="Music" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Music">Music&nbsp;</label><br/>
          <input type="checkbox" id="Plain" name="Theme" value="Plain" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Plain">Plain&nbsp;</label><br/>
          <input type="checkbox" id="Socialmedia" name="Theme" value="Socialmedia" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Socialmedia">Socialmedia&nbsp;</label><br/>
          <input type="checkbox" id="Trending" name="Theme" value="Trending" className='largerchk' onChange={(e) => handleFilterChange('Theme', e.target.value)}/>
          <label htmlFor="Trending">Trending&nbsp;</label><br/>

          <h3 className='head-form'>Color</h3>
            <input type="checkbox" id="Black" name="Color" value="Black" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Black">Black&nbsp;</label><br/>
            <input type="checkbox" id="Blue" name="Color" value="Blue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Blue">Blue&nbsp;</label><br/>
            <input type="checkbox" id="Bottlegreen" name="Color" value="Bottlegreen" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Bottlegreen">Bottlegreen&nbsp;</label><br/>
            <input type="checkbox" id="Lavender" name="Color" value="Lavender" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Lavender">Lavender&nbsp;</label><br/>
            <input type="checkbox" id="Maroon" name="Color" value="Maroon" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Maroon">Maroon&nbsp;</label><br/>
            <input type="checkbox" id="Navyblue" name="Color" value="Navyblue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Navyblue">Navyblue&nbsp;</label><br/>
            <input type="checkbox" id="Pink" name="Color" value="Pink" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Pink">Pink&nbsp;</label><br/>
            <input type="checkbox" id="Red" name="Color" value="Red" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Red">Red&nbsp;</label><br/>
            <input type="checkbox" id="Skyblue" name="Color" value="Skyblue" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Skyblue">Skyblue&nbsp;</label><br/>
            <input type="checkbox" id="White" name="Color" value="White" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="White">White&nbsp;</label><br/>
            <input type="checkbox" id="Yellow" name="Color" value="Yellow" className='largerchk' onChange={(e) => handleFilterChange('Color', e.target.value)}/>
            <label htmlFor="Yellow">Yellow&nbsp;</label><br/>

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
        <div className="tshirt-content">
          <div className="tshirt-head">
            <h1 className='tshirtCollection-head'>Explore Our Tshirts Collection</h1>
            <p style={{color: props.mode==='light'?'#4d535e':'white'}}>Welcome to hriteshCodeswear.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
          </div>
          <br />
          {filteredItems.length === 0 ? (
            <>
            <img className='nofound' src={require('../images/error.png')} alt="" width={200}/>
           <p className='nomatch'>No matching items found for the selected filters!!!!</p>4
           </>
           ):(
            <>
          <div className="tshirt-img">
            {currentItems.map((item,index)=>(
              <Link to={`/tshirt/${item.id}`} key={item.id} style={{color: props.mode==='light'?'black':'white'}}>
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
      <div className="pagination">
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

export default Tshirt