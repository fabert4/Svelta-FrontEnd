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
import type { PlanningCreateModel } from './PlanningCreateModel';
import {
    PlanningCreateModelFromJSON,
    PlanningCreateModelFromJSONTyped,
    PlanningCreateModelToJSON,
} from './PlanningCreateModel';

/**
 * 
 * @export
 * @interface RestA2PlanningCreateModelBoolean
 */
export interface RestA2PlanningCreateModelBoolean {
    /**
     * 
     * @type {PlanningCreateModel}
     * @memberof RestA2PlanningCreateModelBoolean
     */
    a0: PlanningCreateModel;
    /**
     * 
     * @type {any}
     * @memberof RestA2PlanningCreateModelBoolean
     */
    a1: any | null;
}

/**
 * Check if a given object implements the RestA2PlanningCreateModelBoolean interface.
 */
export function instanceOfRestA2PlanningCreateModelBoolean(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a0" in value;
    isInstance = isInstance && "a1" in value;

    return isInstance;
}

export function RestA2PlanningCreateModelBooleanFromJSON(json: any): RestA2PlanningCreateModelBoolean {
    return RestA2PlanningCreateModelBooleanFromJSONTyped(json, false);
}

export function RestA2PlanningCreateModelBooleanFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestA2PlanningCreateModelBoolean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a0': PlanningCreateModelFromJSON(json['a0']),
        'a1': json['a1'],
    };
}

export function RestA2PlanningCreateModelBooleanToJSON(value?: RestA2PlanningCreateModelBoolean | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a0': PlanningCreateModelToJSON(value.a0),
        'a1': value.a1,
    };
}
