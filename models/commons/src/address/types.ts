import type { TBuilder } from '@commercetools-test-data/core';

export type TAddressBuilder = TBuilder<TAddress>;

export type TAddress = {
  id: string;
  key?: string;
  title?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
  countryName?: string;
  country: string;
  company?: string;
  department?: string;
  building?: string;
  apartment?: string;
  pOBox?: string;
  phone?: string;
  mobile?: string;
  fax?: string;
  email?: string;
  additionalAddressInfo?: string;
  externalId?: string;
};
export type TCreateAddressBuilder = () => TAddressBuilder;
export type TAddressGraphql = TAddress & {
  __typename: 'Address';
};
