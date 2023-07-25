/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { LocalizedString } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { roles } from './constants';
import type { TChannel, TChannelGraphql } from './types';
import * as Channel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TChannel, TChannel>(
      'default',
      Channel.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: null,
        description: null,
        address: expect.objectContaining({
          country: expect.any(String),
          // ...
        }),
        reviewRatingStatistics: null,
        custom: null,
        geoLocation: expect.objectContaining({
          coordinates: [expect.any(Number), expect.any(Number)],
        }),
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannel, TChannel>(
      'rest',
      Channel.random().name(
        LocalizedString.random().en('Food Store').de('Lebensmittelgeschäft')
      ),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: expect.objectContaining({
          en: 'Food Store',
          de: 'Lebensmittelgeschäft',
          fr: expect.any(String),
        }),
        description: null,
        address: expect.objectContaining({
          country: expect.any(String),
          // ...
        }),
        reviewRatingStatistics: null,
        custom: null,
        geoLocation: expect.objectContaining({
          coordinates: [expect.any(Number), expect.any(Number)],
        }),
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannel, TChannelGraphql>(
      'graphql',
      Channel.random().name(
        LocalizedString.random().en('Food Store').de('Lebensmittelgeschäft')
      ),
      expect.objectContaining({
        __typename: 'Channel',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: 'Lebensmittelgeschäft',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: 'Food Store',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        descriptionAllLocales: null,
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});
