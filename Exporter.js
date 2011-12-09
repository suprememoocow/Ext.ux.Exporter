/**
 * @class Ext.ux.exporter
 * @author Ed Spencer (http://edspencer.net)
 * Class providing a common way of downloading data in .xls or .csv format
 */
Ext.define('Ext.ux.exporter.Exporter', {
    requires: ["Ext.ux.exporter.ExcelFormatter.Cell", 
               "Ext.ux.exporter.ExcelFormatter.ExcelFormatter", 
               "Ext.ux.exporter.ExcelFormatter.Style", 
               "Ext.ux.exporter.ExcelFormatter.Workbook",
               "Ext.ux.exporter.ExcelFormatter.Worksheet",
               "Ext.ux.exporter.Base64"],
               
    /*
     * Exports a grid, using the .xls formatter by default
     * @param {Ext.grid.GridPanel} grid The grid to export from
     * @param {Object} config Optional config settings for the formatter
     */
    exportGrid: function(grid, formatter, config) {
      config = config || {};
      formatter = formatter || Ext.create('Ext.ux.exporter.ExcelFormatter.ExcelFormatter');
      
      Ext.applyIf(config, {
        title  : grid.title,
        columns: grid.columns
      });
      
      return Ext.ux.exporter.Base64.encode(formatter.format(grid.store, config));
    },
    
    exportStore: function(store, formatter, config) {
       config = config || {};
       formatter = formatter || Ext.create('Ext.ux.exporter.ExcelFormatter.ExcelFormatter');

       Ext.applyIf(config, {
         columns: config.store.fields.items
       });
       
       return Ext.ux.exporter.Base64.encode(formatter.format(store, config));
    },
    
    exportTree: function(tree, formatter, config) {
      config    = config || {};
      formatter = formatter || Ext.create('Ext.ux.exporter.ExcelFormatter.ExcelFormatter');
      
      var store = tree.store || config.store;

      Ext.applyIf(config, {
        title: tree.title
      });
      
      return Ext.ux.exporter.Base64.encode(formatter.format(store, config));
    }
});