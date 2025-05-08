import { fake, type TModelFieldsConfig } from '../../../core';
import {
  Address,
  GeometryGraphql,
  GeometryRest,
  LocalizedStringDraft,
} from '../../commons';
import { roles } from '../constants';
import type { TChannelDraftGraphql, TChannelDraftRest } from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  roles: [roles.Primary],
  name: fake(() => LocalizedStringDraft.random()),
  description: fake(() => LocalizedStringDraft.random()),
  address: fake(() => Address.random()),
  custom: null,
};
export const restFieldsConfig: TModelFieldsConfig<TChannelDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    geoLocation: fake(() => GeometryRest.random()),
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TChannelDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    geoLocation: fake(() => GeometryGraphql.random()),
  },
};
