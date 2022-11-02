let lab1=[5,5,0,0,5,0,10];
let lab2=[5,5,5,5,4,5,10];
let lab3=[5,10,10,15];
let lab45=[10,5,5,5,5,5,8,10,10,10,0];
let lab6=[5,5,10,5,5,10];
let lab8=[5,10,10,10,5];
let quiz1=[32];
let summa=[];
let sum=0;
let totalscore=0;
function get_sum(lab)
{
	for (i=0;i<lab.length;i++)
	{
		sum+=lab[i];
	}
	summa.push(sum);
	sum=0;
	const results=
	{
		lab1,
		lab2,
		lab3,
		lab45,
		lab6,
		lab8,
		quiz1,
		summa
	}
	return results;
}
function summation()
{
	return get_sum(lab1),get_sum(lab2),get_sum(lab3),get_sum(lab45),get_sum(lab6),get_sum(lab8),get_sum(quiz1)
}
console.log(summation())
function total()
{
	totalscore=(summa[0]+summa[1]+summa[2]+summa[3]+summa[4]+summa[5])*60/280+summa[6];
	const result=
	{
		totalscore
	}
	return result;
}
function main()
{
	return total()
}
console.log(main())