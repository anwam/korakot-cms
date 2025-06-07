module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      /** @type {import('@strapi/provider-upload-aws-s3').InitOptions} */
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          rootPath: "strapi/uploads",
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        }
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
  'strapi-cache': {
    enabled: true,
    config: {
      debug: false, // Enable debug logs
      max: 1000, // Maximum number of items in the cache (only for memory cache)
      ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
      size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB) (only for memory cache)
      allowStale: false, // Allow stale cache items (only for memory cache)
      cacheableRoutes: ['/api/products', '/api/categories'], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
      provider: 'memory', // Cache provider ('memory' or 'redis')
      cacheHeaders: true, // Plugin also stores response headers in the cache (set to false if you don't want to cache headers)
      cacheAuthorizedRequests: false, // Cache requests with authorization headers (set to true if you want to cache authorized requests)
      cacheGetTimeoutInMs: 1000, // Timeout for getting cached data in milliseconds (default is 1 seconds)
    }
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  // "rest-cache": {
  //   config: {
  //     provider: {
  //       name: "memory",
  //       options: {
  //         max: 32767,
  //         maxAge: 3600,
  //       },
  //     },
  //     strategy: {
  //       contentTypes: [
  //         // list of Content-Types UID to cache
  //         "api::car.car",
  //       ],
  //     },
  //   },
  // },
  meilisearch: {
    config: {
      host: env("MEILISEARCH_URL") || "http://meilisearch:7700",
      // Your master key or private key
      apiKey: "-Hmt61V9p-tyo3B9r5oIynItL_9JzTVSg5jgpFFwskY",
      car: {
        settings: {
          filterableAttributes: [
            "make",
            "models",
            "car_type",
            "fuel_type",
            "transmission",
          ],
          sortableAttributes: [
            "make",
            "models",
            "car_type",
            "fuel_type",
            "transmission",
          ],
        },
      },
    },
  },
});
