import './Counter.css'

function CounterTasks(){
    return(
        <div className="CounterTask">
            <div className='Total'>
                <h3>Total</h3>
                <p>10</p>
            </div>
            <div  className='Completed'>
                <h3>Completados</h3>
                <p>7</p>
            </div>
            <div className='Missing'>
                <h3>Faltantes</h3>
                <p>3</p>
            </div>
        </div>
        
    )
}

export {CounterTasks}