initSidebarItems({"enum":[["ResponseError","An error returned a portal request caused by either the user cancelling the request or something else."]],"mod":[["account","Request access to the current logged user information such as the id, name or their avatar uri."],["background","Request running an application in the background. Note this portal only works for sandboxed applications."],["camera","Check if a camera is available, request access to it and open a PipeWire remote stream."],["device","Request access to specific devices such as camera, speakers or microphone. Note this portal doesn’t work for sandboxed applications."],["email","Compose an email."],["file_chooser","Open/save file(s) chooser."],["game_mode","Enable/disable/query the status of Game Mode."],["inhibit","Inhibit the session from being restarted or the user from logging out."],["location","Query the user’s GPS location."],["memory_monitor","Monitor memory level."],["network_monitor","Check the status of the network on a user’s machine. Note this portal doesn’t work for sandboxed applications."],["notification","Send/withdraw notifications."],["open_uri","Open a file or a directory."],["print","Print a document."],["remote_desktop","Start a remote desktop session and interact with it."],["screencast","Start a screencast session and get the PipeWire remote of it."],["screenshot","Take a screenshot or pick a color."],["secret","Retrieve a per-application secret used to encrypt confidential data inside the sandbox."],["settings","Read & listen to system settings changes."],["trash","Move a file to the trash."],["wallpaper","Set a wallpaper on lockscreen, background or both."]],"struct":[["SessionProxy","The Session interface is shared by all portal interfaces that involve long lived sessions. When a method that creates a session is called, if successful, the reply will include a session handle (i.e. object path) for a Session object, which will stay alive for the duration of the session."]]});