<?sjs
	var head = get_pow_header("Welcome to POW");
	document.write(head);
?>
<center><h2>Welcome to POW</h2></center>
<p>
Your webserver is now working. See the help page for more information.
</p>

<?sjs

var dir = pow_file_get_handle(pow_file_get_docs_dir());
var path = dir.path;
if(pow_server.REMOTE_HOST != "localhost" && pow_server.REMOTE_HOST != "127.0.0.1") {
	path = "access_denied";
}
path = path.replace(/ /g, "%20");
document.writeln("In Mac OSX and Windows, <b>drag the 'POW Files' link to your desktop</b>.<br>");
document.writeln("In Linux, bookmark this link or create a shortcut. <br>");
document.writeln("Drag this: <a href='file://"+path+"/'>POW Files</a>");

?>

</body>
</html>
