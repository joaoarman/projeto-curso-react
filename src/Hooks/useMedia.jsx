import React from 'react'

const useMedia = (media) => {

    const [mobile, setMobile] = React.useState(null);


    React.useEffect(() => {

        function changeMatch() {
            const {matches} = window.matchMedia(`(max-width: ${media})`);
            setMobile(matches)
        }
        
        changeMatch();
        
        window.addEventListener('resize', changeMatch)

        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, []);
    

    return mobile
}

export default useMedia
