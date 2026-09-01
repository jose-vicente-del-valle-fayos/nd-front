import React, { useEffect } from 'react';

const Redirige = ({ url }: any) => {
    useEffect(() => {
        window.location.replace(url);
    }, [url]);

    return(<div></div>)
};

export default Redirige;