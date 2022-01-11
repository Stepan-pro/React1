import Notebook from "../Notebook/Notebook";
import './Notebooks.css'

const notebooks = [
    {
        id:1,
        model: 'iPad Pro',
        price: 1000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz3SMHaKxf8me7N_bW6aQbiuQIGzJvUrrBuNLC8FV3diTuHLwBPETWYAvOcnmxwe8PgU&usqp=CAU'
    },
    {
        id:2,
        model: 'iPhone 13 Pro',
        price: 1450,
        img: 'https://hotline.ua/img/tx/298/298912180_s265.jpg'
    },
    {
        id:3,
        model: 'Airpods 2',
        price: 500,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYPTS1FhCCbfG5qk5Uedz3FGPC1MyxbSu3A&usqp=CAU'
    },
    {
        id:4,
        model: 'MacBook Pro',
        price: 1310,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHGhAxXlzVNYouFn2DZP6fPfF7BS4D-20nQ&usqp=CAU'
    },
    {
        id:5,
        model: 'Apple Watch se',
        price: 420,
        img: 'https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg'
    },
    {
        id:5,
        model: 'Apple Watch se',
        price: 420,
        img: 'https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg'
    },
    {
        id:5,
        model: 'Apple Watch se',
        price: 420,
        img: 'https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg'
    },
    {
        id:5,
        model: 'Apple Watch se',
        price: 420,
        img: 'https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large.jpg'
    },
]

const Notebooks = () => {
  return(
      <div className={'disFlex'}>
          {notebooks.map(notebook => <Notebook notes={notebook}/>)}
      </div>
  )
}

export default Notebooks