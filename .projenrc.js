/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@maed223/provider-project-test-final");
const project = new CdktfProviderProject({
  useCustomGithubRunner: false,
  terraformProvider: "null@~> 3.0",
  cdktfVersion: "^0.18.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "16.14.0",
  jsiiVersion: "^5.0.1",
  devDeps: ["@maed223/provider-project-test-final@0.0.2"],
});

project.synth();
