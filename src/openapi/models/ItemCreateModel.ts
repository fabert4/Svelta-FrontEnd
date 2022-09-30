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
 * @interface ItemCreateModel
 */
export interface ItemCreateModel {
    /**
     * 
     * @type {any}
     * @memberof ItemCreateModel
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemCreateModel
     */
    hscode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemCreateModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemCreateModel
     */
    properties?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemCreateModel
     */
    size?: any | null;
}

/**
 * Check if a given object implements the ItemCreateModel interface.
 */
export function instanceOfItemCreateModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemCreateModelFromJSON(json: any): ItemCreateModel {
    return ItemCreateModelFromJSONTyped(json, false);
}

export function ItemCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemCreateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hscode': !exists(json, 'hscode') ? undefined : json['hscode'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function ItemCreateModelToJSON(value?: ItemCreateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hscode': value.hscode,
        'identifier': value.identifier,
        'properties': value.properties,
        'size': value.size,
    };
}
