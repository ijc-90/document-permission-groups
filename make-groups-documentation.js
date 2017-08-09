var fs = require('fs');
var groups = require('./groups');
var highlighterBeginning = '<mark>';
var highlighterEnd = '</mark>';
var fileToHighlight = './functionalities.html';
var fileExtension = '.html';


fs.readFile(fileToHighlight, 'utf8', function (err,data) {
  if (err) {
    console.log("error reading functionalities file");
    return console.log(err);
  }
  
  var functionalities = "";

  groups.forEach(function (group) {

    functionalities = data;
    // console.log(group);
    
    for( var permission in group.permissions){
        // console.log(permission);
        var regexp = new RegExp(permission, "ig");
        var newValue = highlighterBeginning + permission + highlighterEnd;

        functionalities = functionalities.replace(regexp, newValue);

    }
    // group.permissions.forEach(function (permission){
    //     console.log(permission);
    //     var regexp = new RegExp(permission, "ig");
    //     var newValue = highlighterBeginning + permission + highlighterEnd;

    //     functionalities = functionalities.replace(regexp, newValue);
    // });
    
    
    fs.writeFile("./groupsDocumentation/"+group.name+fileExtension, functionalities, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
});

});



