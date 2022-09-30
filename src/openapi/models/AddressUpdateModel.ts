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
 * @interface AddressUpdateModel
 */
export interface AddressUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    city?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    coordinates?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    country?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    countryCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    number?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    street?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AddressUpdateModel
     */
    zipcode?: any | null;
}

/**
 * Check if a given object implements the AddressUpdateModel interface.
 */
export function instanceOfAddressUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AddressUpdateModelFromJSON(json: any): AddressUpdateModel {
    return AddressUpdateModelFromJSONTyped(json, false);
}

export function AddressUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'coordinates': !exists(json, 'coordinates') ? undefined : json['coordinates'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'zipcode': !exists(json, 'zipcode') ? undefined : json['zipcode'],
    };
}

export function AddressUpdateModelToJSON(value?: AddressUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'coordinates': value.coordinates,
        'country': value.country,
        'countryCode': value.countryCode,
        'id': value.id,
        'name': value.name,
        'number': value.number,
        'street': value.street,
        'zipcode': value.zipcode,
    };
}
