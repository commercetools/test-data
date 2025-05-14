import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2023-2')
    .sku('dd234-wx-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1815001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default dd234Wx20232;
