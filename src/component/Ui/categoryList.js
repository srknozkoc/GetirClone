
export default function CategoryList({ categoryList: {id, title, image,}}) {
    return(
        <div>
            <button id={id} className={'flex items-center text-center gap-x-3 hover:bg-[#f3f0fe]'}>
                <img src={image} alt={title} className={'w-[30px] h-[30px] rounded border'}/>
                <span className={'text-sm font-semibold text-gray-600 group-hover:text-brand-color tracking-tight'}>{title}</span>
            </button>
        </div>
    )
}
