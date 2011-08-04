<?sjs

var dir = pow_file_get_handle(pow_file_get_docs_dir());
var path = dir.path;
if(pow_server.REMOTE_HOST != "localhost" && pow_server.REMOTE_HOST != "127.0.0.1") {
	path = "access_denied";
}
document.writeln("The webserver files are located in <br>\n");
document.writeln(path+"<br><br>");
path = path.replace(/ /g, "%20");
document.writeln("In Max OSX and Windows, <b>drag this to your desktop</b>.<br>");
document.writeln("In Linux, bookmark this link or create a shortcut.<br>");
document.writeln("<a href='file://"+path+"/'>POW Files</a>");

?>
