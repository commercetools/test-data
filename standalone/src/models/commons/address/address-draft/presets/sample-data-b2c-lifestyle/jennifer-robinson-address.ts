import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const jenniferRobinsonAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Jennifer')
    .lastName('Robinson')
    .streetName('Second Street')
    .streetNumber('15')
    .postalCode('10001')
    .city('New York City')
    .state('New York')
    .country('US');

export default jenniferRobinsonAddress;
