import { Spinner } from "reactstrap";

export default function Loader() {
    return (
        <div className="text-center my-auto">
            <Spinner color="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}
