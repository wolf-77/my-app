// Import our custom CSS
import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { Share } from '@capacitor/share';

var joke_text = '', share_button
document.querySelector('.search-btn').addEventListener('click', () =>{
    fetch('https://api.chucknorris.io/jokes/random')
        .then(data => data.json())
        .then(data => {
            joke_text = data['value']
            document.getElementById('joke').innerHTML = `
                <p>${joke_text}😂</p>
                <button id="share" type="button" class="btn btn-warning">Share joke</button>
            `
            document.getElementById('share').addEventListener('click', async() => {
                await Share.share({
                    text: joke_text,
                })
            })
        })
})