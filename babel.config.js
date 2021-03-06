const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        }
      },
    ]
  ];
  
  const plugins = [
      "@babel/plugin-proposal-class-properties",
      ["component", 
        {
          "libraryName": "mint-ui",
          "style": true
        }],
      // ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
  ];
  module.exports = { presets, plugins };