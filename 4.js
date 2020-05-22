
var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
console.log('AEST time: '+ (new Date(aestTime)).toISOString())

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
console.log('Asia time: '+ (new Date(asiaTime)).toISOString())

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
console.log('USA time: '+ (new Date(usaTime)).toISOString())

var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
console.log('India time: '+ (new Date(indiaTime)).toISOString())