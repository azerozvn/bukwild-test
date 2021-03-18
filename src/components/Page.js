import Headline from './Headline';
import Subhead from './Subhead';
import ActionBox from './ActionBox';
import React from 'react';

const Page = ({ page, action }) => {
    return (
        <React.Fragment>
            <div className="text-white grid grid-cols-3 gap-3 my-6">
                <div className="col-span-3 sm:col-span-2">
                    <Headline text={page.headline} />
                </div>
                <div className="col-span-3 sm:col-span-1 pr-6">
                    <Subhead text={page.subhead} />
                </div>
            </div>
            <div className="bg-white grid grid-cols-6 gap-3 mt-auto">
                <ActionBox text={page.cta} action={action} />
            </div>
        </React.Fragment>
    )
}

export default Page
