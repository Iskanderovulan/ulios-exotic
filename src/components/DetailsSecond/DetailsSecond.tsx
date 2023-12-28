import React from 'react';
import s from './DetailsSecond.module.scss'
import { ISwiper } from 'interfaces/interfaces';
import SwiperFade from 'components/SwiperFade/SwiperFade';



const DetailsSecond: React.FC<ISwiper> = ({ ingredients }) => {

    if (!ingredients) {
        return null;
    }

    return (
        <div className='col'>
            <div className={s.detailsSecond}>
                <SwiperFade ingredients={ingredients} />
            </div>
        </div>
    );
};

export default DetailsSecond;