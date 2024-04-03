const rspack = require("@rspack/core");
const { join } = require("path");

/** @type {import("@rspack/core").Configuration[]} */
module.exports = [
  {
    context: __dirname,
    entry: {
      index: "./src/index.ts",
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    resolve: {
      extensions: ["...", ".ts", ".tsx", ".jsx"],
      tsConfigPath: join(__dirname, "tsconfig.json"),
    },
    devtool: "source-map",
    externalsType: "commonjs",
    externalsPresets: {
      node: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["source-map-loader"],
          enforce: "pre",
        },
        {
          test: /\.(jsx?|tsx?)$/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new rspack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      new rspack.BannerPlugin({
        banner: "require('source-map-support').install();",
        raw: true,
        entryOnly: false,
      }),
      new rspack.ProgressPlugin({
        prefix: "Naily",
      }),
    ].filter(Boolean),
  },
];
