import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
