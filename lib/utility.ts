async function radioSelect(id) {
  console.log('radioSelect : ', id)
  const rd = document.getElementById(id)
  if (rd.checked === true) {
    const response = await fetch('http://localhost:3000/api/cars/', {
      method: 'POST', // *GET, POST, PUT, DELETE 등
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ name: rd.value }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    })
    // const result = await response.json()
    // console.log('radioSelect : ', result)
    const result = await getHistory()
    console.log('getHistory', result)
    printHistory('editme', result)
  }
}

async function reload() {
  const result = await getHistory()
  console.log('getHistory', result)
  printHistory('editme', result)
}
reload()

async function getHistory() {
  const response = await fetch('http://localhost:3000/api/cars/', {
    method: 'GET', // *GET, POST, PUT, DELETE 등
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
  const result = await response.json()
  return result
}

function printHistory(id, result) {
  const pr = document.getElementById(id)
  result.sort(function(a, b) {
    if(a.createdAt > b.createdAt) {
      return -1
    }
    if(a.createdAt < b.createdAt) {
      return 1
    }
    return 0
  })
  pr.innerHTML = result.map(res=>{
    console.log('res.name', res.name)
    return `<p>${res.printCreatedAt} ${res.name}</p>`
  })
}
