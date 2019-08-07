var okawari_cent = 265;
var ACTION_TIMES = 3;
class Action {
	constructor(a){
		console.log("ok");
		this.acterPosition = a;				
	}
	get ActerPosition(){
		return this.acterPosition;
	}
	set ActerPosition(num){
		this.acterPosition = num;
	}			
};
var actionList = [];
actionList[0] = new Action(9);
document.write("おかわり：" + okawari_cent/100);
