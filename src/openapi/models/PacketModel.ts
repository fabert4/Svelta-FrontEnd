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
 * @interface PacketModel
 */
export interface PacketModel {
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    dimensions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    items: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    monetary?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PacketModel
     */
    quantity?: any | null;
}

/**
 * Check if a given object implements the PacketModel interface.
 */
export function instanceOfPacketModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function PacketModelFromJSON(json: any): PacketModel {
    return PacketModelFromJSONTyped(json, false);
}

export function PacketModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PacketModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'id': json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'items': json['items'],
        'monetary': !exists(json, 'monetary') ? undefined : json['monetary'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function PacketModelToJSON(value?: PacketModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'dimensions': value.dimensions,
        'id': value.id,
        'identifier': value.identifier,
        'items': value.items,
        'monetary': value.monetary,
        'quantity': value.quantity,
    };
}

