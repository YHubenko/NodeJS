"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var https = require("https");
if (process.argv.length < 3) {
    console.error("Usage: node downloadPages.js <json_file_path>");
    process.exit(1);
}
var jsonFilePath = process.argv[2];
fs.readFile(jsonFilePath, function (err, data) {
    if (err) {
        console.error("Error reading JSON file: ".concat(err));
        process.exit(1);
    }
    var urls = JSON.parse(data.toString());
    var outputDirName = path.parse(jsonFilePath).name + "_pages";
    if (!fs.existsSync(outputDirName)) {
        fs.mkdirSync(outputDirName);
    }
    urls.forEach(function (url, index) {
        var outputFileName = path.join(outputDirName, "page_".concat(index, ".html"));
        https
            .get(url, function (res) {
            if (res.statusCode !== 200) {
                console.error("Error downloading page from ".concat(url, ": ").concat(res.statusCode));
                return;
            }
            var fileStream = fs.createWriteStream(outputFileName);
            res.pipe(fileStream);
            fileStream.on("finish", function () {
                console.log("Page saved to ".concat(outputFileName));
            });
        })
            .on("error", function (err) {
            console.error("Error downloading page from ".concat(url, ": ").concat(err));
        });
    });
});
