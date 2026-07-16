import UploadFooter from "../components/upload/UploadFooter";
import UploadHeader from "../components/upload/UploadHeader";
import Upload from "../components/upload/Upload";


export default function UploadPage() {
    return(
        <div className="upload-page mx-[8%] my-[6%] flex flex-col gap-[2rem]">
            <UploadHeader/>
            <Upload/>
            <UploadFooter/>
        </div>
    )
}