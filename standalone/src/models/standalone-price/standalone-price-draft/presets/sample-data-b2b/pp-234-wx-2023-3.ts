import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pp234Wx20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pp234-wx-2023-3')
    .sku('pp234-wx-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3080000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pp234Wx20233;
