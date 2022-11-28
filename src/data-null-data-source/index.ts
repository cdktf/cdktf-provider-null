// https://www.terraform.io/docs/providers/null/d/data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNullDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, its literal value will be stored and returned. If not, its value defaults to `"default"`. This argument exists primarily for testing and has little practical use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/null/d/data_source#has_computed_default DataNullDataSource#has_computed_default}
  */
  readonly hasComputedDefault?: string;
  /**
  * A map of arbitrary strings that is copied into the `outputs` attribute, and accessible directly for interpolation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/null/d/data_source#inputs DataNullDataSource#inputs}
  */
  readonly inputs?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/null/d/data_source null_data_source}
*/
export class DataNullDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "null_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/null/d/data_source null_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNullDataSourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNullDataSourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'null_data_source',
      terraformGeneratorMetadata: {
        providerName: 'null',
        providerVersion: '3.2.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasComputedDefault = config.hasComputedDefault;
    this._inputs = config.inputs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_computed_default - computed: true, optional: true, required: false
  private _hasComputedDefault?: string; 
  public get hasComputedDefault() {
    return this.getStringAttribute('has_computed_default');
  }
  public set hasComputedDefault(value: string) {
    this._hasComputedDefault = value;
  }
  public resetHasComputedDefault() {
    this._hasComputedDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasComputedDefaultInput() {
    return this._hasComputedDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: { [key: string]: string }; 
  public get inputs() {
    return this.getStringMapAttribute('inputs');
  }
  public set inputs(value: { [key: string]: string }) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktf.StringMap(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getStringAttribute('random');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_computed_default: cdktf.stringToTerraform(this._hasComputedDefault),
      inputs: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputs),
    };
  }
}
