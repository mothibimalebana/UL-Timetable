import Ul from '../assets/svg/ULLogo.svg';

export default function Header (){
    return(
        <div className="header flex gap-5 items-center bg-blue pt-[1rem] pl-[3rem] pb-[0.7rem]">
            <img src={Ul} alt="" />
            <div className="text">
                <h3 className='text-white text-[1.5rem]'>University Of Limpopo</h3>
                <p className='text-grey text-[0.875rem]'>Student Timetable Manager</p>
            </div>
        </div>
    )
}