/**
 * @class Ext.ux.exporter.Button
 * @extends Ext.Button
 * @author Nige White, with modifications from Ed Spencer
 * Specialised Button class that allows downloading of data via data: urls.
 * Internally, this is just a link.
 * Pass it either an Ext.Component subclass with a 'store' property, or just a store:
 * new Ext.ux.exporter.Button({component: someGrid});
 * new Ext.ux.exporter.Button({store: someStore});
 * @cfg {Ext.Component} component The component the store is bound to
 * @cfg {Ext.data.Store} store The store to export (alternatively, pass a component with a store property)
 */
Ext.define('Ext.ux.exporter.Button', { 
  extend: 'Ext.Button',
  alias: "widget.exportButton",
  config: {
      text          : 'Download',
      cls           : 'download',
      component     : null
  },
  
  constructor: function(config) {
      config = config || {};

      this.initConfig();
      Ext.ux.exporter.Button.superclass.constructor.call(this, config);
      
      var self = this;
      this.on("afterrender", function() { // We wait for the combo to be rendered, so we can look up to grab the component containing it
                    
      });
      
      this.on('click', function() {
          var c = self.component ? self.component : self.up("gridpanel");
          
          var exporter = Ext.create('Ext.ux.exporter.Exporter');           
          var url = 'data:application/vnd.ms-excel;base64,' + exporter.exportGrid(c);
            
          window.location.href = url;
      });
  }
});

