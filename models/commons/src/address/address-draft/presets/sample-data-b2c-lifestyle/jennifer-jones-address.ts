import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const jenniferJonesAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Jennifer')
    .lastName('Jones')
    .streetName('Main Road')
    .streetNumber('100')
    .postalCode('SW1A2AA')
    .city('Westminster')
    .country('GB');

export default jenniferJonesAddress;
