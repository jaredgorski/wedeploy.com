module.exports = {
  magnet: {
    dev: true,
    port: 3001,
    plugins: ['function', 'controller', 'metal'],
    pluginsConfig: {
      metal: {
        src: ['src/**/*.js'],
        soySrc: ['src/**/*.soy'],
        soyDest: ['src'],
      },
    },
    ignore: [
      'build/**',
      'electric/**',
      'node_modules/**',
      'static/**',
      'styles/**',
      'test/**',
      'magnet.config.js',
    ],
  },
};