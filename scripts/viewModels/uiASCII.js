

var UIASCII = (function(){
    var vm = function(){
        var self = this;

        var widgets = [];

        self.addWidget = function(widget){
            if(!(widget instanceof Widget.Base))
                throw "addWidget must take a Widget";
            widgets.push(widget);
            return widget;
        };

        self.render = function(){
            var str = '';
            widgets.foreach(function(w){
                var rows = w.render();
                rows.foreach(function(line){
                    str+=line+'\r\n';
                });
            });
            return str;
        };

    };
    return vm;
})();