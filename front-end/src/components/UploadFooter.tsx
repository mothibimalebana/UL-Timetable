import Ul from '../assets/svg/ULLogo.svg';

export default function Footer (){
    return(
        <div className="footer flex flex-col bg-blue gap-[0.5rem] py-3 items-center">
            <img src={Ul} alt="University of Limpopo" width="39" height="14"/>
            <div className="text">
             <p className='text-white'>© 2026 University of Limpopo. All rights reserved.</p>
             <p className='text-grey'>University of Limpopo - Student Timetable Manager</p>
            </div>
        </div>
    )
}