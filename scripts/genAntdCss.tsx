import fs from "fs";
import { extractStyle } from "@ant-design/static-style-extract";
// import { ConfigProvider } from "antd";
// import React from "react";

const outputPath = "./public/antd.min.css";

// 1. default theme

const css = extractStyle();

// 2. With custom theme

// const testGreenColor = "#008000";
// const testRedColor = "#ff0000";

// const css = extractStyle((node) => (
//   <>
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgBase: testGreenColor,
//         },
//       }}
//     >
//       {node}
//     </ConfigProvider>
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: testGreenColor,
//         },
//       }}
//     >
//       <ConfigProvider
//         theme={{
//           token: {
//             colorBgBase: testRedColor,
//           },
//         }}
//       >
//         {node}
//       </ConfigProvider>
//     </ConfigProvider>
//   </>
// ));

fs.writeFileSync(outputPath, css);

console.log(`🎉 Antd CSS generated at ${outputPath}`);
