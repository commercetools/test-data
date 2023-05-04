/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { roles } from '../constants';
import type { TChannelDraft, TChannelDraftGraphql } from '../types';
import * as ChannelDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TChannelDraft, TChannelDraft>(
      'default',
      ChannelDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannelDraft, TChannelDraft>(
      'rest',
      ChannelDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    )
  );
  it(
    ...createBuilderSpec<TChannelDraft, TChannelDraftGraphql>(
      'graphql',
      ChannelDraft.random(),
      expect.objectContaining({
        __typename: 'ChannelDraft',
        key: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    )
  );
});
