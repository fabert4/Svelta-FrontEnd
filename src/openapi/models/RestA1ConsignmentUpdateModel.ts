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
import type { ConsignmentUpdateModel } from './ConsignmentUpdateModel';
import {
    ConsignmentUpdateModelFromJSON,
    ConsignmentUpdateModelFromJSONTyped,
    ConsignmentUpdateModelToJSON,
} from './ConsignmentUpdateModel';

/**
 * 
 * @export
 * @interface RestA1ConsignmentUpdateModel
 */
export interface RestA1ConsignmentUpdateModel {
    /**
     * 
     * @type {ConsignmentUpdateModel}
     * @memberof RestA1ConsignmentUpdateModel
     */
    a0: ConsignmentUpdateModel;
}

/**
 * Check if a given object implements the RestA1ConsignmentUpdateModel interface.
 */
export function instanceOfRestA1ConsignmentUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a0" in value;

    return isInstance;
}

export function RestA1ConsignmentUpdateModelFromJSON(json: any): RestA1ConsignmentUpdateModel {
    return RestA1ConsignmentUpdateModelFromJSONTyped(json, false);
}

export function RestA1ConsignmentUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestA1ConsignmentUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a0': ConsignmentUpdateModelFromJSON(json['a0']),
    };
}

export function RestA1ConsignmentUpdateModelToJSON(value?: RestA1ConsignmentUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a0': ConsignmentUpdateModelToJSON(value.a0),
    };
}
