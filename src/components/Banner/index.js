import './style.scss'

export const Banner = ({ children, urlImage }) => {

    return (
        <section className="banner" id="banner">
            <div className="container flex">
                {
                    urlImage &&
                    <div className="banner__image">
                        <img src={urlImage} alt="" />
                    </div>
                }
                <div className="banner-text">
                    {children}
                </div>
            </div>
        </section>
    )
}
