import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const williamDavisAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('William')
    .lastName('Davis')
    .streetName('King Street')
    .streetNumber('85')
    .postalCode('W6 9JT')
    .city('London')
    .country('GB')
    .region('Greater London');

export default williamDavisAddress;
