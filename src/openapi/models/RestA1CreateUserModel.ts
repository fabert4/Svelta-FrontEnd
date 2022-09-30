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
import type { CreateUserModel } from './CreateUserModel';
import {
    CreateUserModelFromJSON,
    CreateUserModelFromJSONTyped,
    CreateUserModelToJSON,
} from './CreateUserModel';

/**
 * 
 * @export
 * @interface RestA1CreateUserModel
 */
export interface RestA1CreateUserModel {
    /**
     * 
     * @type {CreateUserModel}
     * @memberof RestA1CreateUserModel
     */
    a0: CreateUserModel;
}

/**
 * Check if a given object implements the RestA1CreateUserModel interface.
 */
export function instanceOfRestA1CreateUserModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a0" in value;

    return isInstance;
}

export function RestA1CreateUserModelFromJSON(json: any): RestA1CreateUserModel {
    return RestA1CreateUserModelFromJSONTyped(json, false);
}

export function RestA1CreateUserModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestA1CreateUserModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a0': CreateUserModelFromJSON(json['a0']),
    };
}

export function RestA1CreateUserModelToJSON(value?: RestA1CreateUserModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a0': CreateUserModelToJSON(value.a0),
    };
}
