//Ratiorg got statues of different sizes as a present from CodeMaster
// for his birthday, each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from
// smallest to largest so that each statue will be bigger than the previous
// one exactly by 1. He may need some additional statues to be able to
// accomplish that. Help him figure out the minimum number of additional
// statues needed.

//For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

function makeArrayConsecutive2(statues) {
    var counter = 0;
    statues.sort((a,b)=>a-b);
    console.log('sorted statues', statues);
    for(var i =0; i<statues.length; i++){
        if(statues[i+1]){
            if((statues[i]+1) !== statues[i +1]){
                var difference = statues[i+1] - statues[i];
                counter += difference - 1;
            }
        }
    }
    return counter;
}
