var fs = require('fs');
var groups = require('./groups');
var highlighterBeginning = '<mark>';
var highlighterEnd = '</mark>';
var fileToHighlight = './functionalities.html';
var fileExtension = '.html';

function openAndProcessFile(fileName, callback, encoding){
     encoding = encoding || 'utf8';
    return fs.readFile(fileName, encoding, callback);
}


function processFile(err,data){
  if (err) {
    console.log("error reading functionalities file");
    return console.log(err);
  }
  
  var functionalities = "";

  groups.forEach(function (group) {

    functionalities = data;

    functionalities = highlightFunctionalitiesWithGroupPermission(functionalities, group, highlighterBeginning, highlighterEnd);
    
    for( var permission in group.permissions){
        // Some permission from the database come in "-1". We would like to ignore them
        if (group.permissions[permission] > 0){
            var regexp = new RegExp (">"  + permission + "<" , "ig");
            var newValue = ">" + highlighterBeginning + permission + highlighterEnd + "<";

            functionalities = functionalities.replace(regexp, newValue);
        }

    }
    
    
    writeGroupToFile(group.name, fileExtension, functionalities);
});
}

function highlightFunctionalitiesWithGroupPermission(functionalities, group,highlighterBeginning, highlighterEnd){
    for( var permission in group.permissions){
        // Some permission from the database come in "-1". We would like to ignore them
        if (group.permissions[permission] > 0){
            var regexp = new RegExp(">" + permission + "<" , "ig");
            var newValue = ">" + highlighterBeginning + permission + highlighterEnd + "<";

            functionalities = functionalities.replace(regexp, newValue);
        }
    }
    return functionalities;
}

function writeGroupToFile(fileName, fileExtension, functionalities){
    fs.writeFile("./groupsDocumentation/"+fileName+fileExtension, functionalities, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

openAndProcessFile(fileToHighlight, processFile);



