import { Aki } from 'aki-api'
import React, { useEffect } from 'react'

export default function Akinator() {

    useEffect(() => {

        const region = 'en';
        const aki = new Aki(region);

        async function fetch() {
            await aki.start()
            console.log('question:', aki.question);
            console.log('answers: ', aki.answers);
        }
        fetch()
    }, [])


    return (
        <div>

        </div>
    )
}