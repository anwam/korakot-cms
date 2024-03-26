module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      /** @type {import('@strapi/provider-upload-aws-s3').InitOptions} */
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        rootPath: "strapi/uploads",
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::car.car",
        ],
      },
    },
  },
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
