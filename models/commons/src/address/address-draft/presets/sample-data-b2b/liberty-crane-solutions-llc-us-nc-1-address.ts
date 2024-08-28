import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const libertyCraneSolutionsLlcUsNc1Address = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-nc-1')
    .streetName('Main Street')
    .streetNumber('789')
    .additionalStreetInfo('Building B')
    .postalCode('27601')
    .city('Raleigh')
    .country('US')
    .region('North Carolina')
    .state('North Carolina')
    .company('Liberty Crane Solutions LLC NC')
    .building('C')
    .apartment('456');

export default libertyCraneSolutionsLlcUsNc1Address;
