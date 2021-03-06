/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.katsu.hibernate.dialect;

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

/**
 *
 * @author mmartin
 */
public class Oracle10gDialect extends org.hibernate.dialect.Oracle10gDialect{

    private static final String FK="FK";
    private static int MAX_LENGTH=30;
    
    @Override
    public String getAddForeignKeyConstraintString(String constraintName, String[] foreignKey, String referencedTable, String[] primaryKey, boolean referencesPrimaryKey) {
        StringBuilder sb=new StringBuilder(constraintName);
        sb=sb.delete(0,FK.length());
        sb=sb.delete(0,(sb.length()-(MAX_LENGTH-FK.length())>=0)?sb.length()-(MAX_LENGTH-FK.length()):0);
        sb=sb.insert(0, FK);
        return super.getAddForeignKeyConstraintString(sb.toString(), foreignKey, referencedTable, primaryKey, referencesPrimaryKey);
    }    
    
}
