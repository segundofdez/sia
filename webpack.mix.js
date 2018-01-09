let mix = require('laravel-mix');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 */

mix.less('less/sia.less', 'css', {
    outputStyle: mix.inProduction ? 'compressed' : 'expanded'
})
/*
    .options({
        postCss: [
            require('autoprefixer')({
                browsers: '>5%'
            }),
        ]
    })
    .combine([
        'public/css/sia.css'],
        'public/css/sia.min.css')
;
*/