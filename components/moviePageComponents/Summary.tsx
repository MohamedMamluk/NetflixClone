import React from 'react'
interface SummaryProps {
    summary: string
}
const Summary: React.FC<SummaryProps> = ({ summary }) => {
    return (
        <div>
            <h2 className="headers text-xl my-3 font-bold uppercase">
                Summary
            </h2>
            <p className="text-gray-300">{summary}</p>
        </div>
    )
}

export default Summary
