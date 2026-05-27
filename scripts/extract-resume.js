const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const resumePath = path.join(__dirname, "..", "ARAVINTH_MCA_NODEJS_2026 (1).pdf");

async function main() {
  const dataBuffer = fs.readFileSync(resumePath);
  const parser = new PDFParse({ data: dataBuffer });
  const result = await parser.getText();
  console.log(result.text);
  await parser.destroy();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
