export const graphqlTypenameByFieldTypeName = {
  Boolean: 'BooleanType',
  Date: 'DateType',
  DateTime: 'DateTimeType',
  LocalizedString: 'LocalizedStringType',
  Enum: 'EnumType',
  LocalizedEnum: 'LocalizedEnumType',
  Money: 'MoneyType',
  Number: 'NumberType',
  Reference: 'ReferenceType',
  Set: 'SetType',
  String: 'StringType',
  Time: 'TimeType',
};

export const typeNames = Object.keys(graphqlTypenameByFieldTypeName);
