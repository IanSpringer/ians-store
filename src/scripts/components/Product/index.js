import slick from 'slick-carousel';
import dom from 'scripts/common/Dom.js'

const slickImages = $el => {
  const options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }

  $el.slick(options)
}

const bindActions = () => {
  slickImages($(dom.imageWrap))
}

const init = () => {
  bindActions()
}

export default init;
