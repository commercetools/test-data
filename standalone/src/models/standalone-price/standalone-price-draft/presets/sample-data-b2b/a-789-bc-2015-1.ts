import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const a789Bc20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('a789-bc-2015-1')
    .sku('a789-bc-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1375000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default a789Bc20151;
