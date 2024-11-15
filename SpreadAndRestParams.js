function Hello(...restparam) {
    console.log(restparam)
}

Hello(3,1,23,4);


var myName = ["ramesh" , "naresh" , "rejesh"];
var newArr = [...myName ,"react" , 27];
console.log(newArr) ; // ["ramesh" , "naresh" , "rejesh" , "react" , 27 ] ;
Hello(3,1,23,4,);



