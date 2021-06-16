const sagFullCalc=(E,A,l,bd,g,gd)=>{
	let Ld=l*(1+(8/3)*(bd/l)**2);
	let aa=16*(bd/l)*(5-24*(bd/l)**2);
	let bb=15+40*(bd/l)**2+288*(bd/l)**4;
	let bi=1.05*bd;
	do{
		let beta=Math.atan((4*bi)/l);
		let Hi=(g*l**2)/(8*bi);
		let Ti=Hi*(1+16*(bi/l)**2)**(1/2);
		let DLi=((2*Hi+Ti)*Ld)/(3*E*A)*(g-gd)/g;
		bip=bi;
		bi=(15*DLi)/aa+bd;
		console.log(bi);
	}while (Math.abs(bi-bip)>0.005);
	return bi;



}
E=200;
A=560*4;
sagFullCalc(E,A,141.4,15.65,5.408,1.522);