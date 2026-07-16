import uploadIcon from '../../assets/svg/Icon.svg';

export default function Upload() {
    return(
        <div className="upload border-solid border-[2px] border-[#EEE] rounded-[0.625rem]">
            <div className="title text-standard text-black pt-[1rem] pl-[1rem] uppercase text-standard border-b-solid border-b-[2px] border-b-[#EEE]">Upload Timetable</div>
            <div className="uploader flex  flex-col items-center  gap-[1rem] mt-[3rem] mb-[1.5rem] mx-[1.5rem] bg-[#F9FAFB] border-solid border border-[2px] border-[#BAC9E7] rounded-[0.625rem] px-[2.12rem] py-[2.12rem]">
                <img className='bg-[rgba(12_113_195_0.10)]' src={uploadIcon} alt="upload icon" width="40px"/>
                <p className='text-black text-secondary text-standard'>Drop your timetable JSON file here</p>
                <p className='text-grey text-small'>or click the button below to browse</p>
                <button className='uppercase bg-gold px-[2rem] py-[0.5rem] rounded-[3.5rem] font-secondaryBold text-white tracking-[0.02188rem]'>browse files</button>
            </div>
        </div>
    )
}