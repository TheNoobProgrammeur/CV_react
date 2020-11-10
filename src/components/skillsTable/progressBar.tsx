import React  from "react";

export  const ProgressBar = (props : {
    styleProgress: any,
    labelstyle: any,
}) => {

    const styleProgress =  props.styleProgress;
    const labelStyles = props.labelstyle

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    return <div style={containerStyles}>
            <div style={styleProgress}>
                <span style={labelStyles}>{styleProgress.width}</span>
            </div>
        </div>
    ;
};
