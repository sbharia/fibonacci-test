import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


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

        const result = await prisma.fibonacci.findMany({
            orderBy: {id: "asc"},
            take: parseInt(n,10),
        });

        const data = []

        for (let i=0; i<n; i++) {
            data.push(result[i].value);
        }

        return {
            props: {
              data,
            },
        };
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