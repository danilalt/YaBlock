// ==UserScript==
// @name         Яндекс Почта — скрытие рекламы
// @namespace    local.yandex-mail-no-ads
// @version      1.3.0
// @description  Скрывает верхний рекламный баннер и правую рекламную колонку в Яндекс Почте.
// @match        https://mail.yandex.ru/*
// @run-at       document-idle
// @noframes
// @grant        GM_addStyle
// ==/UserScript==

(() => {
    'use strict';

    GM_addStyle(`
        /* Верхний баннер */
        [data-testid="content-header_container"]
        > .message-list-banner-portal + div[class$="-portal"] {
            display: none !important;
        }

        /* Правая рекламная колонка */
        div[style*="--rc-adaptive-width"]:has(> .js-no-suggest-hotkey > div[id]) {
            display: none !important;
        }
    `);
})();
