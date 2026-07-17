import calendarIcon from '../../assets/svg/blueCalendar.svg'

type CardProps = {
    img: string;
    content: string;
    count: string;
}

export default function Card({img = calendarIcon , content = "Modules", count = "6"}: CardProps){
    return(
        <div className="card font-secondary grid grid-cols-2 grid-rows-[auto_auto] shadow-xl w-fit gap-x-[.25rem] border-solid border-[2px] border-[#EEE] pl-[2rem] pr-[13rem] py-[2rem] rounded-md">
            <div className="card-img flex items-center">
                <div className="bg-grey/10 w-fit py-[.75rem] px-[.75rem] rounded-md">
                    <img src={img} alt="icon of a calendar"/>
                </div>
            </div>
            <h2 className="text-standardBold text-[4rem] text-ocean font-bold self-start align-top">{count}</h2>
            <p className="font-bold col-start-2 h-fit">{content}</p>
        </div>
    )
}