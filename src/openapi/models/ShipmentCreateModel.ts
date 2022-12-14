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
 * @interface ShipmentCreateModel
 */
export interface ShipmentCreateModel {
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    actorId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    consignments: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    documents: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    expeditor: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    identifier: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCreateModel
     */
    name: any | null;
}

/**
 * Check if a given object implements the ShipmentCreateModel interface.
 */
export function instanceOfShipmentCreateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actorId" in value;
    isInstance = isInstance && "consignments" in value;
    isInstance = isInstance && "documents" in value;
    isInstance = isInstance && "expeditor" in value;
    isInstance = isInstance && "identifier" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ShipmentCreateModelFromJSON(json: any): ShipmentCreateModel {
    return ShipmentCreateModelFromJSONTyped(json, false);
}

export function ShipmentCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentCreateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actorId': json['actorId'],
        'consignments': json['consignments'],
        'documents': json['documents'],
        'expeditor': json['expeditor'],
        'identifier': json['identifier'],
        'name': json['name'],
    };
}

export function ShipmentCreateModelToJSON(value?: ShipmentCreateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actorId': value.actorId,
        'consignments': value.consignments,
        'documents': value.documents,
        'expeditor': value.expeditor,
        'identifier': value.identifier,
        'name': value.name,
    };
}

