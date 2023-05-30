import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const usAddress = (): TAddressDraftBuilder =>
  AddressDraft.random().country('US');

export default usAddress;
