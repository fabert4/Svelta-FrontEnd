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
 * @interface Email
 */
export interface Email {
    /**
     * 
     * @type {any}
     * @memberof Email
     */
    value: any | null;
}

/**
 * Check if a given object implements the Email interface.
 */
export function instanceOfEmail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function EmailFromJSON(json: any): Email {
    return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function EmailToJSON(value?: Email | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}
