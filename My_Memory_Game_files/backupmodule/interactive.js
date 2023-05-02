import { boxList2, canvas, count, identity, permOne, permTwo, pairOne, pairTwo, indexOne, indexTwo, track, genRand, firstnum, signal, runcount, identList } from './Memory game.js'
import { supporters } from './supporters.js'
// import { boxList2 } from "./boxes.js"

class Accessory {

    handleClicks() { //handles the click events for both the firstclick and subsequent clicks
        if (count < 2) {
            countList[countList.length] = count;
        } else { countList[countList.length] = countList[countList.length - 1] + 1 }
    }

    OddClick() { //handles the clicks for the odd counts
        //console.log('odd')
        indexOne[indexOne.length] = identity;
        pairOne[pairOne.length] = boxList3[identity].innerHTML;
        boxList3[identity].style.backgroundColor = 'green';
        console.log(identList)

        signal = 0
        supporters.change(signal, identity)
    }

    evenClickBase() { //handles the clicks for the even counts. Is general.
        // console.log('even')
        indexTwo[indexTwo.length] = identity;
        pairTwo[pairTwo.length] = boxList3[identity].innerHTML;
        boxList3[indexOne[0]].style.backgroundColor = 'red'
        boxList3[indexTwo[0]].style.backgroundColor = 'red'
            //boxList3[indexTwo[0]].style.zIndex = '7'
        countList[countList.length] = 0;

        signal = 0
        supporters.change(signal, identity)
            // console.log(Wstore, Hstore, identity)
    }

    sameValueDifferentIndex() { //handles the click for the odd - even count pairs that have the same value or innerHTML but different index numbers in the boxList3. Is more specific than the evenClickBase function.
        // They both have the same value but not the same 
        permOne[permOne.length] = indexOne[0];
        permTwo[permTwo.length] = indexTwo[0];
        boxList3[indexOne[0]].style.backgroundColor = 'yellow';
        boxList3[indexTwo[0]].style.backgroundColor = 'yellow';
        completed++;
    }


    sameValueSameIndex() { //handles the click for the odd - even count pairs that have the same value or innerHTML and the same index number in the boxList3. Is more specific than the evenClickBase function.
        //Same block selected two times
        boxList3[indexTwo[0]].style.backgroundColor = 'red'
            //boxList3[indexTwo[0]].style.zIndex = '5'
        countList[countList.length] = 0;
        boxList2[indexTwo[0]].style.width = `${specW-1}px`
        boxList2[indexTwo[0]].style.height = `${specH-1}px`
        signal = runcount
        supporters.change(signal, identity)
            // console.log(Wstore, Hstore, identity)s
    }

    clearPreviousTemporaryCache() { //clears the values of the temporary lists after each click event
        pairOne.splice(0, pairOne.length)
        pairTwo.splice(0, pairTwo.length)
        indexOne.splice(0, indexOne.length)
        indexTwo.splice(0, indexTwo.length)
    }

    setLocalCount() { //sets the local count
        localCount = countList[countList.length - 1];
        localCount = countList[countList.length - 1];
    }
}

let accessory = new Accessory

class Interactivity {

    click1() { //handles all click events in conjunction with functions show and click2 but is local to the render function
        canvas.addEventListener('click', function() {
            console.log(boxList2[identity])
            console.log(boxList2)
                //gets = window.getComputedStyle(boxList2[identity], null)
                //mtop = gets.getPropertyValue('margin-top')
                //mleft = gets.getPropertyValue('margin-left')
                //strtop = mtop.replace('px', '')
                //strleft = mleft.replace('px', '')
                //finaltop = (Number(strtop) + Number(boxList2[identity].style.height.replace('px', ''))) / runcount
                //finalleft = (Number(strleft) + Number(boxList2[identity].style.width.replace('px', ''))) / runcount
                // console.log(specH, specW)

            if (permOne.indexOf(identity) == -1 && permTwo.indexOf(identity) == -1) {

                accessory.handleClicks()

                accessory.setLocalCount()

                // console.log('Not in permOne and permTwo lists')
                if (localCount % 2 !== 0) {
                    genRand = Math.floor(Math.random() * 2)
                    console.log(genRand)
                    accessory.OddClick()
                } else {
                    accessory.evenClickBase()
                        //console.log(genRand)
                    if (pairOne[0] === pairTwo[0] && indexOne[0] !== indexTwo[0]) {
                        track = 6;
                        accessory.sameValueDifferentIndex()
                        complete = completed;
                    }
                    if (indexOne[0] === indexTwo[0]) {
                        track = 6;
                        accessory.sameValueSameIndex()
                    }
                    accessory.clearPreviousTemporaryCache()
                    if (genRand == 0) {
                        genRand++
                    }
                    if (genRand = 1) {
                        genRand--
                    }
                }
                // if (count <= 1) {
                //     if (genRand == 0) {
                //         Wstore = '0px'
                //         Hstore = `${specH-1}px`
                //     } else {
                //         Wstore = `${specW-1}px`
                //         Hstore = '0px'
                //     }
                // }
                // Wlist[Wlist.length] = Wstore
                // Hlist[Hlist.length] = Hstore
                if (count <= 1) {
                    firstnum = identity
                }
                identList.push(firstnum)
                identList[identList.length] = identity
                    // console.log(Wlist)
                    // console.log(Hlist)

                if (track >= 2) {
                    track = 0
                }

                console.log(firstnum)


                for (let i = 1; i <= Math.pow(num, 2); i++) {
                    if (permOne.indexOf(i) == -1 && permTwo.indexOf(i) == -1) {
                        // boxList3[i].style.zIndex = '5';
                        if (count > 1 && track == 0 && identList.indexOf(i) != -1) {
                            boxList2[i].style.width = `${specW}px`
                            boxList2[i].style.height = `${specH}px`
                                //console.log(count)
                            signal = runcount
                            console.log('track:', track)
                            supporters.change(signal, i)
                        }
                    }
                }


                if (track == 0) {
                    identList.splice(0, identList.length)
                }

                console.log(identList)



                // Wlist.splice(0, Wlist.length)
                // Hlist.splice(0, Hlist.length)
                track++
            }
        })
    }

}

let interact = new Interactivity

export { interact }