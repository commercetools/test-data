import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const withCountryUs = (): TAddressDraftBuilder =>
  AddressDraft.random().country('US');

export default withCountryUs;
