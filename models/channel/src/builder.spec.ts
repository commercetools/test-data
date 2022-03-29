/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TChannel, TChannelGraphql } from './types';
import { roles } from './constants';
import * as Channel from '.';

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
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: null,
        address: expect.objectContaining({
          country: expect.any(String),
          // ...
        }),
        reviewRatingStatistics: null,
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannel, TChannel>(
      'rest',
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
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: null,
        address: expect.objectContaining({
          country: expect.any(String),
          // ...
        }),
        reviewRatingStatistics: null,
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannel, TChannelGraphql>(
      'graphql',
      Channel.random(),
      expect.objectContaining({
        __typename: 'Channel',
        nameAllLocales: expect.any(Array),
        descriptionAllLocales: expect.any(Array),
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
