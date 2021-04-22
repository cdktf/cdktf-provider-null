# API Reference

**Classes**

Name|Description
----|-----------
[DataNullDataSource](#cdktf-provider-null-datanulldatasource)|*No description*
[NullProvider](#cdktf-provider-null-nullprovider)|*No description*
[Resource](#cdktf-provider-null-resource)|*No description*


**Structs**

Name|Description
----|-----------
[DataNullDataSourceConfig](#cdktf-provider-null-datanulldatasourceconfig)|*No description*
[NullProviderConfig](#cdktf-provider-null-nullproviderconfig)|*No description*
[ResourceConfig](#cdktf-provider-null-resourceconfig)|*No description*



## class DataNullDataSource  <a id="cdktf-provider-null-datanulldatasource"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformDataSource](#cdktf-terraformdatasource)

### Initializer




```ts
new DataNullDataSource(scope: Construct, id: string, config?: DataNullDataSourceConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **config** (<code>[DataNullDataSourceConfig](#cdktf-provider-null-datanulldatasourceconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **hasComputedDefault** (<code>string</code>)  *No description* __*Optional*__
  * **inputs** (<code>Map<string, string></code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**hasComputedDefault** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**inputs** | <code>Map<string, string></code> | <span></span>
**random** | <code>string</code> | <span></span>
**hasComputedDefaultInput**? | <code>string</code> | __*Optional*__
**inputsInput**? | <code>Map<string, string></code> | __*Optional*__

### Methods


#### outputs(key) <a id="cdktf-provider-null-datanulldatasource-outputs"></a>



```ts
outputs(key: string): string
```

* **key** (<code>string</code>)  *No description*

__Returns__:
* <code>string</code>

#### resetHasComputedDefault() <a id="cdktf-provider-null-datanulldatasource-resethascomputeddefault"></a>



```ts
resetHasComputedDefault(): void
```





#### resetInputs() <a id="cdktf-provider-null-datanulldatasource-resetinputs"></a>



```ts
resetInputs(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-null-datanulldatasource-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class NullProvider  <a id="cdktf-provider-null-nullprovider"></a>



__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [TerraformProvider](#cdktf-terraformprovider)

### Initializer




```ts
new NullProvider(scope: Construct, id: string, config?: NullProviderConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **config** (<code>[NullProviderConfig](#cdktf-provider-null-nullproviderconfig)</code>)  *No description*
  * **alias** (<code>string</code>)  Alias name. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**alias**? | <code>string</code> | __*Optional*__
**aliasInput**? | <code>string</code> | __*Optional*__

### Methods


#### resetAlias() <a id="cdktf-provider-null-nullprovider-resetalias"></a>



```ts
resetAlias(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-null-nullprovider-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Resource  <a id="cdktf-provider-null-resource"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer




```ts
new Resource(scope: Construct, id: string, config?: ResourceConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **config** (<code>[ResourceConfig](#cdktf-provider-null-resourceconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **triggers** (<code>Map<string, string></code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**id** | <code>string</code> | <span></span>
**triggers** | <code>Map<string, string></code> | <span></span>
**triggersInput**? | <code>Map<string, string></code> | __*Optional*__

### Methods


#### resetTriggers() <a id="cdktf-provider-null-resource-resettriggers"></a>



```ts
resetTriggers(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-null-resource-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## struct DataNullDataSourceConfig  <a id="cdktf-provider-null-datanulldatasourceconfig"></a>






Name | Type | Description 
-----|------|-------------
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**hasComputedDefault**? | <code>string</code> | __*Optional*__
**inputs**? | <code>Map<string, string></code> | __*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct NullProviderConfig  <a id="cdktf-provider-null-nullproviderconfig"></a>






Name | Type | Description 
-----|------|-------------
**alias**? | <code>string</code> | Alias name.<br/>__*Optional*__



## struct ResourceConfig  <a id="cdktf-provider-null-resourceconfig"></a>






Name | Type | Description 
-----|------|-------------
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__
**triggers**? | <code>Map<string, string></code> | __*Optional*__



