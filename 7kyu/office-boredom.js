// given an object list of individuals and jobs (departments) return a boredom score associated with 
// a message based on the score.  
function boredom(staff) {
    const obb = Object.values(staff);
    let totalValue = 0;

    obb.forEach(department => {
        let value;
        switch (department) {
            case "accounts":
                value = 1;
                break;
            case "finance":
                value = 2;
                break;
            case "canteen":
                value = 10;
                break;
            case "regulation":
                value = 3;
                break;
            case "trading":
                value = 6;
                break;
            case "change":
                value = 6;
                break;
            case "IS":
                value = 8;
                break;
            case "retail":
                value = 5;
                break;
            case "cleaning":
                value = 4;
                break;
            case "pissing about":
                value = 25;
                break;
            default:
                value = 0;
                break;
        }
        totalValue += value; // Update totalValue inside the loop
    });
    return  totalValue > 100 ? 'party time!!' 
        : (totalValue > 80 && totalValue < 100) ?
        'i can handle this' : 'kill me now'
}

/*
function boredom(staff){
   var map = {
     accounts:1,
     finance:2,
     canteen:10,
     regulation:3,
     trading: 6,
     change:6,
     IS:8,
     retail:5,
     cleaning:4,
     'pissing about':25
   };

   var score = Object.keys(staff).reduce(
     function(a,b){       
       return a+map[staff[b]]
    },0); 

   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}
*/


