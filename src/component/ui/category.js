export default function Category({ category: {id, title, image} }) {
    return(
        <button className={'flex flex-col group items-center text-center pt-3 pb-5 gap-y-3 hover:bg-[#f3f0fe] rounded-xl'}>
            <img src={image} alt={title} className={'w-12 h-12 rounded border'}/>
            <span className={'text-sm font-semibold text-gray-600 group-hover:text-brand-color tracking-tight'}>{title}</span>
        </button>
    )
}