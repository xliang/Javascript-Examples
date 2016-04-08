var data = '{"customer_billing":[{"billingCycleId":"010","device_number":"416-222-5555","device_usage":[{"product_service":[{"product_name":"voice","features":[{"feature_name":"All Calls","total_allocation":250,"total_usage":274,"unit_of_measurement":"min","total_overage_cost":2,"next_best_action":"best action"},{"feature_name":"local_minutes_included","total_allocation":250,"total_usage":274,"unit_of_measurement":"min","total_overage_cost":2,"next_best_action":"best action"},{"feature_name":"local_minutes_unlimited","total_allocation":550,"total_usage":200,"unit_of_measurement":"min","total_overage_cost":0,"next_best_action":"best action"},{"feature_name":"pay_per_use_voice","total_allocation":0,"total_usage":4,"unit_of_measurement":"min","total_overage_cost":23,"next_best_action":"best action"},{"feature_name":"pay_per_use_411_call","total_allocation":0,"total_usage":2,"unit_of_measurement":"min","total_overage_cost":2,"next_best_action":"best action"}]},{"product_name":"data","features":[]},{"product_name":"text","features":[]}]}]}]}'; 

//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}
 
//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}
 
//return an array of keys that match on a certain value
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}

var js = JSON.parse(data);

var result_1 = getObjects(js,'device_number','416-222-5555');
// console.log(result_1[0]); 

var result_2 = getObjects(result_1, 'feature_name', 'local_minutes_included'); 

console.log(result_2); 