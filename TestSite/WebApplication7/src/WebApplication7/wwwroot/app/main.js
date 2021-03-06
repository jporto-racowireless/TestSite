System.register(['angular2/platform/browser', './app.component', './ToDoService'], function(exports_1) {
    var browser_1, app_component_1, ToDoService_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (ToDoService_1_1) {
                ToDoService_1 = ToDoService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [ToDoService_1.ToDoService]);
        }
    }
});
