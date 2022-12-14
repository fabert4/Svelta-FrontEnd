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
 * @interface ItemUpdateModel
 */
export interface ItemUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    hscode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    properties?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ItemUpdateModel
     */
    size?: any | null;
}

/**
 * Check if a given object implements the ItemUpdateModel interface.
 */
export function instanceOfItemUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ItemUpdateModelFromJSON(json: any): ItemUpdateModel {
    return ItemUpdateModelFromJSONTyped(json, false);
}

export function ItemUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hscode': !exists(json, 'hscode') ? undefined : json['hscode'],
        'id': json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function ItemUpdateModelToJSON(value?: ItemUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hscode': value.hscode,
        'id': value.id,
        'identifier': value.identifier,
        'properties': value.properties,
        'size': value.size,
    };
}

