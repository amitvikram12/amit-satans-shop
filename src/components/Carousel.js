function Carousel() {
    return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{width:"100%"}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="truffle.png" width="100%" height="700" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="buttercream.webp" width="100%" height="700" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img width="100%" height="700" src="macarone.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    )
}

export default Carousel;