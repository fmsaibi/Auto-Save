# *Auto-Save*

How Automate save file outside Shortcuts Folder
Have you ever wanted to save file in specific location without manually selecting and navigating to the desire folder, then you came to the right place. 
I been working on script using Scriptable to automate save file outside shortcuts app.
Here I will take you through step by steps on how to configure it and get it up running.

### Step 1 – Download Scriptable:
Download app called scriptable at app store, and if you already have it then skip to step 2.

### Step 2 - Adding Bookmarks:
1.	Open your scriptable app, click on button located at top left which has gear icon
2.	Scroll Down and tap on File Bookmarks
3.	In File Bookmarks page you will have to create two bookmarks, one for “iCloud Drive” and other is for “On My iPhone”
4.	To create the book mark click on the plus sign at the top right corner, then chose Pick Folder
5.	Select “iCloud Drive” then click done, you will be promoted to choose name… type ‘’iCloud Drive’’ without quotes.
6.	Create smiler for ‘’On My iPhone’’ and Type name as “Local Drive” without quotes
7.	Once you complete you can go back to the scriptable home screen.

### Step 3 - Adding Script:
1.	On Scriptable Home Page click on the plus button at the top right coroner
2.	Then add the following Script:
3.	Save the Script as Auto Save.

### Step 4 - Run it On Siri Shortcuts:
1.	Open your Shortcuts project the one you want to save file in specific location 
2.	Click on add Action > Apps > Scriptable > Run Script ( Now Run Script it will be added in the Action)
3.	Tap on Script next to Run and Chose Auto Save
4.	In The Parameter section leave it blank then Tap on the Show More.
5.	Under Texts type the following “local:” for local Drive or “Cloud:” for iCloud Drive following the Path where you want to save. See Example Below.

⋅⋅* Example 1: local:/Photos/Events/

⋅⋅* Example 2: cloud:/Photos/Events/

6.	In Files section tap on chose select Magic Variable of the action which returns file(Image, PDF, MP3….etc)
7.	Finally in the Show When Run tap on the green button to switch it off. 

### Step 5:
Run the Application and Enjoy it.


