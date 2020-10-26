import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
const images = props.images.map((image) => <ImageCard
    key={image.id} image={image}></ImageCard>);

    return(
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;