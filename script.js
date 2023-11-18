let data=[
    {name:"john", age:27 ,profession :"developer"},
    { name:"jane",age:24 ,profession:"admin"},
];
function printdeveloper(){
    data.forEach(
        (person)=>{
            if(person.profession==="developer"){
                console.log(person);
            }
        }
    )
}
function adddata(){
    let newname=prompt("Enter new name");
    let newage=parseInt(prompt("enter new age"));
    let newprofession=prompt("Enter the new profession");
    data.push({
        name:newname,
        age:newage,
        profession:newprofession
    });
    console.log(data);
}
function removeadmin(){
    data=data.filter((person)=>person.profession !="admin");
    console.log(data);
}
function concentratearray(){
    let dummyarray=[
        { name:"abc",age:34,profession:"fd"},
        {name:"ffgfd" ,age:56,profession:"gf"}
    ]
    let combinearray=data.concat(dummyarray);
    console.log(combinearray);
}
function avaerageage() {
    let aver=0;
    data.forEach((person)=>{
        aver+=person.age;
    })
    console.log(aver/data.length);
}
function checkAgeAbove25(){
    let count =data.some((person) =>person.age >25);
    console.log(count?"yes" :"no");
}


function uniqueProfession(){
    let perfarray=[];
  data.forEach((person) =>{ 
     if(!perfarray.includes(person.profession)){
      perfarray.push(person.profession);
     }
    })
    console.log(perfarray);
}
function sortbyAge(){
    data.sort((a,b) =>a.age-b.age);
    console.log(data);
}
function  updateJohnsperofession(){
    data.forEach((person) =>{
        if(person.name=="john"){
            person.profession="manager";
        }
    })
    console.log(data);
}
 function getTotalProfession(){
     let devcount=data.filter((person) =>person.profession== "developer");
     let admincount=data.filter((person) => person.profession=="admin");
     console.log( devcount.length);
     console.log(admincount.length);
 }


