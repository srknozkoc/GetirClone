import ReactFlagsSelect from "react-flags-select";
import React, {useState} from "react";
import { phones } from '../../api/api-settings'
export default function Signİn () {

    const [selected, setSelected] = useState('TR')
    return(
        <div id={'modal'} className={'w-[450] z-70 bg-gray-400 hidden'}>
            <div>
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
                        <input className={'border-2 rounded-lg hover:border-primary-brand-color pl-4 h-[56px] w-full'} type="number"
                               placeholder={'Telefon Numarası'}/>
                    </div>
                    <div className={'mt-2'}>
                        <button className={'bg-[#FFD300] h-[48px] rounded-lg w-full'}>Telefon numarası ile devam et</button>
                    </div>
                </div>
            </div>
        </div>
    );
};