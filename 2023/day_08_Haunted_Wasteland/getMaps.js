module.exports =  function(node_lines) {
    
    let result = {};

    for (const node_line of node_lines) {
        node_key = node_line.split('=')[0].trim();
        node_left = node_line.split('=')[1].trim().split(',')[0].trim().slice(1);
        node_right = node_line.split('=')[1].trim().split(',')[1].trim().slice(0,-1);
        result[node_key] = {'left' : node_left , 'right'  : node_right };
    }


/*
    node_key = node_lines[0].split('=')[0].trim();
    node_left = node_lines[0].split('=')[1].trim().split(',')[0].trim().slice(1);
    node_right = node_lines[0].split('=')[1].trim().split(',')[1].trim().slice(0,-1);
    console.log(node_key,node_right);

    result['LRL'] = {'left':'MCG','right':'TRC'};
    result['TNJ'] = {'left':'LMV','right':'PMP'};
    
 */ 
    return result ;
    
}