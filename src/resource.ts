// https://www.terraform.io/docs/providers/null/r/resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/null/r/resource.html#triggers Resource#triggers}
  */
  readonly triggers?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/null/r/resource.html null_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/null/r/resource.html null_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig = {}
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string };
  public get triggers() {
    return this.interpolationForAttribute('triggers') as any;
  }
  public set triggers(value: { [key: string]: string } ) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
    };
  }
}
