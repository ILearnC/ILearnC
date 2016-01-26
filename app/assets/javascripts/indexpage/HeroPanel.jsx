let HeroPanel = React.createClass({
    render: function () {
        return (
          <div className="hero">
            <div id="hero-carousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#hero-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#hero-carousel" data-slide-to="1"></li>
                <li data-target="#hero-carousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src='/assets/images/learn1.jpg'/>
                </div>
                <div className="item">
                  <img src='/assets/images/learn2.jpg'/>
                </div>
                <div className="item">
                  <img src='/assets/images/learn3.jpg'/>
                </div>
              </div>

              <a className="left carousel-control" href="#hero-carousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a className="right carousel-control" href="#hero-carousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </div>
        )
    }
});
