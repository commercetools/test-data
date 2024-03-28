import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lifttechSolutionsLtdFrAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr')
    .streetName('Rue de la Paix')
    .streetNumber('789')
    .additionalStreetInfo('Étage 4')
    .postalCode('75002')
    .city('Paris')
    .state('Île-de-France')
    .country('FR')
    .region('Île-de-France')
    .company('LiftTech Solutions Ltd FR')
    .building('E')
    .apartment('321');

export default lifttechSolutionsLtdFrAddress;
