import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

// 		function handleClick() {
// 	if (careType === "light" && scaleValue < 2) {
// 		alert("Votre plante a besoin de peu de lumière")
// 	} else if (careType === 'light' && scaleValue === 2) {
// 		alert("Votre plante a besoin de lumière modérément")
// 	} else if (careType === 'light' && scaleValue > 2) {
// 		alert("Votre plante a besoin de beaucoup de lumière")
// 	} else if (careType === 'water' && scaleValue < 2) {
// 		alert("Votre plante a besoin de peu d'eau") 
// 	} else if (careType === 'water' && scaleValue === 2) {
// 		alert("Votre plante a un besoin d'eau modéré")
// 	} else if (careType === 'water' && scaleValue > 2) {
// 		alert("Votre plante a un besoin en eau important")
// 	}
// }
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
	return (
		<div onClick={() =>
			alert(
				`Cette plante requiert ${quantityLabel[scaleValue]} ${
					careType === 'light' ? 'de lumière' : "d'arrosage"
				}`
			)
		}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale