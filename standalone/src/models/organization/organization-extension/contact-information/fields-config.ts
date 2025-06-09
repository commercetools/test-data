import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TContactInformationGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TContactInformationGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      email: fake((f) => f.internet.email()),
      verifiedEmail: fake((f) => f.internet.email()),
      __typename: 'ContactInformation',
    },
  };
