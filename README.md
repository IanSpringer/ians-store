<h1>Slate PDP by Ian Springer</h1>

<h3>Theme URL:</h3>

<a href="https://ian-springers-personal-store.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=74638819425">https://ian-springers-personal-store.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=74638819425</a>

<h3>Navigate to /products/budapest-style</h3>

<h3>This PDP was built using Shopify's recommended workflow tool Slate.</h3>

<p>Below is a list of files built from scratch by the author of this repository</p>

<label>Javascript</label>
<ul>
    <li>/src/scripts/common/Dom.js</li>
    <li>/src/scripts/components/Cart/index.js</li>
    <li>/src/scripts/components/Product/index.js</li>
    <li>/src/scripts/components/Product/state.js</li>
</ul>

<label>SCSS</label>
<ul>
    <li>/src/styles/product/product-info.scss</li>
    <li>/src/styles/product/product-info.scss</li>
</ul>

<label>Liquid</label>
<ul>
    <li>/src/templates/product.liquid</li>
    <li>/src/snippets/product/product-controls</li>
    <li>/src/snippets/product/product-images</li>
    <li>/src/snippets/product/product-info</li>
    <li>/src/snippets/product/product-meta</li>

</ul>

<h3>Notes</h3>

<p>I took some liberties with the image wrapper as it wasn't quite clear what the interaction was supposed to be here. This simplified version is a basic carousel with fade-in effect</p>

<p>Variant option selectors + add to cart functionality is working. When selecting a combination of options and adding to bag, you should see a success message with your selected product, followed by your updated Cart instance from inside the Javascript console. The code that handles all of this is inside of /src/scripts/Product/ and /src/scripts/Cart/</p>
