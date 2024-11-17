const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");

  const connections = {
    mysql: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: {
          rejectUnauthorized: false,
        },
        // ssl: env.bool("DATABASE_SSL", false) && {
        //   key: env("DATABASE_SSL_KEY", undefined),
        //   cert: env("DATABASE_SSL_CERT", undefined),
        //   ca: env("DATABASE_SSL_CA", undefined),
        //   capath: env("DATABASE_SSL_CAPATH", undefined),
        //   cipher: env("DATABASE_SSL_CIPHER", undefined),
        //   rejectUnauthorized: env.bool(
        //     "DATABASE_SSL_REJECT_UNAUTHORIZED",
        //     true
        //   ),
        // },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    mysql2: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: {
          rejectUnauthorized: false,
        },
        // ssl: env.bool("DATABASE_SSL", false) && {
        //   key: env("DATABASE_SSL_KEY", undefined),
        //   cert: env("DATABASE_SSL_CERT", undefined),
        //   ca: env("DATABASE_SSL_CA", undefined),
        //   capath: env("DATABASE_SSL_CAPATH", undefined),
        //   cipher: env("DATABASE_SSL_CIPHER", undefined),
        //   rejectUnauthorized: env.bool(
        //     "DATABASE_SSL_REJECT_UNAUTHORIZED",
        //     true
        //   ),
        // },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: {
          rejectUnauthorized: false,
        },
        // ssl: env.bool("DATABASE_SSL", false) && {
        //   key: env("DATABASE_SSL_KEY", undefined),
        //   cert: env("DATABASE_SSL_CERT", undefined),
        //   ca: env("DATABASE_SSL_CA", undefined),
        //   capath: env("DATABASE_SSL_CAPATH", undefined),
        //   cipher: env("DATABASE_SSL_CIPHER", undefined),
        //   rejectUnauthorized: env.bool(
        //     "DATABASE_SSL_REJECT_UNAUTHORIZED",
        //     false
        //   ),
        // },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      acquireConnectionTimeout: 600000,
      pool: {
        min: env.int("DATABASE_POOL_MIN", 0),
        max: env.int("DATABASE_POOL_MAX", 100),
        acquireTimeoutMillis: 300000,
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 50000,
        idleTimeoutMillis: 300000,
        reapIntervalMillis: 10000,
        createRetryIntervalMillis: 2000,
        propagateCreateError: false,
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
