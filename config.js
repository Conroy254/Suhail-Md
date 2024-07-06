const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0Q2cmVLYTZjVndaWFNCMUdxd1BQVjBjUHhEYVhoanFzUW1nNUJJWC9hdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMDU5MTQ5NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODQyNTVCRTNGRjkxNzQxQkQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI2MTEyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxUmVwZmVraFNLYWF5SUZNOW9leUNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzYmVlMzk3LTk1OTctNDRjMS05MmJiLTRjYjNlOGYyYjNmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICA4LFxuICAgICAgMjEsXG4gICAgICAxMzgsXG4gICAgICAxMTEsXG4gICAgICAyNTMsXG4gICAgICA3NCxcbiAgICAgIDU0LFxuICAgICAgMixcbiAgICAgIDE3NyxcbiAgICAgIDE1MCxcbiAgICAgIDE1OCxcbiAgICAgIDIwOCxcbiAgICAgIDE1NyxcbiAgICAgIDg2LFxuICAgICAgMTQ4LFxuICAgICAgMTEyLFxuICAgICAgMTUzLFxuICAgICAgODUsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgNzksXG4gICAgICAxNTEsXG4gICAgICAxNDMsXG4gICAgICAxOTksXG4gICAgICA1MCxcbiAgICAgIDU4LFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDg5LFxuICAgICAgMTQ5LFxuICAgICAgMjMwLFxuICAgICAgMTQxLFxuICAgICAgNjgsXG4gICAgICA3NyxcbiAgICAgIDI1NSxcbiAgICAgIDE3LFxuICAgICAgNDMsXG4gICAgICAxNDEsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjVYWlJZOUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwNTkxNDk0OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpva2VyXCIsXG4gICAgXCJsaWRcIjogXCI3NzgwMzczNTI2OTM4ODoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaVh3cDhGRVBtenBMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJoUGF1OTAxVnBQMnRjemhXQm9tUGpXWE5rd2xvSTU2LzhjclZ5VXM1aEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjdPOUw1cXVkOE5JZXNtR3RweTZlMW5zcDIxd2g5MFB6eGlCd0ZhR3NtV1FUQmMzZjRja2ZCMzM4eTJVNGxDeUhvOWZZQVFNSlUyR3NCU3Q4UXBlaUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWx3dVcwTzJVeHU4YkNwZk1PSUhHY2FoaUFEQ0hJKzAyQUJFZXNRL0x2MjNac3UzeEpxTmJBeGxlbm52SDZLZks5M0h0aDR4cFZFRWMwalJQeFBuQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTA1OTE0OTQ5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2MTExNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhKR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEpHLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWxyQ0h0b0tkQkw5NmVOWDV4VzhGV2xyWU9INlI1VTZiUDNEUllxOTN6ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA4MjczNDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMDQ5NDM2NzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
