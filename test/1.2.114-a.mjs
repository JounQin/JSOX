
'use strict';
import {JSOX} from "jsox";

/*
process.on("beforeExit", ()=>{ console.log( "EXITING" ) } );
process.on("uncaughtException",(a,b)=>{
	console.log( "test", a, b );
} );

function describe(a,b) { return b() };
function it(a,b) { return b() };
let threw = null;
function expect(a) { if( "function" === typeof a ) { try { threw = null; a(); } catch(err){threw=err}; }
					 return ({ to: {deep:{  equal(b) { console.log( "did",a,"=",b);  } }
					, equal(b) { console.log( "did",a,"=",b); }
				  , throw(a) {console.log( "Success:error?", threw ) } } }); }
*/
const input=`{accruals:{activities:[{accrual_activity_id:"L529UERozXtvH_0M",groups:[],inputs:[],name:"AM"},{accrual_activity_id:"OdbXJT5h$sX_8lLD",groups:[],inputs:[],name:"Moonlight"},{accrual_activity_id:"fh8EQzf0MPbjvyVd",groups:[],inputs:[],name:"PM"}],groups:[{accrual_group_id:"2TBJjDhGPZX3JHSY",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:63,last_accrual_id:null,last_accrual_set_id:null,name:"Bingo Ply",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"fV$H7yYVXgjAqL$9",activities:[],everyTally:null,housePercent:0,inputs:[{PackageTypeId:162,accrual_input_group_id:"ag4HSYYsT_0gjUtZ",activities:[],defaultAmount:0,fixedAmount:0,groups:[ref["accruals","groups",1]],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Pickle Ball",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0}],jackpot_id:60,last_accrual_id:null,last_accrual_set_id:null,name:"Cash Ball",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"IPtXaPZhg3gbYVF3",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:59,last_accrual_id:null,last_accrual_set_id:null,name:"Lucky 8 CD",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"l2kgvZXuwpOLWfdH",activities:[],everyTally:null,housePercent:0,inputs:[{PackageTypeId:160,accrual_input_group_id:"z2CiQ_XeXl3O9ebQ",activities:[],defaultAmount:0,fixedAmount:0,groups:[ref["accruals","groups",3]],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Fire Ball",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0}],jackpot_id:64,last_accrual_id:null,last_accrual_set_id:null,name:"CBB",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"n15h_5PJE9TbDN83",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:58,last_accrual_id:null,last_accrual_set_id:null,name:"Lucky 7 CD",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"TUXyT$nRcDJzV4D6",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:62,last_accrual_id:null,last_accrual_set_id:null,name:"Bonus Ball",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"Tv7m5nbS4$h528oC",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:65,last_accrual_id:null,last_accrual_set_id:null,name:"Bonus Ball JP",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"Uj32Q7pabJELEKi9",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:66,last_accrual_id:null,last_accrual_set_id:null,name:"April Bonus Ball",pricePerPack:null,startingValue:null,thresholds:[]},{accrual_group_id:"WcHz_$5Sze2mqKeM",activities:[],everyTally:null,housePercent:0,inputs:[],jackpot_id:61,last_accrual_id:null,last_accrual_set_id:null,name:"Cash Ball Frenzy",pricePerPack:null,startingValue:null,thresholds:[]}],inputs:[ref["accruals","groups",1,"inputs",0],{PackageTypeId:161,accrual_input_group_id:"H81eUVnbPyWO8WZ4",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"4 Corners",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0},{PackageTypeId:164,accrual_input_group_id:"I4UehKHUKh_9MP3W",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Power Up+",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0},{PackageTypeId:159,accrual_input_group_id:"PMGEywf7t0VQC19p",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Bonus Ball",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0},{PackageTypeId:153,accrual_input_group_id:"QE3JUY3Wyp$XI0d$",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"JPTest",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0},{PackageTypeId:157,accrual_input_group_id:"wzqxhnOHZM3c1w6J",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Jackpot Test",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0},ref["accruals","groups",3,"inputs",0],{PackageTypeId:163,accrual_input_group_id:"__2iVgZCeG4aGep4",activities:[],defaultAmount:0,fixedAmount:0,groups:[],isDaily:0,isIncrements:0,isWeekly:0,minimum:0,name:"Hawk Ball",scalePrice:0,sqlStatement:null,useDefault:0,useMinimum:0,useScalePrice:0}]},op:"accruals"}`;

describe('Added in 1.2.114-a (cjs)', function () {



	it( 'handles ref revivals(3)', function() {

		const obj = JSOX.parse( input );
		const tst = JSOX.stringify(obj);

		expect( input ).to.equal( tst );

	} );
        
} );
