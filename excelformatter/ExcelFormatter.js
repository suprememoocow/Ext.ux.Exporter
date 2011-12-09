/**
 * @class Ext.ux.exporter.excelformatter
 * @extends Ext.ux.exporter.Formatter
 * Specialised Format class for outputting .xls files
 */
Ext.define('Ext.ux.exporter.excelformatter.ExcelFormatter', {  
  extend: 'Ext.ux.exporter.Formatter',
  
  format: function(store, config) {
    var workbook = Ext.create('Ext.ux.exporter.excelformatter.Workbook', config);
    workbook.addWorksheet(store, config || {});
    
    return workbook.render();
  }

});
