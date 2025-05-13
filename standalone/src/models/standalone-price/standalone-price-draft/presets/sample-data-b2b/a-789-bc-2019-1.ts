import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const a789Bc20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('a789-bc-2019-1')
    .sku('a789-bc-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1512500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default a789Bc20191;
