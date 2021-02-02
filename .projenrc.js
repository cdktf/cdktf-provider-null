const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'null@~> 2.0',
  eslint: false,
});

project.synth();
