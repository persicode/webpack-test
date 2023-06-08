import * as $ from 'jquery'
import Post from '@models/post'
import json from './assets/json'
import PeachLogo from '@/assets/peach.png'
import './styles/styles.css'

const post = new Post ('Webpack Post Title', PeachLogo)

$('pre').html(post.toString())

console.log('JSON:',json)

// Главный js файл
// Активирует скрипт post.js, который и выводит в консоль информацию о дате и заголовок
// Этот скрипт зависит от post.js
// Так же сюда заимпорчены стили, которые с помощью лоадеров подгружаются в js
