// https://www.terraform.io/docs/providers/null/r/data_null_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataNullDataSourceConfig extends TerraformMetaArguments {
  readonly hasComputedDefault?: string;
  readonly inputs?: { [key: string]: string };
}

// Resource

export class DataNullDataSource extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataNullDataSourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'null_data_source',
      terraformGeneratorMetadata: {
        providerName: 'null'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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
    return this._hasComputedDefault ?? this.getStringAttribute('has_computed_default');
  }
  public set hasComputedDefault(value: string | undefined) {
    this._hasComputedDefault = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: { [key: string]: string };
  public get inputs() {
    return this._inputs;
  }
  public set inputs(value: { [key: string]: string } | undefined) {
    this._inputs = value;
  }

  // outputs - computed: true, optional: false, required: true
  public outputs(key: string): string {
    return new StringMap(this, 'outputs').lookup(key);
  }

  // random - computed: true, optional: false, required: true
  public get random() {
    return this.getStringAttribute('random');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      has_computed_default: this._hasComputedDefault,
      inputs: this._inputs,
    };
  }
}
