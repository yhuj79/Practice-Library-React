import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import EiffelTower from "../Photo/EiffelTower.jpg";
import StatueOfLiberty from "../Photo/StatueOfLiberty.jpg";
import TajMahal from "../Photo/TajMahal.jpg";
import TowerBridge from "../Photo/TowerBridge.jpg";

const StPhoto = styled.div`
    padding: 3rem;
    margin-top: 1rem; margin-bottom: 2rem;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.7s;

    & .PhotoImage {
        display: block; margin: auto;
    }
    & .slick-next:before, .slick-prev:before {
        color: #353535;
    }

    @keyframes smoothAppear {
        from {
          opacity: 0;
          transform: translateY(-5%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    
    animation: smoothAppear 0.7s;
`;

export default function Photo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, autoplaySpeed: 3000
    };
    return (
        <StPhoto>
            <Slider {...settings}>
                <div>
                    <img className="PhotoImage" alt="EiffelTower" src={EiffelTower} />
                </div>
                <div>
                    <img className="PhotoImage" alt="StatueOfLiberty" src={StatueOfLiberty} />
                </div>
                <div>
                    <img className="PhotoImage" alt="TajMahal" src={TajMahal} />
                </div>
                <div>
                    <img className="PhotoImage" alt="TowerBridge" src={TowerBridge} />
                </div>
            </Slider>
        </StPhoto>
    );
}