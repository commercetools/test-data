/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProject, TProjectGraphql } from './types';
import * as Project from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProject, TProject>(
      'default',
      Project.random().key('project-key-1'),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        version: expect.any(Number),
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        trialUntil: null,
        businessUnits: null,
        searchIndexing: null,
        carts: null,
        messages: expect.objectContaining({
          enabled: false,
        }),
        externalOAuth: null,
        shippingRateInputType: null,
        shoppingLists: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProject, TProject>(
      'rest',
      Project.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        trialUntil: null,
        businessUnits: null,
        searchIndexing: null,
        carts: null,
        messages: expect.objectContaining({
          enabled: false,
        }),
        externalOAuth: null,
        shippingRateInputType: null,
        shoppingLists: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProject, TProjectGraphql>(
      'graphql',
      Project.random().key('project-key-1'),
      expect.objectContaining({
        __typename: 'Project',
        id: expect.any(String),
        createdAt: expect.any(String),
        version: expect.any(Number),
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        trialUntil: null,
        businessUnits: null,
        searchIndexing: null,
        carts: null,
        messages: expect.objectContaining({
          enabled: false,
        }),
        externalOAuth: null,
        shippingRateInputType: null,
        shoppingLists: null,
      })
    )
  );
});
