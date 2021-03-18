import React from 'react'

const ActionBox = ({ text, action }) => {
    return (
        <React.Fragment>
            <div className="col-span-6 p-8 pb-0 sm:col-span-4 sm:p-16 ">
                <p className="text-normal sm:text-xl font-bold">{text}</p>
            </div>
            <div className="col-span-6 p-8 pt-0 sm:col-span-2 sm:py-12 sm:pr-8 sm:pl-0">
                {/* Simply call to next page upon click */}
                <a className="uppercase block w-full py-1 sm:py-2 text-sm font-bold cursor-pointer" onClick={action}>Let's talk. <span className="text-xl color-primary">&rarr;</span></a>
            </div>
        </React.Fragment>
    )
}

export default ActionBox
