/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type { TAddress, TAddressGraphql } from './types';
import * as Address from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAddress, TAddress>(
      'default',
      Address.random(),
      expect.objectContaining({
        id: expect.any(String),
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
    ...createBuilderSpec<TAddress, TAddress>(
      'rest',
      Address.random(),
      expect.objectContaining({
        id: expect.any(String),
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
    ...createBuilderSpec<TAddress, TAddressGraphql>(
      'graphql',
      Address.random(),
      expect.objectContaining({
        __typename: 'Address',
        // ...
      })
    )
  );
});
