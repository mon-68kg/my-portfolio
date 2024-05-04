import { FiCheckCircle } from "react-icons/fi";


import { show_hide } from '../utils/helpers';

function SentSuccess() {
    return (
        <div id="sent" className="d-none d-flex flex-column justify-content-center align-items-center vw-100 vh-100 position-fixed">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <FiCheckCircle id="sent-check" className="text-success"/>
                <div className="fs-4 fw-bold mt-3">Thank you!</div>
                <div className="">Your submission has been sent.</div>
            </div>
            <button className="btn btn-primary mt-3 fw-semibold px-4" onClick={show_hide}>Ok</button>
        </div>
    );
}

export default SentSuccess;