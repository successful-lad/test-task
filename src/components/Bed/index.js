import React from "react";
import bedImg from '../../assets/img/bed.svg';
import starImg from  '../../assets/img/star.svg';
import heartImg from '../../assets/img/heart.svg';
import buyImg from '../../assets/img/buy.svg'

import './style.scss';

const Bed = () => {
  return (
    <div className='bed'>
      <div className="bed__container">
        <img className="bed__container__img" src={bedImg} alt="bed"/>
      </div>
      <div className="bed__information">
        <div className="bed__information__name">
          Тумба прикроватная Rubus с двумя ящиками
        </div>
        <div className="bed__information__rating">
          <div className="bed__information__rating__star">
            <img src={starImg} alt="rating"/>
            <img src={starImg} alt="rating"/>
            <img src={starImg} alt="rating"/>
            <img src={starImg} alt="rating"/>
            <img src={starImg} alt="rating"/>
          </div>
          <div className="bed__information__rating__num">
            4.8
          </div>
          </div>
        <div className="bed__information__price">
          56 720 Р
        </div>
        <div className="bed__information__info">
          Черный
        </div>
        <div className="bed__information__info">
          Ткань
        </div>
        <div className="bed__information__info">
          ш. 349 х в. 234 х г. 323
        </div>
        <div className="bed__information__info">
          Французская раскладушка
        </div>
        <div className="bed__information__seller">
          <a href="/" className="bed__information__seller__link" >
            Laska Family
          </a>
        </div>
      </div>
      <div className='bed__bottomButton'>
        <button type='button' className='bed__bottomButton__like'>
          <img src={heartImg} alt="heart"/>
        </button>
        <button type='button' className='bed__bottomButton__buy'>
          <img src={buyImg} alt="buy" className='bed__bottomButton__buy__img'/>
          купить
        </button>
      </div>
    </div>
  )
};

export default Bed;
