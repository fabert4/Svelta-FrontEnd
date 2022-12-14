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
 * @interface PairStringInt
 */
export interface PairStringInt {
    /**
     * 
     * @type {any}
     * @memberof PairStringInt
     */
    key: any | null;
    /**
     * 
     * @type {any}
     * @memberof PairStringInt
     */
    value: any | null;
}

/**
 * Check if a given object implements the PairStringInt interface.
 */
export function instanceOfPairStringInt(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function PairStringIntFromJSON(json: any): PairStringInt {
    return PairStringIntFromJSONTyped(json, false);
}

export function PairStringIntFromJSONTyped(json: any, ignoreDiscriminator: boolean): PairStringInt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function PairStringIntToJSON(value?: PairStringInt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

