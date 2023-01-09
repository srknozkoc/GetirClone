import React from "react";
import './section.css'
import Slider from 'react-slick'
import ReactFlagsSelect from "react-flags-select";
import {useState} from "react";
import {phones, settings} from '../../api/api-settings'

export default function HeroSection() {
    const [selected, setSelected] = useState('TR')
    return (
        <div className={'main-section'}>
            <Slider {...settings}>
                <div>
                    <img className={'w-full object-cover h-[500px]'}
                         src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt=""/>
                </div>
                <div>
                    <img className={'w-full object-cover h-[500px]'}
                         src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt=""/>
                </div>
                <div>
                    <img className={'w-full object-cover h-[500px]'}
                         src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt=""/>
                </div>
                <div>
                    <img className={'w-full object-cover h-[500px]'}
                         src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt=""/>
                </div>
            </Slider>
            <div className={'section'}>
                <div>
                    <img className={'w-[180px]'}
                         src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                         alt=""/>
                    <h3 className={'text-white text-4xl font-sans font-semibold mt-12'}>Dakikalar
                        içerisinde <br/> kapınızda</h3>
                </div>
                <div className={'login'}>
                    <h2 className={'text-[#5d3ebc] text-center font-semibold mb-2'}>Giriş yap veya kayıt ol</h2>
                    <div className={'flex gap-2 justify-center'}>
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            className={"rfs-custom"}
                        />
                        <input className={'border-2 rounded-lg hover:border-primary-brand-color pl-4 h-[56px] w-full'}
                               type="number"
                               placeholder={'Telefon Numarası'}/>
                    </div>
                    <div className={'mt-2'}>
                        <button className={'bg-[#FFD300] h-[48px] rounded-lg w-full'}>Telefon numarası ile devam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

