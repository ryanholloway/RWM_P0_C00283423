import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    reporters: [
      "default",
      [
        "junit",
        {
          outputFile: "test-results/results.xml",
          suiteName: "Unit Tests",
        },
      ],
    ],
  },
});
