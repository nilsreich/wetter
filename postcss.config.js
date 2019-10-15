const cssnano =  require("cssnano");
const postcss_preset_env = require("postcss-preset-env");

module.exports = {
    plugins: [
        postcss_preset_env( {
            stage: 0,
            autoprefixer: {
                grid: true
            }
        } ),
        cssnano( {
            autoprefixer: false,
            preset: [ 'default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        } )
    ]
};
