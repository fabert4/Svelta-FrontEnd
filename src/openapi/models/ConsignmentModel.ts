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
import type { ShipmentCompanyModel } from './ShipmentCompanyModel';
import {
    ShipmentCompanyModelFromJSON,
    ShipmentCompanyModelFromJSONTyped,
    ShipmentCompanyModelToJSON,
} from './ShipmentCompanyModel';

/**
 * 
 * @export
 * @interface ConsignmentModel
 */
export interface ConsignmentModel {
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    actors: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    containers: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    customs?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    documents?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    incoterms?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    indicators?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    name: any | null;
    /**
     * 
     * @type {ShipmentCompanyModel}
     * @memberof ConsignmentModel
     */
    receiver: ShipmentCompanyModel;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    references?: any | null;
    /**
     * 
     * @type {ShipmentCompanyModel}
     * @memberof ConsignmentModel
     */
    sender: ShipmentCompanyModel;
    /**
     * 
     * @type {any}
     * @memberof ConsignmentModel
     */
    shipment?: any | null;
}

/**
 * Check if a given object implements the ConsignmentModel interface.
 */
export function instanceOfConsignmentModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actors" in value;
    isInstance = isInstance && "containers" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "receiver" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function ConsignmentModelFromJSON(json: any): ConsignmentModel {
    return ConsignmentModelFromJSONTyped(json, false);
}

export function ConsignmentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsignmentModel {
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
        'receiver': ShipmentCompanyModelFromJSON(json['receiver']),
        'references': !exists(json, 'references') ? undefined : json['references'],
        'sender': ShipmentCompanyModelFromJSON(json['sender']),
        'shipment': !exists(json, 'shipment') ? undefined : json['shipment'],
    };
}

export function ConsignmentModelToJSON(value?: ConsignmentModel | null): any {
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
        'receiver': ShipmentCompanyModelToJSON(value.receiver),
        'references': value.references,
        'sender': ShipmentCompanyModelToJSON(value.sender),
        'shipment': value.shipment,
    };
}

