"use client"
import React, { useEffect } from 'react';
import './page.module.css'
import { useRouter } from 'next/navigation.js';

export default function Home() {
    const Router=useRouter()
    useEffect (()=>{
        Router.push("/main")
    
    },[])
return (<></>
)
}
