export type T<ModelName> = {
    id: string;
    createdBy: string;
};
export type T<ModelName>Graphql = T<ModelName> & {
  __typename: '<ModelName>';
};
