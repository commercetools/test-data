import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const oliviaJonesAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Olivia')
    .lastName('Jones')
    .streetName('Market Street')
    .streetNumber('18')
    .postalCode('M1 1PT')
    .city('Manchester')
    .country('GB')
    .region('Greater Manchester');

export default oliviaJonesAddress;
