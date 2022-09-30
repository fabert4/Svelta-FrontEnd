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
 * @interface HandoverModel
 */
export interface HandoverModel {
    /**
     * 
     * @type {any}
     * @memberof HandoverModel
     */
    arrival?: any | null;
    /**
     * 
     * @type {any}
     * @memberof HandoverModel
     */
    finish?: any | null;
    /**
     * 
     * @type {any}
     * @memberof HandoverModel
     */
    start?: any | null;
}

/**
 * Check if a given object implements the HandoverModel interface.
 */
export function instanceOfHandoverModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HandoverModelFromJSON(json: any): HandoverModel {
    return HandoverModelFromJSONTyped(json, false);
}

export function HandoverModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): HandoverModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrival': !exists(json, 'arrival') ? undefined : json['arrival'],
        'finish': !exists(json, 'finish') ? undefined : json['finish'],
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function HandoverModelToJSON(value?: HandoverModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrival': value.arrival,
        'finish': value.finish,
        'start': value.start,
    };
}
