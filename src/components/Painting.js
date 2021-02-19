import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./defaultImg.jpg";


const Painting = ({ url, title, price, profileUrl, tag,quantity }) => (
    <div>
        <img
            src={url}
            alt={title}
            width="480"
        />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{tag}</a>
        </p>
        <p>Ціна:{price} кредитів</p>
        <p>Є в наявності {quantity<=10?'товару  менше 10': 'товару більше 10' }</p>
        <button type="button">Добавити в корзину</button>
    </div>
);

Painting.defaultProps = {
    url:defaultImg,
};

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};


export default Painting;