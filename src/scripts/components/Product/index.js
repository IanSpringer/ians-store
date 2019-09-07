import slick from 'slick-carousel';
import dom from 'scripts/common/Dom.js';
import { State } from 'scripts/components/Product/state.js'
import { addToCart, getCart } from 'scripts/components/Cart'

export const fetchProductData = handle => {
  $.get(`/products/${handle}.json`)
    .then(data => {
      State.activeVariant = data.product.variants[0].id;
      data.product.variants.map(variant => {
        const variantObject = {
          id: variant.id,
          optionString: variant.title.split(' / ').join(':')
        }
        State.formattedVariants.push(variantObject)
      });
    })
}

const slickImages = $el => {
  const options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button class="slick-arrow next"></button>',
    prevArrow: '<button class="slick-arrow prev"></button>'
  }

  $el.slick(options)
}

const optionSelect = event => {
  const $target = $(event.currentTarget);
  const optionArray = [];
  $target.parent(dom.optionsWrap).children(dom.productOption).removeClass('is-active')
  $target.addClass('is-active');
  $(`${dom.productOption}.is-active`).each(function(key, obj) {
    return optionArray.push($(obj).attr('data-value'))
  })
  const optionString = optionArray.join(':')
  State.activeVariant = State.formattedVariants.filter(variant => variant.optionString === optionString)[0].id
}

const bindActions = () => {
  $(dom.productOption).on('click', optionSelect)
  $('.js-atc').on('click', function() {
    addToCart(State.activeVariant, 1, {})
      .then(res => console.log(`You have added ${res.title} to your cart`))
      .then(res => getCart())
      .then(res => console.log(`Here is your cart:`, res))
      .catch(error => console.log(error))
  })
}

const init = () => {
  slickImages($(dom.imageWrap));
  fetchProductData(window.product.handle);
  bindActions();
}

export default init;
