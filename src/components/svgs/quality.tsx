import * as React from "react";
import { SVGProps } from "react";
const Quality = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      d="m60 13.7 10.7 6.2h12.4l6.2 10.8 10.8 6.2v12.4l6.2 10.7-6.2 10.7v12.4l-10.8 6.2-6.2 10.8H70.7L60 106.3l-10.7-6.2H36.9l-6.2-10.8-10.8-6.2V70.7L13.7 60l6.2-10.7V36.9l10.8-6.2 6.2-10.8h12.4z"
      style={{
        fill: "#647eff",
      }}
    />
    <path
      d="M60 93.9c-18.7 0-33.9-15.2-33.9-33.9S41.3 26.1 60 26.1 93.9 41.3 93.9 60 78.7 93.9 60 93.9zM60 29c-17.1 0-31 13.9-31 31s13.9 31 31 31 31-13.9 31-31-13.9-31-31-31z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M56.3 72.6 41.6 60.9c-1.2-1-1.4-2.7-.4-3.9 1-1.2 2.7-1.4 3.9-.4l12.6 10.1 16.8-18.8c1-1.1 2.8-1.2 3.9-.2s1.2 2.8.2 3.9L60.1 72.3c-1 1.1-2.7 1.2-3.8.3z"
      style={{
        fill: "#ffd77a",
      }}
    />
  </svg>
);
export default Quality;
