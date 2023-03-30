import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/Firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';

const Redirect = () => {

    const params = useParams();
    const {slug} = params;
    const [mainUrl, setMainUrl] = useState();

    useEffect(()=> {

        const getUrl = async () => {
            const q = query(collection(db, "urls"), where("slug", "==", slug));
            const data = await getDocs(q);

            var url = data.docs[0].data().originalUrl;
            setMainUrl(url)
            console.log(url);
                window.location.href = url;
            // qurey.onSnapshot((data)=> {
            //     let finalData = data.docs[0].data();
            // })
        }
        getUrl();

    },[slug])


  return (
    <>
    <h1>Redirecting to destination...{mainUrl}</h1>
        {slug}
    </>
  )
}

export default Redirect