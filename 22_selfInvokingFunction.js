(function(n1,n2) {
    console.log(`addition is = `, n1+n2);
})(10,10);

(function(){
    console.log(' Inside IIFE ');
})()

let fe=(function(){
    console.log(' Inside IIFE ');
})()