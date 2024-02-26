import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const u123Qr20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('u123-qr-2015-1')
    .sku('u123-qr-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default u123Qr20151;
