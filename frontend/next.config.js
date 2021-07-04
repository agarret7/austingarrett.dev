const withCSS = require("@zeit/next-css");  
const withFonts = require("next-fonts");
const webpack = require('webpack');

module.exports = {
  env: {
    API_URL: process.env.API_URL || "localhost:1337"
  },
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
