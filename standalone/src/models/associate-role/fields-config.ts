import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TAssociateRoleGraphql, TAssociateRoleRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// buyerAssignable: Scalars['Boolean']['output'];
// createdAt: Scalars['DateTime']['output'];
// createdBy?: Maybe<TCtpInitiator>;
// custom?: Maybe<TCtpCustomFieldsType>;
// id: Scalars['String']['output'];
// key: Scalars['String']['output'];
// lastModifiedAt: Scalars['DateTime']['output'];
// lastModifiedBy?: Maybe<TCtpInitiator>;
// name?: Maybe<Scalars['String']['output']>;
// permissions: Array<TCtpPermission>;
// version: Scalars['Long']['output'];
const commonFieldsConfig = {
  buyerAssignable: fake((f) => f.datatype.boolean()),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  custom: null,
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.alphanumeric(10)),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  name: null,
  permissions: [],
  version: sequence(),
};

// readonly id: string;
// readonly version: number;
// readonly createdAt: string;
// readonly lastModifiedAt: string;
// readonly lastModifiedBy?: LastModifiedBy;
// readonly createdBy?: CreatedBy;
// readonly key: string;
// readonly buyerAssignable: boolean;
// readonly name?: string;
// readonly permissions: Permission[];
// readonly custom?: CustomFields;
export const restFieldsConfig: TModelFieldsConfig<TAssociateRoleRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// __typename?: 'AssociateRole';
// buyerAssignable: Scalars['Boolean']['output'];
// createdAt: Scalars['DateTime']['output'];
// createdBy?: Maybe<TCtpInitiator>;
// custom?: Maybe<TCtpCustomFieldsType>;
// id: Scalars['String']['output'];
// key: Scalars['String']['output'];
// lastModifiedAt: Scalars['DateTime']['output'];
// lastModifiedBy?: Maybe<TCtpInitiator>;
// name?: Maybe<Scalars['String']['output']>;
// permissions: Array<TCtpPermission>;
// version: Scalars['Long']['output'];
export const graphqlFieldsConfig: TModelFieldsConfig<TAssociateRoleGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'AssociateRole',
  },
};
