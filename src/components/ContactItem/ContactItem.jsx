import React from "react";
import './ContactItem.scss';

const ContactItem = (props)=> {
    const {data, handleClick}=props;
    const handlePictureError = ()=> {
    }
    return (
        <>
        <div className='contact' onClick={handleClick}>
          <img alt={data.name?.first} className='contact__picture' src={data.picture?.thumbnail} onError={handlePictureError} />
          <div className="contact__name">
            <span className='contact__firstname'>{data.name?.first}</span>
            <span className='contact__lastname'>{data.name?.last}</span>
          </div>
        </div>
        </>
    )
}
export default React.memo(ContactItem)