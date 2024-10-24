import { Http2ServerRequest } from "http2";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "mariastarostina.42web.io",
      }
    ]
  }
};

export default nextConfig;
