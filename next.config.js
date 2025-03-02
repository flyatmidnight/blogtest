const nextra = require('nextra');

const nextConfig = nextra('./components/layout.js')({
  experimental: {
    turboMode: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
    unoptimized: true, // Required for static export
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

// Manually add output: export for static export
nextConfig.output = 'export';

module.exports = nextConfig;
