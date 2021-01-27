export const commands = {
    START:          'start',
    MIRRORTAR:      'mirrorTar|mt',
    MIRROR:         'mirror|m',
    MIRROR_STATUS:  'mirrorStatus|ms',
    LIST:           'list|l',
    GET_FOLDER:     'getFolder|gf',
    CANCEL_MIRROR:  'cancelMirror|cm',
    CANCEL_ALL:     'cancelAll|ca',
    STATS:          'stats',
    GET_LINK:       'getLink|gl',
    CLONE:          'clone|c',
    ID:             'id',
    MF:             'mf',
    TAR:            'tar|t',
    UNZIP_MIRROR:   'unzipMirror|um',
    REMOVE_TEXT:    'removeText|rt',
    COUT:           'count|cnt',
    HELP:           'help|h',
    AUTHORIZE:      'authorize|a',
    UNAUTHORIZE:    'unauthorize|ua'
};

export const commandsAfter: any = {
    START:          '$',
    MIRRORTAR:      '($| (.+))',
    MIRROR:         '($| (.+))',
    MIRROR_STATUS:  '$',
    LIST:           ' (.+)',
    GET_FOLDER:     '$',
    CANCEL_MIRROR:  '($| (.+))',
    CANCEL_ALL:     '$',
    STATS:          'stats',
    GET_LINK:       ' (.+)',
    CLONE:          ' (.+)',
    ID:             '$',
    MF:             '$',
    TAR:            ' (.+)',
    UNZIP_MIRROR:   ' (.+)',
    REMOVE_TEXT:    ' (.+)',
    COUT:           ' (.+)',
    HELP:           '$',
    AUTHORIZE:      '$',
    UNAUTHORIZE:    '$'
};