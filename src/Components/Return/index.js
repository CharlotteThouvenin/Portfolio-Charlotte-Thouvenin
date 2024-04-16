

export const UpButton = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        (
            <button className='btn btn-dark' onClick={scrollToTop}>
                <i className="fa-solid fa-circle-up"></i>
            </button>
        )
    );
};


