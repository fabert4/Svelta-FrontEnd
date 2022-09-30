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
import type { DatabaseHealth } from './DatabaseHealth';
import {
    DatabaseHealthFromJSON,
    DatabaseHealthFromJSONTyped,
    DatabaseHealthToJSON,
} from './DatabaseHealth';

/**
 * 
 * @export
 * @interface Health
 */
export interface Health {
    /**
     * 
     * @type {any}
     * @memberof Health
     */
    backend?: any | null;
    /**
     * 
     * @type {DatabaseHealth}
     * @memberof Health
     */
    database: DatabaseHealth;
    /**
     * 
     * @type {any}
     * @memberof Health
     */
    host: any | null;
}

/**
 * Check if a given object implements the Health interface.
 */
export function instanceOfHealth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "database" in value;
    isInstance = isInstance && "host" in value;

    return isInstance;
}

export function HealthFromJSON(json: any): Health {
    return HealthFromJSONTyped(json, false);
}

export function HealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Health {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backend': !exists(json, 'backend') ? undefined : json['backend'],
        'database': DatabaseHealthFromJSON(json['database']),
        'host': json['host'],
    };
}

export function HealthToJSON(value?: Health | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backend': value.backend,
        'database': DatabaseHealthToJSON(value.database),
        'host': value.host,
    };
}
