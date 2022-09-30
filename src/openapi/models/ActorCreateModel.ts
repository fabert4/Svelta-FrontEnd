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
import type { ActionCreateModel } from './ActionCreateModel';
import {
    ActionCreateModelFromJSON,
    ActionCreateModelFromJSONTyped,
    ActionCreateModelToJSON,
} from './ActionCreateModel';
import type { ShipmentCompanyCreateModel } from './ShipmentCompanyCreateModel';
import {
    ShipmentCompanyCreateModelFromJSON,
    ShipmentCompanyCreateModelFromJSONTyped,
    ShipmentCompanyCreateModelToJSON,
} from './ShipmentCompanyCreateModel';

/**
 * 
 * @export
 * @interface ActorCreateModel
 */
export interface ActorCreateModel {
    /**
     * 
     * @type {ShipmentCompanyCreateModel}
     * @memberof ActorCreateModel
     */
    company: ShipmentCompanyCreateModel;
    /**
     * 
     * @type {ActionCreateModel}
     * @memberof ActorCreateModel
     */
    delivery: ActionCreateModel;
    /**
     * 
     * @type {ActionCreateModel}
     * @memberof ActorCreateModel
     */
    pickup: ActionCreateModel;
    /**
     * 
     * @type {any}
     * @memberof ActorCreateModel
     */
    price?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActorCreateModel
     */
    progresses?: any | null;
}

/**
 * Check if a given object implements the ActorCreateModel interface.
 */
export function instanceOfActorCreateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "delivery" in value;
    isInstance = isInstance && "pickup" in value;

    return isInstance;
}

export function ActorCreateModelFromJSON(json: any): ActorCreateModel {
    return ActorCreateModelFromJSONTyped(json, false);
}

export function ActorCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorCreateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': ShipmentCompanyCreateModelFromJSON(json['company']),
        'delivery': ActionCreateModelFromJSON(json['delivery']),
        'pickup': ActionCreateModelFromJSON(json['pickup']),
        'price': !exists(json, 'price') ? undefined : json['price'],
        'progresses': !exists(json, 'progresses') ? undefined : json['progresses'],
    };
}

export function ActorCreateModelToJSON(value?: ActorCreateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': ShipmentCompanyCreateModelToJSON(value.company),
        'delivery': ActionCreateModelToJSON(value.delivery),
        'pickup': ActionCreateModelToJSON(value.pickup),
        'price': value.price,
        'progresses': value.progresses,
    };
}

