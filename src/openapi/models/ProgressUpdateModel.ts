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
 * @interface ProgressUpdateModel
 */
export interface ProgressUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof ProgressUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ProgressUpdateModel
     */
    status: any | null;
}

/**
 * Check if a given object implements the ProgressUpdateModel interface.
 */
export function instanceOfProgressUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function ProgressUpdateModelFromJSON(json: any): ProgressUpdateModel {
    return ProgressUpdateModelFromJSONTyped(json, false);
}

export function ProgressUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgressUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
    };
}

export function ProgressUpdateModelToJSON(value?: ProgressUpdateModel | null): any {
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

