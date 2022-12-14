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
import type { AddressModel } from './AddressModel';
import {
    AddressModelFromJSON,
    AddressModelFromJSONTyped,
    AddressModelToJSON,
} from './AddressModel';

/**
 * 
 * @export
 * @interface ActionModel
 */
export interface ActionModel {
    /**
     * 
     * @type {AddressModel}
     * @memberof ActionModel
     */
    address: AddressModel;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    eta?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    etd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    instructions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    person?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    requirements?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActionModel
     */
    status?: any | null;
}

/**
 * Check if a given object implements the ActionModel interface.
 */
export function instanceOfActionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ActionModelFromJSON(json: any): ActionModel {
    return ActionModelFromJSONTyped(json, false);
}

export function ActionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': AddressModelFromJSON(json['address']),
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'etd': !exists(json, 'etd') ? undefined : json['etd'],
        'id': json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'instructions': !exists(json, 'instructions') ? undefined : json['instructions'],
        'person': !exists(json, 'person') ? undefined : json['person'],
        'requirements': !exists(json, 'requirements') ? undefined : json['requirements'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ActionModelToJSON(value?: ActionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressModelToJSON(value.address),
        'eta': value.eta,
        'etd': value.etd,
        'id': value.id,
        'identifier': value.identifier,
        'instructions': value.instructions,
        'person': value.person,
        'requirements': value.requirements,
        'status': value.status,
    };
}

