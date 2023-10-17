# `provider`

Refer to the Terraform Registory for docs: [`null`](https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-null.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NullProvider <a name="NullProvider" id="@cdktf/provider-null.provider.NullProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs null}.

#### Initializers <a name="Initializers" id="@cdktf/provider-null.provider.NullProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProvider(
  scope: Construct,
  id: str,
  alias: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-null.provider.NullProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-null.provider.NullProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-null.provider.NullProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs#alias NullProvider#alias}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-null.provider.NullProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-null.provider.NullProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-null.provider.NullProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-null.provider.NullProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-null.provider.NullProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-null.provider.NullProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-null.provider.NullProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-null.provider.NullProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-null.provider.NullProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-null.provider.NullProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NullProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-null.provider.NullProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.provider.NullProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-null.provider.NullProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.provider.NullProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-null.provider.NullProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-null.provider.NullProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-null.provider.NullProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NullProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-null.provider.NullProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-null.provider.NullProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NullProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-null.provider.NullProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NullProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-null.provider.NullProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NullProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-null.provider.NullProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-null.provider.NullProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-null.provider.NullProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-null.provider.NullProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-null.provider.NullProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-null.provider.NullProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-null.provider.NullProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-null.provider.NullProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-null.provider.NullProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-null.provider.NullProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-null.provider.NullProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NullProviderConfig <a name="NullProviderConfig" id="@cdktf/provider-null.provider.NullProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-null.provider.NullProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_null import provider

provider.NullProviderConfig(
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-null.provider.NullProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-null.provider.NullProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs#alias NullProvider#alias}

---



