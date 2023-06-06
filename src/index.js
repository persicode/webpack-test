import Post from './post'
import './styles/styles.css'

const post = new Post ('Webpack Post Title')

console.log('Post to String:', post.toString())

// Главный js файл
// Активирует скрипт post.js, который и выводит в консоль информацию о дате и заголовок
// Этот скрипт зависит от post.js