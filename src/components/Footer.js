import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer(cart, updateCart) {
	const [inputValue, setInputValue] = useState('')

	// useEffect(() => {
	// 	console.log(`Cette alerte s'affiche à chaque rendu du footer`);
	// })	
	// useEffect(() => {
	// 	console.log(`Cette alerte s'affiche au premier rendu du footer`);
	// }, [])
	// useEffect(() => {
	// 	console.log(`Cette alerte s'affiche la première fois et quand le panier est mis à jour`);
	// }, [cart])

	useEffect(() => {
		return () => console.log(`Cette alerte s'affiche quand le footer est retiré du DOM`);
	})
	function handleInput(e) {
		setInputValue(e.target.value)	
	}
	function handleBlur() {
		if (!inputValue.includes('@')) { // pas une adresse email
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
		}
	  };

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input 
				placeholder='Entrez votre mail'
			 	value={inputValue} 
				onChange={handleInput}
				onBlur={handleBlur}></input>
		</footer>
	)
}

export default Footer