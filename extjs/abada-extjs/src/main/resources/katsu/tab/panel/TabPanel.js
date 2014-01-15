/*
 * #%L
 * Katsu ExtJs
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


/**
 * tab panel
 */
Ext.define('Katsu.tab.panel.TabPanel',{
    extend:'Ext.tab.Panel',
    /*
    constructor:function(config){
        this.initConfig(config);
        this.callParent([config]);
      
    },*/
   getIndexActiveTab:function(){
        actTab=this.getActiveTab();
        for (i=0;i<this.items.length;i++){
            aux=this.items.get(i);
            if (actTab==aux){
                return i;
            }
        }
        return -1;
    }
});


/*/* 

TabPanel=Ext.extend(Ext.TabPanel,{
    constructor:function(cfg){
        Ext.apply(this, cfg);
        TabPanel.superclass.constructor.call(this,cfg);
    },
    getIndexActiveTab:function(){
        actTab=this.getActiveTab();
        for (i=0;i<this.items.length;i++){
            aux=this.items.get(i);
            if (actTab==aux){
                return i;
            }
        }
        return -1;
    }
});


;*/