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
 * @interface UserPaginationResult
 */
export interface UserPaginationResult {
    /**
     * 
     * @type {any}
     * @memberof UserPaginationResult
     */
    items: any | null;
    /**
     * 
     * @type {any}
     * @memberof UserPaginationResult
     */
    total: any | null;
}

/**
 * Check if a given object implements the UserPaginationResult interface.
 */
export function instanceOfUserPaginationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function UserPaginationResultFromJSON(json: any): UserPaginationResult {
    return UserPaginationResultFromJSONTyped(json, false);
}

export function UserPaginationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPaginationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': json['items'],
        'total': json['total'],
    };
}

export function UserPaginationResultToJSON(value?: UserPaginationResult | null): any {
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
