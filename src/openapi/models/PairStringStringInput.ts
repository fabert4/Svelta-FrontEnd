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
 * @interface PairStringStringInput
 */
export interface PairStringStringInput {
    /**
     * 
     * @type {any}
     * @memberof PairStringStringInput
     */
    key: any | null;
    /**
     * 
     * @type {any}
     * @memberof PairStringStringInput
     */
    value: any | null;
}

/**
 * Check if a given object implements the PairStringStringInput interface.
 */
export function instanceOfPairStringStringInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function PairStringStringInputFromJSON(json: any): PairStringStringInput {
    return PairStringStringInputFromJSONTyped(json, false);
}

export function PairStringStringInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PairStringStringInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function PairStringStringInputToJSON(value?: PairStringStringInput | null): any {
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

