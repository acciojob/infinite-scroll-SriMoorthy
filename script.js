//your code here!
$input = document.getElementById('infi-list')

for (let i = 0; i < 1000; i++) {
	$list = document.createElement('li')
	$list.innerText = `Item ${i}`
	$input.appendChild($list)
}

