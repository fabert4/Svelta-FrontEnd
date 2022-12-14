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
 * @interface ActivityCreateModel
 */
export interface ActivityCreateModel {
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    action: ActivityCreateModelActionEnum;
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    identifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    requirements: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    shipmentExpeditor?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    shipmentIdentifier?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ActivityCreateModel
     */
    statusType: ActivityCreateModelStatusTypeEnum;
}


/**
 * @export
 */
export const ActivityCreateModelActionEnum = {
    Load: 'LOAD',
    Unload: 'UNLOAD',
    Attach: 'ATTACH',
    Detach: 'DETACH'
} as const;
export type ActivityCreateModelActionEnum = typeof ActivityCreateModelActionEnum[keyof typeof ActivityCreateModelActionEnum];

/**
 * @export
 */
export const ActivityCreateModelStatusTypeEnum = {
    Pickup: 'PICKUP',
    Delivery: 'DELIVERY',
    CrossdockPickup: 'CROSSDOCK_PICKUP',
    CrossdockDelivery: 'CROSSDOCK_DELIVERY',
    PickupStarted: 'PICKUP_STARTED',
    DeliveryStarted: 'DELIVERY_STARTED',
    CrossdockPickupStarted: 'CROSSDOCK_PICKUP_STARTED',
    CrossdockDeliveryStarted: 'CROSSDOCK_DELIVERY_STARTED',
    OnRoute: 'ON_ROUTE'
} as const;
export type ActivityCreateModelStatusTypeEnum = typeof ActivityCreateModelStatusTypeEnum[keyof typeof ActivityCreateModelStatusTypeEnum];


/**
 * Check if a given object implements the ActivityCreateModel interface.
 */
export function instanceOfActivityCreateModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "requirements" in value;
    isInstance = isInstance && "statusType" in value;

    return isInstance;
}

export function ActivityCreateModelFromJSON(json: any): ActivityCreateModel {
    return ActivityCreateModelFromJSONTyped(json, false);
}

export function ActivityCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityCreateModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'requirements': json['requirements'],
        'shipmentExpeditor': !exists(json, 'shipmentExpeditor') ? undefined : json['shipmentExpeditor'],
        'shipmentIdentifier': !exists(json, 'shipmentIdentifier') ? undefined : json['shipmentIdentifier'],
        'statusType': json['statusType'],
    };
}

export function ActivityCreateModelToJSON(value?: ActivityCreateModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'identifier': value.identifier,
        'requirements': value.requirements,
        'shipmentExpeditor': value.shipmentExpeditor,
        'shipmentIdentifier': value.shipmentIdentifier,
        'statusType': value.statusType,
    };
}

