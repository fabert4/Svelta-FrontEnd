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
import type { AddressUpdateModel } from './AddressUpdateModel';
import {
    AddressUpdateModelFromJSON,
    AddressUpdateModelFromJSONTyped,
    AddressUpdateModelToJSON,
} from './AddressUpdateModel';

/**
 * 
 * @export
 * @interface ShipmentCompanyUpdateModel
 */
export interface ShipmentCompanyUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    actorId: any | null;
    /**
     * 
     * @type {AddressUpdateModel}
     * @memberof ShipmentCompanyUpdateModel
     */
    address: AddressUpdateModel;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    cargoledger?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    person?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ShipmentCompanyUpdateModel
     */
    shared?: any | null;
}

/**
 * Check if a given object implements the ShipmentCompanyUpdateModel interface.
 */
export function instanceOfShipmentCompanyUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actorId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ShipmentCompanyUpdateModelFromJSON(json: any): ShipmentCompanyUpdateModel {
    return ShipmentCompanyUpdateModelFromJSONTyped(json, false);
}

export function ShipmentCompanyUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentCompanyUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actorId': json['actorId'],
        'address': AddressUpdateModelFromJSON(json['address']),
        'cargoledger': !exists(json, 'cargoledger') ? undefined : json['cargoledger'],
        'id': json['id'],
        'name': json['name'],
        'person': !exists(json, 'person') ? undefined : json['person'],
        'shared': !exists(json, 'shared') ? undefined : json['shared'],
    };
}

export function ShipmentCompanyUpdateModelToJSON(value?: ShipmentCompanyUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actorId': value.actorId,
        'address': AddressUpdateModelToJSON(value.address),
        'cargoledger': value.cargoledger,
        'id': value.id,
        'name': value.name,
        'person': value.person,
        'shared': value.shared,
    };
}

