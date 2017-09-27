const path  = require("path"),
      utils = require(path.join(__dirname, "../../build/utils")),
      pkg   = require(path.join(__dirname, "package.json"));

const format  = utils.getRollupFormat(process.argv),
      minify  = utils.hasMinifyFlag(process.argv),
      globals = {
          "@angular/core": "ng.core",
          "@angular/forms": "ng.forms",
          "@ng-dynamic-forms/core": "ngDF.core",
          "@progress/kendo-angular-dateinputs": "progress/kendo-angular-dateinputs",
          "@progress/kendo-angular-dropdowns": "progress/kendo-angular-dropdowns",
          "@progress/kendo-angular-inputs": "progress/kendo-angular-inputs",
          "@progress/kendo-angular-upload": "progress/kendo-angular-upload",
          "angular2-text-mask": "angular2-text-mask"
      };

export default {
    input: "./dist/@ng-dynamic-forms/ui-kendo/public_api.js",
    output: {
        file: `./dist/@ng-dynamic-forms/ui-kendo/bundles/ui-kendo.${format}.${minify ? "min." : ""}js`,
        format: format
    },
    banner: utils.getBanner(pkg),
    context: "this",
    exports: "named",
    external: Object.keys(globals),
    globals: globals,
    name: "ngDF.uiKendo",
    plugins: utils.getRollupPlugins(minify),
    sourcemap: true
};
