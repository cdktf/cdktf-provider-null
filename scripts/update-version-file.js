
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
(function main() {
    const fs = require("fs")
    const path = require("path")
    // set by the projen file that generates this script
    const TERRAFORM_PROVIDER_VERSION = "3.2.1"
    const CDKTF_VERSION = "^0.18.0"
    const filePath = path.join(__dirname, "../dist/dist/version.txt")
    const PREBUILT_PROVIDER_VERSION = fs.readFileSync(filePath, "utf8")
    const SEPARATOR = `| --- | --- | --- |\n`
    if (!fs.existsSync("VERSIONS_COMPATIBILITY.md")) {
        const header = `| Prebuilt Provider Version | Terraform Provider Version | CDKTF Version |\n${SEPARATOR}`
        fs.writeFileSync("VERSIONS_COMPATIBILITY.md", header)
    }
    const text = fs.readFileSync("VERSIONS_COMPATIBILITY.md", "utf8")
    const parts = text.split(SEPARATOR)
    const header = parts[0]
    const oldEntries = parts[1]
    const newVersionEntry = `| ${PREBUILT_PROVIDER_VERSION} | ${TERRAFORM_PROVIDER_VERSION} | ${CDKTF_VERSION} |`;
    // suboptimal, but only way to tell at this point in the build workflow if the there has actually been a provider/cdktf upgrade done
    const isNewEntry = !oldEntries.split("\n").some((entry) => {
        return (entry === newVersionEntry)
    });
    if (isNewEntry) {
        fs.writeFileSync("VERSIONS_COMPATIBILITY.md", `${header}${SEPARATOR}${newVersionEntry}\n${oldEntries}`)
    }
})();    
