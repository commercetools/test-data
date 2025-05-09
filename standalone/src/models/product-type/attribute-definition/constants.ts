const attributeConstraints = {
  SameForAll: 'SameForAll',
  None: 'None',
  Unique: 'Unique',
  CombinationUnique: 'CombinationUnique',
} as const;

const inputHints = {
  SingleLine: 'SingleLine',
  MultiLine: 'MultiLine',
} as const;

export { attributeConstraints, inputHints };
