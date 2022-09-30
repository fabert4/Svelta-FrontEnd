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
 * @interface ContainerUpdateModel
 */
export interface ContainerUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    barcode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    dimensions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    packets: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    properties?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    quantity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ContainerUpdateModel
     */
    type?: any | null;
}

/**
 * Check if a given object implements the ContainerUpdateModel interface.
 */
export function instanceOfContainerUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "packets" in value;

    return isInstance;
}

export function ContainerUpdateModelFromJSON(json: any): ContainerUpdateModel {
    return ContainerUpdateModelFromJSONTyped(json, false);
}

export function ContainerUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'barcode': !exists(json, 'barcode') ? undefined : json['barcode'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'id': json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'packets': json['packets'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ContainerUpdateModelToJSON(value?: ContainerUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'barcode': value.barcode,
        'dimensions': value.dimensions,
        'id': value.id,
        'identifier': value.identifier,
        'packets': value.packets,
        'properties': value.properties,
        'quantity': value.quantity,
        'type': value.type,
    };
}

