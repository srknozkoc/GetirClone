export const Basket = () =>{
    return(
        <div className={'w-[300px] h-auto'}>
            <div>
                <div className={'sepet boş'}>
                    <h2 className={'font-bold mb-3'}>Sepetim</h2>
                    <div className={'border-2 border-[#ffd300] rounded-xl'}>
                        <div className={'flex flex-col items-center justify-center my-16'}>
                            <img  className={'w-[86px]'} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                                  alt=""/>
                            <h1 className={'text-md font-semibold text-brand-color mt-12'}>Sepetiniz şu an boş</h1>
                            <span className={'text-md text-[#818a9c] text-center tracking-tight mt-4'}>Sipariş vermek için sepetinize ürün <br/> ekleyin</span>
                        </div>
                    </div>
                </div>
                <div className={'sepetdolu'}>

                </div>
            </div>
        </div>
    );
};