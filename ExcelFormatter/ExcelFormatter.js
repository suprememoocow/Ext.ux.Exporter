/**
 * @class Ext.ux.exporter.ExcelFormatter
 * @extends Ext.ux.exporter.Formatter
 * Specialised Format class for outputting .xls files
 */
Ext.define('Ext.ux.exporter.ExcelFormatter.ExcelFormatter', {  
  extend: 'Ext.ux.exporter.Formatter',
  
  format: function(store, config) {
    var workbook = Ext.create('Ext.ux.exporter.ExcelFormatter.Workbook', config);
    workbook.addWorksheet(store, config || {});
    
    return workbook.render();
  }

});
