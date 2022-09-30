/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { AddressCreateModel } from './addressCreateModel';
import type { ActionCreateModelEta } from './actionCreateModelEta';
import type { ActionCreateModelEtd } from './actionCreateModelEtd';
import type { ActionCreateModelIdentifier } from './actionCreateModelIdentifier';
import type { ActionCreateModelInstructions } from './actionCreateModelInstructions';
import type { ActionCreateModelPerson } from './actionCreateModelPerson';
import type { ActionCreateModelRequirements } from './actionCreateModelRequirements';
import type { ActionCreateModelStatus } from './actionCreateModelStatus';

export interface ActionCreateModel {
  address: AddressCreateModel;
  eta?: ActionCreateModelEta;
  etd?: ActionCreateModelEtd;
  identifier?: ActionCreateModelIdentifier;
  instructions?: ActionCreateModelInstructions;
  person?: ActionCreateModelPerson;
  requirements?: ActionCreateModelRequirements;
  status?: ActionCreateModelStatus;
}
