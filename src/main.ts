import { convertInternalToExternal } from "./utils/converter";
import { generateMockData } from "./utils/mock-data";

// Example usage
const internalData = generateMockData();
const externalData = convertInternalToExternal(internalData);
console.log("STRINGIFY VERSION", JSON.stringify(externalData));
console.log("JSON VERSION", externalData);
