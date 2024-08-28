import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const withCountryUsNoState = (): TAddressDraftBuilder =>
  AddressDraft.random().state(null!).country('US');

export default withCountryUsNoState;
