# How automate save file outside Shortcuts Folder

Siri Shortcuts restricted you to automatically save any file in any folder of your desire. The app can only automatically save in the shortcuts cloud folder, but In case you want to save on different folders, you have to activate “Ask Where to Save” 

 ![GitHub Logo](/Images/Ask.GIF)

Now each time you run automation it will ask you where to save the file. The problem with this method it ruins the idea of automation, and for that reason, I started to write a script that will allow us to save any file in any location we desire(Cloud or On My IPhone).

I will be happy to take you through step by step on how to configure it and get it up running.

### Step 1 – Download Scriptable:
Download app called scriptable at app store, and if you already have it then skip to step 2.

### Step 2 - Adding Bookmarks:
1.	Open your scriptable app, click on button located at top left which has gear icon
2.	Scroll Down and tap on File Bookmarks
3.	In File Bookmarks page you will have to create two bookmarks, one for “iCloud Drive” and other is for “On My iPhone”
4.	To create the bookmark click on the plus sign at the top right corner, then chose Pick Folder
5.	Select “iCloud Drive” then click done, you will be promoted to choose name… type ‘’iCloud Drive’’ without quotes.

![GitHub Logo](/Images/Storage.png)

6.	Create smiler for ‘’On My iPhone’’ and Type name as “Local Drive” without quotes.

![GitHub Logo](/Images/Bookmark.png)

7.	Once you complete you can go back to the scriptable home screen.

### Step 3 - Adding Script:
1.	On Scriptable Home Page click on the plus button at the top right coroner.
2.	Then add the following [Script](https://github.com/fmsaibi/Auto-Save/blob/main/script.js)
3.	Save the Script as Auto Save.

### Step 4 - Run it On Siri Shortcuts:
1.	Open your Shortcuts project the one you want to save file in specific location .
2.	Click on add Action > Apps > Scriptable and chose Run Script ( Now Run Script it will be added in the Action).
3.	Tap on Script next to Run and Chose Auto Save.
4.	In The Parameter section leave it blank then Tap on the Show More.
5.	Under Texts type the following “local:” for local Drive or “Cloud:” for iCloud Drive following the Path where you want to save. See Example Below.
    - Example 1: local:/Photos/Events/
    - Example 2: cloud:/Photos/Events/
6.	In Files section tap on chose select Magic Variable of the action which returns file(Image, PDF, MP3….etc).
7.	Finally switch off Show When Run.

![GitHub Logo](/Images/How.jpg)

### Step 5:
Run the Application and Enjoy it.

![GitHub Logo](/Images/Saving.gif)


