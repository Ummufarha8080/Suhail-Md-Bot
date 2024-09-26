const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_54_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRaNSt3bUh1dHlFTW1kdWdySkp3VnRtbzdSNGdKcDhRUjVXbVpyaDFkSUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1SR1B1YnpEUTVleWc0T3VCRWNpamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWViODdjZjItNGY2Yy00NTI5LTljNDgtYmQwYjAxMjcwNjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDQsXG4gICAgICAxNDMsXG4gICAgICA2MCxcbiAgICAgIDM3LFxuICAgICAgMjE0LFxuICAgICAgMTkzLFxuICAgICAgNSxcbiAgICAgIDIwNCxcbiAgICAgIDc5LFxuICAgICAgMTcxLFxuICAgICAgMjEsXG4gICAgICA5NixcbiAgICAgIDIxMCxcbiAgICAgIDIzMixcbiAgICAgIDE4MixcbiAgICAgIDIyNCxcbiAgICAgIDEzNSxcbiAgICAgIDE5MyxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDIxLFxuICAgICAgMjExLFxuICAgICAgMTU5LFxuICAgICAgMjE0LFxuICAgICAgMjM0LFxuICAgICAgMjQ5LFxuICAgICAgMTczLFxuICAgICAgMjIzLFxuICAgICAgMjExLFxuICAgICAgMTIxLFxuICAgICAgMTgwLFxuICAgICAgMzEsXG4gICAgICAxODQsXG4gICAgICAxNzYsXG4gICAgICAyMjAsXG4gICAgICAyNSxcbiAgICAgIDIzOCxcbiAgICAgIDE3NyxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVNTjhLMkM3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY4NzIxNjQzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJVbXNhemNha2VzIEFuZCBNb3JlXCIsXG4gICAgXCJsaWRcIjogXCIzMzAwMjcxMzI5NzA5MDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05QSC9jWUVFT1A2MUxjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0dmVG1BdS9WT0VaZ1VNdkVPeENQcnVKODRRZ0gzdEd6amFqQmZIUXRpOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZVVVnb1JjQmlVMUxEOHk0Y2VOQnNvTDhIcDZHcUhQNUw2Z3hnL1NNeWkvU1BFVnlHeUYzNWRLWnVJbUxGVHJpaFd3dmhqR1B3ZFhlZFVPb2VMWmZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSZmhCUUhNeStVWG5PdVMyQTRNYmU2RHRoeVVmUjh2Ukxlb2JDWkU4dEhjbU53alZieUpOalFtUEVNM2RYdWtMVlBNeWN5VDVud1dkcDZrYWNQSnBBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY4NzIxNjQzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjczNDgwNzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsxOS5qc29uIjogIntcImtleURhdGFcIjpcImlJeGtjYTBkMTRWVFBDcEd0cHA4dUl1YXZNTm1kYU5veitqZlJaSkpTRGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMjU5OTYzNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3MDIyMzkwMjIyXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
