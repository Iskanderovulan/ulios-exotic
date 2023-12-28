import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add this import
import "swiper/css/scrollbar"; // Add this import
import { EffectFade, Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import { ISwiper } from 'interfaces/interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './SwiperFade.scss'


const SwiperFade: React.FC<ISwiper> = ({ ingredients }) => {
    const IMAGE_URL = "https://www.thecocktaildb.com/images/ingredients/";

    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay, Scrollbar]} // Add Autoplay and Scrollbar
            className={'detailsSwiper'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }} // Enable autoplay
            scrollbar={{ draggable: true }} // Enable draggable scrollbar
        >
            {ingredients.map((item, index) => (
                <SwiperSlide key={index}>
                    <LazyLoadImage
                        width="100%"
                        alt={item}
                        effect="blur"
                        src={`${IMAGE_URL}${item}.png`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperFade;