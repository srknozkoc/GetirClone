import './card.css'


export default function Card() {
    return(
        <div className={'w-full my-4 bg-[#fafafa]'}>
            <div className={'CardContainer'}>
                <div className={'w-[400px] h-[353px] flex flex-col items-center justify-center  bg-white'}>
                    <img src="	https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt=""/>
                    <h2 className={'mt-3 text-brand-color text-lg font-semibold '}>Her siparişinize bir kampanya</h2>
                    <p className={'text-md '}>Getir’de vereceğiniz her siparişe uygun bir <br/>kampanya bulabilirsiniz.</p>
                </div>
                <div className={'w-[400px] h-[353px] flex flex-col items-center justify-center bg-white'}>
                    <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt=""/>
                    <h2 className={'mt-3 text-brand-color text-lg font-semibold '}>Dakikalar içinde kapınızda</h2>
                    <p className={'text-md '}>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
                </div>
                <div className={'w-[400px] h-[353px] flex flex-col items-center justify-center  bg-white'}>
                    <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt=""/>
                    <h2 className={'mt-3 text-brand-color text-lg font-semibold '}>Binlerce çeşit mutluluk</h2>
                    <p className={'text-md '}>Getir’de binlerce çeşit arasından seçiminizi <br/>yapabilirsiniz.</p>
                </div>
            </div>
        </div>
    );
}