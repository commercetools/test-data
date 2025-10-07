import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ClientLogging, LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TAttributeGroupGraphql, TAttributeGroupRest } from './types';

// Reference: https://docs.commercetools.com/api/projects/attribute-groups#attributegroup

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  attributes: fake(() => []),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  description: null,
  id: fake((f) => f.string.uuid()),
  key: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  name: fake(() => LocalizedString.random()),
  version: sequence(),
};

// readonly attributes: AttributeReference[];
// readonly createdAt: string;
// readonly createdBy?: CreatedBy;
// readonly description?: LocalizedString;
// readonly id: string;
// readonly key?: string;
// readonly lastModifiedAt: string;
// readonly lastModifiedBy?: LastModifiedBy;
// readonly name: LocalizedString;
// readonly version: number;
export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// __typename?: 'AttributeGroup';
// attributes: Array<TCtpAttributeReference>;
// createdAt: Scalars['DateTime']['output'];
// createdBy?: Maybe<TCtpInitiator>;
// description?: Maybe<Scalars['String']['output']>;
// descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
// id: Scalars['String']['output'];
// key?: Maybe<Scalars['String']['output']>;
// lastModifiedAt: Scalars['DateTime']['output'];
// lastModifiedBy?: Maybe<TCtpInitiator>;
// name?: Maybe<Scalars['String']['output']>;
// nameAllLocales: Array<TCtpLocalizedString>;
// version: Scalars['Long']['output'];
export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupGraphql> = {
  fields: {
    ...commonFieldsConfig,
    nameAllLocales: fake(() => LocalizedString.random()),
    descriptionAllLocales: null,
    __typename: 'AttributeGroup',
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.name;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : model.description;

    return { ...model, name, description };
  },
};
