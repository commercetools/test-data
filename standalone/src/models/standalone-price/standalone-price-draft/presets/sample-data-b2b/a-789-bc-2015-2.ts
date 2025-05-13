import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const a789Bc20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('a789-bc-2015-2')
    .sku('a789-bc-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1237500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default a789Bc20152;
