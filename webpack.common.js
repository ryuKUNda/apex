module.exports = {
  entry: {
    map: './dist/map',
    radar: './dist/radar',
    AimBot: './dist/Aimbot',
    sense: './dist/sense'
  },
  output: {
    filename: '[name].min.js',
    path: `${__dirname}/docs`
  }
};
