import React from "react";

type PageHeaderComponentProps = {
    pageName: string;
    controls: JSX.Element
}

const PageHeaderComponent = ({ pageName, controls }: PageHeaderComponentProps): JSX.Element => {
    return (
        <header className='flex flex-wrap justify-content-between mb-8'>
            <h1 className='font-light m-0 text-color'>{pageName}</h1>
            <div className='controls'>
                {controls}
            </div>
        </header>
    )
}

export default PageHeaderComponent
