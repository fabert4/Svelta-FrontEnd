/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { ItemModelDescription } from './itemModelDescription';
import type { ItemModelHscode } from './itemModelHscode';
import type { ItemModelIdentifier } from './itemModelIdentifier';
import type { ItemModelProperties } from './itemModelProperties';
import type { ItemModelSize } from './itemModelSize';

export interface ItemModel {
  description?: ItemModelDescription;
  hscode?: ItemModelHscode;
  id: number;
  identifier?: ItemModelIdentifier;
  properties?: ItemModelProperties;
  size?: ItemModelSize;
}