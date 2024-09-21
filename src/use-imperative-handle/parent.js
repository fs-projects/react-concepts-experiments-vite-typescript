import React from "react";
import ChildOfUseImperativeHandle from './child';

const ParentOfUseImperativeHandle = () => {
    return (
        <>
            <button>Reset from Parent</button>
            <ChildOfUseImperativeHandle />
        </>
    )
}

export default ParentOfUseImperativeHandle;