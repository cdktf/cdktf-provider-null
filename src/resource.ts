// https://www.terraform.io/docs/providers/null/r/resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ResourceConfig extends TerraformMetaArguments {
  readonly triggers?: { [key: string]: string };
}

// Resource

export class Resource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'null_resource',
      terraformGeneratorMetadata: {
        providerName: 'null'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string };
  public get triggers() {
    return this._triggers;
  }
  public set triggers(value: { [key: string]: string } | undefined) {
    this._triggers = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      triggers: this._triggers,
    };
  }
}
