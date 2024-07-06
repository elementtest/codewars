////given array of 'good' and 'bad' strings sort them.  0 return fail 1 to 2 return publish more than two return it's a series
const well = x => {
    const good_count = x.filter(i => i == 'good').length;
    return good_count < 1 ? 'Fail!' : 
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}
/* 
NOTES
use filter method to create a new array containing only elements with 'good' in it

it then gets it's length and stores it in the good count variable 

return good_count < 1 ? 'Fail!' : 
       good_count < 3 ? 'Publish' : 'I smell a series'

first condition good_count < 1 
    if true then fail
    if false THEN EVALUATE THE NEXT TERNARY OPERATOR
    so you can string together ternary operators it looks like 

*/

