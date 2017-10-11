// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"gold","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"200","Actor MaxHP":"99999999","Actor MaxMP":"99999999","Actor Parameter":"99999999","Enemy MaxHP":"99999999","Enemy MaxMP":"99999999","Enemy Parameter":"99999999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"42","Icon Width":"40","Icon Height":"40","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"Lohengrin_Icon","status":true,"description":"图标插件","parameters":{}},
{"name":"Lohengrin_ExData","status":true,"description":"","parameters":{}},
{"name":"Lohengrin_MasterEnemy","status":true,"description":"","parameters":{}},
{"name":"Lohengrin_DamageFilter","status":true,"description":"","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.44 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"spd","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"129","Physical Animation":"129","Magical Animation":"129","Enemy Attack Animation":"1","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"自身","Ally Help Text":"友军","Allies Help Text":"友军","Enemy Help Text":"敌人","Enemies Help Text":"敌人","All Help Text":"全部","Random Help Text":"%2 随机 %1 个","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"false","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"Lohengrin_MasterState","status":true,"description":"","parameters":{}},
{"name":"Rholin_InstantAction","status":true,"description":"","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.27 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"0","Max Armors":"0","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"0","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.16 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"完成","Remove Text":"清除","Remove Icon":"remove","Empty Text":"无","Empty Icon":"empty","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_BattleAICore","status":true,"description":"v1.07 This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Element Testing":"false","Default AI Level":"100"}},
{"name":"Lohengrin_ItemRarity","status":true,"description":"置于 Yanfly Item Core 之下","parameters":{}},
{"name":"Lohengrin_EventResponse","status":true,"description":"","parameters":{}},
{"name":"MOG_DmgPopupEffects","status":true,"description":"(v1.0) Adiciona alguns efeitos nos sprites do dano.","parameters":{"Duration":"90","PopUp Type":"0","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"MOG_HPGauge","status":true,"description":"(v1.0) Apresenta um medidor de HP do alvo.","parameters":{"Gauge For Actors":"false","Gauge For Enemies":"true","Show HP On Selection":"true","Fade Duration":"90","Slide Animation":"true","Show HP Number Actor":"false","Show HP Number Enemy":"true","Required to Kill":"false","Actor Layout X-Axis":"0","Actor Layout Y-Axis":"0","Actor Meter X-Axis":"0","Actor Meter Y-Axis":"3","Actor HP Number X-Axis":"-25","Actor HP Number Y-Axis":"-22","Enemy Layout X-Axis":"0","Enemy Layout Y-Axis":"0","Enemy Meter X-Axis":"8","Enemy Meter Y-Axis":"10","Enemy HP Number X-Axis":"-25","Enemy HP Number Y-Axis":"-19"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.08 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"null","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"true","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"TWDP_BaseWindowEx","status":true,"description":"v1.00 Extend the show message window.","parameters":{"Use TWD Window Skin":"true","Default Window Skin":"","User Window Meta":"{}","Enable Window Stacking":"true"}},
{"name":"TWDP_ShowMessageEx","status":true,"description":"v1.00 Extend the show message window.","parameters":{"---------- Parameters ----------":"","Auto Wrap":"true","---------- Skins ----------":"","Text Window Skin":"swd3_dialog_window","Text Window Skin For None Fuki":"-","Name Window Skin":"swd3_name_window","Name Window Skin For None Fuki":"-","Gold Window Skin":"","Choice Window Skin":"","Number Window Skin":"","Item Window Skin":"","---------- Metas ----------":"","Text Window Meta":"{}","Name Window Meta":"{}","Gold Window Meta":"{}","Choice Window Meta":"{}","Item Window Meta":"{}","Number Window Meta":"{}"}},
{"name":"FixParam","status":true,"description":"","parameters":{}}
];
