module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        "alias": {
          "components": "./src/components",
          "reducers": "./src/reducers",
          "config": "./src/config",
          "assets": "./src/assets",
          "screens": "./src/screens",
          "utils": "./src/utils",
          "themes": "./src/themes",
          "navigation": "./src/appNavigation",
          "app": "./src",
        }
      }
    ]
  ]
};
