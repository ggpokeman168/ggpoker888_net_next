// sanity.cli.ts
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "chqcoges", // 建议这里直接写死字符串
    dataset: "production",
  },
});
