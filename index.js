// code your solution here
// Check if a win was found and return the corresponding year otherwise return undefined
function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
  
    return winningRecord ? winningRecord.year : undefined;
}
