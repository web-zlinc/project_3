export function jump(_highLight){
    return {
        type:'mainRequested',
        highLight:_highLight,
    }
}

// types:['mainbeforeRequest','mainRequested','mainRquestedError'],
