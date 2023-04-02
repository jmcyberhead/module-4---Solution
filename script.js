var names=new Array();
names[0]="lexi";
names[1]="elvira";
names[2]="beaula";
names[3]="jason";
names[4]="marrion";
names[5]="sharon";
names[6]="monique";
names[7]="cilla";
names[8]="lorenzo";
names[9]="peter";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}