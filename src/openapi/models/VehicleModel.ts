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
 * @interface VehicleModel
 */
export interface VehicleModel {
    /**
     * 
     * @type {any}
     * @memberof VehicleModel
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VehicleModel
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof VehicleModel
     */
    licensePlate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VehicleModel
     */
    type: VehicleModelTypeEnum;
}


/**
 * @export
 */
export const VehicleModelTypeEnum = {
    Truck: 'TRUCK',
    Trailer: 'TRAILER'
} as const;
export type VehicleModelTypeEnum = typeof VehicleModelTypeEnum[keyof typeof VehicleModelTypeEnum];


/**
 * Check if a given object implements the VehicleModel interface.
 */
export function instanceOfVehicleModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function VehicleModelFromJSON(json: any): VehicleModel {
    return VehicleModelFromJSONTyped(json, false);
}

export function VehicleModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VehicleModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': json['id'],
        'licensePlate': !exists(json, 'licensePlate') ? undefined : json['licensePlate'],
        'type': json['type'],
    };
}

export function VehicleModelToJSON(value?: VehicleModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'licensePlate': value.licensePlate,
        'type': value.type,
    };
}

