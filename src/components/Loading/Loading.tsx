import { CircularProgress } from "@mui/material";

// Create a new component called SetLoading
const SetLoading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={`set-loading ${isLoading ? "loading" : ""}`}>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <div className="set-loading__text">
                    Loading...
                </div>
            )}
        </div>
    );
};

export default SetLoading;