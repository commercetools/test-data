import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import dumpTrucks from './dump-trucks';

const dumpTrucksCategory = dumpTrucks().build<TCategoryDraft>();

const offHighwayDumpTrucks = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper für den Offroad-Einsatz')
        ['it-IT']('Camion Ribaltabili Fuoristrada')
        ['nl-NL']('Off-road Kipwagens')
        ['fr-FR']('Camions-bennes tout-terrain')
        ['en-AU']('Off-Highway Dump Trucks')
        ['es-ES']('Camiones volquete todo terreno')
        ['en-GB']('Off-Highway Dump Trucks')
        ['en-NZ']('Off-Highway Dump Trucks')
        ['pt-PT']('Caminhões Basculantes Fora de Estrada')
        ['en-US']('Off-Highway Dump Trucks')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper, die für den Offroad-Einsatz konzipiert sind')
        ['it-IT']('Camion ribaltabili progettati per uso fuoristrada')
        ['nl-NL']('Kipwagens ontworpen voor gebruik buiten de weg')
        ['fr-FR']('Camions-bennes conçus pour une utilisation tout-terrain')
        ['en-AU']('Dump trucks designed for off-highway use')
        ['es-ES']('Camiones volquete diseñados para uso fuera de carretera')
        ['en-GB']('Dump trucks designed for off-highway use')
        ['en-NZ']('Dump trucks designed for off-highway use')
        ['pt-PT']('Caminhões basculantes projetados para uso fora de estrada')
        ['en-US']('Dump trucks designed for off-highway use')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('offroad_kipper')
        ['it-IT']('off_highway_dump_trucks')
        ['nl-NL']('off_highway_dump_trucks')
        ['fr-FR']('camions_bennes_tout-terrain')
        ['en-AU']('off_highway_dump_trucks')
        ['es-ES']('camiones_volquete_todo_terreno')
        ['en-GB']('off_highway_dump_trucks')
        ['en-NZ']('off_highway_dump_trucks')
        ['pt-PT']('off_highway_dump_trucks')
        ['en-US']('off_highway_dump_trucks')
    )
    .key('off-highway-dump-trucks')
    .orderHint('0.0000171136448473756887464')
    .parent(KeyReferenceDraft.presets.category().key(dumpTrucksCategory.key!));

export default offHighwayDumpTrucks;
