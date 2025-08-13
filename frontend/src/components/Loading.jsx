import { ScaleLoader } from "react-spinners";
import '../styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <ScaleLoader color="#64B5F6" />
        </div>
    )
}

export default Loading