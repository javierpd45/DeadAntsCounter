const antChain = '...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t';

deadAntCounter = function(antChain) 
{
        let deadAnts = antChain.replaceAll('ant', '');

        let heads = deadAnts.match(/a/g).length;
        let bodys = deadAnts.match(/n/g).length;
        let tails = deadAnts.match(/t/g).length;

        let totalDeadAnts = Math.max(heads, bodys, tails);
        return totalDeadAnts;
}

let totalDead = deadAntCounter(antChain);
console.log("The amount of dead ants is: " + totalDead);