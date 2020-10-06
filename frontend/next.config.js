const withCSS = require("@zeit/next-css");  
const withFonts = require("next-fonts");
const webpack = require('webpack');

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL
  }
});  

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          }
        },

      ],
    })
    return config
  }
};
