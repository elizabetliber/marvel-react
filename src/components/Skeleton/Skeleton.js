import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <div className="flex flex-col justify-center">
        <p className="text-[18px] font-bold">Please select a character to see information</p>
        <ContentLoader
            speed={2}
            width={415}
            height={240}
            viewBox="0 0 425 240"
            backgroundColor="#b1afaf"
            foregroundColor="#969292"
            {...props}
        >
            <rect x="1" y="115" rx="0" ry="0" width="375" height="35" />
            <rect x="1" y="64" rx="0" ry="0" width="375" height="35" />
            <rect x="33" y="286" rx="3" ry="3" width="380" height="6" />
            <rect x="49" y="22" rx="0" ry="0" width="326" height="16" />
            <circle cx="20" cy="31" r="20" />
            <rect x="1" y="166" rx="0" ry="0" width="376" height="35" />
        </ContentLoader>
    </div>
)

export default MyLoader