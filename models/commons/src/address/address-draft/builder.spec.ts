/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAddressDraft, TAddressDraftGraphql } from '../types';
import * as AddressDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAddressDraft, TAddressDraft>(
      'default',
      AddressDraft.random(),
      expect.objectContaining({
        id: null,
        key: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        streetName: expect.any(String),
        streetNumber: expect.any(String),
        additionalStreetInfo: expect.any(String),
        postalCode: expect.any(String),
        city: expect.any(String),
        region: null,
        state: expect.any(String),
        country: expect.any(String),
        company: expect.any(String),
        department: expect.any(String),
        building: null,
        apartment: null,
        pOBox: 'PO Box 1033',
        phone: expect.any(String),
        mobile: expect.any(String),
        fax: expect.any(String),
        email: expect.any(String),
        additionalAddressInfo: null,
        externalId: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TAddressDraft, TAddressDraft>(
      'rest',
      AddressDraft.random(),
      expect.objectContaining({
        id: null,
        key: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        streetName: expect.any(String),
        streetNumber: expect.any(String),
        additionalStreetInfo: expect.any(String),
        postalCode: expect.any(String),
        city: expect.any(String),
        region: null,
        state: expect.any(String),
        country: expect.any(String),
        company: expect.any(String),
        department: expect.any(String),
        building: null,
        apartment: null,
        pOBox: 'PO Box 1033',
        phone: expect.any(String),
        mobile: expect.any(String),
        fax: expect.any(String),
        email: expect.any(String),
        additionalAddressInfo: null,
        externalId: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TAddressDraft, TAddressDraftGraphql>(
      'graphql',
      AddressDraft.random(),
      expect.objectContaining({
        id: null,
        key: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        streetName: expect.any(String),
        streetNumber: expect.any(String),
        additionalStreetInfo: expect.any(String),
        postalCode: expect.any(String),
        city: expect.any(String),
        region: null,
        state: expect.any(String),
        country: expect.any(String),
        company: expect.any(String),
        department: expect.any(String),
        building: null,
        apartment: null,
        pOBox: 'PO Box 1033',
        phone: expect.any(String),
        mobile: expect.any(String),
        fax: expect.any(String),
        email: expect.any(String),
        additionalAddressInfo: null,
        externalId: null,
      })
    )
  );
});
