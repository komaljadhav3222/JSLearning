var voteEligible = function(age) {
    age=+age;
    if (age<=0 || age>=130 || age==null || isNaN(age)) {
        console.log(`Invalid Data - ${age}`);
    } else {
       if (age<18) {
        console.log(`You are not eligible for voting :-  ${age}`);
       } else {
        console.log(`You are eligible for voting :-  ${age}`);
       } 
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
voteEligible("Vote");

voteEligible("infosys");