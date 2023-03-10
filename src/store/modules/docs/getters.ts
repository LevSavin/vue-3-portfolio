import type { objectType } from "@/types/common";

export default {
  schemas: ({ schemas }: { schemas: objectType }) => schemas,

  paths: ({ paths }: { paths: objectType }) => paths,
};
