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

        await setDoc(doc(db, "urls", slug), {
            slug: slug,
            originalUrl: url
        });

        setShortenUrl(`${window.location.href}${slug}`);
    }


    const handleCopyUrl = () => {
        navigator.clipboard.writeText(`${ShortenUrl}`);
    }

    return (
        <>
            <div id="short-url">
                <div id="short-url-form">
                    <input type="text" onChange={(e) => setUrl(e.target.value)} />
                    <button onClick={handleUrlShorten} >Submit</button>
                </div>
                <hr style={{borderBottom:'1px solid black', width:'100%', margin:'30px'}} />
                <div id="short-url-copy">
                    <h1>{ShortenUrl}</h1>
                    <button onClick={handleCopyUrl}>Copy</button>
                </div>
            </div>
        </>
    )
}

export default ShortenUrlInput