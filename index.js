function superbowlWin(array){
    const football = array.find(array => array.result === 'W')
    return !!football ? football.year : undefined
}