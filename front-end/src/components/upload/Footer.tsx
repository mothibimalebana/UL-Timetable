export default function UploadFooter(){
    return(
        <div className="upload-footer border-solid border-[2px] border-[#EEE] rounded-[0.625rem] ">
            <div className="instructions mt-[3rem] mb-[1.5rem] mx-[1.5rem] flex flex-col gap-[1rem]">
                <div className="title text-black text-standard uppercase font-[500] pb-[1.5rem] border-b-solid border-b-[2px] border-b-[#EEE] pt-[1rem] pl-[1rem]">How to use this system</div>
                <div className="list flex gap-[1rem] items-center">
                    <div className="num flex justify-center items-center rounded-full text-white bg-gold w-[2rem] h-[2rem] font-secondaryBold text-center">1</div>
                    <div className="text text-grey font-secondary">Upload your timetable file using the uploader above</div>
                </div>
                <div className="list flex gap-[1rem] items-center">
                    <div className="num flex justify-center items-center rounded-full text-white bg-gold w-[2rem] h-[2rem] font-secondaryBold text-center">2</div>
                    <div className="text text-grey font-secondary">Select the modules you're enrolled in from the complete list</div>
                </div>
                <div className="list flex gap-[1rem] items-center">
                    <div className="num flex justify-center items-center rounded-full text-white bg-gold w-[2rem] h-[2rem] font-secondaryBold text-center">3</div>
                    <div className="text text-grey font-secondary">View your personalized weekly schedule organized by day</div>
                </div>
                <div className="list flex gap-[1rem] items-center">
                    <div className="num flex justify-center items-center rounded-full text-white bg-gold w-[2rem] h-[2rem] font-secondaryBold text-center">4</div>
                    <div className="text text-grey font-secondary">Use the search function to quickly find specific modules and classes</div>
                </div>
 
            </div>
        </div>

    )
}