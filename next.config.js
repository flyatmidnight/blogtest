const nextra = require('nextra');

const nextConfig = nextra('./components/layout.js')({
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

nextConfig.output = 'export';

module.exports = nextConfig;