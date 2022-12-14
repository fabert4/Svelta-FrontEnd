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
import type { Email } from './Email';
import {
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';
import type { Password } from './Password';
import {
    PasswordFromJSON,
    PasswordFromJSONTyped,
    PasswordToJSON,
} from './Password';

/**
 * 
 * @export
 * @interface LoginUserModel
 */
export interface LoginUserModel {
    /**
     * 
     * @type {Email}
     * @memberof LoginUserModel
     */
    email: Email;
    /**
     * 
     * @type {Password}
     * @memberof LoginUserModel
     */
    password: Password;
}

/**
 * Check if a given object implements the LoginUserModel interface.
 */
export function instanceOfLoginUserModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function LoginUserModelFromJSON(json: any): LoginUserModel {
    return LoginUserModelFromJSONTyped(json, false);
}

export function LoginUserModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginUserModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': EmailFromJSON(json['email']),
        'password': PasswordFromJSON(json['password']),
    };
}

export function LoginUserModelToJSON(value?: LoginUserModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailToJSON(value.email),
        'password': PasswordToJSON(value.password),
    };
}

