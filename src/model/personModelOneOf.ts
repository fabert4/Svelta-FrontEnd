/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { PersonModelOneOfEmail } from './personModelOneOfEmail';
import type { PersonModelOneOfName } from './personModelOneOfName';
import type { PersonModelOneOfPhone } from './personModelOneOfPhone';

export type PersonModelOneOf = {
  email?: PersonModelOneOfEmail;
  id: number;
  name?: PersonModelOneOfName;
  phone?: PersonModelOneOfPhone;
};
