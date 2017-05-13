declare var chrome: any, require: any;
declare enum ContextType {
    Background = 0,
    OnPageLoad = 1,
    Popup = 2,
}
declare let context: ContextType;
