/*
 * #%L
 * Cleia
 * %%
 * Copyright (C) 2013 Katsu
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the 
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public 
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.require([
    'Ext.window.MessageBox'
])

Ext.onReady(function() {

    function principal() {
        Ext.MessageBox.show({
            title: Katsu.i18n.Bundle.bundle.getMsg('error.title'),
            msg: Katsu.i18n.Bundle.bundle.getMsg('error.msg'),
            //  buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.MessageBox.ERROR,
            closable: false
        });
    }

    Katsu.i18n.Bundle.bundle.on('loaded', function() {
        principal();
    });
    Katsu.i18n.Bundle.bundle.on('error', function() {
        Katsu.i18n.Bundle.bundle.language = Katsu.i18n.Bundle.bundle.defaultLanguage;
        Katsu.i18n.Bundle.bundle.load();
    });
    Katsu.i18n.Bundle.bundle.load();
});