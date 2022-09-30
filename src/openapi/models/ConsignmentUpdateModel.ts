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
import type { ShipmentCompanyUpdateModel } from './ShipmentCompanyUpdateModel';
import {
    ShipmentCompanyUpdateModelFromJSON,
    ShipmentCompanyUpdateModelFromJSONTyped,
    ShipmentCompanyUpdateModelToJSON,
} from './ShipmentCompanyUpdateModel';

/**
 * 
 * @export
 * @interface ConsignmentUpdateModel
 */
export interface ConsignmentUpdateModel {
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    actors: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    containers: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    customs?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    documents?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    incoterms?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    indicators?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    name: any | null;
    /**
     * 
     * @type {ShipmentCompanyUpdateModel}
     * @memberof ConsignmentUpdateModel
     */
    receiver: ShipmentCompanyUpdateModel;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentUpdateModel
     */
    references?: any | null;
    /**
     * 
     * @type {ShipmentCompanyUpdateModel}
     * @memberof ConsignmentUpdateModel
     */
    sender: ShipmentCompanyUpdateModel;
}

/**
 * Check if a given object implements the ConsignmentUpdateModel interface.
 */
export function instanceOfConsignmentUpdateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actors" in value;
    isInstance = isInstance && "containers" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "receiver" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function ConsignmentUpdateModelFromJSON(json: any): ConsignmentUpdateModel {
    return ConsignmentUpdateModelFromJSONTyped(json, false);
}

export function ConsignmentUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsignmentUpdateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actors': json['actors'],
        'containers': json['containers'],
        'customs': !exists(json, 'customs') ? undefined : json['customs'],
        'documents': !exists(json, 'documents') ? undefined : json['documents'],
        'id': json['id'],
        'incoterms': !exists(json, 'incoterms') ? undefined : json['incoterms'],
        'indicators': !exists(json, 'indicators') ? undefined : json['indicators'],
        'name': json['name'],
        'receiver': ShipmentCompanyUpdateModelFromJSON(json['receiver']),
        'references': !exists(json, 'references') ? undefined : json['references'],
        'sender': ShipmentCompanyUpdateModelFromJSON(json['sender']),
    };
}

export function ConsignmentUpdateModelToJSON(value?: ConsignmentUpdateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actors': value.actors,
        'containers': value.containers,
        'customs': value.customs,
        'documents': value.documents,
        'id': value.id,
        'incoterms': value.incoterms,
        'indicators': value.indicators,
        'name': value.name,
        'receiver': ShipmentCompanyUpdateModelToJSON(value.receiver),
        'references': value.references,
        'sender': ShipmentCompanyUpdateModelToJSON(value.sender),
    };
}

