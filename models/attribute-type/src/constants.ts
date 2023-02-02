export const graphqlTypenameByAttributeTypeName = {
  boolean: 'BooleanAttributeDefinitionType',
  date: 'DateAttributeDefinitionType',
  datetime: 'DateTimeAttributeDefinitionType',
  ltext: 'LocalizableTextAttributeDefinitionType',
  enum: 'EnumAttributeDefinitionType',
  lenum: 'LocalizableEnumAttributeDefinitionType',
  money: 'MoneyAttributeDefinitionType',
  nested: 'NestedAttributeDefinitionType',
  number: 'NumberAttributeDefinitionType',
  reference: 'ReferenceAttributeDefinitionType',
  set: 'SetAttributeDefinitionType',
  text: 'TextAttributeDefinitionType',
  time: 'TimeAttributeDefinitionType',
};

export const typeNames = Object.keys(graphqlTypenameByAttributeTypeName);
export const typeWithNoAdditionalFieldsNames = Object.keys(
  graphqlTypenameByAttributeTypeName
).filter((typeName) =>
  [
    'boolean',
    'text',
    'ltext',
    'number',
    'money',
    'date',
    'time',
    'datetime',
  ].includes(typeName)
);
