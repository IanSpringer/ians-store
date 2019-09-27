import 'styles/templates/collection/index.scss';
import Collection from 'components/Collection';
import { getData } from 'scripts/vue/graphql/collections.js'

Collection()
getData();

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {});
