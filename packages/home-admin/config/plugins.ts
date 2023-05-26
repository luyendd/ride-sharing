export default ({ env }) => ({
  'duplicate-button': true,
  sentry: {
    enabled: env('NODE_ENV') === 'production',
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  // 'cloudflare-pages': {
  //   enabled: env('NODE_ENV') === 'production',
  //   config: {
  //     instances: [
  //       {
  //         name: 'production website',
  //         hook_url: 'https://...',
  //       },
  //       {
  //         name: 'preview website',
  //         hook_url: 'https://...',
  //       },
  //     ],
  //   },
  // },
  'rest-cache': {
    config: {
      provider: {
        name: 'memory',
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          'api::category.category',
          'api::restaurant.restaurant',
        ],
      },
    },
  },
  seo: {
    enabled: true,
  },
});
