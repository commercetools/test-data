import type { TBuilder } from '../../core';
import type { TMcSettingsProjectExtension } from '../../graphql-types';

export type TProjectExtension = Omit<TMcSettingsProjectExtension, '__typename'>;

export type TProjectExtensionGraphql = TMcSettingsProjectExtension;

export type TProjectExtensionBuilder = TBuilder<TProjectExtension>;
export type TCreateProjectExtensionBuilder = () => TProjectExtensionBuilder;
