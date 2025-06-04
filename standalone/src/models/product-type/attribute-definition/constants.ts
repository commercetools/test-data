import {
  TCtpAttributeConstraint,
  TCtpLevel,
  TCtpTextInputHint,
} from '@/graphql-types';

const attributeConstraints = {
  SameForAll: TCtpAttributeConstraint.SameForAll,
  None: TCtpAttributeConstraint.None,
  Unique: TCtpAttributeConstraint.Unique,
  CombinationUnique: TCtpAttributeConstraint.CombinationUnique,
} as const;

const inputHints = {
  SingleLine: TCtpTextInputHint.SingleLine,
  MultiLine: TCtpTextInputHint.MultiLine,
} as const;

const levels = {
  Product: TCtpLevel.Product,
  Variant: TCtpLevel.Variant,
} as const;

export { attributeConstraints, inputHints, levels };
