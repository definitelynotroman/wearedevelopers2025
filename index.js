(() => {
  console.clear()

  const elements = Array.from(document.querySelectorAll('#canvas div'))

  const regexRot = /rot/g;
  const rotDegrees = elements
    .map(el => Array.from(el.classList)
      .find(classEl => classEl.match(regexRot)))
    .map(rotClass => rotClass.split('-')[1])
    .map(rotDegree => parseInt(rotDegree))
  const straightRotDegreesSelector = rotDegrees
    .filter(rotDegree => rotDegree % 90 === 0)
    .filter((rotDegree, i, arr) => arr.indexOf(rotDegree) === i)
    .map(rotDegree => `.rot-${rotDegree}`).join(',')
  const straightElements = Array
    .from(document.querySelectorAll(straightRotDegreesSelector))
  const straightHeartsCount = straightElements
    .filter(el => el.innerText === '♥')
    .length
  const straightBrainsCount = straightElements
    .filter(el => el.innerText === '🧠')
    .length

  console.log('Straight hearts ♥ count:', straightHeartsCount)
  console.log('Straight brains 🧠 count:', straightBrainsCount)

  const halfBunch = window.innerWidth / 2
  const brainsRects = elements
    .filter(el => el.innerText === '🧠')
    .map(brain => brain.getBoundingClientRect())
  const heartsRects = elements
    .filter(el => el.innerText === '♥')
    .map(heart => heart.getBoundingClientRect())
  const partialLeftSideBrainsCount = brainsRects
    .filter(brainRect => brainRect.left < halfBunch)
    .length
  const partialRightSideHeartsCount = heartsRects
    .filter(heartRect => heartRect.right > halfBunch)
    .length
  const completelyLeftSideBrainsCount = brainsRects
    .filter(brainRect => brainRect.right <= halfBunch)
    .length
  const completelyRightSideHeartsCount = heartsRects
    .filter(heartRect => heartRect.left >= halfBunch)
    .length

  console.log('Brains 🧠 partially on the left side:', partialLeftSideBrainsCount)
  console.log('Brains 🧠 completely on the left side:', completelyLeftSideBrainsCount)
  console.log('Hearts ♥ partially on the right side:', partialRightSideHeartsCount)
  console.log('Hearts ♥ completely on the right side:', completelyRightSideHeartsCount)
})()
