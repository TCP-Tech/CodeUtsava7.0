import React,{useState} from'react';
import './Section15.css';
import { motion } from "framer-motion";

import Img1 from'../../../../assets/images/glimpses/img1.jpg';
import Img2 from'../../../../assets/images/glimpses/img2.jpg';
import Img3 from'../../../../assets/images/glimpses/img3.jpg';
import Img4 from'../../../../assets/images/glimpses/img4.jpg';
import Img5 from'../../../../assets/images/glimpses/img5.jpg';
import Img7 from'../../../../assets/images/glimpses/img7.jpg';
import Img8 from'../../../../assets/images/glimpses/img8.jpg';
import Img9 from'../../../../assets/images/glimpses/img9.jpg';
import Img10 from'../../../../assets/images/glimpses/img10.jpg';

const Section15 = () => {

    let data = [
        {
            id : 1,
            imgSrc : Img1,
        },
        {
            id : 7,
            imgSrc : Img7,
        },
        {
            id : 2,
            imgSrc : Img2,
        },
        {
            id : 3,
            imgSrc : Img3,
        },
        {
            id : 4,
            imgSrc : Img4,
        },
        {
            id : 5,
            imgSrc : Img5,
        },
        
        {
            id : 7,
            imgSrc : Img7,
        },
        {
            id : 8,
            imgSrc : Img8,
        },
        {
            id : 9,
            imgSrc : Img9,
        },
        {
            id : 10,
            imgSrc : Img10,
        },
        
    ]

    // const [model, setModel] = useState(false);
    // const [tempimgSrc, setTempImgSrc] = useState('');

    // const getImg = (imgSrc) =>{

    //     setTempImgSrc(imgSrc);
    //     setModel(true);
    // }
    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: false }}
            className="codeutsava__section15"
            id="analytics"
        >
        <div className = "codeutsava__section15-body"> 
        <div className="codeutsava__section15-title">Glimpses</div>
        <div className = "gallery">

            {data.map((item,index) => {

                return (

                    <div className = "pics" key = {index} >
                        <img src = {item.imgSrc} style = {{width: '100%' }} alt = "img"/>
                    </div>

                )
            }
            )}
        </div>
        </div>
        </motion.div>
        </>
    )
}

export default Section15;

