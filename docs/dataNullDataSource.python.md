# `dataNullDataSource` Submodule <a name="`dataNullDataSource` Submodule" id="@cdktf/provider-null.dataNullDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNullDataSource <a name="DataNullDataSource" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source null_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  has_computed_default: str = None,
  inputs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.hasComputedDefault">has_computed_default</a></code> | <code>str</code> | If set, its literal value will be stored and returned. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.inputs">inputs</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that is copied into the `outputs` attribute, and accessible directly for interpolation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `has_computed_default`<sup>Optional</sup> <a name="has_computed_default" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.hasComputedDefault"></a>

- *Type:* str

If set, its literal value will be stored and returned.

If not, its value defaults to `"default"`. This argument exists primarily for testing and has little practical use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source#has_computed_default DataNullDataSource#has_computed_default}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.Initializer.parameter.inputs"></a>

- *Type:* typing.Mapping[str]

A map of arbitrary strings that is copied into the `outputs` attribute, and accessible directly for interpolation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source#inputs DataNullDataSource#inputs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetHasComputedDefault">reset_has_computed_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetInputs">reset_inputs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_has_computed_default` <a name="reset_has_computed_default" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetHasComputedDefault"></a>

```python
def reset_has_computed_default() -> None
```

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.resetInputs"></a>

```python
def reset_inputs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNullDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSource.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNullDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNullDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNullDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNullDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.outputs">outputs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.random">random</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.hasComputedDefaultInput">has_computed_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.inputsInput">inputs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.hasComputedDefault">has_computed_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.inputs">inputs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.outputs"></a>

```python
outputs: StringMap
```

- *Type:* cdktf.StringMap

---

##### `random`<sup>Required</sup> <a name="random" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.random"></a>

```python
random: str
```

- *Type:* str

---

##### `has_computed_default_input`<sup>Optional</sup> <a name="has_computed_default_input" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.hasComputedDefaultInput"></a>

```python
has_computed_default_input: str
```

- *Type:* str

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.inputsInput"></a>

```python
inputs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `has_computed_default`<sup>Required</sup> <a name="has_computed_default" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.hasComputedDefault"></a>

```python
has_computed_default: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.inputs"></a>

```python
inputs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNullDataSourceConfig <a name="DataNullDataSourceConfig" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_null import data_null_data_source

dataNullDataSource.DataNullDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  has_computed_default: str = None,
  inputs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.hasComputedDefault">has_computed_default</a></code> | <code>str</code> | If set, its literal value will be stored and returned. |
| <code><a href="#@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.inputs">inputs</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that is copied into the `outputs` attribute, and accessible directly for interpolation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `has_computed_default`<sup>Optional</sup> <a name="has_computed_default" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.hasComputedDefault"></a>

```python
has_computed_default: str
```

- *Type:* str

If set, its literal value will be stored and returned.

If not, its value defaults to `"default"`. This argument exists primarily for testing and has little practical use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source#has_computed_default DataNullDataSource#has_computed_default}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-null.dataNullDataSource.DataNullDataSourceConfig.property.inputs"></a>

```python
inputs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of arbitrary strings that is copied into the `outputs` attribute, and accessible directly for interpolation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.4/docs/data-sources/data_source#inputs DataNullDataSource#inputs}

---



