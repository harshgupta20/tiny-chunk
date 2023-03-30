import React from 'react';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
import "../styles/ShortenUrlInput.css";
import tinyid from "tiny-unique-id";

const ShortenUrlInput = () => {

    const [url, setUrl] = useState();
    const [ShortenUrl, setShortenUrl] = useState();

    const handleUrlShorten = async () => {
        const slug = tinyid.unique();

        if(url.slice(0,8) == "https://"){
            await setDoc(doc(db, "urls", slug), {
                slug: slug,
                originalUrl: url
            });
            setShortenUrl(`${window.location.href}${slug}`);

        }else{
            alert("Kindly paste url including \"https://\"");
        }

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
                <hr style={{borderBottom:'1px solid black', width:'100%', margin:'30px'}} />
                <div id="short-url-copy">
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