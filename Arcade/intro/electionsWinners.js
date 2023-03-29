// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an
// integer k equal to the number of voters who haven't cast their vote yet, find the
// number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate.
// If two or more candidates receive the same (maximum) number of votes, assume there is
// no winner at all.

// Example

// For votes = [2, 3, 5, 2] and k = 3, the output should be
// solution(votes, k) = 2.

function solution(votes, k)  {
  const lead = Math.max(...votes);
  const tiedCandidates = votes.filter( (value, index) => votes.indexOf(value) !== index && value === lead);
  if(tiedCandidates.length && k ===0) return 0;
  if( k === 0 ) return 1;
  let possibleWinners = 0;
  for(let i = 0; i < votes.length; i++) {
    if ((votes[i] + k) > lead) possibleWinners++;
  }
  return possibleWinners;
}
