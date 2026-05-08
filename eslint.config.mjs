import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([globalIgnores(["**/dist/"]),
{
    extends: [js.configs.recommended],
    plugins: { jest: jestPlugin },
    languageOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        globals: {
            ...globals.node,
            ...jestPlugin.environments.globals.globals

        }
    },

}]);
