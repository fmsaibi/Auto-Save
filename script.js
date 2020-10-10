/*-------------General Note-------------*
*This script written with Scriptable and it is intended to be used with Siri Shortcuts.
*To run this script you will need to downlaod Scriptable & Siri Shortcuts on you iOS
*/
/*
*Get Input text from Shortcuts app
*Follow Exmple below on how the text should be Written 
*local and cloud should be in small letters following by :
*Folder Path are case senstive
*Folder Path Should start with / and end with / 
*Exmaple 1 local:/Photos/Events/
*Exmaple 2 cloud:/Photos/Events/
*/
const inputText = args.plainTexts

//Get Input File from Shortcuts app 
const inputFile = args.fileURLs

//variables values created from Bookmark
//the Values should be same as written in the Scriptable bookmark
const local = "Local Drive"
const cloud = "iCloud Drive"

//Check if the Input received from Shortcuts exist or not
if (inputFile != "" && inputText !=""){
		
	const split = inputText[0].split(':');
		
	const storageType = split[0];
		
    const folderURL = split[1];

	if (storageType == 'local'){
		const fm = FileManager.local()
		const bm = fm.bookmarkedPath(local);
		saveFile(fm, bm, folderURL, inputFile)
		
	} else if (storageType == 'cloud'){
		const fm = FileManager.iCloud()
		const bm = fm.bookmarkedPath(cloud)
		saveFile(fm, bm, folderURL, inputFile)
	} else {
		
		Script.setShortcutOutput("Invalid input")
	}

} else {
	
	Script.setShortcutOutput("no valid File or Text")
}


//*-------------Save FIle to the Specified Folder-------------*

function saveFile(filemanager, bookmark, folder, files){
    
    //Create folder if not exisit 
	filemanager.createDirectory(bookmark + folder, true);
	//Getting the Name of the file which received from Shortcuts input
	const filename = files[0].substring(files[0].lastIndexOf('/')+1);
	//Create Address of the file to be saved
	const path = bookmark + folder + filename;
	//Converting to file URL to data so that file manager can read it
	const content = Data.fromFile(files[0])
	
	try {
		// Saving the file
		filemanager.write(path, content)
		Script.setShortcutOutput("Saved")
		
	} catch(err) {
		
		Script.setShortcutOutput("Error: Could not save")
		
	}
}

//*-------------End of the Script-------------*
Script.complete();
