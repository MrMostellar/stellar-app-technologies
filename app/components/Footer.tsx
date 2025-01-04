import React from 'react'

export default function Footer() {
    return (
        //column of two for the UL items and the copyright
        <div className='flex flex-col items-center bg-gray-50'>
            <div className="flex-1 bg-gray-500">
                {/*top half of column is a row of columns*/}
                <div className='flex flex-row justify-evenly'>
                    <div className='flex-1'>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                    </div>
                    <div className='flex-1'>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                    </div>
                    <div className='flex-1'>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                        <h2>[UL items here]</h2>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-yellow-300">
                <h1 className="">&copy; 2025 Stellar App Technologies LLC</h1>
            </div>
        </div>
    )
}
