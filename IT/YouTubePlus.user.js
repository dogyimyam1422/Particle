// ==UserScript==
// @version     1.2.0
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,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
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/IT/YouTubePlus.user.js
// @grant       GM_xmlhttpRequest
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    var xhr,
        core,
        styleSheet,
        injector;
    if (window.chrome && document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    }
    if (GM_info) {
        unsafeWindow.userScript = JSON.stringify(GM_info);
        xhr = function (a) {
            function process(b) {
                Function('a', '(' + a.call.replace('getAllResponseHeaders()', 'responseHeaders') + ')(a)')(b);
            }
            if (a && a.data && typeof a.data === 'object') {
                a = a.data;
                GM_xmlhttpRequest({
                    url: a.url,
                    method: a.method,
                    onload: process
                });
            }
        };
        window.addEventListener('message', xhr, false);
    }
    styleSheet =
        ':focus{outline:none;}\n' +
        '::-moz-focus-inner{border:0;}\n' +
        'select{color:transparent !important;text-shadow: 0 0 0 #333}\n' +
        '#P{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAk1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEGrSNAAAAMHRSTlMAAOy/fwv6+XxgQOiP5PYXbi/OT7Q135UdMAd3ndNaCY3YDvuaIbc50lV0CpMbojQR/p9JAAAAfElEQVR4XmXMRRLEMBRDQVN4mJkZ//1PNxqnspD9ll0lKc62tNaBif3bqh9b2tl1m6H4nDIi7d7CW+GcTJwrYWgwpC0MyWgcm2TTGayc19ZULRMoGVpvtmy+PLJ9kQRm8kPwdzydIWSXK4DsdgeQVY+nIkuz1xtA9vkC2H44qRgsX16KtQAAAABJRU5ErkJggg==") no-repeat 0 4px;cursor:pointer;opacity:0.55;height:28px;width:19px;vertical-align:middle}\n' +
        '#P:hover{opacity:0.85}\n' +
        '.P-hide{display:none}\n' +
        '#header,' +
        '#watch-discussion,' +
        '#feed-pyv-container,' +
        '.video-list-item:not(.related-list-item),' +
        '.pyv-afc-ads-container,' +
        '.ad-div' +
        '{display:none}\n' +
        '#masthead-appbar' +
        '{display:block !important}\n' +
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list\n' +
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat; width:24px; height:24px}';
    core = function () {
        var loaded,
            channelId = {},
            api = false,
            widePlayer = true,
            fullscreen = false,
            html5Player = true,
            requestRunning = false,
            playlistAutoPlay = window.localStorage.playlistAutoplay || 'false',
            userSettings = (window.localStorage.Particle && JSON.parse(window.localStorage.Particle)) || {
                GEN_YT_LOGO_LINK: true,
                GEN_BLUE_GLOW: true,
                VID_MEM_QLTY: true,
                VID_CTRL_BAR_CLR: 'dark',
                VID_PROG_BAR_CLR: 'red',
                CHN_DFLT_PAGE: 'channels'
            },
            lang = {
                GLB_SVE: {
                    en: 'Save',
                    'pt-PT': 'Guardar'
                },
                GEN: {
                    en: 'General',
                    'pt-PT': 'Geral'
                },
                VID: {
                    en: 'Video',
                    'pt-PT': 'Video'
                },
                CHN: {
                    en: 'Channels',
                    'pt-PT': 'Canais'
                },
                DWN: {
                    en: 'Download',
                    'pt-PT': 'Transferência'
                },
                EXT: {
                    en: 'Extras',
                    'pt-PT': 'Extras'
                },
                ABT: {
                    en: 'About',
                    'pt-PT': 'Sobre'
                },
                GEN_TTL: {
                    en: 'General settings',
                    'pt-PT': 'Definições gerais'
                },
                GEN_GEN: {
                    en: 'General',
                    'pt-PT': 'Geral'
                },
                GEN_YT_LOGO_LINK: {
                    en: 'YouTube logo redirects to subscriptions',
                    'pt-PT': 'Logotipo do Youtube redirecciona para as subscrições'
                },
                GEN_GRID_SUBS: {
                    en: 'Grid layout in subscriptions',
                    'pt-PT': 'Subscrições em formato grelha'
                },
                GEN_GRID_SRCH: {
                    en: 'Grid layout in search results',
                    'pt-PT': 'Resultados de pesquisa em formato grelha'
                },
                GEN_CMPT_TITL: {
                    en: 'Compact titles in grid layout',
                    'pt-PT': 'Títulos compactos no formato grelha'
                },
                GEN_HIDE_FTR: {
                    en: 'Hide footer',
                    'pt-PT': 'Esconder rodapé'
                },
                GEN_BLUE_GLOW: {
                    en: 'Remove blue glow around clicked buttons',
                    'pt-PT': 'Retirar brilho azul em torno dos botões clicados'
                },
                GEN_REM_RECM_SDBR: {
                    en: 'Remove recommended channels sidebar',
                    'pt-PT': 'Retirar barra lateral de canais recomendados'
                },
                GEN_ENHC: {
                    en: 'Enhancements',
                    'pt-PT': 'Melhorias'
                },
                GEN_USER_LNKS: {
                    en: 'Enable user links in recommended videos',
                    'pt-PT': 'Activar links dos utilizadores nos videos recomendados'
                },
                VID_TTL: {
                    en: 'Video settings',
                    'pt-PT': 'Definições de vídeo'
                },
                VID_PLR: {
                    en: 'Player',
                    'pt-PT': 'Player'
                },
                VID_DFLT_QLTY: {
                    en: 'Default video quality: ',
                    'pt-PT': 'Qualidade de vídeo padrão: '
                },
                VID_DFLT_QLTY_AUTO: {
                    en: 'Auto',
                    'pt-PT': 'Auto'
                },
                VID_DFLT_QLTY_TNY: {
                    en: '144p'
                },
                VID_DFLT_QLTY_SML: {
                    en: '240p'
                },
                VID_DFLT_QLTY_MDM: {
                    en: '360p'
                },
                VID_DFLT_QLTY_LRG: {
                    en: '480p'
                },
                VID_DFLT_QLTY_720: {
                    en: '720p'
                },
                VID_DFLT_QLTY_1080: {
                    en: '1080p'
                },
                VID_DFLT_QLTY_1440: {
                    en: '1440p'
                },
                VID_DFLT_QLTY_ORIG: {
                    en: '4K'
                },
                VID_PLR_ATPL: {
                    en: 'Autoplay videos',
                    'pt-PT': 'Iniciar vídeos automaticamente'
                },
                VID_PROG_BAR_CLR: {
                    en: 'Progress bar color: ',
                    'pt-PT': 'Cor da barra de progresso: '
                },
                VID_PROG_BAR_CLR_RED: { // color = red
                    en: 'Red',
                    'pt-PT': 'Vermelha'
                },
                VID_PROG_BAR_CLR_WHT: { // color = white
                    en: 'White',
                    'pt-PT': 'Branca'
                },
                VID_CTRL_BAR_CLR: {
                    en: 'Control bar color: ',
                    'pt-PT': 'Cor da barra de controlos: '
                },
                VID_CTRL_BAR_CLR_DARK: { // theme = dark
                    en: 'Dark',
                    'pt-PT': 'Escura'
                },
                VID_CTRL_BAR_CLR_LGHT: { // theme = light
                    en: 'Light',
                    'pt-PT': 'Clara'
                },
                VID_LAYT: {
                    en: 'Layout',
                    'pt-PT': 'Aparência'
                },
                VID_VID_CNT: {
                    en: 'Show number of uploaded videos in front of the author\'s username',
                    'pt-PT': 'Mostrar número de vídeos carregados em frente do nome do autor'
                },
                VID_HIDE_COMS: {
                    en: 'Hide comment section',
                    'pt-PT': 'Esconder secção de comentários'
                },
                VID_BTNS: {
                    en: 'Buttons',
                    'pt-PT': 'Botões'
                },
                VID_DWNL_BTN: {
                    en: 'Download button',
                    'pt-PT': 'Botão de download'
                },
                VID_RPT_BTN: {
                    en: 'Repeat button',
                    'pt-PT': 'Botão de repetir'
                },
                VID_LIGHTS_OUT: {
                    en: 'Lights out',
                    'pt-PT': 'Modo escuro'
                },
                VID_END_SHRE: {
                    en: 'Disable share panel when video ends',
                    'pt-PT': 'Desactivar painel de partilha quando o video acaba'
                },
                VID_PLST: {
                    en: 'Playlists',
                    'pt-PT': 'Listas'
                },
                VID_PLST_ATPL: {
                    en: 'Add playlist autoplay button',
                    'pt-PT': 'Adicionar botão de controlo de início automático das listas'
                },
                CHN_TTL: {
                    en: 'Channel settings',
                    'pt-PT': 'Definições de canais'
                },
                CHN_FAV: {
                    en: 'Favorites',
                    'pt-PT': 'Favoritos'
                },
                CHN_FAV_ADS: {
                    en: 'Enable ads in favorite channels',
                    'pt-PT': 'Activar publicidades nos canais favoritos'
                },
                CHN_ALK: {
                    en: 'Auto-like',
                    'pt-PT': 'Gostar automaticamente'
                },
                CHN_BVR: {
                    en: 'Behavior',
                    'pt-PT': 'Comportamento'
                },
                CHN_TRL_ATP: {
                    en: 'Disable trailer autoplay',
                    'pt-PT': 'Desactivar começo automático do trailer'
                },
                CHN_DFLT_PAGE: {
                    en: 'Default landing page: ',
                    'pt-PT': 'Página de destino: '
                },
                CHN_DFLT_PAGE_DFLT: {
                    en: 'Default',
                    'pt-PT': 'Padrão'
                },
                CHN_DFLT_PAGE_VID: {
                    en: 'Videos',
                    'pt-PT': 'Vídeos'
                },
                CHN_DFLT_PAGE_PL: {
                    en: 'Playlists',
                    'pt-PT': 'Listas de reprodução'
                },
                CHN_DFLT_PAGE_CHN: {
                    en: 'Channels',
                    'pt-PT': 'Canais'
                },
                CHN_DFLT_PAGE_DISC: {
                    en: 'Discussion',
                    'pt-PT': 'Discussão'
                },
                CHN_DFLT_PAGE_ABT: {
                    en: 'About',
                    'pt-PT': 'Acerca de'
                },
                DWN_TTL: {
                    en: 'Download settings',
                    'pt-PT': 'Preferências de transferência'
                },
                DWN_PREF: {
                    en: 'Preferences',
                    'pt-PT': 'Preferências'
                },
                DWN_DEFQ: {
                    en: 'Default quality',
                    'pt-PT': 'Qualidade padrão'
                },
                DWN_FILE_NAME: {
                    en: 'File name preferences',
                    'pt-PT': 'Preferências de nome de ficheiro'
                },
                ABT_TTL: {
                    en: 'Information and useful links',
                    'pt-PT': 'Informação e ligações úteis'
                },
                ABT_INFO: {
                    en: 'Official pages',
                    'pt-PT': 'Páginas oficiais'
                },
                ABT_LNK_GHB: {
                    en: 'GitHub'
                },
                ABT_LNK_GRFK: {
                    en: 'Greasy Fork'
                },
                ABT_LNK_OPNU: {
                    en: 'OpenUserJS'
                },
                ABT_PRBL: {
                    en: 'Report a problem',
                    'pt-PT': 'Reportar problema'
                },
                ABT_LNK_PRBL: {
                    en: 'Click here for instructions',
                    'pt-PT': 'Clique aqui para instruções'
                }
            };
        function settingsMenu() {
            var li,
                h2,
                h3,
                hr,
                div,
                link,
                span,
                input,
                label,
                select,
                option,
                button,
                pHeader,
                pContainer,
                pList,
                pContent,
                uploadButton,
                settingsButton,
                userLang,
                menus = {
                    GEN: {
                        GEN_TTL: ['h2'],
                        GEN_GEN: ['h3'],
                        GEN_YT_LOGO_LINK: ['checkbox'],
                        GEN_GRID_SUBS: ['checkbox'],
                        GEN_GRID_SRCH: ['checkbox'],
                        GEN_CMPT_TITL: ['checkbox'],
                        GEN_HIDE_FTR: ['checkbox'],
                        GEN_BLUE_GLOW: ['checkbox'],
                        GEN_REM_RECM_SDBR: ['checkbox'],
                        GEN_ENHC: ['h3'],
                        GEN_USER_LNKS: ['checkbox']
                    },
                    VID: {
                        VID_TTL: ['h2'],
                        VID_PLR: ['h3'],
                        VID_PLR_ATPL: ['checkbox'],
                        VID_END_SHRE: ['checkbox'],
                        VID_CTRL_BAR_CLR: ['select', {
                            'dark': 'VID_CTRL_BAR_CLR_DARK',
                            'light': 'VID_CTRL_BAR_CLR_LGHT'
                        }],
                        VID_PROG_BAR_CLR: ['select', {
                            'red': 'VID_PROG_BAR_CLR_RED',
                            'white': 'VID_PROG_BAR_CLR_WHT'
                        }],
                        VID_DFLT_QLTY: ['select', {
                            'auto': 'VID_DFLT_QLTY_AUTO',
                            'tiny': 'VID_DFLT_QLTY_TNY',
                            'small': 'VID_DFLT_QLTY_SML',
                            'medium': 'VID_DFLT_QLTY_MDM',
                            'large': 'VID_DFLT_QLTY_LRG',
                            'hd720': 'VID_DFLT_QLTY_720',
                            'hd1080': 'VID_DFLT_QLTY_1080',
                            'hd1440': 'VID_DFLT_QLTY_1440',
                            'highres': 'VID_DFLT_QLTY_ORIG'
                        }],
                        VID_PLST: ['h3'],
                        VID_PLST_ATPL: ['checkbox'],
                        VID_LAYT: ['h3'],
                        VID_VID_CNT: ['checkbox'],
                        VID_HIDE_COMS: ['checkbox'],
                        VID_BTNS: ['h3'],
                        VID_DWNL_BTN: ['checkbox'],
                        VID_RPT_BTN: ['checkbox'],
                        VID_LIGHTS_OUT: ['checkbox']
                    },
                    CHN: {
                        CHN_TTL: ['h2'],
                        CHN_FAV: ['h3'],
                        CHN_FAV_ADS: ['checkbox'],
                        CHN_ALK: ['checkbox'],
                        CHN_BVR: ['h3'],
                        CHN_TRL_ATP: ['checkbox'],
                        CHN_DFLT_PAGE: ['select', {
                            'default': 'CHN_DFLT_PAGE_DFLT',
                            'videos': 'CHN_DFLT_PAGE_VID',
                            'playlists': 'CHN_DFLT_PAGE_PL',
                            'channels': 'CHN_DFLT_PAGE_CHN',
                            'discussion': 'CHN_DFLT_PAGE_DISC',
                            'about': 'CHN_DFLT_PAGE_ABT'
                        }]
                    },
                    DWN: {
                        DWN_TTL: ['h2'],
                        DWN_PREF: ['h3'],
                        DWN_DEFQ: ['checkbox'],
                        DWN_FILE_NAME: ['checkbox']
                    },
                    ABT: {
                        ABT_TTL: ['h2'],
                        ABT_INFO: ['h3'],
                        ABT_LNK_GHB: ['a', 'https://github.com/ParticleCore/Particle/issues'],
                        ABT_LNK_GRFK: ['a', 'https://greasyfork.org/en/scripts/'],
                        ABT_LNK_OPNU: ['a', 'http://openuserjs.org/scripts/ParticleCore/'],
                        ABT_PRBL: ['h3'],
                        ABT_LNK_PRBL: ['a', 'https://github.com/ParticleCore/Particle/issues']
                    }
                };
            function navigateSettings(a) {
                function saveSettings() {
                    var value,
                        navId = document.getElementsByClassName('selected')[0].id,
                        userSets = document.getElementById('P-content').querySelectorAll('[id*="' + navId + '"]'),
                        length = userSets.length;
                    while (length--) {
                        value = userSets[length].checked || (userSets[length].type !== 'radio' && userSets[length].value !== 'on' && userSets[length].value);
                        if (value) {
                            userSettings[userSets[length].id] = value;
                        } else if (!value) {
                            delete userSettings[userSets[length].id];
                        }
                    }
                    window.localStorage.Particle = JSON.stringify(userSettings);
                }
                if (typeof a === 'string' || a.target.parentNode.id === 'P-sidebar-list') {
                    if (typeof a === 'string') {
                        li = document.createElement('li');
                        li.textContent = lang[a][userLang] || lang[a].en;
                        li.className = 'selected';
                        li.id = a;
                        pList.appendChild(li);
                    } else {
                        document.getElementById('P-content').remove();
                        pContainer = document.getElementById('P-container');
                        pContent = document.createElement('div');
                        pContent.id = 'P-content';
                        pContainer.appendChild(pContent);
                        a.target.parentNode.querySelector('.selected').removeAttribute('class');
                        a.target.className = 'selected';
                        a = a.target.id;
                    }
                    Object.keys(menus[a]).forEach(function (c) {
                        var language = lang[c][userLang] || lang[c].en;
                        div = document.createElement('div');
                        if (menus[a][c][0] === 'h2') {
                            h2 = document.createElement('h2');
                            h2.textContent = language;
                            hr = document.createElement('hr');
                            hr.className = 'P-horz';
                            button = document.createElement('button');
                            button.className = 'P-save';
                            button.textContent = lang.GLB_SVE[userLang];
                            button.addEventListener('click', saveSettings);
                            pHeader = document.createElement('div');
                            pHeader.className = 'P-header';
                            pHeader.appendChild(button);
                            pHeader.appendChild(h2);
                            div.appendChild(pHeader);
                            div.appendChild(hr);
                        } else if (menus[a][c][0] === 'h3') {
                            h3 = document.createElement('h3');
                            h3.textContent = language;
                            div.appendChild(h3);
                        } else if (menus[a][c][0] === 'a') {
                            link = document.createElement('a');
                            link.textContent = language;
                            link.href = menus[a][c][1];
                            div.appendChild(link);
                        } else if (menus[a][c][0] === 'span') {
                            span = document.createElement('span');
                            span.textContent = language;
                            div.appendChild(span);
                        } else if (menus[a][c][0] === 'text') {
                            input = document.createElement('input');
                            input.placeholder = menus[a][c][1];
                            input.type = 'text';
                            div.textContent = language;
                            div.appendChild(input);
                        } else if (menus[a][c][0] === 'radio') {
                            label = document.createElement('label');
                            label.textContent = language;
                            div.appendChild(label);
                            Object.keys(menus[a][c][1]).forEach(function (d) {
                                input = document.createElement('input');
                                input.type = 'radio';
                                input.value = d;
                                input.name = c;
                                input.id = menus[a][c][1][d];
                                if (userSettings[menus[a][c][1][d]]) {
                                    input.checked = true;
                                }
                                label = document.createElement('label');
                                label.setAttribute('for', menus[a][c][1][d]);
                                label.textContent = lang[menus[a][c][1][d]][userLang] || lang[menus[a][c][1][d]].en;
                                div.appendChild(input);
                                div.appendChild(label);
                            });
                        } else if (menus[a][c][0] === 'checkbox') {
                            input = document.createElement('input');
                            input.type = 'checkbox';
                            input.checked = userSettings[c];
                            input.id = c;
                            label = document.createElement('label');
                            label.setAttribute('for', c);
                            label.textContent = language;
                            div.appendChild(input);
                            div.appendChild(label);
                        } else if (menus[a][c][0] === 'select') {
                            label = document.createElement('label');
                            label.setAttribute('for', c);
                            label.textContent = language;
                            select = document.createElement('select');
                            select.id = c;
                            Object.keys(menus[a][c][1]).forEach(function (d) {
                                option = document.createElement('option');
                                if (userSettings[c] === d) {
                                    option.selected = true;
                                }
                                option.value = d;
                                option.textContent = lang[menus[a][c][1][d]][userLang] || lang[menus[a][c][1][d]].en;
                                select.appendChild(option);
                            });
                            div.appendChild(label);
                            div.appendChild(select);
                        }
                        pContent.appendChild(div);
                    });
                }
            }
            function settingsTemplate() {
                var bodyContainer,
                    pageContainer,
                    settingsStyle,
                    pSidebar,
                    pWrapper = document.getElementById('P-settings');
                if (pWrapper) {
                    pWrapper.classList.toggle('P-hide');
                } else {
                    userLang = window.yt.config_.FEEDBACK_LOCALE_LANGUAGE;
                    bodyContainer = document.getElementById('body-container');
                    pageContainer = document.getElementById('page-container');
                    settingsStyle = document.createElement('style');
                    pWrapper = document.createElement('div');
                    pContainer = document.createElement('div');
                    pSidebar = document.createElement('div');
                    pContent = document.createElement('div');
                    pList = document.createElement('ul');
                    pWrapper.id = 'P-settings';
                    pContainer.id = 'P-container';
                    pSidebar.id = 'P-sidebar';
                    pList.id = 'P-sidebar-list';
                    pContent.id = 'P-content';
                    settingsStyle.textContent =
                        '#body-container{position:relative}\n' +
                        '#footer-container{position:relative}\n' +
                        '#P-settings{background:#f1f1f1;height:100%;left:0;position:absolute;right:0;z-index:1000}\n' +
                        '#P-sidebar,#P-content{-moz-user-select:none}\n' +
                        '#P-container{margin:10px auto 0;max-width:1066px}\n' +
                        '#P-sidebar,#P-content{box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);box-sizing:border-box}\n' +
                        '#P-sidebar{background:#1e1e1e;color:grey;float:left;width:195px;margin-right:10px;padding:10px 0}\n' +
                        '#P-sidebar-list > li{color:grey;padding:0 21px;cursor:pointer;font-size:11px;line-height:24px}\n' +
                        '#P-sidebar-list > li:hover{color:#1e1e1e;background:#f6f6f6}\n' +
                        '#P-sidebar-list > li.selected{color:#FFF;font-weight:bold;background-color:#cc181e}\n' +
                        '#P-content{background:#FFF;overflow:hidden;padding-bottom:40px;margin-bottom:10px}\n' +
                        '#P-content h2{color:#333;float:left;font-size:18px;font-weight:bold}\n' +
                        '#P-content h3{color:#555;font-size:14px;font-weight:bold;margin:30px 0 16px}\n' +
                        '#P-content > div{color:#666;padding:4px 0;overflow:hidden}\n' +
                        '#P-content > div:first-child{padding:0}\n' +
                        '#P-content div:first-child + div h3{margin-top:initial}\n' +
                        '#P-content > div:not(:first-child){padding-left:15px}\n' +
                        '#P-content label{line-height:20px}\n' +
                        '#P-content input{display:none;margin-left:25px}\n' +
                        '#P-content input + label{position:relative;margin-left:25px}\n' +
                        '#P-content input + label:before{cursor:pointer;border:1px solid #c6c6c6;content:"";left:-25px;height:14px;position:absolute;top:-1px;width:14px}\n' +
                        '#P-content input:checked + label:before{border:1px solid #36649c}\n' +
                        '#P-content input[type="radio"] + label:before{border-radius:50%;left:-20px}\n' +
                        '#P-content input[type="checkbox"]:checked + label:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAb1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6r1GAAAAJXRSTlMAmQmDBYwZUT92AjdnbAtadZRPBBaSfqRBejiODWWJEoJ5Gx0gnoi62QAAAExJREFUCB1NwQUSgDAAA7B2G+7uzv/fCAdDEvyY+HgFXnYV4WHRcXFTPgNo4cJYAUjSDLlkKXCq2bQdZY/LQHKccBMzjRWPzdjxEdAOtVECtAyMKkUAAAAASUVORK5CYII=) no-repeat 2px 1px;}\n' +
                        '#P-content input[type="radio"]:checked + label:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma1tx8vAAAAFXRSTlMAdRg22LcS6r1mJyQw/OcJ80UzaRuV38qbAAAANElEQVQIHQWAhxGAIBDA8oDYsABm/1U9gDMBkIsuCeqqusGuqgehqpl2qd4PhPp2gBHzgx9d1gLnmWiDtQAAAABJRU5ErkJggg==) no-repeat 3px;}\n' +
                        '#P-content select{cursor:pointer;background-image:linear-gradient(to bottom, #fcfcfc 0px, #f8f8f8 100%);border:1px solid #d3d3d3;color:#333;font-family:arial,sans-serif;font-size:11px;font-weight:bold;height:26px;-moz-appearance:none;-webkit-appearance:none;padding:0 1em}\n' +
                        '#P-content select option{padding:0;padding:0 1em}\n' +
                        '.P-header{height:20px;margin:0;padding:24px 0 0 15px}\n' +
                        '.P-save{background:#167ac6;border-color:#167ac6;border-radius:2px;box-shadow:0 1px 0 rgba(0, 0, 0, 0.05);color:#fff;cursor:pointer;display:inline-block;float:right;font-size:11px;font-weight:bold;height:28px;line-height:normal;margin-right:20px;margin-top:-5px;outline:0 none;padding:0 20px;vertical-align:middle;white-space:nowrap;word-wrap:normal}\n' +
                        '.P-save:hover{background:#126db3}\n' +
                        '.P-save:active{background:#095b99}\n' +
                        '.P-horz{border-bottom:0 none;border-top:1px solid #e2e2e2;height:0;margin:20px 0;position:relative}';
                    pContainer.appendChild(pSidebar);
                    pContainer.appendChild(pContent);
                    pWrapper.appendChild(pContainer);
                    pSidebar.appendChild(pList);
                    Object.keys(menus).forEach(function (a, b) {
                        if (b < 1) {
                            navigateSettings(a);
                        } else {
                            li = document.createElement('li');
                            li.id = a;
                            li.textContent = lang[a][userLang] || lang[a].en;
                            pList.appendChild(li);
                        }
                    });
                    bodyContainer.insertBefore(pWrapper, pageContainer);
                    pWrapper.appendChild(settingsStyle);
                    pWrapper.addEventListener('click', navigateSettings);
                }
                if (window.crhome) {
                    document.documentElement.scrollTop = 0;
                } else {
                    document.body.scrollTop = 0;
                }
            }
            uploadButton = document.getElementById('appbar-onebar-upload-group');
            if (uploadButton && !document.getElementById('P')) {
                settingsButton = document.createElement('button');
                settingsButton.id = 'P';
                settingsButton.title = 'YouTube+ settings';
                settingsButton.addEventListener('click', settingsTemplate);
                uploadButton.parentNode.insertBefore(settingsButton, uploadButton.nextSibling);
            }
        }
        function get(a, b, c) {
            var request = new XMLHttpRequest();
            function process() {
                b(request.responseText);
            }
            request.onload = process;
            request.open(c, a);
            request.send();
        }
        function checkThumbnail(a) {
            var img,
                base = (a.args.iurl_webp && '_webp') || '',
                hdURL = a.args['iurl' + base].replace('hqdefault', 'maxresdefault');
            function widthReport() {
                if (img.width > 120 && img.height > 90 && !a.args['iurlmaxres' + base] && api && api.getPlayerState && api.getPlayerState() === 5) {
                    a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base] = hdURL;
                    api.cueVideoByPlayerVars(a.args);
                    api.setPlaybackQuality(userSettings.VID_DFLT_QLTY);
                    img.removeEventListener('load', widthReport);
                }
            }
            img = new Image();
            img.addEventListener('load', widthReport);
            img.src = hdURL;
        }
        function username() {
            var videos,
                link,
                span,
                user,
                verified;
            function videoCounter() {
                link.href = user.getAttribute('href') + '/videos';
                link.setAttribute('style', 'font-size:11px;color:#666;display:initial;font-weight:initial;overflow:initial;vertical-align:initial');
                span = document.createElement('span');
                span.textContent = ' · ';
                span.setAttribute('style', 'font-size:11px;color:#666');
                document.getElementsByClassName('yt-user-info')[0].insertBefore(span, document.getElementById('uploaded-videos'));
                verified = document.getElementsByClassName('yt-channel-title-icon-verified')[0];
                if (verified) {
                    user.className += ' yt-uix-tooltip';
                    user.setAttribute('data-tooltip-text', verified.getAttribute('data-tooltip-text'));
                    user.style.color = '#167ac6';
                    verified.remove();
                }
            }
            function getInfo(b) {
                videos = JSON.parse(b);
                link.className = 'spf-link';
                link.textContent = channelId[user.getAttribute('data-ytid')] = videos.body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1].split('</li><li>')[1];
                videoCounter();
            }
            if (location.href.indexOf('/watch') !== -1 && !document.getElementById('uploaded-videos')) {
                link = document.createElement('a');
                user = document.getElementsByClassName('yt-user-info')[0].getElementsByTagName('a')[0];
                link.id = 'uploaded-videos';
                document.getElementsByClassName('yt-user-info')[0].appendChild(link);
                if (channelId[user.getAttribute('data-ytid')]) {
                    link.textContent = channelId[user.getAttribute('data-ytid')];
                    videoCounter();
                } else {
                    get('/playlist?list=' + user.getAttribute('data-ytid').replace('UC', 'UU') + '&spf=navigate', getInfo, 'GET');
                }
            }
        }
        function wide() {
            var playerElement;
            if (widePlayer && (document.cookie.indexOf('wide=0') !== -1 || document.cookie.indexOf('wide=1') === -1)) {
                document.cookie = 'wide=1; domain=.youtube.com; path=/';
                playerElement = document.getElementById('player');
                if (playerElement && location.href.indexOf('/watch') !== -1) {
                    playerElement.className = 'watch-large';
                    document.getElementById('watch7-container').className = 'watch-wide';
                }
            }
        }
        function argsCleaner(a) {
            var base = (a.args.iurl_webp && '_webp') || '',
                maxRes = (document.querySelector('[href*="maxresdefault"]') && document.querySelector('[href*="maxresdefault"]').getAttribute('href')) || (document.querySelector('[content*="maxresdefault"]') && document.querySelector('[content*="maxresdefault"]').getAttribute('content')),
                ads = [
                    'ad3_module',
                    'ad_module',
                    'ad_tag',
                    'afv',
                    'aftv',
                    'invideo',
                    'instream',
                    'trueview',
                    'ypc_vid'
                ],
                length = ads.length;
            function vidInfo(b) {
                var obj = {};
                b.split('&').forEach(function (c) {
                    obj[c.split('=')[0]] = decodeURIComponent(c.split('=')[1]);
                });
                a.args = obj;
                window.ytplayer.config.args = obj;
                argsCleaner(window.ytplayer.config);
            }
            if (a.args.ypc_module && !a.args.ypc_item_title) {
                get('/get_video_info?video_id=' + a.args.ypc_vid, vidInfo, 'GET');
                return;
            }
            if (a.args.video_id) {
                while (length) {
                    length -= 1;
                    delete a.args[ads[length]];
                }
                a.args.player_wide = '1';
                a.args.iv_load_policy = '3';
                a.args.vq = userSettings.VID_DFLT_QLTY;
                a.args.autoplay = (!userSettings.VID_PLR_ATPL && '0') || '1';
                a.args.theme = userSettings.VID_CTRL_BAR_CLR;
                a.args.color = userSettings.VID_PROG_BAR_CLR;
                a.html5 = html5Player;
                a.params.wmode = 'gpu';
                if (a.args.autoplay === '0') {
                    a.args['iurlmaxres' + base] = a.args['iurlmaxres' + base] || maxRes || false;
                    if (a.args['iurlmaxres' + base] === false || (a.args['iurlmaxres' + base] && a.args['iurlmaxres' + base].indexOf(a.args.video_id) === -1)) {
                        delete a.args['iurlmaxres' + base];
                        checkThumbnail(a, a.args['iurl' + base]);
                    } else if (a.args['iurlmaxres' + base]) {
                        a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base];
                    }
                }
                if (location.href.indexOf('/watch') !== -1 && window.ytplayer && window.ytplayer.config === null) {
                    window.ytplayer.config = a;
                }
            }
        }
        function playerReady(a) {
            function playerState(b) {
                if (window.movie_player) {
                    if (b === -1) {
                        if (!requestRunning && fullscreen) {
                            var sentinel = setInterval(function () {
                                var href = location.href,
                                    link = document.createElement('a'),
                                    id = api.getVideoData().video_id,
                                    list = api.getVideoData().list,
                                    index = api.getPlaylistIndex() + 1,
                                    idCheck = href.indexOf(id) !== -1,
                                    listCheck = (list && href.indexOf(list) !== -1) || href.indexOf(list) === -1;
                                function go(c) {
                                    link.className = 'spf-link';
                                    document.head.appendChild(link);
                                    link.href = c;
                                    link.click();
                                    link.remove();
                                }
                                if (href.indexOf(list) === -1 && list) {
                                    clearInterval(sentinel);
                                    document.querySelector('.spf-link[href*="list=' + list + '"]').click();
                                } else if (href.indexOf(id) === -1 && href.indexOf(list) !== -1) {
                                    clearInterval(sentinel);
                                    go('/watch?v=' + id + '&list=' + list + '&index=' + index);
                                } else if (href.indexOf(id) === -1 && !list) {
                                    clearInterval(sentinel);
                                    go('/watch?v=' + id);
                                } else if ((idCheck && listCheck) || !fullscreen) {
                                    clearInterval(sentinel);
                                }
                            }, 100);
                        }
                    } else if (b === 1) {
                        if (!html5Player && window.ytplayer.config.args.list && loaded !== window.ytplayer.config.args.video_id) {
                            loaded = window.ytplayer.config.args.video_id;
                            api.loadVideoByPlayerVars(window.ytplayer.config.args);
                        }
                    }
                }
            }
            function playerFullscreen(b) {
                fullscreen = b.fullscreen;
            }
            function fullscreenControl(b) {
                return function () {
                    if (!requestRunning) {
                        return b.apply(this, arguments);
                    }
                    return true;
                };
            }
            if (typeof a === 'object' && !document.getElementById('c4-player')) {
                if (!api) {
                    api = a;
                    api.addEventListener('onStateChange', playerState, false);
                    api.addEventListener('onFullscreenChange', playerFullscreen, false);
                }
                if (!userSettings.VID_PLR_ATPL) {
                    if (document.getElementsByTagName('video')[0]) {
                        document.getElementsByTagName('video')[0].removeAttribute('src');
                    }
                    argsCleaner(window.ytplayer.config);
                    api.cueVideoByPlayerVars(window.ytplayer.config.args);
                }
                if (html5Player) {
                    api.setPlaybackQuality(userSettings.VID_DFLT_QLTY);
                    document.mozCancelFullScreen = fullscreenControl(document.mozCancelFullScreen);
                }
            }
        }
        function general() {
            var sidebar = document.getElementsByClassName('branded-page-v2-secondary-col')[0];
            if (sidebar && sidebar.getElementsByTagName('div').length < 5) {
                sidebar.remove();
            }
        }
        function scriptEntry(a) {
            var ytConfig;
            if (a.target.textContent.indexOf('var ytplayer = ytplayer') !== -1) {
                a.preventDefault();
                a.stopPropagation();
                if (location.href.indexOf('/watch') !== -1) {
                    ytConfig = a.target.textContent.match(/ytplayer\.config = \{([\w\W]*?)\};/)[1];
                    window.ytplayer = window.ytplayer || {};
                    window.ytplayer.config = JSON.parse('{' + ytConfig + '}');
                    argsCleaner(window.ytplayer.config);
                    a.target.remove();
                }
            } else if (a.target.textContent.indexOf('ytspf.enabled = false') !== -1) {
                a.preventDefault();
                a.stopPropagation();
                window.ytspf = {
                    enabled: true,
                    config: {
                        'cache-max': 50,
                        'navigate-limit': 20,
                        'navigate-lifetime': 64800000,
                        'reload-identifier': 'spfreload'
                    }
                };
            }
        }
        function scriptExit(a) {
            function baseDetour(b) {
                return function () {
                    b.apply(this, arguments);
                    [
                        'ADS_DATA',
                        'CONVERSION_CONFIG_DICT',
                        'PYV_IFRAME_CONTENT',
                        'PYV_IFRAME_ID',
                        'DELAYED_EMBED',
                        'TIMING_ACTION',
                        'TIMING_INFO',
                        'SHARE_ON_VIDEO_END',
                        'UNIVERSAL_HOVERCARDS'
                    ].forEach(function (c) {
                        delete window.yt.config_[c];
                    });
                };
            }
            function embedDetour(b) {
                return function () {
                    var args = arguments;
                    argsCleaner(args[1]);
                    if (args[0].id === 'upsell-video') {
                        return b.apply(this, args);
                    }
                    b.apply(this, args);
                    if (html5Player && api) {
                        api.setPlaybackQuality(userSettings.VID_DFLT_QLTY);
                    }
                };
            }
            function autoplayDetour(b) {
                return function () {
                    var args = arguments;
                    if (!args[1] || playlistAutoPlay !== 'false' || (playlistAutoPlay === 'false' && args[1].feature && args[1].feature !== 'autoplay')) {
                        b.apply(this, arguments);
                    }
                };
            }
            function html5Detour(b) {
                return function () {
                    var i,
                        j,
                        pi,
                        args = arguments;
                    function html5Pointers(c, d) {
                        return function () {
                            var player,
                                canvas,
                                changed = c.apply(this, arguments);
                            if (changed.width && changed.height) {
                                player = document.getElementById('movie_player');
                                canvas = document.getElementsByClassName('html5-video-container')[0];
                                changed.width = (d && player.offsetWidth) || canvas.offsetWidth;
                                changed.height = (d && player.offsetHeight) || canvas.offsetHeight;
                            }
                            return changed;
                        };
                    }
                    if (args[0].id === 'upsell-video') {
                        b.apply(this, arguments);
                    } else if (typeof args[0] === 'object') {
                        pi = b.apply(this, arguments);
                        for (i in pi) {
                            if (typeof pi[i] === 'object' && pi[i] && pi[i].element) {
                                for (j in pi[i]) {
                                    if (typeof pi[i][j] === 'function' && (pi[i][j] + String()).indexOf('"detailpage"!=') !== -1) {
                                        if ((pi[i][j] + String()).indexOf('!0)') !== -1) {
                                            pi[i][j] = html5Pointers(pi[i][j], '');
                                        } else if ((pi[i][j] + String()).indexOf('!0)') === -1) {
                                            pi[i][j] = html5Pointers(pi[i][j]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            }
            function html5Fix(b) {
                return function () {
                    var changed = b.apply(this, arguments);
                    if (changed && changed.autoPlay && !fullscreen) {
                        changed.autoPlay = false;
                    }
                    return changed;
                };
            }
            if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'www/base') {
                window.yt.setConfig = baseDetour(window.yt.setConfig);
                Object.keys(window._yt_www).some(function (b) {
                    if (typeof window._yt_www[b] === 'function') {
                        if ((window._yt_www[b] + String()).indexOf('player-added') !== -1) {
                            window._yt_www[b] = embedDetour(window._yt_www[b]);
                        } else if ((window._yt_www[b] + String()).indexOf('window.spf.navigate') !== -1) {
                            window._yt_www[b] = autoplayDetour(window._yt_www[b]);
                        }
                    }
                });
            } else if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'html5player/html5player') {
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            } else if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'www/watch') {
                window.yt.www.watch.lists.getState = html5Fix(window.yt.www.watch.lists.getState);
                window.yt.www.watch.ads = function () {
                    return;
                };
            }
        }
        function title() {
            var observer,
                config = {childList: true},
                titleElement = document.getElementsByTagName('title')[0],
                titleStatus = titleElement.id;
            if (titleStatus === '') {
                titleElement.id = 'observing';
                observer = new window.MutationObserver(title);
                observer.observe(titleElement, config);
            } else if (titleStatus === 'observing' && location.href.indexOf('/watch') !== -1 && titleElement.textContent.indexOf('▶') !== -1 && !(api && api.getPlayerState && '0123'.indexOf(api.getPlayerState()) !== -1)) {
                titleElement.textContent = titleElement.textContent.replace('▶ ', '');
            }
        }
        function insertButton() {
            var spanIcon,
                navControls,
                playlistBar,
                button = document.getElementById('Autoplay');
            function autoplayButton(a) {
                a = (window.chrome && a.target.parentNode) || a.target;
                a.classList.toggle('yt-uix-button-toggled');
                window.localStorage.playlistAutoplay = playlistAutoPlay = (playlistAutoPlay === 'true' && 'false') || 'true';
            }
            if (location.href.indexOf('list=') !== -1 && !button) {
                window.localStorage.playlistAutoplay = window.localStorage.playlistAutoplay || playlistAutoPlay;
                playlistBar = document.getElementById('watch-appbar-playlist');
                navControls = document.getElementsByClassName('playlist-nav-controls')[0];
                button = document.createElement('button');
                button.id = 'Autoplay';
                button.title = 'Autoplay';
                button.type = 'button';
                button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon autoplay-playlist yt-uix-button-opacity yt-uix-tooltip' + ((playlistAutoPlay === 'true' && ' yt-uix-button-toggled') || '');
                button.setAttribute('data-tooltip-text', 'Autoplay');
                spanIcon = document.createElement('span');
                spanIcon.className = 'yt-uix-button-icon yt-uix-button-icon-watch-appbar-autoplay-video-list';
                button.appendChild(spanIcon);
                navControls.appendChild(button);
                button.addEventListener('click', autoplayButton);
                playlistBar.className = playlistBar.className.replace('radio-playlist', '');
            }
        }
        function htmlGate() {
            if (fullscreen && window.ytplayer.config) {
                if (!html5Player && location.href.indexOf('list=') !== -1) {
                    var sentinel = setInterval(function () {
                        if (window.yt.config_.ERRORS) {
                            clearInterval(sentinel);
                            api.loadVideoByPlayerVars(window.ytplayer.config.args);
                        }
                    }, 100);
                } else {
                    api.loadVideoByPlayerVars(window.ytplayer.config.args);
                }
            }
            settingsMenu();
            requestRunning = false;
            insertButton();
            wide();
            title();
            general();
            username();
        }
        function request(a) {
            var videoBefore = a.detail.previous.indexOf('/watch?') === -1,
                videoAfter = a.detail.url.indexOf('/watch?') !== -1,
                listBefore = a.detail.previous.indexOf('list=') !== -1,
                listAfter = a.detail.url.indexOf('list=') !== -1,
                player = document.getElementById('movie_player');
            if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
                if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                    delete window.ytplayer.config.loaded;
                }
                player.remove();
            }
            requestRunning = true;
        }
        window.onYouTubePlayerReady = playerReady;
        window.addEventListener('readystatechange', htmlGate, true);
        window.addEventListener('spfrequest', request);
        window.addEventListener('spfdone', htmlGate);
        window.addEventListener('beforescriptexecute', scriptEntry);
        if (window.chrome) {
            document.documentElement.addEventListener('load', scriptExit, true);
        } else {
            window.addEventListener('afterscriptexecute', scriptExit);
        }
    };
    injector = function (a, b) {
        var injection = document.createElement(b);
        document.head.appendChild(injection);
        injection.textContent = a;
    };
    injector('(' + core + ')()', 'script');
    injector(styleSheet, 'style');
}());
