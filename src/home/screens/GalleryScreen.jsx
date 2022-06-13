import React from 'react';
import '../css/galleryScreen.css';
import { useState} from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';

function GalleryScreen() {
  const bool = useMediaQuery('(max-width: 600px)')
  let data = [
    {
      id: 1,
      imgSrc: './gallery-content/IMG_1.jpg',
    },
    {
      id: 2,
      imgSrc: './gallery-content/IMG_2.jpg',
    },
    {
      id: 3,
      imgSrc: './gallery-content/IMG_3.jpg',
    },
    {
      id: 4,
      imgSrc: './gallery-content/IMG_4.jpg',
    },
    {
      id: 5,
      imgSrc: './gallery-content/IMG_5.jpg',
    },
    {
      id: 6,
      imgSrc: './gallery-content/IMG_6.jpg',
    },
    {
      id: 7,
      imgSrc: './gallery-content/IMG_7.jpg',
    },
    {
      id: 8,
      imgSrc: './gallery-content/IMG_8.jpg',
    },
    {
      id: 9,
      imgSrc: './gallery-content/IMG_9.jpg',
    },
    {
      id: 10,
      imgSrc: './gallery-content/IMG_10.jpg',
    },
    {
      id: 11,
      imgSrc: './gallery-content/IMG_11.jpg',
    },
    {
      id: 12,
      imgSrc: './gallery-content/IMG_12.jpg',
    },
    {
      id: 13,
      imgSrc: './gallery-content/IMG_13.jpg',
    },
  ];
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModal(true);
  }

  return (
    <>
      {bool === true ? <MobileBottomNav/> : <SideBar /> }
      <div className={modal ? 'modal open' : 'modal'}>
        <img src={tempImg} alt="Gallery Content" />
        <CloseRoundedIcon onClick={() => {
          setTempImg('');
          setModal(false);
        }}/>
      </div>
      <div className="gallery">
        <h2>Gallery </h2>
        {data.map((item) => {
          return (
            <div className="pics" key={item.id} onClick={() => {getImg(item.imgSrc)}} >
              <img src={item.imgSrc} alt="gallery content" style={{width : "100%",}}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default GalleryScreen;