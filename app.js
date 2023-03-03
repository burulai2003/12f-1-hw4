const projectA = document.getElementById('container')
const projectB = document.getElementById('container1')
const projectC = document.getElementById('container2')
const projectD = document.getElementById('container3')
const projectE = document.getElementById('container4')
const projectF = document.getElementById('container5')


const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const total = data[0]
    const total1 = data[1]
    const total2 = data[2]
    const total3 = data[3]
    const total4 = data[4]
    const total5 = data[5]


    console.log(total);

    projectA.innerHTML = `<h2>1</h2> <b>name:</b>: ${total.name} <br> <b>phone: </b>${total.phone}<b><br>username:</b>${total.username}<br>
                                            <b>website:</b>${total.website}<br><b>email: </b>${total.email}`

    projectB.innerHTML = `<h2>2</h2> <b>name:</b>: ${total1.name} <br><b>phone: </b>${total1.phone}<br><b>
                                               username:</b>${total1.username}<br><b>website:</b>${total1.website}<br><b>email:</b>${total1.email}`

    projectC.innerHTML = ` <h2>3</h2><b>name:</b>: ${total2.name} <br><b>phone: </b>${total2.phone}<br><b>username:</b>${total2.username}<br>
                                      <b>website:</b>${total2.website}<br><b>email:</b>${total2.email} `

    projectD.innerHTML = `<h2>4</h2> <b>name:</b>: ${total3.name} <br><b>phone: </b>${total3.phone}<br><b>username:</b>${total3.username}<br>
                                       <b>website:</b>${total3.website}<br><b>email:</b>${total3.email} `

    projectE.innerHTML = `<h2>5</h2> <b>name:</b>: ${total4.name} <br><b>phone: </b>${total4.phone}<br><b>username:</b>${total4.username}<br>
                                             <b>website:</b>${total4.website}<br><b>email:</b>${total4.email} `

    projectF.innerHTML = `<h2>6</h2> <b>name:</b>: ${total5.name} <br><b>phone: </b>${total5.phone}<br><b>username:</b>${total5.username}<br>
                                              <b>website:</b>${total5.website}<br><b>email:</b>${total5.email} `


}
getData()