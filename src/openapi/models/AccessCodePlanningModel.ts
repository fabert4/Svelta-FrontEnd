/* tslint:disable */
/* eslint-disable */
/**
 * CleanArchitecture
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PlanningModel } from './PlanningModel';
import {
    PlanningModelFromJSON,
    PlanningModelFromJSONTyped,
    PlanningModelToJSON,
} from './PlanningModel';

/**
 * 
 * @export
 * @interface AccessCodePlanningModel
 */
export interface AccessCodePlanningModel {
    /**
     * 
     * @type {any}
     * @memberof AccessCodePlanningModel
     */
    description?: any | null;
    /**
     * 
     * @type {PlanningModel}
     * @memberof AccessCodePlanningModel
     */
    entity: PlanningModel;
    /**
     * 
     * @type {any}
     * @memberof AccessCodePlanningModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccessCodePlanningModel
     */
    secret: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccessCodePlanningModel
     */
    validTill?: any | null;
}

/**
 * Check if a given object implements the AccessCodePlanningModel interface.
 */
export function instanceOfAccessCodePlanningModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entity" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "secret" in value;

    return isInstance;
}

export function AccessCodePlanningModelFromJSON(json: any): AccessCodePlanningModel {
    return AccessCodePlanningModelFromJSONTyped(json, false);
}

export function AccessCodePlanningModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessCodePlanningModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entity': PlanningModelFromJSON(json['entity']),
        'id': json['id'],
        'secret': json['secret'],
        'validTill': !exists(json, 'validTill') ? undefined : json['validTill'],
    };
}

export function AccessCodePlanningModelToJSON(value?: AccessCodePlanningModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'entity': PlanningModelToJSON(value.entity),
        'id': value.id,
        'secret': value.secret,
        'validTill': value.validTill,
    };
}
