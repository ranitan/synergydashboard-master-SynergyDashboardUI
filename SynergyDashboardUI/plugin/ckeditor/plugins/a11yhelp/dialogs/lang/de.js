﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.setLang("a11yhelp", "de", {
    title: "Barrierefreiheitinformationen",
    contents: "Hilfeinhalt. Um den Dialog zu schliessen die Taste ESC drücken.",
    legend: [{
        name: "Allgemein",
        items: [{
                name: "Editorwerkzeugleiste",
                legend: "Drücken Sie ${toolbarFocus} auf der Symbolleiste. Gehen Sie zur nächsten oder vorherigen Symbolleistengruppe mit TAB und SHIFT+TAB. Gehen Sie zur nächsten oder vorherigen Symbolleiste auf die Schaltfläche mit dem RECHTS- oder LINKS-Pfeil. Drücken Sie die Leertaste oder Eingabetaste, um die Schaltfläche in der Symbolleiste aktivieren."
            },
            {
                name: "Editordialog",
                legend: "Drücke innerhalb eines Dialogs TAB, um zum nächsten Element zu springen. Drücke SHIFT+TAB, um zum vorigen Element zu springen, drücke ENTER um das Formular im Dialog abzusenden, drücke ESC, um den Dialog zu schließen. Hat der Dialog mehrere Tabs, dann kannst du durch ALT+F10 die Tab-Liste aufrufen or mittels TAB als Teil der Dialog-Tab-Reihenfolge. Ist die Tab-Liste fokussiert, dann mithilfe der Pfeiltasten (LINKS und RECHTS) zwischen den Tabs gewechselt werden."
            }, {
                name: "Editor-Kontextmenü",
                legend: "Dürcken Sie ${contextMenu} oder die Anwendungstaste um das Kontextmenü zu öffnen. Man kann die Pfeiltasten zum Wechsel benutzen. Mit der Leertaste oder der Enter-Taste kann man den Menüpunkt aufrufen. Schliessen Sie das Kontextmenü mit der ESC-Taste."
            }, {
                name: "Editor-Listenbox",
                legend: "Innerhalb einer Listenbox kann man mit der TAB-Taste oder den Pfeilrunter-Taste den nächsten Menüeintrag wählen. Mit der SHIFT+TAB Tastenkombination oder der Pfeilhoch-Taste gelangt man zum vorherigen Menüpunkt. Mit der Leertaste oder Enter kann man den Menüpunkt auswählen. Drücken Sie ESC zum Verlassen des Menüs."
            },
            {
                name: "Editor-Elementpfadleiste",
                legend: "Drücken Sie ${elementsPathFocus} um sich durch die Pfadleiste zu bewegen. Um zum nächsten Element zu gelangen drücken Sie TAB oder die Pfeilrechts-Taste. Zum vorherigen Element gelangen Sie mit der SHIFT+TAB oder der Pfeillinks-Taste. Drücken Sie die Leertaste oder Enter um das Element auszuwählen."
            }
        ]
    }, {
        name: "Befehle",
        items: [{
                name: "Rückgängig-Befehl",
                legend: "Drücken Sie ${undo}"
            }, {
                name: "Wiederherstellen-Befehl",
                legend: "Drücken Sie ${redo}"
            }, {
                name: "Fettschrift-Befehl",
                legend: "Drücken Sie ${bold}"
            }, {
                name: "Kursiv-Befehl",
                legend: "Drücken Sie ${italic}"
            }, {
                name: "Unterstreichen-Befehl",
                legend: "Drücken Sie ${underline}"
            }, {
                name: "Link-Befehl",
                legend: "Drücken Sie ${link}"
            }, {
                name: "Werkzeugleiste einklappen-Befehl",
                legend: "Drücken Sie ${toolbarCollapse}"
            }, {
                name: "Zugang bisheriger Fokussierung Raumbefehl ",
                legend: "Drücken Sie ${accessPreviousSpace}  auf den am nächsten nicht erreichbar Fokus-Abstand vor die Einfügemarke zugreifen: zwei benachbarte HR-Elemente. Wiederholen Sie die Tastenkombination um entfernte Fokusräume zu erreichen. "
            },
            {
                name: "Zugang nächster Schwerpunkt Raumbefehl ",
                legend: "Drücken Sie $ { accessNextSpace }, um den nächsten unerreichbar Fokus Leerzeichen nach dem Cursor zum Beispiel auf: zwei benachbarten HR Elemente. Wiederholen Sie die Tastenkombination zum fernen Fokus Bereiche zu erreichen. "
            }, {
                name: "Eingabehilfen",
                legend: "Drücken Sie ${a11yHelp}"
            }, {
                name: "Einfügen als unformatierter Text. ",
                legend: "Drücke ${pastetext}",
                legendEdge: "Drücke ${pastetext} und anschließend ${paste}"
            }
        ]
    }],
    tab: "Tab",
    pause: "Pause",
    capslock: "Feststell",
    escape: "Escape",
    pageUp: "Bild auf",
    pageDown: "Bild ab",
    leftArrow: "Linke Pfeiltaste",
    upArrow: "Obere Pfeiltaste",
    rightArrow: "Rechte Pfeiltaste",
    downArrow: "Untere Pfeiltaste",
    insert: "Einfügen",
    leftWindowKey: "Linke Windowstaste",
    rightWindowKey: "Rechte Windowstaste",
    selectKey: "Taste auswählen",
    numpad0: "Ziffernblock 0",
    numpad1: "Ziffernblock 1",
    numpad2: "Ziffernblock 2",
    numpad3: "Ziffernblock 3",
    numpad4: "Ziffernblock 4",
    numpad5: "Ziffernblock 5",
    numpad6: "Ziffernblock 6",
    numpad7: "Ziffernblock 7",
    numpad8: "Ziffernblock 8",
    numpad9: "Ziffernblock 9",
    multiply: "Multiplizieren",
    add: "Addieren",
    subtract: "Subtrahieren",
    decimalPoint: "Punkt",
    divide: "Dividieren",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",
    numLock: "Ziffernblock feststellen",
    scrollLock: "Rollen",
    semiColon: "Semikolon",
    equalSign: "Gleichheitszeichen",
    comma: "Komma",
    dash: "Bindestrich",
    period: "Punkt",
    forwardSlash: "Schrägstrich",
    graveAccent: "Gravis",
    openBracket: "Öffnende eckige Klammer",
    backSlash: "Rückwärtsgewandter Schrägstrich",
    closeBracket: "Schließende eckige Klammer",
    singleQuote: "Einfaches Anführungszeichen"
});