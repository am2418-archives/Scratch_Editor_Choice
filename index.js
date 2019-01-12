function getAndDownload(id) {
var v = getVersionOf(id);
download(getProject(id),"Scratch_Project."+v);
return v;
}
var versionFileExtension = "";
function startup() {
if(location.hash.length>1) {
versionFileExtension = getAndDownload(location.hash.slice(1));
}
}
