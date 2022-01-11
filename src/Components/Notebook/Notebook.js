import "./Notebook.css"

const Notebook = ({notes: {model, price, img}}) => {
    return (
        <div className={'item'}>
            <h2>{model}</h2>
            <h3>price {price}$</h3>
            <img className={'itemImg'} src={img} alt={'Apple'}/>
        </div>
    )
}

export default Notebook