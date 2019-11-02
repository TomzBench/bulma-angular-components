import { configure } from "@storybook/angular";
configure(
  [
    require.context(
      "../projects/bulma-angular-components/src",
      true,
      /\.stories\.[tj]s$/
    ),
    require.context("../projects/demo/src", true, /\.stories\.[tj]s$/)
  ],
  module
);
