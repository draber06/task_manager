import React, { useState, useEffect } from "react";

function CloseButton({ setObjects, id }) {
    const handleCloseBtnClick = () => {
        const confirmation = window.confirm("Удалить?");
        if (!confirmation) return;
        setObjects({ type: "deleteObject", objId: id });
    };

    return <div className="close-btn" onClick={handleCloseBtnClick}></div>;
}

export default CloseButton;
