import { InjectionToken } from '@angular/core';

export const POCKETS_BASE_PATH = new InjectionToken<string>('POCKETS_BASE_PATH');
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
