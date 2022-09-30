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
/**
 * 
 * @export
 * @interface ProgressModel
 */
export interface ProgressModel {
    /**
     * 
     * @type {any}
     * @memberof ProgressModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ProgressModel
     */
    status: any | null;
}

/**
 * Check if a given object implements the ProgressModel interface.
 */
export function instanceOfProgressModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function ProgressModelFromJSON(json: any): ProgressModel {
    return ProgressModelFromJSONTyped(json, false);
}

export function ProgressModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
    };
}

export function ProgressModelToJSON(value?: ProgressModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
    };
}
