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
 * @interface MessagePaginationResult
 */
export interface MessagePaginationResult {
    /**
     * 
     * @type {any}
     * @memberof MessagePaginationResult
     */
    items: any | null;
    /**
     * 
     * @type {any}
     * @memberof MessagePaginationResult
     */
    total: any | null;
}

/**
 * Check if a given object implements the MessagePaginationResult interface.
 */
export function instanceOfMessagePaginationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function MessagePaginationResultFromJSON(json: any): MessagePaginationResult {
    return MessagePaginationResultFromJSONTyped(json, false);
}

export function MessagePaginationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePaginationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': json['items'],
        'total': json['total'],
    };
}

export function MessagePaginationResultToJSON(value?: MessagePaginationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
        'total': value.total,
    };
}

