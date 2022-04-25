import React, {useEffect, useRef} from "react";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import './ContactCard.scss'

const ContactCard = (props)=> {
    const {data, onClose} = props;
    const cardRef = useRef();

    // Set focus on the card to handle onBlur event
    useEffect(()=> {cardRef.current.focus()},[])
    
    return (
        <div className="contact-card__container">
            <div className="contact-card" ref={cardRef} onBlur={onClose} tabIndex={0}> 
                {/* <div className="contact-card__cover"/> */}
                <button className="btn--primary contact-card__close" onClick={onClose} onBlur={onClose}>
                    <Close/>
                </button>
                <div className="contact-card__picture">
                    <img alt={data.name?.first} src={data.picture?.large}/>
                </div>
                <div className="contact-card__intro">
                    <p className="contact-card__intro__name">{`${data.name?.first} ${data.name?.last}`}</p>
                    <p className="contact-card__intro__username">{`@${data.login?.username}`}</p>
                </div>
                <div className="contact-card__detail">
                    <div className="detail">
                        <p className="detail__label">Email</p>
                        <p className="detail__value">{data.email}</p>
                    </div>
                    <div className="detail">
                        <p className="detail__label">Phone</p>
                        <p className="detail__value">{data.phone}</p>
                    </div>
                    <div className="detail">
                        <p className="detail__label">Street</p>
                        <p className="detail__value">{data.location?.street?.number} {data?.location?.street?.name}</p>
                    </div>
                    <div className="detail">
                        <p className="detail__label">City</p>
                        <p className="detail__value">{data.location?.city}</p>
                    </div>
                    <div className="detail">
                        <p className="detail__label">State</p>
                        <p className="detail__value">{data.location?.state}</p>
                    </div>
                    <div className="detail">
                        <p className="detail__label">Postcode</p>
                        <p className="detail__value">{data.location?.postcode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;