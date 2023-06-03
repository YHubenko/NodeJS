import * as fs from "fs";
import * as path from "path";
import * as https from "https";

if (process.argv.length < 3) {
    console.error("Usage: node downloadPages.js <json_file_path>");
    process.exit(1);
}
const jsonFilePath = process.argv[2];
fs.readFile(jsonFilePath, (err, data) => {
    if (err) {
        console.error(`Error reading JSON file: ${err}`);
        process.exit(1);
    }
    const urls = JSON.parse(data.toString());
    const outputDirName = path.parse(jsonFilePath).name + "_pages";
    if (!fs.existsSync(outputDirName)) {
        fs.mkdirSync(outputDirName);
    }

    urls.forEach((url: any, index: any) => {
        const outputFileName = path.join(outputDirName, `page_${index}.html`);
        https
            .get(url, (res) => {
                if (res.statusCode !== 200) {
                    console.error(
                        `Error downloading page from ${url}: ${res.statusCode}`
                    );
                    return;
                }

                const fileStream = fs.createWriteStream(outputFileName);
                res.pipe(fileStream);

                fileStream.on("finish", () => {
                    console.log(`Page saved to ${outputFileName}`);
                });
            })
            .on("error", (err) => {
                console.error(`Error downloading page from ${url}: ${err}`);
            });
    });
});