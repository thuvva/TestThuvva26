let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
    var materials = [
  'Thuvva',
  'Hiru',
  'Upulie',
  'Nuwanthi'
];


console.log(materials.map(material => material.length));

}