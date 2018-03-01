module.exports = (basicConfig, type, defaultConfig) => {
  const rule = defaultConfig.module.rules.find(rule =>
    rule.test.test('mock.css')
  );

  if (rule) {
    rule.exclude = /\.module\.css$/;
  }

  defaultConfig.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      'css-loader?modules=true&localIdentName=[name]__[local]--[hash:base64:5]',
    ],
  });

  return defaultConfig;
};
