
export default function UploadHeader(){
    return(
        <div className="upload-header bg-blue flex flex-col gap-[1rem] px-[3rem] py-[3.2rem] rounded-[0.625rem] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)_0_4px_6px_-4px_rgba(0,0,0,0.10)}">
            <h2 className="text-standard text-white">Timetable System</h2>
            <h1 className="text-big text-white font-bold leading-[115%]">Manage Your Class Schedule</h1>
            <p className="text-small text-grey w-[85%]">
                Upload your timetable and organize your academic schedule efficiently. 
                Select your enrolled modules and view your personalized weekly schedule.
            </p>
            <button className="rounded-[3.5rem] bg-gold text-white px-[2rem] py-[0.75rem] w-fit font-secondaryBold ">GET STARTED BELOW</button>
        </div>
    )
}