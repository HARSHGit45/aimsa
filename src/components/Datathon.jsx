import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

export const Datathon = () => {
    const [step, setStep] = useState(1);
    const [fileName, setFileName] = useState("");

    const handleLogin = async () => {
        setStep(2);
    }

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file && file.type === "text/csv") {
            setFileName(file.name);
        } else {
            alert("Please upload a valid CSV file.");
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "text/csv": [".csv"] },
        maxFiles: 1
    });



    return (
        <>
            {step === 1 && (
                <div className="datathon">
                    <h1>Datathon Login</h1>
                    <form action="" className="datathon-login">
                        <input type="text" className="username" placeholder="Username" />
                        <input type="password" className="password" placeholder="Password" />
                        <button className="login" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div className="datathon-step2">
                    <div className="leaderBoard">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio voluptas laborum minus ipsa ea ab exercitationem ducimus dolore, nesciunt reiciendis provident at totam debitis obcaecati tenetur, quam repellat maxime.
                        </p>
                    </div>
                    <div className="upload-csv">
                        <div className="buttons">
                            <button className="submit" onClick={() => { setStep(3) }}>Upload Results CSV</button>
                        </div>
                    </div>
                </div>
            )}
            {step === 3 && (
                <>
                    <div className="datathon-step3">
                        
                        <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer"
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-blue-600">Drop the CSV file here...</p>
                            ) : (
                                <p>Drag & drop a CSV file here, or click to select one</p>
                            )}
                        </div>
                        {fileName && (
                            <>
                                <div className="file-info">
                                    <img src="./img/csv.png" alt="CSV Icon" className="w-8 h-8 mr-2" />
                                    <p className="text-sm font-medium">{fileName}</p>
                                </div>
                                <div className="Submit-results">
                                    <button className="upload-file">Submit</button>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
};
