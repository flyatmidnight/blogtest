const nextra = require('nextra');

module.exports = nextra('./components/layout.js')({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    turboMode: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  headers() {
    return [
      {
        source: '/atom/:nested*',
        headers: [
          {
            key: 'content-type',
            value: 'text/xml',
          },
        ],
      },
    ];
  },
});
