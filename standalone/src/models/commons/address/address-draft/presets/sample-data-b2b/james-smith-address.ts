import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const jamesSmithAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('James')
    .lastName('Smith')
    .streetName('Baker Street')
    .streetNumber('221B')
    .postalCode('NW1 6XE')
    .city('London')
    .country('GB')
    .region('Greater London');

export default jamesSmithAddress;
