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
import type { UpdateUserModel } from './UpdateUserModel';
import {
    UpdateUserModelFromJSON,
    UpdateUserModelFromJSONTyped,
    UpdateUserModelToJSON,
} from './UpdateUserModel';

/**
 * 
 * @export
 * @interface RestA1UpdateUserModel
 */
export interface RestA1UpdateUserModel {
    /**
     * 
     * @type {UpdateUserModel}
     * @memberof RestA1UpdateUserModel
     */
    a0: UpdateUserModel;
}

/**
 * Check if a given object implements the RestA1UpdateUserModel interface.
 */
export function instanceOfRestA1UpdateUserModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a0" in value;

    return isInstance;
}

export function RestA1UpdateUserModelFromJSON(json: any): RestA1UpdateUserModel {
    return RestA1UpdateUserModelFromJSONTyped(json, false);
}

export function RestA1UpdateUserModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestA1UpdateUserModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a0': UpdateUserModelFromJSON(json['a0']),
    };
}

export function RestA1UpdateUserModelToJSON(value?: RestA1UpdateUserModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a0': UpdateUserModelToJSON(value.a0),
    };
}
