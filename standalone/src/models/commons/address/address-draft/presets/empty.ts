import type { TAddressDraftBuilder } from '../../types';
import AddressDraft from '../builder';

const empty = (): TAddressDraftBuilder =>
  AddressDraft()
    .id(undefined)
    .key(undefined)
    .title(undefined)
    .salutation(undefined)
    .firstName(undefined)
    .lastName(undefined)
    .streetName(undefined)
    .streetNumber(undefined)
    .additionalStreetInfo(undefined)
    .postalCode(undefined)
    .city(undefined)
    .state(undefined)
    .region(undefined)
    .company(undefined)
    .department(undefined)
    .building(undefined)
    .apartment(undefined)
    .pOBox(undefined)
    .phone(undefined)
    .mobile(undefined)
    .fax(undefined)
    .email(undefined)
    .additionalAddressInfo(undefined)
    .externalId(undefined)
    .custom(undefined);

export default empty;
