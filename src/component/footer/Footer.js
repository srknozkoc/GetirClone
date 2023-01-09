import './footer.css'

export default function Footer() {
    return (
        <div className={'footer w-full mb-12'}>
            <div className={'footerContend'}>
                <div className={'mobileApp'}>
                    <h2 className={'text-brand-color text-lg'}>Getir'i İndirin!</h2>
                    <img className={'h-[48px] w-[160px]'} src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt=""/>
                    <img className={'h-[48px] w-[160px]'} src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt=""/>
                    <img className={'h-[48px] w-[160px]'} src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt=""/>
                </div>
                <div className={'description'}>
                    <h2 className={'text-brand-color text-lg'}>Getir'i keşfedin</h2>
                    <a className={'text-sm'} href="/#">Hakkımızda</a>
                    <a className={'text-sm'} href="/#">Kariyer</a>
                    <a className={'text-sm'} href="/#">Teknoloji Kariyerleri</a>
                    <a className={'text-sm'} href="/#">İletişim</a>
                    <a className={'text-sm'} href="/#">Sosyal Sorumluluk Projeleri</a>
                </div>
                <div className={'SSS'}>
                    <h2 className={'text-brand-color text-lg'}>Yardıma mı ihtiyacınız var?</h2>
                    <a className={'text-sm'} href="/#">Sıkça Sorulan Sorular</a>
                    <a className={'text-sm'} href="/#">Kişisel Verilerin Korunması</a>
                    <a className={'text-sm'} href="/#">Gizlilik Politikası</a>
                    <a className={'text-sm'} href="/#">Kullanım Koşulları</a>
                    <a className={'text-sm'} href="/#">Çerez Politikası</a>
                </div>
                <div className={'business'}>
                    <h2 className={'text-brand-color text-lg'}>İş Ortağımız Olun</h2>
                    <a className={'text-sm'} href="/#">Bayimiz Olun</a>
                    <a className={'text-sm'} href="/#">Deponuzu Kiralayın</a>
                    <a className={'text-sm'} href="/#">GetirYemek Restoranı Olun</a>
                    <a className={'text-sm'} href="/#">GetirÇarşı İşletmesi Olun</a>
                    <a className={'text-sm'} href="/#">Zincir Restoranlar</a>
                </div>
            </div>
        </div>
    );
}