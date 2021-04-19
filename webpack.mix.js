
let mix = require('laravel-mix');

mix.sass('src/style.scss', 'dist/').options({
  processCssUrls: false
});
