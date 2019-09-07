/*

  Declare and export all DOM strings here

  e.g.

  export default {
    inlineCart: '[data-inline-cart]',
    inlineCartContents: '[data-inline-cart-contents]',
  };

  Usage:

  import dom from 'common/Dom';
  import { getCartContents } from './handlers';

  $(dom.inlineCartContents).html(getCartContents());

*/
const dom = {};

dom.imageWrap = '.js-image-wrap';
dom.productOption = '.js-product-option';
dom.optionsWrap = '.js-options-wrap';
dom.atc = '.js-atc';

export default dom;
