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
import type { AddressCreateModel } from './AddressCreateModel';
import {
    AddressCreateModelFromJSON,
    AddressCreateModelFromJSONTyped,
    AddressCreateModelToJSON,
} from './AddressCreateModel';

/**
 * 
 * @export
 * @interface ShipmentCompanyCreateModel
 */
export interface ShipmentCompanyCreateModel {
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyCreateModel
     */
    actorId: any | null;
    /**
     * 
     * @type {AddressCreateModel}
     * @memberof ShipmentCompanyCreateModel
     */
    address: AddressCreateModel;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyCreateModel
     */
    cargoledger?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyCreateModel
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyCreateModel
     */
    person?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyCreateModel
     */
    shared?: any | null;
}

/**
 * Check if a given object implements the ShipmentCompanyCreateModel interface.
 */
export function instanceOfShipmentCompanyCreateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actorId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ShipmentCompanyCreateModelFromJSON(json: any): ShipmentCompanyCreateModel {
    return ShipmentCompanyCreateModelFromJSONTyped(json, false);
}

export function ShipmentCompanyCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentCompanyCreateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actorId': json['actorId'],
        'address': AddressCreateModelFromJSON(json['address']),
        'cargoledger': !exists(json, 'cargoledger') ? undefined : json['cargoledger'],
        'name': json['name'],
        'person': !exists(json, 'person') ? undefined : json['person'],
        'shared': !exists(json, 'shared') ? undefined : json['shared'],
    };
}

export function ShipmentCompanyCreateModelToJSON(value?: ShipmentCompanyCreateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actorId': value.actorId,
        'address': AddressCreateModelToJSON(value.address),
        'cargoledger': value.cargoledger,
        'name': value.name,
        'person': value.person,
        'shared': value.shared,
    };
}

