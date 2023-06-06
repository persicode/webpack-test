import Post from './post'
import json from './assets/json'
import PeachLogo from './assets/peach.png'
import './styles/styles.css'

const post = new Post ('Webpack Post Title', PeachLogo)

console.log('Post to String:', post.toString())

console.log('JSON:',json)

// Главный js файл
// Активирует скрипт post.js, который и выводит в консоль информацию о дате и заголовок
// Этот скрипт зависит от post.js
// Так же сюда заимпорчены стили, которые с помощью лоадеров подгружаются в js
