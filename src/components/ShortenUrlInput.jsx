import React from 'react';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
import "../styles/ShortenUrlInput.css";
import tinyid from "tiny-unique-id";
import { ColorRing } from 'react-loader-spinner'

const ShortenUrlInput = () => {

    const [url, setUrl] = useState();
    const [ShortenUrl, setShortenUrl] = useState();
    const [loader, setLoader] = useState(false);

    const handleUrlShorten = async () => {
        const slug = tinyid.unique();
        
        if(url){
            if (url.slice(0, 8) == "https://") {
                setLoader(true)
                await setDoc(doc(db, "urls", slug), {
                    slug: slug,
                    originalUrl: url
                });
                setShortenUrl(`${window.location.href}${slug}`);
                
            } else {
                alert("Kindly paste url including \"https://\"");
            }
        }else{
            alert("Input is empty");
        }
        
        setLoader(false);
    }


    const handleCopyUrl = () => {
        navigator.clipboard.writeText(`${ShortenUrl}`);
        alert("Link Copied");
    }

    return (
        <>
            <div id="short-url">
                <div id="short-url-form">
                    <input id="short-input" type="text" onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL here..." />
                    <button id="short-btn1" onClick={handleUrlShorten} >Create Link</button>
                </div>
                <hr style={{ borderBottom: '1px solid black', width: '100%', margin: '30px' }} />
                <div id="short-url-copy">
                    <div style={{display: loader ? "block" : "none"}}>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>
                    {
                        ShortenUrl && <h1 id="short-h1">{ShortenUrl}</h1>
                    }
                    {
                        ShortenUrl && <button id="short-btn2" onClick={handleCopyUrl}>Copy to Clipboard</button>
                    }
                </div>
            </div>
        </>
    )
}

export default ShortenUrlInput