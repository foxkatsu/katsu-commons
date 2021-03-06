/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.katsu.json.serializer;

/*
 * #%L
 * Katsu Commons
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

import com.katsu.extjs.grid.mapping.MappedDataGrid;
import java.io.IOException;
import java.io.Writer;
import java.util.Properties;

/**
 * Serializador Json<br/>
 * Usado para objectos {@link MappedDataGrid} solo se serializan los valores del
 * objeto que queremos mapear
 * @author katsu
 */
class MappedDataGridSerializer implements Serializer{

    @Override
    public void parse(Object obj,Properties properties,Writer writer) throws IOException{        
        MappedDataGrid mappedDataGrid=(MappedDataGrid)obj;
        SerializerFactory.getSerializer(mappedDataGrid.getValues()).parse(mappedDataGrid.getValues(),properties,writer);
    }

}
