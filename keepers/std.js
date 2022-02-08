//  A collection of missing or under whelming js functions that I always want available.



let gMine = function() {
    let util = {};
    let uiBase = {};

    // Creates an array of unique values from a single dimension of an array.
    util.getUnique =  (d) => { 
        //TODO: address data type conversion issue. (introspect original value and cast return object.)
        return Object.keys(d.reduce((obj,e) => {obj[e] = true; return obj;},{}));
    }


    uiBase.init = (opts) => {
        const get = function (data) { 
            let collection = [];  
            let queryResult = document.querySelectorAll("[data-"+data+"]");
            collection = queryResult.forEach(el=>{return el;});  
            return collection; 
        };
        const interface = {'source': get('source'), 'action': get('action') };
        return interface;
    }

    return { 
        'functions': {
            "getUnique" : util.getUnique(),
            "getUi"     : uiBase.init(),
        }
    }
};