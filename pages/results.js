import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Results({data}) {
    
    const router = useRouter();
    const result = data.join(', ');
    
    return (
        <>
            <div>
                <h1>Fibonacci Numbers:</h1>
                <p>{result}</p>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    try {
        const {query} = context;
        const n = query.n;

        //get data from the sqlite db
    } 
    catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
              data: null,
            },
        };
    }
}