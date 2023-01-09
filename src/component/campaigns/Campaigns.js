import './campaigns.css'

export default function Campaigns() {
    return(
        <div className={'w-full bg-[#fafafa]'}>
            <div className={'campaigns'}>
                <h2 className={'font-semibold text-sm'}>Kampanyalar</h2>
                <div className={'mobilİnformation'}>
                    <div className={'ml-12 gap-4 flex flex-col'}>
                        <h1 className={'text-3xl font-bold text-white'}>
                            Getir'i İndirin!
                        </h1>
                        <span className={'text-white text-md font-semibold'}>
                            İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.
                        </span>
                        <div className={'flex item-center justify-center gap-4'}>
                            <a href="/#">
                                <img className={'transition-all transform hover:scale-110'} src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt=""/>
                            </a>
                            <a href="/#">
                                <img className={'transition-all transform hover:scale-110'} src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt=""/>
                            </a>
                            <a href="/#">
                                <img className={'transition-all transform hover:scale-110'} src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className={'pt-4 object-cover'}>
                        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="mobil-app"/>
                    </div>
                </div>
            </div>
        </div>
    )
}