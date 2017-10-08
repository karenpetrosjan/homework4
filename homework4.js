const triangleStars = function (height) {

    const symGen = function (symbol, count) {
        if (count === 0)
            return "";
        return symbol + symGen(symbol, count - 1);
     } 
 const loop=function (starCount, spaceCount){
        if (starCount<=0) {
            return "";
        } 
        return symGen(" ", spaceCount )+symGen("*",starCount)+"\n"+loop(starCount-2, spaceCount+1);
        
    }
    return loop(2*height-1,0);   
} 
console.log(triangleStars(4));



const pow=function(base, n) {
    if(n===0) {
     return 1;
    }
    return base*pow(base, n-1);
}
console.log(pow(2,3));


const reverse=function(str) {
const loop=function(index) {
    if (index<0) {
        return "";
    }
     return str[index]+loop(index-1);
}
return loop(str.length-1);
}
console.log(reverse("abcd"));


var checkerboard=function(size) {
    var symGen=function(symbol,width) {
        if(width===0) {
            return "";
        }
        return symbol + symGen(symbol, width - 1);
    }
     var loop=function(height) {
     if(height===size) {
         return "";
     } if (height%2) {
         return symGen(" *",size)+"\n"+loop(height+1);
     }
     return symGen("* ", size)+"\n"+loop(height+1);
    }
    return loop(0);
}
console.log(checkerboard(5));