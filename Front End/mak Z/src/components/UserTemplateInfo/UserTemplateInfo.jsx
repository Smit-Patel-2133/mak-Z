import React from 'react';

const UserTemplateInfo = (props) => {

    return (

        <>
        <div className='h-full w-full cursor-pointer' style={{color:'white'}}>
            <div className='float-left ml-2'>
                <h5 className='pb-0'>{props.name}</h5>
                <p className='opacity-50'>{props.label}</p>
            </div>
            <div className="float-left ml-2">
                <p className='border border-white border-solid rounded-lg px-2 border-opacity-50'>{props.type}</p>
            </div>
        </div>
        </>

    );
}

export default UserTemplateInfo;
