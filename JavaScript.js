let post = document.getElementById('post')
let input1 = document.getElementById('ContentInput')
let input2 = document.getElementById('getInput')

post = addEventListener('click', (e)=>{
	input2.value = input1.value
})