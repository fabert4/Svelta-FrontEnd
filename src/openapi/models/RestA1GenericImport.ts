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
import type { GenericImport } from './GenericImport';
import {
    GenericImportFromJSON,
    GenericImportFromJSONTyped,
    GenericImportToJSON,
} from './GenericImport';

/**
 * 
 * @export
 * @interface RestA1GenericImport
 */
export interface RestA1GenericImport {
    /**
     * 
     * @type {GenericImport}
     * @memberof RestA1GenericImport
     */
    a0: GenericImport;
}

/**
 * Check if a given object implements the RestA1GenericImport interface.
 */
export function instanceOfRestA1GenericImport(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "a0" in value;

    return isInstance;
}

export function RestA1GenericImportFromJSON(json: any): RestA1GenericImport {
    return RestA1GenericImportFromJSONTyped(json, false);
}

export function RestA1GenericImportFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestA1GenericImport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a0': GenericImportFromJSON(json['a0']),
    };
}

export function RestA1GenericImportToJSON(value?: RestA1GenericImport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a0': GenericImportToJSON(value.a0),
    };
}

