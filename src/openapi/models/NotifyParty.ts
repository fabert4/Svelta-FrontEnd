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
 * @interface NotifyParty
 */
export interface NotifyParty {
    /**
     * 
     * @type {any}
     * @memberof NotifyParty
     */
    medium: NotifyPartyMediumEnum;
    /**
     * 
     * @type {any}
     * @memberof NotifyParty
     */
    recipient: any | null;
}


/**
 * @export
 */
export const NotifyPartyMediumEnum = {
    Sms: 'SMS',
    Email: 'EMAIL',
    PushNotification: 'PUSH_NOTIFICATION'
} as const;
export type NotifyPartyMediumEnum = typeof NotifyPartyMediumEnum[keyof typeof NotifyPartyMediumEnum];


/**
 * Check if a given object implements the NotifyParty interface.
 */
export function instanceOfNotifyParty(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "medium" in value;
    isInstance = isInstance && "recipient" in value;

    return isInstance;
}

export function NotifyPartyFromJSON(json: any): NotifyParty {
    return NotifyPartyFromJSONTyped(json, false);
}

export function NotifyPartyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifyParty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'medium': json['medium'],
        'recipient': json['recipient'],
    };
}

export function NotifyPartyToJSON(value?: NotifyParty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'medium': value.medium,
        'recipient': value.recipient,
    };
}

