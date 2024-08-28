import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const eagleHeavyLiftTechnologiesIncUsNy1Address = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-ny-1')
    .streetName('Broadway')
    .streetNumber('123')
    .additionalStreetInfo('Unit 456')
    .postalCode('10001')
    .city('New York')
    .country('US')
    .region('New York')
    .state('New York')
    .company('Eagle Heavy Lift Technologies Inc. NY')
    .building('A')
    .apartment('789');

export default eagleHeavyLiftTechnologiesIncUsNy1Address;
