function getVersion(data) {
var d = data;
try {
d=JSON.parse(d);
}
if (typeof(d)=="object") {
if (targets in d) {
return sb3;
}
if (objName in d) {
return sb2;
}
} else {
return "sb"
}
}
